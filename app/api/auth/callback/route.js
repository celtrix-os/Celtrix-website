export const runtime = "nodejs"; // ✅ important for Mongoose

import dotenv from "dotenv";
import User from "../../../../models/User.js";
import connectToDB from "../../../../lib/db.js";
dotenv.config();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  try {
    console.log("🔄 Exchanging code for access token...");

    // 1️⃣ Exchange code for token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (tokenData.error) {
      console.error("❌ Token error:", tokenData);
      return new Response(JSON.stringify(tokenData), { status: 400 });
    }

    const accessToken = tokenData.access_token;

    // 2️⃣ Fetch user profile + emails
    const [userResponse, emailResponse] = await Promise.all([
      fetch("https://api.github.com/user", { headers: { Authorization: `Bearer ${accessToken}` } }),
      fetch("https://api.github.com/user/emails", { headers: { Authorization: `Bearer ${accessToken}` } }),
    ]);

    const userData = await userResponse.json();
    const emails = await emailResponse.json();
    const primaryEmail = emails.find((e) => e.primary)?.email || null;
      

    const profile = {
      name: userData.name || userData.login,
      avatar: userData.avatar_url,
      username: userData.login,
      email: primaryEmail,
      access_token: accessToken,
    };

    console.log("👤 GitHub Profile:", profile);
    console.log("🔑 Access Token:", accessToken ? "Present" : "Missing");
    console.log("🔑 Profile Access Token:", profile.access_token ? "Present" : "Missing");

    // 3️⃣ Save to DB
    await connectToDB();

    if (!profile.email) console.log(" GitHub user has no public email");

    const existingUser = await User.findOne({ email: profile.email });
    if (!existingUser) {
      console.log("Creating new user with data:", JSON.stringify(profile, null, 2));
      const newUser = await User.create(profile);
      console.log("New user created:", JSON.stringify(newUser, null, 2));
      console.log("✅ New user created:", profile.email);
      console.log("🔑 Saved Access Token:", newUser.access_token ? "Present" : "Missing");
    } else {
      console.log("ℹ️ Existing user found:", existingUser.email);
      console.log("🔑 Current DB Access Token:", existingUser.access_token ? "Present" : "Missing");
      
      console.log("Updating with access token:", profile.access_token);
      const updateResult = await User.updateOne(
        { email: profile.email },
        { $set: { access_token: profile.access_token } }
      );
      console.log("🔑 Update Result:", updateResult);
      
      // Verify the token was saved
      const updatedUser = await User.findOne({ email: profile.email });
      console.log("Updated user data:", JSON.stringify(updatedUser, null, 2));
      console.log("🔑 Final DB Access Token:", updatedUser.access_token ? "Present" : "Missing");
    }

    return Response.redirect(
      `${process.env.SITE_URL}/profile?profile=${encodeURIComponent(JSON.stringify(profile))}`
    );

  } catch (error) {
    console.error("❌ Error saving user:", error);
    return new Response(JSON.stringify({ message: "Error saving user" }), { status: 500 });
  }
}

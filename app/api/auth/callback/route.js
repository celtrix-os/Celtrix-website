import dotenv from "dotenv";
dotenv.config();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  // 1️⃣ Exchange the code for an access token
  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return new Response(JSON.stringify(tokenData), { status: 400 });
  }

  const accessToken = tokenData.access_token;

  // 2️⃣ Use the token to get the user's GitHub profile
  const userResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const userData = await userResponse.json();

  // Optional: Get email (needs separate call because email can be private)
  const emailResponse = await fetch("https://api.github.com/user/emails", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const emails = await emailResponse.json();

  const primaryEmail = emails.find((e) => e.primary)?.email || null;

  // 3️⃣ Combine the user info
  const profile = {
    name: userData.name || userData.login,
    avatar: userData.avatar_url,
    username: userData.login,
    email: primaryEmail,
  };

  // 4️⃣ Display it as JSON
  return Response.redirect(`http://localhost:3000/profile?profile=${JSON.stringify(profile)}`)
}
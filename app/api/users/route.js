import connectToDB from "../../../lib/db.js";
import User from "../../../models/User.js";

export async function GET() {
  await connectToDB();
  const users = await User.find();
  return Response.json("Hello"); // ✅ use Response.json, not Response.send
}

export async function POST(request) {
  await connectToDB();

  const  {name, avatar, username, email} = await request.json();
  const user = await User.create({name, avatar, username, email});
  return new Response(JSON.stringify({message:"User created successfully"}), {status: 201});
}

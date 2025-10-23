import dotenv from "dotenv";
dotenv.config();

export async function GET() {
  console.log("Client ID:", process.env.GITHUB_CLIENT_ID);

  const redirect_uri = "http://localhost:3000/api/auth/callback";
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=repo%20user`;

  return Response.redirect(githubAuthUrl);
}
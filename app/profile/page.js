"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Profile() {
  const searchParams = useSearchParams();
  const profileParam = searchParams.get("profile");

  if (!profileParam) {
    return <p className="p-4 text-center">Loading profile...</p>;
  }

  // Parse JSON string
  const profile = JSON.parse(profileParam);
  const { name, username, avatar, email } = profile;

  return (
    <div className="flex bangers-regular flex-col items-center p-8">
      <Image
        src={avatar || "/default-avatar.png"}
        alt="GitHub Avatar"
        width={100}
        height={100}
        className="rounded-full shadow-lg"
      />
      <h1 className="text-2xl tracking-wider font-bold mt-4">{name}</h1>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}

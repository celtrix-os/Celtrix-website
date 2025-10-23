"use client";
export const dynamic = "force-dynamic";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Profile() {
  const searchParams = useSearchParams();
  const profileParam = searchParams.get("profile");

  if (!profileParam) {
    return <p className="p-4 text-center">Loading profile...</p>;
  }

  // Parse JSON string
  const profile = JSON.parse(profileParam);
  const { name, username, avatar, email } = profile;

  const handleLogout = () => {
    // Clear the profile from localStorage
    localStorage.removeItem('github-session');
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <div className="flex bangers-regular flex-col items-center p-8 gap-12 md:gap-44">
      <div className="w-full md:flex md:flex-row lg:flex lg:flex-row fixed-top border-1 border-gray-800 p-2 z-50 rounded-2xl">        
        <Navbar/>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="border-1 border-gray-500 p-2.5 rounded-1xl">
          <Image
            src={avatar || "/default-avatar.png"}
            alt="GitHub Avatar"
            width={380}
            height={380}
            className="rounded-1xl shadow-lg"
            />
        </div>

        <div className="flex flex-col gap-7">
          <div>
            <h1 className="text-2xl text-gray-500"><span className="text-green-500">&gt; &gt; &gt; </span> Init Profile</h1>
            <h1 className="lg:text-7xl md:text-6xl text-5xl tracking-wider font-bold mt-4">Hello, <span className="text-green-500">{name}</span></h1> 
          </div>
          <div className="flex flex-row gap-2 tracking-wide">
            <Link className="text-1xl md:text-2xl  border-1 text-black  p-2 rounded-1xl bg-green-400" href="">Edit Profile</Link>
            <Link onClick={handleLogout} className="text-1xl md:text-2xl border-1 border-black p-2 rounded-1xl bg-red-400" href="">Logout</Link>
          </div>
          <div className="text-2xl text-gray-400">
            <h1>You are ready to setup your project <span className="text-indigo-400 tracking-wider">seamlessly</span>, Run <span className="text-green-500 underline">npx celtrix</span></h1>
          </div>
        </div>
      </div>

     

      
      
    </div>
  );
}

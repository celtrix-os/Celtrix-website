"use client";

import Image from "next/image";
import "./globals.css";
import logo from "../public/celtrix-text-logo.png";
import Left from "./components/left";
import Github from "./components/github";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import { useRouter } from 'next/navigation';
import Button from './components/getstarted'; 
import FindUsHere from './components/findushere';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is logged in (has a profile in localStorage)
    const profile = typeof window !== 'undefined' ? localStorage.getItem('githubProfile') : null;
    if (profile) {
      router.push(`/profile?profile=${encodeURIComponent(profile)}`);
    }
  }, [router]);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bangers-regular gap-8 md:gap-12 lg:gap-16">
      {/* nav-section */}
      <div className="w-full md:flex md:flex-row lg:flex lg:flex-row fixed-top border-1 border-gray-800 p-2 z-50 rounded-2xl">
         <Navbar/>
      </div>

      {/* Hero Section 1 */}

      <div className="flex flex-col justify-center align-center lg:flex-row gap-8 md:gap-10 lg:gap-16 xl:gap-24 ">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-4xl">
          <div className="text-4xl md:mt-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-center sm:text-left">
            <h1>Setup Web apps in <span className="text-green-500"> seconds,</span> Not in <span className="text-red-500">hours</span></h1>  
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed hidden sm:block">
            <span className="text-green-500">Celtrix</span> – an open-source scaffolding tool that helps you <span className="text-fuchsia-400">set up full-stack projects</span> instantly with one command. Whether it&apos;s <span className="text-green-500">MERN</span>, <span className="text-red-500">MEAN</span>, <span className="text-blue-500">Nextjs</span>, or other popular stacks, you can scaffold everything with just <span className="text-yellow-500">one command.</span>
          </p>
          
          <div className="block sm:hidden">
            <p className="text-base text-center sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed">
              <span className="text-green-500">Celtrix</span> – an <span className="text-red-400">open-source</span> scaffolding tool that helps you <span className="text-fuchsia-400">set up full-stack projects</span> instantly with <span className="text-yellow-500">one command.</span>
            </p>
          </div>
          
          <div className="w-full flex justify-center sm:justify-start mt-2">
            <a
              className="flex items-center justify-center gap-2 text-black py-3 px-2.5 cursor-pointer rounded-full w-full sm:w-auto tracking-wide text-lg md:text-xl transition-colors duration-300 transform  max-w-xs sm:max-w-none">

          <Button />
          </a>
          </div>
        </div>

        {/* Right side - Terminal */}
        <div className="hidden sm:flex flex-1 items-center justify-center lg:justify-end">
          <div className=" max-w-3xl">
            <Left />
          </div>
        </div>

      </div>

      {/* Hero Section 2*/}
      <div className="flex mb-1.5 flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-24 w-full justify-center">
        <h1 className="text-4xl md:mt-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center sm:text-left">One command = Setup <span className="text-green-500">frontend, </span><span className="text-red-500">backend, </span><span className="text-yellow-500">DB</span></h1>
      </div>

      {/* <hr className="text-gray-500"/> */}
      
      <div className="flex sm:flex-row flex-col justify-around items-center gap-6 p-4 bg-green-500 sm:gap-20">
        <div className="text-center items-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-9xl lg:text-8xl custom-text-border text-black">Find us here</h1>
          <p className="text-1xl sm:text-3xl text-black">Connect with us and suggest ideas !</p>
        </div>

        <div>
          <FindUsHere />
        </div>
      </div>

      {/* <hr className="text-gray-500"/> */}

      
    </div>
  );
}

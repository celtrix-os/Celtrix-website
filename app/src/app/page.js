"use client";

import Image from "next/image";
import "./globals.css";
import logo from "../../public/celtrix-text-logo.png";
import Left from "./components/left";
import Github from "./components/github";
import { useState } from "react";
import Bg from "./components/bg";
import Link from "next/link";
import Discord from "./components/discord";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bangers-regular gap-16 md:gap-24 lg:gap-[120px]">
      {/* nav-section */}
      <Bg/>
      <div className="w-full md:flex fixed-top-0 md:flex-row lg:flex lg:flex-row border-1 border-gray-800 p-2 z-50 rounded-2xl">
        <nav className="flex flex-row md:flex md:flex-row lg:flex lg:flex-row justify-between items-center gap-4 sm:gap-0 w-full">
          <button className="flex items-center gap-0 tracking-wider text-green-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl whitespace-nowrap">
            <Image src={logo} alt="Celtrix" width={160} height={150} />
          </button>
          <button onClick={() => {setOpen(!open)}} className="text-green-500 text-2xl md:hidden">𓃑</button>
        </nav>
          
        <ul className={`${open ? "flex flex-col mt-2" : "hidden"} md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl`}>
          <button className="hover:text-green-500 transition-colors cursor-pointer">Home</button>
          <button className="hover:text-green-500 transition-colors cursor-pointer">About</button>
          <a href="https://github.com/celtrix-os/Celtrix" className="cursor-pointer"><Github/></a>
          <Discord/>
        </ul>
        
         
      </div>

      {/* Hero Section 1 */}

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 xl:gap-24 w-full justify-center">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-4xl">
          <div className="text-4xl md:mt-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-center sm:text-left">
            <h1>Setup Web apps in <span className="text-green-500"> seconds,</span> Not in <span className="text-red-500">hours</span></h1>
            
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed hidden sm:block">
            <span className="text-green-500">Celtrix</span> – an open-source scaffolding tool that helps you <span className="text-white">set up full-stack projects</span> instantly with one command. Whether it&apos;s <span className="text-green-500">MERN</span>, <span className="text-red-500">MEAN</span>, <span className="text-blue-500">Nextjs</span>, or other popular stacks, you can scaffold everything with just <span className="text-yellow-500">one command.</span>

          </p>

          <div className="block sm:hidden">
            <p className="text-base text-center sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed">
              <span className="text-green-500">Celtrix</span> – an <span className="text-red-400">open-source</span> scaffolding tool that helps you <span className="text-fuchsia-400">set up full-stack projects</span> instantly with <span className="text-yellow-500">one command.</span>
            </p>
          </div>
          
          <div className="w-full flex justify-center sm:justify-start mt-2">
            <button className="bg-green-500 hover:bg-green-600 text-black py-3 px-8 cursor-pointer rounded-full w-full sm:w-auto tracking-wide text-lg md:text-xl transition-colors duration-300 transform hover:scale-105 max-w-xs sm:max-w-none">
              Get Started
            </button>
          </div>

          <Link href="/docs">Get Started</Link> 
        </div>

        {/* Right side - Terminal */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-2xl">
            <Left />
          </div>
        </div>

      </div>

      {/* Hero Section 2*/}
      <div className="flex mb-1.5 flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 xl:gap-24 w-full justify-center">
        <h1 className="text-4xl md:mt-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center sm:text-left">One command = Setup <span className="text-green-500">frontend, </span><span className="text-red-500">backend, </span><span className="text-yellow-500">DB</span></h1>
      </div>

      {/* Hero Section 3*/}
      <div>
        <div>
          <h1></h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

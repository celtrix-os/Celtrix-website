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
import Script from "next/script";

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}></div>
      </div>
      
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bangers-regular gap-8 md:gap-12 lg:gap-16 relative z-10">
      {/* nav-section */}
      <div className="w-full md:flex md:flex-row bg-black/60 backdrop-blur-lg lg:flex lg:flex-row fixed-top border-1 border-gray-900 shadow-gray-800  p-2 z-50 rounded-[8px]">
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
            <a href="/api/auth/github"
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
      

      {/* <hr className="text-gray-500"/> */}

      {/* Community Section */}
      <div className="flex flex-col items-center gap-12 p-8 lg:p-12 backdrop-blur-xl rounded-3xl border bg-transparent border-gray-700/50 shadow-2xl">
        {/* Header */}
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-blue-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-blue-400 text-sm font-medium">Community Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
            See what <span className="">open source community</span> tells about <span className="text-green-500">Celtrix</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Featured by GitHub Projects Community - helping developers discover amazing open source tools
          </p>
        </div>
        
        {/* Tweet Container */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center">

  {/* Twitter */}
  <div className="flex justify-center">
    <div className="w-full max-w-[520px]">
      <blockquote
        className="twitter-tweet"
        data-theme="dark"
        data-align="center"
      >
        <p lang="en" dir="ltr">
          Celtrix lets you spin up full-stack apps in seconds.<br/><br/>
          One command.<br/>
          Frontend + backend + database ready.<br/><br/>
          No boilerplate.<br/>
          No manual setup.<br/><br/>
          Works with stacks like MERN, MEAN, Next.js and more.<br/><br/>
          Perfect if you want to start building instead of configuring.
        </p>
        &mdash; GitHub Projects Community (@GithubProjects)
        <a href="https://twitter.com/GithubProjects/status/2032804558632792290">
          March 14, 2026
        </a>
      </blockquote>
    </div>
  </div>

  {/* Threads */}
  <div className="flex justify-center">
    <div className="w-full max-w-[520px]">
      <blockquote
        className="text-post-media"
        data-text-post-permalink="https://www.threads.com/@githubprojects/post/DV3aWsIFKAz"
        data-text-post-version="0"
        id="ig-tp-DV3aWsIFKAz"
      >
        <a
          href="https://www.threads.com/@githubprojects/post/DV3aWsIFKAz"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Threads
        </a>
      </blockquote>

      <Script
        async
        src="https://www.threads.com/embed.js"
        strategy="lazyOnload"
      />
    </div>
  </div>

</div>
        
        {/* Bottom accent */}
        <div className="flex items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Open Source</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Community Approved</span>
          </div>
        </div>
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

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center  text-center">
        <div className="flex items-center gap-2 text-gray-400 text-xl">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>by</span>
          <a 
            href="https://celaster.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 underline hover:text-green-300 transition-colors font-medium underline-offset-4 hover:underline"
          >
            Joe Celaster
          </a>
        </div>
        <div className="mt-2 text-gray-500 text-sm">
          &copy; 2026 Celtrix. All rights reserved.
        </div>
      </footer>
      </div>
    </div>
  );
}

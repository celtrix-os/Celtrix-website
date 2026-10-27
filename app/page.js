"use client";

import Image from "next/image";
import "./globals.css";
import logo from "../public/celtrix-text-logo.png";
import Github from "./components/github";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import { useRouter } from 'next/navigation';
import { QuickStart } from './components/getstarted';
import FindUsHere from './components/findushere';
import Script from "next/script";
import TechShowcase from './components/techshowcase';
import WhyCeltrix from './components/whyceltrix';
import WhatYouGet from './components/whatyouget';
import BuildWithAI from './components/buildwithai';
import FabricBg from './components/fabricbg';

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
      
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bangers-regular gap-8 md:gap-12 lg:gap-16 relative z-10 w-full max-w-7xl mx-auto">
      {/* Navbar and hero use the builder page's spacing */}
      <div className="w-full flex flex-col gap-10 md:gap-14">
      {/* nav-section */}
      <div className="w-full md:flex md:flex-row bg-black/60 backdrop-blur-lg lg:flex lg:flex-row border border-gray-800 p-2 z-50 rounded-[8px]">
         <Navbar/>
      </div>

      {/* Hero Section 1 */}

      <div className="relative isolate flex flex-col items-center text-center gap-6 md:gap-8 pt-2 pb-10 md:pt-6 md:pb-20 lg:pb-24">
        <FabricBg from="#22c55e" to="#ef4444" />
        {/* <div className="inline-flex items-center gap-3 px-5 py-2 bg-black/80 border border-green-500/40 rounded-full shadow-lg shadow-green-500/20"> */}
          {/* <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span> */}
          {/* <span className="text-green-400 text-sm sm:text-base tracking-wider">Full-stack in one command</span> */}
        {/* </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-5xl">
          Set up your web app <span className="text-green-500">first</span> <br className="hidden sm:block"/>before building it with <span className="text-red-500">AI</span>.
        </h1>

        <p className="text-base md:text-lg lg:text-xl tracking-wide leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl hidden sm:block">
          <span className="text-green-500">Celtrix</span> is a CLI that generates a full-stack web app that already runs: <span className="text-fuchsia-400">frontend, API and database</span>, connected and configured, with a guide that explains how to run it.
        </p>
        <p className="text-sm tracking-wide leading-relaxed text-gray-600 dark:text-gray-300 sm:hidden">
          <span className="text-green-500">Celtrix</span> generates a full-stack web app that already runs, with <span className="text-yellow-500">one command.</span>
        </p>

        <div className="w-full max-w-4xl mt-4 md:mt-8">
          <QuickStart />
        </div>
      </div>
      </div>


      {/* What You Get Section */}
      <div className="relative isolate flex flex-col items-center gap-10 py-10 lg:py-16">
        <FabricBg from="#10b981" to="#84cc16" />
        <div className=" text-center max-w-4xl">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
            An app that <span className="text-green-500">already runs</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">
            Frontend, API and database, connected and configured in a Turborepo monorepo, with one complete example feature to build on.
          </p>
        </div>
        <WhatYouGet />
      </div>

      {/* Tech Showcase Section */}
      <div className="relative isolate flex flex-col items-center gap-10 py-10 lg:py-16">
        <FabricBg from="#f59e0b" to="#f97316" reverse />
        <div className="text-center max-w-4xl">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
            Supported <span className="text-green-500">Stacks</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Build a custom stack in seven short steps, or <a href="/builder" className="text-red-300 underline">skip the prompts</a> 
          </p>
        </div>
        <TechShowcase />
      </div>

      {/* Build With AI Section */}
      <div className="relative isolate flex flex-col items-center gap-10 py-10 lg:py-16">
        <FabricBg from="#8b5cf6" to="#d946ef" />
        <div className="text-center max-w-4xl">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
            Ask for <span className="text-purple-400">features</span>, not foundations
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Start your AI from a working app, not an empty folder.
          </p>
        </div>
        <BuildWithAI />
      </div>

      {/* Hero Section 2*/}
      

      {/* <hr className="text-gray-500"/> */}

      {/* Community Section */}
      <div className="relative isolate flex flex-col items-center gap-12 py-8 lg:py-12">
        <FabricBg from="#0ea5e9" to="#3b82f6" reverse />
        {/* Header */}
        <div className="text-center max-w-4xl">
          
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

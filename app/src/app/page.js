import Image from "next/image";
import "./globals.css";
import celtrix from "../../public/celtrix-1.png";
import logo from "../../public/celtrix-trans.png";
import Left from "./components/left";
import Github from "./components/github";

export default function Home() {

  return (

    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 font-sans bangers-regular gap-16 md:gap-24 lg:gap-[120px]">
      {/* nav-section */}
      <div className="w-full fixed-top border-1 border-gray-800 p-2 z-50 rounded-2xl">
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full">
          
          <button className="flex items-center gap-0 tracking-wider text-green-500 text-2xl sm:text-3xl md:text-4xl whitespace-nowrap">
            <Image src={logo} alt="Celtrix" width={50} height={50} />
            Celtrix
          </button>

          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl">
            <button className="hover:text-green-500 transition-colors">Home</button>
            <button className="hover:text-green-500 transition-colors">About</button>
            <a href="https://github.com/celtrix-os/Celtrix"><Github/></a>
          </ul>
        </nav>
      </div>

      {/* Hero Section 1 */}

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 xl:gap-24 w-full justify-center">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-4xl">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-center sm:text-left">
            <h1>Setup Web apps in <span className="text-green-500"> seconds,</span> Not in <span className="text-red-500">hours</span></h1>
            
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed hidden sm:block">
            <span className="text-green-500">Celtrix</span> – an open-source scaffolding tool that helps you <span className="text-fuchsia-400">set up full-stack projects</span> instantly with one command. Whether it's <span className="text-green-500">MERN</span>, <span className="text-red-500">MEAN</span>, <span className="text-blue-500">Nextjs</span>, or other popular stacks, you can scaffold everything with just <span className="text-yellow-500">one command.</span>
          </p>
          
          <div className="block sm:hidden">
            <p className="text-base text-center sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide leading-relaxed">
              <span className="text-green-500">Celtrix</span> – an <span className="text-red-400">open-source</span> scaffolding tool that helps you <span className="text-fuchsia-400">set up full-stack projects</span> instantly with <span className="text-yellow-500">one command.</span>
            </p>
          </div>
          
          <div className="w-full flex justify-center sm:justify-start mt-2">
            <button className="bg-green-500 hover:bg-green-600 text-black py-3 px-8 rounded-full w-full sm:w-auto tracking-wide text-lg md:text-xl transition-colors duration-300 transform hover:scale-105 max-w-xs sm:max-w-none">
              Get Started
            </button>
          </div>
        </div>

        {/* Right side - Terminal */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-2xl">
            <Left />
          </div>
        </div>
      </div>

      {/* Hero Section 2*/}


    </div>
  );
}

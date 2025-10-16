
import React from "react";

const CeltrixTerminal = () => {
  return (
    <div className="max-h-[50em] max-w-[38em] w-full border border-[#383838] bg-[#0f0f0f] rounded-[1em] shadow-[0_0.5em_2em_rgba(0,0,0,0.3)] overflow-hidden font-mono text-[0.95em] leading-[1.5] text-white">
      {/* Top bar */}
      <div className="h-[2.5em] bg-[#2c2c2c] flex items-center px-[1em]">
        <div className="flex gap-[0.5em]">
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#FF3B30]" />
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#FFD60A]" />
          <div className="w-[0.75em] h-[0.75em] rounded-full bg-[#32D74B]" />
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-[1em] overflow-y-auto scrollbar-thin scrollbar-thumb-[#333344] scrollbar-track-[#1a1a1a] hover:scrollbar-thumb-[#444455]">
        <div>
          <span className="text-[#528BFF]">C:\Users\Mac&gt;</span>{" "}
          <span className="text-[#000000] font-bold p-0.5 bg-green-400">npx celtrix</span>
        </div>

        <pre className="text-[#FF6B81] mt-3 text-[1.05em] leading-tight whitespace-pre overflow-x-auto"
            style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'blue',
                WebkitTextStrokeColor: 'violet',
                WebkitTextStrokeWidth: '0.5px'
            }}
        >{`
   _____     _ _        _
  / ____|   | | |      (_)
 | |     ___| | |_ _ __ ___  __
 | |    / _ \\ | __| '__| \\ \\/ /
 | |___|  __/ | |_| |  | |>  <
  \\_____\\___|_|\\__|_|  |_/_/\\_\\

  `}</pre>    
        <div className="mt-2 text-[#FF6B81]">
          ⚡ Setup Web-apps in seconds, not hours ⚡
        </div>

        <div className="mt-4 text-[#8BE9FD]">
          ✔️ <span className="text-white">Enter your project name:</span>{" "}
          <span className="text-[#32D74B]">app</span>
        </div>

        <div className="mt-3 text-[#FFD60A]">? Choose your stack:</div>

        <div className="mt-2 flex flex-col gap-1 text-[#9CA3AF]">
          <div>
            <span className="text-[#00ff2a]">❯ MERN</span> ➜ MongoDB + Express + React + Node.js
          </div>
          <div>
            <span className="text-[#FF5555]"> MEAN</span> ➜ MongoDB + Express + Angular + Node.js
          </div>
          <div>
            <span className="text-[#295af8]"> MEVN</span> ➜ MongoDB + Express + Vue + Node.js
          </div>
          <div>
            <span className="text-[#32D74B]"> MERN + Tailwind + Auth</span> ➜ full-stack with styling & auth
          </div>
          <div>
            <span className="text-[#ff9d0a]"> MEAN + Tailwind + Auth</span> ➜ Angular setup with extras
          </div>
          <div>
            <span className="text-[#FF79C6]"> React + Tailwind + Firebase</span> ➜ fast way to build apps
          </div>
          <div>
            <span className="text-[#dbdbdb]"> Next.js</span> ➜ vanilla modern stack
          </div>
          
        </div>

        <span className="inline-block w-[0.5em] h-[1em] bg-[#528BFF] animate-[blink_1s_step-end_infinite] align-middle mt-2" />
      </div>
    </div>
  );
};

export default CeltrixTerminal;

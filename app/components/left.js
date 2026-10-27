
import React from "react";

const steps = [
  ["[1/7] Select a language:", "TypeScript"],
  ["[2/7] Select a frontend framework:", "React Router"],
  ["[3/7] Select a backend framework:", "Express"],
  ["[4/7] Select a runtime environment:", "Node.js"],
  ["[5/7] Select a database:", "PostgreSQL"],
  ["Select a postgres provider:", "Docker"],
  ["[6/7] Select an ORM:", "Prisma"],
  ["[7/7] Proceed with this configuration?", "Continue"],
  ["Choose a package manager:", "npm"],
  ["Do you want to install dependencies?", "Yes"],
];

const nextSteps = [
  ["cd my-app", ""],
  ["cp .env.example .env", ""],
  ["npm run db:up", "# start the database in Docker"],
  ["npm run db:push", "# create the database tables"],
  ["npm run dev", ""],
];

const CeltrixTerminal = () => {
  return (
    <div className="max-h-[50em] max-w-[38em] w-full bg-[#131313] rounded-[1em] shadow-[0_0.5em_2em_rgba(0,0,0,0.3)] overflow-hidden font-mono text-[0.95em] leading-[1.5] text-white">
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
          <span className="text-[#528BFF]">$</span>{" "}
          <span className="text-[#000000] font-bold p-0.5 bg-green-400">npx celtrix my-app</span>
        </div>

        <div className="mt-3 text-[#FFD60A]">
          ? <span className="text-white">Choose your stack:</span>{" "}
          <span className="text-[#32D74B]">⚡ Custom Stack</span>
        </div>

        <div className="mt-2 text-[#FF6B81]">── Customise your tech stack ──</div>

        <div className="mt-2 flex flex-col gap-0.5">
          {steps.map(([question, answer]) => (
            <div key={question}>
              <span className="text-[#8BE9FD]">?</span>{" "}
              <span className="text-gray-300">{question}</span>{" "}
              <span className="text-[#32D74B]">{answer}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-[#FFD60A]">👉 Next Steps:</div>
        <div className="mt-1 flex flex-col gap-0.5 pl-4">
          {nextSteps.map(([cmd, comment], idx) => (
            <div key={cmd}>
              <span className="text-gray-500">{idx + 1}.</span>{" "}
              <span className="text-white">{cmd}</span>{" "}
              <span className="text-gray-500">{comment}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 text-[#9CA3AF]">
          📖 Read <span className="text-[#FF79C6]">my-app/CELTRIX_SETUP.md</span> for the full guide.
        </div>

        <span className="inline-block w-[0.5em] h-[1em] bg-[#528BFF] animate-[blink_1s_step-end_infinite] align-middle mt-2" />
      </div>
    </div>
  );
};

export default CeltrixTerminal;

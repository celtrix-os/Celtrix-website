import React from 'react';

const problems = [
  {
    title: 'Stale setup',
    text: 'Commands, config formats and package versions remembered from older code.',
  },
  {
    title: "Pieces that don't connect",
    text: "Wrong ports, missing proxy, CORS errors, an ORM that can't find DATABASE_URL.",
  },
  {
    title: 'A new architecture every session',
    text: 'Nothing stable for the next change to stay consistent with.',
  },
  {
    title: 'Context spent on boilerplate',
    text: 'Tokens and review time go to config instead of features.',
  },
];

const WhyCeltrix = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="rounded-2xl p-5 border border-gray-600 bg-black/40 hover:border-red-500/70 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-8 bg-red-500 rounded-full"></div>
              <h3 className="text-red-400 text-2xl tracking-wider">{problem.title}</h3>
            </div>
            <p className="text-gray-300 text-lg tracking-wide leading-relaxed">{problem.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-6 border border-green-500/70 bg-black/40">
        <p className="text-gray-200 text-xl tracking-wide leading-relaxed">
          <span className="text-green-500">Celtrix</span> does the setup <span className="text-green-400">deterministically</span>. The same choices always produce the same project, created with the frameworks&apos; own CLIs and wired together by generators covered by an end-to-end test that builds and runs a real app. You, or your AI assistant, start from a working app with one complete example feature to build on.
        </p>
        <p className="text-gray-400 text-lg tracking-wide leading-relaxed mt-4">
          Celtrix is a scaffolder, not an AI tool. It makes no AI calls, and what it generates is plain code you own, with no runtime dependency on Celtrix.
        </p>
      </div>
    </div>
  );
};

export default WhyCeltrix;

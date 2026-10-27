import React from 'react';

const steps = [
  {
    title: 'Run it first',
    text: 'Status screen says api ok, database up. The stack is proven.',
    number: 'text-green-500/15',
    heading: 'text-green-400',
    border: 'border-green-500/40 hover:border-green-500',
  },
  {
    title: 'Share the context',
    text: 'Point your assistant at CELTRIX_SETUP.md and celtrix.config.json.',
    number: 'text-purple-500/15',
    heading: 'text-purple-400',
    border: 'border-purple-500/40 hover:border-purple-500',
  },
  {
    title: 'Ask for features',
    text: 'It extends patterns that already work. You review a focused diff.',
    number: 'text-sky-500/15',
    heading: 'text-sky-400',
    border: 'border-sky-500/40 hover:border-sky-500',
  },
];

const prompts = [
  `Add a \`posts\` resource (title, body, author → users)
following the \`users\` pattern.`,
  `Write tests for /api/users: create, list, 400 and 409.`,
];

const BuildWithAI = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`relative overflow-hidden rounded-2xl p-6 pt-20 border bg-black/40 transition-colors duration-300 ${step.border}`}
          >
            <span
              aria-hidden="true"
              className={`absolute -top-6 -right-2 text-[10rem] leading-none select-none pointer-events-none ${step.number}`}
            >
              {i + 1}
            </span>
            <h3 className={`relative text-2xl tracking-wider mb-3 ${step.heading}`}>{step.title}</h3>
            <p className="relative text-gray-300 text-lg tracking-wide leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl tracking-wide text-center">
          Example <span className="text-purple-400">prompts</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {prompts.map((prompt) => (
            <pre
              key={prompt}
              className="rounded-2xl p-5 border border-gray-600 bg-black/40 font-mono text-sm sm:text-base text-gray-200 whitespace-pre-wrap leading-relaxed"
            >
              {prompt}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildWithAI;

import React from 'react';

const features = [
  {
    title: "A stack that's already connected",
    text: 'The web app proxies /api to the server, and the server reaches the database through a shared @repo/database package, all in a Turborepo monorepo.',
  },
  {
    title: 'One complete example feature',
    text: 'GET /api/health reports API and database status. GET and POST /api/users list and create users, returning 400 for invalid input and 409 for duplicates.',
  },
  {
    title: 'A database you can actually run',
    text: 'Pick Docker as the provider and get a healthchecked docker-compose.yml for PostgreSQL, MySQL or MongoDB. db:up waits until it is ready, and DATABASE_URL already matches the container.',
  },
  {
    title: 'Configuration in one place',
    text: 'A single .env.example at the root lists every variable the generated code reads, with comments. The API, the ORM CLI and Vite all read the same root .env.',
  },
  {
    title: 'A setup guide for your exact stack',
    text: 'CELTRIX_SETUP.md walks through env setup, database, schema and dev commands for the choices you made. Your own README.md is never overwritten.',
  },
  {
    title: 'Official tools, current versions',
    text: 'Frontends come from their own CLIs: create-vite, create-next-app, nuxi, create astro and @tanstack/cli. You get their current defaults, not a template frozen months ago.',
  },
];

const points = [
  {
    title: 'Wireframed full-stack app',
    text: 'Frontend, API and database, wired together and running from the first command.',
    number: 'text-green-500/15',
    heading: 'text-green-400',
    border: 'border-green-500/40 hover:border-green-500',
  },
  {
    title: 'Production-grade foundations for AI',
    text: 'A clean, consistent structure your AI assistant can build on, not reinvent.',
    number: 'text-purple-500/15',
    heading: 'text-purple-400',
    border: 'border-purple-500/40 hover:border-purple-500',
  },
  {
    title: 'Latest versions, official CLIs',
    text: "Every framework is created by its own CLI, so you start on latest official release.",
    number: 'text-sky-500/15',
    heading: 'text-sky-400',
    border: 'border-sky-500/40 hover:border-sky-500',
  },
  {
    title: 'Deterministic code',
    text: 'The same choices always produce the same project. No hallucination, no surprises.',
    number: 'text-amber-500/15',
    heading: 'text-amber-400',
    border: 'border-amber-500/40 hover:border-amber-500',
  },
];

const tree = `my-app/
├── apps/
│   ├── api/            # Express, Hono or Fastify API
│   │   └── src/
│   │       ├── env.ts      # loads the root .env
│   │       └── index.ts    # /api/health and /api/users
│   └── web/            # Vite + React app
│       ├── src/
│       │   ├── App.tsx     # live status screen
│       │   └── lib/api.ts  # typed client for the API
│       └── vite.config.ts  # proxies /api to the API
├── packages/
│   ├── database/       # @repo/database, shared by the API
│   │   ├── prisma/schema.prisma
│   │   └── src/index.ts
│   └── tsconfig/
├── .env.example        # every variable the code reads
├── docker-compose.yml  # only with the Docker provider
├── CELTRIX_SETUP.md    # how to set up and run this project
├── celtrix.config.json # the stack you chose
├── turbo.json
└── package.json        # dev, build and db:* scripts`;

const WhatYouGet = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {points.map((point, i) => (
          <div
            key={point.title}
            className={`relative overflow-hidden rounded-2xl p-6 pt-20 border bg-black/40 transition-colors duration-300 ${point.border}`}
          >
            <span
              aria-hidden="true"
              className={`absolute -top-6 -right-2 text-[10rem] leading-none select-none pointer-events-none ${point.number}`}
            >
              {i + 1}
            </span>
            <h3 className={`relative text-2xl tracking-wider mb-3 ${point.heading}`}>{point.title}</h3>
            <p className="relative text-gray-300 text-lg tracking-wide leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>

      

      <div className="flex flex-col gap-3">
        <h3 className="text-3xl tracking-wide text-center">
          The <span className="text-green-500">generated project</span>
        </h3>
        <p className="text-gray-400 text-lg text-center tracking-wide">
          React Router + Express + PostgreSQL via Docker + Prisma, in TypeScript
        </p>
        <pre className="rounded-2xl p-5 border border-gray-600 bg-black/40 font-mono text-sm sm:text-base text-gray-200 overflow-x-auto leading-relaxed">
          {tree}
        </pre>
      </div>
    </div>
  );
};

export default WhatYouGet;

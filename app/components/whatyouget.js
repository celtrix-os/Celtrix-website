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

// Each top-level area gets its own accent, inherited by everything inside it.
const neutral = { text: 'text-gray-100', dot: 'bg-gray-400' };

const accents = {
  api: { text: 'text-green-400', dot: 'bg-green-400', chip: 'border-green-500/40 bg-green-500/10 text-green-300', label: 'API' },
  web: { text: 'text-sky-400', dot: 'bg-sky-400', chip: 'border-sky-500/40 bg-sky-500/10 text-sky-300', label: 'Web app' },
  pkg: { text: 'text-purple-400', dot: 'bg-purple-400', chip: 'border-purple-500/40 bg-purple-500/10 text-purple-300', label: 'Shared packages' },
  root: { text: 'text-amber-400', dot: 'bg-amber-400', chip: 'border-amber-500/40 bg-amber-500/10 text-amber-300', label: 'Config & docs' },
};

const extColors = {
  ts: 'text-sky-300',
  tsx: 'text-cyan-300',
  json: 'text-amber-300',
  md: 'text-gray-100',
  yml: 'text-pink-300',
  prisma: 'text-indigo-300',
  env: 'text-yellow-300',
};

const tree = {
  name: 'my-app',
  children: [
    {
      name: 'apps',
      children: [
        {
          name: 'api', accent: 'api', note: 'Express, Hono or Fastify API',
          children: [
            { name: 'src', children: [
              { name: 'env.ts', note: 'loads the root .env' },
              { name: 'index.ts', note: '/api/health and /api/users' },
            ] },
          ],
        },
        {
          name: 'web', accent: 'web', note: 'Vite + React app',
          children: [
            { name: 'src', children: [
              { name: 'App.tsx', note: 'live status screen' },
              { name: 'lib/api.ts', note: 'typed client for the API' },
            ] },
            { name: 'vite.config.ts', note: 'proxies /api to the API' },
          ],
        },
      ],
    },
    {
      name: 'packages', accent: 'pkg',
      children: [
        { name: 'database', note: '@repo/database, shared by the API', children: [
          { name: 'prisma/schema.prisma' },
          { name: 'src/index.ts' },
        ] },
        { name: 'tsconfig', children: [] },
      ],
    },
    { name: '.env.example', accent: 'root', note: 'every variable the code reads' },
    { name: 'docker-compose.yml', accent: 'root', note: 'only with the Docker provider' },
    { name: 'CELTRIX_SETUP.md', accent: 'root', note: 'how to set up and run this project' },
    { name: 'celtrix.config.json', accent: 'root', note: 'the stack you chose' },
    { name: 'turbo.json', accent: 'root' },
    { name: 'package.json', accent: 'root', note: 'dev, build and db:* scripts' },
  ],
};

// Flattens the tree into rows, building the box-drawing guide for each one.
const flatten = (nodes, prefix = '', accent) =>
  nodes.flatMap((node, i) => {
    const last = i === nodes.length - 1;
    const rowAccent = node.accent || accent;
    const row = { ...node, accent: rowAccent, guide: prefix + (last ? '└── ' : '├── '), dir: Array.isArray(node.children) };
    return [row, ...(row.dir ? flatten(node.children, prefix + (last ? '    ' : '│   '), rowAccent) : [])];
  });

const rows = flatten(tree.children);

const fileColor = (name) => {
  const ext = name.startsWith('.env') ? 'env' : name.split('.').pop();
  return extColors[ext] || 'text-gray-200';
};

const FolderIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={`w-4 h-4 shrink-0 ${className}`} fill="currentColor">
    <path d="M1.5 3.5A1.5 1.5 0 0 1 3 2h3.2l1.6 1.6H13a1.5 1.5 0 0 1 1.5 1.5v6.9A1.5 1.5 0 0 1 13 13.5H3A1.5 1.5 0 0 1 1.5 12z" opacity=".9" />
  </svg>
);

const FileIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={`w-4 h-4 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M4 1.75h5.25L12.5 5v9.25H4z" />
    <path d="M9 1.75V5.3h3.5" />
  </svg>
);

const TreeRow = ({ row }) => {
  const accent = accents[row.accent] || neutral;
  return (
    <li className="group flex flex-wrap items-center gap-x-6 rounded-md px-3 py-0.5 hover:bg-white/5 transition-colors">
      <span className="flex items-center shrink-0 sm:w-[38ch] whitespace-pre">
        <span className="text-gray-700">{row.guide}</span>
        {row.dir ? (
          <>
            <FolderIcon className={`${accent.text} mr-1.5`} />
            <span className={`font-semibold ${accent.text}`}>{row.name}/</span>
          </>
        ) : (
          <>
            <FileIcon className={`${fileColor(row.name)} opacity-70 mr-1.5`} />
            <span className={fileColor(row.name)}>{row.name}</span>
          </>
        )}
      </span>
      {row.note && (
        <span
          style={{ '--indent': `${row.guide.length + 2}ch` }}
          className="basis-full pl-(--indent) sm:basis-auto sm:pl-0 text-gray-400 group-hover:text-gray-200 transition-colors"
        >
          <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle ${accent.dot} opacity-60`} />
          {row.note}
        </span>
      )}
    </li>
  );
};

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
        <div className="rounded-2xl border border-white/10 bg-[#0b0f14] overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.25)]">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-gray-800 bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </span>
              <span className="font-mono text-sm text-gray-400">~/{tree.name}</span>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs tracking-wide">
              {Object.values(accents).map((a) => (
                <li key={a.label} className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 ${a.chip}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-3 sm:p-4 overflow-x-auto">
            <div className="flex items-center px-3 py-0.5 font-mono text-sm sm:text-base">
              <FolderIcon className="text-green-500 mr-1.5" />
              <span className="font-semibold text-white">{tree.name}/</span>
            </div>
            <ul className="font-mono text-sm sm:text-base leading-relaxed">
              {rows.map((row) => (
                <TreeRow key={row.guide + row.name} row={row} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;

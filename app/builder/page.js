"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import FabricBg from "../components/fabricbg";

// Option values and descriptions mirror the Celtrix CLI's own prompts.
const LANGUAGES = [
  { label: "TypeScript", value: "typescript", icon: "typescript", desc: "Type-safe JavaScript superset" },
  { label: "JavaScript", value: "javascript", icon: "javascript", desc: "Classic dynamic scripting" },
];

const FRONTENDS = [
  { label: "React Router", value: "react-router", icon: "reactrouter", desc: "React with file-based routing" },
  { label: "Next.js", value: "nextjs", icon: "nextdotjs/white", desc: "Full-stack React framework" },
  { label: "Nuxt", value: "nuxt", icon: "nuxt", desc: "Full-stack Vue framework" },
  { label: "TanStack Start", value: "tanstack", icon: "tanstack", desc: "Type-safe routing & data fetching" },
  { label: "Astro", value: "astro", icon: "astro", desc: "Content-focused, island architecture" },
  { label: "SolidStart", value: "solid", icon: "solid/4F88C6", desc: "Fine-grained reactive UI" },
];

const BACKENDS = [
  { label: "Hono", value: "hono", icon: "hono", desc: "Ultrafast, edge-ready" },
  { label: "Fastify", value: "fastify", icon: "fastify/white", desc: "Fast & low-overhead" },
  { label: "Express", value: "express", icon: "express/white", desc: "Minimalist Node.js framework" },
  { label: "None", value: "none", desc: "Frontend only" },
];

const RUNTIMES = [
  { label: "Node.js", value: "node", icon: "nodedotjs", desc: "The standard JavaScript runtime" },
  { label: "Bun", value: "bun", icon: "bun/white", desc: "Fast all-in-one runtime & toolkit" },
];

const DATABASES = [
  { label: "PostgreSQL", value: "postgres", icon: "postgresql", desc: "Advanced open-source SQL" },
  { label: "MySQL", value: "mysql", icon: "mysql", desc: "Popular relational database" },
  { label: "MongoDB", value: "mongodb", icon: "mongodb", desc: "Document-oriented NoSQL" },
  { label: "SQLite", value: "sqlite", icon: "sqlite/5FA8D3", desc: "Lightweight embedded database" },
  { label: "None", value: "none", desc: "No database" },
];

const PROVIDERS = {
  postgres: [
    { label: "Supabase", value: "supabase", icon: "supabase", desc: "Hosted Postgres" },
    { label: "Docker", value: "docker", icon: "docker", desc: "Local Docker container" },
    { label: "Local", value: "local", desc: "Self-hosted PostgreSQL" },
  ],
  mysql: [
    { label: "Docker", value: "docker", icon: "docker", desc: "Local Docker container" },
    { label: "Local", value: "local", desc: "Self-hosted MySQL" },
  ],
  mongodb: [
    { label: "MongoDB Atlas", value: "atlas", icon: "mongodb", desc: "Cloud-hosted MongoDB" },
    { label: "Docker", value: "docker", icon: "docker", desc: "Local Docker container" },
    { label: "Local", value: "local", desc: "Self-hosted MongoDB" },
  ],
  sqlite: [{ label: "Local file", value: "local", icon: "sqlite/5FA8D3", desc: "File-based SQLite" }],
};

const PRISMA = { label: "Prisma", value: "prisma", icon: "prisma/white", desc: "Next-gen TypeScript ORM" };
const ORMS = {
  postgres: [PRISMA],
  mysql: [PRISMA],
  sqlite: [PRISMA],
  mongodb: [PRISMA, { label: "Mongoose", value: "mongoose", icon: "mongoose/C9474A", desc: "Elegant MongoDB modeling" }],
};

const PACKAGE_MANAGERS = [
  { label: "npm", value: "npm", icon: "npm", runner: "npx" },
  { label: "pnpm", value: "pnpm", icon: "pnpm", runner: "pnpm dlx" },
  { label: "yarn", value: "yarn", icon: "yarn", runner: "yarn dlx" },
  { label: "bun", value: "bun", icon: "bun/white", runner: "bunx" },
];

const FolderGlyph = ({ plus }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    {plus ? <path d="M12 10.5v5M9.5 13h5" /> : <path d="M9 13.5l2 2 4-4" />}
  </svg>
);

const LOCATIONS = [
  { label: "New folder", value: "new", desc: "Creates a fresh folder for the app", glyph: <FolderGlyph plus /> },
  { label: "Current folder", value: "current", desc: "Uses the folder you're in, e.g. a cloned repo", glyph: <FolderGlyph /> },
];

const DEFAULTS = {
  language: "typescript",
  frontend: "react-router",
  backend: "hono",
  runtime: "node",
  database: "postgres",
  provider: "supabase",
  orm: "prisma",
  packageManager: "npm",
};

// npm-style package name: lowercase, no spaces, no leading dot/underscore.
const toProjectSlug = (name) =>
  name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/^[._-]+/, "");

// "." or "./" scaffolds into the current directory, e.g. a freshly cloned repo.
const isCurrentDir = (name) => /^\.\/?$/.test(name.trim());

function Step({ number, title, note, last, children }) {
  return (
    <section className="relative flex gap-4 sm:gap-5">
      {/* Stepper rail */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 shrink-0 rounded-full bg-green-500/15 border border-green-500/60 text-green-400 flex items-center justify-center font-sans font-semibold text-sm">
          {number}
        </div>
        {!last && <div className="w-px flex-1 bg-linear-to-b from-green-500/40 to-gray-800 mt-2" />}
      </div>

      <div className="flex-1 min-w-0 pb-8">
        <div className="rounded-2xl bg-black/40 backdrop-blur-sm p-4 sm:p-5">
          <h2 className="text-2xl sm:text-3xl tracking-wider text-gray-100 leading-9">{title}</h2>
          {note && <p className="font-sans text-sm text-gray-400 mt-1">{note}</p>}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </section>
  );
}

function OptionGrid({ options, value, onChange, compact, columns }) {
  const layout = columns || (compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 xl:grid-cols-3");
  return (
    <div className={`grid gap-3 ${layout}`}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={selected}
            className={`flex items-center gap-3 text-left font-sans rounded-lg border p-3 transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 ${
              selected
                ? "border-green-500/70 bg-green-500/6"
                : "border-white/8 bg-white/2 hover:border-white/20 hover:bg-white/4"
            }`}
          >
            <span className="w-9 h-9 shrink-0 rounded-md bg-white/5 border border-white/6 flex items-center justify-center">
              {option.glyph ? (
                option.glyph
              ) : option.icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={`https://cdn.simpleicons.org/${option.icon}`} alt="" className="w-5 h-5" loading="lazy" />
              ) : (
                <span className="text-xs font-medium text-gray-500">{option.label.slice(0, 2)}</span>
              )}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block truncate text-[15px] font-medium text-gray-100">{option.label}</span>
              {option.desc && <span className="block truncate text-[13px] text-gray-500 mt-0.5">{option.desc}</span>}
            </span>
            <span
              className={`w-4 h-4 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                selected ? "border-green-500" : "border-gray-600"
              }`}
            >
              {selected && <span className="w-2 h-2 rounded-full bg-green-500" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Builder() {
  const [projectName, setProjectName] = useState("my-app");
  const [lastProjectName, setLastProjectName] = useState("my-app");
  const [config, setConfig] = useState(DEFAULTS);
  const [copied, setCopied] = useState(false);

  const hasBackend = config.backend !== "none";
  const hasDatabase = hasBackend && config.database !== "none";

  const update = (key, value) => {
    setConfig((prev) => {
      const next = { ...prev, [key]: value };
      // Keep provider and ORM valid for the chosen database.
      if (key === "database" && value !== "none") {
        if (!PROVIDERS[value].some((p) => p.value === next.provider)) {
          next.provider = PROVIDERS[value][0].value;
        }
        if (!ORMS[value].some((o) => o.value === next.orm)) {
          next.orm = ORMS[value][0].value;
        }
      }
      return next;
    });
  };

  const reset = () => {
    setConfig(DEFAULTS);
    setProjectName("my-app");
  };

  const inCurrentDir = isCurrentDir(projectName);
  const slug = inCurrentDir ? "." : toProjectSlug(projectName) || "my-app";

  const setLocation = (location) => {
    if (location === "current" && !inCurrentDir) {
      setLastProjectName(projectName);
      setProjectName(".");
    } else if (location === "new" && inCurrentDir) {
      setProjectName(lastProjectName);
    }
  };

  const flags = [
    ["--lang", config.language],
    ["--frontend", config.frontend],
    ["--backend", config.backend],
    ["--runtime", config.runtime],
  ];
  if (hasBackend) {
    flags.push(["--db", config.database]);
  }
  if (hasDatabase) {
    flags.push(["--db-provider", config.provider], ["--orm", config.orm]);
  }
  flags.push(["--pm", config.packageManager]);

  // Run celtrix with the chosen package manager's own runner, e.g. bunx for bun.
  const runner = `${PACKAGE_MANAGERS.find((pm) => pm.value === config.packageManager).runner} celtrix@latest`;
  const command = `${runner} ${slug} ${flags.map(([f, v]) => `${f} ${v}`).join(" ")}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const optionOf = (list, value) => list.find((o) => o.value === value);
  const stackChips = [
    ["language", optionOf(LANGUAGES, config.language)],
    ["frontend", optionOf(FRONTENDS, config.frontend)],
    ["backend", hasBackend && optionOf(BACKENDS, config.backend)],
    ["runtime", optionOf(RUNTIMES, config.runtime)],
    ["database", hasDatabase && optionOf(DATABASES, config.database)],
    ["provider", hasDatabase && optionOf(PROVIDERS[config.database], config.provider)],
    ["orm", hasDatabase && optionOf(ORMS[config.database], config.orm)],
    ["packageManager", optionOf(PACKAGE_MANAGERS, config.packageManager)],
  ].filter(([, option]) => option);

  let stepNumber = 0;
  const next = () => ++stepNumber;

  return (
    <div className="min-h-screen relative overflow-x-clip bg-[#0a0a0a] text-gray-100">
      {/* Grid background with a soft green glow and flowing fabric */}
      <div className="fixed inset-0 pointer-events-none isolate">
        <FabricBg from="#22c55e" to="#06b6d4" intensity={0.5} />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(156, 163, 175, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 163, 175, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-green-500/10 blur-3xl"></div>
      </div>

      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 bangers-regular gap-10 md:gap-14 relative z-10 max-w-7xl mx-auto pb-32 lg:pb-10">
        {/* nav-section */}
        <div className="w-full md:flex md:flex-row bg-black/60 backdrop-blur-lg lg:flex lg:flex-row border border-gray-800 p-2 z-50 rounded-[8px]">
          <Navbar />
        </div>

        <header className="text-center lg:text-left">
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-none tracking-wide mt-4">
            Build your <span className="text-green-500">stack</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-400 mt-4 max-w-2xl mx-auto lg:mx-0">
            Pick each part of your app. Your <span className="text-gray-200">celtrix</span> command updates as you go. Copy it and paste it into your terminal.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_30rem] gap-10 items-start">
          {/* Left column - project name and stack choices */}
          <div>
            <Step number={next()} title="Where should it go?">
              <OptionGrid
                options={LOCATIONS}
                value={inCurrentDir ? "current" : "new"}
                onChange={setLocation}
                columns="grid-cols-1 sm:grid-cols-2"
              />

              {!inCurrentDir && (
                <div className="mt-4 font-sans">
                  <label htmlFor="project-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Folder name
                  </label>
                  <input
                    id="project-name"
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="my-app"
                    spellCheck={false}
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg bg-white/2 border border-white/8 text-gray-100 text-base font-mono focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition"
                  />
                  {slug !== projectName.trim() && (
                    <p className="text-sm text-yellow-400/90 mt-2">
                      Will be created as <span className="font-mono text-yellow-300">{slug}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Preview of where the files end up */}
              <div className="mt-4 rounded-lg border border-white/8 bg-black/40 p-4 font-mono text-[13px] leading-6">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-2">Result</p>
                {inCurrentDir ? (
                  <>
                    <div className="text-gray-200">
                      your-repo/ <span className="font-sans text-xs text-gray-500">← run the command here</span>
                    </div>
                    <div className="text-gray-500">├── .git</div>
                    <div className="text-gray-500">├── README.md</div>
                    <div className="text-green-400">└── app files are added here</div>
                  </>
                ) : (
                  <>
                    <div className="text-gray-200">
                      current-folder/ <span className="font-sans text-xs text-gray-500">← run the command here</span>
                    </div>
                    <div className="text-green-400">└── {slug}/</div>
                    <div className="text-green-400/70">{"    "}└── app files go here</div>
                  </>
                )}
              </div>
            </Step>

            <Step number={next()} title="Language">
              <OptionGrid options={LANGUAGES} value={config.language} onChange={(v) => update("language", v)} />
            </Step>

            <Step number={next()} title="Frontend">
              <OptionGrid options={FRONTENDS} value={config.frontend} onChange={(v) => update("frontend", v)} />
            </Step>

            <Step
              number={next()}
              title="Backend"
              note={!hasBackend ? "Frontend-only project, so the database and ORM steps are skipped." : null}
            >
              <OptionGrid options={BACKENDS} value={config.backend} onChange={(v) => update("backend", v)} />
            </Step>

            <Step number={next()} title="Runtime">
              <OptionGrid options={RUNTIMES} value={config.runtime} onChange={(v) => update("runtime", v)} />
            </Step>

            {hasBackend && (
              <Step number={next()} title="Database">
                <OptionGrid options={DATABASES} value={config.database} onChange={(v) => update("database", v)} />
              </Step>
            )}

            {hasDatabase && (
              <>
                <Step number={next()} title="Database provider">
                  <OptionGrid
                    options={PROVIDERS[config.database]}
                    value={config.provider}
                    onChange={(v) => update("provider", v)}
                  />
                </Step>
                <Step
                  number={next()}
                  title="ORM"
                  note={config.database !== "mongodb" ? "Prisma supports every SQL database Celtrix offers." : null}
                >
                  <OptionGrid options={ORMS[config.database]} value={config.orm} onChange={(v) => update("orm", v)} />
                </Step>
              </>
            )}

            <Step number={next()} title="Package manager" last>
              <OptionGrid
                options={PACKAGE_MANAGERS}
                value={config.packageManager}
                onChange={(v) => update("packageManager", v)}
                compact
              />
            </Step>
          </div>

          {/* Right column - live command */}
          <aside className="lg:sticky lg:top-8 flex flex-col gap-4">
            <div className="rounded-2xl bg-[#111] border border-gray-800 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="h-11 bg-[#1c1c1c] border-b border-gray-800 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-sans text-xs text-gray-500">terminal</span>
                <button
                  type="button"
                  onClick={reset}
                  className="font-sans text-xs text-gray-400 hover:text-gray-100 transition-colors cursor-pointer"
                >
                  Reset
                </button>
              </div>

              <pre className="p-5 font-mono text-[13px] sm:text-sm leading-7 text-white overflow-x-auto">
                <code>
                  <span className="text-gray-500 select-none">$ </span>
                  <span className="text-green-400">{runner}</span>{" "}
                  <span className="text-yellow-300">{slug}</span>
                  {flags.map(([flag, value]) => (
                    <span key={flag}>
                      <span className="text-gray-600"> \</span>{"\n"}
                      {"    "}
                      <span className="text-sky-300">{flag}</span>{" "}
                      <span className="text-gray-100">{value}</span>
                    </span>
                  ))}
                </code>
              </pre>

              <div className="px-5 pb-5">
                <button
                  type="button"
                  onClick={copyCommand}
                  className={`w-full py-3 rounded-xl text-2xl tracking-wider transition-all cursor-pointer ${
                    copied
                      ? "bg-green-400 text-black"
                      : "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_8px_30px_-8px_rgba(34,197,94,0.7)]"
                  }`}
                >
                  {copied ? "Copied!" : "Copy command"}
                </button>
                <p className="font-sans text-xs text-gray-500 mt-3 text-center">
                  Copies as a single line, ready to paste.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5">
              <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Your stack</h3>
              <div className="flex flex-wrap gap-2 mt-3 font-sans">
                {stackChips.map(([key, option]) => (
                  <span
                    key={key}
                    className="inline-flex items-center gap-2 text-[13px] px-2.5 py-1.5 rounded-md bg-white/4 border border-white/8 text-gray-200"
                  >
                    {option.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`https://cdn.simpleicons.org/${option.icon}`} alt="" className="w-4 h-4" loading="lazy" />
                    )}
                    {option.label}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile copy bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-gray-800">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <code className="flex-1 min-w-0 truncate font-mono text-xs text-gray-300">{command}</code>
          <button
            type="button"
            onClick={copyCommand}
            className="bangers-regular shrink-0 px-5 py-2.5 rounded-lg bg-green-500 text-black text-xl tracking-wider cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Simple Icons slugs; dark brand colors are swapped for ones visible on black.
const LOGOS = {
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'React Router': 'reactrouter',
  'Next.js': 'nextdotjs/white',
  'Nuxt': 'nuxt',
  'TanStack Start': 'tanstack',
  'Astro': 'astro',
  'SolidStart': 'solid/4F88C6',
  'Express': 'express/white',
  'Hono': 'hono',
  'Fastify': 'fastify/white',
  'Node.js': 'nodedotjs',
  'Bun': 'bun/white',
  'PostgreSQL': 'postgresql',
  'MySQL': 'mysql',
  'MongoDB': 'mongodb',
  'SQLite': 'sqlite/5FA8D3',
  'Prisma': 'prisma/white',
  'Mongoose': 'mongoose/C9474A',
  'npm': 'npm',
  'pnpm': 'pnpm',
  'yarn': 'yarn',
  'bun': 'bun/white',
  'Supabase': 'supabase',
  'Docker': 'docker',
  'MongoDB Atlas': 'mongodb',
  'Local file': 'sqlite/5FA8D3',
  'React': 'react',
  'Angular': 'angular/DD0031',
  'Vue': 'vuedotjs',
  'Tailwind': 'tailwindcss',
  'Firebase': 'firebase',
};

const Logo = ({ name, size = 'w-4 h-4' }) =>
  LOGOS[name] ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`https://cdn.simpleicons.org/${LOGOS[name]}`} alt="" className={`${size} shrink-0`} loading="lazy" />
  ) : null;

const Chip = ({ name }) => (
  <span className="inline-flex items-center gap-2 text-[13px] px-2.5 py-1.5 rounded-md border border-gray-700 text-gray-200">
    <Logo name={name} />
    {name}
  </span>
);

const Group = ({ title, items }) => (
  <div className="rounded-lg border border-gray-600 bg-black/40 p-4">
    <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => <Chip key={item} name={item} />)}
    </div>
  </div>
);

const categories = [
  { id: 'web-parts', name: 'Custom Stack' },
  { id: 'database-providers', name: 'Database Providers' },
  { id: 'add-ons', name: 'Preset Stacks' }
];

const webParts = {
  language: ['TypeScript', 'JavaScript'],
  frontend: ['React Router', 'Next.js', 'Nuxt', 'TanStack Start', 'Astro', 'SolidStart'],
  backend: ['Express', 'Hono', 'Fastify', 'None'],
  runtime: ['Node.js', 'Bun'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  orm: ['Prisma', 'Mongoose'],
  'package manager': ['npm', 'pnpm', 'yarn', 'bun']
};

const databaseProviders = {
  postgresql: ['Supabase', 'Docker', 'Local'],
  mysql: ['Docker', 'Local'],
  mongodb: ['MongoDB Atlas', 'Docker', 'Local'],
  sqlite: ['Local file']
};

const presets = {
  mern: { logos: ['MongoDB', 'Express', 'React', 'Node.js'], variants: ['MERN', 'MERN + Tailwind + Auth'] },
  mean: { logos: ['MongoDB', 'Express', 'Angular', 'Node.js'], variants: ['MEAN', 'MEAN + Tailwind + Auth'] },
  mevn: { logos: ['MongoDB', 'Express', 'Vue', 'Node.js'], variants: ['MEVN', 'MEVN + Tailwind + Auth'] },
  more: { logos: ['React', 'Tailwind', 'Firebase', 'Next.js', 'Hono'], variants: ['React + Tailwind + Firebase', 'Next.js', 'Hono'] },
};

const TechShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('web-parts');

  const renderContent = () => {
    switch (activeCategory) {
      case 'database-providers':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(databaseProviders).map(([database, providers]) => (
              <Group key={database} title={database} items={providers} />
            ))}
          </div>
        );
      case 'add-ons':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(presets).map(([name, preset]) => (
              <div key={name} className="rounded-lg border border-gray-600 bg-black/40 p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">{name}</h3>
                  <div className="flex items-center gap-1.5">
                    {preset.logos.map((logo) => <Logo key={logo} name={logo} />)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {preset.variants.map((variant) => (
                    <span key={variant} className="text-[13px] px-2.5 py-1.5 rounded-md border border-gray-700 text-gray-200">
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(webParts).map(([category, options]) => (
              <Group key={category} title={category} items={options} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="w-full font-sans">
      {/* Category Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-lg border border-gray-600 bg-black/40">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-green-500/10 text-green-400 border border-green-500/70'
                  : 'text-gray-400 border border-transparent hover:text-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {renderContent()}

      <div className="flex justify-center mt-8">
        <Link
          href="/builder"
          className="bangers-regular px-8 py-3 rounded-xl bg-green-400 text-black text-2xl tracking-wider transition-all hover:bg-green-300 hover:shadow-[0_8px_30px_-8px_rgba(74,222,128,0.6)]"
        >
          Start building
        </Link>
      </div>
    </div>
  );
};

export default TechShowcase;

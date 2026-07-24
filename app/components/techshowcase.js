"use client";

import React, { useState } from 'react';

const TechShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('web-parts');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx celtrix@latest');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    { id: 'web-parts', name: 'Web Parts' },
    { id: 'database-providers', name: 'Database Providers' },
    { id: 'add-ons', name: 'Add-ons' }
  ];

  const webParts = {
    frontend: ['React Router', 'Next.js', 'Nuxt', 'TanStack', 'Astro', 'SvelteKit', 'SolidStart'],
    backend: ['Hono', 'Fastify', 'Express', 'Convex', 'None'],
    runtime: ['Node.js', 'Bun'],
    database: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB'],
    orm: ['Drizzle', 'Prisma'],
    apiLayer: ['tRPC', 'oRPC'],
    authentication: ['Clerk', 'Better Auth', 'None']
  };

  const databaseProviders = {
    postgresql: ['Neon', 'Supabase', 'Local'],
    sqlite: ['Turso', 'Local'],
    mysql: ['PlanetScale', 'Local']
  };

  const addOns = {
    tooling: ['Biome', 'Husky'],
    infrastructure: ['Nx'],
    ai: ['Vercel AI SDK']
  };

  const renderWebParts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(webParts).map(([category, options]) => (
        <div key={category} className="bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md rounded-2xl p-5 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <h3 className="text-green-400 text-2xl capitalize tracking-wider">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {options.map((option, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-900/80 rounded-xl text-lg text-gray-200 border border-gray-600/50 hover:border-green-500/70 hover:bg-green-500/10 hover:text-green-400 transition-all duration-200 cursor-pointer tracking-wide"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderDatabaseProviders = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(databaseProviders).map(([database, providers]) => (
        <div key={database} className="bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md rounded-2xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            <h3 className="text-blue-400 text-2xl capitalize tracking-wider">{database}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {providers.map((provider, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-900/80 rounded-xl text-lg text-gray-200 border border-gray-600/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200 cursor-pointer tracking-wide"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderAddOns = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(addOns).map(([category, options]) => (
        <div key={category} className="bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-purple-400 text-2xl capitalize tracking-wider">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {options.map((option, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-900/80 rounded-xl text-lg text-gray-200 border border-gray-600/50 hover:border-purple-500/70 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200 cursor-pointer tracking-wide"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case 'web-parts':
        return renderWebParts();
      case 'database-providers':
        return renderDatabaseProviders();
      case 'add-ons':
        return renderAddOns();
      default:
        return renderWebParts();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-xl text-xl transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-linear-to-r from-green-500 to-emerald-600 text-black shadow-xl shadow-green-500/30 scale-105'
                : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 hover:text-gray-200 border border-gray-700/50 hover:border-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderContent()}
      </div>
    </div>
  );
};

export default TechShowcase;

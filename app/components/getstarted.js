import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  return (
    <StyledWrapper className='joe'>
      <button className="cta" onClick={() => router.push('/builder')}>
        <span className="span whitespace-nowrap text-base sm:text-3xl">Start Building</span>
      </button>
    </StyledWrapper>
  );
}

const COMMANDS = {
  bun: 'bunx celtrix@latest',
  pnpm: 'pnpm dlx celtrix@latest',
  npm: 'npx celtrix@latest',
};

export const QuickStart = () => {
  const router = useRouter();
  const [manager, setManager] = useState('npm');
  const [copied, setCopied] = useState(false);
  const command = COMMANDS[manager];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-5 gap-4 font-mono text-left">
      {/* Command card */}
      <div className="md:col-span-3 flex flex-col bg-[#0d0d0d]/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-green-500/5">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-800 bg-black/40">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <div className="flex gap-1 p-1 bg-black/60 border border-gray-800 rounded-lg" role="tablist" aria-label="Package manager">
            {Object.keys(COMMANDS).map((pm) => (
              <button
                key={pm}
                role="tab"
                aria-selected={manager === pm}
                onClick={() => { setManager(pm); setCopied(false); }}
                className={`px-3 py-1 rounded-md text-xs sm:text-sm transition-colors cursor-pointer ${
                  manager === pm
                    ? 'bg-green-500 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {pm}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4 sm:p-5 flex-1 justify-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Run in your terminal</span>
          <div className="flex items-center justify-between gap-3 bg-black/70 border border-gray-800 hover:border-green-500/40 rounded-lg pl-4 pr-2 py-2.5 transition-colors">
            <span className="truncate text-sm sm:text-lg text-gray-100">
              <span className="text-green-500 select-none">$ </span>{command}
            </span>
            <button
              onClick={copyToClipboard}
              title="Copy to clipboard"
              aria-label={copied ? 'Copied' : `Copy ${command}`}
              className={`flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-md text-xs border transition-colors cursor-pointer ${
                copied
                  ? 'border-green-500/50 bg-green-500/10 text-green-400'
                  : 'border-gray-700 text-gray-300 hover:border-green-500/50 hover:text-green-400'
              }`}
            >
              {copied ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
              {copied ? 'copied' : 'copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Stack builder card */}
      <button
        onClick={() => router.push('/builder')}
        className="group md:col-span-2 relative flex flex-col justify-between gap-6 p-5 text-left rounded-xl border border-gray-800 hover:border-green-500/60 bg-[#0d0d0d] bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_60%)] shadow-2xl shadow-green-500/5 overflow-hidden transition-colors cursor-pointer"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/30 text-green-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Stack builder</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Choose your own stack in the browser, then copy the generated command.
          </p>
        </div>
        <span className="flex items-center gap-2 text-green-400 group-hover:text-green-300 text-sm">
          Start Building
          <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
        </span>
      </button>
    </div>
  );
}

const StyledWrapper = styled.div`
  .cta {
    display: flex;
    padding: 11px 33px;
    text-decoration: none;
    border-color: black;
    border-width: 1px;
    font-size: 25px;
    color: white;
    background: #4CAF50;
    transition: 0.5s;
    color:black;
    transition: 0.3s;
   box-shadow:
    4px 4px 0px #3B82F6,        /* First shadow (main outline) */
    8px 8px 0px red; /* Second shadow (blurred soft shadow) */
  
    transform: skewX(-15deg);
    
    cursor: pointer;
  }

  @media (max-width: 639px) {
    .cta {
      padding: 8px 16px;
    }
  }

  .cta:focus {
    outline: none;
  }

  .cta:hover {
    transition: 0.3s;
   box-shadow:
    7px 7px 0px #3B82F6,        /* First shadow (main outline) */
    13px 13px 0px red; /* Second shadow (blurred soft shadow) */
  }

  .cta .second {
    transition: 0.5s;
    margin-right: 0px;
  }

  .cta:hover .second {
    transition: 0.5s;
    margin-right: 45px;
  }

  .span {
    transform: skewX(15deg);
  }

  .second {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  .one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  .two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .cta:hover .three {
    animation: color_anim 1s infinite 0.2s;
  }

  .cta:hover .one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .cta:hover .two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% {
      fill: white;
    }

    50% {
      fill: #fbc638;
    }

    100% {
      fill: white;
    }
  }`;

export default Button;

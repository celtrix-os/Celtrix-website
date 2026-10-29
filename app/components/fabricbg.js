import React from 'react';

// Seamless wave: one period is 1200 wide, drawn twice so the strip can loop at -50%.
const wave = (y, amp) =>
  `M0 ${y} C300 ${y - amp} 900 ${y + amp} 1200 ${y} C1500 ${y - amp} 2100 ${y + amp} 2400 ${y}`;

const strands = [
  { y: 220, amp: 90, width: 70, opacity: 0.35, duration: 22 },
  { y: 300, amp: 120, width: 40, opacity: 0.5, duration: 16 },
  { y: 360, amp: 70, width: 110, opacity: 0.2, duration: 28 },
  { y: 420, amp: 140, width: 24, opacity: 0.6, duration: 19 },
];

const FabricBg = ({ from, to, reverse = false, intensity = 1 }) => {
  const id = `fabric-${from.replace('#', '')}-${to.replace('#', '')}`;

  return (
    <div
      aria-hidden="true"
      className="absolute -inset-y-32 left-1/2 w-screen -translate-x-1/2 -z-10 overflow-hidden pointer-events-none"
      style={{
        // Kept faint site-wide so the fabric stays a mild backdrop.
        opacity: intensity * 0.4,
        maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
      }}
    >
      <div
        className="fabric-glow absolute -top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full blur-3xl opacity-15"
        style={{ background: from }}
      />
      <div
        className="fabric-glow fabric-glow-alt absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full blur-3xl opacity-15"
        style={{ background: to }}
      />

      {/* reverse turns the whole fabric 180°, so it flows the other way */}
      <div className={`absolute inset-0 ${reverse ? 'rotate-180' : ''}`}>
      {strands.map((s, i) => (
        <svg
          key={i}
          className="fabric-strand absolute top-0 left-0 h-full w-[200%] blur-md"
          style={{ animationDuration: `${s.duration}s`, animationDirection: i % 2 ? 'reverse' : 'normal' }}
          viewBox="0 0 2400 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`${id}-${i}`} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor={from} stopOpacity="0" />
              <stop offset="25%" stopColor={from} />
              <stop offset="50%" stopColor={to} />
              <stop offset="75%" stopColor={from} />
              <stop offset="100%" stopColor={from} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={wave(s.y, s.amp)}
            fill="none"
            stroke={`url(#${id}-${i})`}
            strokeWidth={s.width}
            strokeLinecap="round"
            opacity={s.opacity * 0.3}
          />
        </svg>
      ))}
      </div>
    </div>
  );
};

export default FabricBg;

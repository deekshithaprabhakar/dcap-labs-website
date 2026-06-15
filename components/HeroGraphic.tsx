'use client'

// Background graphic for the Hero section — an enlarged, translucent
// rendering of the DCAP Labs Seal Mark, positioned behind the hero text.
// The mark slowly rotates in place (full rotation every 240s), sitting at
// low opacity, full-bleed across the hero.
// pointer-events: none so it never blocks clicks/selection.

export default function HeroGraphic() {
  const ink   = '#0D0D0D'
  const muted = 'rgba(0,0,0,0.3)'
  const gold  = '#B07030'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-graphic-svg"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-12%',
          width: 'min(78vw, 820px)',
          height: 'min(78vw, 820px)',
          transform: 'translateY(-50%)',
          opacity: 0.14,
        }}
      >
        {/* Rotating group — spins around the seal's centre (32,32) */}
        <g className="hg-spin" style={{ transformOrigin: '32px 32px' }}>

          {/* Outer dashed ring */}
          <circle cx="32" cy="32" r="30" stroke={gold} strokeWidth="0.5" fill="none" strokeDasharray="1.4 1.8" />

          {/* Inner thin ring */}
          <circle cx="32" cy="32" r="24" stroke={muted} strokeWidth="0.4" fill="none" />

          {/* Top spoke — black */}
          <line x1="32" y1="32" x2="32" y2="9" stroke={ink} strokeWidth="1" strokeLinecap="round" />
          <circle cx="32" cy="9" r="1.7" fill={ink} />

          {/* Upper-left spoke — grey */}
          <line x1="32" y1="32" x2="15" y2="19" stroke={muted} strokeWidth="0.85" strokeLinecap="round" />
          <circle cx="15" cy="19" r="1.4" fill={muted} />

          {/* Left spoke — light grey */}
          <line x1="32" y1="32" x2="9" y2="32" stroke={muted} strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
          <circle cx="9" cy="32" r="1.25" fill={muted} opacity="0.6" />

          {/* Right spoke — gold */}
          <line x1="32" y1="32" x2="51" y2="32" stroke={gold} strokeWidth="0.9" strokeLinecap="round" />
          <circle cx="51" cy="32" r="1.7" fill={gold} />

          {/* Lower-left spoke — gold */}
          <line x1="32" y1="32" x2="20" y2="48" stroke={gold} strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
          <circle cx="20" cy="48" r="1.5" fill={gold} opacity="0.8" />

          {/* Bottom spoke — gold */}
          <line x1="32" y1="32" x2="32" y2="53" stroke={gold} strokeWidth="0.9" strokeLinecap="round" />
          <circle cx="32" cy="53" r="1.6" fill={gold} />

          {/* Central hub — does NOT rotate visually since it's a circle, but kept inside group for simplicity */}
          <circle cx="32" cy="32" r="12" fill={ink} />
          <circle cx="32" cy="32" r="7" fill={gold} />
          <circle cx="32" cy="32" r="2.8" fill="#1A1208" />
        </g>
      </svg>

      <style>{`
        @keyframes hg-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .hg-spin {
          animation: hg-spin 240s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hg-spin { animation: none; }
        }
        @media (max-width: 900px) {
          .hero-graphic-svg {
            opacity: 0.09 !important;
            right: -32% !important;
          }
        }
      `}</style>
    </div>
  )
}

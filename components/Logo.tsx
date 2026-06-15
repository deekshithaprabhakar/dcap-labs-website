'use client'

// DCAP Labs — Seal Mark
// Recreated from the circular seal reference: a dashed outer ring, a thin
// circle inner ring, six spokes radiating from a central hub (3 black/grey
// inputs, 3 gold outputs), with the hub itself a dark ring around a gold
// centre with a small dark core.
// "DCAP LABS" wordmark and "ALIGN · BUILD · ENDURE" tagline are NOT baked
// into the SVG mark — the wordmark is set separately in Navbar/Footer so it
// can use the site's actual fonts and remain crisp at any size.

export default function Logo({
  size = 44,
  dark = false,
}: {
  size?: number
  dark?: boolean
}) {
  const ink   = dark ? '#FFFFFF' : '#0D0D0D'
  const muted = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)'
  const gold  = '#B07030'

  // ViewBox 64x64, centre (32,32)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer dashed ring */}
      <circle cx="32" cy="32" r="30" stroke={gold} strokeWidth="0.9" fill="none" strokeDasharray="2.5 3" opacity="0.55" />

      {/* Inner thin ring */}
      <circle cx="32" cy="32" r="24" stroke={muted} strokeWidth="0.75" fill="none" />

      {/* Top spoke — black, vertical */}
      <line x1="32" y1="32" x2="32" y2="9" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="32" cy="9" r="3" fill={ink} />

      {/* Upper-left spoke — grey/muted */}
      <line x1="32" y1="32" x2="15" y2="19" stroke={muted} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15" cy="19" r="2.5" fill={muted} />

      {/* Left spoke — light grey, along inner ring */}
      <line x1="32" y1="32" x2="9" y2="32" stroke={muted} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="9" cy="32" r="2.2" fill={muted} opacity="0.6" />

      {/* Right spoke — gold */}
      <line x1="32" y1="32" x2="51" y2="32" stroke={gold} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="51" cy="32" r="3" fill={gold} />

      {/* Lower-left spoke — gold, slightly faded */}
      <line x1="32" y1="32" x2="20" y2="48" stroke={gold} strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
      <circle cx="20" cy="48" r="2.6" fill={gold} opacity="0.8" />

      {/* Bottom spoke — gold */}
      <line x1="32" y1="32" x2="32" y2="53" stroke={gold} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="53" r="2.8" fill={gold} />

      {/* Central hub */}
      <circle cx="32" cy="32" r="12" fill={ink} />
      <circle cx="32" cy="32" r="7" fill={gold} />
      <circle cx="32" cy="32" r="2.8" fill={dark ? '#F8F7F4' : '#1A1208'} />
    </svg>
  )
}

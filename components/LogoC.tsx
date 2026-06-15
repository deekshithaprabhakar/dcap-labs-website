// Option C — Pure Wordmark with Tagline
export default function LogoC({ size = 40, dark = false, showTagline = true }: { size?: number; dark?: boolean; showTagline?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  const muted = dark ? 'rgba(255,255,255,0.35)' : '#999999'
  const h = showTagline ? size * 1.4 : size
  return (
    <svg width={size * (500/70)} height={h} viewBox={`0 0 500 ${showTagline ? 70 : 60}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="50" fontFamily="Georgia, serif" fontSize="46" fontWeight="700" fill={ink} letterSpacing="-1">DCAP</text>
      <line x1="195" y1="12" x2="195" y2="58" stroke="#B07030" strokeWidth="1.5"/>
      <text x="208" y="50" fontFamily="Georgia, serif" fontSize="36" fontWeight="300" fontStyle="italic" fill="#B07030" letterSpacing="2">Labs</text>
      {showTagline && <text x="1" y="67" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill={muted} letterSpacing="2.5">DHARMIC · CAPITAL · ACTION · PURPOSE</text>}
    </svg>
  )
}

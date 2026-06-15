export default function LogoL({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  const sep = dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
  const h   = size
  const w   = size * (320/64)
  return (
    <svg width={w} height={h} viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0"   y="44" fontFamily="Georgia,serif" fontSize="38" fontWeight="700"  fill={ink}    >D</text>
      <text x="28"  y="44" fontFamily="Georgia,serif" fontSize="38" fontWeight="300"  fill="#B07030" fontStyle="italic">C</text>
      <text x="56"  y="44" fontFamily="Georgia,serif" fontSize="38" fontWeight="700"  fill={ink}    >A</text>
      <text x="84"  y="44" fontFamily="Georgia,serif" fontSize="38" fontWeight="300"  fill="#B07030" fontStyle="italic">P</text>
      <line x1="120" y1="10" x2="120" y2="54" stroke={sep} strokeWidth="1"/>
      <text x="132" y="44" fontFamily="Georgia,serif" fontSize="28" fontWeight="300"  fill={ink}    letterSpacing="4">Labs</text>
    </svg>
  )
}

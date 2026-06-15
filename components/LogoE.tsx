// Option E — Stacked Editorial
export default function LogoE({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  return (
    <svg width={size * (120/80)} height={size} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="8" x2="120" y2="8" stroke="#B07030" strokeWidth="2"/>
      <text x="0" y="52" fontFamily="Georgia, serif" fontSize="42" fontWeight="700" fill={ink} letterSpacing="-1">DCAP</text>
      <text x="2" y="68" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" fill="#B07030" letterSpacing="5">L A B S</text>
      <line x1="0" y1="76" x2="120" y2="76" stroke="#B07030" strokeWidth="0.75" opacity="0.4"/>
    </svg>
  )
}

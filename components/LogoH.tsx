export default function LogoH({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  const ink4 = dark ? 'rgba(255,255,255,0.4)' : 'rgba(13,13,13,0.4)'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6"  y="16" width="8" height="44" rx="1" fill={ink}/>
      <rect x="20" y="8"  width="8" height="52" rx="1" fill="#B07030"/>
      <rect x="34" y="16" width="8" height="44" rx="1" fill={ink} opacity="0.4"/>
      <line x1="4" y1="64" x2="44" y2="64" stroke="#B07030" strokeWidth="2"/>
      <text x="58" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="58" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

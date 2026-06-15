export default function LogoI({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="36" rx="18" ry="28" stroke={ink} strokeWidth="1.5" fill="none"/>
      <ellipse cx="44" cy="36" rx="18" ry="28" stroke={ink} strokeWidth="1.5" fill="none"/>
      <path d="M36 8 Q48 36 36 64" stroke="#B07030" strokeWidth="2" fill="none"/>
      <path d="M36 8 Q24 36 36 64" stroke="#B07030" strokeWidth="2" fill="none"/>
      <circle cx="36" cy="36" r="4" fill="#B07030"/>
      <text x="76" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="76" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

// Option D — Lotus Circle Mark
export default function LogoD({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink    = dark ? '#FFFFFF' : '#0D0D0D'
  const cirBg  = dark ? '#FFFFFF' : '#0D0D0D'
  const letter = dark ? '#0D0D0D' : '#FFFFFF'
  return (
    <svg width={size * (240/72)} height={size} viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="32" stroke="#B07030" strokeWidth="1" fill="none" opacity="0.3"/>
      <circle cx="36" cy="36" r="24" stroke="#B07030" strokeWidth="0.75" fill="none" opacity="0.2"/>
      <ellipse cx="36" cy="12" rx="4" ry="8" fill="#B07030" opacity="0.35"/>
      <ellipse cx="36" cy="60" rx="4" ry="8" fill="#B07030" opacity="0.35"/>
      <ellipse cx="12" cy="36" rx="8" ry="4" fill="#B07030" opacity="0.35"/>
      <ellipse cx="60" cy="36" rx="8" ry="4" fill="#B07030" opacity="0.35"/>
      <circle cx="36" cy="36" r="14" fill={cirBg}/>
      <rect x="28" y="26" width="2.5" height="20" rx="1.2" fill={letter}/>
      <path d="M30.5 26 Q44 26 44 36 Q44 46 30.5 46" stroke={letter} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <text x="82" y="32" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill={ink} letterSpacing="-0.3">DCAP</text>
      <text x="82" y="52" fontFamily="Georgia, serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="0.5">Labs</text>
    </svg>
  )
}

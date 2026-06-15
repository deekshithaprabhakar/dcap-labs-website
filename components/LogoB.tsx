// Option B — Black Block + D Mark
export default function LogoB({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink  = dark ? '#FFFFFF' : '#0D0D0D'
  const boxBg = dark ? '#FFFFFF' : '#0D0D0D'
  const letterCol = dark ? '#0D0D0D' : '#FFFFFF'
  return (
    <svg width={size * (240/72)} height={size} viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="6" width="60" height="60" rx="6" fill={boxBg}/>
      <rect x="16" y="18" width="3.5" height="36" rx="1.5" fill={letterCol}/>
      <path d="M19.5 18 Q38 18 38 36 Q38 54 19.5 54" stroke={letterCol} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="52" cy="14" r="5" fill="#B07030"/>
      <text x="74" y="33" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill={ink} letterSpacing="-0.3">DCAP</text>
      <text x="74" y="54" fontFamily="Georgia, serif" fontSize="15" fontStyle="italic" fill="#B07030" letterSpacing="0.5">Labs</text>
    </svg>
  )
}

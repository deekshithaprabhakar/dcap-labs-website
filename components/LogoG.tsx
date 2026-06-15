export default function LogoG({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  const bg  = dark ? '#1A1A1A' : '#F8F7F4'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="26" stroke={ink} strokeWidth="10" fill="none"/>
      <circle cx="36" cy="36" r="26" stroke={bg} strokeWidth="8" fill="none" strokeDasharray="30 52" strokeDashoffset="0"/>
      <circle cx="36" cy="36" r="16" stroke="#B07030" strokeWidth="2" fill="none"/>
      <circle cx="36" cy="36" r="6" fill="#B07030"/>
      <text x="74" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="74" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

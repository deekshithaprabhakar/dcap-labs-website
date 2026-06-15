export default function LogoK({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink  = dark ? '#FFFFFF' : '#0D0D0D'
  const sq   = dark ? '#FFFFFF' : '#0D0D0D'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8"  y="8"  width="56" height="56" rx="3" stroke="#B07030" strokeWidth="1" fill="none" opacity="0.4"/>
      <rect x="16" y="16" width="40" height="40" rx="2" stroke="#B07030" strokeWidth="0.75" fill="none" opacity="0.3"/>
      <line x1="8"  y1="36" x2="64" y2="36" stroke="#B07030" strokeWidth="0.75" opacity="0.4"/>
      <line x1="36" y1="8"  x2="36" y2="64" stroke="#B07030" strokeWidth="0.75" opacity="0.4"/>
      <line x1="8"  y1="8"  x2="64" y2="64" stroke="#B07030" strokeWidth="0.5"  opacity="0.25"/>
      <line x1="64" y1="8"  x2="8"  y2="64" stroke="#B07030" strokeWidth="0.5"  opacity="0.25"/>
      <rect x="26" y="26" width="20" height="20" rx="1" fill={sq}/>
      <rect x="30" y="30" width="12" height="12" rx="0.5" fill="#B07030"/>
      <text x="76" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="76" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

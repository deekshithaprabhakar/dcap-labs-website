export default function LogoJ({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="56" height="56" rx="28" stroke={ink} strokeWidth="1.5" fill="none"/>
      <text x="32" y="46" fontFamily="Georgia,serif" fontSize="32" fontWeight="700" fill={ink} textAnchor="middle">D</text>
      <circle cx="51" cy="20" r="5" fill="#B07030"/>
      <text x="74" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="74" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

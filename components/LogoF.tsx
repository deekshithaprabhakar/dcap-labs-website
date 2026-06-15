export default function LogoF({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  return (
    <svg width={size * (180/72)} height={size} viewBox="0 0 180 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="4,10 28,36 4,62 20,62 44,36 20,10" fill="#B07030"/>
      <polygon points="20,10 44,36 20,62 36,62 60,36 36,10" fill="#B07030" opacity="0.35"/>
      <text x="72" y="30" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="72" y="52" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

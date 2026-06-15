export default function LogoM({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#FFFFFF' : '#0D0D0D'
  const h   = size
  const w   = size * (260/72)
  return (
    <svg width={w} height={h} viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="42" fontFamily="Georgia,serif" fontSize="34" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP Labs</text>
      <path d="M0 56 Q40 48 80 54 Q120 60 160 52 Q200 46 240 54" stroke="#B07030" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M0 62 Q60 58 120 62 Q180 66 240 60" stroke="#B07030" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.35"/>
    </svg>
  )
}

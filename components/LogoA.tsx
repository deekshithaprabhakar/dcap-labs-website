// Option A — Diamond & Serif
export default function LogoA({ size = 40, dark = false }: { size?: number; dark?: boolean }) {
  const ink  = dark ? '#FFFFFF' : '#0D0D0D'
  const s    = size
  const ratio = s / 72
  return (
    <svg width={s * (240/72)} height={s} viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="10" width="52" height="52" rx="4" fill="#B07030" opacity="0.1"/>
      <path d="M26 14 L48 36 L26 58 L4 36 Z" stroke="#B07030" strokeWidth="1.5" fill="none"/>
      <path d="M26 22 L40 36 L26 50 L12 36 Z" fill="#B07030" opacity="0.2"/>
      <line x1="26" y1="14" x2="26" y2="58" stroke="#B07030" strokeWidth="0.75" opacity="0.4"/>
      <line x1="4" y1="36" x2="48" y2="36" stroke="#B07030" strokeWidth="0.75" opacity="0.4"/>
      <text x="64" y="32" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill={ink} letterSpacing="-0.5">DCAP</text>
      <text x="64" y="54" fontFamily="Georgia, serif" fontSize="16" fontWeight="400" fontStyle="italic" fill="#B07030" letterSpacing="1">Labs</text>
    </svg>
  )
}

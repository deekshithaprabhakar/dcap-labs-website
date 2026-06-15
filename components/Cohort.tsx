'use client'

const cohorts = [
  {
    name: 'VṛtaM',
    fullName: 'VRtam Studios',
    url: 'https://vrtam.in/',
    category: 'Culture & Technology',
    desc: 'VṛtaM builds immersive cultural and educational experiences rooted in Indic knowledge systems through mediums such as AR, VR, and interactive storytelling.',
    tags: ['Immersive Tech', 'AR / VR', 'Indic Knowledge', 'Interactive Storytelling'],
    // VṛtaM brand: deep crimson + gold, premium dharmic storytelling
    dark: true,
    bg: '#1A0A0A',
    accent: '#C8860A',
    accentBg: '#2C1400',
  },
  {
    name: 'OpenIKS Alliance',
    fullName: 'Open IKS Alliance',
    url: '#',
    category: 'Knowledge Systems',
    desc: 'OpenIKS Alliance is an open collaborative initiative focused on enabling broader access, research, and development around Indic Knowledge Systems.',
    tags: ['Open Source', 'IKS Research', 'Knowledge Commons', 'Collaboration'],
    dark: false,
    bg: '#FDFCFA',
    accent: '#B07030',
    accentBg: '#F5F0E8',
  },
]

// VṛtaM SVG logo mark — stylised V with lotus/flame
function VrtamLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#2C1400" stroke="#C8860A" strokeWidth="1"/>
      {/* V mark */}
      <path d="M 12 14 L 24 34 L 36 14" stroke="#C8860A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Centre lotus dot */}
      <circle cx="24" cy="30" r="3" fill="#C8860A"/>
      {/* Small accent lines */}
      <line x1="24" y1="8" x2="24" y2="12" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

export default function Cohort() {
  return (
    <section id="cohort" className="fs-section" style={{ background:'#FDFCFA', justifyContent:'flex-start', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, marginBottom:72 }} className="coh-hd">
          <div>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>Current Cohort</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,58px)', color:'#0D0D0D' }}>
              Our Current<br /><em style={{ fontWeight:300, color:'#B07030' }}>Cohort.</em>
            </h2>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end' }}>
            <p className="body-lg">
              The current cohort spans culture, technology, and knowledge systems.
              Each venture is selected for alignment of purpose, founder, and execution.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display:'flex', flexDirection:'column', gap:1 }}>
          {cohorts.map((v, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'300px 1fr 180px', background:'#EAE5DF' }} className="coh-card">

              {/* Name panel */}
              <div style={{ background: v.bg, padding:'48px 40px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div>
                  {i === 0 && <div style={{ marginBottom:16 }}><VrtamLogo/></div>}
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color: v.accent, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>{v.category}</div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:44, fontWeight:700, color: v.dark?'#fff':'#0D0D0D', letterSpacing:'-0.02em', lineHeight:1, marginBottom:8 }}>{v.name}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color: v.dark?'rgba(255,255,255,0.3)':'#999', letterSpacing:'0.05em', textTransform:'uppercase' }}>{v.fullName}</p>
                </div>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:600, color:'#2D6A45', background:'#EBF5EE', padding:'4px 12px', borderRadius:100, alignSelf:'flex-start', marginTop:32 }}>● Active</span>
              </div>

              {/* Description */}
              <div style={{ background:'#fff', padding:'48px 48px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                {i === 0 && (
                  <div style={{ marginBottom:20, padding:'12px 16px', background:'#FDF8F0', border:'1px solid #E8D5B8', borderRadius:8, borderLeft:`3px solid ${v.accent}` }}>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:14, color:'#B07030' }}>
                      "Reimagining India's timeless wisdom for the digital age through premium multi-platform Dharmic storytelling."
                    </p>
                  </div>
                )}
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:16, fontWeight:300, color:'#3D3D3D', lineHeight:1.85, marginBottom:28 }}>{v.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {v.tags.map(t => (
                    <span key={t} style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:'#6B6B6B', background:'#FDFCFA', border:'1px solid #EAE5DF', padding:'5px 14px', borderRadius:100 }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Link panel */}
              <div style={{ background: i===0 ? v.accent : '#F5F0E8', padding:'48px 28px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
                <a href={v.url} target={v.url!=='#'?'_blank':undefined} rel="noopener noreferrer"
                  style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:600, color: i===0?'#fff':'#B07030', textDecoration:'none', textAlign:'center' }}>
                  {v.url!=='#' ? 'Visit Website ↗' : 'Coming Soon'}
                </a>
                {v.url!=='#' && <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color: i===0?'rgba(255,255,255,0.5)':'#999' }}>vrtam.in</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Apply CTA */}
        <div style={{ marginTop:56, display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:40, borderTop:'1px solid #EAE5DF', gap:24, flexWrap:'wrap' }}>
          <div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, color:'#0D0D0D', marginBottom:6 }}>Interested in joining a future cohort?</p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'#6B6B6B' }}>We work with founders building with clarity, responsibility, and long-term intent.</p>
          </div>
          <a href="#contact" className="btn-gold">Apply for Next Cohort →</a>
        </div>
      </div>
      <style>{`.coh-hd{grid-template-columns:1fr 1fr}.coh-card{grid-template-columns:300px 1fr 180px}@media(max-width:1000px){.coh-card{grid-template-columns:1fr!important}}@media(max-width:900px){.coh-hd{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </section>
  )
}

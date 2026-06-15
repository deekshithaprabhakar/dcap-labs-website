'use client'

const concepts = [
  { term:'Dharma',    meaning:'Right order & responsibility', desc:'The foundation of how we think about enterprise — not just what is built, but whether it should be built, and whether it is built responsibly.' },
  { term:'Swabhava',  meaning:'Natural strengths & tendencies', desc:'Understanding what a founder is genuinely suited for — their instincts, strengths, and natural inclinations — before shaping a role around them.' },
  { term:'Swadharma', meaning:'Aligned role & responsibility', desc:'The alignment of natural strengths with a role that contributes meaningfully. Ventures become stronger when founders build in alignment with who they are.' },
  { term:'Artha',     meaning:'Meaningful value & enabling capacity', desc:'Not limited to money. Includes knowledge, relationships, trust, and the ability to create and sustain value over time.' },
]

export default function About() {
  return (
    <section id="about" className="fs-section" style={{ background:'#fff', justifyContent:'flex-start', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px 100px', alignItems:'start' }} className="about-grid">

          {/* Left */}
          <div>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>About DCAP Labs</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,58px)', color:'#0D0D0D', marginBottom:36 }}>
              A venture creation<br />and ecosystem platform<br />
              <em style={{ fontWeight:300, color:'#B07030' }}>for what endures.</em>
            </h2>
            <p className="body-lg" style={{ marginBottom:22 }}>
              DCAP Labs is a venture creation and ecosystem platform focused on building
              enduring businesses rooted in civilizational thinking and modern execution.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:22 }}>
              Many ventures today are built around trends and short-term momentum. We are
              more interested in building things that are useful, grounded, and capable of lasting.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:22 }}>
              Our work starts with a simple question: <em style={{ color:'#0D0D0D' }}>why should this venture exist?</em>
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:36 }}>
              From there, we focus on the people building it, the problem being solved,
              and the value being created.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:36 }}>
              We also believe no venture succeeds in isolation. Businesses grow through
              strong ecosystems built on trust, collaboration, knowledge exchange, and
              aligned value creation. DCAP Labs exists to help build and strengthen
              those ecosystems.
            </p>
            <a href="#vision" className="btn-dark">Vision & Mission →</a>
          </div>

          {/* Right — framework concepts */}
          <div style={{ display:'flex', flexDirection:'column', gap:0, paddingTop:8 }}>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'#999', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:600, marginBottom:28 }}>
              Our Conceptual Framework
            </p>
            {concepts.map((c, i) => (
              <div key={i} style={{ padding:'26px 0', borderBottom: i < concepts.length-1 ? '1px solid #E8E4DE' : 'none' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:10 }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:'#0D0D0D', letterSpacing:'-0.01em' }}>{c.term}</span>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color:'#B07030', letterSpacing:'0.08em', textTransform:'uppercase' }}>{c.meaning}</span>
                </div>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'#6B6B6B', lineHeight:1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.about-grid{grid-template-columns:1fr 1fr}@media(max-width:960px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

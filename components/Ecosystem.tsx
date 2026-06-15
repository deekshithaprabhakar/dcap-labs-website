'use client'

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="fs-section" style={{ background:'#fff', justifyContent:'flex-start', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, marginBottom:72, alignItems:'start' }} className="eco-hd">
          <div>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>Indic Ecosystem</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,58px)', color:'#0D0D0D', lineHeight:1.1 }}>
              Reimagining the<br />
              <em style={{ fontWeight:300, color:'#B07030' }}>Indic Ecosystem.</em>
            </h2>
          </div>
          <div style={{ paddingTop:12 }}>
            <p className="body-lg" style={{ marginBottom:22 }}>
              Across technology, education, culture, wellness, and knowledge systems,
              there is growing interest in rebuilding and reinterpreting Indic ideas
              for the modern world.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82 }}>
              There is energy and momentum, but much of it remains fragmented.
            </p>
          </div>
        </div>

        {/* Two-column body */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'#E8E4DE', marginBottom:1 }} className="eco-grid">
          <div style={{ background:'#F8F7F4', padding:'48px 44px' }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:'#0D0D0D', marginBottom:20 }}>
              The opportunity
            </h3>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:20 }}>
              We believe the next step is to build stronger connections between people,
              institutions, ventures, and communities — so that knowledge, capital,
              talent, and value can move more effectively across the ecosystem.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82 }}>
              DCAP Labs sees ventures as part of a larger network rather than isolated
              companies. The goal is not uniformity. The goal is coherence.
            </p>
          </div>
          <div style={{ background:'#fff', padding:'48px 44px' }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:'#0D0D0D', marginBottom:20 }}>
              Our role
            </h3>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, marginBottom:20 }}>
              In the Indic worldview, Artha (meaningful value, capability, and
              prosperity) is not limited to money. It includes knowledge, relationships,
              trust, and the ability to create and sustain value over time.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82 }}>
              Capital is important, but it is a means to build useful and enduring
              things. When enterprise is aligned with Dharma, growth becomes more
              sustainable and value compounds over time.
            </p>
          </div>
        </div>

        {/* Full-width dark callout */}
        <div style={{ background:'#0D0D0D', padding:'44px 52px' }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:22, fontWeight:300, color:'#B07030', lineHeight:1.55 }}>
            "Ecosystems become stronger when meaningful value flows between
            participants — not just capital and information, but trust, aligned
            incentives, and useful contribution."
          </p>
        </div>
      </div>
      <style>{`.eco-hd{grid-template-columns:1fr 1fr}.eco-grid{grid-template-columns:1fr 1fr}@media(max-width:900px){.eco-hd,.eco-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

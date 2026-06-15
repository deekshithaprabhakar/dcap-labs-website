'use client'

export default function VisionMission() {
  return (
    <section id="vision" className="fs-section" style={{ background:'#0D0D0D' }}>
      <div className="wrap" style={{ paddingTop:120, paddingBottom:120 }}>

        {/* Vision */}
        <div style={{ marginBottom:88, paddingBottom:88, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
          <div className="label" style={{ color:'#B07030', marginBottom:32 }}>Vision</div>
          <h2 className="display" style={{ fontSize:'clamp(34px,4.5vw,66px)', color:'#fff', maxWidth:900, lineHeight:1.1 }}>
            To help build a strong and coherent Indic ecosystem by supporting ventures,
            institutions, and systems that create{' '}
            <em style={{ color:'#B07030' }}>meaningful long-term value.</em>
          </h2>
        </div>

        {/* Mission + Philosophy */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }} className="vm-grid">
          <div>
            <div className="label" style={{ color:'rgba(255,255,255,0.3)', marginBottom:24 }}>Mission</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2.2vw,26px)', fontWeight:300, color:'rgba(255,255,255,0.75)', lineHeight:1.6, marginBottom:36 }}>
              DCAP Labs builds and supports ventures by aligning purpose, founders,
              capital, and execution into sustainable systems of value creation.
            </p>
            <a href="#approach" className="btn-ghost-white">Our Approach →</a>
          </div>

          <div style={{ borderLeft:'1px solid rgba(255,255,255,0.08)', paddingLeft:80 }} className="phil-col">
            <div className="label" style={{ color:'rgba(255,255,255,0.3)', marginBottom:24 }}>Philosophy</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:300, color:'#B07030', lineHeight:1.65, marginBottom:24 }}>
              "Dharma. Artha. Responsibility."
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'rgba(255,255,255,0.4)', lineHeight:1.85, marginBottom:18 }}>
              Modern systems often optimize for valuation and short-term outcomes. We take a longer view.
            </p>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'rgba(255,255,255,0.4)', lineHeight:1.85 }}>
              When enterprise is aligned with Dharma, growth becomes more sustainable,
              relationships become stronger, and value compounds over time.
            </p>
          </div>
        </div>
      </div>
      <style>{`.vm-grid{grid-template-columns:1fr 1fr}.phil-col{border-left:1px solid rgba(255,255,255,0.08);padding-left:80px}@media(max-width:900px){.vm-grid{grid-template-columns:1fr!important}.phil-col{border-left:none!important;padding-left:0!important;border-top:1px solid rgba(255,255,255,0.08);padding-top:48px!important}}`}</style>
    </section>
  )
}

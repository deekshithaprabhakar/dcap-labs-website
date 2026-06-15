'use client'

// Team section — minimal, for the About dropdown
export default function Team() {
  return (
    <section id="team" style={{ background:'#FDFCFA', padding:'120px 0', borderTop:'1px solid #EAE5DF' }}>
      <div className="wrap">
        <div style={{ maxWidth:720, margin:'0 auto', textAlign:'center' }}>
          <div className="gold-rule" style={{ margin:'0 auto 32px' }}/>
          <div className="label" style={{ marginBottom:24 }}>Team</div>
          <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,52px)', color:'#0D0D0D', marginBottom:24 }}>
            Built by people who<br /><em style={{ fontWeight:300, color:'#B07030' }}>build with purpose.</em>
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:16, color:'#6B6B6B', lineHeight:1.85, marginBottom:48 }}>
            We are a small, focused team of founders, scholars, and operators who believe that the most enduring ventures are built at the intersection of clarity, knowledge, and long-term intent.
          </p>
          <a href="#contact" className="btn-dark">Work with us →</a>
        </div>
      </div>
    </section>
  )
}

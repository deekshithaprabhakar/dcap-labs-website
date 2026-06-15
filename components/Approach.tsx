'use client'

const steps = [
  { num:'01', title:'Start with Clarity', sub:'Why this venture should exist', desc:'Before discussing products, markets, or scale, we focus on understanding why a venture should exist and whether it solves a real and meaningful problem.' },
  { num:'02', title:'Understand the Founder', sub:'Swabhava — natural strengths & instincts', desc:'We spend time understanding the founder\'s Swabhava — their natural strengths and instincts — and aligning it with their Swadharma, their most aligned role and responsibility.' },
  { num:'03', title:'Shape the Venture', sub:'Only then do we build', desc:'Only then do we shape the venture itself — thinking carefully about product, technology, operations, distribution, and partnerships from the beginning.' },
  { num:'04', title:'Build as a System', sub:'Coherent, not disconnected', desc:'The business is built as a coherent system rather than disconnected parts. Every element is designed to reinforce the others from the start.' },
  { num:'05', title:'Capital as Enabler', sub:'DCAPIF — supporting, not dictating', desc:'Through DCAPIF and strategic collaborations, we support ventures that contribute not only to economic growth, but also to stronger cultural and knowledge ecosystems.' },
  { num:'06', title:'Strengthen the Ecosystem', sub:'Value that flows between participants', desc:'Ecosystems become stronger when meaningful value flows between participants. Capital and information matter, but long-term strength comes from trust, aligned incentives, and useful products.' },
]

export default function Approach() {
  return (
    <section id="approach" className="fs-section" style={{ background:'#F8F7F4', justifyContent:'flex-start', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, marginBottom:72 }} className="app-hd">
          <div>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>Our Approach</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,58px)', color:'#0D0D0D' }}>
              We start<br />
              <em style={{ fontWeight:300, color:'#B07030' }}>with clarity.</em>
            </h2>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end' }}>
            <p className="body-lg">
              Our perspective is simple: ecosystems become stronger when meaningful
              value flows between participants. This shapes how we think about
              enterprise, partnerships, capital, and growth.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'#E8E4DE' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ background: i%2===0 ? '#fff' : '#F8F7F4', padding:'40px 36px' }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:18 }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:48, color:'#E8E4DE', lineHeight:1, flexShrink:0 }}>{s.num}</span>
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:600, color:'#0D0D0D', lineHeight:1.15 }}>{s.title}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:600, color:'#B07030', letterSpacing:'0.07em', textTransform:'uppercase', marginTop:4 }}>{s.sub}</div>
                </div>
              </div>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'#6B6B6B', lineHeight:1.78 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Philosophy callout */}
        <div style={{ marginTop:1, background:'#0D0D0D', padding:'48px 52px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:40, flexWrap:'wrap' }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:24, fontWeight:300, color:'#B07030', maxWidth:520, lineHeight:1.5 }}>
            "Reclaim. Rebuild. Create."
          </p>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'rgba(255,255,255,0.4)', maxWidth:380, lineHeight:1.85 }}>
            DCAP Labs builds ventures and ecosystems focused on meaningful long-term
            value creation rooted in Indic civilizational thinking.
          </p>
        </div>
      </div>
      <style>{`.app-hd{grid-template-columns:1fr 1fr}.steps-grid{grid-template-columns:repeat(3,1fr)}@media(max-width:1000px){.steps-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:768px){.app-hd{grid-template-columns:1fr!important;gap:32px!important}.steps-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

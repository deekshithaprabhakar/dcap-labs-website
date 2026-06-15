'use client'
import { useState } from 'react'

const faqs = [
  { q:'What kind of ventures does DCAP Labs support?', a:'We focus on ventures rooted in Indic civilizational thinking — spanning culture, education, knowledge systems, wellness, technology, and creative industries. The common thread is clarity of purpose and long-term intent, not sector.' },
  { q:'What does the application process look like?', a:'We start with a conversation — not a pitch. We want to understand why you are building, who you are as a founder, and what problem genuinely matters. From there, we discuss fit and how DCAP Labs can contribute.' },
  { q:'Is DCAP Labs an investor?', a:'We operate as a venture creation and ecosystem platform. Capital is one part of what we provide through DCAPIF, but it is an enabler, not the primary lens. We focus first on alignment of purpose, then on what support is needed.' },
  { q:'Do you work with early-stage founders?', a:'Yes. We work with founders at different stages — from early clarity of idea to ventures already in motion. What matters is alignment of intent, not stage of development.' },
  { q:'What is the relationship with OpenIKS Alliance and VṛtaM?', a:'They are part of our current cohort — ventures we are actively supporting. Each is independent but benefits from the DCAP Labs ecosystem of knowledge, capital, and connections.' },
  { q:'How does DCAP Labs think about capital?', a:'Capital is important but it is a means. We think of it as an enabler of creation, structured to support the venture without dictating its direction. Our approach to capital is shaped by the principles of Dharmic Capitalism.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null)
  return (
    <section id="faq" style={{ background:'#F5F0E8', padding:'120px 0', borderTop:'1px solid #EAE5DF' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:80, alignItems:'start' }} className="faq-grid">
          <div style={{ position:'sticky', top:100 }}>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>FAQ</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(28px,3.5vw,48px)', color:'#0D0D0D', marginBottom:20 }}>
              Frequently<br /><em style={{ fontWeight:300, color:'#B07030' }}>asked.</em>
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'#6B6B6B', lineHeight:1.8 }}>
              Questions we hear often. If yours isn't here, reach out directly.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom:'1px solid #DDD8D0' }}>
                <button onClick={() => setOpen(open===i?null:i)}
                  style={{ width:'100%', padding:'24px 0', display:'flex', alignItems:'center', justifyContent:'space-between', background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:16 }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:600, color:'#0D0D0D', lineHeight:1.3 }}>{f.q}</span>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:18, color:'#B07030', flexShrink:0, transition:'transform .2s', transform: open===i?'rotate(45deg)':'none' }}>+</span>
                </button>
                {open===i && (
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#6B6B6B', lineHeight:1.82, paddingBottom:24 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.faq-grid{grid-template-columns:1fr 1.6fr}@media(max-width:900px){.faq-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

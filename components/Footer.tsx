'use client'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  const quickLinks = [['About','#about'],['Vision','#vision'],['Approach','#approach'],['Cohort','#cohort'],['Resources','#resources'],['Contact','#contact']]
  const legalLinks = [['Terms','#terms'],['Privacy','#privacy'],['Disclaimer','#disclaimer']]
  const ls: React.CSSProperties = { display:'block', fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)', textDecoration:'none', marginBottom:10, transition:'color 0.2s' }
  const legalContent: [string,string][][] = [
    [['Use of Content','All content is the intellectual property of DCAP Labs and the Knowledge Systems Foundation. Reproduction without prior written consent is prohibited.'],['Resource Downloads','By downloading resources, you agree to provide accurate information. Your details are used solely to facilitate access and notify DCAP Labs of download activity.'],['IKS Content','IKS content is presented for educational and entrepreneurial purposes with full commitment to authenticity and cultural sensitivity.'],['Contact','For legal inquiries: hello@dcaplabs.in']],
    [['Information We Collect','We collect name, email, and organisation when you submit forms or download resources.'],['How We Use It','Your information is used to respond to inquiries, deliver resources, and notify DCAP Labs of downloads. No unsolicited marketing.'],['Data Storage','Stored securely, accessed only by authorised DCAP Labs personnel. We do not sell or share your data.'],['Your Rights','Request access, correction, or deletion at any time: hello@dcaplabs.in']],
    [['General','Information is for general informational and educational purposes only.'],['No Investment Advice','Nothing here constitutes financial, legal, or investment advice.'],['External Links','DCAP Labs is not responsible for the content of external sites including cohort ventures.'],['Limitation of Liability','DCAP Labs shall not be liable for damages arising from use of this website.']],
  ]
  return (
    <>
      {(['terms','privacy','disclaimer'] as const).map((id,i) => (
        <section key={id} id={id} style={{ background:i%2===0?'#FDFCFA':'#fff', borderTop:'1px solid #E8E4DE', padding:'80px 0' }}>
          <div style={{ maxWidth:720, margin:'0 auto', padding:'0 64px' }}>
            <div className="label" style={{ marginBottom:20 }}>{['Terms & Conditions','Privacy Policy','Disclaimer'][i]}</div>
            <h2 style={{ fontFamily:"'Lora',serif", fontSize:32, fontWeight:400, color:'#0D0D0D', marginBottom:8 }}>{['Terms & Conditions','Privacy Policy','Disclaimer'][i]}</h2>
            <p style={{ fontSize:12, color:'#999', marginBottom:40 }}>Last updated: {new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</p>
            {legalContent[i].map(([t,b],j,arr) => (
              <div key={j} style={{ paddingBottom:20, marginBottom:20, borderBottom:j<arr.length-1?'1px solid #E8E4DE':'none' }}>
                <h4 style={{ fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:15, color:'#0D0D0D', marginBottom:7 }}>{t}</h4>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:'#666', lineHeight:1.75 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer style={{ background:'#0D0D0D' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'64px 64px 40px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:64, paddingBottom:56, borderBottom:'1px solid rgba(255,255,255,0.06)', marginBottom:32 }} className="ft-grid">
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
                <Logo size={48} dark />
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontWeight:700, fontSize:24, color:'#fff', lineHeight:1.1 }}>
                    DCAP <span style={{ fontWeight:300, fontStyle:'italic', color:'#B07030' }}>Labs</span>
                  </div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:9, color:'rgba(255,255,255,0.25)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:4 }}>
                    Building with Clarity and Purpose
                  </div>
                </div>
              </div>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)', lineHeight:1.82, maxWidth:340, marginBottom:24 }}>
                DCAP Labs builds ventures and ecosystems focused on meaningful long-term value creation rooted in Indic civilizational thinking.
              </p>
              <div style={{ borderLeft:'2px solid #B07030', paddingLeft:16, marginBottom:20 }}>
                <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontStyle:'italic', fontSize:15, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>
                  A strong root. Many branches. Each one reaching.
                </p>
              </div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:15, color:'#B07030' }}>"Reclaim. Rebuild. Create."</p>
            </div>
            <div>
              <h5 style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:20 }}>Navigate</h5>
              {quickLinks.map(([l,h]) => <a key={l} href={h} style={ls} onMouseEnter={e=>(e.currentTarget.style.color='#B07030')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.35)')}>{l}</a>)}
            </div>
            <div>
              <h5 style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:20 }}>Legal</h5>
              {legalLinks.map(([l,h]) => <a key={l} href={h} style={ls} onMouseEnter={e=>(e.currentTarget.style.color='#B07030')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.35)')}>{l}</a>)}
              <h5 style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', marginBottom:16, marginTop:28 }}>Connect</h5>
              {[['hello@dcaplabs.in','mailto:hello@dcaplabs.in'],['Twitter','https://twitter.com'],['LinkedIn','https://linkedin.com']].map(([l,h]) => (
                <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{...ls,marginBottom:9}} onMouseEnter={e=>(e.currentTarget.style.color='#B07030')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.35)')}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:'rgba(255,255,255,0.18)' }}>© {year} DCAP Labs. All rights reserved.</span>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:13, color:'rgba(176,112,48,0.4)' }}>"Reclaim. Rebuild. Create."</span>
          </div>
        </div>
        <style>{`.ft-grid{grid-template-columns:2fr 1fr 1fr}@media(max-width:768px){.ft-grid{grid-template-columns:1fr!important}}`}</style>
      </footer>
    </>
  )
}

'use client'
import { useState } from 'react'

type Resource = {
  tag: string; title: string; excerpt: string; meta: string;
  type: 'whitepaper' | 'casestudy' | 'blog' | 'video';
  gated: boolean; videoId?: string;
}

const resources: Resource[] = [
  // White papers — gated
  { tag:'White Paper', title:'Dharmic Capitalism: A Framework for Purpose-Driven Enterprise', excerpt:'Examining the principles of dharmic business practice — ethical foundations, stakeholder wellbeing, and sustainable value creation rooted in Indic thought.', meta:'18 pages · PDF', type:'whitepaper', gated:true },
  { tag:'White Paper', title:'The Indic Ecosystem: Reclaiming Civilisational Knowledge for Modern Ventures', excerpt:'How IKS frameworks can be applied to modern venture-building, product design, and organisational leadership.', meta:'24 pages · PDF', type:'whitepaper', gated:true },
  { tag:'White Paper', title:'Swabhava and Swadharma: Founder-Venture Alignment in Practice', excerpt:'A practical guide to identifying natural strengths and aligning them with a role that contributes meaningfully to the whole.', meta:'16 pages · PDF', type:'whitepaper', gated:true },
  // Case studies — gated
  { tag:'Case Study', title:'VṛtaM: Immersive Indic Experience at Scale', excerpt:'Inside the journey of bringing dharmic wisdom and temple traditions into immersive VR/AR experiences — from concept to cohort venture.', meta:'12 pages · PDF', type:'casestudy', gated:true },
  { tag:'Case Study', title:'OpenIKS Alliance: Building Open Knowledge Ecosystems', excerpt:'How the OpenIKS Alliance is building open, collaborative infrastructure for Indic Knowledge Systems research and access.', meta:'10 pages · PDF', type:'casestudy', gated:true },
  // Blog — FREE (not gated)
  { tag:'Blog', title:'What the Arthaśāstra Teaches Modern Founders', excerpt:"Kauṭilya's 2,400-year-old treatise contains insights on competitive intelligence, pricing strategy, and stakeholder management that remain remarkably current.", meta:'7 min read', type:'blog', gated:false },
  { tag:'Blog', title:'From Swabhava to Swadharma: The Founder Alignment Framework', excerpt:'How DCAP Labs uses the concept of natural strengths and purposeful role to help founders build ventures that are focused, resilient, and grounded.', meta:'6 min read', type:'blog', gated:false },
  { tag:'Blog', title:'Why We Built Around Dharmic Capitalism', excerpt:'Most venture frameworks ask what and how. We start with why — and the answer changes everything about how a venture is built and what it becomes.', meta:'5 min read', type:'blog', gated:false },
  // Video — FREE (not gated)
  { tag:'Video', title:'Introduction to DCAP Labs and the Indic Entrepreneurship Vision', excerpt:'An overview of the DCAP Labs approach — why it exists, who it is for, and how the system of capital, knowledge, and action is structured.', meta:'24 min · Talk', type:'video', gated:false, videoId:'dQw4w9WgXcQ' },
  { tag:'Video', title:'Dharmic Capitalism Masterclass', excerpt:'A deep-dive workshop on designing business models grounded in dharmic principles — covering ethics, sustainability, and stakeholder alignment.', meta:'52 min · Workshop', type:'video', gated:false, videoId:'dQw4w9WgXcQ' },
  { tag:'Video', title:'Building the Indic Ecosystem: Long-term Collaboration and Shared Growth', excerpt:'How DCAP Labs thinks about building a living network where knowledge, capital, and capabilities move across ventures.', meta:'38 min · Lecture', type:'video', gated:false, videoId:'dQw4w9WgXcQ' },
]

const TABS = [
  { key:'all', label:'All Resources' },
  { key:'whitepaper', label:'White Papers' },
  { key:'casestudy', label:'Case Studies' },
  { key:'blog', label:'Blog' },
  { key:'video', label:'Video Library' },
]

type GateForm = { name:string; email:string; org:string }

export default function Insights() {
  const [tab, setTab]           = useState('all')
  const [modal, setModal]       = useState<Resource|null>(null)
  const [videoModal, setVideo]  = useState<Resource|null>(null)
  const [form, setForm]         = useState<GateForm>({ name:'', email:'', org:'' })
  const [submitted, setSub]     = useState(false)

  const filtered = tab==='all' ? resources : resources.filter(r => r.type===tab)

  const handleClick = (r: Resource) => {
    if (r.type==='video') { setVideo(r); return }
    if (r.gated) { setModal(r); setSub(false); return }
    window.open('#', '_blank')
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    try { await fetch('/api/resource-download', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, resource:modal?.title}) }) } catch(_){}
    setSub(true)
  }

  return (
    <section id="resources" className="fs-section" style={{ background:'#FDFCFA', justifyContent:'flex-start', paddingTop:120, paddingBottom:120 }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, marginBottom:64 }} className="ins-hd">
          <div>
            <div className="gold-rule"/>
            <div className="label" style={{ marginBottom:24 }}>Resources</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(32px,4vw,58px)', color:'#0D0D0D' }}>
              Knowledge<br /><em style={{ fontWeight:300, color:'#B07030' }}>Library.</em>
            </h2>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end' }}>
            <p className="body-lg">
              White papers, case studies, articles, and sessions from the DCAP Labs community.
              Blog posts and videos are free. White papers and case studies require registration.
            </p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="tab-bar">
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`tab-btn${tab===t.key?' active':''}`}>
              {t.label}
              <span style={{ marginLeft:6, fontSize:11, color:tab===t.key?'#0D0D0D':'#999', background:'#EAE5DF', borderRadius:3, padding:'1px 6px' }}>
                {t.key==='all' ? resources.length : resources.filter(r=>r.type===t.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }} className="ins-grid">
          {filtered.map((r,i) => (
            <div key={i} className="resource-card" onClick={() => handleClick(r)}>
              <div className="resource-card-body">
                <div className="resource-tag">{r.tag}</div>
                {r.type==='video' && (
                  <div style={{ background:'#F5F0E8', borderRadius:8, height:90, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
                    <span style={{ fontSize:28 }}>▶</span>
                  </div>
                )}
                <div className="resource-title">{r.title}</div>
                <p className="resource-excerpt">{r.excerpt}</p>
              </div>
              <div className="resource-footer">
                <span className="resource-meta">{r.meta}</span>
                <span className="resource-action">
                  {r.type==='video' ? 'Watch →' : r.gated ? 'Download ↓ 🔒' : 'Read →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gated download modal */}
      {modal && (
        <div className="modal-overlay" onClick={e => { if(e.target===e.currentTarget){setModal(null);setSub(false)} }}>
          <div className="modal">
            {submitted ? (
              <div style={{ textAlign:'center', padding:'24px 0' }}>
                <div style={{ fontSize:40, marginBottom:16 }}>✓</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#0D0D0D', marginBottom:10 }}>Thank you.</h3>
                <p style={{ fontSize:14, color:'#6B6B6B', marginBottom:24 }}>Your download is ready.</p>
                <button className="btn-dark" onClick={() => setModal(null)} style={{ fontSize:14 }}>Close</button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom:24 }}>
                  <div style={{ fontSize:10, fontWeight:700, color:'#B07030', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>{modal.tag}</div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:'#0D0D0D', lineHeight:1.35, marginBottom:4 }}>{modal.title}</h3>
                  <p style={{ fontSize:12, color:'#999' }}>{modal.meta}</p>
                </div>
                <p style={{ fontSize:14, color:'#6B6B6B', marginBottom:24, lineHeight:1.7 }}>Enter your details to access this resource.</p>
                <form onSubmit={handleDownload}>
                  <div className="form-group"><label className="form-label">Full Name *</label><input required className="form-input" placeholder="Jane Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
                  <div className="form-group"><label className="form-label">Email *</label><input required type="email" className="form-input" placeholder="jane@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
                  <div className="form-group"><label className="form-label">Organisation</label><input className="form-input" placeholder="Your company or institution" value={form.org} onChange={e=>setForm({...form,org:e.target.value})}/></div>
                  <div style={{ display:'flex', gap:10, marginTop:8 }}>
                    <button type="submit" className="btn-dark" style={{ flex:1, justifyContent:'center', fontSize:14 }}>Download</button>
                    <button type="button" className="btn-ghost" onClick={()=>setModal(null)} style={{ fontSize:14 }}>Cancel</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Video modal — always free */}
      {videoModal && (
        <div className="modal-overlay" onClick={e => { if(e.target===e.currentTarget) setVideo(null) }} style={{ alignItems:'flex-start', paddingTop:60 }}>
          <div className="modal" style={{ maxWidth:720 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:700, color:'#B07030', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>{videoModal.tag}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:'#0D0D0D', lineHeight:1.35 }}>{videoModal.title}</h3>
              </div>
              <button onClick={()=>setVideo(null)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:24, color:'#999', padding:4 }}>×</button>
            </div>
            <div style={{ position:'relative', paddingBottom:'56.25%', height:0, overflow:'hidden', borderRadius:10, background:'#000' }}>
              <iframe src={`https://www.youtube.com/embed/${videoModal.videoId}`} title={videoModal.title} allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', border:'none' }}/>
            </div>
            <p style={{ fontSize:13, color:'#6B6B6B', marginTop:16, lineHeight:1.7 }}>{videoModal.excerpt}</p>
          </div>
        </div>
      )}

      <style>{`.ins-hd{grid-template-columns:1fr 1fr}.ins-grid{grid-template-columns:repeat(3,1fr)}@media(max-width:1000px){.ins-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:768px){.ins-hd{grid-template-columns:1fr!important;gap:32px!important}.ins-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

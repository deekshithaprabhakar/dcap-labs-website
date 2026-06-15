'use client'
import { useState } from 'react'

type F = { name:string; email:string; role:string; message:string }

export default function Contact() {
  const [form, setForm]     = useState<F>({ name:'', email:'', role:'', message:'' })
  const [sent, setSent]     = useState(false)
  const [sending, setSending] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 900))
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="fs-section" style={{ background:'#0D0D0D' }}>
      <div className="wrap" style={{ paddingTop:120, paddingBottom:120 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px 120px', alignItems:'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <div style={{ width:48, height:1.5, background:'#B07030', marginBottom:32 }}/>
            <div className="label" style={{ color:'rgba(255,255,255,0.35)', marginBottom:24 }}>Contact</div>
            <h2 className="display-bold" style={{ fontSize:'clamp(36px,4.5vw,64px)', color:'#fff', marginBottom:32 }}>
              Work with<br />
              <em style={{ fontWeight:300, color:'#B07030' }}>DCAP Labs.</em>
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:17, color:'rgba(255,255,255,0.45)', lineHeight:1.85, marginBottom:52 }}>
              Whether you are a founder building with clarity and long-term intent, a partner aligned with
              the Indic Ecosystem, or simply curious about our approach — we would like to hear from you.
            </p>

            {/* Details */}
            <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
              {[
                { l:'Email',      v:'hello@dcaplabs.in', href:'mailto:hello@dcaplabs.in' },
              ].map(item => (
                <div key={item.l}>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>{item.l}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'#B07030', textDecoration:'none' }}>{item.v}</a>
                    : <span style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:'rgba(255,255,255,0.55)' }}>{item.v}</span>
                  }
                </div>
              ))}
              {/* Social */}
              <div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Follow</div>
                <div style={{ display:'flex', gap:16 }}>
                  {[['Twitter','https://twitter.com'],['LinkedIn','https://linkedin.com'],['Instagram','https://instagram.com']].map(([l,h]) => (
                    <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)', textDecoration:'none', transition:'color .2s' }}
                      onMouseEnter={e=>(e.currentTarget.style.color='#B07030')}
                      onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.35)')}>
                      {l} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, padding:48 }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'32px 0' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:48, color:'#B07030', marginBottom:16 }}>✓</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#fff', marginBottom:10 }}>Message Received.</h3>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.45)', lineHeight:1.7 }}>A member of the DCAP Labs team will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, color:'#fff', marginBottom:32 }}>Send a message</h3>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18 }} className="form-row">
                  {[{l:'Full Name *',field:'name',t:'text',ph:'Jane Smith'},{l:'Email *',field:'email',t:'email',ph:'jane@example.com'}].map(({l,field,t,ph}) => (
                    <div key={field}>
                      <label style={{ display:'block', fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.35)', marginBottom:7 }}>{l}</label>
                      <input required type={t} placeholder={ph} value={(form as any)[field]}
                        style={{ width:'100%', padding:'12px 16px', border:'1.5px solid rgba(255,255,255,0.1)', borderRadius:8, background:'rgba(255,255,255,0.05)', fontFamily:"'Inter',sans-serif", fontSize:14, color:'#fff', outline:'none' }}
                        onFocus={e=>(e.target.style.borderColor='#B07030')}
                        onBlur={e=>(e.target.style.borderColor='rgba(255,255,255,0.1)')}
                        onChange={e=>setForm({...form,[field]:e.target.value})}/>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom:18 }}>
                  <label style={{ display:'block', fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.35)', marginBottom:7 }}>I am a...</label>
                  <select required value={form.role} onChange={e=>setForm({...form,role:e.target.value})}
                    style={{ width:'100%', padding:'12px 16px', border:'1.5px solid rgba(255,255,255,0.1)', borderRadius:8, background:'rgba(255,255,255,0.05)', fontFamily:"'Inter',sans-serif", fontSize:14, color:'#fff', outline:'none' }}>
                    <option value="" style={{background:'#222'}}>Select your role</option>
                    <option value="founder"    style={{background:'#222'}}>Founder — Apply for Current Cohort</option>
                    <option value="advisor"    style={{background:'#222'}}>Mentor / Advisor — Join as Advisor</option>
                    <option value="partner"    style={{background:'#222'}}>Partner / Funder — Strategic Partnership</option>
                    <option value="researcher" style={{background:'#222'}}>Researcher — IKS Research Collaboration</option>
                    <option value="other"      style={{background:'#222'}}>Other — General Inquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom:24 }}>
                  <label style={{ display:'block', fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.35)', marginBottom:7 }}>Message *</label>
                  <textarea required rows={5}
                    placeholder="Tell us about yourself, your venture or interest, and how you see alignment with the DCAP Labs approach..."
                    value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                    style={{ width:'100%', padding:'12px 16px', border:'1.5px solid rgba(255,255,255,0.1)', borderRadius:8, background:'rgba(255,255,255,0.05)', fontFamily:"'Inter',sans-serif", fontSize:14, color:'#fff', outline:'none', resize:'vertical' }}
                    onFocus={e=>(e.target.style.borderColor='#B07030')}
                    onBlur={e=>(e.target.style.borderColor='rgba(255,255,255,0.1)')}/>
                </div>
                <button type="submit" className="btn-gold" style={{ width:'100%', justifyContent:'center', opacity:sending?0.7:1, fontSize:15 }}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`.contact-grid{grid-template-columns:1fr 1fr}.form-row{grid-template-columns:1fr 1fr}@media(max-width:900px){.contact-grid,.form-row{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

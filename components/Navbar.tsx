'use client'
import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const resRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false)
      if (resRef.current && !resRef.current.contains(e.target as Node)) setResOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLink = (label: string, href: string) => (
    <a href={href}
      style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:500, color:'#6B6B6B', textDecoration:'none', padding:'7px 12px', borderRadius:100, transition:'color .2s,background .2s', whiteSpace:'nowrap' }}
      onMouseEnter={e => { e.currentTarget.style.color='#0D0D0D'; e.currentTarget.style.background='rgba(0,0,0,0.04)' }}
      onMouseLeave={e => { e.currentTarget.style.color='#6B6B6B'; e.currentTarget.style.background='transparent' }}>
      {label}
    </a>
  )

  const dropStyle: React.CSSProperties = {
    position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)',
    background:'#fff', border:'1px solid #EAE5DF', borderRadius:12, padding:8,
    minWidth:200, boxShadow:'0 8px 32px rgba(0,0,0,0.12)', zIndex:300,
  }
  const dropItem = (label: string, href: string, close: () => void) => (
    <a key={href} href={href} onClick={close}
      style={{ display:'block', padding:'10px 14px', fontFamily:"'Inter',sans-serif", fontSize:13, color:'#6B6B6B', textDecoration:'none', borderRadius:8, transition:'background .15s,color .15s' }}
      onMouseEnter={e => { e.currentTarget.style.background='#F5F0E8'; e.currentTarget.style.color='#0D0D0D' }}
      onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#6B6B6B' }}>
      {label}
    </a>
  )

  return (
    <header style={{ position:'fixed', top:0, left:0, right:0, zIndex:200, background:scrolled?'rgba(255,255,255,0.96)':'transparent', backdropFilter:scrolled?'blur(16px)':'none', borderBottom:scrolled?'1px solid #EAE5DF':'1px solid transparent', transition:'background 0.3s, border-color 0.3s' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 64px', height:72, display:'flex', alignItems:'center' }}>

        {/* Logo */}
        <a href="#home" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:14, marginRight:'auto' }}>
          <Logo size={44} />
          <div style={{ display:'flex', flexDirection:'column', lineHeight:1 }}>
            <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontWeight:700, fontSize:22, color:'#0D0D0D', letterSpacing:'-0.01em', lineHeight:1.15 }}>
              DCAP <span style={{ fontWeight:300, fontStyle:'italic', color:'#B07030' }}>Labs</span>
            </span>
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:9, color:'#999', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:3 }}>
              Building with Clarity and Purpose
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display:'flex', gap:2, alignItems:'center' }} className="nav-d">

          {/* About dropdown */}
          <div ref={aboutRef} style={{ position:'relative' }}>
            <button onClick={() => { setAboutOpen(!aboutOpen); setResOpen(false) }}
              style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:500, color:'#6B6B6B', background:'none', border:'none', cursor:'pointer', padding:'7px 12px', borderRadius:100, display:'flex', alignItems:'center', gap:4, transition:'color .2s,background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color='#0D0D0D'; e.currentTarget.style.background='rgba(0,0,0,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.color='#6B6B6B'; e.currentTarget.style.background='transparent' }}>
              About <span style={{ fontSize:9, opacity:0.5 }}>▾</span>
            </button>
            {aboutOpen && (
              <div style={dropStyle}>
                {[['Vision & Mission','#vision'],['Our Approach','#approach'],['Indic Ecosystem','#ecosystem'],['Team','#team'],['FAQ','#faq']].map(([l,h]) => dropItem(l,h,()=>setAboutOpen(false)))}
              </div>
            )}
          </div>

          {navLink('Cohort','#cohort')}

          {/* Resources dropdown */}
          <div ref={resRef} style={{ position:'relative' }}>
            <button onClick={() => { setResOpen(!resOpen); setAboutOpen(false) }}
              style={{ fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:500, color:'#6B6B6B', background:'none', border:'none', cursor:'pointer', padding:'7px 12px', borderRadius:100, display:'flex', alignItems:'center', gap:4, transition:'color .2s,background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.color='#0D0D0D'; e.currentTarget.style.background='rgba(0,0,0,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.color='#6B6B6B'; e.currentTarget.style.background='transparent' }}>
              Resources <span style={{ fontSize:9, opacity:0.5 }}>▾</span>
            </button>
            {resOpen && (
              <div style={dropStyle}>
                {[['All Resources','#resources'],['White Papers','#resources'],['Case Studies','#resources'],['Blog','#resources'],['Video Library','#resources']].map(([l,h],i) => (
                  <a key={i} href={h} onClick={()=>setResOpen(false)}
                    style={{ display:'block', padding:'10px 14px', fontFamily:"'Inter',sans-serif", fontSize:13, color:'#6B6B6B', textDecoration:'none', borderRadius:8, transition:'background .15s,color .15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background='#F5F0E8'; e.currentTarget.style.color='#0D0D0D' }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#6B6B6B' }}>
                    {l}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLink('Contact','#contact')}
          <a href="#contact" className="btn-dark" style={{ marginLeft:10, padding:'10px 22px', fontSize:13 }}>Apply Now</a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="nav-m" style={{ background:'none', border:'none', cursor:'pointer', padding:8, display:'none' }}>
          <div style={{ width:22, height:1.5, background:'#0D0D0D', marginBottom:6, transition:'transform .25s', transform:open?'rotate(45deg) translate(5px,5px)':'none' }}/>
          <div style={{ width:22, height:1.5, background:'#0D0D0D', marginBottom:6, opacity:open?0:1 }}/>
          <div style={{ width:22, height:1.5, background:'#0D0D0D', transition:'transform .25s', transform:open?'rotate(-45deg) translate(5px,-5px)':'none' }}/>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background:'#fff', borderTop:'1px solid #EAE5DF', padding:'16px 0 24px' }}>
          {[['About','#about'],['Vision & Mission','#vision'],['Approach','#approach'],['Cohort','#cohort'],['Resources','#resources'],['Contact','#contact']].map(([l,h]) => (
            <a key={h} href={h} onClick={()=>setOpen(false)} style={{ display:'block', padding:'13px 28px', fontFamily:"'Inter',sans-serif", fontSize:15, color:'#0D0D0D', textDecoration:'none', borderBottom:'1px solid #FDFCFA' }}>{l}</a>
          ))}
          <div style={{ padding:'20px 28px 0' }}>
            <a href="#contact" className="btn-dark" style={{ fontSize:14 }}>Apply Now</a>
          </div>
        </div>
      )}
      <style>{`.nav-d{display:flex!important}.nav-m{display:none!important}@media(max-width:900px){.nav-d{display:none!important}.nav-m{display:block!important}}`}</style>
    </header>
  )
}

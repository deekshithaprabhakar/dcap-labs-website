'use client'
import HeroGraphic from './HeroGraphic'

export default function Hero() {
  return (
    <section id="home" className="fs-section" style={{ background:'#FDFCFA' }}>
      {/* Ambient gold glow */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 70% 60% at 65% 45%, rgba(176,112,48,0.06) 0%, transparent 70%)', zIndex:0 }}/>

      {/* Transparent background graphic — sits behind the text, homepage only */}
      <HeroGraphic />

      <div className="wrap" style={{ paddingTop:120, paddingBottom:80, position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:860 }}>

          {/* Headline */}
          <h1 className="display" style={{ fontSize:'clamp(44px,6.5vw,90px)', color:'#0D0D0D', marginBottom:24, lineHeight:1.06 }}>
            Building Ventures for a<br />
            <em style={{ color:'#B07030' }}>Civilizational Future</em>
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2.2vw,26px)', fontStyle:'italic', color:'#B07030', marginBottom:28, lineHeight:1.4 }}>
            Building with Clarity and Purpose.
          </p>

          {/* Subtext */}
          <p className="body-lg" style={{ maxWidth:600, marginBottom:52 }}>
            DCAP Labs helps build ventures by bringing together founders, capital,
            knowledge, and execution. Our approach is rooted in{' '}
            <span style={{ color:'#0D0D0D', fontWeight:500 }}>Dharma</span> (right order
            and responsibility) and focused on creating meaningful, long-term value.
          </p>

          {/* CTAs */}
          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:80 }}>
            <a href="#approach" className="btn-dark">Our Approach →</a>
            <a href="#about"    className="btn-ghost">About DCAP Labs</a>
          </div>

          {/* Closing line */}
          <div style={{ borderTop:'1px solid #EAE5DF', paddingTop:40, display:'flex', alignItems:'center', gap:24 }}>
            <div className="gold-rule" style={{ marginBottom:0, flexShrink:0 }}/>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:20, color:'#B07030' }}>
              "Reclaim. Rebuild. Create."
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, zIndex:1 }}>
        <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:600, color:'#999', letterSpacing:'0.12em', textTransform:'uppercase' }}>Scroll</span>
        <div style={{ width:1, height:48, background:'linear-gradient(to bottom, #B07030, transparent)' }}/>
      </div>
    </section>
  )
}

import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import VisionMission from '@/components/VisionMission'
import Approach      from '@/components/Approach'
import Ecosystem     from '@/components/Ecosystem'
import Cohort        from '@/components/Cohort'
import Insights      from '@/components/Insights'
import Team          from '@/components/Team'
import FAQ           from '@/components/FAQ'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Approach />
        <Ecosystem />
        <Cohort />
        <Insights />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

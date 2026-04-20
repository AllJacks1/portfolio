import Navbar from "./coomponents/NavigationBar"
import AboutMe from "./coomponents/sections/AboutMe"
import Footer from "./coomponents/sections/Footer"
import HeroSection from "./coomponents/sections/HeroSection"
import Projects from "./coomponents/sections/Projects"
import TrustedTechnologies from "./coomponents/sections/TrustedTechnologies"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedTechnologies/>
      <AboutMe />
      <Projects />
      <div className="bg-neutral-950 py-16" />
      <Footer />
    </div>
  )
}

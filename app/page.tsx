import Navbar from "./coomponents/NavigationBar"
import AboutMe from "./coomponents/sections/AboutMe"
import Certifications from "./coomponents/sections/Certifications"
import ExperienceEducation from "./coomponents/sections/ExperienceAndEducation"
import Footer from "./coomponents/sections/Footer"
import HeroSection from "./coomponents/sections/HeroSection"
import Projects from "./coomponents/sections/Projects"
import SkillsToolkit from "./coomponents/sections/SkillsAndToolkit"
import TrustedTechnologies from "./coomponents/sections/TrustedTechnologies"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedTechnologies/>
      <Projects />
      <SkillsToolkit/>
      <ExperienceEducation/>
      <Certifications/>
      <Footer />
    </div>
  )
}

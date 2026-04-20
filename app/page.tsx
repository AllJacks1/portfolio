import { Contact } from "lucide-react"
import Navbar from "./coomponents/NavigationBar"
import AboutMe from "./coomponents/sections/AboutMe"
import Certifications from "./coomponents/sections/Certifications"
import ExperienceEducation from "./coomponents/sections/ExperienceAndEducation"
import Footer from "./coomponents/sections/Footer"
import HeroSection from "./coomponents/sections/HeroSection"
import Projects from "./coomponents/sections/Projects"
import ResumeDownload from "./coomponents/sections/Resume"
import SkillsToolkit from "./coomponents/sections/SkillsAndToolkit"
import TrustedTechnologies from "./coomponents/sections/TrustedTechnologies"
import ContactCTA from "./coomponents/sections/Contact"

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
      <ResumeDownload/>
      <AboutMe/>
      <ContactCTA/>
      <Footer />
    </div>
  )
}

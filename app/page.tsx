import Navbar from "./coomponents/NavigationBar"
import AboutMe from "./coomponents/sections/AboutMe"
import Footer from "./coomponents/sections/Footer"
import HeroSection from "./coomponents/sections/HeroSection"
import Projects from "./coomponents/sections/Projects"

export default function Page() {
  const techStack = [
    { name: "Next.js", icon: "▲" },
    { name: "Supabase", icon: "⚡" },
    { name: "React", icon: "⚛" },
    { name: "Vite", icon: "🚀" },
    { name: "Flutter", icon: "💠" },
  ]

  return (
    <div>
      <Navbar />
      <HeroSection
        techStack={techStack}
        fullName="Karl Christian Tan"
        subTitle="A Web Developer passionate about building and innovating in
          technology. Crafting modern web experiences with cutting-edge tools."
        description="Information Technology graduate from the University of Mindanao,
          specializing in software development, hardware troubleshooting,
          networking, and Arduino projects."
      />
      <AboutMe />
      <Projects/>
      <div className="py-16 bg-neutral-950" />
      <Footer />
    </div>
  )
}

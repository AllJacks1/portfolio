import { NavigationBar } from "./coomponents/NavigationBar"
import AboutMe from "./coomponents/sections/AboutMe"
import HeroSection from "./coomponents/sections/HeroSection"

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
      <NavigationBar />
      <HeroSection
        techStack={techStack}
        fullName="Karl Christian Tan"
        subTitle="A Web Developer passionate about building and innovating in
          technology. Crafting modern web experiences with cutting-edge tools."
        description="Information Technology graduate from the University of Mindanao,
          specializing in software development, hardware troubleshooting,
          networking, and Arduino projects."
      />
      <AboutMe/>
    </div>
  )
}

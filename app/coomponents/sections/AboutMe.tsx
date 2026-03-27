import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export default function AboutMe() {
  const milestones = [
    {
      title: "My Journey in IT",
      icon: "🎮",
      year: "The Beginning",
      content: `My journey in IT all started one day when I was playing Minecraft. I got bored and decided to create a server for me and my friends to play in. We eventually wanted more than vanilla Minecraft, so we added mods and customizations. That curiosity led me to wonder: what if I create my own mod? While I wasn't able to finish a mod, I discovered JavaScript and realized that everything can be built from scratch—you just need to learn how things work. That moment sparked my passion for technology and problem-solving.`,
      keywords: ["JavaScript", "Problem Solving"],
    },
    {
      title: "Excitement for Challenging Projects",
      icon: "🚀",
      year: "The Drive",
      content: `Since then, I've been driven by the excitement of tackling new challenges. Whether it's building web applications, troubleshooting hardware, or experimenting with homelab setups, I thrive when I'm solving problems and creating solutions. I look forward to working on projects where I can apply my skills and contribute to meaningful innovations.`,
      keywords: ["Web Apps", "Homelab", "Hardware"],
    },
    {
      title: "Growth Mindset",
      icon: "📈",
      year: "The Future",
      content: `I believe that technology is always evolving, and so should I. I'm eager to expand my expertise in software development, web technologies, hardware systems, and IT infrastructure. Exploring tools like Next.js, React Vite, Flutter, Supabase, and even homelab projects with OPNsense and Pi-hole has taught me that growth comes from curiosity and persistence. My goal is to keep learning, keep building, and keep pushing the boundaries of what I can do.`,
      keywords: ["Next.js", "Flutter", "Supabase", "OPNsense"],
    },
  ]

  const skillCategories = [
    {
      title: "Software & Web Development",
      icon: "💻",
      skills: ["Next.js", "React Vite", "Flutter", "VB.NET"],
      color: "blue" as const,
    },
    {
      title: "Databases & Backend",
      icon: "🗄️",
      skills: ["Supabase"],
      color: "green" as const,
    },
    {
      title: "Hardware & Networking",
      icon: "🔧",
      skills: ["Troubleshooting", "Network Setup", "Arduino"],
      color: "orange" as const,
    },
    {
      title: "Exploration & Homelab",
      icon: "🏠",
      skills: ["OPNsense Firewall", "Pi-hole"],
      color: "purple" as const,
    },
  ]

  const colorVariants = {
    blue: "hover:text-blue-400",
    green: "hover:text-green-400",
    orange: "hover:text-orange-400",
    purple: "hover:text-purple-400",
  }

  return (
    <section id="about" className="relative bg-neutral-950 py-24 sm:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center sm:mb-20">
          <Badge
            variant="outline"
            className="mb-4 border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 uppercase"
          >
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            From <span className="text-neutral-500">Gamer</span> to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="relative space-y-8 sm:space-y-12">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 md:block" />

          {milestones.map((milestone, index) => (
            <div key={milestone.title} className="group relative md:pl-24">
              {/* Timeline Node */}
              <div className="absolute top-0 left-0 hidden h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-2xl shadow-2xl shadow-black/50 transition-all duration-300 group-hover:scale-110 group-hover:border-neutral-700 md:flex">
                {milestone.icon}
              </div>

              {/* Mobile Icon */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-xl md:hidden">
                {milestone.icon}
              </div>

              {/* Card - Using shadcn Card */}
              <Card className="relative border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50">
                <CardContent className="p-6 sm:p-8">
                  {/* Year Badge */}
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800/50"
                  >
                    {milestone.year}
                  </Badge>

                  {/* Title */}
                  <CardTitle className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {milestone.title}
                  </CardTitle>

                  {/* Content */}
                  <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                    {milestone.content}
                  </p>

                  {/* Keywords */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {milestone.keywords.map((keyword, i) => (
                      <React.Fragment key={keyword}>
                        <span className="text-xs text-neutral-500">
                          {keyword}
                        </span>
                        {i < milestone.keywords.length - 1 && (
                          <span className="text-neutral-700">•</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills & Technologies Section */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-12 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 uppercase"
            >
              My Toolkit
            </Badge>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Skills & Technologies
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50"
              >
                <CardHeader className="p-6 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 text-lg transition-colors duration-300 group-hover:bg-neutral-700">
                      {category.icon}
                    </span>
                    <CardTitle className="text-sm font-semibold text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`bg-neutral-800/50 text-neutral-300 transition-colors duration-300 hover:bg-neutral-700/50 ${colorVariants[category.color]}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20">
          <p className="mb-6 text-sm text-neutral-500">
            Want to see how I apply these skills?
          </p>
          <Button
            variant="link"
            asChild
            className="group h-auto gap-2 p-0 text-white hover:no-underline"
          >
            <a
              href="#projects"
              className="inline-flex items-center border-b border-neutral-700 p-2 transition-colors duration-300 hover:border-white"
            >
              Explore my projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

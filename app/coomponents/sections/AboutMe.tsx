import React from "react"

export default function AboutMe() {
  const milestones = [
    {
      title: "My Journey in IT",
      icon: "🎮",
      year: "The Beginning",
      content: `My journey in IT all started one day when I was playing Minecraft. I got bored and decided to create a server for me and my friends to play in. We eventually wanted more than vanilla Minecraft, so we added mods and customizations. That curiosity led me to wonder: what if I create my own mod? While I wasn't able to finish a mod, I discovered JavaScript and realized that everything can be built from scratch—you just need to learn how things work. That moment sparked my passion for technology and problem-solving.`,
    },
    {
      title: "Excitement for Challenging Projects",
      icon: "🚀",
      year: "The Drive",
      content: `Since then, I've been driven by the excitement of tackling new challenges. Whether it's building web applications, troubleshooting hardware, or experimenting with homelab setups, I thrive when I'm solving problems and creating solutions. I look forward to working on projects where I can apply my skills and contribute to meaningful innovations.`,
    },
    {
      title: "Growth Mindset",
      icon: "📈",
      year: "The Future",
      content: `I believe that technology is always evolving, and so should I. I'm eager to expand my expertise in software development, web technologies, hardware systems, and IT infrastructure. Exploring tools like Next.js, React Vite, Flutter, Supabase, and even homelab projects with OPNsense and Pi-hole has taught me that growth comes from curiosity and persistence. My goal is to keep learning, keep building, and keep pushing the boundaries of what I can do.`,
    },
  ]

  return (
    <section id="about" className="relative bg-neutral-950 py-24 sm:py-32">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center sm:mb-20">
          <span className="mb-4 inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 uppercase">
            About Me
          </span>
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
              <div className="absolute top-0 left-0 flex hidden h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-2xl shadow-2xl shadow-black/50 transition-all duration-300 group-hover:scale-110 group-hover:border-neutral-700 md:flex">
                {milestone.icon}
              </div>

              {/* Mobile Icon */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-xl md:hidden">
                {milestone.icon}
              </div>

              {/* Card */}
              <div className="relative rounded-2xl border border-neutral-800/50 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50 sm:p-8">
                {/* Year Badge */}
                <span className="mb-4 inline-block rounded-full bg-neutral-800/50 px-3 py-1 text-xs font-medium text-neutral-400">
                  {milestone.year}
                </span>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {milestone.title}
                </h3>

                {/* Content */}
                <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {milestone.content}
                </p>

                {/* Highlight Keywords */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="text-xs text-neutral-500">
                        JavaScript
                      </span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">
                        Problem Solving
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-xs text-neutral-500">Web Apps</span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">Homelab</span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">Hardware</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="text-xs text-neutral-500">Next.js</span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">Flutter</span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">Supabase</span>
                      <span className="text-neutral-700">•</span>
                      <span className="text-xs text-neutral-500">OPNsense</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20">
          <p className="mb-6 text-sm text-neutral-500">
            Want to see how I apply these skills?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-b border-neutral-700 pb-1 text-white transition-colors duration-300 hover:border-white"
          >
            Explore my projects
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

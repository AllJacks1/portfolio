"use client";
import React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const timelineNodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2,
    },
  },
}

export default function AboutMe() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Parallax effect for the connecting line
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])

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

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <section id="about" className="relative bg-neutral-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-5xl px-6">
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
          {/* Static content... */}
        </div>
      </section>
    )
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          className="mb-16 text-center sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 uppercase"
            >
              About Me
            </Badge>
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            From{" "}
            <motion.span
              className="inline-block text-neutral-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Gamer
            </motion.span>{" "}
            to{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Developer
            </motion.span>
          </h2>
        </motion.div>

        {/* Timeline Cards with Staggered Scroll Reveal */}
        <motion.div
          className="relative space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Animated Connecting Line */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-px overflow-hidden bg-neutral-800 md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
              style={{ height: lineHeight }}
            />
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              className="group relative md:pl-24"
              variants={cardVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline Node with Spring Animation */}
              <motion.div
                className="absolute top-0 left-0 hidden h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-2xl shadow-2xl shadow-black/50 md:flex"
                variants={timelineNodeVariants}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                {milestone.icon}
              </motion.div>

              {/* Mobile Icon */}
              <motion.div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-xl md:hidden"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {milestone.icon}
              </motion.div>

              {/* Card with Hover Effects */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="relative border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-purple-500/5">
                  <CardContent className="p-6 sm:p-8">
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="mb-4 bg-neutral-800/50 text-neutral-400 hover:bg-neutral-800/50"
                      >
                        {milestone.year}
                      </Badge>
                    </motion.div>

                    {/* Title */}
                    <CardTitle className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {milestone.title}
                    </CardTitle>

                    {/* Content */}
                    <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                      {milestone.content}
                    </p>

                    {/* Keywords with Stagger */}
                    <motion.div
                      className="mt-6 flex flex-wrap items-center gap-2"
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                          },
                        },
                      }}
                      viewport={{ once: true }}
                    >
                      {milestone.keywords.map((keyword, i) => (
                        <React.Fragment key={keyword}>
                          <motion.span
                            className="text-xs text-neutral-500"
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            {keyword}
                          </motion.span>
                          {i < milestone.keywords.length - 1 && (
                            <motion.span
                              className="text-neutral-700"
                              variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                              }}
                            >
                              •
                            </motion.span>
                          )}
                        </React.Fragment>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills & Technologies Section */}
        <motion.div
          className="mt-20 sm:mt-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 uppercase"
              >
                My Toolkit
              </Badge>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h3>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={skillCardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Card className="group h-full border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-xl hover:shadow-blue-500/5">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 text-lg transition-colors duration-300 group-hover:bg-neutral-700"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        {category.icon}
                      </motion.span>
                      <CardTitle className="text-sm font-semibold text-white">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-4">
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { delay: skillIndex * 0.1 },
                            },
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`bg-neutral-800/50 text-neutral-300 transition-colors duration-300 hover:bg-neutral-700/50 ${colorVariants[category.color]}`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA with Fade In */}
        <motion.div
          className="mt-16 text-center sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-sm text-neutral-500">
            Want to see how I apply these skills?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

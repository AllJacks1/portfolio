"use client";
import { HeroSectionPageProps } from "@/lib/interfaces"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronDown } from "lucide-react"

// Properly typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // Use 'as const' to make it a tuple
    },
  },
}

const techBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function HeroSection({
  techStack,
  fullName,
  subTitle,
  description,
}: HeroSectionPageProps) {
  const prefersReducedMotion = useReducedMotion()

  // Scroll-based parallax effects
  const { scrollY } = useScroll()

  // Parallax for background orbs (move slower than scroll)
  const orb1Y = useTransform(scrollY, [0, 500], [0, 150])
  const orb2Y = useTransform(scrollY, [0, 500], [0, -100])
  const orb1Scale = useTransform(scrollY, [0, 500], [1, 1.2])
  const orb2Scale = useTransform(scrollY, [0, 500], [1, 0.8])

  // Fade out content as user scrolls down
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const contentY = useTransform(scrollY, [0, 300], [0, -50])

  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs font-medium text-neutral-400"
              >
                <span className="mr-1.5 text-sm">{tech.icon}</span>
                {tech.name}
              </Badge>
            ))}
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {fullName}
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            {subTitle}
          </p>
          <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-neutral-950"
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-neutral-600 bg-neutral-900/50 px-8 text-white"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      {/* Floating Gradient Orbs with Parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        style={{ y: orb1Y, scale: orb1Scale }}
        animate={{
          x: [0, 30, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        style={{ y: orb2Y, scale: orb2Scale }}
        animate={{
          x: [0, -20, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content with Scroll Fade */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tech Stack Pills - Staggered Animation */}
          <motion.div
            className="mb-8 flex flex-wrap justify-center gap-3"
            variants={containerVariants}
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={techBadgeVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className="cursor-default border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm transition-colors duration-300 hover:border-neutral-700 hover:text-neutral-200"
                >
                  <span className="mr-1.5 text-sm">{tech.icon}</span>
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading with Character Animation */}
          <motion.h1
            className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {fullName}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
            variants={itemVariants}
          >
            {subTitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-white px-8 text-neutral-950 transition-all duration-300 hover:bg-white hover:text-neutral-600"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-neutral-600 bg-neutral-900/50 px-8 text-white transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-800 hover:text-neutral-300"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Bounce Animation */}
        <motion.div
          className="absolute mt-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-neutral-600 uppercase">
              Scroll
            </span>
            <ChevronDown className="h-5 w-5 text-neutral-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

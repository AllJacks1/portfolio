"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Mail } from "lucide-react"
import { motion } from "framer-motion"

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#0F172A]"
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#4F46E5]/10 to-[#06B6D4]/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-8 px-4 py-2 text-sm font-medium bg-white/5 text-[#9CA3AF] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#E5E7EB] mb-6"
          >
            Karl Christian{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
              Tan
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#9CA3AF] mb-8"
          >
            Web Developer | Software Builder
          </motion.p>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[#E5E7EB]/80 max-w-2xl mb-4 leading-relaxed"
          >
            I build modern landing pages and web applications using React, Next.js, and Supabase.
          </motion.p>

          {/* Additional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-[#9CA3AF] max-w-2xl mb-12 leading-relaxed"
          >
            Information Technology graduate from the University of Mindanao passionate about solving problems through technology.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm font-medium bg-white/5 text-[#E5E7EB] border-white/10 hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] hover:from-[#4338CA] hover:to-[#0891B2] text-white font-semibold px-8 py-6 text-base shadow-lg shadow-[#4F46E5]/25 hover:shadow-[#4F46E5]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 text-[#E5E7EB] hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 text-[#E5E7EB] hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent pointer-events-none" />
    </section>
  )
}
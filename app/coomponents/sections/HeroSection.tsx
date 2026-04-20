"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Mail,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { useDownload } from "@/hooks/useDownload"
import { cn } from "@/lib/utils"

const techStack = ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"]

export default function HeroSection() {
  const { isDownloading, isDownloaded, download, error } = useDownload(800)

  const handleDownload = () => {
    download("/api/resume", "Karl_Christian_Tan_Resume.pdf")
  }

  const getButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Downloading...
        </>
      )
    }
    if (isDownloaded) {
      return (
        <>
          <Check className="mr-2 h-4 w-4" />
          Downloaded
        </>
      )
    }
    return (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </>
    )
  }

  const getButtonClass = () => {
    if (isDownloaded) {
      return "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300"
    }
    return "border-white/10 bg-white/5 text-[#E5E7EB] hover:bg-white/10 hover:text-white"
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F172A] py-24"
    >
      {/* Background Gradient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#4F46E5]/20 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#06B6D4]/20 blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#4F46E5]/10 to-[#06B6D4]/10 blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-8 border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#9CA3AF] transition-colors hover:bg-white/10"
            >
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#06B6D4]" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-5xl font-bold tracking-tight text-[#E5E7EB] sm:text-6xl md:text-7xl lg:text-8xl"
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
            className="mb-8 text-xl font-medium text-[#9CA3AF] sm:text-2xl md:text-3xl"
          >
            Web Developer | Software Builder
          </motion.p>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 max-w-2xl text-lg leading-relaxed text-[#E5E7EB]/80 md:text-xl"
          >
            I build modern landing pages and web applications using React,
            Next.js, and Supabase.
          </motion.p>

          {/* Additional Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 max-w-2xl text-base leading-relaxed text-[#9CA3AF] md:text-lg"
          >
            Information Technology graduate from the University of Mindanao
            passionate about solving problems through technology.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#E5E7EB] transition-all duration-300 hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10"
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
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#4F46E5]/25 transition-all duration-300 hover:scale-[1.02] hover:from-[#4338CA] hover:to-[#0891B2] hover:shadow-[#4F46E5]/40 active:scale-[0.98]"
              onClick={() => {
                const element = document.querySelector("#projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownload}
              disabled={isDownloading || isDownloaded}
              className={cn(
                "px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                getButtonClass()
              )}
            >
              {getButtonContent()}
            </Button>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-400">
                <AlertCircle className="h-3 w-3" />
                {error}
              </div>
            )}

            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 px-8 py-6 text-base font-semibold text-[#E5E7EB] transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:text-white active:scale-[0.98]"
              asChild
            >
              <a
                href="mailto:tankarlchristian@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  )
}

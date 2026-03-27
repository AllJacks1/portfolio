import { HeroSectionPageProps } from "@/lib/interfaces"
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function HeroSection({
  techStack,
  fullName,
  subTitle,
  description,
}: HeroSectionPageProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl delay-1000" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Tech Stack Pills - Using Badge */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <Badge
              key={tech.name}
              variant="outline"
              className="border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:text-neutral-200"
            >
              <span className="mr-1.5 text-sm">{tech.icon}</span>
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {fullName}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
          {subTitle}
        </p>

        {/* Background/Description */}
        <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
          {description}
        </p>

        {/* CTA Buttons - Using Button component */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-white px-8 text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 hover:text-neutral-500"
          >
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-neutral-600 px-8 text-white transition-all duration-300 bg-neutral-900/50 hover:border-neutral-800 hover:bg-neutral-900 hover:text-neutral-500"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-5 w-5 text-neutral-600" />
        </div>
      </div>
    </section>
  )
}

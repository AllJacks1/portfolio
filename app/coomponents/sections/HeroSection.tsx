import { HeroSectionPageProps } from "@/lib/interfaces"
import React from "react"

export default function HeroSection({ techStack, fullName, subTitle, description }: HeroSectionPageProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl delay-1000" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Tech Stack Pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:text-neutral-200"
            >
              <span className="text-sm">{tech.icon}</span>
              {tech.name}
            </span>
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

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-neutral-200 active:scale-95"
          >
            View My Work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-8 py-4 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900/50 hover:text-white"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-5 w-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

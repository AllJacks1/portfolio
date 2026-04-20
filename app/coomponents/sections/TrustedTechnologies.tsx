"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const technologies = [
  {
    name: "Next.js",
    description: "React Framework",
    logo: "/next-js-logo.png",
  },
  {
    name: "React",
    description: "UI Library",
    logo: "/react-logo.png",
  },
  {
    name: "Supabase",
    description: "Backend Platform",
    logo: "/supabase-logo.png",
  },
  {
    name: "Tailwind CSS",
    description: "CSS Framework",
    logo: "/tailwind-logo.png",
  },
  {
    name: "Flutter",
    description: "Mobile SDK",
    logo: "/flutter-logo.png",
  },
  {
    name: "Vite",
    description: "Build Tool",
    logo: "/vite-logo.png",
  },
]

export default function TrustedTechnologies() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#4F46E5]/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-xs font-medium bg-white/5 text-[#9CA3AF] border-white/10"
          >
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5E7EB] mb-4 tracking-tight">
            Trusted Technologies
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4F46E5]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4F46E5]/10">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                  {/* Tech Logo */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 transition-colors duration-300 group-hover:border-[#4F46E5]/30">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Code2, Database, Network, Server } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["Next.js", "React", "Vite", "Flutter", "VB.NET"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["Supabase", "REST APIs", "Authentication Systems"],
  },
  {
    title: "Networking & Hardware",
    icon: <Network className="h-5 w-5" />,
    skills: ["Hardware Troubleshooting", "Network Setup", "Arduino"],
  },
  {
    title: "Homelab & Infrastructure",
    icon: <Server className="h-5 w-5" />,
    skills: ["OPNsense", "Pi-hole", "Self-hosted services"],
  },
]

export default function SkillsToolkit() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0F172A] py-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#4F46E5]/5 blur-[120px]" />
        <div className="absolute right-1/3 bottom-0 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#9CA3AF]"
          >
            Expertise
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#E5E7EB] md:text-4xl lg:text-5xl">
            Skills & Toolkit
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            A structured overview of my technical skills across software
            development, backend systems, networking, and infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-white/5 bg-[#111827] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-lg hover:shadow-[#4F46E5]/10">
                <CardHeader className="pb-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4] transition-colors duration-300 group-hover:border-[#4F46E5]/30">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-[#E5E7EB] transition-colors group-hover:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                  <Separator className="bg-white/5" />
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="cursor-default border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[#9CA3AF] transition-all duration-300 hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 hover:text-[#E5E7EB]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

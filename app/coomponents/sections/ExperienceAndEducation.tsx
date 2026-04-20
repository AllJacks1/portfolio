"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"

const education = {
  school: "University of Mindanao",
  degree: "Bachelor of Science in Information Technology",
  focusAreas: [
    "Software Development",
    "Networking",
    "Hardware Troubleshooting",
    "Embedded Systems",
  ],
}

const experiences = [
  {
    title: "Freelance Web Developer",
    description:
      "Built landing pages and web platforms for businesses including marketing agencies and real estate services.",
    period: "Present",
    location: "Remote",
  },
]

export default function ExperienceEducation() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24">
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
            Background
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#E5E7EB] md:text-4xl lg:text-5xl">
            Experience & Education
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            My academic background and practical experience in software
            development, networking, and IT systems.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-white/5 bg-[#111827] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-lg hover:shadow-[#4F46E5]/10">
              <CardHeader className="pb-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-[#E5E7EB]">
                      Education
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#9CA3AF]">
                      Academic Foundation
                    </CardDescription>
                  </div>
                </div>
                <Separator className="bg-white/5" />
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-[#E5E7EB]">
                    {education.school}
                  </h3>
                  <p className="text-base text-[#9CA3AF]">{education.degree}</p>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold tracking-wider text-[#9CA3AF] uppercase">
                    Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.focusAreas.map((area) => (
                      <Badge
                        key={area}
                        variant="outline"
                        className="cursor-default border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[#9CA3AF] transition-all duration-300 hover:border-[#4F46E5]/50 hover:bg-[#4F46E5]/10 hover:text-[#E5E7EB]"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-white/5 bg-[#111827] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-lg hover:shadow-[#4F46E5]/10">
              <CardHeader className="pb-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4]">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-[#E5E7EB]">
                      Experience
                    </CardTitle>
                    <CardDescription className="mt-1 text-[#9CA3AF]">
                      Professional Work
                    </CardDescription>
                  </div>
                </div>
                <Separator className="bg-white/5" />
              </CardHeader>

              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-[#4F46E5]/30 pl-6 last:border-l-0"
                  >
                    <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full border-4 border-[#111827] bg-[#4F46E5]" />

                    <div className="pb-6 last:pb-0">
                      <h3 className="mb-2 text-xl font-semibold text-[#E5E7EB]">
                        {exp.title}
                      </h3>

                      <div className="mb-3 flex flex-wrap gap-4 text-sm text-[#9CA3AF]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#06B6D4]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-[#06B6D4]" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="leading-relaxed text-[#9CA3AF]">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

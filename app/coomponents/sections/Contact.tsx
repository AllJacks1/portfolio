"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, ArrowRight, Zap, Code2, Users, Server } from "lucide-react"

const opportunities = [
  { label: "Web Development Projects", icon: Code2 },
  { label: "Technical Collaboration", icon: Users },
  { label: "IT Infrastructure Work", icon: Server },
]

const socialLinks = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
]

export default function ContactCTA() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#E5E7EB] md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-[#9CA3AF]">
            I&apos;m open to collaboration, freelance work, and opportunities to
            build impactful digital products.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl border-[#1F2937] bg-[#111827] shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:border-[#4F46E5]/30">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-semibold text-[#E5E7EB]">
              Opportunities I&apos;m Open To
            </CardTitle>
            <CardDescription className="text-[#9CA3AF]">
              Areas where I can contribute and collaborate
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {opportunities.map((op) => {
                const Icon = op.icon
                return (
                  <div
                    key={op.label}
                    className="group flex items-center gap-3 rounded-lg border border-[#1F2937] bg-[#0F172A] p-3 transition-colors hover:border-[#4F46E5]/30"
                  >
                    <div className="rounded-md bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 p-2 transition-all group-hover:from-[#4F46E5]/30 group-hover:to-[#06B6D4]/30">
                      <Icon className="h-4 w-4 text-[#06B6D4]" />
                    </div>
                    <span className="text-sm font-medium text-[#E5E7EB]">
                      {op.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <Separator className="bg-[#1F2937]" />

            <div className="flex flex-col gap-3 sm:flex-row">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.label}
                    variant={link.label === "Email" ? "default" : "outline"}
                    className={`h-11 flex-1 gap-2 font-semibold transition-all duration-300 ${
                      link.label === "Email"
                        ? "bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#4F46E5]/25"
                        : "border-[#1F2937] bg-transparent text-[#E5E7EB] hover:border-[#4F46E5]/30 hover:bg-[#1F2937] hover:text-white"
                    }`}
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                      <ArrowRight className="ml-auto h-3 w-3 opacity-50" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

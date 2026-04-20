"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, FileText, Check, Loader2, FileCheck } from "lucide-react"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    // Simulate download delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading(false)
    setIsDownloaded(true)

    // Reset success state after 3 seconds
    setTimeout(() => setIsDownloaded(false), 3000)
  }

  return (
    <section className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <Card className="border-[#1F2937] bg-[#111827] shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:border-[#4F46E5]/30">
            <CardHeader className="pb-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] p-3 shadow-lg shadow-[#4F46E5]/20">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="border border-[#4F46E5]/20 bg-[#4F46E5]/10 text-[#4F46E5] hover:bg-[#4F46E5]/20"
                >
                  PDF Document
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight text-[#E5E7EB]">
                Resume
              </CardTitle>
              <CardDescription className="mt-2 text-base leading-relaxed text-[#9CA3AF]">
                Download a copy of my resume to learn more about my background,
                skills, and experience.
              </CardDescription>
            </CardHeader>

            <Separator className="mx-6 w-auto bg-[#1F2937]" />

            <CardContent className="pt-6 pb-2">
              <div className="flex items-center gap-4 rounded-lg border border-[#1F2937] bg-[#0F172A] p-4">
                <div className="rounded-lg border border-[#1F2937] bg-[#111827] p-3">
                  <FileCheck className="h-8 w-8 text-[#06B6D4]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#E5E7EB]">
                    Professional Resume
                  </p>
                  <p className="mt-0.5 text-xs text-[#9CA3AF]">
                    PDF • 1 page • Updated 2024
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-4 pb-6 bg-[#111827] border-[#111827]">
              <Button
                onClick={handleDownload}
                disabled={isDownloading || isDownloaded}
                className={`h-12 w-full text-base font-semibold transition-all duration-300 ${
                  isDownloaded
                    ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                    : "bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#4F46E5]/25"
                }`}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Downloading...
                  </>
                ) : isDownloaded ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Downloaded
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

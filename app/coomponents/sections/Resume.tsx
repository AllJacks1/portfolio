"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, FileText, Check, Loader2, FileCheck, AlertCircle } from "lucide-react";
import { useDownload } from "@/hooks/useDownload";

export default function ResumeDownload() {
  const { isDownloading, isDownloaded, download, error } = useDownload(800);

  const handleDownload = () => {
    download("/api/resume", "Karl_Christian_Tan_Resume.pdf");
  };

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

              {error && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}
            </CardContent>

            <CardFooter className="bg-[#111827] border-[#111827] pt-4 pb-6">
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
  );
}
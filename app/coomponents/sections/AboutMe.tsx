"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Sparkles } from "lucide-react";

const storySteps = [
  {
    phase: "Beginning",
    icon: Sparkles,
    content:
      "My journey into technology began when I started exploring how computers, networks, and software systems work out of curiosity. That curiosity led me to experiment with building small projects and learning how applications are structured behind the scenes.",
    badges: ["Curiosity", "Exploration", "Foundations"],
  },
  {
    phase: "Growth",
    icon: TrendingUp,
    content:
      "Over time, I expanded my skills into web development, networking, and system infrastructure. I worked with tools such as Next.js, React, Supabase, Flutter, and OPNsense, while also gaining hands-on experience in hardware troubleshooting and self-hosted environments.",
    badges: ["Next.js", "React", "Supabase", "Flutter", "OPNsense", "Self-Hosting"],
  },
  {
    phase: "Future",
    icon: Target,
    content:
      "My goal is to continue growing as a full-stack developer and systems builder, focusing on creating scalable, efficient, and meaningful software solutions that solve real-world problems.",
    badges: ["Full-Stack", "Scalability", "Problem Solving"],
  },
];

export default function AboutStory() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#E5E7EB] mb-4">
            About Me
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A journey of curiosity, growth, and building for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent -translate-y-1/2 z-0" />

          {storySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === storySteps.length - 1;

            return (
              <Card
                key={step.phase}
                className="relative z-10 bg-[#111827] border-[#1F2937] hover:border-[#4F46E5]/30 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/20 flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] shadow-lg shadow-[#4F46E5]/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 hover:bg-[#4F46E5]/20 font-semibold"
                    >
                      {step.phase}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#E5E7EB]">
                    {index === 0
                      ? "Where It Started"
                      : index === 1
                      ? "Skills & Experience"
                      : "Looking Ahead"}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                    {step.content}
                  </CardDescription>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {step.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="outline"
                        className="bg-[#0F172A] text-[#9CA3AF] border-[#1F2937] hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
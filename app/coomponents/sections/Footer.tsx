"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowUpRight, Heart, type LucideIcon } from "lucide-react";

type LinkIcon = LucideIcon | string;

interface QuickLink {
  label: string;
  href: string;
  icon: LinkIcon;
  iconAlt?: string;
}

const quickLinks: QuickLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AllJacks1",
    icon: "/github-logo.png",
    iconAlt: "GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karl-christian-tan-366740227",
    icon: "/linkedin.png",
    iconAlt: "LinkedIn",
  },
  {
    label: "Email",
    href: "mailto:tankarlchristian@gmail.com",
    icon: Mail,
  },
];

function isImageIcon(icon: LinkIcon): icon is string {
  return typeof icon === "string";
}

export default function Footer() {
  return (
    <footer className="py-16 bg-[#0F172A] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-[#E5E7EB]">
              Karl Christian Tan
            </h3>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 hover:bg-[#4F46E5]/20 font-medium"
              >
                Web Developer
              </Badge>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#111827] border border-transparent hover:border-[#1F2937] transition-all duration-200"
              >
                {isImageIcon(link.icon) ? (
                  <Image
                    src={link.icon}
                    alt={link.iconAlt || link.label}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <link.icon className="w-4 h-4 text-[#06B6D4] group-hover:text-[#4F46E5] transition-colors" />
                )}
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        <Separator className="bg-[#1F2937] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9CA3AF]">
          <p>© 2026 Karl Christian Tan | Web Developer</p>
          <p className="flex items-center gap-1.5">
            Built with
            <Heart className="w-3.5 h-3.5 text-[#4F46E5] fill-[#4F46E5]" />
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
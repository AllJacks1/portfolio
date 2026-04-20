"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Download, X, Check, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useDownload } from "@/hooks/useDownload"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { isDownloading, isDownloaded, download, error } = useDownload(800)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownload = () => {
    download("/api/resume", "Karl_Christian_Tan_Resume.pdf")
  }

  const getButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Downloading...
        </>
      )
    }
    if (isDownloaded) {
      return (
        <>
          <Check className="mr-2 h-4 w-4" />
          Downloaded
        </>
      )
    }
    return (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </>
    )
  }

  const getButtonClass = () => {
    if (isDownloaded) {
      return "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
    }
    return "bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-lg shadow-[#4F46E5]/25 hover:scale-[1.02] hover:from-[#4338CA] hover:to-[#0891B2] hover:shadow-[#4F46E5]/40 active:scale-[0.98]"
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0F172A]/80 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#home")
          }}
          className="group flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tight text-[#E5E7EB] transition-colors group-hover:text-white">
            KCT
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-[#9CA3AF] transition-colors duration-200 hover:bg-white/5 hover:text-[#E5E7EB]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={handleDownload}
            disabled={isDownloading || isDownloaded}
            className={cn(
              "px-6 font-semibold transition-all duration-300",
              getButtonClass()
            )}
          >
            {getButtonContent()}
          </Button>
          {error && (
            <span className="absolute top-full right-6 mt-2 text-xs text-red-400">
              {error}
            </span>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#E5E7EB] hover:bg-white/10 hover:text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l border-white/10 bg-[#111827] p-0 sm:w-80"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex h-full flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-white/5 p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#06B6D4]">
                    <span className="text-sm font-bold text-white">K</span>
                  </div>
                  <span className="text-lg font-bold text-[#E5E7EB]">KCT</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-[#9CA3AF] hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 space-y-1 px-4 py-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-[#9CA3AF] transition-all duration-200 hover:bg-white/5 hover:text-[#E5E7EB]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="space-y-3 border-t border-white/5 p-6">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading || isDownloaded}
                  className={cn(
                    "w-full py-6 font-semibold transition-all duration-300",
                    getButtonClass()
                  )}
                >
                  {getButtonContent()}
                </Button>
                {error && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

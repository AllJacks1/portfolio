"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { ArrowUpRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Animation variants - consistent with your HeroSection
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

interface SocialLink {
  name: string
  href: string
  icon?: React.ReactNode
}

interface FooterProps {
  fullName?: string
  socialLinks?: SocialLink[]
  email?: string
}

const defaultSocialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/AllJacks1" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/karl-christian-tan-366740227/" },
  { name: "Facebook", href: "https://facebook.com/mantis02/" },
  { name: "Email", href: "mailto:tankarlchristian@gmail.com" },
]

export default function Footer({
  fullName = "Karl Christian Tan",
  socialLinks = defaultSocialLinks,
  email = "tankarlchristian@gmail.com",
}: FooterProps) {
  const prefersReducedMotion = useReducedMotion()

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "#about" },
  ]

  const currentYear = new Date().getFullYear()

  // Reduced motion fallback - Light theme matching NavigationBar
  if (prefersReducedMotion) {
    return (
      <footer id="contact" className="relative border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-neutral-900">
                {fullName}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-neutral-500">
                Building digital experiences with modern technologies.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-neutral-900">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-neutral-900">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-neutral-200 bg-transparent text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-neutral-100" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-500">
              © {currentYear} {fullName}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-neutral-500">
              Made with <Heart className="h-3 w-3 text-red-500" /> using Next.js
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-neutral-100 bg-white">
      {/* Subtle background gradient - light theme version */}
      <motion.div
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neutral-200/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Let&apos;s work{" "}
                <span className="bg-gradient-to-r from-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                  together
                </span>
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-500">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your vision.
              </p>

              {/* CTA Button - Light theme */}
              <motion.div
                className="mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-neutral-900 px-6 text-white hover:bg-neutral-800"
                >
                  <a href={`mailto:${email}`}>
                    Get in Touch
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 lg:col-start-7"
            >
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-neutral-900 uppercase">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-neutral-900 uppercase">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="relative">
                      {social.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants}>
            <Separator className="my-12 bg-neutral-100" />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <p className="text-sm text-neutral-500">
              © {currentYear}{" "}
              <span className="text-neutral-900">{fullName}</span>. All rights
              reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

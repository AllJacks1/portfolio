"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  images: string[]
  liveUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Avaris Sales Solutions Landing Page",
    description:
      "Avaris Sales Solutions delivers 24/7 outsourced sales support that turns leads into revenue. We handle inquiry management, lead qualification, structured follow-ups, and sales reporting—so your business never misses an opportunity, even when you're offline. From small businesses to growing companies, we build reliable sales systems that replace scattered efforts with predictable growth. We Sell, You Excel.",
    techStack: ["React Vite", "CSS"],
    images: ["/avaris.png"],
    liveUrl: "https://avarissalessolutions.vercel.app",
  },
  {
    id: 2,
    title: "Axis Marketing Solutions Landing Page",
    description:
      "Axis Marketing Solutions transforms your vision into visuals through strategic marketing that converts. We help businesses increase visibility, attract qualified leads, and build memorable brand identities through social media management, paid advertising, branding design, and content production. Unlike agencies that chase likes, we chase results—because likes don't pay the bills. Our data-driven approach replaces scattered tactics with systematic growth, delivering 3x more leads, +150% engagement, and 2.5x ROI increases for growing brands.",
    techStack: ["React Vite", "CSS"],
    images: ["/axis.png"],
    liveUrl: "https://axismarketingsolutions-virid.vercel.app",
  },
  {
    id: 3,
    title: "Axial Real Estate Services Landing Page",
    description:
      "Axial provides tailored real estate solutions for buyers, investors, and developers in Davao City. Whether you're seeking move-in-ready homes with Pag-IBIG financing or strategic land investments for long-term growth, we make property transactions faster, easier, and more transparent. Our team handles the legwork and paperwork so you can focus on what matters—turning properties into opportunities.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    images: ["/axial.png"],
    liveUrl: "https://axialrealestate-services.vercel.app",
  },
  {
    id: 4,
    title: "IssueLane Ticket Management System",
    description:
      "IssueLane helps developers stay organized with a unified dashboard for support tickets and development tasks. Create tickets, track resolution progress, manage web development assignments, and monitor completion status—all in one streamlined interface. Built for developers who need clarity between customer support and project deliverables.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    images: [
      "/issue-lane-1.png",
      "/issue-lane-2.png",
      "/issue-lane-3.png",
      "/issue-lane-4.png",
      "/issue-lane-5.png",
      "/issue-lane-6.png",
    ],
    liveUrl: "https://ticketing-system-blush-one.vercel.app",
  },
]

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsLightboxOpen(false)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setIsLightboxOpen(false)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      )
    }
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0F172A] py-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-[#4F46E5]/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 h-[600px] w-[600px] rounded-full bg-[#06B6D4]/5 blur-[120px]" />
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
            Portfolio
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#E5E7EB] md:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            A selection of my strongest projects showcasing real-world
            applications, problem-solving, and full-stack development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-white/5 bg-[#111827] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-xl hover:shadow-[#4F46E5]/10">
                {/* Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-[#0F172A]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Count Badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-[#E5E7EB] backdrop-blur-sm">
                      {project.images.length} images
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-20 bg-[#4F46E5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <CardHeader className="relative z-10 pt-6 pb-2">
                  <h3 className="line-clamp-2 text-xl font-bold text-[#E5E7EB] transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="relative z-10 pb-4">
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#9CA3AF]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-[#9CA3AF]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 flex gap-3 border-[#111827] bg-[#111827] pt-0 pt-6 pb-6">
                  <Button
                    onClick={() => openProject(project)}
                    className="flex-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-[#4338CA] hover:to-[#0891B2] active:scale-[0.98]"
                  >
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex-1 border-white/10 bg-white/5 text-[#E5E7EB] transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:text-white active:scale-[0.98]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Site
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject && !isLightboxOpen}
        onOpenChange={closeProject}
      >
        <DialogContent
          className="w-[95vw] max-w-[1600px] gap-0 overflow-hidden border-white/10 bg-[#111827] p-0 text-[#E5E7EB]"
          showCloseButton={false}
        >
          {selectedProject && (
            <>
              {/* Image Gallery */}
              <div className="relative aspect-[16/10] bg-[#0F172A]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Expand Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 left-4 z-30 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex
                              ? "w-6 bg-[#4F46E5]"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-30 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <DialogHeader className="mb-4">
                  <DialogTitle className="mb-2 text-2xl font-bold text-[#E5E7EB] md:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-[#9CA3AF]">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[#9CA3AF]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() =>
                      window.open(selectedProject.liveUrl, "_blank")
                    }
                    className="flex-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-[#4338CA] hover:to-[#0891B2] active:scale-[0.98]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Fullscreen Image */}
            <div className="relative h-full w-full">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Controls */}
            <div className="pointer-events-none absolute inset-0">
              {/* Shrink Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLightboxOpen(false)
                }}
                className="pointer-events-auto absolute top-4 left-4 z-30 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <Minimize2 className="h-5 w-5" />
              </button>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeProject()
                }}
                className="pointer-events-auto absolute top-4 right-4 z-30 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="pointer-events-auto absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="pointer-events-auto absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="pointer-events-auto absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(idx)
                        }}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "w-6 bg-[#4F46E5]"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image Counter */}
              <div className="pointer-events-auto absolute top-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-sm text-white backdrop-blur-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

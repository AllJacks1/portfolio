"use client"

import React, { useState } from "react"
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  Variants,
} from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

// Animation variants - consistent with AboutMe
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  images: string[]
  tags: string[]
  links?: {
    demo?: string
  }
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "Avaris Sales Solutions Landing Page",
    shortDescription:
      "Avaris Sales Solutions provides 24/7 outsourced sales support, lead management, and follow-up systems to help businesses capture every opportunity and close more deals.",
    description:
      "Avaris Sales Solutions delivers 24/7 outsourced sales support that turns leads into revenue. We handle inquiry management, lead qualification, structured follow-ups, and sales reporting—so your business never misses an opportunity, even when you're offline. From small businesses to growing companies, we build reliable sales systems that replace scattered efforts with predictable growth. We Sell, You Excel.",
    images: [
      "/avaris.png"
    ],
    tags: ["React Vite", "CSS"],
    links: {
      demo: "https://avarissalessolutions.vercel.app",
    },
    featured: false,
  },
  {
    id: "2",
    title: "Axis Marketing Solutions Landing Page",
    shortDescription: "Axis Marketing Solutions helps businesses stand out with strategic branding, creative design, and marketing systems that turn attention into real customers.",
    description:
      "Axis Marketing Solutions transforms your vision into visuals through strategic marketing that converts. We help businesses increase visibility, attract qualified leads, and build memorable brand identities through social media management, paid advertising, branding design, and content production. Unlike agencies that chase likes, we chase results—because likes don't pay the bills. Our data-driven approach replaces scattered tactics with systematic growth, delivering 3x more leads, +150% engagement, and 2.5x ROI increases for growing brands.",
    images: ["/axis.png"],
    tags: ["React Vite", "CSS"],
    links: {
      demo: "https://axismarketingsolutions-virid.vercel.app",
    },
  },
  {
    id: "3",
    title: "Axial Real Estate Services Landing Page",
    shortDescription: "Axial Realty helps families and investors find the right property faster—residential, condos, land, and commercial real estate with transparent, hassle-free service.",
    description:
      "Axial provides tailored real estate solutions for buyers, investors, and developers in Davao City. Whether you're seeking move-in-ready homes with Pag-IBIG financing or strategic land investments for long-term growth, we make property transactions faster, easier, and more transparent. Our team handles the legwork and paperwork so you can focus on what matters—turning properties into opportunities.",
    images: ["/axial.png"],
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    links: {
      demo: "https://axialrealestate-services.vercel.app",
    },
  },
  {
    id: "4",
    title: "IssueLane Ticket Management System",
    shortDescription: "IssueLane is a streamlined ticketing and task management dashboard for developers. Track support tickets, manage development tasks, and monitor progress in one place.",
    description:
      "IssueLane helps developers stay organized with a unified dashboard for support tickets and development tasks. Create tickets, track resolution progress, manage web development assignments, and monitor completion status—all in one streamlined interface. Built for developers who need clarity between customer support and project deliverables.",
    images: [
      "/issue-lane-1.png",
      "/issue-lane-2.png",
      "/issue-lane-3.png",
      "/issue-lane-4.png",
      "/issue-lane-5.png",
      "/issue-lane-6.png",
    ],
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    links: {
      demo: "https://ticketing-system-blush-one.vercel.app",
    },
  },
]

export default function Projects() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  // Handle reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <section id="projects" className="relative bg-neutral-950 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center sm:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured <span className="text-neutral-500">Projects</span>
            </h2>
          </div>
          {/* Static grid would go here */}
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-neutral-950">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.span>
          </h2>

          <motion.p
            className="mt-4 text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Click on any project to view details and gallery
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card
                className="group relative h-full cursor-pointer overflow-hidden border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700/50 hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-purple-500/5"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-neutral-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  </motion.div>

                  {/* View Indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={false}
                  >
                    <span className="rounded-full bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                      View Project
                    </span>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="border-0 bg-blue-500/20 text-blue-300 backdrop-blur-md">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-2">
                  <p className="mb-4 line-clamp-2 text-sm text-neutral-400">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-neutral-800/50 text-xs text-neutral-300 hover:bg-neutral-700/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800/50 text-xs text-neutral-500"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl border-neutral-800 bg-neutral-950/95 p-0 text-white backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Carousel or Single Image */}
                  <div className="relative border-b border-neutral-800">
                    {selectedProject.images.length > 1 ? (
                      <Carousel
                        setApi={setCarouselApi}
                        className="w-full"
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                      >
                        <CarouselContent>
                          {selectedProject.images.map((image, idx) => (
                            <CarouselItem key={idx}>
                              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                                <Image
                                  src={image}
                                  alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 896px) 100vw, 896px"
                                  priority={idx === 0}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>

                        {/* Custom Navigation Buttons */}
                        <CarouselPrevious className="left-4 h-10 w-10 border-neutral-700 bg-neutral-950/80 text-white hover:bg-neutral-800 hover:text-white" />
                        <CarouselNext className="right-4 h-10 w-10 border-neutral-700 bg-neutral-950/80 text-white hover:bg-neutral-800 hover:text-white" />

                        {/* Image Counter */}
                        <div className="absolute right-4 bottom-4 rounded-full bg-neutral-950/80 px-3 py-1 text-xs text-neutral-400 backdrop-blur-md">
                          {selectedProject.images.length} images
                        </div>
                      </Carousel>
                    ) : (
                      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={selectedProject.images[0]}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 896px) 100vw, 896px"
                          priority
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <DialogHeader className="mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <DialogTitle className="text-2xl font-bold text-white sm:text-3xl">
                            {selectedProject.title}
                          </DialogTitle>
                          <DialogDescription className="mt-2 text-neutral-400">
                            {selectedProject.description}
                          </DialogDescription>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {selectedProject.links?.demo && (
                            <Button
                              variant="outline"
                              size="icon"
                              className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                              asChild
                            >
                              <a
                                href={selectedProject.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogHeader>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-neutral-800/50 px-3 py-1 text-sm text-neutral-300 hover:bg-neutral-700/50"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

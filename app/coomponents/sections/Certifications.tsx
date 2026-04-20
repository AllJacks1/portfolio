"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, X } from "lucide-react"
import Image from "next/image"

interface Certification {
  id: number
  title: string
  issuer: string
  image: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "JavaScript Workshop",
    issuer: "College of Computing Education Skills Clinic - Mentors",
    image: "/JavaScriptCertificate-1.png",
  },
  {
    id: 2,
    title: "ReactJS Workshop",
    issuer: "College of Computing Education Skills Clinic - Mentors",
    image: "/ReactJSCertificate-1.png",
  },
  {
    id: 3,
    title: "Cybersecurity",
    issuer: "Certiport",
    image: "/Cert49113950210-1.png",
  },
  {
    id: 4,
    title: "Networking",
    issuer: "Certiport",
    image: "/Cert9681094533-1.png",
  },
  {
    id: 5,
    title: "Network Security",
    issuer: "Certiport",
    image: "/Cert40310933384-1.png",
  },
  {
    id: 6,
    title: "Databases",
    issuer: "Certiport",
    image: "/Cert75110824758-1.png",
  },
  {
    id: 7,
    title: "HTML and CSS",
    issuer: "Certiport",
    image: "/Cert73310858222-1.png",
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  const openCert = (cert: Certification) => {
    setSelectedCert(cert)
  }

  const closeCert = () => {
    setSelectedCert(null)
  }

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#0F172A] py-24"
    >
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
            Credentials
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#E5E7EB] md:text-4xl lg:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#9CA3AF]">
            Professional certifications and completed courses that validate my
            technical skills and continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-white/5 bg-[#111827] transition-all duration-500 hover:border-[#4F46E5]/30 hover:shadow-lg hover:shadow-[#4F46E5]/10">
                <CardHeader className="pb-3">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4] transition-colors duration-300 group-hover:border-[#4F46E5]/30">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#E5E7EB] transition-colors group-hover:text-white">
                    {cert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="mb-4 text-sm text-[#9CA3AF]">{cert.issuer}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openCert(cert)}
                    className="w-full border-white/10 bg-white/5 text-[#E5E7EB] transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:text-white active:scale-[0.98]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent" />
        </div>
      </div>

      {/* Fullscreen Certificate Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95"
            onClick={closeCert}
          >
            {/* Certificate Image */}
            <div className="relative h-full w-full">
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Controls Overlay */}
            <div className="pointer-events-none absolute inset-0">
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeCert()
                }}
                className="pointer-events-auto absolute top-4 right-4 z-30 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Certificate Info */}
              <div className="pointer-events-auto absolute bottom-4 left-4 z-30 rounded-lg border border-white/10 bg-black/60 p-4 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-white/70">
                  Issued by {selectedCert.issuer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

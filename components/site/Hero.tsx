import Image from "next/image"

import {
  certificates,
  education,
  heroShot,
  mailto,
  projects,
  site,
} from "@/lib/site"
import { Download } from "./icons"

const certiportCount = certificates.filter(
  (certificate) => certificate.issuer === "Certiport"
).length

const facts = [
  {
    figure: String(projects.length),
    label: "live projects, websites and web applications",
  },
  {
    figure: String(certiportCount),
    label: "Certiport IT Specialist certifications",
  },
  {
    figure: "2025",
    label: `BS Information Technology, ${education.school}`,
  },
]

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="wrap grid content-center gap-x-10 gap-y-10 pt-10 pb-14 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,11fr)_minmax(0,12fr)] lg:gap-y-12 lg:py-14">
        <div className="lg:self-end">
          <p className="animate-rise text-[0.9375rem] text-muted">
            {site.city}, {site.country}
          </p>

          <h1
            id="hero-title"
            className="mt-5 animate-rise text-[clamp(2.375rem,1.4rem+3.6vw,4.125rem)] leading-[1.04] tracking-[-0.032em] [animation-delay:60ms]"
          >
            {site.name}.{" "}
            <span className="text-muted">
              Web developer for company websites and internal tools.
            </span>
          </h1>

          <p className="mt-6 max-w-[34rem] animate-rise text-lg text-muted [animation-delay:120ms]">
            I build landing pages, rewards systems and procurement tools with
            Next.js, React and Supabase. Since October 2025 I have been the web
            and systems developer at Astra Group of Companies.
          </p>

          <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:180ms] xs:flex-row">
            <a href={mailto} className="btn btn-primary">
              Email me
            </a>
            <a
              href={site.resume.href}
              download={site.resume.filename}
              className="btn btn-secondary"
            >
              <Download />
              Download resume
            </a>
          </div>
        </div>

        <dl className="grid animate-rise grid-cols-3 gap-x-5 border-t border-line pt-6 [animation-delay:240ms] lg:col-start-1 lg:row-start-2 lg:self-start">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-2 text-sm leading-snug text-muted">
                {fact.label}
              </dt>
              <dd className="font-display text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">
                {fact.figure}
              </dd>
            </div>
          ))}
        </dl>

        <div className="animate-settle max-lg:row-start-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-mr-10 lg:self-center xl:-mr-20">
          <Image
            src={heroShot.src}
            alt={heroShot.alt}
            priority
            sizes="(min-width: 80rem) 44rem, (min-width: 64rem) 54vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}

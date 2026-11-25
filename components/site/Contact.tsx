import { mailto, site } from "@/lib/site"
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "./icons"

const profiles = [
  { label: "GitHub", href: site.github, icon: GitHub },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedIn },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-ink py-20 text-white lg:py-28"
    >
      <div className="wrap grid gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end">
        <div>
          <h2
            id="contact-title"
            className="text-[clamp(2.25rem,1.4rem+3.4vw,4rem)] leading-[1.05] tracking-[-0.032em]"
          >
            Available for web development projects.
          </h2>
          <p className="mt-6 max-w-[34rem] text-lg text-white/70">
            I take on freelance websites and web applications, technical
            collaboration and IT infrastructure work, from {site.city} or
            remotely.
          </p>

          <div className="mt-9 flex flex-col gap-3 xs:flex-row">
            <a
              href={mailto}
              className="btn btn-light focus-visible:outline-white"
            >
              <Mail />
              Email me
            </a>
            <a
              href={site.resume.href}
              download={site.resume.filename}
              className="btn btn-outline-light focus-visible:outline-white"
            >
              <Download />
              Download resume
            </a>
          </div>
        </div>

        <ul className="border-t border-white/20">
          {profiles.map((profile) => (
            <li key={profile.label} className="border-b border-white/20">
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex min-h-16 items-center justify-between gap-4 text-lg transition-colors hover:text-white focus-visible:outline-white"
              >
                <span className="flex items-center gap-3">
                  <profile.icon />
                  {profile.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <ArrowUpRight className="text-white/60 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import Image from "next/image"

import { applications, websites, type Project } from "@/lib/site"
import { ArrowUpRight, Expand } from "./icons"
import Lightbox from "./Lightbox"
import SectionHeading from "./SectionHeading"

const sizes = {
  wide: "(min-width: 80rem) 36rem, (min-width: 48rem) 46vw, 92vw",
  narrow:
    "(min-width: 80rem) 24rem, (min-width: 64rem) 30vw, (min-width: 40rem) 46vw, 92vw",
}

function Cover({ project, wide }: { project: Project; wide: boolean }) {
  const [cover] = project.shots
  const count = project.shots.length

  return (
    <Lightbox
      shots={project.shots}
      title={project.name}
      label={
        count > 1
          ? `View ${count} screens of ${project.name}`
          : `Enlarge the picture of ${project.name}`
      }
      className="relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden border-b border-line"
    >
      {project.coverStyle === "mockup" ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          sizes={wide ? sizes.wide : sizes.narrow}
          placeholder="blur"
          className="size-full object-cover transition-transform duration-500 ease-out-quint group-hover:scale-[1.025]"
        />
      ) : (
        <span className="flex size-full items-center bg-surface px-[7%]">
          <span className="block w-full overflow-hidden rounded-lg border border-line bg-paper shadow-[0_18px_40px_-24px_rgb(17_17_17/0.35)] transition-transform duration-500 ease-out-quint group-hover:scale-[1.025]">
            <span className="flex h-7 items-center gap-1.5 border-b border-line px-3">
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
            </span>
            <Image
              src={cover.src}
              alt={cover.alt}
              sizes={wide ? sizes.wide : sizes.narrow}
              placeholder="blur"
              className="h-auto w-full"
            />
          </span>
        </span>
      )}

      <span className="absolute top-3 right-3 inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-paper/95 px-2.5 text-sm font-medium text-ink opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100 pointer-coarse:opacity-100">
        <Expand width={16} height={16} />
        {count > 1 && <span>{count} screens</span>}
      </span>
    </Lightbox>
  )
}

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  return (
    <li className="flex">
      <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-[transform,border-color,box-shadow] duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_16px_36px_-20px_rgb(17_17_17/0.22)]">
        <Cover project={project} wide={wide} />

        <div className={`flex flex-1 flex-col ${wide ? "p-6 sm:p-7" : "p-6"}`}>
          <p className="text-sm text-muted">{project.kind}</p>
          <h4
            className={`mt-1.5 leading-snug tracking-[-0.015em] ${wide ? "text-2xl" : "text-xl"}`}
          >
            {project.name}
          </h4>
          <p className="mt-3 text-muted">{project.description}</p>

          <div
            className={`mt-auto flex gap-x-6 gap-y-2 pt-6 ${wide ? "flex-wrap items-center justify-between" : "flex-col items-start"}`}
          >
            <p className="text-sm text-muted">{project.tech.join(" · ")}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link -my-2 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium text-accent hover:text-accent-strong"
            >
              <span className="link-draw group-hover/link:[background-size:100%_1px]">
                Visit live site
                <span className="sr-only">
                  {" "}
                  of {project.name} (opens in a new tab)
                </span>
              </span>
              <ArrowUpRight
                width={16}
                height={16}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </article>
    </li>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading
          id="projects-title"
          title="Projects"
          lead={`${applications.length} web applications and ${websites.length} company websites, all live. Open any of them to try it.`}
        />

        <h3 className="mt-14 text-xl tracking-[-0.01em]">Web applications</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {applications.map((project) => (
            <ProjectCard key={project.slug} project={project} wide />
          ))}
        </ul>

        <h3 className="mt-16 text-xl tracking-[-0.01em]">Company websites</h3>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((project) => (
            <ProjectCard key={project.slug} project={project} wide={false} />
          ))}
        </ul>
      </div>
    </section>
  )
}

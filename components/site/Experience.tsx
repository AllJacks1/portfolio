import { education, experience, site } from "@/lib/site"
import { Download } from "./icons"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-y border-line bg-surface py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading
          id="experience-title"
          title="Experience and education"
          action={
            <a
              href={site.resume.href}
              download={site.resume.filename}
              className="btn btn-secondary self-start md:self-auto"
            >
              <Download />
              Download resume
            </a>
          }
        />

        <ol className="mt-12 border-t border-ink/15">
          {experience.map((job) => (
            <li
              key={job.organisation}
              className="grid gap-x-10 gap-y-3 border-b border-ink/15 py-9 lg:grid-cols-[15rem_minmax(0,1fr)]"
            >
              <p className="text-[0.9375rem] text-muted lg:pt-1.5">
                {job.period}
              </p>
              <div>
                <h3 className="text-2xl leading-snug tracking-[-0.015em]">
                  {job.role}
                </h3>
                <p className="mt-1 text-muted">{job.organisation}</p>
                <ul className="mt-5 grid max-w-[44rem] gap-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.7em] left-0 h-px w-2.5 bg-ink/40"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          <li className="grid gap-x-10 gap-y-3 border-b border-ink/15 py-9 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <p className="text-[0.9375rem] text-muted lg:pt-1.5">
              {education.period}
            </p>
            <div>
              <h3 className="text-2xl leading-snug tracking-[-0.015em]">
                {education.degree}
              </h3>
              <p className="mt-1 text-muted">
                {education.school}, {education.place}
              </p>
              <p className="mt-5 max-w-[44rem]">
                Coursework in{" "}
                {education.focus.slice(0, -1).join(", ").toLowerCase()} and{" "}
                {education.focus.at(-1)?.toLowerCase()}.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

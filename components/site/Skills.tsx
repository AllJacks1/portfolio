import Image from "next/image"

import { coreTools, skillGroups } from "@/lib/site"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading
          id="skills-title"
          title="Skills and tools"
          lead="The stack behind the projects above, plus the networking and hardware work I do alongside it."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {coreTools.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center gap-3 rounded-xl border border-line px-4 py-3.5"
            >
              <Image
                src={tool.logo}
                alt=""
                width={28}
                height={28}
                className="size-7 shrink-0 object-contain"
              />
              <span className="font-medium">{tool.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-ink pt-5">
              <h3 className="text-lg tracking-[-0.01em]">{group.title}</h3>
              <ul className="mt-4 grid gap-2 text-muted">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

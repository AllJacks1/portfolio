import type { ReactNode } from "react"

interface SectionHeadingProps {
  id: string
  title: string
  lead?: string
  /** Sits on the heading's baseline at the right edge, e.g. a download button. */
  action?: ReactNode
}

export default function SectionHeading({
  id,
  title,
  lead,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h2
          id={id}
          className="text-[clamp(2rem,1.5rem+2vw,3rem)] leading-[1.08] tracking-[-0.028em]"
        >
          {title}
        </h2>
        {lead && (
          <p className="mt-4 max-w-[38rem] text-lg text-muted">{lead}</p>
        )}
      </div>
      {action}
    </div>
  )
}

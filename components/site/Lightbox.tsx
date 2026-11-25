"use client"

import Image from "next/image"
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react"

import type { Shot } from "@/lib/site"
import { ChevronLeft, ChevronRight, Close } from "./icons"

interface LightboxProps {
  shots: Shot[]
  /** Names the dialog, e.g. the project or certificate title. */
  title: string
  /** Accessible name of the trigger when its content is only a picture. */
  label?: string
  className?: string
  children: ReactNode
}

/**
 * A button that opens its pictures full screen in a native <dialog>:
 * the browser supplies the focus trap, Escape and the top layer.
 */
export default function Lightbox({
  shots,
  title,
  label,
  className,
  children,
}: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const many = shots.length > 1
  const shot = shots[index]

  const show = () => {
    setIndex(0)
    setOpen(true)
    dialog.current?.showModal()
  }

  const step = (by: number) =>
    setIndex((current) => (current + by + shots.length) % shots.length)

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!many) return
    if (event.key === "ArrowRight") step(1)
    if (event.key === "ArrowLeft") step(-1)
  }

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-label={label}
        aria-haspopup="dialog"
        className={className}
      >
        {children}
      </button>

      <dialog
        ref={dialog}
        aria-label={title}
        onClose={() => setOpen(false)}
        onKeyDown={onKeyDown}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-ink text-white backdrop:bg-ink open:flex open:flex-col"
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-4 px-5 sm:px-8">
          <p className="min-w-0 truncate font-display text-lg font-medium">
            {title}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            {many && (
              <p
                className="text-sm text-white/70 tabular-nums"
                aria-live="polite"
              >
                {index + 1} of {shots.length}
              </p>
            )}
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 transition-colors hover:border-white focus-visible:outline-white"
            >
              <Close />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1">
          {open && (
            <Image
              key={shot.src.src}
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-contain px-5 pb-5 sm:px-8 sm:pb-8"
            />
          )}
        </div>

        {many && (
          <div className="flex shrink-0 items-center justify-center gap-3 px-5 pb-6">
            <button
              type="button"
              onClick={() => step(-1)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 transition-colors hover:border-white focus-visible:outline-white"
            >
              <ChevronLeft />
              <span className="sr-only">Previous picture</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 transition-colors hover:border-white focus-visible:outline-white"
            >
              <ChevronRight />
              <span className="sr-only">Next picture</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}

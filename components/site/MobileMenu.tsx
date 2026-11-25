"use client"

import { useEffect, useState } from "react"

import { mailto, navLinks, site } from "@/lib/site"
import { Close, Download, Menu } from "./icons"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    // Leaving phone width closes the menu, so it never opens over the desktop bar.
    const desktop = window.matchMedia("(min-width: 64rem)")
    const onChange = () => desktop.matches && setOpen(false)

    window.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onChange)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onChange)
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="phone-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-ink/20 transition-colors hover:border-ink"
      >
        {open ? <Close /> : <Menu />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open && (
        <div
          id="phone-menu"
          data-menu-open
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto border-t border-line bg-paper"
        >
          <nav aria-label="Main" className="wrap flex-1 py-6">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center font-display text-2xl font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="wrap grid gap-3 pb-8">
            <a
              href={mailto}
              onClick={() => setOpen(false)}
              className="btn btn-primary"
            >
              Email me
            </a>
            <a
              href={site.resume.href}
              download={site.resume.filename}
              onClick={() => setOpen(false)}
              className="btn btn-secondary"
            >
              <Download />
              Download resume
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

import { mailto, navLinks, site } from "@/lib/site"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="wrap relative flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-draw py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={mailto}
            className="btn btn-primary hidden h-11 xs:inline-flex"
          >
            Email me
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

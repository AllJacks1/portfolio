import { navLinks, site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 text-white">
      <div className="wrap">
        <div className="flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.9375rem] text-white/70">
            © {new Date().getFullYear()} {site.name}. {site.role}, {site.city}.
          </p>
          <nav aria-label="Footer">
            <ul className="-mx-3 flex flex-wrap">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center px-3 text-[0.9375rem] text-white/70 transition-colors hover:text-white focus-visible:outline-white"
                  >
                    <span className="link-draw">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

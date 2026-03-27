import { MenuIcon } from "lucide-react"
import { SocialIcon } from "./SocialIcon"

export const NavigationBar = () => {
  const navItems = ["Home", "Projects", "Experience", "Contact", "About"]

  const socialLinks = [
    { name: "GitHub", icon: "github", href: "#" },
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" },
    { name: "Gmail", icon: "mail", href: "#" },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / Brand */}
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-neutral-900 transition-colors duration-200 hover:text-neutral-600"
        >
          Web Developer
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="p-1 text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
            >
              <SocialIcon name={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 text-neutral-600 hover:text-neutral-900 md:hidden">
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </nav>
  )
}

import { MenuIcon } from "lucide-react"
import { SocialIcon } from "./SocialIcon"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

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
        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 text-neutral-400 hover:text-neutral-900"
            >
              <a href={social.href} aria-label={social.name}>
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6">
              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-neutral-900 transition-colors hover:text-neutral-600"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <Separator />

              {/* Mobile Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="h-9 w-9"
                  >
                    <a href={social.href} aria-label={social.name}>
                      <SocialIcon name={social.icon} className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

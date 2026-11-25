import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} Portfolio`,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  }
}

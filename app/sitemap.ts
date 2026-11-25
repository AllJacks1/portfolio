import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      // Bump when the page's content changes; a date that moves on every
      // build tells crawlers nothing.
      lastModified: "2026-11-25",
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}

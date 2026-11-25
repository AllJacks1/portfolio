import type { Metadata, Viewport } from "next"
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google"

import {
  certificates,
  education,
  projects,
  site,
  skillGroups,
} from "@/lib/site"
import "./globals.css"

const display = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
})

const text = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--ff-text",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: site.title,
    description: site.description,
    firstName: "Karl Christian",
    lastName: "Tan",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
}

/* Person, WebSite and ProfilePage in one graph, with the projects as an ItemList. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} Portfolio`,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "en",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${site.url}/#person` },
      primaryImageOfPage: `${site.url}/opengraph-image`,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Karl Christian",
      familyName: "Tan",
      url: site.url,
      image: `${site.url}/opengraph-image`,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description: site.description,
      worksFor: { "@type": "Organization", name: site.employer },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.school,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: site.countryCode,
      },
      knowsLanguage: ["en", "fil"],
      knowsAbout: skillGroups.flatMap((group) => group.skills),
      hasCredential: certificates.map((certificate) => ({
        "@type": "EducationalOccupationalCredential",
        name: certificate.title,
        recognizedBy: { "@type": "Organization", name: certificate.issuer },
      })),
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "ItemList",
      "@id": `${site.url}/#projects`,
      name: `Projects by ${site.name}`,
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          url: project.url,
          genre: project.kind,
          keywords: project.tech.join(", "),
          creator: { "@id": `${site.url}/#person` },
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-lg focus-visible:bg-ink focus-visible:px-4 focus-visible:py-3 focus-visible:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  )
}

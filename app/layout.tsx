import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://mantis-portfolio.vercel.app"),

  title: {
    default: "Karl Christian Tan | Web Developer & Software Builder",
    template: "%s | Karl Christian Tan",
  },

  description:
    "Portfolio of Karl Christian Tan, a Web Developer specializing in React, Next.js, Supabase, and modern SaaS applications.",

  keywords: [
    "Karl Christian Tan",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Supabase",
    "Portfolio",
    "Full Stack Developer",
  ],

  authors: [{ name: "Karl Christian Tan" }],
  creator: "Karl Christian Tan",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mantis-portfolio.vercel.app",
    siteName: "Karl Christian Tan Portfolio",
    title: "Karl Christian Tan | Web Developer & Software Builder",
    description:
      "Portfolio of Karl Christian Tan, a Web Developer and Information Technology graduate specializing in building modern, high-performance full-stack web applications using React, Next.js, TypeScript, and Supabase. Showcasing real-world SaaS projects, UI engineering, and scalable frontend architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karl Christian Tan Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karl Christian Tan | Web Developer",
    description:
      "Portfolio of Karl Christian Tan, a Web Developer and Information Technology graduate specializing in building modern, high-performance full-stack web applications using React, Next.js, TypeScript, and Supabase. Showcasing real-world SaaS projects, UI engineering, and scalable frontend architecture.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
}

/* =========================
   VIEWPORT (MOBILE SEO)
========================= */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

/* =========================
   STRUCTURED DATA (SEO BOOST)
========================= */
function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Karl Christian Tan",
          url: "https://mantis-portfolio.vercel.app",
          jobTitle: "Web Developer",
          description:
            "Portfolio of Karl Christian Tan, a Web Developer and Information Technology graduate specializing in building modern, high-performance full-stack web applications using React, Next.js, TypeScript, and Supabase. Showcasing real-world SaaS projects, UI engineering, and scalable frontend architecture.",
          sameAs: [
            "https://github.com/AllJacks1",
            "https://www.linkedin.com/in/karl-christian-tan-366740227",
          ],
        }),
      }}
    />
  )
}

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, fontMono.variable, "antialiased")}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

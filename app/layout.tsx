import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Karl Christian Tan | Web Developer & Software Builder",
  description:
    "Portfolio of Karl Christian Tan, a Web Developer specializing in React, Next.js, Supabase, and modern SaaS applications.",
  keywords: [
    "Karl Christian Tan",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Karl Christian Tan" }],
  creator: "Karl Christian Tan",
  openGraph: {
    title: "Karl Christian Tan | Web Developer",
    description:
      "Modern portfolio showcasing landing pages, and full-stack projects built with Next.js and React.",
    url: "https://mantis-portfolio.vercel.app/",
    siteName: "Karl Christian Tan Portfolio",
    images: [
      {
        url: "https://mantis-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Christian Tan | Web Developer",
    description:
      "Portfolio showcasing modern web apps built with Next.js, React, and Supabase.",
    images: ["https://mantis-portfolio.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}
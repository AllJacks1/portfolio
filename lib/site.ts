import type { StaticImageData } from "next/image"

import astra from "@/assets/projects/astra.webp"
import astria from "@/assets/projects/astria.webp"
import avaris from "@/assets/projects/avaris.webp"
import axial from "@/assets/projects/axial.webp"
import axis from "@/assets/projects/axis.webp"
import easyloan from "@/assets/projects/easyloan.webp"
import iaccess from "@/assets/projects/iaccess.webp"
import ihub from "@/assets/projects/ihub.webp"
import issueLane1 from "@/assets/projects/issue-lane-1.webp"
import issueLane2 from "@/assets/projects/issue-lane-2.webp"
import issueLane3 from "@/assets/projects/issue-lane-3.webp"
import issueLane4 from "@/assets/projects/issue-lane-4.webp"
import issueLane5 from "@/assets/projects/issue-lane-5.webp"
import issueLane6 from "@/assets/projects/issue-lane-6.webp"
import issueLaneHero from "@/assets/projects/issue-lane-hero.webp"
import procurement from "@/assets/projects/procurement.webp"

import certCybersecurity from "@/assets/certificates/its-cybersecurity.webp"
import certDatabases from "@/assets/certificates/its-databases.webp"
import certHtmlCss from "@/assets/certificates/its-html-css.webp"
import certNetworkSecurity from "@/assets/certificates/its-network-security.webp"
import certNetworking from "@/assets/certificates/its-networking.webp"
import certJavaScript from "@/assets/certificates/javascript-workshop.webp"
import certReact from "@/assets/certificates/reactjs-workshop.webp"

import logoFlutter from "@/assets/logos/flutter.webp"
import logoNext from "@/assets/logos/nextjs.webp"
import logoReact from "@/assets/logos/react.webp"
import logoSupabase from "@/assets/logos/supabase.webp"
import logoTailwind from "@/assets/logos/tailwind.webp"
import logoVite from "@/assets/logos/vite.webp"

/* One place for every fact the page, the metadata and the structured data share. */

export const site = {
  url: "https://mantis-portfolio.vercel.app",
  name: "Karl Christian Tan",
  shortName: "KCT",
  role: "Web and Systems Developer",
  employer: "Astra Group of Companies, Inc.",
  city: "Davao City",
  country: "Philippines",
  countryCode: "PH",
  email: "tankarlchristian@gmail.com",
  github: "https://github.com/AllJacks1",
  linkedin: "https://www.linkedin.com/in/karl-christian-tan-366740227",
  resume: {
    href: "/resume.pdf",
    filename: "Karl_Christian_Tan_Resume.pdf",
  },
  title: "Karl Christian Tan | Web Developer in Davao City, Philippines",
  description:
    "Portfolio of Karl Christian Tan, a web and systems developer in Davao City, Philippines, building company websites and internal tools with Next.js, React and Supabase.",
} as const

export const mailto = `mailto:${site.email}`

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
] as const

export interface Shot {
  src: StaticImageData
  alt: string
}

export interface Project {
  slug: string
  name: string
  kind: string
  description: string
  tech: string[]
  url: string
  /** "mockup" is a device render on white; "screen" is a raw browser capture. */
  coverStyle: "mockup" | "screen"
  /** The first shot is the cover; the rest open in the gallery. */
  shots: Shot[]
}

export const heroShot: Shot = {
  src: issueLaneHero,
  alt: "IssueLane ticket dashboard on a laptop, with its sign-in screen on a phone",
}

export const applications: Project[] = [
  {
    slug: "procurement",
    name: "Procurement Management System",
    kind: "Internal tool",
    description:
      "Replaced Google Sheets with one web app for requests for payment, purchase orders, service orders and liquidations, with role-based access control.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://astra-portal.vercel.app",
    coverStyle: "mockup",
    shots: [
      {
        src: procurement,
        alt: "Procurement dashboard with approval counts and recent activity, on a laptop and a phone",
      },
    ],
  },
  {
    slug: "iaccess",
    name: "iAccess",
    kind: "Customer rewards system",
    description:
      "Rewards system for iHub Coworking Space & Bistro. Customers earn points on each visit and redeem them for meals and discounts.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://ihubcoworking.astragroupph.com/iaccess/login",
    coverStyle: "mockup",
    shots: [
      {
        src: iaccess,
        alt: "iAccess membership page with a points balance, transaction history and rewards to redeem",
      },
    ],
  },
  {
    slug: "easy-loans",
    name: "Easy Loans",
    kind: "Loan management system",
    description:
      "Tracks borrowers, loan balances and repayments, keeps every loan record in one place and reports revenue.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://easyloan-finance.vercel.app/",
    coverStyle: "mockup",
    shots: [
      {
        src: easyloan,
        alt: "Easy Loans loan management system on a laptop and a phone",
      },
    ],
  },
  {
    slug: "issuelane",
    name: "IssueLane",
    kind: "Ticket management system",
    description:
      "One dashboard for support tickets and development tasks: create a ticket, follow it to resolution and track the status of each task.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    url: "https://ticketing-system-blush-one.vercel.app",
    coverStyle: "screen",
    shots: [
      {
        src: issueLane1,
        alt: "IssueLane dashboard with ticket and task counts",
      },
      { src: issueLane3, alt: "IssueLane ticket list with search and filters" },
      {
        src: issueLane4,
        alt: "IssueLane form for creating a ticket with type, priority, assignee and deadline",
      },
      { src: issueLane5, alt: "IssueLane task list with status counts" },
      {
        src: issueLane6,
        alt: "IssueLane form for creating a task with project, priority and due date",
      },
      { src: issueLane2, alt: "IssueLane sign-in screen" },
    ],
  },
]

export const websites: Project[] = [
  {
    slug: "astra",
    name: "Astra Group of Companies Inc.",
    kind: "Corporate website",
    description:
      "Presents the group's services and capabilities to local and international clients.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://www.astragroupph.com/",
    coverStyle: "mockup",
    shots: [
      { src: astra, alt: "Astra Group home page on a laptop and a phone" },
    ],
  },
  {
    slug: "ihub",
    name: "iHub Coworking Space & Bistro",
    kind: "Business website",
    description:
      "Coworking and study spaces, events, the bistro menu and table reservations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://ihubcoworking.astragroupph.com/",
    coverStyle: "mockup",
    shots: [
      {
        src: ihub,
        alt: "iHub Coworking Space & Bistro home page on a laptop and a phone",
      },
    ],
  },
  {
    slug: "axial",
    name: "Axial Real Estate Services",
    kind: "Landing page",
    description:
      "Homes and land investments in Davao City for buyers, investors and developers.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    url: "https://axial.astragroupph.com",
    coverStyle: "mockup",
    shots: [
      {
        src: axial,
        alt: "Axial Real Estate Services landing page on a laptop and a phone",
      },
    ],
  },
  {
    slug: "astria",
    name: "Astria Insurance Solutions",
    kind: "Landing page",
    description:
      "Insurance protection plans for individuals, families and businesses.",
    tech: ["React", "Vite", "CSS"],
    url: "https://astria.astragroupph.com",
    coverStyle: "mockup",
    shots: [
      {
        src: astria,
        alt: "Astria Insurance Solutions landing page on a laptop and a phone",
      },
    ],
  },
  {
    slug: "avaris",
    name: "Avaris Sales Solutions",
    kind: "Landing page",
    description:
      "Outsourced sales support: inquiry management, lead qualification, follow-ups and sales reporting.",
    tech: ["React", "Vite", "CSS"],
    url: "https://avaris.astragroupph.com",
    coverStyle: "mockup",
    shots: [
      {
        src: avaris,
        alt: "Avaris Sales Solutions landing page on a laptop and a phone",
      },
    ],
  },
  {
    slug: "axis",
    name: "Axis Marketing Solutions",
    kind: "Landing page",
    description:
      "Social media management, paid advertising, branding and content production.",
    tech: ["React", "Vite", "CSS"],
    url: "https://axis.astragroupph.com",
    coverStyle: "mockup",
    shots: [
      {
        src: axis,
        alt: "Axis Marketing Solutions landing page on a laptop and a phone",
      },
    ],
  },
]

export const projects = [...applications, ...websites]

export const experience = [
  {
    role: "Web and Systems Developer",
    organisation: "Astra Group of Companies, Inc.",
    period: "October 2025 to present",
    points: [
      "Built a web-based rewards system for the group's food and beverage business to bring customers back.",
      "Moved procurement from Google Sheets to a central web application with role-based access control.",
      "Built landing pages for several of the group's businesses.",
      "Building a point-of-sale system with QR code ordering.",
    ],
  },
  {
    role: "Intern",
    organisation: "Advanced Infinit Technology Solutions, Inc.",
    period: "March to June 2025",
    points: [
      "Moved payment kiosks from direct SQL queries to API integrations using Laravel and VB.NET.",
      "Reworked the kiosk microcontroller circuitry to use less energy and cheaper hardware.",
      "Added features to a web application built on Laravel.",
    ],
  },
] as const

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "University of Mindanao",
  place: "Davao City, Philippines",
  period: "August 2021 to August 2025",
  focus: [
    "Software development",
    "Networking",
    "Hardware troubleshooting",
    "Embedded systems",
  ],
} as const

export const coreTools = [
  { name: "Next.js", logo: logoNext },
  { name: "React", logo: logoReact },
  { name: "Supabase", logo: logoSupabase },
  { name: "Tailwind CSS", logo: logoTailwind },
  { name: "Flutter", logo: logoFlutter },
  { name: "Vite", logo: logoVite },
]

export const skillGroups = [
  {
    title: "Software development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Vite",
      "Flutter",
      "Laravel",
      "VB.NET",
    ],
  },
  {
    title: "Backend and database",
    skills: ["Supabase", "REST APIs", "Authentication systems"],
  },
  {
    title: "Networking and hardware",
    skills: ["Network setup", "Hardware troubleshooting", "Arduino"],
  },
  {
    title: "Homelab and infrastructure",
    skills: ["OPNsense", "Pi-hole", "Self-hosted services"],
  },
] as const

export interface Certificate {
  title: string
  issuer: string
  image: StaticImageData
}

export const certificates: Certificate[] = [
  {
    title: "IT Specialist: Cybersecurity",
    issuer: "Certiport",
    image: certCybersecurity,
  },
  {
    title: "IT Specialist: Network Security",
    issuer: "Certiport",
    image: certNetworkSecurity,
  },
  {
    title: "IT Specialist: Networking",
    issuer: "Certiport",
    image: certNetworking,
  },
  {
    title: "IT Specialist: Databases",
    issuer: "Certiport",
    image: certDatabases,
  },
  {
    title: "IT Specialist: HTML and CSS",
    issuer: "Certiport",
    image: certHtmlCss,
  },
  {
    title: "ReactJS Workshop",
    issuer: "University of Mindanao, CCE Skills Clinic",
    image: certReact,
  },
  {
    title: "JavaScript Workshop",
    issuer: "University of Mindanao, CCE Skills Clinic",
    image: certJavaScript,
  },
]

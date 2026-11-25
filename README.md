# Karl Christian Tan — portfolio

A single-page portfolio built with Next.js (App Router) and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where things live

- `lib/site.ts` — every fact on the page: contact links, projects, experience,
  skills and certificates. The page, the metadata, the sitemap and the
  structured data all read from here, so edit content in this one file.
- `components/site/` — the page sections. Everything is a server component
  except `Lightbox.tsx` and `MobileMenu.tsx`.
- `assets/` — screenshots, certificates and logos as WebP. They are imported
  statically, so `next/image` knows their size and serves AVIF/WebP at the
  width each screen needs.
- `app/` — layout and metadata, `opengraph-image.tsx`, `sitemap.ts`,
  `robots.ts`, `manifest.ts` and the icons.
- `public/resume.pdf` — the file behind every "Download resume" button.

## Adding a project

1. Save the screenshot as WebP in `assets/projects/`.
2. Import it in `lib/site.ts` and add an entry to `applications` or `websites`.

## After changing content

Update `lastModified` in `app/sitemap.ts`. If the site moves to a new domain,
change `site.url` in `lib/site.ts`.

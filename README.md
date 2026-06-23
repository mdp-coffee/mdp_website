# MDP Coffee House — Website v1

Production-grade Next.js 15 marketing site built per the engineering brief.

## Stack
- Next.js 15 (App Router) + TypeScript (strict mode, no `any`)
- Tailwind CSS
- Framer Motion (hero entrance only — used sparingly per brief)
- Zod (form validation)
- Resend (contact form email delivery)
- Content as static JSON/TS — no CMS at launch

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                  # http://localhost:3000
```

## Before deploying

1. **Fonts**: app/layout.tsx uses next/font/google (Barlow, Barlow Condensed,
   Cormorant Garamond) — these fetch automatically on any environment with
   normal internet access (Vercel, your laptop, etc).
2. **Environment variables** — set in Vercel dashboard:
   - `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
   - `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity project ID
   - `RESEND_API_KEY` — from resend.com
   - `CONTACT_EMAIL` — where form submissions are sent
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` — with country code, no +/spaces
   - `NEXT_PUBLIC_SITE_URL` — production domain
3. **Replace placeholders** — every photo and logo slot is clearly marked
   with a dashed border and 📷 label. See PLACEHOLDERS.md for the full list.
4. **Logo** — swap the text "MDP Coffee House" in NavBar.tsx and Footer.tsx
   for the real <Image> once you have an optimized PNG/SVG export.

## Content editing (no code required)

All editable content lives in `/content/*.json`:
- `clients.json` — client logo wall / ticker
- `client-stories.json` — the two (soon three+) client stories
- `testimonials.json` — quotes
- `timeline.json` — full origin story timeline (Origin section)
- `mini-timeline.json` — compressed 4-point teaser (Scale section)
- `cities.json` — geography map city positions
- `operating-formats.json` — the four service formats (explorer)
- `hero-photos.json` — hero crossfade sequence + captions
- `cities-seo.ts` — city SEO landing pages (/locations/[city])
- `site.ts` — locationsCount, enterpriseClients, cupsPerDay, contact info

Edit any of these and redeploy — no component code changes needed.

## Architecture notes

- **Scroll-snap**: desktop uses CSS scroll-snap (slideshow feel), disabled
  on mobile (<768px) for natural scrolling. See ScrollContainer.tsx.
- **Hero**: NOT a carousel — fixed copy, slow photo crossfade (10s hold,
  3s dissolve) per the creative brief. See Hero.tsx.
- **Scale**: merged Geography + cup count + client count into one slide
  (was two separate slides in v1). Includes a compressed 4-point
  mini-timeline teaser; the full origin story still lives in Origin.tsx.
- **Client Proof**: stories render side-by-side in a 2-column grid within
  one viewport (was stacked full-height blocks in v1) — scales to a 2x2
  grid once a 3rd/4th story is approved.
- **Operating Formats**: a real click-through explorer, not a 4-screen
  scroll. Click a tab, use the ← → buttons, or press arrow keys — content
  cross-slides horizontally via Framer Motion's AnimatePresence. The page
  itself never scrolls within this section.
- **Security**: CSP, X-Frame-Options, honeypot + rate-limited contact form,
  server-side Zod validation. See next.config.js and app/api/contact/route.ts.
- **SEO**: JSON-LD structured data, dynamic sitemap, robots.txt, full
  metadata + Open Graph on every page. City pages are statically generated.
- **Accessibility**: semantic HTML, aria-labels throughout, focus-visible
  states, prefers-reduced-motion support, keyboard navigation on the
  Operating Formats explorer (role="tablist", arrow key support).

## Verified

- ✓ `npx tsc --noEmit` — zero errors
- ✓ `npx eslint .` — zero errors
- ✓ `npx next build` — compiles cleanly, all routes generate

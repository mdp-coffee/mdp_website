# MDP Coffee House — Project Context

## Company
B2B corporate coffee service. NOT a consumer coffee brand.
Since 2005. 85+ locations (historical/company-wide). 1,00,000 cups/day. 45+ enterprise clients (company-wide figure — pre-COVID peak was 150+ outlets/15+ cities; current *verified, currently active* footprint is smaller). HQ: Bengaluru.

**Real, verified outlet data lives in code, not in prose:** `content/outlets.ts` has 69 real outlet records across 32 distinct active clients in 4 confirmed cities (Bengaluru, Hyderabad, Mysore, Pune). `content/outlet-addresses.ts` has 42 Google-verified real addresses with lat/lng. `content/clients.json` has the full active + inactive client roster with logos. **Never state a city, client, or outlet-count claim anywhere on the site without checking these files first** — fabricated/stale claims (old "15+ cities," inactive clients like Intel/Wipro/Accenture/HSBC listed as current) have been a recurring, hard-won bug category this project has repeatedly had to fix.

## Brand Positioning
"Operational infrastructure for workplaces, not a coffee brand."
Tone: warm, earned, institutional, quietly confident. Never startup, never trendy, never artisanal. Customer is always the hero — MDP never boasts.

## Tech Stack
Next.js 16 (App Router — package.json currently pins `next: ^16.2.9`; note `eslint-config-next` is still on 15.0.3, a known small version mismatch, not yet resolved), TypeScript (strict, no `any`), Tailwind CSS, Framer Motion, Vercel deployment (deployment/DNS status to the live `mdpcoffeehouse.com` domain should be confirmed before assuming any site changes are publicly live — the domain has historically pointed at an older, unrelated static site).
Content lives in `/content/*.json` and `/content/*.ts` — edit those files to change copy, never hardcode in components.

## Design Tokens (tailwind.config.js) — OFFICIAL BRAND GUIDELINES
Primary colours:
- paper (#F9F0E1) — primary light background (dominant, most sections)
- paper2 (#F5E8D0) — slightly darker warm paper
- parchment (#EDE0C8) — deeper warm tone
- brown (#411915) — primary dark, headlines and type on light backgrounds
- rust (#70120E) — accent red-brown, CTAs, section labels, hover states
- gold (#FEC87F) — amber highlight accent only (not as background)
- cream (#F9F0E1) — text on dark backgrounds
- black (#0C0C0C) — near black, use sparingly for maximum contrast only

Dark sections use `bg-[#411915]`.

Visual rules:
- NO gradients anywhere
- NO off-brand colours (no blues, greens, purples)
- NO rounded corners on logo or containers
- NO drop shadows on logo
- Gold (#FEC87F) is accent only — never a background

Fonts:
- `font-condensed` = Bebas Neue (placeholder for Arpona — paid font, not yet installed)
- `font-sans` = Montserrat (body text; also used for upright headlines — `font-black not-italic` — since Arpona's natural slant reads as italic)

Contrast: verified via WCAG calculation — every primary brand color pairing (brown-on-cream, cream-on-brown, gold-on-brown, rust-on-cream) scores 10:1–13.5:1, comfortably clearing AA's 4.5:1 requirement.

## Homepage Structure (app/page.tsx) — confirmed current, 10 sections
1. **Hero** — locked headline "Made with Care." / "Served with Care." (H1, do not change), rotating MDP acronym sublines
2. **ClientTicker** (light variant) — logo ticker linking to /clients
3. **Scale** — dark left (one-liner + trust line) / paper right (contact form)
4. **OperatingFormats** — interactive tab explorer, **4 formats** (Corporate Kiosk, QSR Cafe, Commercial Outlet — formerly "24/7 Tuck Shop", renamed 2026 — and Event Catering — formerly "Mobile Cart", renamed 2026). ODC does not exist as a built page (never more than a planning-doc mention, and is distinct from Event Catering) — deliberately kept separate/deferred, not part of this system.
5. **OperatingSystem** — 8 operational pillar cards
6. **Origin** — 2005 origin story ("One kiosk. / Twenty years later, / still showing up.") + Vision/Mission
7. **ClientProof** — "They start their day with us." + logo ticker + 2 client stories
8. **Bridge**
9. **Contact** — dark left (story + WhatsApp) / paper right (full form)
10. **Footer**

Plus floating: `WhatsAppFloat`, `LetsTalkFloat`.

*(Note: an earlier planning draft of this file referenced an 8-slide structure including a "TheGesture" Coffee Man engraving section — that section does not exist in the actual current build. This doc previously stated 5 operating formats including ODC; the actual build has 4, with ODC intentionally kept separate.)*

## Full Site Map
- `/about` — Our Story (chronological/factual) + Our Purpose (timeless values statement) — deliberately split to avoid redundancy
- `/clients` — full client grid (active + inactive at reduced opacity), industries served, city presence grid
- `/faq` — visible accordion (`content/faq.ts`) + duplicate `FAQPage` JSON-LD (`app/faq/page.tsx`) — **both must be edited together**, they duplicate the same Q&A
- `/gallery` — real outlet/client photography
- `/blog` + `/blog/[slug]` — currently empty (`content/blog.ts` has zero posts); this is the single largest remaining content gap
- `/careers` — open application, no job listings, resume upload via base64 to Resend
- `/team` — placeholder "coming soon" page
- `/locations/[city]` — 6 static pages (Bengaluru, Hyderabad, Mumbai, Pune, Chennai, Mysore). Content in `content/cities-seo.ts`. Mumbai and Chennai have zero entries in `outlets.ts` (thinner, less differentiated content as a direct consequence — known, not a bug). Each page carries its own `FoodEstablishment` `@graph` JSON-LD (`OutletLocationsJsonLd`) and `BreadcrumbList` schema.
- `/services/[format]` — 4 static pages (corporate-kiosk, qsr-cafe, commercial-outlet, event-catering). Content in `content/operating-formats-seo.ts` (richer than the homepage tab's `operating-formats.json`). Each has its own `seoTitle` field for the `<title>` tag (separate from the on-page H1, which stays brand-voice). Cross-links to the other formats plus back to the homepage tab explorer. `/services/tuck-shop` and `/services/mobile-cart` both 301-redirect to their renamed equivalents (`commercial-outlet` and `event-catering` respectively, in next.config.js).

## SEO/AEO Infrastructure
- `app/robots.ts`, `app/sitemap.ts` (18 URLs, kept in sync manually when new routes are added)
- `components/JsonLd.tsx` exports: `OrganizationJsonLd`, `LocalBusinessJsonLd` (generic sitewide), `TestimonialsJsonLd`, `OutletLocationsJsonLd` (per-city, real verified addresses), `BreadcrumbJsonLd`, `HomePageJsonLd`. `/clients` and `/faq` also have their own inline `WebPage`/`FAQPage` schema.
- `next.config.js` security headers include CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy.
- Every page should have its own `alternates.canonical` — Next.js metadata falls through to the parent layout's value when a page doesn't declare one, which silently produces wrong self-referencing canonicals. This has been a repeat bug category (missed on `/faq`, `/gallery`, `/blog`, `/careers`, `/team`, and `/about` at various points — always check new pages for this).

## Known Open Items (deliberately deferred, not forgotten)
- `blog.ts` empty — 2 seed posts agreed on, not yet written. Planned angle: staffed-counter-vs-vending-machine quality/consistency content (not naming the competitor directly).
- OG images missing (`/images/og-image.jpg`, `/images/og-clients.jpg`) — blocked on asset creation.
- Pervasive `"use client"` on largely-static components (`AboutContent.tsx`, `CityContent.tsx`, `FormatContent.tsx`, `ClientsContent.tsx`, `Footer.tsx`, `OperatingFormats.tsx`) — real performance cost, needs a dedicated server-component refactor pass.
- Tablet breakpoint gap — most mobile fixes switch to desktop styling at `md:` (768px); portrait tablets get full desktop scaling instead of the intended mobile treatment. Agreed fix is extending to `lg:` (1024px), not yet done.
- `clientSlug` values are now reconciled between `outlets.ts`/`outlet-addresses.ts` and `clients.json` — if adding new clients, match the existing slug convention exactly (e.g. `amex` not `american-express`, `smart-work` not `smartworks`, `lsg` not `london-stock-exchange-group`).

## Process Discipline (hard-learned across many sessions)
- Always read the actual current file state before writing a prompt — GitHub connector indexing can lag, and stale assumptions compound quickly.
- One isolated, scoped change per prompt where the change touches rendered UI; pure data/metadata changes can be safely batched.
- Screenshot or direct verification after any change that touches visible layout — a prompt "succeeding" and a change actually landing correctly are not the same thing.
- Never state a specific number (client count, city count, outlet count) without checking it against `outlets.ts`/`outlet-addresses.ts`/`clients.json` first.

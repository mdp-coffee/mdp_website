# MDP Coffee House — Project Context

## Company
B2B corporate coffee service. NOT a consumer coffee brand.
Clients: Amazon, Microsoft, Infosys, Deutsche Bank, TCS, IBM, Intel, Wipro, HCL, Accenture + 30 others.
Since 2005. 85+ locations. 1,00,000 cups/day. 45+ enterprise clients. HQ: Bengaluru.

## Brand Positioning
"Operational infrastructure for workplaces, not a coffee brand."
Tone: warm, earned, institutional, quietly confident. Never startup, never trendy, never artisanal.

## Tech Stack
Next.js 15, TypeScript (strict, no any), Tailwind CSS, Framer Motion, Vercel deployment.
Content lives in /content/*.json — edit those files to change copy, never hardcode in components.

## Design Tokens (tailwind.config.js) — OFFICIAL BRAND GUIDELINES
Primary colours:
- paper (#F9F0E1) — primary light background (dominant, most sections)
- paper2 (#F5E8D0) — slightly darker warm paper
- parchment (#EDE0C8) — deeper warm tone
- brown (#411915) — primary dark, headlines and type on light backgrounds
- darkbrown (#411915) — alias for brown (unified)
- rust (#70120E) — accent red-brown, CTAs, section labels, hover states
- gold (#FEC87F) — amber highlight accent only (not as background)
- gold-light (#FEC87F) — alias for gold (unified)
- cream (#F9F0E1) — text on dark backgrounds
- black (#0C0C0C) — near black, use sparingly for maximum contrast only

Dark sections (hero overlay, scale, gesture, contact left, footer) use bg-[#411915].

Visual rules (from official brand guidelines):
- NO gradients anywhere
- NO off-brand colours (no blues, greens, purples)
- NO rounded corners on logo or containers
- NO drop shadows on logo
- Amber (#FEC87F) is accent only — never a background

Fonts:
- font-condensed = Bebas Neue (placeholder for Arpona — paid font, files go in /public/fonts/)
- font-serif / font-sans = Montserrat (replaced Cormorant Garamond)
- CSS vars: --font-display (Bebas Neue), --font-body (Montserrat)
- When Arpona font files arrive: add @font-face in globals.css, update --font-display

## Page Structure (app/page.tsx) — 8 slides, scroll-snap on desktop
1. Hero — cinematic photo crossfade, fixed headline "Since 2005, we've shown up every morning"
2. Scale — 85+ / 1,00,000 cups / 45+ clients + India map + compact enquiry form (right side)
3. Origin — 2005 editorial story + full timeline
4. ClientProof — logo ticker + 2 client stories side by side
5. OperatingFormats — interactive tab explorer, 4 formats, horizontal Framer Motion slide
6. TheGesture — Coffee Man engraving reveal, dark brown bg
7. Bridge — "We've spent twenty years showing up for theirs. Ready to show up for yours?"
8. Contact — full enquiry form + WhatsApp CTA (form appears here for the second time)

## Components
Each section = one file in /components/. Never put two sections in one file.
CompactForm.tsx — reusable 4-field form (Name, Company, Phone, City), used in Scale slide.
Both forms POST to /api/contact which already handles Zod validation + honeypot + rate limiting.

## What's In Progress
- NavBar: make always sticky/visible after 60px scroll, never hide. "Partner With Us →" always gold.
- Scale.tsx: add CompactForm on right side. Headline: "Bring MDP to your office."
- New Benefits section: between Bridge and Contact. 4-6 plain one-liners about what a partner gets.
- Floating "Let's talk" button: LEFT side of screen, anchors to #contact. Subtle.
- Forms appear twice: compact version in Scale (slide 2), full version in Contact (slide 8).

## Rules
- Never use any, always TypeScript strict
- Never hardcode copy in components — use /content/*.json
- Never add new npm packages without asking first
- Accessibility: aria-labels, focus-visible, semantic HTML always
- No excessive animation — Framer Motion only for hero crossfade and OperatingFormats slider

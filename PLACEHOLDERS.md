# Photo & Asset Placeholder Checklist

Every item below renders as a dashed gold box with a 📷 label in the
live site. Replace by swapping the marked component/prop — no layout
changes required.

## Critical — blocks the hero from feeling finished
- [ ] 6 hero photos → `content/hero-photos.json`, set each `src` field,
      then update Hero.tsx to render `<img src={photo.src}>` (already wired
      to do this automatically once src is non-null)
  - 01 Pre-dawn outlet opening
  - 02 The pour (metre coffee)
  - 03 Employees arriving
  - 04 Queue at corporate kiosk (MOST CRITICAL)
  - 05 Morning rush at counter
  - 06 Coffee handoff across counter

## High priority
- [ ] Logo (PNG/SVG) → NavBar.tsx, Footer.tsx
- [ ] Coffee Man — colour version → Hero or Contact section
- [ ] Coffee Man — engraving version → TheGesture.tsx
- [ ] Archive photo (2005 or oldest available) → Origin.tsx
- [ ] Client logos (SVG) → `content/clients.json`, set `logoSrc` per client
      (get from brandfetch.io)

## Medium priority
- [ ] Operating Formats photos (4) → `content/operating-formats.json`
- [ ] Client story ghost photos (2) → `content/client-stories.json`
- [ ] City page photos (5) → for /locations/[city] pages

## Pending approval
- [ ] Third testimonial → `content/testimonials.json`
- [ ] Additional client case studies (client sign-off required)

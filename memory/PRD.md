# PharmaFoil Industries — PRD

## Original Problem
Build a premium pharmaceutical packaging manufacturer website (PharmaFoil Industries) that competes with international manufacturers — Siemens / Bosch / Honeywell / GE Healthcare-style enterprise aesthetic. NOT a startup or SaaS look. 14 pages, frontend-only, all placeholder content.

## User Choices (verbatim)
- Branding: **PharmaFoil Industries**
- No backend (frontend-only)
- Placeholder content (generated)
- All 14 pages
- No admin panel
- Iteration 2: focus on Home / Products / Product Detail — add animations, gradients, hook the user. "20+ years of website design" elevation.

## Architecture
- React 19 + React Router v7 (BrowserRouter, nested Layout route)
- Tailwind + Shadcn UI primitives
- framer-motion 11 for scroll-driven reveals, parallax, count-ups
- IBM Plex Sans (headings), Karla (body), IBM Plex Mono (technical labels)
- Single data file: `/app/frontend/src/data/site.js`

## File Map
- `App.js` — router with 14 routes under `<Layout/>`
- `components/Navbar.jsx` — utility bar, sticky main bar, More dropdown, mobile drawer
- `components/Footer.jsx` — corporate navy footer
- `components/Layout.jsx` — Outlet wrapper
- `components/PageHero.jsx` — reusable sub-page hero
- `components/SectionHeading.jsx` — eyebrow + h2 + subtitle
- `components/CTABanner.jsx` — RFQ banner
- `components/Marquee.jsx` — infinite cert ticker
- `components/animations/Reveal.jsx` — scroll-triggered reveal
- `components/animations/CountUp.jsx` — animated counters
- `pages/Home.jsx` — 9-section cinematic flow (hero / ticker / metrics / bento products / industries / manufacturing / compliance / global / testimonials / CTA)
- `pages/Products.jsx` — toolbar with counts, grid/list toggle, featured-banner bento
- `pages/ProductDetail.jsx` — editorial split hero, sticky tab nav, animated specs, layer diagram, file-type downloads, related products, dynamic CTA strip
- `pages/About / Industries / Manufacturing / QualityAssurance / Certifications / ExportMarkets / Sustainability / Blog / Careers / Contact / RFQ.jsx`

## Implemented (Feb 2026)
### v1 — First finish
- All 14 pages with hero, sections, CTA, footer
- RFQ 4-step form with validation gating + reference number
- Contact form with sonner toast
- Careers accordion
- Product filter + search
- Tested via testing_agent_v3 (100% pass, iteration_1.json)

### v2 — Cinematic upgrade for Home / Products / ProductDetail
- Hero: kinetic word-by-word reveal, layered floating image stack (clean-room + foil + live-capacity widget), parallax scroll, scroll indicator, side rails with vertical mono labels
- Marquee certification ticker between hero and metrics
- Animated CountUp on all stats (Home metrics, manufacturing, global regions)
- Editorial section numbering (01 · Hero … 09 · CTA)
- Bento product grid: 1 featured (col-span-6 row-span-2) + 4 secondary cards
- Industries: interactive list with rotating plus icon on hover, large mono-num index
- Manufacturing: dark gradient + parallax image stack + animated stat bars + floating "100% camera inspection" card
- Compliance certs: hover-invert to navy
- Global regions: hover-invert to navy with CountUp
- Products: grid/list view toggle, filter pills with counts, featured banner with inline specs, "custom barrier" CTA card in grid, hover-revealed mini-specs
- Product Detail: editorial parallax hero, floating spec aside, sticky tab nav (Overview/Specs/Downloads/Compliance), animated spec table with progress bars, 3-layer substrate diagram, PDF/ZIP file-type chips, dynamic CTA strip referencing current product
- Custom CSS animations: pf-line-grow, pf-pulse, pf-float, pf-grain, pf-dark-gradient, pf-link-arrow, pf-card-lift

## Outstanding / Future
- P1: Hero parallax + Marquee animations on iPad/Mobile sizes (verify)
- P1: Convert other pages (About, Manufacturing, etc.) to v2 cinematic standard
- P2: Custom interactive product spec configurator (foil thickness picker)
- P2: World map SVG with animated export-market dots
- P2: Marquee of real client logos (currently certification list)
- P3: Blog post detail page (currently links nowhere)
- P3: Live chat / regional sales contact widget

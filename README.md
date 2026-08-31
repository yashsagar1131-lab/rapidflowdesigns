# RapidFlow Designs — Website

A one-page marketing site for RapidFlow Designs, a hardware product development
and engineering agency. Built with Next.js 14 (App Router), TypeScript and
Tailwind CSS.

## Run locally

Requires Node.js 18.18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check a production build locally:

```bash
npm run build
npm run start
```

## Deploy

Any Next.js-compatible host works. The simplest path:

**Vercel (recommended)**
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → New Project.
3. Framework preset "Next.js" is auto-detected. No environment variables are
   required. Click Deploy.
4. Point `rapidflowdesigns.com` at the Vercel project under
   Project → Settings → Domains.

**Netlify**
1. Push to GitHub, then "Add new site → Import an existing project."
2. Build command: `next build`. Publish directory: use the official
   `@netlify/plugin-nextjs` (Netlify prompts you to add it automatically for
   Next.js repos).

No API keys or environment variables are needed for this first version —
the site is fully static/client-rendered aside from Next's own build step.

## What still needs your input

- **Contact form delivery.** The form currently builds a `mailto:` link to
  `yash@rapidflowdesigns.com` and hands off to the visitor's email client —
  there's no backend yet, so nothing is stored or guaranteed to send. For a
  more reliable inbox, wire `components/ContactForm.tsx` to a form backend
  (Formspree, Resend, Getform) or a Next.js API route once you've chosen one.
- **Open Graph image.** `app/layout.tsx` has Open Graph/Twitter metadata but
  no image asset yet. Drop a 1200×630 image at `public/og-image.png` and add
  `images: ["/og-image.png"]` to the `openGraph` object in `app/layout.tsx`
  when you have one.
- **Domain verification / analytics.** Add any search-console verification
  tag or analytics snippet you want directly in `app/layout.tsx`.
- **Copy review.** All copy follows the brief closely (no fabricated clients,
  team size, years of experience, or certifications). Re-read it once before
  launch in case anything needs tightening for your voice.

## Architecture

```
app/
  layout.tsx        Fonts, global <html>/<body>, SEO + Open Graph metadata
  page.tsx           Assembles all sections in order
  globals.css        Tailwind entry + a few hand-written utilities
                      (grid background, reveal-on-scroll, focus rings)
components/
  Nav.tsx             Sticky nav, mobile menu (client component)
  Hero.tsx            Hero copy + CTAs + stat row
  CircuitFlow.tsx     Hand-built SVG: schematic symbols flowing into a
                      routed PCB layout — the page's one signature visual,
                      tying "RapidFlow" and "concept → production" together
  SectionHeading.tsx  Shared eyebrow/title/lead pattern used by sections
  Capabilities.tsx    "What We Do" — 6 capability cards
  Process.tsx         "From Concept to Manufacturable PCB" — 3-step flow
                      (Define / Design / Deliver) with an animated
                      connecting line (desktop)
  WhyRapidFlow.tsx    4-point differentiation section
  Applications.tsx    Industry/application areas grid
  WhoWeWorkWith.tsx  Target-customer list
  Contact.tsx         Contact section shell (emails + form)
  ContactForm.tsx     The actual form + mailto submit handler (client)
  Footer.tsx          Minimal footer
  Reveal.tsx          Small IntersectionObserver wrapper used for the
                      fade-up-on-scroll effect (client component)
public/
  favicon.svg         Brand mark (matches the nav logo)
```

### Design decisions

- **Palette**: near-black background (`#09090B`), off-white text
  (`#ECECE8`), muted gray secondary text, and a single restrained accent —
  a desaturated copper (`#C1875A`), chosen because it's literally the color
  of PCB copper traces and solder pads rather than a generic brand color.
- **Type**: Space Grotesk for display headings (technical, geometric),
  IBM Plex Sans for body copy, and IBM Plex Mono for labels, eyebrows and
  numbering — the monospace label treatment nods to schematic annotations
  and datasheet formatting without being a literal skin.
- **Signature element**: the hero and process-section line animation are
  the one deliberately bold visual choice; everything else (cards, grid,
  spacing) stays quiet and disciplined per the brief's own direction.
- **No fabricated credibility markers**: no client logos, testimonials,
  team size, years-in-business, or certifications anywhere in the copy,
  per the brief's constraints. The founder's current employment is not
  referenced anywhere on the site.
- **Motion**: fade-up-on-scroll (IntersectionObserver-driven) and a subtle
  animated dashed line in the hero/process sections. `prefers-reduced-motion`
  is respected globally in `globals.css`.

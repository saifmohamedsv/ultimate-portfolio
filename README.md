# Ultimate Portfolio

A production-ready, fully-featured developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Aceternity UI** components. Content is dynamically served from **MongoDB**, blog posts are pulled from **Hashnode**, and GitHub activity is fetched live from the GitHub API. Features smooth scroll animations, dark/light theme, MDX rendering, case study pages, and comprehensive SEO.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages & Routes](#pages--routes)
- [Animations & UI Effects](#animations--ui-effects)
- [Data Sources & Integrations](#data-sources--integrations)
- [Resume / CV Data Structure](#resume--cv-data-structure)
- [Theme & Dark Mode](#theme--dark-mode)
- [SEO](#seo)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Roadmap / Planned Features](#roadmap--planned-features)
- [License](#license)

---

## Features

### Core (Fully Implemented)

- **Dynamic Resume Data** -- All portfolio content (work experience, projects, skills, education, testimonials, contact info) is stored in MongoDB and fetched at runtime. Update your portfolio without redeploying.
- **Blog Integration (Hashnode)** -- Blog listing and individual post pages pull content directly from your Hashnode publication via GraphQL. Posts are rendered with MDX and syntax-highlighted with `rehype-pretty-code` + Shiki.
- **Local MDX Blog Support** -- A secondary local blog system reads `.mdx` files from `content/blog/` with `gray-matter` frontmatter parsing. Supports `published` flag filtering.
- **GitHub Activity Section** -- Fetches your 6 most-starred, non-forked repositories from the GitHub API and displays them with language colors, star counts, and topic badges.
- **Project Showcase** -- Grid/list views of projects with live badges, technology tags, external links (Website/Source), and hover animations. Alternating layout on the home page.
- **Case Study Pages** -- Projects can optionally have a `caseStudy` field with structured data (problem, solution, outcome, tech details) rendered on dedicated `/projects/[slug]` pages.
- **Testimonials Carousel** -- Infinite horizontally scrolling cards with quotes, names, and titles. Pause-on-hover. CSS-driven animation with cloned DOM nodes for seamless looping.
- **Animated Testimonials** -- An alternate testimonial component with stacked image cards, deterministic rotation, word-by-word blur-in animation, and autoplay support.
- **Work Experience Timeline** -- Two implementations: a simple card grid on the home page, and a scroll-driven vertical timeline with a progress indicator on the about page.
- **Tabbed Work Experience** -- A third work experience view with left-side company tabs and animated panel switching (AnimatePresence).
- **Skills Section** -- Auto-categorized into Frontend, Mobile, Backend, Tools & Services, with an "Other" catch-all for uncategorized skills.
- **Contact Section** -- Email copy-to-clipboard with visual feedback, social links with icons, download CV button, and "Book a call" CTA.
- **Resume PDF Download** -- Configurable PDF path served from `/public`.
- **Resume API Endpoint** -- `GET /api/resume` returns the full MongoDB resume document as JSON with 1-hour cache headers.
- **Smooth Scrolling** -- Lenis smooth scroll provider wrapping the entire app with configurable duration and easing.
- **Responsive Navigation** -- Desktop: floating pill navbar with scroll-triggered backdrop blur, animated hover indicator (layoutId), social icons, theme toggle, and CTA button. Mobile: slide-down menu with AnimatePresence.
- **Dark / Light Theme** -- Zustand-persisted theme with localStorage, system preference detection, and a flash-prevention inline script in `<head>`.
- **Dynamic Sitemap** -- Auto-generated sitemap including static routes, project case study pages, and all Hashnode blog posts with proper priorities and change frequencies.
- **Full SEO** -- Open Graph, Twitter Card, canonical URLs, structured keywords, robots directives, and per-page metadata generation.
- **Accessibility** -- Skip-to-content link, ARIA labels on toggles and navigation, `role="tablist"` / `role="tab"` on work experience, focus-visible outlines.
- **React Compiler** -- Enabled via `reactCompiler: true` in `next.config.ts` with `babel-plugin-react-compiler`.
- **SVG Imports** -- `@svgr/webpack` configured for importing SVGs as React components.

---

## Tech Stack

### Framework & Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.0.10 | App Router, Server Components, API routes |
| React | 19.2.0 | UI library |
| React DOM | 19.2.0 | DOM rendering |
| TypeScript | ^5 | Type safety |

### Styling

| Package | Version | Purpose |
|---------|---------|---------|
| Tailwind CSS | ^4 | Utility-first CSS |
| `@tailwindcss/postcss` | ^4 | PostCSS integration |
| `tw-animate-css` | ^1.4.0 | Animation utilities |
| `tailwind-merge` | ^3.3.1 | Merge conflicting Tailwind classes |
| `clsx` | ^2.1.1 | Conditional class names |
| `class-variance-authority` | ^0.7.1 | Variant-based component styling |

### Animation

| Package | Version | Purpose |
|---------|---------|---------|
| `motion` (Framer Motion) | ^12.23.24 | Page transitions, scroll animations, layout animations |
| `lenis` | ^1.3.18 | Smooth scrolling |
| `simplex-noise` | ^4.0.3 | Wavy background canvas animation |

### Data & Content

| Package | Version | Purpose |
|---------|---------|---------|
| `mongodb` | ^7.0.0 | Resume data storage |
| `next-mdx-remote` | ^6.0.0 | Server-side MDX rendering |
| `gray-matter` | ^4.0.3 | Frontmatter parsing for local MDX |
| `rehype-pretty-code` | ^0.14.3 | Code block syntax highlighting |
| `shiki` | ^4.0.2 | Syntax highlighting engine |

### State Management

| Package | Version | Purpose |
|---------|---------|---------|
| `zustand` | ^5.0.8 | Theme persistence, client-side state |

### Icons

| Package | Version | Purpose |
|---------|---------|---------|
| `@tabler/icons-react` | ^3.35.0 | Icon library (GitHub, LinkedIn, X, YouTube, Mail, Globe, etc.) |

### Dev Tools

| Package | Purpose |
|---------|---------|
| `@svgr/webpack` | Import SVGs as React components |
| `babel-plugin-react-compiler` | React Compiler (auto-memoization) |
| `eslint` + `eslint-config-next` | Linting |

---

## Pages & Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Server Component | Home page -- Hero, GitHub Activity, Projects Preview (top 4), Experience, Testimonials, Blog Preview (latest 3), Contact |
| `/projects` | Server Component | Full project grid with images, tech tags, live badges, case study links |
| `/projects/[slug]` | Server Component | Case study detail -- problem/solution/outcome/tech stack sections with staggered reveals |
| `/blog` | Server Component | Blog listing from Hashnode with cover images, read time, tags |
| `/blog/[slug]` | Server Component | Full blog post with MDX rendering, syntax highlighting, author info, reading time, original Hashnode link |
| `/about` | Server Component | About hero, Skills (categorized), Education, Download Resume |
| `/api/resume` | API Route | Returns raw MongoDB resume document as JSON (1h cache) |
| `/sitemap.xml` | Generated | Dynamic sitemap covering all routes + blog posts |

All pages use `force-dynamic` rendering to ensure fresh MongoDB/Hashnode data.

---

## Animations & UI Effects

All animation components are in `components/ui/` and are inspired by / adapted from **Aceternity UI**:

| Component | File | Effect |
|-----------|------|--------|
| **Text Generate Effect** | `text-generate-effect.tsx` | Words appear one by one with blur-to-focus transition using staggered Framer Motion animations |
| **Typewriter Effect** | `typewriter-effect.tsx` | Characters appear sequentially with a blinking cursor. Two variants: standard and smooth (width-expanding) |
| **Section Reveal** | `section-reveal.tsx` | Fade-up + scale scroll-triggered entrance animation (`whileInView`) with configurable delay |
| **Infinite Moving Cards** | `infinite-moving-cards.tsx` | Testimonials auto-scroll horizontally with CSS animation. DOM nodes are cloned for seamless looping. Pause on hover. Configurable speed and direction |
| **Animated Testimonials** | `animated-testimonials.tsx` | Stacked photo cards with deterministic rotation, active card bounce animation, word-by-word blur reveal for quotes |
| **Background Beams with Collision** | `background-beams-with-collision.tsx` | Animated vertical beams fall and "explode" into particles on collision with a bottom boundary. Uses collision detection via `getBoundingClientRect` |
| **Wavy Background** | `wavy-background.tsx` | Canvas-based animated waves using simplex noise. Configurable colors, speed, blur, and opacity. Safari-compatible |
| **Timeline** | `timeline.tsx` | Vertical timeline with scroll-driven progress line using `useScroll` + `useTransform`. Glowing dot indicators |
| **Resizable Navbar** | `resizable-navbar.tsx` | Floating pill navbar that morphs on scroll -- gains backdrop blur, border, and shadow. Animated hover indicator with `layoutId`. Mobile menu with AnimatePresence |
| **Button Connect** | `button-connect.tsx` | Shimmer overlay on hover (gradient animation), scale on press (`whileTap`), glow effect in dark mode. Supports default and ghost variants |
| **Logo** | `logo.tsx` | Animated SVG logo (assumed from navbar usage) |

### Motion Patterns Used Throughout

- `initial` / `animate` entrance animations (fade, scale, translate)
- `whileInView` with `viewport: { once: true }` for scroll-triggered reveals
- `whileHover` / `whileTap` for micro-interactions
- `AnimatePresence` with `mode="wait"` for page/tab transitions
- `layoutId` for shared layout animations (navbar hover indicator)
- `useScroll` + `useTransform` for scroll-linked progress (timeline)
- Staggered children with `stagger()` utility
- CSS `@keyframes` for infinite scroll and shimmer effects

---

## Data Sources & Integrations

### 1. MongoDB (Primary Data Store)

- **Connection**: `lib/mongodb.ts` -- uses `MongoClient` with connection caching across hot reloads
- **Database**: Configurable via `DATABASE_URL` path segment (defaults to `"resume"`)
- **Collection**: `data` (single document containing the entire resume)
- **Data Flow**: `MongoDB -> /api/resume (API Route) -> getResumeData() (cached fetch with 1h revalidation) -> Server Components`
- **Stores**: name, initials, URL, location, description, summary, avatar, skills, navbar links, contact/social info, work experience, education, projects (with optional case studies), testimonials

### 2. Hashnode (Blog Content)

- **API**: Hashnode GraphQL API (`https://gql.hashnode.com`)
- **Connection**: `lib/hashnode.ts` -- typed GraphQL client with `fetch` and 1-hour ISR revalidation
- **Queries**: `getHashnodePosts(first)` for listing, `getHashnodePost(slug)` for individual posts
- **Data Retrieved**: id, title, slug, brief, coverImage, publishedAt, readTimeInMinutes, tags, content (markdown), SEO metadata, OG metadata, subtitle, URL
- **Rendering**: MDX via `next-mdx-remote/rsc` with `rehype-pretty-code` for syntax highlighting (GitHub Dark theme)
- **Graceful Degradation**: Returns empty array if `HASHNODE_HOST` is not set

### 3. GitHub API (Activity Section)

- **API**: REST (`https://api.github.com/users/{username}/repos`)
- **Connection**: `lib/github.ts` -- fetches 6 most recently updated repos, filters out forks, sorts by stars
- **Caching**: 1-hour ISR revalidation via `next: { revalidate: 3600 }`
- **Data Retrieved**: name, description, html_url, stargazers_count, language, topics, fork status

### 4. Local MDX Files (Secondary Blog System)

- **Directory**: `content/blog/`
- **Processing**: `lib/blog.ts` -- reads `.mdx` files, parses frontmatter with `gray-matter`
- **Frontmatter Schema**: title, description, date, tags, image, published (boolean filter)
- **Status**: Infrastructure is in place but the primary blog uses Hashnode. The local system can coexist.

---

## Resume / CV Data Structure

The MongoDB document (and fallback `data/resume.tsx`) follows this schema:

```typescript
{
  name: string;              // "Saif Mohamed"
  initials: string;          // "SM"
  url: string;               // Portfolio URL
  nzmly: string;             // Booking link (CTA)
  location: string;          // "Alexandria, Egypt"
  locationLink: string;      // Google Maps link
  description: string;       // One-line tagline
  summary: string;           // Longer bio paragraph
  avatarUrl: string;         // Path to avatar image
  skills: string[];          // ["HTML", "CSS", "React.js", "Next.js", ...]

  contact: {
    email: string;
    tel: string;
    social: Record<string, {
      name: string;
      url: string;
      icon: string;          // Tabler icon name (e.g., "IconBrandGithub")
      navbar: boolean;       // Whether to show in navbar
    }>;
  };

  work: Array<{
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;          // Company logo URL
    start: string;            // "Mar 2024"
    end: string;              // "Jan 2025"
    description: string;      // Paragraph (auto-split by ". " for bullet points)
  }>;

  education: Array<{
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }>;

  projects: Array<{
    title: string;
    href: string;
    dates: string;
    active: boolean;          // Shows green "Live" badge
    description: string;
    technologies: string[];
    links: Array<{
      type: string;           // "Website" | "Source"
      href: string;
      icon: string;           // Tabler icon name
    }>;
    image: string;            // Cover image URL
    video: string;            // (Currently unused, placeholder for video embeds)
    slug?: string;            // URL slug for case study page
    caseStudy?: {
      heroImage: string;
      problem: string;
      solution: string;
      outcome: string;
      techDetails: string[];
    };
  }>;

  testimonials: Array<{
    quote: string;
    name: string;
    designation: string;      // Job title
    src: string;              // Profile photo URL
  }>;
}
```

**Icon Mapping**: Icons are stored as string names in MongoDB (e.g., `"IconBrandGithub"`) and mapped to actual React components on the client side via `lib/icon-mapper.ts`. Supported icons: `IconBrandGithub`, `IconBrandLinkedin`, `IconBrandX`, `IconBrandYoutube`, `IconMail`, `IconGlobe`.

---

## Theme & Dark Mode

The theme system is built with three layers to prevent flash-of-unstyled-content (FOUC):

1. **Inline `<head>` Script** (in `app/layout.tsx`): Runs before paint. Reads `theme-storage` from `localStorage`, applies or removes the `dark` class on `<html>`. Falls back to `prefers-color-scheme` media query.

2. **Zustand Store** (`lib/theme-store.ts`): Persisted to `localStorage` under key `theme-storage` using Zustand's `persist` middleware. Exposes `theme`, `toggle()`, and `setTheme()`. The `applyTheme()` function adds/removes the `dark` class on `document.documentElement`.

3. **ThemeInit Component** (`components/theme-init.tsx`): Client component that runs on mount. If no stored preference exists, detects system preference and initializes the store.

### CSS Variables

Light and dark themes are defined via CSS custom properties in `globals.css`:

- **Primary color**: Indigo (`#6366f1` light / `#818cf8` dark)
- **Background**: Near-white (`#fafafa`) / Near-black (`#09090b`)
- **Cards**: Glass morphism with `backdrop-blur-xl`, semi-transparent backgrounds
- **Glow effects**: Primary color with transparency for button/icon hover states
- **Shadows**: Subtle in light mode, deeper in dark mode

### Toggle

The `ThemeToggle` component (and the inline toggle in the navbar) renders sun/moon icons from `@tabler/icons-react` with a 180-degree rotation animation on toggle.

---

## SEO

### Global Metadata (via `generateMetadata` in `layout.tsx`)

- `title` template: `%s | {Name}` with default `{Name} -- Frontend Engineer`
- `description` from resume data
- `keywords` including name, role, technologies, and location
- `authors` with name and URL
- Open Graph: type `website`, 1200x630 preview image, locale `en_US`
- Twitter Card: `summary_large_image` with configurable handle
- `robots`: index, follow, max-video-preview, max-image-preview, max-snippet
- Canonical URL via `alternates.canonical`
- LinkedIn profile via `other` metadata

### Per-Page Metadata

- `/projects`: Static title + description
- `/projects/[slug]`: Dynamic title/description from project data
- `/blog`: Static title + description
- `/blog/[slug]`: Dynamic title, description, published date, author, tags, OG article type, cover image
- `/about`: Static title + description

### Sitemap (`app/sitemap.ts`)

- Static routes: `/` (priority 1), `/projects` (0.9), `/blog` (0.8), `/about` (0.8)
- Dynamic case study pages (priority 0.7)
- Dynamic Hashnode blog post pages (priority 0.6)
- `lastModified` timestamps for blog posts from `publishedAt`

---

## Getting Started

### Prerequisites

- Node.js >= 18
- A MongoDB instance (local or Atlas)
- (Optional) A Hashnode blog publication
- (Optional) A GitHub account

### Installation

```bash
git clone https://github.com/saifmohamedsv/ultimate-portfolio.git
cd ultimate-portfolio
npm install
```

### Configuration

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

See [Environment Variables](#environment-variables) below for details.

### Development

```bash
npm run dev
```

The app starts on `http://localhost:3000` using Webpack (the `--webpack` flag is set in the dev script).

### Build & Production

```bash
npm run build
npm start
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your deployed URL (used for SEO, sitemap, and internal API calls) |
| `DATABASE_URL` | Yes | MongoDB connection string (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/resume`) |
| `GITHUB_USERNAME` | No | Your GitHub username for the activity section |
| `HASHNODE_HOST` | No | Your Hashnode publication host (e.g., `username.hashnode.dev`). Leave empty to disable blog |
| `SITE_NAME` | No | Site name for SEO (falls back to resume `name`) |
| `TWITTER_HANDLE` | No | Twitter/X handle for meta tags |
| `LINKEDIN_URL` | No | LinkedIn profile URL for meta tags |
| `RESUME_PDF_PATH` | No | Path to your resume PDF in `/public` (defaults to `/resume.pdf`) |

---

## Project Structure

```
ultimate-portfolio/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, nav, smooth scroll)
│   ├── page.tsx                # Home page (7 sections)
│   ├── globals.css             # Theme variables, glass cards, article prose
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── about/page.tsx          # About page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post detail
│   ├── projects/
│   │   ├── page.tsx            # Projects grid
│   │   └── [slug]/page.tsx     # Case study detail
│   └── api/resume/route.ts     # Resume JSON API
├── components/
│   ├── navbar.tsx              # Main navigation (desktop + mobile)
│   ├── smooth-scroll-provider.tsx  # Lenis wrapper
│   ├── theme-init.tsx          # Theme hydration
│   ├── theme-toggle.tsx        # Sun/moon toggle button
│   ├── work-experience.tsx     # Tabbed work experience view
│   ├── pages/
│   │   ├── home/
│   │   │   ├── hero.tsx        # Hero section with avatar, text generate effect
│   │   │   ├── projects.tsx    # Projects preview (top 4)
│   │   │   ├── experience.tsx  # Experience cards
│   │   │   ├── testimonials.tsx    # Infinite scrolling testimonials
│   │   │   ├── blog-preview.tsx    # Latest 3 blog posts
│   │   │   ├── contact.tsx     # Contact section with email copy
│   │   │   └── github-activity.tsx # GitHub repos grid
│   │   ├── about/
│   │   │   ├── about-hero.tsx      # About page header
│   │   │   ├── career-timeline.tsx # Scroll-driven career timeline
│   │   │   └── skills-section.tsx  # Categorized skills grid
│   │   ├── blog/
│   │   │   ├── blog-card.tsx       # Blog post card component
│   │   │   └── mdx-components.tsx  # Custom MDX element mappings
│   │   └── projects/
│   │       └── case-study.tsx      # Case study layout
│   ├── shared/
│   │   └── button-connect.tsx      # Primary CTA button with shimmer
│   └── ui/                     # Aceternity-inspired animation components
│       ├── animated-testimonials.tsx
│       ├── background-beams-with-collision.tsx
│       ├── infinite-moving-cards.tsx
│       ├── resizable-navbar.tsx
│       ├── section-reveal.tsx
│       ├── text-generate-effect.tsx
│       ├── timeline.tsx
│       ├── typewriter-effect.tsx
│       └── wavy-background.tsx
├── content/blog/               # Local MDX blog posts
│   └── sample-post.mdx
├── data/
│   └── resume.tsx              # Fallback/reference resume data
├── lib/
│   ├── blog.ts                 # Local MDX blog utilities
│   ├── github.ts               # GitHub API fetcher
│   ├── hashnode.ts             # Hashnode GraphQL client
│   ├── icon-mapper.ts          # String-to-icon-component mapper
│   ├── mongodb.ts              # MongoDB connection (cached client)
│   ├── resume-data.ts          # Resume data fetcher (via API route, cached)
│   ├── theme-store.ts          # Zustand theme store with persistence
│   ├── utils.ts                # cn() utility (clsx + tailwind-merge)
│   └── types/
│       ├── blog.ts             # BlogFrontmatter, BlogPost types
│       └── github.ts           # GitHubRepo type
├── public/
│   └── me.png                  # Avatar image
├── .env.example                # Environment variable template
├── next.config.ts              # Next.js config (React Compiler, images, SVG)
└── package.json
```

---

## Customization Guide

### Changing Your Data

1. **With MongoDB (recommended)**: Insert your resume data as a single document in the `data` collection of your database. Follow the schema documented in [Resume / CV Data Structure](#resume--cv-data-structure).

2. **Without MongoDB**: Edit `data/resume.tsx` directly and modify `lib/resume-data.ts` to import from it instead of fetching from the API.

### Adding a New Project

Add an entry to the `projects` array in your MongoDB document. To enable a case study page, include `slug` and `caseStudy` fields.

### Adding Icons

To support additional Tabler icons, add them to the `iconMap` in `lib/icon-mapper.ts`.

### Changing the Theme Colors

Edit the CSS custom properties in `app/globals.css` under `:root` (light) and `.dark` (dark). The primary color is indigo by default.

### Disabling Integrations

- **Blog**: Leave `HASHNODE_HOST` empty -- the blog section gracefully shows "No articles yet."
- **GitHub**: Leave `GITHUB_USERNAME` empty -- the GitHub section is hidden when repos array is empty.

---

## Roadmap / Planned Features

Based on the codebase structure and partial implementations:

- **Video project showcases**: The `video` field exists in the project schema but is currently unused (empty strings). Infrastructure is ready for video embeds.
- **Career Timeline on About Page**: The `CareerTimeline` component exists and is fully built but is not currently rendered on the About page (only `AboutHero`, `SkillsSection`, and `Education` are rendered).
- **Local + Hashnode blog coexistence**: The local MDX blog system (`lib/blog.ts`, `content/blog/`) is fully implemented but the routes currently only use Hashnode. Both systems could run simultaneously.
- **Background effects on pages**: `BackgroundBeamsWithCollision` and `WavyBackground` components are built and available but not currently used on any page.
- **Animated Testimonials (alternate view)**: The `AnimatedTestimonials` component (stacked cards with images) exists as an alternative to the current `InfiniteMovingCards` implementation.

---

## Scripts

```bash
npm run dev      # Start dev server with Webpack
npm run build    # Production build with Webpack
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## License

No license specified. Contact the author for usage terms.

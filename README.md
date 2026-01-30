# EMPM Dumpsters

**Reliable dumpster rentals and waste removal services for Northeastern Pennsylvania.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/empmdumpsters/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## What's New? Old vs. New Website

This redesigned website replaces the previous site at empmdumpsters.com. Here's what customers will notice:

| Feature | Old Website | New Website |
|---------|-------------|-------------|
| **Finding Information** | Basic 4-page site (Home, About, Services, Contact) | 10+ pages with dedicated sections for sizes, guidelines, contractors, and more |
| **Getting a Quote** | Contact form only | Multi-step quote wizard that guides you through the process |
| **Choosing a Dumpster Size** | No size guide | Interactive size comparison with dimensions, capacity, and project recommendations |
| **Knowing What's Allowed** | Not mentioned | Full "Guidelines" page listing accepted and prohibited items |
| **Pricing Transparency** | No pricing info | "No Hidden Fees Guarantee" with clear breakdown of what's included |
| **For Contractors** | No contractor info | Dedicated page with volume pricing, priority scheduling, and account setup |
| **Service Areas** | Not listed | All 19 cities served are clearly displayed |
| **Common Questions** | No FAQ | Expandable FAQ section answering the most common questions |
| **Mobile Experience** | Basic responsive | Fully optimized with sticky call button and touch-friendly navigation |
| **Speed & Performance** | Template-based | Modern framework with fast loading and smooth animations |
| **Trust Signals** | One testimonial | Customer reviews, years in business, and satisfaction guarantees throughout |

**Bottom line:** The new site makes it easier for customers to understand services, choose the right dumpster, and get a quote — all without having to call first (though they still can!).

---

## Table of Contents

- [What's New?](#whats-new-old-vs-new-website)
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## About

EMPM Dumpsters is the official website for EMPM Dumpsters, LLC, a family-owned waste removal company serving Northeastern Pennsylvania since 2004. This modern, responsive website showcases dumpster rental services, provides instant quote requests, and connects customers with reliable waste management solutions.

**Key Value Propositions:**

- Same-day dumpster delivery available
- No hidden fees with straightforward pricing
- Over 20 years of trusted service
- Residential and commercial solutions

---

## Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Polished user experience with Framer Motion transitions
- **SEO Optimized** - Built-in metadata, Open Graph tags, and Schema.org markup
- **Fast Performance** - Server-side rendering with Next.js App Router
- **Accessible** - WCAG-compliant with skip links and semantic HTML
- **Type Safe** - Full TypeScript coverage for reliability
- **Security Headers** - XSS protection, content security, and referrer policies
- **Optimized Images** - Automatic WebP/AVIF conversion with lazy loading

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) with App Router |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Language** | [TypeScript 5.6](https://www.typescriptlang.org/) |
| **Deployment** | [Netlify](https://www.netlify.com/) |
| **Fonts** | Inter, Playfair Display (Google Fonts) |

---

## Quick Start

### Prerequisites

- **Node.js** >= 20.0.0
- **npm** >= 10.0.0 (or yarn/pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cr-nattress/empmdumpsters.git
   cd empmdumpsters
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
empm-dumpsters-site/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── quote/              # Quote request page
│   ├── services/           # Services page
│   ├── sizes/              # Dumpster sizes page
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage
├── components/
│   ├── sections/           # Page sections (Hero, Services, CTA, etc.)
│   └── ui/                 # Reusable UI components (Button, Card, Input)
├── config/
│   ├── navigation.ts       # Navigation menu configuration
│   └── site.ts             # Site-wide configuration and business data
├── lib/
│   ├── animations.ts       # Framer Motion animation variants
│   ├── cn.ts               # Utility for merging class names
│   └── types.ts            # Shared TypeScript interfaces
├── public/
│   └── images/             # Static images
├── netlify.toml            # Netlify deployment configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run type-check` | Run TypeScript compiler checks |

### Code Style

This project uses:
- **ESLint** with Next.js configuration for linting
- **TypeScript** strict mode for type safety
- **Tailwind CSS** for utility-first styling

### Adding New Pages

Create a new directory under `app/` with a `page.tsx` file:

```tsx
// app/new-page/page.tsx
import { Container } from '@/components/ui'

export default function NewPage() {
  return (
    <Container>
      <h1>New Page</h1>
    </Container>
  )
}
```

### Working with Animations

Import pre-built animation variants from `lib/animations.ts`:

```tsx
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={fadeUp}>Animated Title</motion.h1>
</motion.div>
```

---

## Deployment

### Netlify (Recommended)

This project is configured for seamless Netlify deployment.

1. **Connect your repository** to Netlify
2. **Build settings are auto-detected** from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy** - Netlify handles the rest

### Environment Variables

No environment variables are required for basic deployment. For advanced features, create a `.env.local` file:

```env
# Optional: Analytics, form handling, etc.
NEXT_PUBLIC_SITE_URL=https://empmdumpsters.com
```

### Netlify Configuration

The `netlify.toml` includes:
- Security headers (XSS, Content-Type, Referrer-Policy)
- Static asset caching (1 year for images and Next.js assets)
- URL redirects for legacy routes

---

## Configuration

### Site Configuration

All business information is centralized in `config/site.ts`:

```typescript
export const siteConfig = {
  name: 'EMPM Dumpsters',
  contact: {
    phone: '(570) 905-5595',
    email: 'empmdumpsters@gmail.com',
  },
  dumpsterSizes: [...],
  serviceAreas: [...],
  // ...
}
```

### Navigation

Update `config/navigation.ts` to modify the header and footer menus.

### Styling

Global CSS variables are defined in `app/globals.css`:

```css
:root {
  --primary: #2563eb;
  --accent: #ea580c;
  --bg: #ffffff;
  /* ... */
}
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and commit (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code patterns and naming conventions
- Write TypeScript types for new components and data
- Test across multiple screen sizes before submitting
- Run `npm run lint` and `npm run type-check` before committing

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **EMPM Dumpsters, LLC** - For 20+ years of serving the NEPA community
- **Vercel** - For the Next.js framework
- **Tailwind Labs** - For Tailwind CSS
- **Framer** - For Framer Motion animations

---

<p align="center">
  <strong>EMPM Dumpsters</strong><br>
  Serving Northeastern Pennsylvania since 2004<br>
  <a href="tel:+15709055595">(570) 905-5595</a> | <a href="mailto:empmdumpsters@gmail.com">empmdumpsters@gmail.com</a>
</p>

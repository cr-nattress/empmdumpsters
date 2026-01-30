# EMPM Dumpsters - Quick Start Guide

## Prerequisites

- Node.js 18+
- npm or pnpm
- Git
- VS Code (recommended)

---

## 1. Project Setup

```bash
# Navigate to project directory
cd C:\Users\RED\git\empmdumpsters

# Create Next.js app
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install core dependencies
npm install @ai-sdk/anthropic ai @supabase/supabase-js framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install resend lucide-react clsx tailwind-merge date-fns

# Install shadcn/ui
npx shadcn@latest init

# Add shadcn components
npx shadcn@latest add button card input textarea select label
npx shadcn@latest add accordion dialog sheet tabs badge
npx shadcn@latest add form calendar popover
```

---

## 2. Environment Setup

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# AI
ANTHROPIC_API_KEY=your_anthropic_key

# Email
RESEND_API_KEY=your_resend_key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 3. Create Core Files

### Site Config

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "EMPM Dumpsters",
  description: "Professional dumpster rental and estate clean-out services. 20+ years serving Colorado.",
  phone: "(570) 905-5595",
  email: "info@empmdumpsters.com",
  address: {
    street: "",
    city: "",
    state: "CO",
    zip: "",
  },
  social: {
    facebook: "https://www.facebook.com/people/EMPM-Dumpsters-LLC/100078114813045/",
  },
  established: 2004,
};
```

### Dumpster Sizes Data

```typescript
// src/content/dumpster-sizes.ts
export const dumpsterSizes = [
  {
    size: 10,
    name: "10-Yard Dumpster",
    dimensions: { length: 12, width: 8, height: 4 },
    capacity: {
      cubicYards: 10,
      truckLoads: 4,
      trashBags: "50-70",
    },
    weight: {
      included: 2,
      unit: "tons",
      overageRate: 85,
    },
    pricing: {
      base: 399,
      delivery: 0,
      rental: 7,
    },
    idealFor: [
      "Small basement cleanout",
      "Garage declutter", 
      "Minor renovation",
      "Yard debris",
    ],
    slug: "10-yard-dumpster",
  },
  {
    size: 15,
    name: "15-Yard Dumpster",
    dimensions: { length: 16, width: 8, height: 4 },
    capacity: {
      cubicYards: 15,
      truckLoads: 6,
      trashBags: "80-100",
    },
    weight: {
      included: 2.5,
      unit: "tons",
      overageRate: 85,
    },
    pricing: {
      base: 449,
      delivery: 0,
      rental: 7,
    },
    idealFor: [
      "Medium home cleanout",
      "Bathroom remodel",
      "Deck removal",
      "Flooring project",
    ],
    slug: "15-yard-dumpster",
  },
  {
    size: 20,
    name: "20-Yard Dumpster",
    popular: true,
    dimensions: { length: 22, width: 8, height: 4.5 },
    capacity: {
      cubicYards: 20,
      truckLoads: 8,
      trashBags: "110-130",
    },
    weight: {
      included: 3,
      unit: "tons",
      overageRate: 85,
    },
    pricing: {
      base: 549,
      delivery: 0,
      rental: 7,
    },
    idealFor: [
      "Full home cleanout",
      "Kitchen remodel",
      "Roofing (small home)",
      "Estate cleanout",
    ],
    slug: "20-yard-dumpster",
  },
  {
    size: 30,
    name: "30-Yard Dumpster",
    dimensions: { length: 22, width: 8, height: 6 },
    capacity: {
      cubicYards: 30,
      truckLoads: 12,
      trashBags: "170-190",
    },
    weight: {
      included: 4,
      unit: "tons",
      overageRate: 85,
    },
    pricing: {
      base: 649,
      delivery: 0,
      rental: 7,
    },
    idealFor: [
      "Large renovation",
      "Roofing (large home)",
      "Commercial cleanout",
      "New construction",
    ],
    slug: "30-yard-dumpster",
  },
  {
    size: 40,
    name: "40-Yard Dumpster",
    dimensions: { length: 22, width: 8, height: 8 },
    capacity: {
      cubicYards: 40,
      truckLoads: 14,
      trashBags: "230-250",
    },
    weight: {
      included: 5,
      unit: "tons",
      overageRate: 85,
    },
    pricing: {
      base: 749,
      delivery: 0,
      rental: 7,
    },
    idealFor: [
      "Major construction",
      "Commercial demolition",
      "Industrial projects",
      "Large commercial cleanout",
    ],
    slug: "40-yard-dumpster",
  },
];
```

---

## 4. Start Development

```bash
# Run dev server
npm run dev

# Open browser
# http://localhost:3000
```

---

## 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo to Vercel dashboard
```

---

## File Checklist

### Must Create First

- [ ] `src/app/layout.tsx` — Root layout with header/footer
- [ ] `src/app/page.tsx` — Homepage
- [ ] `src/components/layout/header.tsx` — Navigation
- [ ] `src/components/layout/footer.tsx` — Footer
- [ ] `src/config/site.ts` — Site configuration
- [ ] `src/content/dumpster-sizes.ts` — Size data

### Add Incrementally

- [ ] About page
- [ ] Contact page with form
- [ ] Services pages
- [ ] Dumpster sizes page
- [ ] Quote wizard
- [ ] AI chat widget
- [ ] Service area map

---

## Key Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production

# Database (Supabase)
npx supabase init    # Initialize Supabase locally
npx supabase start   # Start local Supabase
npx supabase db push # Push schema changes
```

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Supabase](https://supabase.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

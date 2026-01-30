# Next.js UI Template

> **The definitive UI/UX template based on our best practices**  
> Consolidated from: eleven-emmons, westlake-village, local-software-business, partygirlevents

---

## 🎯 What This Template Provides

This template captures our established UI/UX patterns for building modern, high-performance websites:

- **Design System** — CSS custom properties for consistent tokens (colors, spacing, shadows, typography)
- **Animation System** — Centralized Framer Motion variants for scroll, fade, hover effects
- **Component Library** — Reusable UI components following our patterns
- **Section Templates** — Pre-built hero, features, testimonials, CTA sections
- **Accessibility** — Skip links, semantic HTML, focus management
- **Performance** — Optimized images, font loading, code splitting

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework (App Router, SSR/SSG) |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first CSS |
| **Framer Motion** | 12.x | Animations |
| **Lucide React** | Latest | Icon library |

---

## 📁 Project Structure

```
nextjs-ui-template/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage (assembles sections)
│   ├── globals.css         # CSS custom properties + base styles
│   └── [slug]/             # Dynamic route template
│       └── page.tsx
├── components/
│   ├── ui/                 # Atomic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   └── sections/           # Page section components
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   ├── cn.ts               # Tailwind class merger utility
│   └── types.ts            # Shared TypeScript interfaces
├── config/
│   ├── site.ts             # Site metadata and config
│   └── navigation.ts       # Navigation links
├── styles/
│   └── fonts.ts            # Font configurations
├── public/
│   └── images/             # Static images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Design System

### Color Tokens

```css
:root {
  /* Neutral */
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --text: #0f172a;
  --text-muted: #64748b;
  
  /* Brand */
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --accent: #7c3aed;
  
  /* Semantic */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### Spacing Scale (8px grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Tight gaps |
| `--spacing-sm` | 8px | Small gaps |
| `--spacing-md` | 16px | Default |
| `--spacing-lg` | 24px | Section internal |
| `--spacing-xl` | 32px | Section gaps |
| `--spacing-2xl` | 48px | Major sections |
| `--spacing-3xl` | 64px | Hero padding |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Buttons, inputs |
| `--radius-md` | 12px | Cards |
| `--radius-lg` | 16px | Modals |
| `--radius-xl` | 24px | Feature cards |
| `--radius-full` | 9999px | Pills, avatars |

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## ⚡ Animation System

### Scroll Animations (Framer Motion)

```tsx
// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```

### Stagger Children

```tsx
// Container with staggered children
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects

```tsx
// Scale + shadow on hover
<motion.div
  whileHover={{ scale: 1.02, boxShadow: "var(--shadow-lg)" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

---

## 🧩 Component Patterns

### Button Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card Styles

```tsx
// Standard card
<Card>Content</Card>

// Hoverable card (lifts on hover)
<Card hoverable>Content</Card>

// Card with image overlay (DesignSpells style)
<CardOverlay image="/image.jpg" title="Title" />
```

### Section Layout

```tsx
<Section id="features" className="bg-alt">
  <Container>
    <SectionHeader
      title="Features"
      subtitle="Everything you need"
    />
    <Grid cols={3}>
      {features.map(f => <FeatureCard key={f.id} {...f} />)}
    </Grid>
  </Container>
</Section>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Patterns

```tsx
// Grid columns: 1 on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Padding: smaller on mobile, larger on desktop
<div className="px-4 md:px-8 lg:px-12">

// Text size: responsive
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
```

---

## ♿ Accessibility Features

1. **Skip Link** — Keyboard users can skip to main content
2. **Semantic HTML** — Proper heading hierarchy, landmarks
3. **Focus States** — Visible focus rings on all interactive elements
4. **ARIA Labels** — Where semantic HTML isn't sufficient
5. **Color Contrast** — WCAG AA compliant color combinations
6. **Reduced Motion** — Respects `prefers-reduced-motion`

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

---

## 📋 Usage Checklist

When starting a new project from this template:

1. [ ] Update `config/site.ts` with project metadata
2. [ ] Replace brand colors in `globals.css`
3. [ ] Update `navigation.ts` with routes
4. [ ] Replace placeholder images in `/public/images`
5. [ ] Customize section content in `page.tsx`
6. [ ] Add project-specific components
7. [ ] Set up deployment (Vercel/Netlify)

---

## 🔗 Related Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [Lucide Icons](https://lucide.dev/icons)

---

*Template version 1.0 — Based on patterns from eleven-emmons, westlake-village, local-software-business*

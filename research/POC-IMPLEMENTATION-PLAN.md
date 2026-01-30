# EMPM Dumpsters - POC Website Implementation Plan

**Created:** January 30, 2026  
**Project:** Complete website rebuild for empmdumpsters.com  
**Goal:** Build a proof-of-concept that demonstrates best-in-class features and outperforms all NEPA/Colorado competitors

---

## Executive Summary

Based on the comprehensive competitive analysis, EMPM has significant advantages (20+ years, same-day service, estate clean-outs) that are completely hidden by a broken, content-thin website. This POC will demonstrate a modern, AI-forward website that:

1. **Fixes all critical issues** (broken nav, missing content, no SEO)
2. **Matches Trash Daddy** (online booking, instant quotes)
3. **Beats all competitors** (AI chatbot, visual tools, modern UX)
4. **Leverages EMPM's strengths** (experience, personal service, clean-outs)

---

## Technical Architecture

### Stack Selection

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND                                 │
├─────────────────────────────────────────────────────────────┤
│  Next.js 14 (App Router)                                    │
│  - Server Components for SEO                                │
│  - API Routes for backend logic                             │
│  - Static generation for speed                              │
│                                                             │
│  Tailwind CSS + shadcn/ui                                   │
│  - Rapid styling                                            │
│  - Accessible components                                    │
│  - Dark mode support                                        │
│                                                             │
│  Framer Motion                                              │
│  - Smooth animations                                        │
│  - Page transitions                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     BACKEND / SERVICES                       │
├─────────────────────────────────────────────────────────────┤
│  Vercel AI SDK                                              │
│  - Streaming chat responses                                 │
│  - Claude/GPT integration                                   │
│  - Tool calling for quotes                                  │
│                                                             │
│  Supabase                                                   │
│  - PostgreSQL database                                      │
│  - Auth (future customer portal)                            │
│  - Real-time subscriptions                                  │
│                                                             │
│  Resend                                                     │
│  - Transactional emails                                     │
│  - Quote confirmations                                      │
│                                                             │
│  Twilio (optional for POC)                                  │
│  - SMS notifications                                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     HOSTING / INFRA                          │
├─────────────────────────────────────────────────────────────┤
│  Vercel                                                     │
│  - Edge functions                                           │
│  - Automatic HTTPS                                          │
│  - Preview deployments                                      │
│  - Analytics                                                │
└─────────────────────────────────────────────────────────────┘
```

### Project Structure

```
empmdumpsters/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── about/page.tsx           # About page
│   │   ├── services/
│   │   │   ├── page.tsx             # Services overview
│   │   │   ├── dumpster-rental/page.tsx
│   │   │   ├── estate-cleanouts/page.tsx
│   │   │   └── junk-removal/page.tsx
│   │   ├── dumpster-sizes/page.tsx  # Size guide + pricing
│   │   ├── service-area/page.tsx    # Coverage map
│   │   ├── contact/page.tsx         # Contact form
│   │   └── faq/page.tsx             # FAQ accordion
│   │
│   ├── (locations)/                  # Local SEO pages
│   │   ├── [city]/page.tsx          # Dynamic city pages
│   │   └── layout.tsx
│   │
│   ├── quote/
│   │   ├── page.tsx                 # Quote wizard
│   │   └── confirmation/page.tsx
│   │
│   ├── api/
│   │   ├── chat/route.ts            # AI chatbot endpoint
│   │   ├── quote/route.ts           # Quote submission
│   │   ├── contact/route.ts         # Contact form
│   │   └── availability/route.ts    # Check availability
│   │
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
│
├── components/
│   ├── ui/                          # shadcn components
│   ├── chat/
│   │   ├── chat-widget.tsx          # Floating chat button
│   │   ├── chat-window.tsx          # Chat interface
│   │   └── chat-message.tsx         # Message bubbles
│   ├── quote/
│   │   ├── quote-wizard.tsx         # Multi-step form
│   │   ├── size-selector.tsx        # Visual size picker
│   │   ├── date-picker.tsx          # Availability calendar
│   │   └── price-display.tsx        # Dynamic pricing
│   ├── dumpsters/
│   │   ├── size-comparison.tsx      # Side-by-side comparison
│   │   ├── size-card.tsx            # Individual size card
│   │   └── capacity-visualizer.tsx  # Interactive fill demo
│   ├── layout/
│   │   ├── header.tsx               # Navigation
│   │   ├── footer.tsx               # Footer
│   │   ├── mobile-nav.tsx           # Mobile menu
│   │   └── cta-banner.tsx           # Sticky CTA
│   ├── sections/
│   │   ├── hero.tsx                 # Homepage hero
│   │   ├── services-grid.tsx        # Services overview
│   │   ├── testimonials.tsx         # Reviews carousel
│   │   ├── trust-badges.tsx         # Certifications, years
│   │   ├── process-steps.tsx        # How it works
│   │   └── service-area-map.tsx     # Interactive map
│   └── forms/
│       ├── contact-form.tsx         # Contact page form
│       └── quick-quote.tsx          # Inline quote form
│
├── lib/
│   ├── ai/
│   │   ├── chat-agent.ts            # AI agent logic
│   │   ├── prompts.ts               # System prompts
│   │   └── tools.ts                 # Function calling tools
│   ├── pricing/
│   │   ├── calculator.ts            # Price calculation logic
│   │   └── zones.ts                 # Service area pricing
│   ├── db/
│   │   ├── schema.ts                # Database schema
│   │   └── queries.ts               # DB queries
│   └── utils/
│       ├── validation.ts            # Form validation
│       └── formatting.ts            # Display formatters
│
├── content/
│   ├── dumpster-sizes.json          # Size specifications
│   ├── service-areas.json           # Cities + pricing zones
│   ├── faqs.json                    # FAQ content
│   └── testimonials.json            # Customer reviews
│
├── public/
│   ├── images/
│   │   ├── dumpsters/               # Size photos
│   │   ├── team/                    # Team photos
│   │   └── projects/                # Work examples
│   └── icons/
│
└── config/
    ├── site.ts                      # Site metadata
    └── navigation.ts                # Nav structure
```

---

## Feature Specifications

### 1. AI Quote Assistant (Chatbot)

#### Overview
A conversational AI that helps visitors get instant quotes and size recommendations without filling out forms.

#### User Flow
```
User clicks chat bubble → Chat window opens
│
├── AI: "Hey! I'm here to help you find the right dumpster. 
│        What are you working on today?"
│
├── User: "Cleaning out my parents' house, 3 bedrooms"
│
├── AI: [Analyzes project, calls recommendation tool]
│       "For a full 3-bedroom estate cleanout, I'd recommend 
│        a 20-yard dumpster. That's $549 delivered to your area,
│        includes 3 tons of weight and 7-day rental.
│        
│        [Book Now] [Different Size] [Talk to a Human]"
│
├── User clicks "Book Now"
│
└── AI: "Great! Let me get a few details..."
        [Collects address, date, contact → submits quote]
```

#### Technical Implementation

```typescript
// lib/ai/chat-agent.ts
import { anthropic } from '@ai-sdk/anthropic';
import { generateText, tool } from 'ai';
import { z } from 'zod';

const systemPrompt = `You are the EMPM Dumpsters quote assistant. You help customers:
1. Understand what size dumpster they need
2. Get instant price quotes
3. Book their rental

Company info:
- EMPM Dumpster, LLC - 20+ years in business (since 2004)
- Services: Dumpster rentals, estate clean-outs, junk removal
- Same-day delivery available in most cases
- No hidden fees, straightforward pricing
- Phone: (570) 905-5595

Dumpster Sizes:
- 10-yard: $399, 2 tons included, ideal for small cleanouts
- 15-yard: $449, 2.5 tons included, garage/basement cleanouts
- 20-yard: $549, 3 tons included, full home cleanouts, renovation
- 30-yard: $649, 4 tons included, large renovation, roofing
- 40-yard: $749, 5 tons included, commercial, major construction

Be friendly, helpful, and conversational. Use emojis sparingly.
If asked about estate clean-outs (we do the work for them), explain that 
we offer full-service clean-out where our team handles everything.`;

const tools = {
  getQuote: tool({
    description: 'Get a price quote for a dumpster rental',
    parameters: z.object({
      size: z.enum(['10', '15', '20', '30', '40']),
      zipCode: z.string(),
      projectType: z.string(),
    }),
    execute: async ({ size, zipCode, projectType }) => {
      // Calculate price based on zone
      const pricing = getPricing(size, zipCode);
      return {
        size: `${size}-yard`,
        price: pricing.price,
        included: pricing.includedWeight,
        overage: pricing.overageRate,
        rental: '7 days',
        delivery: 'Included',
      };
    },
  }),
  
  recommendSize: tool({
    description: 'Recommend dumpster size based on project',
    parameters: z.object({
      projectType: z.string(),
      details: z.string(),
    }),
    execute: async ({ projectType, details }) => {
      // AI-powered recommendation logic
      return recommendDumpsterSize(projectType, details);
    },
  }),
  
  checkAvailability: tool({
    description: 'Check dumpster availability for a date',
    parameters: z.object({
      date: z.string(),
      size: z.string(),
      zipCode: z.string(),
    }),
    execute: async ({ date, size, zipCode }) => {
      // Check availability in system
      return checkDateAvailability(date, size, zipCode);
    },
  }),
  
  submitQuoteRequest: tool({
    description: 'Submit a quote request',
    parameters: z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      size: z.string(),
      deliveryDate: z.string(),
      projectType: z.string(),
      notes: z.string().optional(),
    }),
    execute: async (data) => {
      // Save to database, send email notifications
      return submitQuote(data);
    },
  }),
};
```

#### Chat UI Component

```tsx
// components/chat/chat-widget.tsx
'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white 
                   rounded-full p-4 shadow-lg hover:bg-orange-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-green-500 text-xs 
                         rounded-full px-2 py-0.5">
          Online
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] 
                       bg-white rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 rounded-t-2xl 
                           flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full 
                               flex items-center justify-center">
                  🚛
                </div>
                <div>
                  <p className="font-semibold">EMPM Quote Assistant</p>
                  <p className="text-xs text-slate-400">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                  <p>Hey! 👋 I'm here to help you find the perfect dumpster.</p>
                  <p className="mt-2">What are you working on today?</p>
                </div>
              )}
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isLoading && <TypingIndicator />}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Describe your project..."
                  className="flex-1 px-4 py-2 border rounded-full 
                            focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-2 rounded-full 
                            hover:bg-orange-600"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### 2. Interactive Size Selector

Visual, interactive component that helps users understand and choose the right size.

```tsx
// components/dumpsters/size-comparison.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Truck, Package, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const SIZES = [
  {
    size: 10,
    dimensions: "12' × 8' × 4'",
    capacity: '4 pickup truck loads',
    trashBags: '50-70 bags',
    weight: '2 tons included',
    price: 399,
    idealFor: ['Small basement cleanout', 'Garage declutter', 'Minor renovation'],
    color: 'bg-emerald-500',
  },
  {
    size: 15,
    dimensions: "16' × 8' × 4'",
    capacity: '6 pickup truck loads',
    trashBags: '80-100 bags',
    weight: '2.5 tons included',
    price: 449,
    idealFor: ['Medium cleanout', 'Bathroom remodel', 'Deck removal'],
    color: 'bg-blue-500',
  },
  {
    size: 20,
    dimensions: "22' × 8' × 4.5'",
    capacity: '8 pickup truck loads',
    trashBags: '110-130 bags',
    weight: '3 tons included',
    price: 549,
    popular: true,
    idealFor: ['Full home cleanout', 'Kitchen remodel', 'Roofing (small home)'],
    color: 'bg-orange-500',
  },
  {
    size: 30,
    dimensions: "22' × 8' × 6'",
    capacity: '12 pickup truck loads',
    trashBags: '170-190 bags',
    weight: '4 tons included',
    price: 649,
    idealFor: ['Large renovation', 'Roofing (large home)', 'Commercial cleanout'],
    color: 'bg-purple-500',
  },
  {
    size: 40,
    dimensions: "22' × 8' × 8'",
    capacity: '14+ pickup truck loads',
    trashBags: '230-250 bags',
    weight: '5 tons included',
    price: 749,
    idealFor: ['Major construction', 'Commercial demolition', 'Industrial'],
    color: 'bg-red-500',
  },
];

export function SizeComparison() {
  const [selected, setSelected] = useState(SIZES[2]); // Default to 20-yard

  return (
    <div className="max-w-6xl mx-auto">
      {/* Size Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {SIZES.map((size) => (
          <button
            key={size.size}
            onClick={() => setSelected(size)}
            className={cn(
              "relative px-6 py-3 rounded-lg font-bold transition-all",
              selected.size === size.size
                ? `${size.color} text-white shadow-lg`
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {size.size}-Yard
            {size.popular && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 
                              text-yellow-900 text-xs px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Selected Size Display */}
      <motion.div
        key={selected.size}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Visual */}
        <div className="relative">
          <DumpsterVisual size={selected.size} color={selected.color} />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur 
                         rounded-lg px-4 py-2 shadow-lg">
            <p className="text-2xl font-bold">{selected.dimensions}</p>
            <p className="text-slate-500">External dimensions</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <p className="text-5xl font-bold text-slate-900">
              ${selected.price}
            </p>
            <p className="text-slate-500">
              Includes delivery, pickup, {selected.weight}, and 7-day rental
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-100 rounded-lg p-4 text-center">
              <Truck className="w-6 h-6 mx-auto mb-2 text-slate-600" />
              <p className="font-semibold">{selected.capacity}</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-4 text-center">
              <Package className="w-6 h-6 mx-auto mb-2 text-slate-600" />
              <p className="font-semibold">{selected.trashBags}</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-4 text-center">
              <Scale className="w-6 h-6 mx-auto mb-2 text-slate-600" />
              <p className="font-semibold">{selected.weight}</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Ideal for:</p>
            <ul className="space-y-2">
              {selected.idealFor.map((use) => (
                <li key={use} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  {use}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <a
              href={`/quote?size=${selected.size}`}
              className="flex-1 bg-orange-500 text-white text-center py-4 
                        rounded-lg font-semibold hover:bg-orange-600"
            >
              Get This Size
            </a>
            <button className="px-6 py-4 border-2 border-slate-200 rounded-lg 
                              font-semibold hover:border-slate-300">
              Not Sure? Ask AI
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
```

---

### 3. Quote Wizard

Multi-step form that guides users through the booking process.

```tsx
// components/quote/quote-wizard.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const steps = [
  { id: 'project', title: 'Your Project' },
  { id: 'size', title: 'Dumpster Size' },
  { id: 'schedule', title: 'Schedule' },
  { id: 'contact', title: 'Contact Info' },
];

const schema = z.object({
  // Step 1: Project
  projectType: z.enum([
    'home_cleanout',
    'renovation',
    'roofing',
    'construction',
    'estate_cleanout',
    'junk_removal',
    'other',
  ]),
  projectDetails: z.string().optional(),
  
  // Step 2: Size
  size: z.enum(['10', '15', '20', '30', '40']),
  
  // Step 3: Schedule
  deliveryDate: z.string(),
  pickupDate: z.string().optional(),
  
  // Step 4: Contact
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(5),
  city: z.string(),
  zip: z.string().min(5),
  notes: z.string().optional(),
});

export function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: '',
      size: '20',
      deliveryDate: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      // Handle success - redirect to confirmation
      window.location.href = '/quote/confirmation';
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={cn(
                "flex items-center gap-2",
                i <= currentStep ? "text-orange-500" : "text-slate-400"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                  i <= currentStep
                    ? "bg-orange-500 text-white"
                    : "bg-slate-200"
                )}
              >
                {i + 1}
              </div>
              <span className="hidden sm:inline">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <StepProject form={form} onNext={nextStep} />
          )}
          {currentStep === 1 && (
            <StepSize form={form} onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 2 && (
            <StepSchedule form={form} onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 3 && (
            <StepContact 
              form={form} 
              onBack={prevStep} 
              isSubmitting={isSubmitting} 
            />
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
```

---

### 4. Homepage Layout

```tsx
// app/(marketing)/page.tsx
import { Hero } from '@/components/sections/hero';
import { ServicesGrid } from '@/components/sections/services-grid';
import { SizeComparison } from '@/components/dumpsters/size-comparison';
import { ProcessSteps } from '@/components/sections/process-steps';
import { Testimonials } from '@/components/sections/testimonials';
import { TrustBadges } from '@/components/sections/trust-badges';
import { ServiceAreaMap } from '@/components/sections/service-area-map';
import { FAQ } from '@/components/sections/faq';
import { CTABanner } from '@/components/sections/cta-banner';

export default function HomePage() {
  return (
    <>
      {/* Hero with AI Chat + Quick Quote */}
      <Hero />

      {/* Trust Badges: 20+ years, Same Day, No Hidden Fees */}
      <TrustBadges />

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>
          <ServicesGrid />
        </div>
      </section>

      {/* Dumpster Size Selector */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Find Your Perfect Dumpster
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From small cleanouts to major construction, we have the right size.
            Not sure? Our AI assistant can help you choose.
          </p>
          <SizeComparison />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            We Serve Your Area
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Proudly serving the Vail Valley, Eagle County, and surrounding areas
          </p>
          <ServiceAreaMap />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
```

---

## Database Schema

```sql
-- Supabase / PostgreSQL Schema

-- Customers
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  city TEXT,
  zip TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quotes
CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  
  -- Project details
  project_type TEXT NOT NULL,
  project_details TEXT,
  
  -- Dumpster
  size INTEGER NOT NULL,
  
  -- Schedule
  delivery_date DATE NOT NULL,
  pickup_date DATE,
  
  -- Pricing
  base_price DECIMAL(10,2) NOT NULL,
  delivery_fee DECIMAL(10,2) DEFAULT 0,
  total_price DECIMAL(10,2) NOT NULL,
  
  -- Status
  status TEXT DEFAULT 'pending', -- pending, confirmed, delivered, completed, cancelled
  
  -- Metadata
  source TEXT DEFAULT 'website', -- website, chat, phone
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat conversations
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  messages JSONB DEFAULT '[]',
  converted_to_quote UUID REFERENCES quotes(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Service areas / pricing zones
CREATE TABLE service_zones (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  zip_codes TEXT[] NOT NULL,
  price_modifier DECIMAL(3,2) DEFAULT 1.00, -- e.g., 1.10 for 10% more
  delivery_fee DECIMAL(10,2) DEFAULT 0,
  same_day_available BOOLEAN DEFAULT true
);
```

---

## Content Requirements

### Must-Have Content (Before Launch)

| Content | Source | Status |
|---------|--------|--------|
| Dumpster sizes + specs | Client | ⬜ Needed |
| Pricing structure | Client | ⬜ Needed |
| Service area (cities/zips) | Client | ⬜ Needed |
| Company story / about | Existing site + client | ⬜ Needed |
| Team photos | Client | ⬜ Needed |
| Dumpster photos | Client | ⬜ Needed |
| Work examples / project photos | Client | ⬜ Needed |
| Customer testimonials | Client / reviews | ⬜ Needed |
| FAQs | Can draft, client review | ⬜ Needed |
| Contact info / hours | Client | ⬜ Needed |

### Content to Create

| Content | Notes |
|---------|-------|
| Homepage copy | Emphasize 20+ years, same-day, personal service |
| Service descriptions | Dumpster rental, estate cleanouts, junk removal |
| Size guide copy | Explain each size with use cases |
| Local SEO pages | One page per city in service area |
| Meta descriptions | Every page needs unique meta |
| Blog posts (future) | SEO content for ongoing traffic |

---

## Implementation Timeline

### Phase 1: Foundation (Week 1)

**Day 1-2: Setup**
- [ ] Initialize Next.js project
- [ ] Configure Tailwind + shadcn/ui
- [ ] Set up Supabase project
- [ ] Configure Vercel deployment
- [ ] Create project structure

**Day 3-4: Core Pages**
- [ ] Layout (header, footer, navigation)
- [ ] Homepage structure
- [ ] About page
- [ ] Contact page
- [ ] Basic responsive design

**Day 5: Forms**
- [ ] Contact form (with Resend)
- [ ] Basic quote request form
- [ ] Form validation
- [ ] Email notifications

### Phase 2: Key Features (Week 2)

**Day 6-7: Dumpster Content**
- [ ] Size comparison component
- [ ] Size detail pages
- [ ] Pricing display
- [ ] Visual size selector

**Day 8-9: Quote System**
- [ ] Multi-step quote wizard
- [ ] Date picker component
- [ ] Price calculation logic
- [ ] Quote storage in Supabase
- [ ] Confirmation page + email

**Day 10: Service Area**
- [ ] Interactive service area map
- [ ] ZIP code lookup
- [ ] Location-specific pages (top 5 cities)

### Phase 3: AI Integration (Week 3)

**Day 11-12: Chat Backend**
- [ ] Vercel AI SDK setup
- [ ] Claude/GPT integration
- [ ] System prompts
- [ ] Tool definitions (quote, recommend, availability)

**Day 13-14: Chat Frontend**
- [ ] Chat widget component
- [ ] Message UI
- [ ] Streaming responses
- [ ] Mobile optimization

**Day 15: Testing & Polish**
- [ ] End-to-end testing
- [ ] Mobile testing
- [ ] Performance optimization
- [ ] Bug fixes

### Phase 4: Launch Prep (Week 4)

**Day 16-17: SEO**
- [ ] Meta tags all pages
- [ ] Open Graph images
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] Schema.org markup (LocalBusiness)

**Day 18-19: Analytics & Tracking**
- [ ] Google Analytics 4
- [ ] Conversion tracking
- [ ] Chat analytics
- [ ] Form submission tracking

**Day 20: Launch**
- [ ] Final review
- [ ] DNS migration
- [ ] SSL verification
- [ ] Redirect setup (old URLs)
- [ ] Google Search Console
- [ ] Monitor for issues

---

## Success Metrics

### POC Success Criteria

| Metric | Target |
|--------|--------|
| Page Speed (Mobile) | > 90 Lighthouse |
| Page Speed (Desktop) | > 95 Lighthouse |
| Time to First Quote | < 2 minutes |
| Chat Response Time | < 3 seconds |
| Mobile Usability | 100% Google score |
| All Pages Working | 0 broken links |

### Post-Launch KPIs

| Metric | Current | Target (30 days) |
|--------|---------|------------------|
| Google Pages Indexed | 1 | 10+ |
| Organic Traffic | ~0 | 100+ visits |
| Quote Requests | Unknown | 20+/month |
| Chat Conversations | N/A | 50+/month |
| Chat → Quote Conversion | N/A | 30%+ |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Missing content from client | Start with placeholder content, iterate |
| AI costs too high | Set rate limits, fallback to forms |
| Supabase free tier limits | Monitor usage, upgrade if needed |
| SEO takes time | Launch Google Ads for immediate traffic |
| Client changes scope | Document POC scope clearly |

---

## Budget Estimate

### Development (POC)

| Item | Hours | Rate | Total |
|------|-------|------|-------|
| Setup & Architecture | 8 | $150 | $1,200 |
| Core Pages | 16 | $150 | $2,400 |
| Quote System | 16 | $150 | $2,400 |
| AI Chat Integration | 20 | $150 | $3,000 |
| Testing & Polish | 8 | $150 | $1,200 |
| **Total Development** | **68** | | **$10,200** |

### Ongoing Costs (Monthly)

| Service | Cost |
|---------|------|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| Anthropic/OpenAI API | $50-100 |
| Resend | $0 (free tier) |
| Domain | ~$15/year |
| **Total Monthly** | **~$100-150** |

---

## Next Steps

1. **Client Meeting:** Present this plan, get buy-in
2. **Content Gathering:** Send content request list
3. **Design Review:** Create wireframes/mockups for approval
4. **Development Start:** Begin Phase 1 after approval
5. **Weekly Demos:** Show progress, get feedback

---

## Appendix: Quick Commands

```bash
# Create project
npx create-next-app@latest empmdumpsters --typescript --tailwind --eslint --app

# Add dependencies
npm install @ai-sdk/anthropic ai @supabase/supabase-js framer-motion
npm install @radix-ui/react-accordion @radix-ui/react-dialog
npm install react-hook-form @hookform/resolvers zod
npm install resend lucide-react clsx tailwind-merge

# shadcn/ui setup
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea select
npx shadcn-ui@latest add accordion dialog sheet tabs

# Environment variables needed
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
RESEND_API_KEY=
```

---

*Plan created for EMPM Dumpsters website rebuild. Ready to begin implementation upon approval.*

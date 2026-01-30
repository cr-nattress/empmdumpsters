'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Check,
  X,
  Phone,
  HelpCircle,
  Sofa,
  Wrench,
  TreePine,
  Home,
  Package,
  Trash2,
  AlertTriangle,
  Zap,
  Droplets,
  Car,
  Pill,
  Flame
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const acceptedItems = [
  {
    category: 'Household Items',
    icon: Sofa,
    items: [
      'Furniture (couches, chairs, tables, beds)',
      'Mattresses and box springs',
      'Carpeting and rugs',
      'Clothing and textiles',
      'Books, papers, and cardboard',
      'Small appliances (toasters, microwaves)',
    ],
  },
  {
    category: 'Construction Debris',
    icon: Wrench,
    items: [
      'Drywall and plaster',
      'Wood and lumber',
      'Roofing shingles',
      'Siding and trim',
      'Concrete and brick (check weight limits)',
      'Tile and flooring',
    ],
  },
  {
    category: 'Yard Waste',
    icon: TreePine,
    items: [
      'Branches and brush',
      'Leaves and grass clippings',
      'Shrubs and small trees',
      'Dirt and soil (check weight limits)',
      'Fencing materials',
      'Old decking',
    ],
  },
  {
    category: 'General Junk',
    icon: Package,
    items: [
      'Old toys and sporting equipment',
      'Garage clutter',
      'Basement junk',
      'Broken furniture',
      'Non-hazardous household items',
      'Moving boxes and packing materials',
    ],
  },
]

const prohibitedItems = [
  {
    category: 'Hazardous Materials',
    icon: Flame,
    color: 'red',
    items: [
      'Paint and paint thinners',
      'Motor oil and automotive fluids',
      'Pesticides and herbicides',
      'Cleaning chemicals',
      'Propane tanks',
      'Gasoline and fuel',
    ],
  },
  {
    category: 'Electronics',
    icon: Zap,
    color: 'yellow',
    items: [
      'TVs and computer monitors',
      'Computers and laptops',
      'Printers and copiers',
      'Cell phones and tablets',
      'Stereo equipment',
      'Video game consoles',
    ],
  },
  {
    category: 'Appliances with Freon',
    icon: Droplets,
    color: 'blue',
    items: [
      'Refrigerators',
      'Freezers',
      'Air conditioning units',
      'Dehumidifiers',
      '(These require special disposal)',
    ],
  },
  {
    category: 'Other Prohibited Items',
    icon: AlertTriangle,
    color: 'orange',
    items: [
      'Tires (call for special pricing)',
      'Batteries (car and household)',
      'Medical waste',
      'Asbestos materials',
      'Railroad ties',
      'Wet paint cans',
    ],
  },
]

export default function WhatGoesInPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
              Dumpster Guidelines
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              What Can Go In Your Dumpster?
            </h1>
            <p className="text-xl text-slate-300">
              Most household and construction debris is accepted. Here's a complete guide
              to help you know what you can toss and what requires special handling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="section">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Accepted Items</h2>
              <p className="text-slate-500">These items are welcome in your dumpster</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {acceptedItems.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Prohibited Items</h2>
              <p className="text-slate-500">These items cannot go in your dumpster</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prohibitedItems.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-red-100 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why prohibited */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Why are these items prohibited?</h4>
                <p className="text-slate-600 text-sm">
                  Prohibited items are restricted due to environmental regulations, safety concerns,
                  or landfill requirements. Many of these items require special disposal methods.
                  If you have questions about a specific item, please call us — we're happy to help
                  you find the right disposal solution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weight Limits */}
      <section className="section">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Weight Limits to Know
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400 mb-2">2 tons</p>
                <p className="text-slate-300">12-Yard Dumpster</p>
                <p className="text-sm text-slate-400 mt-2">Perfect for most household cleanouts</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400 mb-2">3 tons</p>
                <p className="text-slate-300">20-Yard Dumpster</p>
                <p className="text-sm text-slate-400 mt-2">Ideal for larger projects</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-center text-slate-300">
                <strong className="text-white">Heavy materials?</strong> Concrete, brick, dirt, and roofing
                shingles are heavy. If your project includes these materials, give us a call so we can
                recommend the right size and discuss weight limits.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not Sure? CTA */}
      <section className="section bg-slate-50">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <HelpCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Not Sure About an Item?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Don't worry — just give us a call! We're happy to answer any questions
              about what can go in your dumpster. No question is too small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn btn-primary btn-lg"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phone}
              </a>
              <Link href="/quote" className="btn btn-outline btn-lg">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  )
}

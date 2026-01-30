'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trash2, Check, ArrowRight, Phone, Zap, Leaf, DollarSign } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const features = [
  {
    icon: Zap,
    title: 'Fast Service',
    desc: 'Same-day junk removal available. Point at what you want gone and we take care of it.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    desc: 'We give you a price before we start. No surprises, no hidden fees.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'We recycle and donate whenever possible. Responsible disposal is our priority.',
  },
]

const items = [
  'Furniture (sofas, beds, tables, chairs)',
  'Appliances (refrigerators, washers, dryers)',
  'Electronics and e-waste',
  'Yard waste and landscaping debris',
  'Exercise equipment',
  'Hot tubs and spas',
  'Construction debris',
  'General household junk',
]

export default function JunkRemovalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Junk Removal Service
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Just point at what you want gone. We'll do all the heavy lifting, 
                loading, and hauling. It's that easy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn btn-primary btn-lg">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-500/20 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4 text-left">
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <p className="text-slate-300">Schedule your pickup</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <p className="text-slate-300">Point at what goes</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <p className="text-slate-300">We haul it away!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we take */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What We Take
              </h2>
              <p className="text-slate-600">
                We remove almost anything. Here are some common items we haul away.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-8">
              Don't see your item? <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-emerald-600 font-semibold">Give us a call</a> - we probably take it!
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Check, ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const features = [
  '12-yard and 20-yard dumpsters available',
  'Same-day delivery available',
  'Standard 7-day rental (extensions available)',
  'Transparent all-inclusive pricing',
  'Professional placement at your location',
  'Prompt pickup when you\'re done',
]

const process = [
  { step: '1', title: 'Get a Quote', desc: 'Call us or fill out our form. We\'ll recommend the perfect size for your project.' },
  { step: '2', title: 'Schedule Delivery', desc: 'Pick your date and we\'ll have the dumpster there when you need it.' },
  { step: '3', title: 'Fill It Up', desc: 'Take your time loading. Standard rental is 7 days with extensions available.' },
  { step: '4', title: 'We Haul It Away', desc: 'Call when you\'re done and we\'ll pick it up promptly.' },
]

export default function DumpsterRentalsPage() {
  const sizes = siteConfig.dumpsterSizes

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
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dumpster Rentals
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                12-yard and 20-yard roll-off dumpsters for residential and commercial projects.
                Same-day delivery, transparent pricing, and no hidden fees.
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
              className="bg-orange-500/20 rounded-2xl p-8 text-center"
            >
              <p className="text-orange-300 text-sm font-medium mb-2">Get Your Price</p>
              <p className="text-4xl font-bold mb-2">Call for Quote</p>
              <p className="text-slate-300">Includes delivery, pickup & 7-day rental</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Size
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer 12-yard and 20-yard dumpsters to fit any project. Not sure which one you need?
              Give us a call and we'll help you pick the right one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizes.map((size, i) => (
              <motion.div
                key={size.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 border-2 ${
                  size.popular ? 'border-orange-500 shadow-lg' : 'border-slate-200'
                }`}
              >
                {size.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{size.size}-Yard</h3>
                  <p className="text-slate-500">{size.dimensions}</p>
                </div>
                <p className="text-3xl font-bold text-center text-orange-600 mb-4">
                  {size.price ? `$${size.price}` : 'Call for Quote'}
                </p>
                <div className="text-sm text-slate-500 text-center mb-4">
                  <p>7-day rental included</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {size.idealFor.slice(0, 3).map((use) => (
                    <li key={use} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {use}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/quote?size=${size.size}`}
                  className={`btn w-full ${size.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get This Size
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Renting a dumpster is easy. Just follow these simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Check, ArrowRight, Phone, Heart, Shield, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const features = [
  {
    icon: Heart,
    title: 'Compassionate Service',
    desc: 'We understand this is often a difficult time. Our team handles every item with care and respect.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    desc: 'Complete liability coverage for your peace of mind. We protect your property throughout the process.',
  },
  {
    icon: Clock,
    title: 'Efficient Process',
    desc: 'We work quickly but thoroughly. Most cleanouts are completed in 1-2 days depending on size.',
  },
]

const includes = [
  'Complete home or estate cleanout',
  'Sorting of items for donation, sale, or disposal',
  'Coordination with donation centers',
  'Removal of all unwanted items',
  'Light cleaning after removal',
  'Dumpster rental included in pricing',
]

export default function EstateCleanoutsPage() {
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
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Estate Clean-Out Services
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Full-service estate and home cleanouts. We handle everything with care and 
                respect, so you don't have to. Let us take the burden off your shoulders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn btn-primary btn-lg">
                  Get a Free Estimate
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
              className="bg-blue-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Our Difference</h3>
              <p className="text-slate-300 mb-4">
                Unlike most dumpster companies, we offer complete cleanout services. 
                You don't lift a finger - we do all the work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  We sort through everything
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  Donate items in good condition
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-blue-400" />
                  Responsibly dispose of the rest
                </li>
              </ul>
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
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What's Included
              </h2>
              <p className="text-slate-600 mb-8">
                Our estate cleanout service is comprehensive. We handle everything from 
                start to finish so you can focus on what matters most.
              </p>
              <ul className="space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-500 bg-opacity-10 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Get a Free Estimate
              </h3>
              <p className="text-slate-600 mb-6">
                Every estate is different. Contact us for a free, no-obligation estimate 
                based on your specific situation.
              </p>
              <Link href="/contact" className="btn btn-primary w-full">
                Request Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-sm text-slate-500 mt-4">
                Or call us: <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-blue-600 font-semibold">{siteConfig.contact.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

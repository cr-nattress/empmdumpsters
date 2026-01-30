'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, Home, Trash2, ArrowRight, Check, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const services = [
  {
    icon: Truck,
    title: 'Dumpster Rentals',
    description: 'Roll-off dumpsters for both residential and commercial jobs—perfect for everything from home cleanouts to construction sites.',
    href: '/services/dumpster-rentals',
    color: 'bg-orange-500',
    features: [
      '12-yard and 20-yard dumpsters available',
      'Same-day delivery in most areas',
      'Flexible rental periods',
      'Clear, upfront pricing with no hidden fees',
    ],
  },
  {
    icon: Home,
    title: 'Estate Clean-Outs',
    description: "Full-service estate and home cleanouts. We handle everything so you don't have to.",
    href: '/services/estate-cleanouts',
    color: 'bg-blue-500',
    features: [
      'Complete cleanout service',
      'Sorting and donation coordination',
      'Sensitive and respectful handling',
      'Licensed and insured crew',
    ],
  },
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: 'Point at what you want gone and we take care of the rest. Fast, easy, affordable.',
    href: '/services/junk-removal',
    color: 'bg-emerald-500',
    features: [
      'Same-day service available',
      'We do all the heavy lifting',
      'Eco-friendly disposal',
      'Upfront pricing, no surprises',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Waste Removal Solutions for Every Need
            </h1>
            <p className="text-xl text-slate-300">
              Need a dumpster? EMPM makes it fast, flexible, and affordable. 
              With clear, upfront pricing and no hidden fees, you'll know exactly what to expect. 
              {siteConfig.yearsInBusiness}+ years of reliable service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={service.href} className="btn btn-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a 
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="btn btn-outline"
                    >
                      <Phone className="w-4 h-4" />
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className={`${service.color} bg-opacity-10 rounded-2xl p-8 aspect-video flex items-center justify-center ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <service.icon className={`w-32 h-32 ${service.color.replace('bg-', 'text-')} opacity-50`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

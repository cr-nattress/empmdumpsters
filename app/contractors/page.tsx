'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Truck,
  Clock,
  Phone,
  DollarSign,
  Users,
  Calendar,
  ArrowRight,
  Check,
  Wrench,
  Building,
  HardHat,
  Shield,
  Star,
  RefreshCw
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const benefits = [
  {
    icon: Clock,
    title: 'Priority Scheduling',
    description: 'Your jobs come first. We prioritize contractor deliveries to keep your projects on track.',
  },
  {
    icon: DollarSign,
    title: 'Volume Pricing',
    description: 'The more you rent, the more you save. Ask about our contractor pricing tiers.',
  },
  {
    icon: Phone,
    title: 'Dedicated Support',
    description: 'Get a direct line to our team. No call centers, no waiting — just real people who know your jobs.',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Swaps',
    description: 'Need to swap out a full dumpster? We make it easy with same-day exchanges when possible.',
  },
  {
    icon: Calendar,
    title: 'Monthly Billing',
    description: 'Simplify your accounting with consolidated monthly invoices. No chasing receipts.',
  },
  {
    icon: Shield,
    title: 'Reliable Service',
    description: 'We show up when we say we will. Your schedule depends on it, and we take that seriously.',
  },
]

const idealFor = [
  { icon: Wrench, label: 'General Contractors' },
  { icon: Building, label: 'Remodelers' },
  { icon: HardHat, label: 'Roofing Companies' },
  { icon: Truck, label: 'Demolition Crews' },
]

const testimonial = {
  quote: "EMPM has been our go-to dumpster company for years. They're reliable, fairly priced, and actually answer the phone when I call. That's all I ask for.",
  author: "Local Contractor",
  company: "NEPA Area",
}

export default function ContractorsPage() {
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
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <HardHat className="w-4 h-4" />
                For Contractors & Builders
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contractor Partnership Program
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                We know contractors need more than just a dumpster — you need a reliable partner
                who shows up on time, every time. That's what we deliver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="btn btn-primary btn-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call to Set Up Account
                </a>
                <Link
                  href="/quote"
                  className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Get Project Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">{siteConfig.yearsInBusiness}+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Same-day delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">No hidden fees</span>
                </div>
              </div>
            </motion.div>

            {/* Ideal for */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Ideal For</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {idealFor.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-slate-400 text-sm mb-4">Our contractors typically need:</p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/5 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-orange-400">12-Yard</p>
                    <p className="text-xs text-slate-400">Small jobs, remodels</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-orange-400">20-Yard</p>
                    <p className="text-xs text-slate-400">Large jobs, roofing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Why Contractors Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              We've worked with contractors for {siteConfig.yearsInBusiness}+ years.
              We understand what you need — and what you don't have time for.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-slate-50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-bold text-slate-900">{testimonial.author}</p>
              <p className="text-slate-500">{testimonial.company}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Promise */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              >
                Our Promise to Contractors
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">On-Time, Every Time</h4>
                    <p className="text-slate-600">We know a late delivery means your crew is standing around. We won't let that happen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clear Weight Policies</h4>
                    <p className="text-slate-600">We'll tell you the weight limit upfront. No surprises on your invoice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Predictable Pricing</h4>
                    <p className="text-slate-600">Build our prices into your bids with confidence. The quote is the quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">We Answer the Phone</h4>
                    <p className="text-slate-600">Real people who can solve problems fast. No automated systems or runaround.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-orange-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Set Up Your Contractor Account</h3>
              <p className="text-orange-100 mb-6">
                Ready to simplify your dumpster rentals? Give us a call and we'll set you up with:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Volume pricing based on your needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Priority scheduling for your jobs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Consolidated monthly invoicing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Direct line to our team</span>
                </li>
              </ul>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.contact.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

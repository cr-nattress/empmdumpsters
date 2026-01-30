'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Clock, Award, Heart, Truck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'When we say we\'ll be there, we\'ll be there. Our reputation is built on showing up and delivering what we promise.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'We\'re not a faceless corporation. When you call, you talk to real people who know your name and care about your project.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We live and work in this community. Our success is tied to your success, and we treat every customer like a neighbor.',
  },
  {
    icon: Award,
    title: 'Honest Pricing',
    description: 'No surprises, no hidden fees. The price we quote is the price you pay. It\'s just how we do business.',
  },
]

const stats = [
  { value: `${siteConfig.yearsInBusiness}+`, label: 'Years in Business' },
  { value: '1000+', label: 'Satisfied Customers' },
  { value: '2', label: 'Dumpster Sizes' },
  { value: '100%', label: 'Satisfaction Goal' },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              {siteConfig.yearsInBusiness}+ Years of Reliable Service
            </h1>
            <p className="text-xl text-slate-300">
              Since 2004, EMPM LLC has built a reputation for reliable service, affordable pricing, 
              and a personal touch. Whether you're a large commercial operation or a residential customer, 
              you'll get the same one-on-one attention and commitment to detail that we're known for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We offer same-day rentals in most cases and deliver with friendly, fast service & 
                  no surprises, no fine print, just straightforward pricing you can count on.
                </p>
                <p>
                  With over two decades of experience, EMPM continues to be the trusted choice for 
                  customers who want things done right, and done quickly. We've grown from a small 
                  local operation to a trusted name in dumpster rentals and waste removal. But we've 
                  never forgotten our roots.
                </p>
                <p>
                  Our mission is to redefine dumpster rental services, offering unrivaled customer care, 
                  competitive pricing, and swift, reliable delivery. Experience the difference with our 
                  commitment to making your projects cleaner and more efficient.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">EMPM Dumpster, LLC</h3>
                  <p className="text-slate-500">Est. 2004</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">Same-day delivery available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">Fully licensed and insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-slate-700">Family-owned and operated</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600">
              Our values aren't just words on a page. They guide how we operate every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 bg-white rounded-xl border border-slate-100"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
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

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Truck, Package, ThumbsUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Get Your Quote',
    description: 'Call us or fill out our quick form. Tell us about your project and we\'ll recommend the perfect size.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'We Deliver',
    description: 'We\'ll drop off your dumpster right where you need it. We place protective boards to protect your driveway. Same-day delivery available.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Fill It Up',
    description: 'Take your time - you have 7 days standard. Load it up at your own pace. Need more time? Just call us.',
  },
  {
    number: '04',
    icon: ThumbsUp,
    title: 'We Pick Up',
    description: 'When you\'re done, call us and we\'ll haul it away. That\'s it - project complete!',
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-slate-900 text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-400 font-semibold text-sm uppercase tracking-wide"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Getting a dumpster has never been easier. Four simple steps and you're done.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/quote" className="btn btn-primary btn-lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Shield, Check, BadgeCheck } from 'lucide-react'

const included = [
  'Delivery to your location',
  'Pickup when you\'re done',
  '7-day standard rental period',
  'Weight allowance included',
  'No fuel surcharges',
  'No environmental fees',
]

export function Guarantee() {
  return (
    <section className="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BadgeCheck className="w-4 h-4" />
              Our Promise to You
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Hidden Fees.{' '}
              <span className="text-orange-400">Guaranteed.</span>
            </h2>

            <p className="text-lg text-slate-300 mb-8">
              We know the dumpster rental industry has a bad reputation for surprise charges.
              That's not how we do business. The price we quote is the price you pay — period.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="font-semibold text-white mb-4">Every rental includes:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right side - Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl" />

              {/* Badge */}
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-center max-w-sm shadow-2xl">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Price Match Promise
                </h3>
                <p className="text-orange-100 mb-6">
                  If you find a better price for the same service, let us know.
                  We'll match it or beat it.
                </p>
                <div className="bg-white/20 rounded-xl px-4 py-3">
                  <p className="text-sm font-medium text-white">
                    "The quote we give is the quote you pay"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, DollarSign, Users, ThumbsUp, Truck } from 'lucide-react'
import { siteConfig } from '@/config/site'

const badges = [
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description: 'Need it today? We deliver fast.',
  },
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'The price we quote is the price you pay.',
  },
  {
    icon: Shield,
    title: `${siteConfig.yearsInBusiness}+ Years Experience`,
    description: 'Trusted since 2004.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Real people, not a call center.',
  },
]

export function TrustBadges() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <badge.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-slate-500">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

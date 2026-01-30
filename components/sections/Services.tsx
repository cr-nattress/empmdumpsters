'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Truck, Home, Trash2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Dumpster Rentals',
    description: '12-yard and 20-yard roll-off dumpsters for any project. Flexible rental periods with same-day delivery available.',
    href: '/services/dumpster-rentals',
    color: 'bg-orange-500',
  },
  {
    icon: Home,
    title: 'Estate Clean-Outs',
    description: "Full-service estate cleanouts where we do all the work. We'll sort, haul, and dispose of everything for you.",
    href: '/services/estate-cleanouts',
    color: 'bg-blue-500',
  },
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: "Point at what you want gone and we'll take it. Furniture, appliances, yard waste - we handle it all.",
    href: '/services/junk-removal',
    color: 'bg-emerald-500',
  },
]

export function Services() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-semibold text-sm uppercase tracking-wide"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Our dumpster rental service provides reliable and efficient waste management solutions 
            for projects of any size. With flexible rental periods, competitive pricing, and prompt 
            delivery and pickup, we strive to meet your needs while exceeding your expectations.
          </motion.p>
        </div>

        {/* Services grid with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/services-dumpster.jpg"
              alt="EMPM Dumpster rental service"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="grid gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link 
                href={service.href}
                className="block bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 group h-full"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

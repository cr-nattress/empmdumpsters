'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'

const colorMap: Record<string, string> = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
}

const colorBorderMap: Record<string, string> = {
  emerald: 'border-emerald-500',
  blue: 'border-blue-500',
  orange: 'border-orange-500',
  purple: 'border-purple-500',
  red: 'border-red-500',
}

export function SizePreview() {
  const [selectedSize, setSelectedSize] = useState(1) // Default to 20-yard (index 1)
  const sizes = siteConfig.dumpsterSizes

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-semibold text-sm uppercase tracking-wide"
          >
            Dumpster Sizes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4"
          >
            Find Your Perfect Size
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From small cleanouts to major construction, we have the right dumpster for your project.
          </motion.p>
        </div>

        {/* Size tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sizes.map((size, i) => (
            <button
              key={size.size}
              onClick={() => setSelectedSize(i)}
              className={`relative px-5 py-3 rounded-xl font-bold transition-all ${
                selectedSize === i
                  ? `${colorMap[size.color]} text-white shadow-lg`
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {size.size}-Yard
              {size.popular && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected size details */}
        <motion.div
          key={selectedSize}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Visual */}
          <div className={`relative rounded-2xl p-8 ${colorMap[sizes[selectedSize].color]} bg-opacity-10 border-2 ${colorBorderMap[sizes[selectedSize].color]}`}>
            <div className="aspect-[4/3] flex items-center justify-center">
              {/* Dumpster visual representation */}
              <div className="relative">
                <div 
                  className={`${colorMap[sizes[selectedSize].color]} rounded-lg shadow-lg`}
                  style={{
                    width: `${120 + sizes[selectedSize].size * 4}px`,
                    height: `${60 + sizes[selectedSize].size * 2}px`,
                  }}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-lg px-4 py-2 shadow-lg">
                  <p className="font-bold text-slate-900">{sizes[selectedSize].dimensions}</p>
                  <p className="text-sm text-slate-500">External dimensions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              {sizes[selectedSize].price ? (
                <p className="text-5xl font-bold text-slate-900">
                  ${sizes[selectedSize].price}
                </p>
              ) : (
                <p className="text-4xl font-bold text-orange-600">
                  Call for Quote
                </p>
              )}
              <p className="text-slate-500 mt-1">
                Includes delivery, pickup, and 7-day rental
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-slate-900">{sizes[selectedSize].capacity.split(' ')[0]}</p>
                <p className="text-sm text-slate-500">Truck Loads</p>
              </div>
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-slate-900">{sizes[selectedSize].trashBags.split(' ')[0]}</p>
                <p className="text-sm text-slate-500">Trash Bags</p>
              </div>
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-slate-900">{sizes[selectedSize].weight}</p>
                <p className="text-sm text-slate-500">Included</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-3">Ideal for:</p>
              <ul className="space-y-2">
                {sizes[selectedSize].idealFor.map((use) => (
                  <li key={use} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/quote?size=${sizes[selectedSize].size}`}
                className="btn btn-primary btn-lg flex-1"
              >
                Get This Size
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sizes"
                className="btn btn-outline btn-lg"
              >
                Compare All Sizes
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

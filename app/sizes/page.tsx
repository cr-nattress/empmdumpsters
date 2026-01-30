'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Phone, Truck, Package, Scale, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { CTA } from '@/components/sections'

const colorMap: Record<string, string> = {
  emerald: 'bg-emerald-500',
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
}

export default function SizesPage() {
  const sizes = siteConfig.dumpsterSizes
  const [selectedSize, setSelectedSize] = useState(1) // Default to 20-yard (index 1)

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
              Dumpster Sizes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Find the Perfect Dumpster Size
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We offer 12-yard and 20-yard dumpsters to fit any project. Not sure which one you need?
              Use our guide below or give us a call.
            </p>
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
            >
              <Phone className="w-5 h-5" />
              Need help choosing? Call {siteConfig.contact.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Size selector */}
      <section className="section">
        <div className="container">
          {/* Size tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sizes.map((size, i) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(i)}
                className={`relative px-6 py-4 rounded-xl font-bold transition-all ${
                  selectedSize === i
                    ? `${colorMap[size.color]} text-white shadow-lg scale-105`
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

          {/* Selected size detail */}
          <motion.div
            key={selectedSize}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Visual */}
            <div className={`${colorMap[sizes[selectedSize].color]} bg-opacity-10 rounded-2xl p-8 border-2 border-opacity-30`} style={{ borderColor: 'currentColor' }}>
              <div className="aspect-video flex flex-col items-center justify-center text-center">
                <div 
                  className={`${colorMap[sizes[selectedSize].color]} rounded-lg shadow-xl mb-6`}
                  style={{
                    width: `${100 + sizes[selectedSize].size * 3}px`,
                    height: `${50 + sizes[selectedSize].size * 1.5}px`,
                  }}
                />
                <p className="text-3xl font-bold text-slate-900">{sizes[selectedSize].size}-Yard Dumpster</p>
                <p className="text-slate-500 mt-2">{sizes[selectedSize].dimensions}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
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
                <p className="text-slate-500 mt-2">
                  Includes delivery, pickup, and 7-day rental
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-100 rounded-xl p-5 text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                  <p className="text-xl font-bold text-slate-900">{sizes[selectedSize].capacity.split(' ')[0]}</p>
                  <p className="text-sm text-slate-500">Truck Loads</p>
                </div>
                <div className="bg-slate-100 rounded-xl p-5 text-center">
                  <Package className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                  <p className="text-xl font-bold text-slate-900">{sizes[selectedSize].trashBags.split(' ')[0]}</p>
                  <p className="text-sm text-slate-500">Trash Bags</p>
                </div>
                <div className="bg-slate-100 rounded-xl p-5 text-center">
                  <Scale className="w-6 h-6 mx-auto mb-2 text-slate-600" />
                  <p className="text-xl font-bold text-slate-900">{sizes[selectedSize].weight}</p>
                  <p className="text-sm text-slate-500">Included</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-900 mb-4">Ideal for:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="btn btn-outline btn-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All sizes comparison table */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Compare All Sizes
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Size</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Dimensions</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Capacity</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Weight</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Price</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr key={size.size} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <span className="font-bold text-slate-900">{size.size}-Yard</span>
                      {size.popular && (
                        <span className="ml-2 bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-600">{size.dimensions}</td>
                    <td className="p-4 text-slate-600">{size.capacity}</td>
                    <td className="p-4 text-slate-600">{size.weight}</td>
                    <td className="p-4 font-bold text-slate-900">
                      {size.price ? `$${size.price}` : <span className="text-orange-600">Call for Quote</span>}
                    </td>
                    <td className="p-4">
                      <Link
                        href={`/quote?size=${size.size}`}
                        className="btn btn-sm btn-primary"
                      >
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

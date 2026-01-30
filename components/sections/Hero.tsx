'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, CheckCircle, Clock, Shield, Truck, Users, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'

const trustBadges = [
  { icon: Clock, text: 'Same-Day Delivery' },
  { icon: Shield, text: 'No Hidden Fees' },
  { icon: Truck, text: `${siteConfig.yearsInBusiness}+ Years Experience` },
  { icon: Users, text: 'Personal Service' },
]

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Image
          src="/images/hero-dumpster.jpg"
          alt="EMPM Dumpster on job site"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        {/* Orange accent gradient */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] lg:min-h-[700px] py-12 md:py-16 lg:py-20">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90">Trusted by 1000+ Customers</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
              Affordable Dumpster Rentals in{' '}
              <span className="text-orange-400">NEPA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Quality service at unbeatable prices. Same-day delivery, no hidden fees,
              and over {siteConfig.yearsInBusiness} years of reliable service in Northeastern Pennsylvania.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>

            {/* Trust badges - responsive grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Quick Quote Card (hidden on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 xl:p-8 max-w-md ml-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Quick Quote</h3>
                <p className="text-slate-500">Get your price in 60 seconds</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    What's your project?
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-0 transition-colors text-slate-700">
                    <option>Home Cleanout</option>
                    <option>Renovation/Remodel</option>
                    <option>Roofing Project</option>
                    <option>Construction</option>
                    <option>Estate Cleanout</option>
                    <option>Junk Removal</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Your ZIP Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-0 transition-colors text-slate-700 placeholder:text-slate-400"
                    maxLength={5}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-0 transition-colors text-slate-700 placeholder:text-slate-400"
                  />
                </div>

                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </form>

              <p className="text-center text-sm text-slate-400 mt-4">
                Or call us at{' '}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 36.7 960 43.3 1080 45C1200 46.7 1320 43.3 1380 41.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

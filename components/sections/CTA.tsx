'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function CTA() {
  return (
    <section className="relative bg-orange-600 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get your free quote today. Same-day delivery available. 
            No hidden fees, no hassle - just great service.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link 
              href="/quote" 
              className="btn btn-lg bg-white text-orange-600 hover:bg-orange-50"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* Reassurance text */}
          <p className="text-orange-200 text-sm">
            Serving Northeastern Pennsylvania since 2004
          </p>
        </motion.div>
      </div>
    </section>
  )
}

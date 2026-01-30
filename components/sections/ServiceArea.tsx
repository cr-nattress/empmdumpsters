'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function ServiceArea() {
  const areas = siteConfig.serviceAreas

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              We're Local and Ready to Serve You
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Proudly serving Northeastern Pennsylvania and surrounding areas. 
              If you don't see your city listed, give us a call - we may still be able to help!
            </p>

            {/* Cities grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn btn-primary">
                Check Your Area
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn btn-outline"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Map - Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.47762772983!2d-76.07088565!3d41.29755535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44b6fd7e2e3c7%3A0x7a9b8f5c8a1d5b0a!2sWilkes-Barre%2C%20PA!5e0!3m2!1sen!2sus!4v1706500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EMPM Dumpsters Service Area - Northeastern Pennsylvania"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Overlay card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call for service</p>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="font-bold text-slate-900 hover:text-orange-600"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

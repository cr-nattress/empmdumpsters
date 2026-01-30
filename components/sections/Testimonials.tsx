'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Testimonials() {
  const testimonials = siteConfig.testimonials
  const featuredTestimonial = testimonials[0] // Michael D's testimonial

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt="EMPM Dumpster service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Section label */}
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
            Customer Review
          </span>

          <Quote className="w-12 h-12 text-orange-500/40 mx-auto mt-4 mb-6" fill="currentColor" />

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "{featuredTestimonial.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: featuredTestimonial.rating }).map((_, j) => (
              <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>

          <p className="text-lg text-orange-400 font-semibold mb-8">
            — {featuredTestimonial.name}, {featuredTestimonial.location}
          </p>

          {/* CTA to leave a review */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm mb-4">
              Had a great experience? We'd love to hear from you!
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-medium"
            >
              Leave us a review on Facebook
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

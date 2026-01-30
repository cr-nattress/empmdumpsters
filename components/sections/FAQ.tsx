'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'What size dumpster do I need?',
    answer: 'We offer 12-yard and 20-yard dumpsters. The 12-yard is great for smaller cleanouts, garage decluttering, or minor renovations. The 20-yard handles larger projects like full home cleanouts, major renovations, roofing projects, and estate cleanouts. Not sure which size is right for you? Give us a call and we\'ll help you pick the perfect size.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer: 'Our standard rental period is 7 days, which is plenty of time for most projects. Need it longer? No problem - just let us know and we can extend your rental. We charge a fair daily rate for extensions.',
  },
  {
    question: 'What can I put in the dumpster?',
    answer: 'Most household and construction debris is fine - furniture, appliances, drywall, roofing materials, yard waste, and general junk. However, we can\'t accept hazardous materials like paint, chemicals, batteries, tires, or electronics. When in doubt, ask us!',
  },
  {
    question: 'Do you offer same-day delivery?',
    answer: 'Yes! In most of our service areas, we can deliver the same day if you call before noon. We understand that sometimes you need a dumpster right away, and we do our best to accommodate urgent requests.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing is straightforward with no hidden fees. Give us a call for a quote - prices include delivery, pickup, weight allowance, and 7-day rental. The quote we give you is the price you pay - no surprises.',
  },
  {
    question: 'Where can you place the dumpster?',
    answer: 'We can place dumpsters on driveways, parking lots, streets (with proper permits), and other hard surfaces. Just let us know the best location for your project. If you need it on the street, we\'ll help you understand the permit process.',
  },
  {
    question: 'What\'s included in the price?',
    answer: 'Everything you need: delivery, a weight allowance (varies by dumpster size), 7-day rental period, and pickup when you\'re done. The only additional charges would be for extra weight beyond your allowance or rental extensions.',
  },
  {
    question: 'Do you offer estate cleanout services?',
    answer: 'Absolutely! Unlike most dumpster companies, we offer full-service estate cleanouts where our team does all the work. We\'ll sort through everything, haul it away, and leave the property clean. It\'s perfect for families dealing with an estate or anyone who doesn\'t have the time or ability to do it themselves.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-semibold text-sm uppercase tracking-wide"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-orange-50 rounded-2xl p-8"
        >
          <HelpCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-4">We're here to help. Give us a call or send us a message.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

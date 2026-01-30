'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300">
              Have a question? Need a quote? We're here to help. 
              Reach out and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 mb-8">
                  Ready to start your project? Give us a call or fill out the form. 
                  We typically respond within a few hours.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call us</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Our location</p>
                    <p className="text-slate-900">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Business hours</p>
                    <div className="text-slate-900">
                      <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                      <p>Sat: {siteConfig.hours.saturday}</p>
                      <p>Sun: {siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          className="input" 
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          className="input" 
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="input" 
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject
                      </label>
                      <select className="input">
                        <option>General Inquiry</option>
                        <option>Request a Quote</option>
                        <option>Schedule a Pickup</option>
                        <option>Estate Clean-Out Services</option>
                        <option>Billing Question</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea 
                        required
                        rows={5}
                        className="input resize-none" 
                        placeholder="Tell us about your project or ask us a question..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

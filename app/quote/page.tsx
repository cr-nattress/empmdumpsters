'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Phone, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

const projectTypes = [
  { value: 'home_cleanout', label: 'Home Cleanout' },
  { value: 'renovation', label: 'Renovation / Remodel' },
  { value: 'roofing', label: 'Roofing Project' },
  { value: 'construction', label: 'Construction' },
  { value: 'estate_cleanout', label: 'Estate Clean-Out' },
  { value: 'junk_removal', label: 'Junk Removal' },
  { value: 'landscaping', label: 'Landscaping / Yard Work' },
  { value: 'other', label: 'Other' },
]

function QuoteFormContent() {
  const searchParams = useSearchParams()
  const preselectedSize = searchParams.get('size')
  
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    projectType: '',
    projectDetails: '',
    size: preselectedSize || '20',
    deliveryDate: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    notes: '',
  })

  useEffect(() => {
    if (preselectedSize) {
      setFormData(prev => ({ ...prev, size: preselectedSize }))
    }
  }, [preselectedSize])

  const sizes = siteConfig.dumpsterSizes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const steps = [
    { num: 1, label: 'Project' },
    { num: 2, label: 'Size' },
    { num: 3, label: 'Schedule' },
    { num: 4, label: 'Contact' },
  ]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Quote Request Received!</h2>
        <p className="text-lg text-slate-600 mb-6 max-w-md mx-auto">
          Thank you for your request. We'll review your project details and get back to you 
          within a few hours with your quote.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 max-w-sm mx-auto mb-8">
          <p className="text-slate-500 text-sm mb-2">Need it faster? Call us directly:</p>
          <a 
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="text-2xl font-bold text-orange-600 hover:text-orange-700"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
        <a href="/" className="btn btn-outline">
          Back to Home
        </a>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className={`flex items-center gap-2 ${
                s.num <= step ? 'text-orange-600' : 'text-slate-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  s.num < step
                    ? 'bg-orange-600 text-white'
                    : s.num === step
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {s.num < step ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <span className="hidden sm:inline font-medium">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-600"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Project */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Tell us about your project</h2>
                <p className="text-slate-600">What kind of project are you working on?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Details (optional)
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={3}
                  className="input resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.projectType}
                className="btn btn-primary btn-lg w-full"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Size */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Choose your dumpster size</h2>
                <p className="text-slate-600">Select the size that fits your project</p>
              </div>

              <div className="space-y-3">
                {sizes.map((size) => (
                  <label
                    key={size.size}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.size === String(size.size)
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size.size}
                      checked={formData.size === String(size.size)}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900">{size.size}-Yard</span>
                        {size.popular && (
                          <span className="ml-2 bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        <p className="text-sm text-slate-500 mt-1">
                          {size.dimensions} • {size.capacity}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-orange-600">
                        {size.price ? `$${size.price}` : 'Call for Quote'}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="btn btn-outline btn-lg">
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button type="button" onClick={nextStep} className="btn btn-primary btn-lg flex-1">
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Schedule */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">When do you need it?</h2>
                <p className="text-slate-600">Choose your preferred delivery date</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Delivery Date *
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="input"
                />
                <p className="text-sm text-slate-500 mt-2">
                  Same-day delivery may be available - call us to check!
                </p>
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="btn btn-outline btn-lg">
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button 
                  type="button" 
                  onClick={nextStep}
                  disabled={!formData.deliveryDate}
                  className="btn btn-primary btn-lg flex-1"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Your contact information</h2>
                <p className="text-slate-600">We'll use this to send your quote</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Scranton"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    className="input"
                    placeholder="18000"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="input resize-none"
                    placeholder="Any special instructions for delivery..."
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={prevStep} className="btn btn-outline btn-lg">
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg flex-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Call option */}
      <div className="mt-8 text-center">
        <p className="text-slate-500">
          Prefer to talk? Call us at{' '}
          <a 
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="text-orange-600 font-semibold hover:text-orange-700"
          >
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    </div>
  )
}

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a quote. 
              It only takes a minute!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <QuoteFormContent />
          </Suspense>
        </div>
      </section>
    </>
  )
}

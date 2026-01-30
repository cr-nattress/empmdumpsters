'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown, Truck, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { mainNav } from '@/config/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Top utility bar - hidden on mobile */}
      <div className="hidden md:block bg-slate-900 text-white">
        <div className="container">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                Serving NEPA
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                Mon-Sat: 7AM - 6PM
              </span>
            </div>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-slate-900 leading-tight tracking-tight">EMPM</span>
                <span className="text-xs font-medium text-slate-500 leading-tight tracking-wide uppercase">Dumpsters</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all ${
                      openDropdown === item.title ? 'text-orange-600 bg-orange-50' : ''
                    }`}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[220px]">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-orange-600 font-semibold transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <span className="hidden xl:block">{siteConfig.contact.phone}</span>
              </a>
              <Link
                href="/quote"
                className="btn btn-primary shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile: Phone + Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
            >
              <nav className="container py-4">
                <div className="space-y-1">
                  {mainNav.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-3 px-4 rounded-lg text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors"
                      >
                        {item.title}
                        {item.children && <ChevronDown className="w-4 h-4" />}
                      </Link>
                      {item.children && (
                        <div className="ml-4 pl-4 border-l-2 border-slate-100 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2.5 px-4 text-slate-500 hover:text-orange-600 text-sm transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call {siteConfig.contact.phone}
                  </a>
                  <Link
                    href="/quote"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile sticky call button - shows when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 md:hidden flex items-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Call Now</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}

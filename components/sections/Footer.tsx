import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Truck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { footerNav } from '@/config/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">EMPM</span>
                <span className="text-xs text-slate-400 leading-tight">Dumpsters</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6">
              Reliable dumpster rentals and waste removal services.
              Serving Northeastern Pennsylvania since 2004.
            </p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sizes"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Dumpster Sizes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                  <p>Sat: {siteConfig.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} {siteConfig.company}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

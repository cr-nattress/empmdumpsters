import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | EMPM Dumpsters',
  description: 'Privacy policy for EMPM Dumpsters website and services.',
}

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              When you use our services or contact us, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address for dumpster delivery</li>
              <li>Project details you provide</li>
              <li>Payment information when you pay for services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide dumpster rental and waste removal services</li>
              <li>Communicate with you about your order or inquiry</li>
              <li>Schedule deliveries and pickups</li>
              <li>Process payments</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-600">
              We do not sell, trade, or otherwise transfer your personal information to outside parties.
              We may share information with trusted third parties who assist us in operating our business,
              such as payment processors, as long as they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600">
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-slate-600">
              <p><strong>{siteConfig.company}</strong></p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Email: {siteConfig.contact.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

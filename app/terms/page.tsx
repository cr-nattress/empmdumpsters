import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service | EMPM Dumpsters',
  description: 'Terms of service for EMPM Dumpsters rental and waste removal services.',
}

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Rental Agreement</h2>
            <p className="text-slate-600">
              By renting a dumpster from {siteConfig.company}, you agree to the following terms and conditions.
              Please read them carefully before placing your order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Rental Period</h2>
            <p className="text-slate-600">
              The standard rental period is 7 days from the date of delivery. Extensions are available
              upon request and may be subject to additional daily fees. Please contact us if you need
              to extend your rental period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Prohibited Items</h2>
            <p className="text-slate-600 mb-4">
              The following items are NOT permitted in our dumpsters:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Hazardous materials (paint, chemicals, oil, gasoline)</li>
              <li>Electronics (TVs, computers, monitors)</li>
              <li>Appliances containing freon (refrigerators, freezers, AC units)</li>
              <li>Batteries (car or household)</li>
              <li>Tires (contact us for special disposal options)</li>
              <li>Medical waste</li>
              <li>Asbestos-containing materials</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Disposal of prohibited items may result in additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Weight Limits</h2>
            <p className="text-slate-600">
              Each dumpster size includes a weight allowance. Exceeding the weight limit may result in
              additional charges. Heavy materials such as concrete, brick, dirt, and roofing materials
              can add weight quickly. Please contact us if you have questions about weight limits for
              your specific project.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Placement & Access</h2>
            <p className="text-slate-600">
              You are responsible for ensuring the delivery location is accessible and that you have
              permission to place the dumpster at the specified location. If a permit is required for
              street placement, you are responsible for obtaining it. We are happy to provide guidance
              on the permit process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overfilling</h2>
            <p className="text-slate-600">
              For safety reasons, materials must not extend above the top of the dumpster. Overfilled
              dumpsters cannot be transported and may require removal of excess materials before pickup,
              which may result in additional charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing & Payment</h2>
            <p className="text-slate-600">
              Our quoted price includes delivery, pickup, the rental period, and a weight allowance.
              Additional charges may apply for rental extensions, excess weight, or prohibited items.
              Payment is due upon completion of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability</h2>
            <p className="text-slate-600">
              {siteConfig.company} is not responsible for damage to driveways, property, or underground
              utilities unless caused by our negligence. We take precautions to protect your property,
              including placing boards under the dumpster when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600">
              If you have questions about these Terms of Service, please contact us:
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

/**
 * EMPM Dumpsters - Site Configuration
 */

export const siteConfig = {
  // Basic info
  name: 'EMPM Dumpsters',
  description: 'Reliable dumpster rentals, estate clean-outs, and junk removal services. Serving the community for over 20 years with same-day delivery and no hidden fees.',
  url: 'https://empmdumpsters.com',
  ogImage: 'https://empmdumpsters.com/og-image.jpg',
  
  // Company
  author: 'EMPM Dumpster, LLC',
  company: 'EMPM Dumpster, LLC',
  established: 2004,
  yearsInBusiness: new Date().getFullYear() - 2004,
  
  // SEO
  keywords: [
    'dumpster rental',
    'roll off dumpster',
    'estate cleanout',
    'junk removal',
    'waste removal',
    'construction dumpster',
    'same day dumpster',
    'affordable dumpster rental',
  ],
  
  // Social links
  social: {
    facebook: 'https://www.facebook.com/p/EMPM-Dumpsters-LLC-100078114813045/',
  },
  
  // Contact
  contact: {
    email: 'empmdumpsters@gmail.com',
    phone: '(570) 905-5595',
    phoneRaw: '+15709055595',
    address: 'Shavertown, PA',
  },
  
  // Business hours
  hours: {
    weekdays: '7:00 AM - 6:00 PM',
    saturday: '8:00 AM - 4:00 PM',
    sunday: 'By Appointment',
  },

  // Dumpster sizes and pricing
  // NOTE: Only 12-yard and 20-yard dumpsters are offered per business research
  dumpsterSizes: [
    {
      size: 12,
      dimensions: "12' × 8' × 4'",
      capacity: '4-5 pickup truck loads',
      trashBags: '60-80 bags',
      weight: 'Contact for details',
      price: null, // Call for quote
      idealFor: ['Basement cleanout', 'Garage declutter', 'Small renovation', 'Yard waste cleanup'],
      color: 'blue',
    },
    {
      size: 20,
      dimensions: "22' × 8' × 4.5'",
      capacity: '8 pickup truck loads',
      trashBags: '110-130 bags',
      weight: 'Contact for details',
      price: null, // Call for quote
      popular: true,
      idealFor: ['Full home cleanout', 'Kitchen remodel', 'Roofing project', 'Estate cleanout', 'Construction debris'],
      color: 'orange',
    },
  ],

  // Service areas (NEPA - Northeastern Pennsylvania)
  serviceAreas: [
    'Shavertown',
    'Dallas',
    'Wilkes-Barre',
    'Nanticoke',
    'Pittston',
    'Kingston',
    'Moosic',
    'Tunkhannock',
    'Hanover',
    'Plymouth',
    'Luzerne',
    'Wyoming',
    'Old Forge',
    'Lehman',
    'Bear Creek',
    'Mountaintop',
    'Glen Lyon',
    'Sweet Valley',
    "Harvey's Lake",
    'Hunlock Creek',
  ],

  // Testimonials
  // NOTE: Only Michael D. testimonial is verified from original website
  // Additional testimonials should be collected with customer permission
  testimonials: [
    {
      name: 'Michael D.',
      location: 'NEPA',
      text: "As a regular customer of EMPM Dumpster, I can say without hesitation that their service is top-notch. The whole process is smooth and hassle-free, the team is professional, and the prices are unbeatable. They've truly taken the stress out of waste management for me.",
      rating: 5,
      project: 'Regular Customer',
      featured: true,
    },
  ],
}

export type SiteConfig = typeof siteConfig

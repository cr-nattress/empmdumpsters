/**
 * Navigation Configuration
 */

export const mainNav = [
  {
    title: 'Services',
    href: '/services',
    children: [
      { title: 'Dumpster Rentals', href: '/services/dumpster-rentals' },
      { title: 'Estate Clean-Outs', href: '/services/estate-cleanouts' },
      { title: 'Junk Removal', href: '/services/junk-removal' },
    ],
  },
  {
    title: 'Sizes',
    href: '/sizes',
  },
  {
    title: 'Guidelines',
    href: '/what-goes-in',
  },
  {
    title: 'Contractors',
    href: '/contractors',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export const footerNav = {
  services: [
    { title: 'Dumpster Rentals', href: '/services/dumpster-rentals' },
    { title: 'Estate Clean-Outs', href: '/services/estate-cleanouts' },
    { title: 'Junk Removal', href: '/services/junk-removal' },
    { title: 'All Services', href: '/services' },
  ],
  dumpsters: [
    { title: '12-Yard Dumpster', href: '/sizes#12-yard' },
    { title: '20-Yard Dumpster', href: '/sizes#20-yard' },
    { title: 'Compare Sizes', href: '/sizes' },
    { title: 'What Can Go In?', href: '/what-goes-in' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Service Areas', href: '/service-areas' },
    { title: 'Contact', href: '/contact' },
    { title: 'Get a Quote', href: '/quote' },
  ],
}

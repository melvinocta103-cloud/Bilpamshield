export const COMPANY = {
  name: 'Bilpam Shield Security',
  shortName: 'Bilpam Shield',
  abbreviation: 'BS',
  location: 'Juba, South Sudan',
  address: 'Gudele Block 6, Near Diana Petrol Station, Juba, South Sudan',
  email: 'bilpamshieldsecurity@gmail.com',
  phones: ['+211 927 776 151', '+211 912 712 240'],
  conflictingPhone: '+211 987 776 151',
  whatsapp: '+211 916 338 870',
  whatsappRaw: '211916338870',
  positioning: 'Your Trusted Security Partner in South Sudan',
  brandPromise: 'Protecting People. Securing Property. Building Trust.',
  taglines: [
    'Your Safety Is Our Priority.',
    'A Secure Environment for a Better Tomorrow.',
    'We Are Here to Protect So You Can Focus on What Matters Most.',
  ],
  availability: '24/7 Service Availability',
} as const;

export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/why-choose-us', label: 'Why Choose Us' },
  { path: '/security-tips', label: 'Security Tips' },
  { path: '/contact', label: 'Contact' },
] as const;

import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/config';
import { SERVICES } from '@/data';
import { Logo } from './Logo';

export function Footer({ navigate }: { navigate: (to: string) => void }) {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-pro py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo variant="light" onClick={() => navigate('/')} />
            </div>
            <p className="text-sm text-navy-200/70 leading-relaxed mb-5">
              {COMPANY.brandPromise} Your trusted security partner serving Juba and South Sudan with
              professional security solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 text-gold-300 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              {COMPANY.availability}
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-navy-200/70 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/request-consultation')}
                  className="text-sm text-navy-200/70 hover:text-gold-300 transition-colors"
                >
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="text-sm text-navy-200/70 hover:text-gold-300 transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-200/70">{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-navy-200/70 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {COMPANY.phones[0]}
                    <br />
                    {COMPANY.phones[1]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-navy-200/70 hover:text-gold-300 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">WhatsApp: {COMPANY.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-navy-200/70 hover:text-gold-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">{COMPANY.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-300/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Juba, South Sudan.
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-xs text-navy-300/60 hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-xs text-navy-300/60 hover:text-gold-300 transition-colors"
            >
              Terms &amp; Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

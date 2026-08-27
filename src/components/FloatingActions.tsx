import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/config';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="w-7 h-7 relative" />
      </a>
      <a
        href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-navy-900 text-white shadow-lg shadow-navy-900/30 hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

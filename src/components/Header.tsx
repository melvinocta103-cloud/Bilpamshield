import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/config';
import { Logo } from './Logo';
import { useScrolled } from '@/lib/useScrolled';

export function Header({ navigate, currentPath }: { navigate: (to: string) => void; currentPath: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(30);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const go = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="container-pro flex items-center justify-between">
          <Logo variant={scrolled ? 'dark' : 'light'} onClick={() => go('/')} />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    scrolled ? 'text-navy-800 hover:bg-navy-50' : 'text-white/90 hover:bg-white/10'
                  } ${isActive ? (scrolled ? 'bg-navy-50 text-navy-900' : 'bg-white/15 text-white') : ''}`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-navy-900 border border-navy-900/15 hover:border-navy-900/30 hover:bg-navy-50'
                  : 'text-white border border-white/25 hover:border-white/50 hover:bg-white/10'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => go('/request-consultation')}
              className="btn-primary !py-2.5 !text-sm"
            >
              Request Consultation
            </button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-navy-900/10">
            <Logo onClick={() => go('/')} />
            <button onClick={() => setMobileOpen(false)} className="p-2 text-navy-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive ? 'bg-navy-50 text-navy-900' : 'text-navy-700 hover:bg-navy-50/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => go('/request-consultation')}
              className="w-full btn-primary mt-4"
            >
              Request Consultation
            </button>
          </nav>
          <div className="p-4 border-t border-navy-900/10 space-y-2">
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy-50 text-navy-900 font-semibold"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phones[0]}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#25D366]/10 text-[#1ebd5a] font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: {COMPANY.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

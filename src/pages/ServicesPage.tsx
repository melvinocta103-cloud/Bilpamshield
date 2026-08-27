import {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/data';
import { CTASection } from '@/components/Section';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
};

export function ServicesPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden
        />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Professional Security Services in South Sudan
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              From manned guarding to VIP protection, armoured vehicles to risk assessment —
              Bilpam Shield Security offers a comprehensive range of professional security services
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <div
                  key={service.slug}
                  className="group rounded-2xl overflow-hidden bg-white border border-navy-900/8 card-hover animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="w-12 h-12 rounded-xl bg-gold-500/90 backdrop-blur-sm flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-navy-950" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-navy-700/70 leading-relaxed mb-4 flex-1">
                      {service.shortDescription}
                    </p>
                    <button
                      onClick={() => navigate(`/services/${service.slug}`)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        navigate={navigate}
        title="Not Sure Which Service You Need?"
        description="Our team can help assess your security requirements and recommend the right combination of services for your situation."
      />
    </>
  );
}

import {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/data';
import { COMPANY } from '@/config';
import { CTASection } from '@/components/Section';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
};

export function ServiceDetailPage({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (to: string) => void;
}) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-navy-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-navy-900 mb-3">Service Not Found</h1>
          <p className="text-navy-700/70 mb-6">
            The service you are looking for could not be found.
          </p>
          <button onClick={() => navigate('/services')} className="btn-primary">
            <ArrowLeft className="w-5 h-5" />
            Back to All Services
          </button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || ShieldCheck;
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 to-navy-900/70" />
        </div>
        <div className="container-pro relative">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-sm text-navy-100/60 hover:text-gold-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </button>
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-gold-500 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-navy-950" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-navy-100/80 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">The Challenge</h2>
                <p className="text-navy-700/80 leading-relaxed">{service.problem}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-5">Service Benefits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-5">Typical Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-start gap-3 p-4 rounded-lg bg-navy-50 border border-navy-900/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0 mt-2" />
                      <span className="text-sm text-navy-700/80">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-5">How It Works</h2>
                <div className="space-y-4">
                  {service.howItWorks.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-navy-700/80">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-5">What You Should Provide</h2>
                <ul className="space-y-3">
                  {service.clientProvides.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-navy-50 border border-navy-900/8">
                <h3 className="text-base font-bold text-navy-900 mb-2">Security Considerations</h3>
                <p className="text-sm text-navy-700/70 leading-relaxed">{service.considerations}</p>
              </div>

              {service.disclaimer && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-navy-800/80 leading-relaxed">{service.disclaimer}</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-navy-900 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need This Service?</h3>
                <p className="text-sm text-navy-100/70 mb-5 leading-relaxed">
                  Request a consultation to discuss your {service.title.toLowerCase()} requirements
                  with our team.
                </p>
                <button
                  onClick={() => navigate(`/request-consultation?service=${encodeURIComponent(service.title)}`)}
                  className="btn-primary w-full mb-3"
                >
                  Request This Service
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border-2 border-white/25 hover:border-white rounded-lg text-white font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-navy-100/60">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    {COMPANY.availability}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Service */}
      <section className="py-12 bg-navy-50 border-t border-navy-900/5">
        <div className="container-pro">
          <button
            onClick={() => navigate(`/services/${nextService.slug}`)}
            className="group flex items-center justify-between w-full p-6 rounded-2xl bg-white border border-navy-900/8 card-hover"
          >
            <div className="text-left">
              <div className="text-xs font-semibold text-navy-700/50 uppercase tracking-wider mb-1">
                Next Service
              </div>
              <div className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                {nextService.title}
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-navy-700/40 group-hover:text-gold-600 group-hover:translate-x-2 transition-all" />
          </button>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

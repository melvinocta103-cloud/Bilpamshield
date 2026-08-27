import { Phone, MessageCircle, Clock, ArrowRight, ShieldAlert } from 'lucide-react';
import { COMPANY } from '@/config';
import { ConsultationForm } from '@/components/ConsultationForm';

export function RequestConsultationPage({
  navigate,
  presetService,
}: {
  navigate: (to: string) => void;
  presetService?: string;
}) {
  const decodedService = presetService ? decodeURIComponent(presetService) : undefined;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden
        />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Request a Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Request a Security Consultation
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              Tell us about your security needs and our team will contact you to arrange a
              consultation. Please provide as much context as you are comfortable sharing — we
              will discuss detailed requirements securely.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <ConsultationForm defaultService={decodedService} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <Clock className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">24/7 Availability</h3>
                <p className="text-sm text-navy-100/70 leading-relaxed mb-4">
                  Security concerns do not follow business hours. Our team is available around the
                  clock to respond to your security needs.
                </p>
                <p className="text-xs text-navy-100/50">
                  Emergency response availability is subject to operational capability and
                  deployment conditions.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-navy-900/8 p-6">
                <h3 className="text-base font-bold text-navy-900 mb-4">Prefer to Talk Directly?</h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-navy-700" />
                    <div className="text-sm">
                      <div className="font-semibold text-navy-900">Call Us</div>
                      <div className="text-navy-700/60">{COMPANY.phones[0]}</div>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#1ebd5a]" />
                    <div className="text-sm">
                      <div className="font-semibold text-navy-900">WhatsApp</div>
                      <div className="text-navy-700/60">{COMPANY.whatsapp}</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-gold-500/10 border border-gold-500/20 p-5">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 mb-2">
                      Protecting Your Information
                    </h4>
                    <p className="text-xs text-navy-700/70 leading-relaxed">
                      Please do not share sensitive operational details through this form. For
                      sensitive information, contact us directly through a secure channel. Your
                      enquiry data is handled confidentially.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-navy-50 border border-navy-900/5 p-5">
                <h4 className="text-sm font-bold text-navy-900 mb-2">What Happens Next?</h4>
                <ol className="space-y-2 text-xs text-navy-700/70">
                  {[
                    'We receive and review your request',
                    'Our team contacts you to discuss needs',
                    'A consultation is arranged',
                    'A tailored security solution is proposed',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-900 text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="container-pro text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">
            Looking for Our Other Services?
          </h2>
          <p className="text-navy-700/70 mb-6">
            Explore our full range of professional security services.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="btn-secondary group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </>
  );
}

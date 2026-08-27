import {
  ShieldCheck,
  Lock,
  Cctv,
  GraduationCap,
  Siren,
  Eye,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SECURITY_TIPS } from '@/data';
import { CTASection } from '@/components/Section';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Lock,
  Cctv,
  GraduationCap,
  Siren,
  Eye,
};

export function SecurityTipsPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden
        />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Security Tips
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Practical Security Awareness
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              Simple, actionable practices that can significantly improve your personal and
              organisational security. These tips complement — but do not replace —
              professional security services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_TIPS.map((tip, index) => {
              const Icon = iconMap[tip.icon] || ShieldCheck;
              return (
                <div
                  key={tip.id}
                  className="group p-6 rounded-2xl bg-white border border-navy-900/8 card-hover animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <div className="text-xs font-bold text-gold-600 mb-2">
                    TIP {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{tip.title}</h3>
                  <p className="text-sm text-navy-700/70 leading-relaxed mb-4">{tip.summary}</p>
                  <p className="text-sm text-navy-700/60 leading-relaxed flex-1">{tip.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="container-pro">
          <div className="max-w-2xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-navy-900 mb-3">
              These Tips Are Just the Beginning
            </h2>
            <p className="text-navy-700/80 leading-relaxed mb-8">
              Security awareness is important, but effective security requires professional
              assessment and implementation. Our team can help you develop a comprehensive security
              strategy tailored to your specific needs.
            </p>
            <button
              onClick={() => navigate('/request-consultation')}
              className="btn-primary group"
            >
              Request Professional Security Advice
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <CTASection
        navigate={navigate}
        title="Need a Professional Security Assessment?"
        description="Our security consultancy and risk assessment service can identify vulnerabilities and recommend practical solutions for your organisation."
      />
    </>
  );
}

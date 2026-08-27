import { ArrowRight } from 'lucide-react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`mb-4 text-xs font-semibold uppercase tracking-wider ${
            light ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-navy-100/80' : 'text-navy-700/80'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CTASection({
  navigate,
  title = 'Ready to Secure What Matters?',
  description = 'Contact Bilpam Shield Security today for a professional consultation. Our team is ready to understand your security needs and provide tailored solutions.',
}: {
  navigate: (to: string) => void;
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 section-padding">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden
      />
      <div className="container-pro relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            {title}
          </h2>
          <p className="mt-5 text-lg text-navy-100/80 leading-relaxed">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/request-consultation')}
              className="btn-primary group"
            >
              Request Security Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-ghost-light">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Users,
  Award,
  Target,
  Eye,
  CheckCircle2,
  Lock,
  Cctv,
  GraduationCap,
  Siren,
  BadgeCheck,
  Star,
} from 'lucide-react';
import { COMPANY } from '@/config';
import { SERVICES, SECURITY_TIPS } from '@/data';
import { SectionHeading, CTASection } from '@/components/Section';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  UserCheck,
  Truck,
  Car,
  Package,
  ClipboardCheck,
  Lock,
  Cctv,
  GraduationCap,
  Siren,
  BadgeCheck,
  Eye,
};

const whyChooseItems = [
  {
    icon: Users,
    title: 'Highly Trained Personnel',
    description:
      'Our security personnel are professionally trained and prepared to handle a range of security scenarios with competence and composure.',
  },
  {
    icon: Target,
    title: 'Customised Security Solutions',
    description:
      'We do not offer one-size-fits-all security. Every engagement begins with understanding your specific risks and requirements.',
  },
  {
    icon: Award,
    title: 'Professionalism & Reliability',
    description:
      'We maintain professional standards in conduct, appearance and service delivery, building lasting trust with our clients.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description:
      'Security concerns do not keep business hours. Our team is available around the clock to respond to your security needs.',
  },
];

export function HomePage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/asset/IMG_9659.jpg"
            alt="Bilpam Shield Security personnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container-pro relative pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold-200 animate-fade-in">
              {COMPANY.availability}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-shadow-lg animate-fade-in-up text-balance">
              {COMPANY.positioning}
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-navy-100/90 font-medium leading-relaxed max-w-2xl text-shadow-lg animate-fade-in-delayed">
              {COMPANY.brandPromise}
            </p>

            <p className="mt-4 text-base md:text-lg text-navy-100/70 leading-relaxed max-w-xl animate-fade-in-delayed">
              Professional security services based in Juba, South Sudan. Protecting people, property
              and assets with trained personnel and tailored security solutions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-delayed">
              <button
                onClick={() => navigate('/request-consultation')}
                className="btn-primary group text-base"
              >
                Request Security Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="btn-ghost-light text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-in-delayed">
              {COMPANY.taglines.map((tagline) => (
                <div
                  key={tagline}
                  className="flex items-center gap-2 text-sm text-navy-100/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  {tagline}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Security Solutions"
            description="Professional security services designed to protect what matters most to you, delivered by trained personnel across Juba and South Sudan."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <button
                  key={service.slug}
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="group text-left rounded-2xl bg-white border border-navy-900/8 p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-700/70 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => navigate('/services')} className="btn-secondary">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Why Choose Bilpam Shield"
            title="A Security Partner You Can Trust"
            description="We combine trained personnel, customised solutions and round-the-clock availability to deliver professional security you can rely on."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseItems.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-navy-900/8 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-700/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/why-choose-us')}
              className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors inline-flex items-center gap-1.5"
            >
              Learn more about what sets us apart
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Brand Promise Band */}
      <section className="relative py-16 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"
          aria-hidden
        />
        <div className="container-pro relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '24/7', label: 'Service Availability' },
              { value: '6', label: 'Core Security Services' },
              { value: '100%', label: 'Client-Focused Approach' },
              { value: 'Juba', label: 'Local Presence in South Sudan' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold-400 font-display">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-navy-100/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips Preview */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Security Awareness"
            title="Practical Security Tips"
            description="Simple practices that can significantly improve your personal and organisational security posture."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECURITY_TIPS.map((tip, index) => {
              const Icon = iconMap[tip.icon] || ShieldCheck;
              return (
                <div
                  key={tip.id}
                  className="group rounded-xl bg-navy-50/50 border border-navy-900/5 p-6 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-navy-700/70 leading-relaxed">{tip.summary}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => navigate('/security-tips')} className="btn-outline">
              View All Security Tips
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact / Location Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Contact Bilpam Shield Security"
                description="Based in Gudele, Juba. Available 24/7 to discuss your security needs."
                center={false}
              />

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-navy-900/8 hover:border-gold-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <Phone className="w-6 h-6 text-white group-hover:text-navy-950 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">Call Us</div>
                    <div className="text-sm text-navy-700/70">
                      {COMPANY.phones[0]} | {COMPANY.phones[1]}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-navy-900/8 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">WhatsApp</div>
                    <div className="text-sm text-navy-700/70">{COMPANY.whatsapp}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-navy-900/8 hover:border-gold-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <MessageCircle className="w-6 h-6 text-white group-hover:text-navy-950 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-navy-900">Email</div>
                    <div className="text-sm text-navy-700/70 truncate">{COMPANY.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/request-consultation')} className="btn-primary">
                  Request Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="btn-outline">
                  Full Contact Details
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/30652610/pexels-photo-30652610.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Juba, South Sudan cityscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-gold-300 text-sm font-semibold mb-1">
                  <Star className="w-4 h-4 fill-gold-300" />
                  Our Location
                </div>
                <div className="text-white font-display font-bold text-lg">{COMPANY.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

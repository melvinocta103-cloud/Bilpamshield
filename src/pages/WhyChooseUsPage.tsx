import {
  Users,
  Target,
  Award,
  Clock,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  AlertCircle,
  Star,
} from 'lucide-react';
import { COMPANY } from '@/config';
import { SectionHeading, CTASection } from '@/components/Section';

const confirmedStrengths = [
  {
    icon: Users,
    title: 'Highly Trained Personnel',
    description:
      'Our security personnel are professionally trained and prepared to handle diverse security scenarios with competence and composure.',
  },
  {
    icon: Target,
    title: 'Customised Security Solutions',
    description:
      'We do not offer generic security packages. Every engagement starts with understanding your specific risks, environment and requirements.',
  },
  {
    icon: Award,
    title: 'Professionalism & Reliability',
    description:
      'We maintain professional standards in conduct, appearance and service delivery. Our clients know they can depend on us.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description:
      'Security concerns do not follow business hours. Our team is available around the clock to respond when you need us.',
  },
  {
    icon: ShieldCheck,
    title: 'Client-Focused Service',
    description:
      'Your security needs come first. We work closely with you to ensure our services align with your operational requirements.',
  },
  {
    icon: BadgeCheck,
    title: 'Advanced Security Technology',
    description:
      'We incorporate modern security technology as part of our comprehensive security approach, as appropriate for each engagement.',
  },
];

const verificationFields = [
  'Business registration details',
  'Private security licensing',
  'Armed security operational authorisation',
  'Insurance coverage information',
  'Personnel training credentials',
  'Years of operation',
  'Client references and testimonials',
  'Certifications and professional memberships',
];

export function WhyChooseUsPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
          aria-hidden
        />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Why Choose Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              A Security Partner Built on Trust and Professionalism
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              Choosing a security provider is a decision that directly affects the safety of your
              people and the protection of your assets. Here is what sets Bilpam Shield Security apart.
            </p>
          </div>
        </div>
      </section>

      {/* Confirmed Strengths */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Our Strengths"
            title="What Sets Bilpam Shield Apart"
            description="These are the qualities confirmed in our company positioning that define how we serve our clients."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmedStrengths.map((strength, index) => (
              <div
                key={strength.title}
                className="group p-6 rounded-2xl bg-white border border-navy-900/8 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <strength.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{strength.title}</h3>
                <p className="text-sm text-navy-700/70 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Framework */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                eyebrow="Trust & Transparency"
                title="Our Commitment to Honest Security"
                description="We believe trust is built on honesty, not exaggerated claims."
                center={false}
              />
              <div className="mt-6 space-y-4 text-navy-700/80 leading-relaxed">
                <p>
                  At Bilpam Shield Security, we are committed to presenting our capabilities honestly
                  and accurately. We do not fabricate credentials, invent client testimonials or
                  make security claims we cannot stand behind.
                </p>
                <p>
                  Our marketing claims — such as trained personnel and customised solutions —
                  reflect our actual service approach. Where credentials such as licences,
                  certifications or years of operation can be verified, we will present them
                  transparently.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-white border border-navy-900/8 p-5">
                <h3 className="text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                  What We Will Never Do
                </h3>
                <ul className="space-y-2 text-sm text-navy-700/70">
                  {[
                    'Fabricate client testimonials or reviews',
                    'Display fake client logos or partnerships',
                    'Invent certifications or licences',
                    'Claim government affiliations we do not have',
                    'Publish unverified statistics or success rates',
                    'Misrepresent our armed security authorisation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-error-500 font-bold flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white border border-navy-900/8 p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Verification In Progress
                </h3>
                <p className="text-sm text-navy-700/70 leading-relaxed mb-5">
                  The following trust credentials are being verified with Bilpam Shield Security
                  management. Once confirmed, they will be displayed on this page.
                </p>
                <ul className="space-y-3">
                  {verificationFields.map((field) => (
                    <li key={field} className="flex items-start gap-3 p-3 rounded-lg bg-navy-50/50">
                      <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700/80">{field}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <p className="text-sm text-navy-800/80 leading-relaxed">
                    <strong className="font-semibold">Note:</strong> Trust credentials will only be
                    published once verified with official documentation. We prioritise accuracy over
                    appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="relative py-16 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container-pro relative text-center">
          <ShieldCheck className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight text-balance">
            {COMPANY.brandPromise}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {COMPANY.taglines.map((tagline) => (
              <div key={tagline} className="flex items-center gap-2 text-sm text-navy-100/60">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                {tagline}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

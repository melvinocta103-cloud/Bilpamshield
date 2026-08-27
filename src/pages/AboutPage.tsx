import {
  Shield,
  Target,
  Eye,
  Heart,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY } from '@/config';
import { SectionHeading, CTASection } from '@/components/Section';

const values = [
  {
    icon: Shield,
    title: 'Professionalism',
    description:
      'We conduct ourselves with the highest professional standards in every engagement, from initial consultation to ongoing service delivery.',
  },
  {
    icon: CheckCircle2,
    title: 'Reliability',
    description:
      'Our clients depend on us for consistent, dependable security services. We are where we need to be, when we need to be there.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description:
      "Every security solution is shaped around the client's specific needs. We listen first, then design the right approach.",
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Our personnel are trained and prepared to handle a range of security scenarios with competence and composure.',
  },
];

export function AboutPage({ navigate }: { navigate: (to: string) => void }) {
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
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Protecting People. Securing Property. Building Trust.
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              {COMPANY.name} is a private security company based in {COMPANY.location}. We provide
              professional security services to clients who need reliable protection in a challenging
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/35562107/pexels-photo-35562107.png?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Professional security guard"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Your Trusted Security Partner in South Sudan"
                description={COMPANY.positioning}
                center={false}
              />
              <div className="mt-6 space-y-4 text-navy-700/80 leading-relaxed">
                <p>
                  {COMPANY.name} provides professional security services from our base in Juba, South
                  Sudan. We understand the unique security challenges faced by organisations,
                  businesses and individuals operating in this environment.
                </p>
                <p>
                  Our approach is built on trained personnel, customised security solutions and a
                  commitment to client-focused service. We work closely with each client to understand
                  their specific security requirements and develop practical, effective solutions.
                </p>
                <p>
                  With {COMPANY.availability.toLowerCase()}, we are here to protect so you can focus on
                  what matters most.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-navy-50">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <div className="text-sm font-semibold text-navy-900">Juba, South Sudan</div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-navy-50">
                  <Clock className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <div className="text-sm font-semibold text-navy-900">24/7 Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-50">
        <div className="container-pro">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-navy-900/8 p-8 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Our Mission</h3>
              <p className="text-navy-700/80 leading-relaxed">
                To provide professional, reliable and effective security services that protect our
                clients' people, property and assets. We are committed to delivering
                customised security solutions built on trained personnel and client-focused service,
                helping our clients operate with confidence in South Sudan.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-navy-900/8 p-8 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Our Vision</h3>
              <p className="text-navy-700/80 leading-relaxed">
                To be the most trusted and respected private security partner in South Sudan —
                recognised for professionalism, reliability and an unwavering commitment to client
                safety. We envision a secure environment where our clients can focus on what matters
                most, knowing their security is in capable hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-pro">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do at Bilpam Shield Security."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-navy-50/50 border border-navy-900/5 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-navy-700/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Band */}
      <section className="relative py-16 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container-pro relative text-center">
          <Shield className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight text-balance">
            {COMPANY.brandPromise}
          </p>
          <p className="mt-4 text-navy-100/70 max-w-xl mx-auto">
            {COMPANY.taglines[2]}
          </p>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

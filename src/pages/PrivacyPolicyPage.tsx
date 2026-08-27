import { ShieldCheck, FileText } from 'lucide-react';
import { COMPANY } from '@/config';
import { CTASection } from '@/components/Section';

export function PrivacyPolicyPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Privacy Policy</h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              How {COMPANY.name} collects, uses and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro max-w-3xl">
          <div className="prose prose-navy max-w-none space-y-8">
            <div className="flex items-center gap-3 text-sm text-navy-700/60">
              <FileText className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Introduction</h2>
              <p className="text-navy-700/80 leading-relaxed">
                {COMPANY.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a private security company
                based in {COMPANY.location}. This privacy policy explains how we collect, use and
                protect personal information you provide through our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. Information We Collect</h2>
              <p className="text-navy-700/80 leading-relaxed mb-3">
                We collect information you voluntarily provide through our website forms, including:
              </p>
              <ul className="space-y-2 text-navy-700/80">
                {[
                  'Your name and contact details (phone number, email address)',
                  'Your organisation name, if provided',
                  'The service you are interested in',
                  'Your location or area',
                  'General information about your security requirements',
                  'Your preferred contact method and consultation time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-navy-700/60 leading-relaxed">
                We do <strong>not</strong> collect sensitive operational security information such as
                guard deployment details, routes, schedules, access codes or patrol patterns through
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. How We Use Your Information</h2>
              <ul className="space-y-2 text-navy-700/80">
                {[
                  'To respond to your enquiry and arrange consultations',
                  'To understand your security requirements',
                  'To contact you regarding your enquiry',
                  'To improve our services and website',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. Data Storage and Security</h2>
              <p className="text-navy-700/80 leading-relaxed">
                Your information is stored securely and access is restricted to authorised Bilpam
                Shield Security personnel only. We use secure hosting and encrypted connections
                (HTTPS) to protect data in transit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Data Retention</h2>
              <p className="text-navy-700/80 leading-relaxed">
                We retain enquiry data for a reasonable period to allow for follow-up and service
                delivery. If you request deletion of your data, we will remove it from our active
                systems where legally permissible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">6. Data Sharing</h2>
              <p className="text-navy-700/80 leading-relaxed">
                We do not sell, trade or rent your personal information to third parties. We may
                share information with service providers who help us operate our website or deliver
                services, under appropriate confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">7. Your Rights</h2>
              <p className="text-navy-700/80 leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal
                information. To exercise these rights, please contact us at{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-gold-600 font-medium hover:underline">
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">8. Contact Us</h2>
              <p className="text-navy-700/80 leading-relaxed">
                If you have questions about this privacy policy or how we handle your data, please
                contact us:
              </p>
              <div className="mt-3 p-4 rounded-lg bg-navy-50 text-sm text-navy-700/80 space-y-1">
                <div><strong>{COMPANY.name}</strong></div>
                <div>{COMPANY.address}</div>
                <div>Email: {COMPANY.email}</div>
                <div>Phone: {COMPANY.phones[0]}</div>
              </div>
            </section>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
              <ShieldCheck className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-navy-700/70 leading-relaxed">
                This privacy policy may be updated from time to time. We recommend reviewing this page
                periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

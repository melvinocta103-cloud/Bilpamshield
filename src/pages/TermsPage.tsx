import { FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/config';
import { CTASection } from '@/components/Section';

export function TermsPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Terms &amp; Legal Information
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              Terms of use for the {COMPANY.name} website and important legal disclaimers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro max-w-3xl">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-sm text-navy-700/60">
              <FileText className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">1. Website Terms of Use</h2>
              <p className="text-navy-700/80 leading-relaxed">
                By accessing and using this website, you accept these terms of use in full. If you
                disagree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">2. Information Accuracy</h2>
              <p className="text-navy-700/80 leading-relaxed">
                We strive to ensure that information on this website is accurate and up to date.
                However, we do not warrant that all information is complete, current or error-free.
                Service descriptions are provided as general information and do not constitute a
                binding offer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">3. No Guarantee of Response Times</h2>
              <p className="text-navy-700/80 leading-relaxed">
                While {COMPANY.name} maintains {COMPANY.availability.toLowerCase()}, this website does
                not guarantee specific emergency response times. Actual response availability is
                subject to operational capability, deployment conditions and geographical factors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">4. Security Service Disclaimers</h2>
              <ul className="space-y-3 text-navy-700/80">
                {[
                  'Armed security services are subject to relevant South Sudanese regulatory requirements and authorisation.',
                  'Service availability may vary based on operational conditions and resource availability.',
                  'Information on this website does not constitute professional security advice. Formal advice is provided through consultation.',
                  'Bilpam Shield Security is not a law enforcement agency and does not perform law enforcement functions.',
                  "Service descriptions are based on the company's presented capabilities. Specific service deliverables are confirmed during consultation.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">5. Enquiry Submissions</h2>
              <p className="text-navy-700/80 leading-relaxed">
                When you submit an enquiry through this website, you consent to being contacted by{' '}
                {COMPANY.name} regarding your request. You are responsible for providing accurate
                contact information. Please do not submit sensitive operational security information
                through public forms on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">6. Intellectual Property</h2>
              <p className="text-navy-700/80 leading-relaxed">
                All content on this website, including text, graphics, logos and design elements, is
                the property of {COMPANY.name} unless otherwise stated, and is protected by
                applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">7. Third-Party Links</h2>
              <p className="text-navy-700/80 leading-relaxed">
                This website may contain links to third-party websites or services. We are not
                responsible for the content, privacy policies or practices of any third-party
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">8. Limitation of Liability</h2>
              <p className="text-navy-700/80 leading-relaxed">
                {COMPANY.name} shall not be liable for any indirect, incidental or consequential
                damages arising from the use of this website, except as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">9. Changes to Terms</h2>
              <p className="text-navy-700/80 leading-relaxed">
                We may update these terms from time to time. Continued use of the website after
                changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <div className="flex items-start gap-3 p-5 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <AlertTriangle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Legal Verification Notice</h3>
                <p className="text-sm text-navy-700/70 leading-relaxed">
                  Legal requirements including business registration, private security licensing,
                  armed security authorisation, insurance and data protection obligations must be
                  verified with qualified South Sudanese legal and regulatory professionals before
                  this website is launched. The terms above are provided as a starting framework and
                  should be reviewed by legal counsel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 rounded-xl bg-navy-50 border border-navy-900/5">
              <ShieldCheck className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Contact</h3>
                <p className="text-sm text-navy-700/70 leading-relaxed">
                  For legal enquiries regarding these terms, please contact us at{' '}
                  <a href={`mailto:${COMPANY.email}`} className="text-gold-600 font-medium hover:underline">
                    {COMPANY.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

import { useState, type FormEvent } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY } from '@/config';
import { supabase } from '@/lib/supabase';
import { CTASection } from '@/components/Section';

export function ContactPage({ navigate }: { navigate: (to: string) => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Your name is required';
    if (!form.email.trim()) newErrors.email = 'An email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address';
    if (!form.message.trim()) newErrors.message = 'A message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setErrorMessage('');

    if (!supabase) {
      setStatus('error');
      setErrorMessage('This form is temporarily unavailable. Please contact us directly.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone?.trim() || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'We could not send your message. Please try again or contact us directly.'
      );
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container-pro relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider mb-5 text-gold-300">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
              Get In Touch With Bilpam Shield Security
            </h1>
            <p className="mt-6 text-lg text-navy-100/80 leading-relaxed">
              Based in Juba, South Sudan. Available 24/7 to discuss your security needs. Reach us by
              phone, WhatsApp, email or send us a message below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-navy-50 border border-navy-900/5">
                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-900 mb-1">Our Location</div>
                    <div className="text-sm text-navy-700/70">{COMPANY.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-navy-50 border border-navy-900/5">
                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-navy-900 mb-1">Telephone</div>
                    {COMPANY.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-sm text-navy-700/70 hover:text-gold-600 transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl bg-navy-50 border border-navy-900/5 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-900 mb-1">WhatsApp</div>
                    <div className="text-sm text-navy-700/70 group-hover:text-[#1ebd5a] transition-colors">
                      {COMPANY.whatsapp}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-navy-50 border border-navy-900/5 hover:border-gold-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-navy-900 mb-1">Email</div>
                    <div className="text-sm text-navy-700/70 group-hover:text-gold-600 transition-colors break-all">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
                  <Clock className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-navy-800/80">
                    {COMPANY.availability}
                  </span>
                </div>
              </div>

              {/* Contact verification notice */}
              <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-gold-500/5 border border-gold-500/15">
                <AlertTriangle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-navy-700/60 leading-relaxed">
                  <strong className="font-semibold">Contact verification:</strong> Our records
                  contain a conflicting phone number. Please confirm the correct number with our team
                  before relying on it for urgent matters.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => navigate('/request-consultation')}
                  className="btn-primary w-full"
                >
                  Request a Security Consultation
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              {status === 'success' ? (
                <div className="rounded-2xl bg-white border border-navy-900/10 p-8 text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-success-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Message Sent</h3>
                  <p className="text-navy-700/80 leading-relaxed">
                    Thank you for contacting Bilpam Shield Security. We will respond to your message
                    as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white border border-navy-900/10 p-6 md:p-8 space-y-5"
                >
                  <div>
                    <label className="label-field" htmlFor="contactName">
                      Full Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      className={`input-field ${errors.name ? 'border-error-500' : ''}`}
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="label-field" htmlFor="contactEmail">
                        Email <span className="text-error-500">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        className={`input-field ${errors.email ? 'border-error-500' : ''}`}
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="label-field" htmlFor="contactPhone">
                        Phone
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        className="input-field"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+211 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-field" htmlFor="contactMessage">
                      Message <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-error-500' : ''}`}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-error-500/10 border border-error-500/20">
                      <AlertCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-error-600">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

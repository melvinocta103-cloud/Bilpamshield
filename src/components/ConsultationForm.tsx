import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldAlert } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { SERVICE_OPTIONS } from '@/data';
import type { ConsultationRequest } from '@/types';

interface FormErrors {
  [key: string]: string | undefined;
}

export function ConsultationForm({
  defaultService,
  onSuccess,
}: {
  defaultService?: string;
  onSuccess?: () => void;
}) {
  const [form, setForm] = useState<ConsultationRequest>({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    serviceRequired: defaultService || '',
    locationArea: '',
    preferredContact: 'phone',
    securityRequirement: '',
    preferredTime: '',
    urgency: 'normal',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: keyof ConsultationRequest, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Your name is required';
    if (!form.phone.trim()) newErrors.phone = 'A phone number is required';
    else if (form.phone.trim().length < 6) newErrors.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'An email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address';
    if (!form.serviceRequired) newErrors.serviceRequired = 'Please select a service';
    if (form.securityRequirement && form.securityRequirement.length > 1000)
      newErrors.securityRequirement = 'Please keep your description under 1000 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('consultation_requests').insert({
        name: form.name.trim(),
        organisation: form.organisation?.trim() || null,
        phone: form.phone.trim(),
        email: form.email.trim(),
        service_required: form.serviceRequired,
        location_area: form.locationArea?.trim() || null,
        preferred_contact: form.preferredContact,
        security_requirement: form.securityRequirement?.trim() || null,
        preferred_time: form.preferredTime?.trim() || null,
        urgency: form.urgency,
      });

      if (error) throw error;

      setStatus('success');
      setForm({
        name: '',
        organisation: '',
        phone: '',
        email: '',
        serviceRequired: '',
        locationArea: '',
        preferredContact: 'phone',
        securityRequirement: '',
        preferredTime: '',
        urgency: 'normal',
      });
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'We could not submit your request. Please try again or contact us directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white border border-navy-900/10 p-8 text-center animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-success-500" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">Request Received</h3>
        <p className="text-navy-700/80 leading-relaxed max-w-md mx-auto">
          Thank you for contacting Bilpam Shield Security. We have received your consultation request
          and our team will be in touch with you shortly to discuss your security needs.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-outline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-navy-900/10 p-6 md:p-8 space-y-5"
    >
      <div className="rounded-lg bg-navy-50 border border-navy-100 p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-navy-700/80 leading-relaxed">
          Please do not include sensitive operational details such as guard deployments, routes,
          schedules, access codes or patrol patterns. For sensitive information, please use a secure
          communication channel to contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field" htmlFor="name">
            Full Name <span className="text-error-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={`input-field ${errors.name ? 'border-error-500 focus:ring-error-500/30' : ''}`}
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
        </div>

        <div>
          <label className="label-field" htmlFor="organisation">
            Organisation
          </label>
          <input
            id="organisation"
            type="text"
            className="input-field"
            value={form.organisation}
            onChange={(e) => update('organisation', e.target.value)}
            placeholder="Company or organisation name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field" htmlFor="phone">
            Phone Number <span className="text-error-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`input-field ${errors.phone ? 'border-error-500 focus:ring-error-500/30' : ''}`}
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+211 ..."
          />
          {errors.phone && <p className="mt-1 text-sm text-error-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="label-field" htmlFor="email">
            Email Address <span className="text-error-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`input-field ${errors.email ? 'border-error-500 focus:ring-error-500/30' : ''}`}
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field" htmlFor="serviceRequired">
            Service Required <span className="text-error-500">*</span>
          </label>
          <select
            id="serviceRequired"
            className={`input-field ${errors.serviceRequired ? 'border-error-500 focus:ring-error-500/30' : ''}`}
            value={form.serviceRequired}
            onChange={(e) => update('serviceRequired', e.target.value)}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
          {errors.serviceRequired && (
            <p className="mt-1 text-sm text-error-500">{errors.serviceRequired}</p>
          )}
        </div>

        <div>
          <label className="label-field" htmlFor="locationArea">
            Location / Area
          </label>
          <input
            id="locationArea"
            type="text"
            className="input-field"
            value={form.locationArea}
            onChange={(e) => update('locationArea', e.target.value)}
            placeholder="e.g. Juba, or specific area"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field" htmlFor="preferredContact">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            className="input-field"
            value={form.preferredContact}
            onChange={(e) => update('preferredContact', e.target.value)}
          >
            <option value="phone">Phone Call</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div>
          <label className="label-field" htmlFor="urgency">
            Urgency Level
          </label>
          <select
            id="urgency"
            className="input-field"
            value={form.urgency}
            onChange={(e) => update('urgency', e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>
      </div>

      <div>
        <label className="label-field" htmlFor="preferredTime">
          Preferred Consultation Time
        </label>
        <input
          id="preferredTime"
          type="text"
          className="input-field"
          value={form.preferredTime}
          onChange={(e) => update('preferredTime', e.target.value)}
          placeholder="e.g. weekday mornings, or a specific date"
        />
      </div>

      <div>
        <label className="label-field" htmlFor="securityRequirement">
          General Security Requirement
        </label>
        <textarea
          id="securityRequirement"
          rows={4}
          className={`input-field resize-none ${errors.securityRequirement ? 'border-error-500 focus:ring-error-500/30' : ''}`}
          value={form.securityRequirement}
          onChange={(e) => update('securityRequirement', e.target.value)}
          placeholder="Briefly describe what you need. Please do not include sensitive operational details."
        />
        <p className="mt-1 text-xs text-navy-700/50">
          {(form.securityRequirement ?? '').length}/1000 characters
        </p>
        {errors.securityRequirement && (
          <p className="mt-1 text-sm text-error-500">{errors.securityRequirement}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-navy-900/20 text-gold-500 focus:ring-gold-500/30"
        />
        <label htmlFor="consent" className="text-sm text-navy-700/70 leading-relaxed">
          I agree to be contacted by Bilpam Shield Security regarding my enquiry, and I have read the{' '}
          <span className="text-navy-900 font-medium underline">privacy notice</span>. I understand
          my information will be handled confidentially.
        </label>
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
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Consultation Request
          </>
        )}
      </button>
    </form>
  );
}

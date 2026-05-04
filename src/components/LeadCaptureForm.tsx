'use client';

import { useMemo, useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  company: string;
};

export default function LeadCaptureForm() {
  const [values, setValues] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isDisabled = useMemo(
    () => status === 'loading' || !values.email.trim(),
    [status, values.email],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setMessage('Thanks! Your request was received and our team will follow up shortly.');
      setValues({ fullName: '', email: '', company: '' });

      if (typeof window !== 'undefined') {
        const w = window as Window & {
          gtag?: (...args: unknown[]) => void;
          hj?: (...args: unknown[]) => void;
        };

        w.gtag?.('event', 'waitlist_submit', {
          event_category: 'conversion',
          event_label: 'landing_waitlist_form',
        });

        w.hj?.('event', 'waitlist_submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
      <h3 className="text-2xl font-bold text-slate-900">Join the Axulo Waitlist</h3>
      <p className="mt-2 text-sm text-slate-600">
        Get launch updates, early access, and architecture guidance from our engineering team.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={values.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none ring-blue-300 transition placeholder:text-slate-400 focus:ring-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none ring-blue-300 transition placeholder:text-slate-400 focus:ring-2"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder="Acme AI"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none ring-blue-300 transition placeholder:text-slate-400 focus:ring-2"
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {status === 'loading' ? 'Submitting...' : 'Request Early Access'}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 rounded-lg px-3 py-2 text-sm ${
            status === 'success'
              ? 'bg-emerald-50 text-emerald-700'
              : status === 'error'
                ? 'bg-red-50 text-red-700'
                : 'bg-slate-50 text-slate-700'
          }`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}

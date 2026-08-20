'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

/**
 * Safe mode: with site.formEndpoint set to null the form validates and shows real
 * success and error states, but sends nowhere. Set the endpoint in lib/site.js to go live.
 */
export default function LeadForm({
  source = 'newsletter',
  fields = ['name', 'email'],
  buttonLabel = 'Send it to me',
  onTeal = false,
  compact = false,
}) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus('sending');
    setError('');

    if (!site.formEndpoint) {
      // Safe mode. Nothing leaves the browser.
      await new Promise((r) => setTimeout(r, 500));
      setStatus('done');
      form.reset();
      return;
    }

    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
      setError(
        `Something went wrong sending that. Please email ${site.email} instead and I will pick it up.`
      );
    }
  }

  if (status === 'done') {
    return (
      <div
        role="status"
        className={`rounded-2xl p-6 ${onTeal ? 'bg-white' : 'bg-teal-50 border border-teal-200'}`}
      >
        <p className="font-heading text-xl font-bold text-teal-700">Thank you, that is in.</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">
          {site.formEndpoint
            ? 'Check your inbox in the next few minutes. If nothing arrives, look in your promotions or junk folder.'
            : 'Note for the site owner: the form is in safe mode, so nothing was actually sent. Add your endpoint in lib/site.js to go live.'}
        </p>
      </div>
    );
  }

  const labelClass = 'block text-[0.9rem] font-semibold text-ink';
  const inputClass =
    'mt-1.5 w-full rounded-xl border-2 border-teal-100 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-teal';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className={compact ? '' : 'rounded-2xl bg-white p-6 shadow-lg'}
    >
      <input type="hidden" name="source" value={source} />

      <div className={compact ? 'grid gap-4 sm:grid-cols-2' : 'space-y-4'}>
        {fields.includes('name') && (
          <div>
            <label htmlFor={`${source}-name`} className={labelClass}>
              First name
            </label>
            <input
              id={`${source}-name`}
              name="name"
              type="text"
              required
              autoComplete="given-name"
              className={inputClass}
            />
          </div>
        )}
        {fields.includes('email') && (
          <div>
            <label htmlFor={`${source}-email`} className={labelClass}>
              Email address
            </label>
            <input
              id={`${source}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[0.9rem] text-red-800">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold mt-5 w-full disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending...' : buttonLabel}
      </button>

      <p className={`mt-3 text-center text-[0.8rem] ${onTeal ? 'text-slate' : 'text-slate'}`}>
        One email a week. Unsubscribe any time.
      </p>
    </form>
  );
}

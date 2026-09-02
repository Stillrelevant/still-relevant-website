'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

/**
 * Posts to the MailerLite embedded-form endpoint in site.newsletterEndpoint, which
 * adds the person to the Still Relevant Community group and sends them the double
 * opt-in confirmation. No API key involved: that endpoint is public by design.
 *
 * The request goes out mode: 'no-cors' because MailerLite does not send CORS
 * headers back to us. That means we cannot read the response, only that the
 * request left the browser. It is a fair trade here, because the real
 * confirmation the person gets is MailerLite's own opt-in email, not our tick.
 *
 * With newsletterEndpoint null the form falls back to safe mode: validates,
 * shows real states, sends nowhere.
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

    if (!site.newsletterEndpoint) {
      // Safe mode. Nothing leaves the browser.
      await new Promise((r) => setTimeout(r, 500));
      setStatus('done');
      form.reset();
      return;
    }

    // MailerLite expects its own field names, not ours.
    const payload = new FormData();
    payload.append('fields[email]', data.get('email') || '');
    if (data.get('name')) payload.append('fields[name]', data.get('name'));
    payload.append('ml-submit', '1');
    payload.append('anticsrf', 'true');

    try {
      await fetch(site.newsletterEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
      setError(
        `Something went wrong sending that. Please WhatsApp me on ${site.phone} instead and I will send it over.`
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
          {site.newsletterEndpoint
            ? 'Check your inbox in the next few minutes and click the confirmation link. Nothing is sent until you do. If it has not arrived, look in your promotions or junk folder.'
            : 'The signup form is not connected yet. WhatsApp me on ' +
              site.phone +
              ' and I will send the guide across myself.'}
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

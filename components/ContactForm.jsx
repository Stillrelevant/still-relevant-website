'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

const reasons = [
  'Booking a place on a public workshop',
  'Training for a team or department',
  'Speaking at an event',
  'A product or waiting list',
  'Something else',
];

const label = 'block text-[0.9rem] font-semibold text-ink';
const input =
  'mt-1.5 w-full rounded-xl border-2 border-teal-100 bg-white px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-teal';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus('sending');

    if (!site.formEndpoint) {
      await new Promise((r) => setTimeout(r, 500));
      setStatus('done');
      form.reset();
      return;
    }

    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div role="status" className="card">
        <h2 className="text-[1.5rem]">Thank you, that has come through.</h2>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">
          {site.formEndpoint
            ? 'You will get a reply within two working days. If it is urgent, email directly and put "urgent" in the subject line.'
            : 'Note for the site owner: the form is in safe mode, so nothing was actually sent. Add your endpoint in lib/site.js to go live.'}
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="organisation" className={label}>
          Organisation <span className="font-normal text-slate">(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          className={input}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="reason" className={label}>What is this about?</label>
        <select id="reason" name="reason" className={input} defaultValue={reasons[0]}>
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={6} required className={input} />
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[0.9rem] text-red-800">
          Something went wrong sending that. Please email {site.email} instead and it will get
          picked up.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-7 w-full disabled:opacity-70 sm:w-fit">
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}

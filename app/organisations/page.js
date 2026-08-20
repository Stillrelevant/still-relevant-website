import Link from 'next/link';
import CTABand from '@/components/CTABand';
import FAQ from '@/components/FAQ';
import Schema from '@/components/Schema';
import Testimonials from '@/components/Testimonials';
import Breadcrumbs from '@/components/Breadcrumbs';
import { site } from '@/lib/site';

export const metadata = {
  title: 'For Organisations',
  description:
    'Plain-English AI sessions for workplaces, membership bodies, charities and community groups. Pitched for mixed rooms, including complete beginners.',
  alternates: { canonical: `${site.url}/organisations/` },
};

const problems = [
  'Your training lost half the room in the first ten minutes, because it started with the technology.',
  'Your most experienced people have gone quiet on the subject, which is the opposite of what you need.',
  'You have a policy that says "do not", so people use their own phones instead.',
  'You paid for licences and take-up stalled at the same fifteen percent.',
  'Your managers are being asked questions they have no confident answer to.',
];

const programmes = [
  {
    title: 'Everybody in the room',
    meta: 'Half day | up to 30 people',
    body: 'One session, no assumed knowledge, pitched so the person who has never tried it and the person who uses it daily both get something. Closes the quiet divide instead of widening it.',
  },
  {
    title: 'Sessions by role',
    meta: 'Half day per group',
    body: 'Separate sessions where the work genuinely differs. Frontline staff, administrators, managers, specialists. Same ideas, applied to what each group actually does all day.',
  },
  {
    title: 'Managers and policy',
    meta: '2 hours | leadership group',
    body: 'For the people who have to answer their teams. What to allow, what to prohibit, how to review work that was produced this way, and how to write guidance people will actually follow.',
  },
  {
    title: 'Members and communities',
    meta: 'Flexible | 60 to 120 minutes',
    body: 'For professional bodies, charities, churches, U3A groups and community organisations. Warm, jargon-free sessions for audiences who did not come from a technical background and do not want to.',
  },
  {
    title: 'Sensible adoption review',
    meta: 'Consulting engagement',
    body: 'Where your real exposure sits, what your current policy misses, and a practical order for rolling this out without either paralysis or chaos.',
  },
];

const faqs = [
  {
    q: 'How technical is it?',
    a: 'Deliberately not. It is built for mixed rooms where some people are already experimenting and others have never opened one of these tools. Nobody is left behind and nobody is patronised.',
  },
  {
    q: 'Is it tied to a particular tool?',
    a: 'No. Sessions work with whatever you already have, and are built around habits that transfer when the tools change. If you have not chosen anything yet, that is worth a conversation first.',
  },
  {
    q: 'Our policy restricts AI use. Can you still help?',
    a: 'Yes, and the session is better for it. Send your policy in advance and it gets built into the material, so people leave knowing what is allowed in your organisation rather than in general. Where use is restricted, the session focuses on what your people can legitimately do.',
  },
  {
    q: 'We are a charity or a small group. Is this only for big employers?',
    a: 'Not at all. Membership bodies, charities, churches and community groups make up a good part of this work, and pricing reflects the size of the group.',
  },
  {
    q: 'On site or online?',
    a: 'Both work. On site is stronger for a whole-organisation session, online is usually more practical across multiple locations.',
  },
  {
    q: 'What does it cost?',
    a: 'Group and organisation work is quoted rather than listed, because it depends on the number of sessions, the number of people and how much tailoring is involved. Send the shape of what you need and you will get a straight figure rather than a discovery process.',
  },
];

export default function Organisations() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI education for organisations and groups',
    serviceType: 'Training and workshops',
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description:
      'Plain-English AI sessions, manager guidance, policy support and adoption help for workplaces, membership bodies, charities and community groups.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Organisation programmes',
      itemListElement: programmes.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.title, description: p.body },
      })),
    },
  };

  return (
    <>
      <Schema data={schema} />

      {/* Deliberately a different visual world from the consumer journey. */}
      <section className="bg-teal-800 py-14 sm:py-18">
        <div className="wrap">
          <div className="[&_a]:!text-teal-100 [&_span]:!text-teal-200">
            <Breadcrumbs trail={[{ label: 'For Organisations', href: '/organisations/' }]} />
          </div>
          <p className="eyebrow-gold mt-8">For organisations and groups</p>
          <h1 className="mt-3 max-w-3xl text-[2.3rem] leading-[1.1] text-white sm:text-[3rem]">
            Bringing your people along, not just your systems.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.12rem] leading-[1.65] text-teal-100">
            Most sessions on this subject lose the room in the first ten minutes, because they start
            with the technology instead of the people. These start with what your teams actually do,
            in language everybody can follow, and are built so the confidence lasts.
          </p>
          <p className="mt-6 inline-block rounded-full bg-teal-900/60 px-5 py-2 text-[0.9rem] font-semibold text-white">
            Priced on request, based on numbers and tailoring
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn-gold">
              Ask for a quote
            </Link>
            <Link href="#programmes" className="btn-onteal">
              See the programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">The usual situation</p>
            <h2 className="mt-3 text-[1.9rem] leading-tight">Recognise any of these?</h2>
            <ul className="mt-7 space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3.5 text-[0.98rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[0.95rem] leading-relaxed text-slate">
              None of these are technology problems. They are confidence and clarity problems, and
              they respond well to being addressed directly and without condescension.
            </p>
          </div>

          <div id="programmes" className="grid gap-5">
            {programmes.map((p) => (
              <div key={p.title} className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-[1.3rem]">{p.title}</h2>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal-800">
                    {p.meta}
                  </span>
                </div>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-16">
        <div className="wrap">
          <p className="eyebrow">How it runs</p>
          <h2 className="mt-3 text-[1.9rem] leading-tight">Four steps, no mystery</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['A short call', 'Thirty minutes on who your people are and where the hesitation is. No sales process.'],
              ['Tailoring', 'The material is rebuilt around your roles, your language, your policy and your constraints.'],
              ['Delivery', 'On site or online. People working on genuine things, at a pace set for understanding.'],
              ['Follow-through', 'Materials your people keep, plus optional support while the confidence settles.'],
            ].map(([t, b], i) => (
              <div key={t}>
                <span className="font-heading text-[2.2rem] font-extrabold text-teal-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-[1.15rem]">{t}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ items={faqs} title="What organisations ask first" />

      <CTABand
        eyebrow="Enquiries"
        title="Tell me about your people"
        body="Send the size, the sort of organisation and what you have already tried. You will get an honest answer about whether this is the right fit, including if it is not."
        primary={{ href: '/contact/', label: 'Make an enquiry' }}
        secondary={{ href: '/speaking/', label: 'Book a talk instead' }}
      />
    </>
  );
}

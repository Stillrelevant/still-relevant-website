import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import PhotoPanel from '@/components/PhotoPanel';
import Schema from '@/components/Schema';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Speaking',
  description:
    'Keynotes and sessions on AI, work and staying capable. Clear, warm and jargon-free, for conferences, associations, schools and community organisations.',
  alternates: { canonical: `${site.url}/speaking/` },
};

const talks = [
  {
    title: 'Still Relevant',
    sub: 'Signature keynote | 45 minutes',
    body: 'Why the people most worried about being replaced are often the ones holding the thing that cannot be automated, and what to do with that. Ends with three things the audience can act on the same week.',
    audience: 'Mixed professional audiences, conferences, membership bodies',
  },
  {
    title: 'The Confidence Gap',
    sub: '30 to 45 minutes',
    body: 'On why capable, senior people describe themselves as "not technical", what that costs organisations in wasted judgement, and how leaders can close it without buying a single new piece of software.',
    audience: 'Leadership events, professional associations',
  },
  {
    title: 'What Your Team Is Already Doing',
    sub: 'Leadership session | 45 minutes',
    body: 'A frank look at unofficial AI use inside organisations, the real risks as opposed to the imagined ones, and how to get in front of it without a ban that nobody follows.',
    audience: 'Boards, senior teams, in-house conferences',
  },
  {
    title: 'Raising Children Who Can Think',
    sub: 'Parents and schools | 45 minutes',
    body: 'For school and community audiences. How to handle AI at home, homework and honesty, and what actually matters to teach children now that answers are free.',
    audience: 'Schools, parent groups, community organisations',
  },
];

export default function Speaking() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Speaking and keynotes',
    serviceType: 'Keynote speaking',
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description:
      'Keynotes and sessions on AI, work and digital confidence for conferences, professional bodies, schools and community groups.',
  };

  return (
    <>
      <Schema data={schema} />
      <PageHero
        trail={[{ label: 'Speaking', href: '/speaking/' }]}
        eyebrow="Speaking"
        title="Talks people repeat in the car on the way home."
        lede="Conferences, professional bodies, membership organisations, schools and community groups. Clear language, real examples, and an audience that leaves feeling capable rather than warned."
      />

      <section className="py-12 sm:py-16">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {talks.map((t) => (
            <article key={t.title} className="card flex flex-col">
              <p className="eyebrow">{t.sub}</p>
              <h2 className="mt-3 text-[1.3rem] sm:text-[1.5rem]">{t.title}</h2>
              <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-slate">{t.body}</p>
              <p className="mt-5 border-t border-teal-100 pt-4 text-[0.85rem] text-slate">
                <span className="font-semibold text-teal-800">Best for:</span> {t.audience}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-12 sm:py-16">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">For organisers</p>
            <h2 className="mt-3 text-[1.5rem] leading-tight sm:text-[1.9rem]">Everything you need, early</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {[
                ['Formats', 'Keynote, breakout, panel, fireside or a hands-on session. Happy to run a practical workshop alongside a talk on the same day.'],
                ['Audiences', 'Mixed-ability and non-technical audiences are the speciality. Nobody gets left behind and nobody gets patronised.'],
                ['Logistics', 'In person across the UK, and online anywhere. Slides, bio, headshot and AV requirements supplied well ahead of the date.'],
                ['Tone', 'Warm, direct and specific. No fear-mongering, no hype, and no slide that says the robots are coming.'],
              ].map(([t, b]) => (
                <div key={t}>
                  <h3 className="text-[1.15rem]">{t}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <PhotoPanel
            src="/images/temi-print.jpg"
            alt="Temi Olajide, speaker"
            caption={{ name: site.founder, role: 'Available for events across the UK' }}
          />
        </div>
      </section>

      <CTABand
        eyebrow="Booking"
        title="Have an event coming up?"
        body="Send the date, the audience and roughly what you want them to walk away with. You will get a proposed shape for the session rather than a brochure."
        primary={{ href: '/contact/', label: 'Enquire about a date' }}
        secondary={{ href: '/organisations/', label: 'Team training instead' }}
      />
    </>
  );
}

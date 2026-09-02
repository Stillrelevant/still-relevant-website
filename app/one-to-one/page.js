import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PhotoPanel from '@/components/PhotoPanel';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Schema from '@/components/Schema';
import LeadCapture from '@/components/LeadCapture';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Work with me one to one',
  description:
    'Private AI sessions with Temi Olajide. Two and a half hours, taught at your pace, on whatever you want to be able to do. One to one from £199, done with you £449, done for you quoted per project.',
  alternates: { canonical: `${site.url}/one-to-one/` },
};

const book = site.bookingUrl || '/contact/';
const chat = site.whatsappUrl || '/contact/';

const signals = [
  'You have never really used AI and you would rather learn it properly, one to one, than sit in a room hoping to keep up.',
  'You have sat through a class, followed along fine, then opened your laptop on Monday and not known where to start with your own thing.',
  'You are running something already, a business, a practice, a side hustle, and you can feel how much time goes on work that should not need you.',
  'You want to make videos and content without it eating your whole week.',
  'You have an idea you have been carrying for months, maybe years, and the not knowing how is what keeps it sitting there.',
  'You do not want to wait two months for the next group session.',
];

const tiers = [
  {
    id: 'one-to-one',
    tag: 'Most people start here',
    name: 'One to one',
    price: '£199',
    length: '2 hours 30 minutes · online',
    line: 'A private deep dive. I teach you how to do it, at your pace, and you leave knowing how.',
    points: [
      'Built entirely around what you want to learn to do',
      'Taught step by step, with no assumed knowledge and nobody to keep up with',
      'Complete beginners genuinely welcome',
      'Recorded, and the replay is yours for life',
      'Your own set of questions to keep using afterwards',
      'Add £100 to meet in person, anywhere in the UK',
    ],
    cta: 'Book now',
    href: book,
    featured: true,
  },
  {
    id: 'done-with-you',
    tag: 'For something bigger',
    name: 'Done with you',
    price: '£449',
    length: '3 hours, plus 14 days of support',
    line: 'You build the thing, with me beside you the whole way, and for a fortnight afterwards.',
    points: [
      'Three hours actually building your thing, with me working alongside you',
      'Fourteen days of support afterwards, so you are not stuck at the first thing that breaks',
      'Best for a real project: a business system, a content engine, a launch',
      'You keep the whole thing, and you know how it works',
      'Recorded, and the replay is yours for life',
      'Add £100 to meet in person, anywhere in the UK',
    ],
    cta: 'Message me to book',
    href: chat,
  },
  {
    id: 'done-for-you',
    tag: 'By arrangement',
    name: 'Done for you',
    price: 'Quoted',
    length: 'Priced per project',
    line: 'When you would rather it was simply built, and built properly.',
    points: [
      'I build the thing, you use it',
      'Scoped and quoted after a proper conversation about what you need',
      'Suited to owners and organisations with a specific outcome in mind',
      'Handover included, so it never becomes something only I understand',
    ],
    cta: 'Tell me about the project',
    href: chat,
  },
];

const steps = [
  {
    n: 'Step 1',
    t: 'Before we meet',
    b: 'You answer a few questions when you book. What you want to be able to do, and the one thing that takes you far longer than it should. That is my preparation, so we are not spending your first half hour on introductions.',
  },
  {
    n: 'Step 2',
    t: 'We find the real thing',
    b: 'We look at what you actually do in a week and find where this genuinely helps. Not the exciting bits from the internet. The bits eating your time or blocking what you want to build.',
  },
  {
    n: 'Step 3',
    t: 'I teach you how',
    b: 'Not me doing it while you watch, and not you left to work it out. I walk you through how it works and why, you try it with me there to catch you, and we go over anything as many times as it takes.',
  },
  {
    n: 'Step 4',
    t: 'Afterwards',
    b: 'You leave knowing how to do it yourself, with your own set of questions saved somewhere you will find them. The recording is yours for life, so you can go back over any part of it whenever you like.',
  },
];

const faqs = [
  {
    q: 'Is £199 a lot for two and a half hours?',
    a: 'It is real money and you should treat it that way. Here is the honest maths though. If this gives you back three hours a week, you have paid for it inside a month and it keeps paying after that. And if it gets a project moving that has been sitting still for a year, the hours were never the point. This is an introductory price while I build up a set of results I can point to, so it will not stay here.',
  },
  {
    q: 'I have never used AI at all. Is this too advanced for me?',
    a: 'Not in the slightest, and a good number of people who book this have never opened one of these tools. There is no room to keep up with and no level to be at. We start exactly where you are, I explain everything in plain English, and we go as slowly as you need. Quite a few people actually prefer learning this way rather than in a group.',
  },
  {
    q: 'I came to one of your group sessions. Do I need this as well?',
    a: 'A lot of people who book this came from a group class, so no, you are not starting again. A class gives you the ground. This is where we go deep on your specific thing. If you left a session thinking "right, but how does this work for me", that gap is exactly what this closes.',
  },
  {
    q: 'Do I get a recording?',
    a: 'Yes. Every online session is recorded and the replay is yours for life. So there is no frantic note-taking and no worrying about remembering it all on the night. If something slips a month later, you go back and watch that bit again.',
  },
  {
    q: 'Will you build it for me in the session?',
    a: 'Not in the one to one, and that is deliberate. That session is about teaching you how to do it yourself, because that is the thing that lasts. If you want to build something with me working alongside you, that is what Done with you is for. And if you would rather I simply built it, that is Done for you.',
  },
  {
    q: 'Should I not be able to work this out myself?',
    a: 'You could, and some people do. It usually takes a few months of evenings and a fair bit of giving up and starting again. What you are paying for is someone who has already made the mistakes, so you skip that part. There is no prize for having struggled alone.',
  },
  {
    q: 'Can I not just wait for the next group class?',
    a: 'You can, and they are excellent value. The honest catch is that they only run once enough people have registered, so it tends to be every couple of months and I cannot give you a firm date. Private sessions run every week and you choose the evening. If waiting is fine, wait. If it is not, this is the way in.',
  },
  {
    q: 'I am not technical. Will I keep up?',
    a: 'You will. There is no group to keep up with, which is rather the point of a private session. We go at your pace, and if something needs saying three different ways before it lands, we say it three different ways. You also have the recording afterwards, so nothing is lost if you do not catch it first time.',
  },
  {
    q: 'What do I need to have ready?',
    a: 'A laptop or tablet, a free account on one of the main AI tools, and something real you want to get done. If setting up the account is the bit stopping you, come ten minutes early and we sort it together.',
  },
  {
    q: 'What if I have no idea what to work on?',
    a: 'Then say so when you book and we spend the first part finding it. Most people who say this do have something, they just have not said it out loud yet.',
  },
  {
    q: 'Are these online or in person?',
    a: 'Online as standard, and honestly most people prefer it. You are working on your own machine, in your own setup, with everything already logged in, so what you build in the session still works on Monday. If you would rather do it face to face, add £100 and I will come to you anywhere in the UK. Say so when you book.',
  },
  {
    q: 'How do I pay?',
    a: 'Book your slot first, then send me a WhatsApp on ' + site.phone + ' and I will send you the payment details. Your slot is held for 24 hours and confirmed once payment comes through. Sessions are non-refundable once booked, but you can reschedule free of charge with at least 48 hours notice.',
  },
  {
    q: 'Can I do this for my team instead?',
    a: 'Yes. Team and organisation work is priced separately depending on numbers and how much tailoring it needs. The For Organisations page has the detail.',
  },
];

export default function OneToOne() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'One to one AI sessions',
    serviceType: 'Private teaching and consulting',
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description:
      'Private AI sessions taught at your pace, built around whatever you want to be able to do.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ways to work together',
      itemListElement: tiers.map((t) => ({
        '@type': 'Offer',
        name: t.name,
        description: t.line,
        ...(t.price.startsWith('£')
          ? { price: t.price.replace('£', ''), priceCurrency: 'GBP' }
          : {}),
      })),
    },
  };

  return (
    <>
      <Schema data={schema} />

      {/* Hero */}
      <section className="border-b border-teal-100 bg-teal-50/60 py-12 sm:py-16">
        <div className="wrap">
          <Breadcrumbs trail={[{ label: 'Work with me', href: '/one-to-one/' }]} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Private sessions with Temi Olajide</p>
              <h1 className="mt-3 text-[1.9rem] leading-[1.12] sm:text-[2.7rem]">
                Two and a half hours. Just you and me. And nobody to keep up with.
              </h1>
              <p className="mt-6 lede">
                A proper deep dive into how to actually use this, taught at your pace, built around
                what you want to do with it. Whether you have never opened one of these tools or you
                have been fiddling with it for months, you leave knowing how to do it yourself. Every
                online session is recorded, and the replay is yours for life.
              </p>

              <p className="mt-6 text-[1.05rem] text-ink">
                <span className="font-heading text-[1.6rem] font-bold text-teal-700">From £199</span>{' '}
                <span className="text-slate">
                  · 2 hours 30 minutes · online · recording yours for life
                </span>
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={book} className="btn-primary">
                  Book now
                </a>
                <Link href="#ways" className="btn-ghost">
                  See the options
                </Link>
              </div>
            </div>

            <PhotoPanel
              src="/images/temi-formal.jpg"
              alt="Temi Olajide"
              accent="gold"
              caption={{ name: site.founder, role: 'AI Educator | Strategy Consultant' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-14 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.2rem]">
              Whether you are starting from nothing or already halfway
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-slate">
              Some people book this because they have never touched it and would rather learn one to
              one than in a room. Others book it because they already know what they want and need
              someone to show them how. Both are welcome, and both get the same thing: my full
              attention for two and a half hours.
            </p>
          </div>

          <ul className="space-y-3.5">
            {signals.map((r) => (
              <li
                key={r}
                className="rounded-2xl border-l-4 border-gold bg-teal-50/60 px-6 py-4 text-[0.98rem] leading-relaxed text-ink"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What actually happens */}
      <section className="border-y border-teal-100 bg-teal-50/50 py-14 sm:py-20">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">What actually happens</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.2rem]">
              No slides, no lecture. You are trying it yourself within ten minutes.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-teal-600">
                  {s.n}
                </span>
                <h3 className="mt-1.5 text-[1.15rem]">{s.t}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-slate">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The three tiers */}
      <section id="ways" className="py-14 sm:py-20">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Three ways to do this</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.2rem]">
              Pick the one that matches how much you want to carry yourself
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.id}
                className={`flex flex-col rounded-2xl p-7 ${
                  t.featured
                    ? 'border-2 border-teal bg-white shadow-[0_10px_36px_rgba(13,92,107,0.14)]'
                    : 'border border-teal-100 bg-white'
                }`}
              >
                <span
                  className={`w-fit rounded-full px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] ${
                    t.featured ? 'bg-gold text-teal-900' : 'bg-teal-50 text-teal-800'
                  }`}
                >
                  {t.tag}
                </span>
                <h3 className="mt-4 text-[1.5rem]">{t.name}</h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">{t.line}</p>

                <div className="mt-6 border-y border-teal-100 py-5">
                  <span className="font-heading text-[2rem] font-bold text-teal-700">{t.price}</span>
                  <span className="mt-1 block text-[0.85rem] text-slate">{t.length}</span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href={t.href}
                  className={`mt-7 w-full ${t.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {t.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-gold bg-gold-100 px-6 py-6">
            <p className="text-[1.05rem] font-semibold text-teal-900">
              How booking and payment work
            </p>
            <ol className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-teal-900/90">
              <li>
                <span className="font-semibold">1.</span> Pick your slot on{' '}
                <a href={book} className="font-semibold underline underline-offset-4">
                  the booking calendar
                </a>
                . Sessions run Monday, Wednesday and Friday evenings, 7pm to 10:30pm UK time.
              </li>
              <li>
                <span className="font-semibold">2.</span> Send me a WhatsApp on{' '}
                <a href={chat} className="font-semibold underline underline-offset-4">
                  {site.phone}
                </a>{' '}
                and I will send you the payment details.
              </li>
              <li>
                <span className="font-semibold">3.</span> Your slot is held for 24 hours and
                confirmed once payment comes through.
              </li>
            </ol>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-teal-900/80">
              Sessions are non-refundable once booked, but you can reschedule free of charge with at
              least 48 hours notice.
            </p>
          </div>
        </div>
      </section>

      {/* Why book this instead of waiting */}
      <section className="bg-teal-800 py-14 sm:py-20">
        <div className="wrap max-w-3xl">
          <p className="eyebrow-gold">Why people book this instead of waiting</p>
          <h2 className="mt-3 text-[1.55rem] leading-tight text-white sm:text-[2.2rem]">
            Group sessions run every couple of months. This runs every week.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-teal-100">
            My group classes only go ahead once enough people have registered, so they happen roughly
            every two months and I cannot promise you a date. Private sessions are guaranteed.
            Monday, Wednesday and Friday evenings, and you pick the one that suits you.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-teal-100">
            So if you do not want to wait, or you would simply rather learn one to one than in a
            room, this is the way in. It is the same teaching, at your pace, on what you care about.
          </p>
          <a href={book} className="btn-onteal mt-8">
            Book now
          </a>
        </div>
      </section>

      {/* Who I am */}
      <section className="py-14 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <PhotoPanel src="/images/temi-relaxed.jpg" alt="Temi Olajide" />
          <div>
            <p className="eyebrow">Who you would be working with</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.2rem]">
              I spent years translating between the people who understand the technical detail and
              the people who have to act on it.
            </h2>
            <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                Business strategy, business analysis and data. That background turns out to matter
                more than being technical, because most of the problem here is translation, not
                technology.
              </p>
              <p>
                What got me doing this properly was watching capable people, people with twenty and
                thirty years of hard-won judgement, call themselves &ldquo;not technical&rdquo; and
                go quiet. Not because they could not understand it. Because every explanation on
                offer was written by somebody who had forgotten what it is like not to already know.
              </p>
              <p>
                Your experience is not made irrelevant by any of this. It is the reason you will use
                it well, because you already have the judgement and the context. This just puts
                proper tools behind what you already know.
              </p>
            </div>
            <Link href="/about/" className="btn-ghost mt-8">
              More about me
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={faqs} title="The things people ask me" />

      {/* Final CTA */}
      <section className="py-14 sm:py-20">
        <div className="wrap">
          <div className="rounded-3xl border-2 border-gold bg-gold-100 px-6 py-12 text-center sm:px-12">
            <p className="eyebrow !text-teal-900">Ready when you are</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-[1.6rem] leading-tight text-teal-900 sm:text-[2.3rem]">
              Two and a half hours from now, you could actually know how to do this.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-teal-900/85">
              Pick an evening that suits you, answer a few questions so I can prepare properly, and
              bring whatever you want to learn to do. No experience needed, and the recording is
              yours afterwards.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={book} className="btn-primary">
                Book now
              </a>
              <a href={chat} className="btn-ghost !border-teal-800 !text-teal-900 hover:!bg-white">
                Ask me a question first
              </a>
            </div>
            <p className="mt-6 text-[0.9rem] text-teal-900/80">
              Pick a slot, then WhatsApp me on {site.phone} for payment details.
            </p>
          </div>
        </div>
      </section>

      <LeadCapture
        eyebrow="Not ready yet"
        title="Take the free guide instead"
        body="No hard feelings. Start with the free guide, see whether any of this is for you, and come back when the timing is right."
      />
    </>
  );
}

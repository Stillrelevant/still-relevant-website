import Link from 'next/link';
import PageHero from '@/components/PageHero';
import LeadCapture from '@/components/LeadCapture';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Schema from '@/components/Schema';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Learn',
  description:
    'Live, plain-English AI sessions for adults 40+. No jargon, no assumed knowledge, and nothing that expects you to become technical.',
  alternates: { canonical: `${site.url}/learn/` },
};

const book = site.bookingUrl || '/contact/';
const chat = site.whatsappUrl || '/contact/';

const courses = [
  {
    name: 'Where Do I Fit In?',
    level: 'Never used it, or tried once',
    length: '90 minutes',
    price: '£45',
    summary:
      'The one to come to first. What this actually is, what it is genuinely useful for, and where it could fit into your life. Nothing technical, nothing assumed, and no laptop skills required.',
    points: [
      'Three specific things it could do for your life, not somebody else’s',
      'Your first real attempt, done with help, in the session',
      'The two rules that keep you safe',
    ],
  },
  {
    name: 'Asking Better Questions',
    level: 'Tried it, unsure you are doing it right',
    length: '2 hours',
    price: '£65',
    summary:
      'If you have typed something in, got something bland back and quietly given up, this is the fix. How to ask so you get answers worth having, and how to keep the conversation going when the first reply misses.',
    points: [
      'Why your first attempts disappointed you, and what to change',
      'How to push back and get something better',
      'A small set of your own questions that work, to take away',
    ],
  },
  {
    name: 'AI for Everyday Life',
    level: 'Anyone, no work context needed',
    length: '4 hours',
    price: '£110',
    summary:
      'Nothing to do with jobs. Family, travel, letters, food, gardening, hobbies, learning and keeping on top of things. For people who want this for their actual life rather than their CV.',
    points: [
      'Letters and paperwork made understandable',
      'Planning, learning and the things you keep meaning to sort',
      'Ideas for time with children and grandchildren',
    ],
  },
  {
    name: 'Better Prepared for Work',
    level: 'Working professionals and managers',
    length: '4 hours',
    price: '£150',
    summary:
      'Built for people whose employer may not allow AI at work at all. Everything here happens on your own time and your own device, and none of it needs a single piece of company information.',
    points: [
      'Preparing properly for meetings, interviews and decisions',
      'Understanding the parts of your work you have nodded along to',
      'Staying firmly inside your organisation’s rules',
    ],
  },
  {
    name: 'What’s Next',
    level: 'Fifties, sixties, seventies and beyond',
    length: '4 hours',
    price: '£110',
    summary:
      'For the project you have been meaning to start. A book, a small business, a community group, a bit of extra income, or something you set aside years ago and have never quite let go of.',
    points: [
      'Turning one big idea into a sequence you can actually begin',
      'Testing it privately before telling anybody',
      'The practical bits nobody explains properly',
    ],
  },
  {
    name: 'Careful and Confident',
    level: 'Anyone who wants the rules clear',
    length: '90 minutes',
    price: '£50',
    summary:
      'Where the real risks sit and how to stay well clear of them. What is safe to type in, what is not, how to spot a confident wrong answer, and how to keep your own judgement in charge.',
    points: [
      'What never goes in, and why it matters',
      'How to check an answer in under a minute',
      'Scams and nonsense, and how to recognise them',
    ],
  },
];

// Must stay in step with app/one-to-one/page.js and the standalone sales page.
// One to one TEACHES you. Done with you BUILDS alongside you. Do not blur those,
// the whole price ladder rests on the difference.
const privateTiers = [
  {
    id: 'one-to-one',
    tag: 'Most people start here',
    name: 'One to one',
    price: '£199',
    length: '2 hours 30 minutes · online',
    line: 'A private deep dive. I teach you how to do it, at your pace, and you leave knowing how.',
    points: [
      'Built entirely around what you want to learn to do',
      'No assumed knowledge, and complete beginners genuinely welcome',
      'Recorded, and the replay is yours for life',
      'Your own set of questions to keep using afterwards',
      'Add £100 to meet in person, anywhere in the UK',
    ],
    cta: 'Book now',
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
      'Add £100 to meet in person, anywhere in the UK',
    ],
    cta: 'Message me to book',
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
  },
];

const faqs = [
  {
    q: 'What do I need to bring?',
    a: 'A laptop or tablet, a free account on one of the main AI tools, and a bit of curiosity. If you cannot work out how to set the account up, come ten minutes early and it gets sorted with you.',
  },
  {
    q: 'What if I am the least confident person in the room?',
    a: 'You will not be, and even if you were, nobody would know. Groups are small, the pace is set for understanding rather than keeping up, and the questions people think are basic are usually the ones half the room wanted to ask.',
  },
  {
    q: 'Will I have to speak or share my screen?',
    a: 'Only if you want to. You can work quietly on your own things and ask for help privately in the chat.',
  },
  {
    q: 'My employer does not allow AI. Should I still come?',
    a: 'Yes. Most of what we do has nothing to do with your employer’s systems, and the work-focused session is deliberately built around what you can do on your own time and your own device.',
  },
  {
    q: 'Do I get anything to keep?',
    a: 'Yes. You leave with the questions you built during the session, a written summary in plain English, and whatever you came in wanting to get done.',
  },
  {
    q: 'Can these be run privately for a group?',
    a: 'Yes. Any of them can be run for a workplace, a membership group, a community organisation or a church. See the For Organisations page.',
  },
];

export default function Learn() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: c.name,
        description: c.summary,
        provider: { '@id': `${site.url}/#organization` },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: c.length,
        },
      },
    })),
  };

  return (
    <>
      <Schema data={schema} />
      <PageHero
        trail={[{ label: 'Learn', href: '/learn/' }]}
        eyebrow="Learn"
        title="Small groups. Plain English. Nobody made to feel behind."
        lede="Sessions are capped so you get proper attention, and pitched for people who have either never tried this or tried once and quietly given up. You leave having actually done something, not just watched."
      />

      <section className="py-12 sm:py-16">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Group sessions</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2rem]">Learn alongside other people</h2>
            <p className="mt-4 lede">
              Every price below is for a place in a small group class. Numbers are capped so you
              still get proper attention, and everyone in the room is at roughly the same stage.
            </p>
          </div>
        </div>

        <div className="wrap mt-10 grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <article key={c.name} className="card flex flex-col">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-teal-50 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal-800">
                  {c.level}
                </span>
                <span className="rounded-full bg-gold-100 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal-900">
                  {c.length}
                </span>
              </div>
              <h2 className="mt-4 text-[1.28rem] sm:text-[1.45rem]">{c.name}</h2>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">{c.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.93rem] leading-relaxed text-ink">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-teal-100 pt-5">
                <span>
                  <span className="font-heading text-[1.35rem] font-bold text-teal-700">
                    {c.price}
                  </span>
                  <span className="ml-2 text-[0.8rem] text-slate">per place, group class</span>
                </span>
                <Link href="/contact/" className="btn-primary !min-h-[46px] !px-6 !py-2.5">
                  Register interest
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Private sessions */}
      <section className="border-y border-teal-100 bg-teal-50/50 py-12 sm:py-16">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Private sessions with Temi Olajide</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.2rem]">
              Two and a half hours. Just you and me. And nobody to keep up with.
            </h2>
            <p className="mt-4 lede">
              A proper deep dive into how to actually use this, taught at your pace, built around
              what you want to do with it. Whether you have never opened one of these tools or you
              have been fiddling with it for months, you leave knowing how to do it yourself. Every
              online session is recorded, and the replay is yours for life.
            </p>
            <p className="mt-5 text-[1.02rem] text-ink">
              <span className="font-heading text-[1.6rem] font-bold text-teal-700">From £199</span>{' '}
              <span className="text-slate">
                · 2 hours 30 minutes · online · recording yours for life
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={book} className="btn-primary">
                Book now
              </a>
              <Link href="/one-to-one/#ways" className="btn-ghost">
                See the options
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {privateTiers.map((t) => (
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
                  href={t.id === 'one-to-one' ? book : chat}
                  className={`mt-7 w-full ${t.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {t.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border-2 border-teal-100 bg-white px-6 py-5 text-[0.95rem] leading-relaxed text-slate">
            <span className="font-semibold text-teal-800">Running something for a group of your own?</span>{' '}
            Workplaces, membership bodies, charities, churches and community groups are priced
            separately depending on numbers and how much tailoring is involved.{' '}
            <Link href="/organisations/" className="link-teal">
              Ask for a quote
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-12 sm:py-16">
        <div className="wrap grid gap-8 md:grid-cols-3">
          {[
            ['Small groups', 'Numbers are kept deliberately low. You are not going to be one of two hundred people in a webinar.'],
            ['No jargon', 'If a word needs explaining, it gets explained. Nobody is expected to already know what any of it means.'],
            ['Your things, not mine', 'No sample exercises. You bring whatever you would actually like to get done, from work or from home.'],
          ].map(([t, b]) => (
            <div key={t}>
              <h2 className="text-[1.2rem]">{t}</h2>
              <p className="mt-2.5 text-[0.94rem] leading-relaxed text-slate">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ items={faqs} title="Before you book" />
      <LeadCapture />
    </>
  );
}

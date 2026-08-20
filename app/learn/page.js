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

const courses = [
  {
    name: 'Where Do I Fit In?',
    level: 'Never used it, or tried once',
    length: '90 minutes, online',
    price: 'From £35',
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
    length: '2 hours, online',
    price: 'From £45',
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
    length: 'Half day, online',
    price: 'From £95',
    summary:
      'Nothing to do with jobs. Family, travel, letters, food, gardening, hobbies, learning and keeping on top of things. For people who want this for their actual life rather than their CV.',
    points: [
      'Letters and paperwork made understandable',
      'Planning, learning and the things you keep meaning to sort',
      'Ideas for time with children and grandchildren',
    ],
  },
  {
    name: 'Better Prepared at Work',
    level: 'Working professionals and managers',
    length: 'Half day, online',
    price: 'From £110',
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
    length: 'Half day, online',
    price: 'From £95',
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
    length: '90 minutes, online',
    price: 'From £40',
    summary:
      'Where the real risks sit and how to stay well clear of them. What is safe to type in, what is not, how to spot a confident wrong answer, and how to keep your own judgement in charge.',
    points: [
      'What never goes in, and why it matters',
      'How to check an answer in under a minute',
      'Scams and nonsense, and how to recognise them',
    ],
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

      <section className="py-16">
        <div className="wrap grid gap-6 md:grid-cols-2">
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
              <h2 className="mt-4 text-[1.45rem]">{c.name}</h2>
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
                <span className="font-heading text-[1.2rem] font-bold text-teal-700">{c.price}</span>
                <Link href="/contact/" className="btn-primary !min-h-[46px] !px-6 !py-2.5">
                  Register interest
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-16">
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

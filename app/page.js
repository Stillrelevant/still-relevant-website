import Link from 'next/link';
import Explorer from '@/components/Explorer';
import ArticleCard from '@/components/ArticleCard';
import LeadForm from '@/components/LeadForm';
import LeadCapture from '@/components/LeadCapture';
import PhotoPanel from '@/components/PhotoPanel';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { getArticles } from '@/lib/articles';
import { site, worlds } from '@/lib/site';

export const metadata = {
  title: 'Still Relevant | AI is changing the world. Here is where you fit in.',
  description:
    'Still Relevant helps adults 40+ find practical ways to use AI in everyday life, work and whatever comes next. Plain English, no jargon, nothing technical.',
  alternates: { canonical: '/' },
};

const thoughts = [
  'I don’t really understand this.',
  'I’m not sure how it applies to me.',
  'I’ve tried ChatGPT, but I don’t know if I’m using it properly.',
  'My workplace doesn’t allow AI, so I don’t see how it’s relevant.',
  'Is this really something I need?',
];

const offers = [
  {
    tag: 'Start here',
    title: 'Where Do I Fit In?',
    meta: 'Live session | 90 minutes | online',
    body: 'The one to come to first. No jargon, no assumed knowledge, and no laptop skills required. You leave knowing three specific things AI could do for your life, and having tried one of them.',
    href: '/learn/',
    cta: 'See dates and details',
  },
  {
    tag: 'Free',
    title: 'The Where Do I Start guide',
    meta: 'Short guide | straight to your inbox',
    body: 'A plain-English guide to the handful of things worth trying first, in the order worth trying them. Written for people who are curious but not convinced, which is most people.',
    href: '/guide/',
    cta: 'Send it to me',
  },
];

const faqs = [
  {
    q: 'My workplace doesn’t allow AI. Is this still relevant to me?',
    a: 'Yes, and this is the most common thing people say. Your employer’s policy controls what company information goes into these tools. It does not control what you understand, how well prepared you walk into a meeting, or what you learn on a Sunday afternoon. Most of what we cover happens on your own time and your own device.',
  },
  {
    q: 'I’m not technical. Is that a problem?',
    a: 'Not at all. You do not need to become a tech person, and nothing here will try to make you one. If a word needs explaining, it gets explained, and nobody is expected to already know.',
  },
  {
    q: 'I tried ChatGPT once and it was disappointing. What did I do wrong?',
    a: 'Almost certainly nothing except ask it a very short question. These tools respond to how you ask more than anything else. Learning to ask better questions takes an afternoon and changes what you get back completely.',
  },
  {
    q: 'Am I too old for this?',
    a: 'No, and it is the wrong question. The hard part of using AI well is knowing what a good answer looks like and spotting when something is wrong. That takes years of life and work to build, and you already have it.',
  },
  {
    q: 'Do I need to pay for anything to get started?',
    a: 'No. A free account on one of the main tools is enough for everything we cover, and you will never be told you need a subscription to take part.',
  },
  {
    q: 'What if I only want this for personal things, not work?',
    a: 'That is a perfectly normal reason to be here. A large part of what we cover is nothing to do with jobs: family, travel, hobbies, learning, letters, planning and the things you have always meant to start.',
  },
];

export default function Home() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-teal-50 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
        />
        <div className="wrap relative grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="eyebrow">For adults 40 and beyond</p>
            <h1 className="mt-4 text-[1.95rem] leading-[1.12] sm:text-[3.3rem] lg:text-[3.8rem]">
              AI is changing the world. Here&rsquo;s where you fit in.
            </h1>
            <p className="mt-6 max-w-xl lede">
              You don&rsquo;t have to become a tech person. You just need to see what&rsquo;s
              actually possible, and where it could genuinely make your life easier. That is what
              Still Relevant is for.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/start/" className="btn-primary">
                Show me what&rsquo;s possible
              </Link>
              <Link href="/learn/" className="btn-ghost">
                See the sessions
              </Link>
            </div>

            <div className="mt-10 max-w-lg rounded-2xl border-2 border-teal-100 bg-white p-5">
              <p className="text-[0.92rem] font-semibold text-ink">
                Or start with the free guide. Where to begin, in plain English.
              </p>
              <div className="mt-3">
                <LeadForm source="hero" compact buttonLabel="Send me the guide" />
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <PhotoPanel
              src="/images/temi-relaxed.jpg"
              alt="Temi Olajide, AI educator and strategy consultant"
              caption={{ name: site.founder, role: 'AI Educator | Strategy Consultant' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Recognition, not fear */}
      <section className="py-14 sm:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Where most people are</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.5rem]">
              Most people aren&rsquo;t frightened of AI. They just can&rsquo;t see where they come
              into it.
            </h2>
            <p className="mt-5 lede">
              It gets talked about as something technical, aimed at younger people, mostly about
              jobs and computers. So a lot of capable, intelligent adults switch off long before
              they find out what it could actually do for them.
            </p>
          </div>

          <div>
            <ul className="space-y-3.5">
              {thoughts.map((t) => (
                <li
                  key={t}
                  className="rounded-2xl border-l-4 border-gold bg-teal-50/60 px-6 py-4 text-[1.02rem] leading-relaxed text-ink"
                >
                  &ldquo;{t}&rdquo;
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[1rem] leading-relaxed text-slate">
              If any of those sound like you, you are in exactly the right place. That gap is the
              whole reason Still Relevant exists, and nothing here will make you feel silly for
              being in it.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Possibilities before persuasion */}
      <Explorer />

      {/* 4. The three worlds */}
      <section className="py-14 sm:py-20">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Three places it helps</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.5rem]">
              More parts of your life than you might realise
            </h2>
            <p className="mt-4 lede">
              Everything on this site sits in one of three worlds. Start with whichever matters most
              to you right now.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {worlds.map((w) => (
              <Link key={w.slug} href={`/topics/${w.slug}/`} className="card group flex flex-col">
                <p className="eyebrow">{w.tagline}</p>
                <h3 className="mt-3 text-[1.5rem] leading-snug group-hover:text-teal">{w.name}</h3>
                <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-slate">{w.blurb}</p>
                <span className="mt-6 text-[0.9rem] font-semibold text-teal">
                  Have a look <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The workplace objection, answered head on */}
      <section className="border-y border-teal-100 bg-teal-50/50 py-14 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">The thing people say most often</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.4rem]">
              &ldquo;My workplace doesn&rsquo;t allow AI, so this isn&rsquo;t for me.&rdquo;
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
              I hear this constantly, and it is based on a fair assumption that turns out to be
              wrong. Your employer&rsquo;s policy controls what company information goes into these
              tools. It does not control what you understand, how prepared you are when you walk
              into a room, or what you can learn on a Sunday afternoon.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
              Almost nothing on the right involves your employer&rsquo;s data at all.
            </p>
            <Link href="/articles/my-workplace-doesnt-allow-ai/" className="btn-primary mt-8">
              Read the full answer
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'Prepare for a difficult meeting',
              'Understand something complicated',
              'Practise for an interview',
              'Think through a career decision',
              'Improve something you have written',
              'Research an idea properly',
              'Plan a project',
              'Work out the right questions to ask',
            ].map((x) => (
              <li
                key={x}
                className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 text-[0.95rem] leading-relaxed text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-[0.7rem] font-bold text-teal-900"
                >
                  &#10003;
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Founder */}
      <section className="py-14 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <PhotoPanel
            src="/images/temi-formal.jpg"
            alt="Temi Olajide"
            accent="gold"
          />
          <div>
            <p className="eyebrow">Who is behind this</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.4rem]">
              I teach the way I wish someone had explained it to me.
            </h2>
            <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-slate">
              <p>
                My background is business strategy, business analysis and data. Years spent sitting
                between the people who understand the technical detail and the people who have to
                act on it, translating in both directions. That turns out to be exactly the right
                preparation for this, because most of the problem is translation.
              </p>
              <p>
                What pushed me into doing it properly was watching capable people, people with
                twenty and thirty years of hard-won judgement, describe themselves as &ldquo;not
                technical&rdquo; and go quiet. Not because they could not understand it, but because
                every explanation on offer was written by someone who had forgotten what it is like
                not to already know.
              </p>
              <p>
                Your experience is not made irrelevant by any of this. In most situations it is
                precisely what lets you use these tools well, because you already have the judgement
                and the context. AI just helps you do more with what you already know.
              </p>
            </div>
            <Link href="/about/" className="btn-ghost mt-8">
              More about me
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Two featured offers */}
      <section className="border-t border-teal-100 py-11 sm:py-14 sm:py-20">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Where most people start</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.5rem]">Two good first steps</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offers.map((o) => (
              <article key={o.title} className="card flex flex-col">
                <span className="w-fit rounded-full bg-gold px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-teal-900">
                  {o.tag}
                </span>
                <h3 className="mt-4 text-[1.3rem] sm:text-[1.5rem]">{o.title}</h3>
                <p className="mt-1.5 text-[0.85rem] font-semibold uppercase tracking-wider text-slate">
                  {o.meta}
                </p>
                <p className="mt-4 flex-1 text-[0.96rem] leading-relaxed text-slate">{o.body}</p>
                <Link href={o.href} className="btn-primary mt-7 w-full sm:w-fit">
                  {o.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* 8. Corporate band, deliberately a different visual world */}
      <section className="bg-teal-800 py-14 sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow-gold">For organisations</p>
            <h2 className="mt-3 text-[1.55rem] leading-tight text-white sm:text-[2.5rem]">
              Bringing your people along, not just your systems
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-teal-100">
              Most AI training loses the room in the first ten minutes, because it starts with the
              technology instead of the people. Sessions for organisations start with what your
              teams actually do, in language everybody in the room can follow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/organisations/" className="btn-gold">
                See how it works
              </Link>
              <Link href="/contact/" className="btn-onteal">
                Make an enquiry
              </Link>
            </div>
          </div>
          <ul className="space-y-3.5">
            {[
              'Sessions pitched for mixed rooms, including complete beginners',
              'Nothing that makes experienced staff feel behind',
              'Built around your own policy on what is and is not allowed',
              'Support afterwards so the confidence actually lasts',
            ].map((x) => (
              <li key={x} className="flex gap-3.5 text-[0.98rem] leading-relaxed text-white">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-[0.75rem] font-bold text-teal-900"
                >
                  &#10003;
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Latest articles */}
      <section className="py-14 sm:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow">Reading</p>
              <h2 className="mt-3 text-[1.55rem] leading-tight sm:text-[2.5rem]">Start here, free</h2>
            </div>
            <Link href="/articles/" className="link-teal text-[0.95rem]">
              All articles <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQ items={faqs} />

      {/* 11. Final capture, brand gold */}
      <LeadCapture variant="gold" />
    </>
  );
}

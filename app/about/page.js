import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import PhotoPanel from '@/components/PhotoPanel';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About',
  description:
    'Temi Olajide helps adults 40+ understand AI and find practical ways to use it in everyday life, work and whatever comes next.',
  alternates: { canonical: `${site.url}/about/` },
};

const beliefs = [
  {
    title: 'Nobody learns while feeling stupid',
    body: 'The fastest way to stop an intelligent adult learning something is to make them feel behind. So we start from what you already know how to do, which is nearly always more relevant than you think.',
  },
  {
    title: 'Show the possibilities first',
    body: 'People do not need convincing that AI exists. They need to see what it could do for someone like them. Once that lands, the how becomes easy.',
  },
  {
    title: 'Plain words, always',
    body: 'No prompts, models, agents or any of the rest of it. If something has a simpler name, we use the simpler name. If it needs explaining, it gets explained.',
  },
  {
    title: 'Say the honest thing',
    body: 'If a tool is not worth the money, I will say so. If the popular advice is nonsense, I will say that too. You can get enthusiasm anywhere. Useful is rarer.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        trail={[{ label: 'About', href: '/about/' }]}
        eyebrow="About"
        title="You don’t have to become a tech person."
        lede="You just need to understand what’s useful to you. That sentence is more or less the whole reason Still Relevant exists."
      />

      <section className="py-16">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-sr max-w-none">
            <p>
              My background is business strategy, business analysis and data. Years of sitting
              between the people who understand the technical detail and the people who have to act
              on it, translating in both directions. That turns out to be exactly the right
              preparation for this work, because most of the problem is translation.
            </p>
            <p>
              What pushed me into doing it properly was noticing the same thing over and over.
              Capable, intelligent adults, with twenty and thirty years of hard-won judgement,
              describing themselves as &ldquo;not technical&rdquo; and quietly stepping out of the
              conversation. Not because they could not understand it. Because every explanation on
              offer was written by someone who had forgotten what it is like not to already know.
            </p>

            <h2>The thing that changed how I teach</h2>
            <p>
              I ran a workshop and the flyer had the word AI on it. Afterwards, several people told
              me they had almost not come, because their workplace does not allow AI, so they
              assumed there was nothing in it for them.
            </p>
            <p>
              That was the moment it clicked. When people hear AI, they picture a job, a computer
              system and somebody else&rsquo;s permission. So the possibilities never get a hearing.
            </p>
            <p>
              Now I show what is possible before asking anybody to be interested in the technology.
              The question I want this whole site to answer is a simple one:{' '}
              <strong>what could this actually do for someone like me?</strong>
            </p>

            <h2>Who I work with</h2>
            <p>
              Adults 40 and beyond, and particularly people in their fifties, sixties and seventies.
              Working professionals and managers. Business owners and people starting something new.
              Career changers. People approaching retirement or already there. Grandparents,
              lifelong learners, and anybody with a project they have been meaning to get to.
            </p>
            <p>
              What they have in common is not a job title. It is that they are capable, busy, and
              tired of being talked at by people who assume they know nothing worth knowing.
            </p>

            <h2>What I will not do</h2>
            <p>
              I will not tell you that you have fallen behind, because most people have not. I will
              not sell you a list of fifty tools. I will not run a session where everybody watches
              me type. And I will not pretend these systems are more reliable than they are, because
              you would find out the hard way and then rightly trust nothing else I said.
            </p>

            <h2>Beyond this work</h2>
            <p>
              I also work as a parent strategist, helping career mothers hold both halves of their
              life together without dropping either. Different audience, same instinct. Take a
              capable person, clear the noise and the guilt out of the way, and give them something
              they can actually use on a Tuesday.
            </p>
          </div>

          <aside className="space-y-6 lg:pt-2">
            <PhotoPanel
              src="/images/temi-formal.jpg"
              alt="Temi Olajide"
              accent="gold"
              caption={{ name: site.founder, role: 'AI Educator | Strategy Consultant' }}
            />
            <div className="rounded-3xl border-2 border-teal-100 bg-teal-50/50 p-8">
              <p className="eyebrow">In short</p>
              <ul className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink">
                <li>
                  <strong className="font-semibold">Based:</strong> United Kingdom, working with
                  people everywhere.
                </li>
                <li>
                  <strong className="font-semibold">Background:</strong> business strategy, business
                  analysis, data analytics.
                </li>
                <li>
                  <strong className="font-semibold">Focus:</strong> practical AI education for
                  adults 40+, plus responsible adoption for organisations.
                </li>
                <li>
                  <strong className="font-semibold">Style:</strong> warm, direct, allergic to
                  jargon.
                </li>
              </ul>
              <Link href="/contact/" className="btn-primary mt-8 w-full">
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-16">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">How I teach</p>
            <h2 className="mt-3 text-[2rem] leading-tight sm:text-[2.4rem]">
              Four rules I do not break
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {beliefs.map((b) => (
              <div key={b.title} className="card">
                <h3 className="text-[1.2rem]">{b.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Next step"
        title="Have a look at what’s possible"
        body="Around forty ordinary things AI could do for someone like you, in plain English. Read down the list and see which ones you recognise."
        primary={{ href: '/start/', label: 'Show me what’s possible' }}
        secondary={{ href: '/learn/', label: 'See the sessions' }}
      />
    </>
  );
}

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import LeadCapture from '@/components/LeadCapture';
import FAQ from '@/components/FAQ';
import { site, worlds } from '@/lib/site';

export const metadata = {
  title: 'Start here',
  description:
    'What could AI actually do for someone like me? Around forty ordinary examples across everyday life, work and whatever comes next. No jargon, nothing technical.',
  alternates: { canonical: `${site.url}/start/` },
};

const groups = [
  {
    world: 'everyday-life',
    heading: 'Around the house and with family',
    items: [
      'Understand a letter from the council, HMRC, a hospital or an insurer',
      'Plan a trip that suits everyone going, including the person who cannot walk far',
      'Sort five meals from what is actually in the fridge',
      'Find six things to do with the grandchildren on a wet Saturday',
      'Help with homework on a subject you last thought about in 1985',
      'Write the difficult message to the builder, the neighbour or the school',
      'Work out what is wrong with the plant that is not thriving',
      'Get the plain version of an insurance policy or a medical leaflet',
      'Learn something at your own pace, asking the same question as often as you need',
      'Empty your head onto the page and get it back as a sorted list',
      'Find the words for a eulogy, a toast or a condolence card',
      'Prepare questions before an appointment so you get more from twenty minutes',
    ],
  },
  {
    world: 'work-and-career',
    heading: 'Being better prepared, whatever your workplace allows',
    items: [
      'Rehearse a meeting where you know somebody will push back',
      'Understand the part of your job you have always nodded along to',
      'Practise for an interview as many times as you like',
      'Think through a career decision you have been circling for a year',
      'Sharpen something you have already written, in your own words',
      'Research an unfamiliar sector before a conversation',
      'Turn a rambling set of notes into a clear structure',
      'Work out the questions you should be asking, not just the answers',
      'Prepare a presentation without staring at a blank slide',
      'Get your head around a report before the meeting about it',
      'Learn a skill you have been meaning to pick up for two years',
      'Plan a project properly instead of holding it all in your head',
    ],
  },
  {
    world: 'whats-next',
    heading: 'The thing you have been meaning to start',
    items: [
      'Turn one enormous idea into a sequence of small steps',
      'Find the smallest version of it you could finish in a fortnight',
      'Test the idea privately before telling a single person',
      'Understand the practical bits nobody explains properly',
      'Explore whether a small business idea has legs',
      'Work out how to price something when you have never priced anything',
      'Get the first words of a book down without facing a blank page',
      'Plan a community project or a group from scratch',
      'Look into a side income without committing money to it first',
      'Take up something you set aside thirty years ago',
      'Write the funding or grant application you keep putting off',
      'Decide what you actually want the next ten years to look like',
    ],
  },
];

const faqs = [
  {
    q: 'Do I need to buy anything?',
    a: 'No. A free account on one of the main AI tools covers everything on this page. You will not be told you need a subscription to make a start.',
  },
  {
    q: 'What if I have never used anything like this?',
    a: 'That is who this page is for. If it helps, think of it as typing a question to somebody patient who has read a great deal. There is nothing to install and nothing to set up beyond an account.',
  },
  {
    q: 'What if my workplace does not allow it?',
    a: 'Everything in the work section happens on your own time and your own device, using no company information at all. Your employer’s policy is about their data, not about what you are allowed to understand.',
  },
  {
    q: 'Is it safe?',
    a: 'It is safe for everything on this page as long as you keep two rules: do not type in anything you would not want on a screen behind you, and check any specific fact that matters against the original source. Both are covered properly in the free guide.',
  },
];

export default function Start() {
  return (
    <>
      <PageHero
        trail={[{ label: 'Start here', href: '/start/' }]}
        eyebrow="Start here"
        title="What could AI actually do for someone like me?"
        lede="A fair question, and one that almost nobody answers properly. So here are around forty ordinary things, in plain English, with nothing technical about any of them. Read down the list and see which ones you recognise."
      />

      <section className="py-14">
        <div className="wrap">
          <div className="rounded-2xl border-2 border-teal-100 bg-teal-50/60 px-7 py-6">
            <p className="text-[1.02rem] leading-relaxed text-ink">
              You do not have to want all of this. Most people find two or three on this page that
              would genuinely make a difference to them, and that is a perfectly good place to
              begin. Nobody is asking you to become a tech person.
            </p>
          </div>
        </div>
      </section>

      {groups.map((g, i) => {
        const world = worlds.find((w) => w.slug === g.world);
        return (
          <section
            key={g.world}
            className={i % 2 === 1 ? 'border-y border-teal-100 bg-teal-50/50 py-16' : 'py-16'}
          >
            <div className="wrap">
              <p className="eyebrow">{world.name}</p>
              <h2 className="mt-3 text-[1.9rem] leading-tight sm:text-[2.2rem]">{g.heading}</h2>
              <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-teal-100 bg-white px-5 py-4 text-[0.95rem] leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/topics/${world.slug}/`} className="btn-ghost mt-8">
                Read more on {world.short.toLowerCase()}
              </Link>
            </div>
          </section>
        );
      })}

      <section className="py-16">
        <div className="wrap grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'Pick one thing',
              b: 'Not ten. One from the lists above that you actually recognised, ideally something you have been putting off anyway.',
            },
            {
              t: 'Give it proper detail',
              b: 'The single biggest difference between a useless answer and a helpful one is how much you tell it. Say who it is for, what you want, and what a good version looks like.',
            },
            {
              t: 'Then talk to it',
              b: 'Say "too formal". Say "shorter". Say "you have missed the point". It adjusts. This is a conversation, not a search box.',
            },
          ].map((x, i) => (
            <div key={x.t} className="card">
              <span className="font-heading text-[2rem] font-extrabold text-teal-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-1 text-[1.25rem]">{x.t}</h2>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqs} title="The questions people ask before they try" />

      <LeadCapture
        eyebrow="Free guide"
        title="Want this written down?"
        body="The free guide takes what is on this page and turns it into a proper starting plan: what to try first, how to ask better questions, and the two rules that keep you safe."
      />
    </>
  );
}

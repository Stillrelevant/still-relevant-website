import LeadForm from '@/components/LeadForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { site } from '@/lib/site';

export const metadata = {
  title: '5 Things AI Can Do For You This Week',
  description:
    'Five things you can try this week, with the exact words to type. A short free guide for adults 40+ who are curious but not sure where they fit in.',
  alternates: { canonical: `${site.url}/guide/` },
};

const inside = [
  {
    t: 'Write the email you have been putting off',
    b: 'That message sitting in your drafts. Describe the situation in one sentence and it writes it for you. The exact wording to type is in the guide.',
  },
  {
    t: 'Plan your week around your actual life',
    b: 'Your hours, your commitments, your Saturday. Not a template somebody else built for a life that looks nothing like yours.',
  },
  {
    t: 'Make sense of a confusing letter',
    b: 'Insurance, medical, tax. Paste it in and get it back in plain English, along with what you are actually being asked to do.',
  },
  {
    t: 'Prepare for a conversation that matters',
    b: 'An interview, a review, a difficult chat with someone. Think it through beforehand so you walk in knowing your points.',
  },
  {
    t: 'Cut something long down to what matters',
    b: 'Reports, articles, the minutes nobody reads. The handful of things you actually need, in seconds.',
  },
];

const faqs = [
  {
    q: 'Is it really free?',
    a: 'Yes. No card, no trial, no long sales sequence. You get the guide and then one useful email a week, which you can stop at any time.',
  },
  {
    q: 'How long is it?',
    a: 'Two pages. It is written to be used rather than admired, so there is no padding.',
  },
  {
    q: 'Do I need any particular tool or account?',
    a: 'A free ChatGPT account is all you need, and the guide tells you where to go. The same five things work on the other main tools too if you already use one.',
  },
  {
    q: 'Is this only for work?',
    a: 'Not at all. A good part of it is about ordinary life: family, letters, planning, learning and the things you keep meaning to sort out.',
  },
  {
    q: 'What happens to my email address?',
    a: 'It is used to send you the guide and the weekly email. It is not sold, shared or passed to anybody else. The privacy page has the detail.',
  },
];

export default function Guide() {
  return (
    <>
      <section className="bg-teal-700 py-14 sm:py-16">
        <div className="wrap">
          <div className="[&_a]:!text-teal-100 [&_span]:!text-teal-200">
            <Breadcrumbs trail={[{ label: 'Free guide', href: '/guide/' }]} />
          </div>

          <div className="mt-9 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow-gold">Free guide</p>
              <h1 className="mt-3 text-[2.2rem] leading-[1.1] text-white sm:text-[2.9rem]">
                5 things AI can do for you this week
              </h1>
              <p className="mt-5 max-w-xl text-[1.12rem] leading-[1.65] text-teal-100">
                There is an enormous amount being said about AI and most of it is written for
                somebody else. This is two pages, written for you: five things worth trying this
                week, each one with the exact words to type.
              </p>

              <ul className="mt-9 space-y-4">
                {inside.map((x) => (
                  <li key={x.t} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-[0.8rem] font-bold text-teal-900"
                    >
                      &#10003;
                    </span>
                    <span>
                      <span className="font-heading text-[1.1rem] font-bold text-white">{x.t}</span>
                      <span className="mt-1 block text-[0.94rem] leading-relaxed text-teal-100">
                        {x.b}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl bg-white p-7 shadow-xl">
                <h2 className="text-[1.25rem] sm:text-[1.4rem]">Send me the guide</h2>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">
                  Straight to your inbox. Then one useful email a week, and nothing else.
                </p>
                <div className="mt-5">
                  <LeadForm source="guide-page" buttonLabel="Send me the guide" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Before you sign up" />
    </>
  );
}

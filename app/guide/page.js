import LeadForm from '@/components/LeadForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import { site } from '@/lib/site';

export const metadata = {
  title: 'The free starter guide',
  description:
    'Where to start with AI, in plain English. A short free guide for adults 40+ who are curious but not sure where they fit in.',
  alternates: { canonical: `${site.url}/guide/` },
};

const inside = [
  {
    t: 'Where it could fit into your life',
    b: 'A simple way of spotting the two or three things AI could genuinely help you with, based on your life rather than somebody else’s.',
  },
  {
    t: 'How to ask better questions',
    b: 'The single habit that turns a bland, useless answer into a properly helpful one. With examples you can copy straight into your first attempt.',
  },
  {
    t: 'What to do when the answer is no good',
    b: 'How to push back and keep the conversation going, instead of assuming you did it wrong and giving up.',
  },
  {
    t: 'The two rules that keep you safe',
    b: 'What never gets typed in, and how to check a specific fact in under a minute. Short, clear and easy to remember.',
  },
  {
    t: 'A realistic first fortnight',
    b: 'Two things, four weeks, no course fees and no jargon. What to actually do, in order.',
  },
];

const faqs = [
  {
    q: 'Is it really free?',
    a: 'Yes. No card, no trial, no long sales sequence. You get the guide and then one useful email a week, which you can stop at any time.',
  },
  {
    q: 'How long is it?',
    a: 'Short enough to read in one sitting. It is written to be used rather than admired, so there is no padding.',
  },
  {
    q: 'Do I need any particular tool or account?',
    a: 'No. A free account on any of the main ones is enough, and the guide works whichever you pick. It also explains how to set one up if you have not yet.',
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
                Where do I start with all this?
              </h1>
              <p className="mt-5 max-w-xl text-[1.12rem] leading-[1.65] text-teal-100">
                There is an enormous amount being said about AI and most of it is written for
                somebody else. This is short, plain and written for you: what it could actually do
                for your life, and the handful of things worth trying first.
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

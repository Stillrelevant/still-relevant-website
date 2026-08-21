import Link from 'next/link';
import PageHero from '@/components/PageHero';
import LeadCapture from '@/components/LeadCapture';
import Schema from '@/components/Schema';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Shop',
  description:
    'Guides, question libraries and short courses from Still Relevant. Practical, plain-English resources to work through in your own time.',
  alternates: { canonical: `${site.url}/shop/` },
};

const products = [
  {
    name: 'Where Do I Start: the workbook',
    type: 'Digital download',
    price: 'Price at launch',
    body: 'A guided workbook that walks you through your own life, not somebody else’s, and helps you find the handful of things AI could genuinely help with. Then shows you how to make a start on each.',
    for: 'Anyone who prefers working through it alone',
    status: 'Waiting list open',
  },
  {
    name: 'A Hundred Better Questions',
    type: 'Digital download',
    price: 'Price at launch',
    body: 'A hundred ready-made questions that actually get useful answers, sorted by what you are trying to do. Letters, planning, learning, meetings, writing, difficult conversations. Copy, adjust, use.',
    for: 'People who know what they want but not how to ask',
    status: 'Waiting list open',
  },
  {
    name: 'Where Do I Fit In: the self-paced course',
    type: 'Short course',
    price: 'Price at launch',
    body: 'The beginner session, recorded and broken into short lessons you can work through in a fortnight of coffee breaks. Includes the exercises, the questions and a plain-English glossary.',
    for: 'Anyone starting from scratch',
    status: 'Waiting list open',
  },
  {
    name: 'The Group Pack',
    type: 'For organisations and groups',
    price: 'Price at launch',
    body: 'For running a session yourself with a team, a church group, a community organisation or a U3A. Slides, a facilitator guide, handouts, and a simple one-page policy template.',
    for: 'Anyone leading a group through this',
    status: 'Waiting list open',
  },
];

export default function Shop() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        description: p.body,
        brand: { '@id': `${site.url}/#organization` },
        category: p.type,
      },
    })),
  };

  return (
    <>
      <Schema data={schema} />
      <PageHero
        trail={[{ label: 'Shop', href: '/shop/' }]}
        eyebrow="Shop"
        title="Things you can use without booking anything."
        lede="Written the way I teach: short, specific, and aimed at getting one real thing done. Nothing here needs you to be technical and nothing runs on a monthly subscription."
      />

      <section className="py-12 sm:py-16">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <article key={p.name} className="card flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal-50 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal-800">
                  {p.type}
                </span>
                <span className="rounded-full bg-gold px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-teal-900">
                  {p.status}
                </span>
              </div>
              <h2 className="mt-4 text-[1.25rem] sm:text-[1.4rem]">{p.name}</h2>
              <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-slate">{p.body}</p>
              <p className="mt-4 text-[0.88rem] text-slate">
                <span className="font-semibold text-teal-800">Written for:</span> {p.for}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-teal-100 pt-5">
                <span className="text-[0.9rem] font-semibold uppercase tracking-wider text-slate">{p.price}</span>
                <Link href="/contact/" className="btn-primary !min-h-[46px] !px-6 !py-2.5">
                  Join the waiting list
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="wrap mt-10">
          <p className="rounded-2xl border-2 border-teal-100 bg-teal-50/60 px-6 py-5 text-[0.95rem] leading-relaxed text-slate">
            These are released one at a time, so each is properly finished before the next starts.
            Prices are set when each one opens. Join the list for whichever you want and you will
            hear on the day, with nothing in between.
          </p>
        </div>
      </section>

      <LeadCapture
        eyebrow="Before you buy anything"
        title="Start with the free guide"
        body="If you are not sure which of these is right, the free guide is the honest place to begin. It will tell you what to try first, and it costs nothing."
      />
    </>
  );
}

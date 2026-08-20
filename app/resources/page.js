import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ArticleCard from '@/components/ArticleCard';
import LeadCapture from '@/components/LeadCapture';
import { getArticles, getArticlesByTopic } from '@/lib/articles';
import { site, worlds, supportingTopics } from '@/lib/site';

export const metadata = {
  title: 'Resources',
  description:
    'Everything Still Relevant offers in one place. Three worlds, free articles, the starter guide and the paid resources.',
  alternates: { canonical: `${site.url}/resources/` },
};

function TopicCard({ topic, feature = false }) {
  const count = getArticlesByTopic(topic.slug).length;
  return (
    <Link
      href={`/topics/${topic.slug}/`}
      className={`card group flex flex-col ${feature ? 'bg-teal-50/60' : ''}`}
    >
      <p className="eyebrow">{topic.tagline}</p>
      <h3 className={`mt-3 group-hover:text-teal ${feature ? 'text-[1.45rem]' : 'text-[1.2rem]'}`}>
        {topic.name}
      </h3>
      <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-slate">{topic.blurb}</p>
      <span className="mt-5 text-[0.85rem] font-semibold text-teal">
        {count} {count === 1 ? 'article' : 'articles'} <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}

export default function Resources() {
  const latest = getArticles().slice(0, 3);

  return (
    <>
      <PageHero
        trail={[{ label: 'Resources', href: '/resources/' }]}
        eyebrow="Resources"
        title="Everything in one place."
        lede="Three worlds, free articles, the starter guide and the paid resources. Nothing here is hidden behind a form except the guide itself."
      />

      <section className="py-16">
        <div className="wrap">
          <h2 className="text-[1.9rem] leading-tight">The three worlds</h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-slate">
            Everything on this site sits in one of these. Start with whichever matters most to you
            right now.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {worlds.map((t) => (
              <TopicCard key={t.slug} topic={t} feature />
            ))}
          </div>

          <h2 className="mt-14 text-[1.9rem] leading-tight">Practical help</h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-slate">
            The how, rather than the what. Getting going, getting good answers, and where you fit as
            things change.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportingTopics.map((t) => (
              <TopicCard key={t.slug} topic={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-16">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[1.9rem] leading-tight">Most recent</h2>
            <Link href="/articles/" className="link-teal text-[0.95rem]">
              All articles <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="eyebrow">Free</p>
            <h2 className="mt-3 text-[1.35rem]">Start here</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
              Around forty ordinary things AI could do for someone like you, in plain English.
            </p>
            <Link href="/start/" className="btn-ghost mt-6 w-full sm:w-fit">
              Have a look
            </Link>
          </div>
          <div className="card">
            <p className="eyebrow">Free</p>
            <h2 className="mt-3 text-[1.35rem]">The starter guide</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
              Where to begin, what to try first, and the two rules that keep you safe.
            </p>
            <Link href="/guide/" className="btn-primary mt-6 w-full sm:w-fit">
              Get the guide
            </Link>
          </div>
          <div className="card">
            <p className="eyebrow">Paid</p>
            <h2 className="mt-3 text-[1.35rem]">Guides and courses</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
              For working through it at your own pace, in your own time.
            </p>
            <Link href="/shop/" className="btn-ghost mt-6 w-full sm:w-fit">
              Visit the shop
            </Link>
          </div>
        </div>
      </section>

      <LeadCapture />
    </>
  );
}

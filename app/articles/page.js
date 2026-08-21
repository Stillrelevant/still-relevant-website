import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ArticleCard from '@/components/ArticleCard';
import LeadCapture from '@/components/LeadCapture';
import { getArticles } from '@/lib/articles';
import { site, topics } from '@/lib/site';

export const metadata = {
  title: 'Articles',
  description:
    'Plain-English writing on using AI well at work and at home, keeping your judgement, and staying capable as technology changes.',
  alternates: { canonical: `${site.url}/articles/` },
};

export default function Articles() {
  const articles = getArticles();

  return (
    <>
      <PageHero
        trail={[{ label: 'Articles', href: '/articles/' }]}
        eyebrow="Articles"
        title="Everything I would tell you over coffee."
        lede="No gated downloads, no lists of fifty tools. Substantial pieces written for people with real jobs and limited patience."
      />

      <section className="border-b border-teal-100 py-8">
        <div className="wrap flex flex-wrap items-center gap-3">
          <span className="text-[0.85rem] font-semibold uppercase tracking-wider text-slate">
            Topics:
          </span>
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}/`}
              className="inline-flex min-h-[44px] items-center rounded-full border-2 border-teal-100 px-5 text-[0.88rem] font-semibold text-teal-800 hover:border-teal"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <LeadCapture />
    </>
  );
}

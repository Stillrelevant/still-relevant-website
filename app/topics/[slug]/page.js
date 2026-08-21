import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ArticleCard from '@/components/ArticleCard';
import LeadCapture from '@/components/LeadCapture';
import Schema from '@/components/Schema';
import { getArticlesByTopic } from '@/lib/articles';
import { site, topics, topicBySlug } from '@/lib/site';

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = topicBySlug[slug];
  return {
    title: topic.name,
    description: topic.blurb,
    alternates: { canonical: `${site.url}/topics/${slug}/` },
    openGraph: { title: `${topic.name} | ${site.name}`, description: topic.blurb },
  };
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const topic = topicBySlug[slug];
  const articles = getArticlesByTopic(slug);
  const others = topics.filter((t) => t.slug !== slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.name,
    description: topic.blurb,
    url: `${site.url}/topics/${slug}/`,
    isPartOf: { '@id': `${site.url}/#website` },
    hasPart: articles.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      url: `${site.url}/articles/${a.slug}/`,
      datePublished: a.date,
    })),
  };

  return (
    <>
      <Schema data={schema} />
      <PageHero
        trail={[
          { label: 'Resources', href: '/resources/' },
          { label: topic.name, href: `/topics/${slug}/` },
        ]}
        eyebrow="Topic"
        title={topic.name}
        lede={topic.intro}
      />

      <section className="py-12 sm:py-16">
        <div className="wrap">
          {articles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border-2 border-teal-100 bg-teal-50/60 px-6 py-6 text-[0.98rem] leading-relaxed text-slate">
              The first pieces on this topic are being written. Join the email list and you will get
              them as they land.
            </p>
          )}
        </div>
      </section>

      <section className="border-y border-teal-100 bg-teal-50/50 py-14">
        <div className="wrap">
          <h2 className="text-[1.35rem] sm:text-[1.6rem]">Other topics</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}/`}
                className="inline-flex min-h-[48px] items-center rounded-full border-2 border-teal-200 bg-white px-6 text-[0.92rem] font-semibold text-teal-800 hover:border-teal"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
    </>
  );
}

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import LeadCapture from '@/components/LeadCapture';
import Schema from '@/components/Schema';
import { getArticles, getArticle, getRelated, formatDate } from '@/lib/articles';
import { site, topicBySlug } from '@/lib/site';

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${site.url}/articles/${slug}/` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      url: `${site.url}/articles/${slug}/`,
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const topic = topicBySlug[article.topic];
  const related = getRelated(slug, article.topic, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'en-GB',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/articles/${slug}/` },
    author: { '@id': `${site.url}/#founder` },
    publisher: { '@id': `${site.url}/#organization` },
    articleSection: topic?.name,
  };

  return (
    <>
      <Schema data={schema} />

      <article>
        <header className="border-b border-teal-100 bg-teal-50/60 py-12 sm:py-14">
          <div className="wrap max-w-3xl">
            <Breadcrumbs
              trail={[
                { label: 'Articles', href: '/articles/' },
                ...(topic ? [{ label: topic.name, href: `/topics/${topic.slug}/` }] : []),
                { label: article.title, href: `/articles/${slug}/` },
              ]}
            />
            {topic && (
              <Link href={`/topics/${topic.slug}/`} className="eyebrow mt-7 inline-block hover:underline">
                {topic.name}
              </Link>
            )}
            <h1 className="mt-3 text-[1.7rem] leading-[1.22] sm:text-[2.7rem]">{article.title}</h1>
            <p className="mt-5 text-[0.9rem] text-slate">
              {formatDate(article.date)} &middot; {article.readingMinutes} minute read
            </p>
          </div>
        </header>

        <div className="wrap max-w-3xl py-14">
          <p className="mb-9 border-l-4 border-gold pl-5 text-[1.12rem] leading-[1.65] text-slate">
            {article.excerpt}
          </p>
          <div className="prose-sr" dangerouslySetInnerHTML={{ __html: article.html }} />

          <div className="mt-12 rounded-2xl bg-teal-50/70 p-7">
            <p className="eyebrow">Where next</p>
            <p className="mt-3 text-[1rem] leading-relaxed text-ink">
              If this was useful, the live sessions are the same thing with your own work in front
              of you and someone to ask when it goes sideways.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/learn/" className="btn-primary">
                See the sessions
              </Link>
              {topic && (
                <Link href={`/topics/${topic.slug}/`} className="btn-ghost">
                  More on {topic.name.toLowerCase()}
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-teal-100 py-11 sm:py-14">
        <div className="wrap">
          <h2 className="text-[1.4rem] sm:text-[1.7rem]">Read next</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
    </>
  );
}

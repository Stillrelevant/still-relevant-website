import Link from 'next/link';
import { topicBySlug } from '@/lib/site';

export default function ArticleCard({ article }) {
  const topic = topicBySlug[article.topic];
  return (
    <article className="card flex flex-col">
      {topic && <p className="eyebrow">{topic.name}</p>}
      <h3 className="mt-3 text-[1.2rem] leading-snug">
        <Link href={`/articles/${article.slug}/`} className="hover:text-teal">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-slate">{article.excerpt}</p>
      <Link
        href={`/articles/${article.slug}/`}
        className="mt-5 inline-flex min-h-[44px] items-center text-[0.9rem] font-semibold text-teal hover:text-teal-800"
      >
        Read it <span aria-hidden="true" className="ml-1">&rarr;</span>
      </Link>
    </article>
  );
}

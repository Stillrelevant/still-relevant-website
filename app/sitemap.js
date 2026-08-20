import { getArticles } from '@/lib/articles';
import { site, topics } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  const pages = [
    ['', 1.0],
    ['/start', 0.9],
    ['/learn', 0.9],
    ['/articles', 0.8],
    ['/resources', 0.8],
    ['/shop', 0.8],
    ['/organisations', 0.8],
    ['/speaking', 0.8],
    ['/guide', 0.8],
    ['/about', 0.7],
    ['/contact', 0.6],
    ['/privacy', 0.3],
  ];

  return [
    ...pages.map(([p, priority]) => ({
      url: `${site.url}${p}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority,
    })),
    ...topics.map((t) => ({
      url: `${site.url}/topics/${t.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...getArticles().map((a) => ({
      url: `${site.url}/articles/${a.slug}/`,
      lastModified: new Date(a.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];
}

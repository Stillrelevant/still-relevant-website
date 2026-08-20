import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const dir = path.join(process.cwd(), 'content/articles');

export function getArticles() {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      return { slug, ...data, readingMinutes: readingTime(content) };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticlesByTopic(topicSlug) {
  return getArticles().filter((a) => a.topic === topicSlug);
}

export async function getArticle(slug) {
  const raw = fs.readFileSync(path.join(dir, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    ...data,
    readingMinutes: readingTime(content),
    html: processed.toString(),
  };
}

/** Same topic first, then most recent. Keeps internal linking meaningful. */
export function getRelated(slug, topicSlug, count = 3) {
  const all = getArticles().filter((a) => a.slug !== slug);
  const same = all.filter((a) => a.topic === topicSlug);
  const rest = all.filter((a) => a.topic !== topicSlug);
  return [...same, ...rest].slice(0, count);
}

function readingTime(content) {
  return Math.max(2, Math.round(content.split(/\s+/).length / 220));
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

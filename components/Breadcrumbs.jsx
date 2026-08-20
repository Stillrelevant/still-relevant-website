import Link from 'next/link';
import Schema from './Schema';
import { site } from '@/lib/site';

export default function Breadcrumbs({ trail }) {
  const items = [{ label: 'Home', href: '/' }, ...trail];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <>
      <Schema data={schema} />
      <nav aria-label="Breadcrumb" className="text-[0.85rem]">
        <ol className="flex flex-wrap items-center gap-1.5 text-slate">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-teal-300">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-slate">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-teal hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

import Link from 'next/link';
import Logo from './Logo';
import { nav, site, topics } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-teal-100 bg-teal-50/50">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-slate">
            Helping adults 40+ find practical ways to use AI in everyday life, work and whatever
            comes next. You don’t have to become a tech person.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} className="link-teal text-[0.9rem]">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[0.85rem] font-semibold uppercase tracking-wider text-teal-800">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/" className="text-[0.92rem] text-slate hover:text-teal">Home</Link>
            </li>
            <li>
              <Link href="/resources/" className="text-[0.92rem] text-slate hover:text-teal">
                Resources
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.92rem] text-slate hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.85rem] font-semibold uppercase tracking-wider text-teal-800">
            Topics
          </h2>
          <ul className="mt-4 space-y-2.5">
            {topics.map((t) => (
              <li key={t.slug}>
                <Link href={`/topics/${t.slug}/`} className="text-[0.92rem] text-slate hover:text-teal">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.85rem] font-semibold uppercase tracking-wider text-teal-800">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/contact/" className="text-[0.92rem] text-slate hover:text-teal">Contact</Link></li>
            <li><Link href="/organisations/" className="text-[0.92rem] text-slate hover:text-teal">Corporate enquiries</Link></li>
            <li><Link href="/speaking/" className="text-[0.92rem] text-slate hover:text-teal">Book a talk</Link></li>
            <li><Link href="/guide/" className="text-[0.92rem] text-slate hover:text-teal">Free guide</Link></li>
            <li>
              <a href={site.phoneHref} className="text-[0.92rem] font-semibold text-teal hover:underline">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-100">
        <div className="wrap flex flex-col gap-2 py-6 text-[0.82rem] text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy/" className="text-slate hover:text-teal">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

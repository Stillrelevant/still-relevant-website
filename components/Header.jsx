'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';
import { nav } from '@/lib/site';

/**
 * Eight top-level links plus a call to action did not fit. Measured, the old bar
 * needed 1088px and had 1096px, so a browser rendering the font a fraction wider
 * pushed half the items onto a second line.
 *
 * So the two lowest-traffic items move into a small More menu, everything carries
 * whitespace-nowrap, and the type and gaps came in slightly. That leaves roughly
 * 100px of slack instead of 8px, which is the difference between a header that
 * happens to fit and one that cannot break.
 *
 * The More menu is CSS only: group-hover for a mouse, group-focus-within for a
 * keyboard. No state, nothing to get stuck open.
 */
const IN_MORE = ['/shop/', '/speaking/'];
const primaryNav = nav.filter((item) => !IN_MORE.includes(item.href));
const moreNav = nav.filter((item) => IN_MORE.includes(item.href));

function isCurrent(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = (href) =>
    [
      'relative whitespace-nowrap py-2 text-[0.875rem] font-medium transition-colors',
      'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-all',
      isCurrent(pathname, href)
        ? 'text-teal-700 after:bg-gold'
        : 'text-ink after:bg-transparent hover:text-teal-700 hover:after:bg-teal-200',
    ].join(' ');

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-teal-100 bg-white">
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Still Relevant, home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                className={linkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}

            {moreNav.length > 0 && (
              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 whitespace-nowrap py-2 text-[0.875rem] font-medium text-ink transition-colors hover:text-teal-700 group-focus-within:text-teal-700"
                  aria-haspopup="true"
                >
                  More
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </button>

                {/* Sits on a small bridge of padding so the pointer can travel down to it. */}
                <div className="invisible absolute right-0 top-full z-50 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[11rem] rounded-xl border border-teal-100 bg-white p-1.5 shadow-[0_14px_38px_rgba(7,56,67,0.14)]">
                    {moreNav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                          className={`block whitespace-nowrap rounded-lg px-3.5 py-2.5 text-[0.9rem] font-medium transition-colors ${
                            isCurrent(pathname, item.href)
                              ? 'bg-teal-50 text-teal-700'
                              : 'text-ink hover:bg-teal-50 hover:text-teal-700'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <Link
              href="/contact/"
              className="btn-primary ml-1 !min-h-[44px] whitespace-nowrap !px-5 !py-2.5 !text-[0.875rem]"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-teal-200 text-teal transition-colors hover:bg-teal-50 xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 7h16" />
              <path d="M3 11h16" />
              <path d="M3 15h16" />
            </svg>
          </button>
        </div>
      </header>

      {/*
        Rendered OUTSIDE <header> on purpose. A backdrop-filter or transform on an
        ancestor makes it the containing block for position: fixed children, which
        traps a full-screen overlay inside the header bar on real devices.
      */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white xl:hidden">
          <div className="wrap flex h-[72px] shrink-0 items-center justify-between border-b border-teal-100">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-teal-200 text-teal"
              aria-label="Close menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 5l12 12" />
                <path d="M17 5L5 17" />
              </svg>
            </button>
          </div>

          <nav className="wrap flex-1 overflow-y-auto py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {[{ label: 'Home', href: '/' }, ...nav, { label: 'Contact', href: '/contact/' }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                      className={`flex min-h-[56px] items-center justify-between rounded-xl px-4 text-[1.15rem] font-semibold transition-colors ${
                        isCurrent(pathname, item.href)
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-teal-800 hover:bg-teal-50'
                      }`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-teal-300">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="mt-8 rounded-2xl bg-teal-700 p-6">
              <p className="eyebrow-gold">Free guide</p>
              <p className="mt-2 font-heading text-xl font-bold text-white">
                Where to start with AI
              </p>
              <Link href="/guide/" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full">
                Send it to me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

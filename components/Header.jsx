'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { nav } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-teal-100 bg-white">
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Still Relevant, home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-[0.92rem] font-medium text-ink transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary !min-h-[46px] !px-6 !py-2.5 !text-[0.9rem]">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-12 w-12 place-items-center rounded-xl border border-teal-200 text-teal xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 7h16" /><path d="M3 11h16" /><path d="M3 15h16" />
          </svg>
        </button>
      </div>

      </header>

      {/*
        Rendered OUTSIDE <header> on purpose. A backdrop-filter or transform on an
        ancestor makes it the containing block for position: fixed children, which
        traps a full-screen overlay inside the 76px header bar on real devices.
      */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white xl:hidden">
          <div className="wrap flex h-[76px] shrink-0 items-center justify-between border-b border-teal-100">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-12 w-12 place-items-center rounded-xl border border-teal-200 text-teal"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l12 12" /><path d="M17 5L5 17" />
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
                      className="flex min-h-[56px] items-center justify-between rounded-xl px-4 text-[1.15rem] font-semibold text-teal-800 hover:bg-teal-50"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-teal-300">&rarr;</span>
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

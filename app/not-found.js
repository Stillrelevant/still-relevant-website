import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="wrap max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-[2.4rem] leading-tight">That page has moved on.</h1>
        <p className="mt-4 lede">
          The link is broken or the page no longer exists. Nothing you did wrong.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to the homepage
          </Link>
          <Link href="/start/" className="btn-ghost">
            See what&rsquo;s possible
          </Link>
        </div>
      </div>
    </section>
  );
}

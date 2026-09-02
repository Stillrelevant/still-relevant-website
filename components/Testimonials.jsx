import { site } from '@/lib/site';

/**
 * Renders nothing at all until real quotes exist in lib/site.js.
 *
 * Two shapes on purpose. The long, specific accounts from private sessions carry
 * far more weight than a one-line workshop comment, so they get their own row at
 * full size rather than being squeezed into the same card as twelve words. The
 * shorter ones then sit underneath in columns, which keeps quotes of very
 * different lengths tight instead of leaving tall empty cards.
 *
 * Pass `limit` to cap how many of the shorter quotes appear.
 */
export default function Testimonials({
  eyebrow = 'In their words',
  title = 'From people who walked in unsure',
  limit,
}) {
  const all = site.testimonials || [];
  if (all.length === 0) return null;

  const featured = all.filter((t) => t.featured);
  const rest = all.filter((t) => !t.featured);
  const quotes = limit ? rest.slice(0, limit) : rest;

  return (
    <section className="border-y border-teal-100 bg-teal-50/50 py-12 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        {title && (
          <h2 className="mt-3 max-w-2xl text-[1.55rem] leading-tight sm:text-[2.2rem]">{title}</h2>
        )}

        {featured.length > 0 && (
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {featured.map((t, i) => (
              <figure
                key={`f-${i}`}
                className="relative rounded-2xl border-2 border-teal-100 bg-white p-7 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-4 font-heading text-[3.5rem] leading-none text-gold/40"
                >
                  &rdquo;
                </span>
                <blockquote className="relative text-[1rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-teal-100 pt-4 text-[0.9rem] font-semibold text-teal-700">
                  {t.name}
                  {t.role && <span className="block font-normal text-slate">{t.role}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-6 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {quotes.map((t, i) => (
            <figure key={i} className="card">
              <blockquote className="text-[0.98rem] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[0.85rem] font-semibold text-teal-700">
                {t.name}
                {t.role && <span className="block font-normal text-slate">{t.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

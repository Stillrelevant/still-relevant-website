import { site } from '@/lib/site';

/**
 * Renders nothing at all until real quotes exist in lib/site.js.
 *
 * Pass `limit` to show only the first few. Columns rather than a grid, so quotes
 * of very different lengths sit tight instead of leaving tall empty cards.
 */
export default function Testimonials({
  eyebrow = 'In their words',
  title = 'From people who walked in unsure',
  limit,
}) {
  const all = site.testimonials || [];
  if (all.length === 0) return null;
  const quotes = limit ? all.slice(0, limit) : all;

  return (
    <section className="border-y border-teal-100 bg-teal-50/50 py-12 sm:py-16">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        {title && (
          <h2 className="mt-3 max-w-2xl text-[1.55rem] leading-tight sm:text-[2.2rem]">{title}</h2>
        )}

        <div className="mt-9 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
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

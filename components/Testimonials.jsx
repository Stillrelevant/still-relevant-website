import { site } from '@/lib/site';

/** Renders nothing at all until real quotes exist in lib/site.js. */
export default function Testimonials() {
  if (!site.testimonials || site.testimonials.length === 0) return null;

  return (
    <section className="border-y border-teal-100 bg-teal-50/50 py-16">
      <div className="wrap">
        <p className="eyebrow">In their words</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
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

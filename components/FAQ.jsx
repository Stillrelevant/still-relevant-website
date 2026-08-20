import Schema from './Schema';

export default function FAQ({ items, title = 'Questions people actually ask' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="border-t border-teal-100 py-16">
      <Schema data={schema} />
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-[2rem] leading-tight">{title}</h2>
        </div>
        <div className="divide-y divide-teal-100 border-y border-teal-100">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-heading text-[1.15rem] font-bold text-teal-700">
                {f.q}
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-50 text-teal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

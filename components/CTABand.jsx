import Link from 'next/link';

export default function CTABand({ eyebrow, title, body, primary, secondary }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="wrap">
        <div className="rounded-3xl border-2 border-gold bg-gold-100 px-6 py-12 text-center sm:px-12">
          {eyebrow && <p className="eyebrow !text-teal-900">{eyebrow}</p>}
          <h2 className="mx-auto mt-3 max-w-2xl text-[1.55rem] leading-tight sm:text-[2.4rem] text-teal-900">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-teal-900/85">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primary.href} className="btn-primary">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn-ghost !border-teal-800 !text-teal-900 hover:!bg-white">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

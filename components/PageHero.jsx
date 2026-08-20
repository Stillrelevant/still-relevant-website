import Breadcrumbs from './Breadcrumbs';

export default function PageHero({ eyebrow, title, lede, trail }) {
  return (
    <section className="border-b border-teal-100 bg-teal-50/60 py-14 sm:py-18">
      <div className="wrap">
        {trail && (
          <div className="mb-7">
            <Breadcrumbs trail={trail} />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-[2.3rem] leading-[1.1] sm:text-[3rem]">{title}</h1>
          {lede && <p className="mt-5 lede">{lede}</p>}
        </div>
      </div>
    </section>
  );
}

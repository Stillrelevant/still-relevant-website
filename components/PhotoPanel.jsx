/**
 * Photograph in a branded frame.
 * The photos are studio shots on white, so they sit in a white card with a
 * brand-coloured shape behind rather than being cut out.
 */
export default function PhotoPanel({
  src,
  alt,
  caption,
  accent = 'teal',
  className = '',
  priority = false,
}) {
  const gold = accent === 'gold';

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-3xl ${
          gold ? 'bg-gold' : 'bg-teal-700'
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute -left-5 -top-5 h-24 w-24 rounded-full ${
          gold ? 'bg-teal-700' : 'bg-gold'
        }`}
      />
      <figure className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-[0_18px_50px_rgba(13,92,107,0.14)]">
        <img
          src={src}
          alt={alt}
          width={800}
          height={800}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="block w-full"
        />
        {caption && (
          <figcaption className="border-t border-teal-100 bg-white px-6 py-4">
            <span className="block font-heading text-[1.05rem] font-bold text-teal-700">
              {caption.name}
            </span>
            <span className="mt-0.5 block text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-slate">
              {caption.role}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}

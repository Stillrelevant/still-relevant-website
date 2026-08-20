/**
 * Branded panel used where a photograph will eventually go.
 * Reads as a deliberate brand graphic rather than an empty placeholder.
 */
export default function BrandPanel({ label = 'Still Relevant', caption, className = '', tone = 'teal' }) {
  const teal = tone === 'teal';
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${
        teal ? 'bg-teal-700' : 'bg-gold'
      } ${className}`}
      role="img"
      aria-label={caption || label}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${
          teal ? 'bg-gold/25' : 'bg-teal/15'
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-24 -left-10 h-64 w-64 rounded-full ${
          teal ? 'bg-white/10' : 'bg-white/30'
        }`}
      />
      <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8">
        <span
          className={`font-heading text-[2rem] font-extrabold leading-tight ${
            teal ? 'text-white' : 'text-teal-900'
          }`}
        >
          {label}
        </span>
        {caption && (
          <span className={`mt-2 text-[0.9rem] ${teal ? 'text-teal-100' : 'text-teal-900/80'}`}>
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}

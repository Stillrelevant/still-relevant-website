export default function Logo({ light = false, showTag = true }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal font-heading text-[1.05rem] font-extrabold leading-none text-white"
        aria-hidden="true"
      >
        SR
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-[1.15rem] font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-teal-700'
          }`}
        >
          Still Relevant
        </span>
        {showTag && (
          <span
            className={`mt-1 flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${
              light ? 'text-teal-100' : 'text-slate'
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            AI made simple
          </span>
        )}
      </span>
    </span>
  );
}

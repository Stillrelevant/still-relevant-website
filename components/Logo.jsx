/**
 * The brand lockup: a teal SR tile, the wordmark, and the strapline beneath it.
 *
 * Nothing in here is allowed to wrap. A lockup that breaks onto two lines at some
 * widths and not others is the fastest way to make a header look unfinished, so
 * every text node carries whitespace-nowrap and the whole thing refuses to shrink.
 */
export default function Logo({ light = false, showTag = true }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal font-heading text-[1.05rem] font-extrabold leading-none text-white"
        aria-hidden="true"
      >
        SR
      </span>

      <span className="flex flex-col justify-center leading-none">
        <span
          className={`whitespace-nowrap font-heading text-[1.15rem] font-extrabold leading-none tracking-tight ${
            light ? 'text-white' : 'text-teal-700'
          }`}
        >
          Still Relevant
        </span>

        {showTag && (
          <span
            className={`mt-[5px] flex items-center gap-1.5 whitespace-nowrap text-[0.58rem] font-semibold uppercase leading-none tracking-[0.2em] ${
              light ? 'text-teal-100' : 'text-slate'
            }`}
          >
            <span
              aria-hidden="true"
              className="inline-block h-1 w-1 shrink-0 rounded-full bg-gold"
            />
            AI made simple
          </span>
        )}
      </span>
    </span>
  );
}

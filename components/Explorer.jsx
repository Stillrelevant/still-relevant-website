import Link from 'next/link';

/**
 * "What could AI actually do for someone like me?"
 * The three content worlds, shown as possibilities rather than as technology.
 *
 * Deliberately built with radio inputs and CSS rather than JavaScript state, so it
 * works everywhere: with scripts blocked, on an offline copy opened from a folder,
 * and for anyone driving the page by keyboard.
 */
const groups = [
  {
    id: 'everyday',
    label: 'Everyday life',
    href: '/topics/everyday-life/',
    items: [
      {
        task: 'A letter from the council you have read three times',
        before: 'Read it again, still unsure, ring them and wait on hold',
        now: 'Type it in and ask what it actually means, what you have to do, and by when',
      },
      {
        task: 'A wet Saturday with the grandchildren',
        before: 'Give in and put the television on',
        now: 'Six things to do with a five-year-old and a nine-year-old, using what is already in the house',
      },
      {
        task: 'Planning a trip that suits everyone',
        before: 'Eleven browser tabs and a spreadsheet nobody else opens',
        now: 'Describe who is going, the budget and the pace, get a day-by-day plan you can argue with',
      },
      {
        task: 'The eulogy, the toast, the card you cannot find words for',
        before: 'Stare at it for an evening and write something you are not happy with',
        now: 'Talk about the person properly, get a starting point, then make it yours',
      },
    ],
  },
  {
    id: 'work',
    label: 'Work and career',
    href: '/topics/work-and-career/',
    items: [
      {
        task: 'A meeting on Thursday where somebody will push back',
        before: 'Rehearse in the car and hope',
        now: 'Ask for the six objections you will face and the weakest part of your own argument',
      },
      {
        task: 'The part of your job you nod along to and do not fully follow',
        before: 'Nod again, look it up later, never look it up',
        now: 'Ask for it explained plainly, then again with an example, until it genuinely lands',
      },
      {
        task: 'An interview you have not done in fifteen years',
        before: 'Ask a friend once, feel awkward, stop',
        now: 'Practise as often as you like, be pushed hard, and be told which answers were vague',
      },
      {
        task: 'A career decision you have been circling for a year',
        before: 'The same three thoughts on every drive home',
        now: 'Lay it out, ask for the strongest argument against your instinct, then decide',
      },
    ],
  },
  {
    id: 'next',
    label: 'What’s next',
    href: '/topics/whats-next/',
    items: [
      {
        task: 'The book, the business, the project you keep meaning to start',
        before: 'One enormous undefined lump in your head, so nothing happens',
        now: 'A sequence of small steps, starting with the smallest version you could finish in a fortnight',
      },
      {
        task: 'Testing an idea without telling anyone yet',
        before: 'Protect it by never showing it to a single person',
        now: 'Ask for the strongest case against it, privately, before anyone else sees it',
      },
      {
        task: 'The practical bits nobody explains',
        before: 'Give up somewhere around the second official website',
        now: 'Ask what is actually involved, at whatever level you need, until it makes sense',
      },
      {
        task: 'Learning something properly this time',
        before: 'Buy the course, watch two lessons, never return',
        now: 'A patient tutor that explains it your way and never gets bored of you',
      },
    ],
  },
];

export default function Explorer() {
  return (
    <section className="border-y border-teal-100 bg-teal-50/50 py-16 sm:py-20" id="what-could-it-do">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">What could it actually do for me?</p>
          <h2 className="mt-3 text-[2rem] leading-tight sm:text-[2.5rem]">
            The same things you already do. A lot less effort.
          </h2>
          <p className="mt-4 lede">
            Pick the part of your life you want to look at. These are ordinary jobs, not
            demonstrations, and none of them need you to be technical.
          </p>
        </div>

        <div className="sr-explorer mt-9">
          {groups.map((g, i) => (
            <input
              key={g.id}
              type="radio"
              name="sr-explorer"
              id={`sr-tab-${g.id}`}
              defaultChecked={i === 0}
              className="sr-only"
            />
          ))}

          <div className="sr-explorer-tabs flex flex-wrap gap-2.5">
            {groups.map((g) => (
              <label key={g.id} htmlFor={`sr-tab-${g.id}`} data-tab={g.id}>
                {g.label}
              </label>
            ))}
          </div>

          {groups.map((g) => (
            <div key={g.id} className="sr-explorer-panel" data-panel={g.id}>
              <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
                {g.items.map((item) => (
                  <article
                    key={item.task}
                    className="w-[84vw] shrink-0 snap-start rounded-2xl border border-teal-100 bg-white p-6 sm:w-auto"
                  >
                    <h3 className="text-[1.05rem] leading-snug">{item.task}</h3>
                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate">
                          It used to mean
                        </p>
                        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-slate">
                          {item.before}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gold-100 p-4">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-teal-900">
                          Now it can mean
                        </p>
                        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-teal-900">
                          {item.now}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <Link href={g.href} className="btn-ghost mt-8">
                More on {g.label.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

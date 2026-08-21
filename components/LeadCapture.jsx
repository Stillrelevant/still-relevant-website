import LeadForm from './LeadForm';

export default function LeadCapture({
  variant = 'teal',
  eyebrow = 'Free guide',
  title = 'Where do I start with all this?',
  body = 'A short, plain-English guide to what AI could actually do for someone like you, and the handful of things worth trying first. Free, and no jargon anywhere in it.',
  source = 'guide',
}) {
  const gold = variant === 'gold';

  return (
    <section className="py-12 sm:py-16" id="get-the-guide">
      <div className="wrap">
        <div
          className={`overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14 ${
            gold ? 'bg-gold' : 'bg-teal-700'
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className={gold ? 'eyebrow !text-teal-900' : 'eyebrow-gold'}>{eyebrow}</p>
              <h2
                className={`mt-3 text-[1.55rem] leading-tight sm:text-[2.4rem] ${
                  gold ? 'text-teal-900' : 'text-white'
                }`}
              >
                {title}
              </h2>
              <p className={`mt-4 text-[1.02rem] leading-relaxed ${gold ? 'text-teal-900/85' : 'text-teal-100'}`}>
                {body}
              </p>
            </div>
            <LeadForm source={source} buttonLabel="Send me the guide" onTeal />
          </div>
        </div>
      </div>
    </section>
  );
}

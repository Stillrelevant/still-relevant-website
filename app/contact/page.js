import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    'Enquire about workshops, team training, speaking dates, corporate work or the waiting lists.',
  alternates: { canonical: `${site.url}/contact/` },
};

export default function Contact() {
  return (
    <>
      <PageHero
        trail={[{ label: 'Contact', href: '/contact/' }]}
        eyebrow="Contact"
        title="Tell me what you need."
        lede="Short messages are fine. Everything is read personally and you will usually get a reply within two working days."
      />

      <section className="py-16">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-3xl bg-teal-50/70 p-8">
              <h2 className="text-[1.3rem]">Prefer to talk?</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                Call or send a message. If it goes to voicemail, leave your name and what it is
                about and you will get a call back.
              </p>
              <a href={site.phoneHref} className="link-teal mt-4 inline-block text-[1.1rem]">
                {site.phone}
              </a>
            </div>

            <div className="rounded-3xl border-2 border-teal-100 p-8">
              <h2 className="text-[1.3rem]">Booking for a team?</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                It speeds things up considerably if you include roughly how many people, which
                functions they sit in, what you have already tried, and any date you are working
                towards.
              </p>
            </div>

            <div className="rounded-3xl border-2 border-teal-100 p-8">
              <h2 className="text-[1.3rem]">Booking a speaker?</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                Send the date, the audience, the format and what you want them to walk away with.
                You will get a proposed shape for the session rather than a brochure.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

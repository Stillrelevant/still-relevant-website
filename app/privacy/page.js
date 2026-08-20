import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Privacy',
  description: 'How Still Relevant handles your information. Short, plain English, no legal padding.',
  alternates: { canonical: `${site.url}/privacy/` },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <>
      <PageHero
        trail={[{ label: 'Privacy', href: '/privacy/' }]}
        eyebrow="Privacy"
        title="What happens to your information"
        lede="Written to be read rather than to protect anybody. If something here is unclear, ask and it will be explained properly."
      />

      <section className="py-16">
        <div className="wrap prose-sr max-w-3xl">
          <h2>What is collected</h2>
          <p>
            Only what you type into a form on this site. That means your name and email address if
            you sign up for the guide or the email list, plus your organisation and
            message if you use the contact form.
          </p>
          <p>
            Nothing else is collected automatically. This site sets no advertising cookies and no
            tracking cookies. Fonts are served from this site rather than from a third party, so
            visiting a page does not tell anybody else that you were here.
          </p>

          <h2>What it is used for</h2>
          <ul>
            <li>Sending you the guide or resource you asked for.</li>
            <li>Sending the weekly email, if you signed up for it.</li>
            <li>Replying to your enquiry.</li>
          </ul>
          <p>
            Your details are not sold, rented or shared with anybody for their own marketing. The
            only third parties involved are the email and form providers used to deliver these
            messages, and they act on instruction only.
          </p>

          <h2>How long it is kept</h2>
          <p>
            Email list details are kept until you unsubscribe, which you can do from the bottom of
            any email. Enquiry messages are kept while there is an active conversation and for a
            reasonable period afterwards for record-keeping, then deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK data protection law you can ask for a copy of what is held about you, ask for
            it to be corrected, or ask for it to be deleted. Call{' '}
            <a href={site.phoneHref}>{site.phone}</a> and it will be actioned. There is no form to
            fill in.
          </p>
          <p>
            If you are not satisfied with how a request was handled, you can complain to the
            Information Commissioner&rsquo;s Office.
          </p>

          <h2>Children</h2>
          <p>
            This site and its services are intended for adults. Nothing here is marketed to
            children and no information is knowingly collected from them.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes in a way that matters, the change will be described here rather
            than quietly slipped in. Last reviewed August 2026.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about any of this go to <a href={site.phoneHref}>{site.phone}</a>, or use the
            contact form.
          </p>
        </div>
      </section>
    </>
  );
}

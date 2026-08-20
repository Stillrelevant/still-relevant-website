import '@fontsource/baloo-2/latin-600.css';
import '@fontsource/baloo-2/latin-700.css';
import '@fontsource/baloo-2/latin-800.css';
import '@fontsource/poppins/latin-400.css';
import '@fontsource/poppins/latin-500.css';
import '@fontsource/poppins/latin-600.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Schema from '@/components/Schema';
import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Stay confident and capable in an AI world`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.name} | Stay confident and capable in an AI world`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Stay confident and capable in an AI world`,
    description: site.description,
    images: ['/og.svg'],
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#0d5c6b' };

const organisation = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  founder: { '@id': `${site.url}/#founder` },
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#founder`,
  name: site.founder,
  jobTitle: 'AI Educator and Strategy Consultant',
  worksFor: { '@id': `${site.url}/#organization` },
  url: `${site.url}/about/`,
  knowsAbout: [
    'Artificial intelligence for non-technical professionals',
    'Digital confidence',
    'Business strategy',
    'AI governance and responsible adoption',
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { '@id': `${site.url}/#organization` },
  inLanguage: 'en-GB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <Schema data={organisation} />
        <Schema data={person} />
        <Schema data={website} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-6 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

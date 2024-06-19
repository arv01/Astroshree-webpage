import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Astroshree - The Best Online Astrologers to get predictions',
  description: 'Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life. Access a wide range of astrology services conveniently from anywhere, and embark on a journey of self-discovery and empowerment. Trust in Astroshree\'s accuracy and confidentiality to guide you towards a brighter future.',
  keywords: 'astrology, horoscope, kundali, predictions, astrologers, numerology, matchmaking',
  author: 'Astroshree',
  openGraph: {
    title: 'Astroshree - The Best Online Astrologers to get predictions',
    description: 'Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life.',
    type: 'website',
    url: 'https://www.astroshree.live',
    image: 'https://astroshree.live/_next/static/media/logo.1456688b.svg',
    site_name: 'Astroshree',
  },
  twitter: {
    title: "Astroshree - The Best Online Astrologers to get predictions",
    description: "Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life.",
    card: "summary_large_image",
    image: 'https://astroshree.live/_next/static/media/logo.1456688b.svg',
    site: "@Astroshree",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Astroshree - Leading Online Astrologers for Personalized Predictions',
  description: 'Unlock personalized astrology predictions with Astroshree. Our expert astrologers offer detailed insights for self-discovery and empowerment. Avail a wide range of astrology services including Kundali matching, horoscope readings, and daily insights from anywhere.',
  keywords: 'Astrology, Horoscope, Astrologer, Online Astrologer, Online Astrology, Kundali Matching, Horoscope Predictions, Free Horoscope, Personalized Astrology, Online Horoscope, Kundali Analysis, Daily Horoscope, Weekly Horoscope, Astrology Consultation',
  author: 'Astroshree',
  openGraph: {
    title: 'Astroshree - Leading Online Astrologers for Personalized Predictions',
    description: 'Unlock personalized astrology insights with Astroshree’s expert astrologers. Explore Kundali matching, horoscope readings, and daily insights for self-discovery and empowerment.',
    type: 'website',
    url: 'https://www.astroshree.live',
    image: 'https://www.astroshree.live/_next/static/media/logo.1456688b.svg', // Update with the correct path to your image
    site_name: 'Astroshree',
  },
  twitter: {
    title: "Astroshree - Leading Online Astrologers for Personalized Predictions",
    description: "Unlock personalized astrology insights with Astroshree’s expert astrologers. Explore Kundali matching, horoscope readings, and daily insights for self-discovery and empowerment.",
    card: "summary_large_image",
    image: 'https://www.astroshree.live/_next/static/media/logo.1456688b.svg', // Update with the correct path to your image
    site: "@Astroshree",
  },
  metaTags: [
    {
      name: 'description',
      content: 'Astroshree offers free horoscope consultations with top astrologers. Explore personalized astrology insights including Kundali matching, horoscope readings, and daily predictions. Empower yourself with detailed astrology predictions and services.',
    },
    {
      name: 'keywords',
      content: 'Astrology, Horoscope, Online Astrologer, Kundali Matching, Astrology Predictions, Horoscope Readings, Free Horoscope, Personalized Astrology Insights, Kundali Analysis, Daily Horoscope, Weekly Horoscope, Astrology Consultation, Astrology Services',
    },
  ],
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
        {metadata.metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
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

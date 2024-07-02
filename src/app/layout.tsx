import { Inter } from 'next/font/google';
import './globals.css';
import icon from '../../public/Assets/social_logo.jpg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Astroshree - Best Free Online Astrology Predictions by Top Indian Astrologers',
  description: 'Discover personalized astrology predictions with Astroshree, the best online astrology website in India. Connect with the best astrologers near you for insights on your horoscope, career, and relationships. Enjoy free astrology chat, Kundali matching, Vastu astrology, and daily horoscope readings. Talk to astrologers online and get empowering guidance anytime, anywhere.',
  keywords: 'Astrology, Horoscope, Astrologer, Online Astrologer, Astroshree, Online Astrology, Kundali Matching, Horoscope Predictions, Free Horoscope, Personalized Astrology, Online Horoscope, Kundali Analysis, Daily Horoscope, Weekly Horoscope, Astrology Consultation, Best Astrology Service, Top Astrologers in India, Best astrologers near me, My horoscope online, Best online astrology website in India, Vastu astrology, Horoscope Astrology, Chat with astrologer, Talk to Astrologer online, Online Astrology, Free astrology chat, Astroyogi, Career horoscope',
  author: 'Astroshree',
  openGraph: {
    title: 'Astroshree - Best Free Online Astrology Predictions by Top Indian Astrologers',
    description: 'Discover personalized astrology predictions with Astroshree, the best online astrology website in India. Connect with the best astrologers near you for insights on your horoscope, career, and relationships. Enjoy free astrology chat, Kundali matching, Vastu astrology, and daily horoscope readings. Talk to astrologers online and get empowering guidance anytime, anywhere.',
    type: 'website',
    url: 'https://www.astroshree.live',
    image: icon.src, // Update with the correct path to your image
    site_name: 'Astroshree',
  },
  twitter: {
    title: "Astroshree - Best Free Online Astrology Predictions by Top Indian Astrologers",
    description: "Discover personalized astrology predictions with Astroshree, the best online astrology website in India. Connect with the best astrologers near you for insights on your horoscope, career, and relationships. Enjoy free astrology chat, Kundali matching, Vastu astrology, and daily horoscope readings. Talk to astrologers online and get empowering guidance anytime, anywhere.",
    card: "summary_large_image",
    image: icon.src, // Update with the correct path to your image
    site: "@Astroshree",
  },
  metaTags: [
    {
      name: 'description',
      content: 'Astroshree offers free horoscope consultations with top astrologers. Explore personalized astrology insights including Kundali matching, horoscope readings, and daily predictions. Empower yourself with detailed astrology predictions and services.',
    },
    {
      name: 'keywords',
      content: 'Astrology, Astroshree, Horoscope, Online Astrologer, Kundali Matching, Astrology Predictions, Horoscope Readings, Free Horoscope, Personalized Astrology Insights, Kundali Analysis, Daily Horoscope, Weekly Horoscope, Astrology Consultation, Astrology Services',
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
        {/* Google Search Console verification meta tag */}
        <meta name="google-site-verification" content="qRpmEcGtKMVL-yGIKQFjG4VjAeYc9OAdUeZ24W6qMak" />
        
      </head>
      <body className={inter.className}>{children}
      <a href="https://www.astroshree.live/">
          <div style={{ borderRadius: '8px', width: '92px', height: '92px' }}>
            <img alt="astroshree from www.astroshree.live" src={icon.src} />
          </div>
        </a>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astroshree - The best online Astrologers to get predictions",
  description: "Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life. Access a wide range of astrology services conveniently from anywhere, and embark on a journey of self-discovery and empowerment. Trust in Astroshree's accuracy and confidentiality to guide you towards a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life. Access a wide range of astrology services conveniently from anywhere, and embark on a journey of self-discovery and empowerment. Trust in Astroshree's accuracy and confidentiality to guide you towards a brighter future." />
        <meta name="keywords" content="astrology, horoscope, kundali, predictions, astrologers, numerology, matchmaking" />
        <meta name="author" content="Astroshree" />
        <meta property="og:title" content="Astroshree - The best online Astrologers to get predictions" />
        <meta property="og:description" content="Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.astroshree.live" />
        <meta property="og:image" content="https://astroshree.live/_next/static/media/logo.1456688b.svg" />
        <meta property="og:site_name" content="Astroshree" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Astroshree - The best online Astrologers to get predictions" />
        <meta name="twitter:description" content="Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life." />
        <meta name="twitter:image" content="https://astroshree.live/_next/static/media/logo.1456688b.svg" />
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

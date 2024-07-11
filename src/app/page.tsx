// pages/page.tsx

import LandingPage from '@/Component/LandingPage';
import React from 'react';
import Head from 'next/head';
import icon from '../../public/favicon.ico'; // Ensure the path to the favicon is correct
import ico from '../../public/Assets/social_logo.jpg';
const Page = () => {
  return (
    <div>
      <Head>
        <title>Astroshree - Astrology and Consultations</title>
        <meta name="description" content="Astroshree offers professional astrology consultations. Discover your future with our expert astrologers." />
        <meta name="keywords" content="Astroshree, astrology, horoscope, kundali, astrology consultations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={ico.src} />
        <link rel="canonical" href="https://www.astroshree.live" />
        <meta property="og:title" content="Astroshree - Astrology and Consultations" />
        <meta property="og:description" content="Astroshree offers professional astrology consultations. Discover your future with our expert astrologers." />
        <meta property="og:image" content="https://www.astroshree.live/_next/static/media/astroshree.1456688b.svg" />
        <meta property="og:url" content="https://www.astroshree.live" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="qRpmEcGtKMVL-yGIKQFjG4VjAeYc9OAdUeZ24W6qMak" />
      </Head>
      <LandingPage />
    </div>
  );
};

export default Page;

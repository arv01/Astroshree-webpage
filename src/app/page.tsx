// pages/page.tsx

import LandingPage from '@/Component/LandingPage';
import React from 'react';
import Head from 'next/head';
import icon from '../../.../public/favicon.ico';

const Page = () => {
  return (
    <div>
      <Head>
        <title>Astroshree</title>
      </Head>
      <LandingPage />
    </div>
  );
};

export default Page;

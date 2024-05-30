// pages/page.tsx

import LandingPage from '@/Component/LandingPage';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        {/* Add other meta tags, title, etc. if needed */}
      </Head>
      <LandingPage />
     
    </div>
    
  );
};

export default Page;

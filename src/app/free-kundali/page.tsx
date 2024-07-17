"use client";
// pages/kundali.tsx
import logo from "../../../public/Assets/astroshree.svg";
import React from 'react';
import KundaliForm from '../free-kundali/KundaliForm';
import styles from '../free-kundali/kundali.module.css'; // Make sure the path and filename match
import Header from '../Common/Header';
import Footer from '../Common/Footer/Footer';
import KundaliBlog from '../free-kundali/kundaliBlog';
import Head from 'next/head'; // Import Head for meta tags
import Image from 'next/image';

const KundaliPage = () => {
  return (
    <>
      <Head>
        <title>Free Kundli Online - Accurate Janam Kundli | AstroShree</title>
        <meta name="description" content="Get a detailed and accurate Kundli analysis prepared by expert astrologers at AstroShree. Our free Kundli service provides insights into various aspects of your life, including career, love life, marriage, business, and more." />
        <meta name="keywords" content="free kundli, janam kundli, kundli analysis, astroshree, birth chart, astrology, astroshree" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Free Kundli Online</h1>
          <div className={styles.subheading}>
            <h2>Get instant &amp; accurate Janam Kundli</h2>
          </div>
          <div className={styles.logoContainer}>
            <div className={`${styles.line} ${styles.leftLine}`}></div>
            <Image src={logo.src} alt="Astroshree Logo" />
            <div className={`${styles.line} ${styles.rightLine}`}></div>
          </div>
          <div>
            <p className={styles.paragraph}>
              Are you searching for a comprehensive analysis of your birth chart? Look no further! At AstroShree, we offer a detailed and accurate Kundli analysis prepared by expert astrologers. Our free Kundli service provides insights into various aspects of your life, including career, love life, marriage, business, and more.
            </p>
            <p className={styles.paragraph}>
              Our team of experienced astrologers meticulously analyzes your birth chart to provide you with personalized predictions and guidance. Whether you're seeking clarity on your current circumstances or looking to make informed decisions about your future, our free Kundli service is here to help.
            </p>
            <p className={styles.paragraph}>
              Our Kundli analysis considers the movement of all planets in your life, from your birth to 100 years into the future. This comprehensive approach enables us to uncover the underlying factors shaping your life and anticipate future events with accuracy.
            </p>
            <p className={styles.paragraph}>
              <a href="/free-kundali" className={styles.link}>Explore our free Kundli service</a> and discover what the stars have in store for you.
            </p>
          </div>
        </div>
        <div>
          <KundaliForm />
          <KundaliBlog />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KundaliPage;

"use client"
// pages/kundali.tsx
import logo from "../../../public/Assets/logo.svg";
import React from 'react';
import styles from '../kundali-matching/DetailForm.module.css'; // Make sure the path and filename match
import Header from '../Common/Header'; 
import Footer from '../Common/Footer/Footer';
import BoysDetailForm from './BoysDetailForm';
import GirlsDetailForm from './GirlsDetailForm';
import KundaliMatching from './kundaliMatching';
import KundaliMatchingBlog from "./KundaliMatchingBlog";

const KundaliMatchingPage = () => {
  return (

    <div >
    <Header />
    <div className={styles.container}>
    <main className={styles.main}>
      <h1>Kundli Matching</h1>
      <p>Find your right one through matchmaking.</p>
      <div className={styles.logoContainer}>
          <div className={`${styles.line} ${styles.leftLine}`}></div>
          <img src={logo.src} alt="Astroshree Logo" />
          <div className={`${styles.line} ${styles.rightLine}`}></div>
        </div>
      <h1>Free Match Making - Kundli Milan &amp; Gun Milan to Check Possibilities of Marriage</h1>
      <p>
        Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching, is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India culture for 1000s of years now and continues to be so.
      </p>
      <p>
        So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astroshree can help you. The Kundali milan online software on Astroshree has been prepared by the top astrologers of Astroshree. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astroshree, you can always connect with the astrologers on board and get those doubts sorted for yourself.
      </p>
      <div style={{ display: 'flex' }}>
        <KundaliMatching />
      </div>
      
    </main>
    <KundaliMatchingBlog/>
    </div>
    
    <Footer />
  </div>
  );
};

export default KundaliMatchingPage;

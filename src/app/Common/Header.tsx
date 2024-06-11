"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../../public/Assets/logo.svg";
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" passHref>
        <div className={styles.logo} onClick={handleLogoClick}>
          <Image src={logo.src} alt="Astroshree Logo" width={110} height={110} />
        </div>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/free-kundali">Free Kundali</a></li>
          <li><a href="/kundali-matching">Kundali Matching</a></li>
          <li>
            <a href="/horoscope">Horoscope <i className="fas fa-caret-down"></i></a>
            <ul>
              <li><a href="/horoscope/todays">Today&apos;s Horoscope</a></li>
              <li><a href="/horoscope/weekly">Weekly Horoscope</a></li>
              <li><a href="/horoscope/monthly">Monthly Horoscope</a></li>
              <li><a href="/horoscope/yearly">Yearly Horoscope</a></li>
              <li><a href="/horoscope/2024">Horoscope 2024</a></li>
              <li><a href="/horoscope/daily">Daily Horoscope</a></li>
              <li><a href="/horoscope/tomorrow">Tomorrow&apos;s Horoscope</a></li>
              <li><a href="/horoscope/yesterday">Yesterday&apos;s Horoscope</a></li>
            </ul>
          </li>
          <li><a href="/chat-with-astrologer">Chat with Astrologer</a></li>
          <li><a href="/talk-with-astrologer">Talk with Astrologer</a></li>
          <li><a href="/blog">Blog</a></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

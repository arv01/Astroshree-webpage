"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "../../../public/Assets/astroshree.svg";
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <header className={`${styles.header}}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <Link href="/" passHref>
        <div className={styles.logo} onClick={handleLogoClick}>
          <Image src={logo.src} alt="Astroshree Logo" width={110} height={110} />
        </div>
      </Link>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/free-kundali">Free Kundali</Link></li>
          <li><Link href="/kundali-matching">Kundali Matching</Link></li>
          <li>
            <Link href="/horoscope/todays">Horoscope <FontAwesomeIcon icon={faCaretDown} className={styles.dropdownIcon} /></Link>
            <ul>
              <li><Link href="/horoscope/todays">Today&apos;s Horoscope</Link></li>
              <li><Link href="/horoscope/weekly">Weekly Horoscope</Link></li>
              <li><Link href="/horoscope/monthly">Monthly Horoscope</Link></li>
              <li><Link href="/horoscope/daily">Daily Horoscope</Link></li>
              <li><Link href="/horoscope/tomorrow">Tomorrow&apos;s Horoscope</Link></li>
              <li><Link href="/horoscope/yesterday">Yesterday&apos;s Horoscope</Link></li>
            </ul>
          </li>
          <li><Link href="/chat-with-astrologer">Chat with Astrologer</Link></li>
          {/* <li><Link href="/talk-with-astrologer">Talk with Astrologer</Link></li> */}
          <li><Link href="/all-blog">Blog</Link></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;


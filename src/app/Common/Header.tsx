import React from 'react';
import Image from 'next/image';
import logo from "../../../public/Assets/logo.svg";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo.src} alt="Logo" width={50} height={50} />
      </div>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

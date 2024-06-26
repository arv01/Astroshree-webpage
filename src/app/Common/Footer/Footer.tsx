import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import facebook from "../../../../public/Assets/facebook_5968764.svg";
import insta from "../../../../public/Assets/instagram_2111463.svg";
import twitter from "../../../../public/Assets/twitter_3670151.svg";
import linkedin from "../../../../public/Assets/linkedin_145807.svg";
import youtube from "../../../../public/Assets/youtube_3670147.svg";
import pinterest_145808 from "../../../../public/Assets/pinterest_145808.svg";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-logo']}>
                <h1>AstroShree</h1>
                <p>AstroShree is your trusted companion in the realm of Indian astrology, offering a diverse array of services tailored to meet your needs. Our proficient astrologers delve deep into the cosmic energies to provide personalized consultations and insightful tarot readings. With a steadfast commitment to guiding individuals towards clarity and purpose, AstroShree illuminates paths across love, career, health, and spirituality. Rooted in the profound wisdom of astrology, we empower our clients to navigate life&apos;s complexities with confidence and grace, unlocking the doors to their fullest potential.</p>
            </div>
            <div className={styles['footer-links']}>
                <div className={styles['footer-section']}>
                    <h2>Horoscope</h2>
                    <ul>
                        <li><a href="/horoscope/todays">Today&apos;s Horoscope</a></li>
                        <li><a href="/horoscope/weekly">Weekly Horoscope</a></li>
                        <li><a href="/horoscope/monthly">Monthly Horoscope</a></li>
                        <li><a href="/horoscope/daily">Daily Horoscope</a></li>
                        <li><a href="/horoscope/tomorrow">Tomorrow&apos;s Horoscope</a></li>
                        <li><a href="/horoscope/yesterday">Yesterday&apos;s Horoscope</a></li>
                        {/* Add more horoscope links as needed */}
                    </ul>
                </div>
                <div className={styles['footer-section']}>
                    <h2>Kundli Matching</h2>
                    <ul>
                    <li><a href="/free-kundali">Janam Kundli</a></li>
                    <li><a href="/kundali-matching">Kundli Matching</a></li>
                       
                        {/* Add more Kundli Matching links as needed */}
                    </ul>
                </div>
                <div className={styles['social-medias']}>
                   
                    <ul>
                    <li>
                            <a href="https://www.facebook.com/astroshreelive" target="_blank" rel="noopener noreferrer">
                                <Image  src={facebook.src} width={40} height={40} alt="astroshree-Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/astroshreeapp" target="_blank" rel="noopener noreferrer">
                                <Image  src={twitter.src} width={40} height={40} alt="astroshree-Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/astroshriapp" target="_blank" rel="noopener noreferrer">
                                <Image  src={insta.src} width={40} height={40} alt="astroshree-Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/astro-shree-1058a6315/" target="_blank" rel="noopener noreferrer">
                                <Image src={linkedin.src}  width={40} height={40} alt="astroshree-LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCgEsMgrs7FKO7NnFXCGQH-w" target="_blank" rel="noopener noreferrer">
                                <Image  src={youtube.src} width={40} height={40} alt="astroshree-YouTube" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/astroshreelive/" target="_blank" rel="noopener noreferrer">
                                <Image  src={pinterest_145808.src} width={40} height={40} alt="astroshree-Pinterest" />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Add more sections with respective links */}
            </div>
            <div className={styles['footer-contact']}>
                <h2>Contact Us</h2>
                <p>Email: astroshree.live@gmail.com</p>
                <p>Phone: +91 82877003229</p>
            </div>
          
        </footer>
    );
};

export default Footer;

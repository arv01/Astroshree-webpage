// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

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
                        <li><a href="#">Today&apos;s Horoscope</a></li>
                        <li><a href="#">Weekly Horoscope</a></li>
                        <li><a href="#">Monthly Horoscope</a></li>
                        {/* Add more horoscope links as needed */}
                    </ul>
                </div>
                <div className={styles['footer-section']}>
                    <h2>Kundli Matching</h2>
                    <ul>
                        <li><a href="#">Janam Kundli</a></li>
                        <li><a href="#">Kundli Matching</a></li>
                        {/* Add more Kundli Matching links as needed */}
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

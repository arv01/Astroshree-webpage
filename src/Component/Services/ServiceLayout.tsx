// ServiceLayoutPage.tsx

import React from 'react';
import Image from 'next/image';
import styles from './ServiceLayout.module.css';
import LiveIcon from "@/assets/service/Live.svg";
import PanchangIcon from '@/assets/service/Panchang.svg';
import KundliIcon from '@/assets/service/Kundli.svg';
import BlogIcon from '@/assets/service/Blog.svg';
import HoroscopeIcon from '@/assets/service/Horoscope.svg';

const services = [
  {
    icon: LiveIcon,
    title: 'Astrologer Service',
    description: 'Get personalized horoscope readings and astrological guidance from our expert astrologers.'
  },
  {
    icon: PanchangIcon,
    title: 'Daily Panchang',
    description: 'Get daily information on planetary positions, tithi, nakshatra, and more.'
  },
  {
    icon: KundliIcon,
    title: 'Match Making',
    description: 'Find your perfect match with our astrology-based matchmaking service.'
  },
  {
    icon: BlogIcon,
    title: 'Numerology',
    description: 'Unlock the secrets of your life path and destiny with numerology predictions.'
  },
  {
    icon: HoroscopeIcon,
    title: 'Daily Horoscope',
    description: 'Get daily insights into your zodiac sign&apos;s horoscope and planetary influences.'
  }
];

const ServiceLayoutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Our Services</h1>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <Image
              className={styles.serviceIcon}
              src={service.icon.src}
              alt={service.title}
              width={50}  // Set appropriate width and height
              height={50} // Set appropriate width and height
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLayoutPage;

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.css'; // Ensure this file exists for styling
import Slide1 from "../../../public/Assets/banner1.svg";
import Slide2 from '../../../public/Assets/banner2.svg';
import Slide3 from '../../../public/Assets/banner3.svg';
import Slide4 from '../../../public/Assets/banner4.svg';
import Slide5 from '../../../public/Assets/banner5.svg';
import Slide6 from '../../../public/Assets/banner6.svg';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: Slide1, title: "Panchang" },
    { id: 2, content: Slide2, title: "Chat with Astrologer" },
    { id: 3, content: Slide3, title: "Numerology" },
    { id: 4, content: Slide4, title: "Tarot Reading" },
    { id: 5, content: Slide5, title: "Matchmaking" },
    { id: 6, content: Slide6, title: "Horoscope" },
  ];

  const plusSlides = useCallback((n: number) => {
    setCurrentSlide((prev) => (prev + n + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [plusSlides]);

  return (
    <div className={styles.slideshowContainer}>
      <div
        className={styles.slides}
        id="slides-container"
        style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Image src={slide.content.src}  alt={slide.title} className={styles.image} width={800} height={400} />
            <div className={styles.caption}>{slide.title}</div>
          </div>
          
        ))}
      </div>
      <a className={styles.prev} onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className={styles.next} onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
  );
};

export default Slideshow;

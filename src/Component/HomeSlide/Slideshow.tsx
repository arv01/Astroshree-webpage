"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.css'; // Ensure this file exists for styling
import Slide1 from "../../../public/Assets/banner1.svg";
import Slide2 from '../../../public/Assets/banner2.svg';
import Slide3 from '../../../public/Assets/banner3.svg';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: Slide1 },
    { id: 2, content: Slide2 },
    { id: 3, content: Slide3 },
    { id: 4, content: Slide2 },
    { id: 5, content: Slide3 },
    { id: 6, content: Slide1 },
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
            <Image src={slide.content.src} alt={`Slide ${slide.id}`} className={styles.image} width={800} height={400} />
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

import React, { useState } from 'react';
import styles from './Testimonial.module.css';

const TestimonialPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      content: "Astroshree has completely transformed my life! The guidance I received was invaluable.",
      author: "John Doe"
    },
    {
      content: "I can't thank the astrologers at Astroshree enough for their accurate and insightful readings.",
      author: "Jane Smith"
    },
    {
      content: "The daily horoscopes are spot on! I start every day by reading them.",
      author: "Mary Johnson"
    }
    // Add more testimonials as needed
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.testimonialauthor}>What Our Clients Say</h2>
      <div className={styles.testimonialContainer}>
        <button className={styles.testimonialPrev} onClick={prevSlide}>&#10094;</button>
        <div className={styles.testimonialWrapper}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${styles.testimonialSlide} ${index === currentSlide ? styles.active : ''}`}>
              <p>{testimonial.content}</p>
              <h3 className={styles.testimonialauthor}>- {testimonial.author}</h3>
            </div>
          ))}
        </div>
        <button className={styles.testimonialNext} onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default TestimonialPage;

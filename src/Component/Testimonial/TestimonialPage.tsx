import React, { useState } from 'react';
import styles from './Testimonial.module.css';

const TestimonialPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      content: "I have great pleasure in thanking to AstroShree team for their accurate prediction. I got a job within the predicted time period. And also his general predictions helped me a lot in different occasions. Once again, I am thankful for your quick reply. Definitely consult you again and again.",
      author: "Ankit Sharma"
    },
    {
      content: "I am very much pleased with the services offered by AstroShree. They are prompt in replying and has tremendous knowledge to clarify any kind of doubts in Astrology. I am thankful for the great assistance and detailed reading.",
      author: "Vishal Kumar"
    },
    {
      content: "I am immensely grateful to the AstroShree team for their incredibly accurate predictions. Following their guidance, I secured a job exactly within the predicted timeframe. Moreover, their general predictions have proven invaluable to me on numerous occasions. I deeply appreciate their prompt responses and guidance. I will certainly be consulting them again in the future.",
      author: "Shreya Singh"
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

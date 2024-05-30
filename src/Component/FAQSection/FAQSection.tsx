// components/FAQSection.tsx

import { useState } from 'react';
import styles from './FAQSection.module.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
          question: "What astrology services does AstroShree provide?",
          answer: "AstroShree offers a wide range of astrology services rooted in ancient astrological principles. Our expert astrologers provide personalized consultations covering various aspects of life, including love, career, finance, health, and spirituality."
        },
        {
          question: "How can I determine auspicious dates using the Hindu calendar?",
          answer: "AstroShree's Aaj Ka Panchang provides precise information on auspicious dates, festivals, and planetary positions according to the Hindu calendar. You can consult it for important events, ceremonies, or daily planning."
        },
        {
          question: "What is Janam Kundli?",
          answer: "Janam Kundli, also known as a birth chart, is an astrological chart representing the positions of the planets at the time of an individual's birth. It serves as a blueprint of one's life and can provide insights into various aspects of life, including personality, career, relationships, and more."
        },
        {
          question: "How accurate are horoscope readings?",
          answer: "The accuracy of horoscope readings can vary depending on various factors, including the skill and expertise of the astrologer, the accuracy of the birth details provided, and the complexity of the astrological techniques used. At AstroShree, our astrologers strive to provide accurate and insightful readings based on years of experience and in-depth knowledge of astrology."
        },
        {
          question: "Can astrology predict the future?",
          answer: "Astrology provides insights into potential future events based on the positions of celestial bodies at a given time. While astrology can offer guidance and predictions, it is important to remember that the future is not set in stone, and individuals have free will to make choices that can influence their destiny."
        },
        {
          question: "What is Kundli Matching?",
          answer: "Kundli Matching, also known as Kundli Milan or Horoscope Matching, is a Vedic astrology-based compatibility assessment performed before marriage. It involves analyzing the birth charts of the prospective bride and groom to assess their compatibility in various aspects of life, including personality, temperament, health, and more."
        },
        {
          question: "How can astrology help in making important life decisions?",
          answer: "Astrology can provide valuable insights and guidance in making important life decisions by analyzing the positions of celestial bodies and their influence on various aspects of life. Astrological consultations can offer clarity, understanding, and foresight, helping individuals make informed choices aligned with their life path and goals."
        }
      ];
      

    return (
        <div >
            <section className={styles['faq-section']}>
                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                {faqData.map((faq, index) => (
                    <div className={styles['faq-item']} key={index}>
                        <div className={styles.question} onClick={() => toggleAnswer(index)}>
                            <p>{faq.question}</p>
                            <button className={`${styles.chevron} ${activeIndex === index ? styles.expanded : ''}`}></button>
                        </div>
                        <div className={`${styles.answer} ${activeIndex === index ? styles.active : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default FAQSection;

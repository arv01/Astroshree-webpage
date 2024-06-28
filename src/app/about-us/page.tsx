import Head from 'next/head';
import styles from '../about-us/AboutUs.module.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header';

const AboutUs = () => {
  return (
    <div>
 <Header />
    <div className={styles.container}>
        <Head>
            <title>About Us - Astroshree</title>
            <meta name="description" content="Learn about Astroshree, its mission, vision, and the team behind the astrology consultancy services provided on www.astroshree.live." />
        </Head>

        <article>
            <h1 className={styles.title}>
            About Us
            </h1>

            <div className={styles.content}>
            <p>
                Astroshree is dedicated to providing reliable and accurate astrology consultancy services. Our mission is to offer insights and guidance based on astrological principles to help individuals navigate life&apos;s challenges and opportunities.
            </p>

            <p>
                At Astroshree, we believe in the power of astrology to provide valuable insights into various aspects of life, including relationships, career, health, and personal growth. Our team of experienced astrologers is committed to delivering personalized consultations and astrological reports that empower our clients to make informed decisions.
            </p>

            <p>
                Whether you&apos;re seeking clarity on your life&apos;s purpose, relationships, or career path, Astroshree is here to support you with compassionate and accurate astrological guidance.
            </p>

            <h2 className={styles.h2}>Contact Us</h2>
            <p>
                If you have any questions or inquiries about our services, please feel free to contact us at:
                <br />
                Astroshree, New Delhi, India
                <br />
                Email: astroshree.live@gmail.com
            </p>
            </div>
        </article>
        </div>
    <Footer />
    </div>
    
  );
};

export default AboutUs;

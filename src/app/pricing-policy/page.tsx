import Head from 'next/head';
import styles from '../pricing-policy/PricingPolicy.module.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header';

const PricingPolicy = () => {
  return (
    <div>
         <Header />
         <div className={styles.container}>
      <Head>
        <title>Pricing Policy - Astroshree</title>
        <meta name="description" content="Learn about Astroshree's pricing policy for astrology consultancy services, including fees, payment methods, and refund policies." />
      </Head>

      <article>
        <h1 className={styles.title}>
          Pricing Policy
        </h1>

        <div className={styles.content}>
          <p>
            At Astroshree, we strive to offer transparent pricing for our astrology consultancy services. Our pricing policy covers the fees, payment methods, and refund policies outlined below:
          </p>

          <h2 className={styles.h2}>Consultation Fees</h2>
          <p>
            We offer various consultation packages based on the type and duration of the session. Prices may vary depending on the expertise and experience of the astrologer conducting the consultation.
          </p>

          <h2 className={styles.h2}>Payment Methods</h2>
          <p>
            We accept payments through debit/credit cards, online banking, and other electronic payment methods. Payment details are securely processed through our payment gateway provider.
          </p>

          <h2 className={styles.h2}>Refund Policy</h2>
          <p>
            Refunds are available under certain conditions:
            <ul>
              <li>If a session is canceled before it begins, a full refund will be issued.</li>
              <li>No refund is available once the consultation has started.</li>
              <li>Refunds for technical issues or unsatisfactory service will be assessed on a case-by-case basis.</li>
            </ul>
          </p>

          <h2 className={styles.h2}>Contact Us</h2>
          <p>
            If you have any questions or concerns about our pricing policy, please contact us at:
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

export default PricingPolicy;

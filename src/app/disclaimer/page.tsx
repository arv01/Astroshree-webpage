import Head from 'next/head';
import styles from '../disclaimer/Disclaimer.module.css';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header';

const Disclaimer = () => {
  return (
    <div>
          <Header />
          <div className={styles.container}>
      <Head>
        <title>Disclaimer - Astroshree</title>
        <meta name="description" content="Read the disclaimer for using Astroshree's astrology consultancy services. Learn about limitations of liability, professional advice, and more." />
      </Head>

      <article>
        <h1 className={styles.title}>
          Disclaimer
        </h1>

        <div className={styles.content}>
          <p>
            Welcome to Astroshree. The information provided by Astroshree on www.astroshree.com is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>

          <p>
            The site may contain links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <p>
            Professional advice should always be sought before taking any action based on the information provided on the Site. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.
          </p>

          <h2 className={styles.h2}>Contact Us</h2>
          <p>
            If you have questions or comments about this Disclaimer, please contact us at:
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

export default Disclaimer;

// src/app/horoscope/[slug]/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import logo from "../../../../public/Assets/astroshree.svg";
import sign1 from '../../../../public/Assets/aries.jpg';
import sig2 from '../../../../public/Assets/taurus.jpg';
import sig3 from '../../../../public/Assets/gemini.jpg';
import sig4 from '../../../../public/Assets/cancer.jpg';
import sig5 from '../../../../public/Assets/leo.jpg';
import sig6 from '../../../../public/Assets/virgo.jpg';
import sig7 from '../../../../public/Assets/libra.jpg';
import sign8 from '../../../../public/Assets/scorpio.jpg';
import sign9 from '../../../../public/Assets/sagittarius.jpg';
import sig10 from '../../../../public/Assets/capricorn.jpg';
import sign11 from '../../../../public/Assets/aquarius.jpg';
import sig12 from '../../../../public/Assets/pisces.jpg';
import Header from '@/app/Common/Header';
import Footer from '@/app/Common/Footer/Footer';
import styles from './horoscopePage.module.css';
import HoroscopeBlog from '../horoscopeBlog';

export const metadata: Metadata = {
  title: "Today's Horoscope",
  description: "Get your horoscope for today!",
};

interface Horoscope {
  sign: string;
  prediction: string;
}

async function fetchHoroscopes(): Promise<Horoscope[]> {
  const response = [
    { sign: "Aries Today's Horoscope", prediction: 'Personal: You will feel like flirting with people, no matter if you are single or taken. Taken signs will get in trouble for this.' },
    { sign: "Taurus Today's Horoscope", prediction: 'Personal: Making an effort isn’t always easy. It takes work. But if something is meant to be, then don’t give up on it.' },
    { sign: "Gemini Today's Horoscope", prediction: 'Personal: If you are single, then today will be a bit of a confusing day for you. Lots of messy flirting, and no serious candidates for you to date. Married couples will have a lovely day full of laughter and fun.' },
    { sign: "Cancer Today's Horoscope", prediction: 'Personal: New connections will prove to be lucky for you today. Even if all is in your favor, you still have to take some steps, be more active and energetic to make these relations more lasting one.' },
    { sign: "Leo Today's Horoscope", prediction: 'Personal: If you are in a relationship, your partner notice that you are behaving a little off. Single signs enjoy the company of water signs today.' },
    { sign: "Virgo Today's Horoscope", prediction: 'Personal: Venus is sending out some loving energy to you, Virgo. If you are in a relationship, you will feel loved. Single signs are going to enjoy flirting with a Capricorn. They will have a captivating smile.' },
    { sign: "Libra Today's Horoscope", prediction: 'Personal: Single Libra signs may receive some very interesting and “spicy” texts today. It may blossom into something new... Taken Libra signs will feel absolutely stable and confident when it comes to their relationship.' },
    { sign: "Scorpio Today's Horoscope", prediction: 'Personal: Venus is making you feel doubtful about your romantic relationship. For some reason you will think about someone who you used to love in the past. This goes for taken and single Scorpio signs.' },
    { sign: "Sagittarius Today's Horoscope", prediction: 'Personal: Single signs feel happy just being single. A gorgeous Sagittarius will try to deceive you with their looks. This will cause you problems, especially if you’re already in a relationship.' },
    { sign: "Capricorn Today's Horoscope", prediction: "Personal: Single Capricorn signs will be in the mood to have something with someone that won't last very long. Married couples might argue about money later in the day." },
    { sign: "Aquarius Today's Horoscope", prediction: 'Personal: Aquarius, you want to be extra kind and extra compassionate towards your partner. Arrange a romantic evening with them. Single Aquarius signs will get a very cute text from their crush.' },
    { sign: "Pisces Today's Horoscope", prediction: 'Personal: Single Pisces signs feel good around kind and loving earth signs. You will be attracted to someone with a great sense of humor. That’s always a plus, isn’t it?' },
  ];
  return response;
}

const horoscopeIcons = [
  { sign: sign1 },
  { sign: sig2 },
  { sign: sig3 },
  { sign: sig4 },
  { sign: sig5 },
  { sign: sig6 },
  { sign: sig7 },
  { sign: sign8 },
  { sign: sign9 },
  { sign: sig10 },
  { sign: sign11 },
  { sign: sig12 }
];

const HoroscopePage = async () => {
  const horoscopes = await fetchHoroscopes();

  return (
    <div>
      <Header />
      <div className={`${styles.pageContainer}`}>
        <h1 className="text-4xl font-bold text-center mb-8">Today's Horoscope</h1>
        <div className={styles.logoContainer}>
          <div className={`${styles.line} ${styles.leftLine}`}></div>
          <img src={logo.src} alt="Astroshree Logo" />
          <div className={`${styles.line} ${styles.rightLine}`}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {horoscopes.map((horoscope, index) => (
            <div key={index} className="border p-4 rounded shadow flex bg-white flex-col items-center text-center">
              <div className="mb-4">
                <Image src={horoscopeIcons[index].sign} alt={horoscope.sign} width={100} height={100} />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{horoscope.sign}</h2>
              <p>{horoscope.prediction}</p>
            </div>
          ))}
        </div>
      </div>
      <HoroscopeBlog />
      <Footer />
    </div>
  );
};

export default HoroscopePage;

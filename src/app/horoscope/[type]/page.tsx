import { Metadata } from 'next';
import Image from 'next/image';
import logo from "../../../../public/Assets/astroshree.svg";
import styles from '../horoscopePage.module.css';
import Header from '@/app/Common/Header';
import Footer from '@/app/Common/Footer/Footer';
import TomorrowHoroscopeBlog from '../TomorrowHoroscopeBlog';
import DailyHoroscopeBlog from '../DailyHoroscopeBlog';
import WeeklyHoroscopeBlog from '../WeeklyHoroscopeBlog';
import MonthlyHoroscopeBlog from '../MonthlyHoroscopeBlog';
import YesterdayHoroscopeBlog from '../YesterdayHoroscopeBlog';
import TodayhoroscopeBlog from '../TodayhoroscopeBlog';
import icon1 from "../../../../public/Assets/aries.jpg";
import icon2 from "../../../../public/Assets/taurus.jpg";
import icon3 from "../../../../public/Assets/gemini.jpg";
import icon4 from "../../../../public/Assets/cancer.jpg";
import icon5 from "../../../../public/Assets/leo.jpg";
import icon6 from "../../../../public/Assets/virgo.jpg";
import icon7 from "../../../../public/Assets/libra.jpg";
import icon8 from "../../../../public/Assets/scorpio.jpg";
import icon9 from "../../../../public/Assets/sagittarius.jpg";
import icon10 from "../../../../public/Assets/capricorn.jpg";
import icon11 from "../../../../public/Assets/aquarius.jpg";
import icon12 from "../../../../public/Assets/pisces.jpg";

// { sign: "Aries Today's Horoscope", prediction: 'Personal: You will feel like flirting with people, no matter if you are single or taken. Taken signs will get in trouble for this.' },
//       { sign: "Taurus Today's Horoscope", prediction: 'Personal: Making an effort isn’t always easy. It takes work. But if something is meant to be, then don’t give up on it.' },
//       { sign: "Gemini Today's Horoscope", prediction: 'Personal: If you are single, then today will be a bit of a confusing day for you. Lots of messy flirting, and no serious candidates for you to date. Married couples will have a lovely day full of laughter and fun.' },
//       { sign: "Cancer Today's Horoscope", prediction: 'Personal: New connections will prove to be lucky for you today. Even if all is in your favor, you still have to take some steps, be more active and energetic to make these relations more lasting one.' },
//       { sign: "Leo Today's Horoscope", prediction: 'Personal: If you are in a relationship, your partner notice that you are behaving a little off. Single signs enjoy the company of water signs today.' },
//       { sign: "Virgo Today's Horoscope", prediction: 'Personal: Venus is sending out some loving energy to you, Virgo. If you are in a relationship, you will feel loved. Single signs are going to enjoy flirting with a Capricorn. They will have a captivating smile.' },
//       { sign: "Libra Today's Horoscope", prediction: 'Personal: Single Libra signs may receive some very interesting and “spicy” texts today. It may blossom into something new... Taken Libra signs will feel absolutely stable and confident when it comes to their relationship.' },
//       { sign: "Scorpio Today's Horoscope", prediction: 'Personal: Venus is making you feel doubtful about your romantic relationship. For some reason you will think about someone who you used to love in the past. This goes for taken and single Scorpio signs.' },
//       { sign: "Sagittarius Today's Horoscope", prediction: 'Personal: Single signs feel happy just being single. A gorgeous Sagittarius will try to deceive you with their looks. This will cause you problems, especially if you’re already in a relationship.' },
//       { sign: "Capricorn Today's Horoscope", prediction: "Personal: Single Capricorn signs will be in the mood to have something with someone that won't last very long. Married couples might argue about money later in the day." },
//       { sign: "Aquarius Today's Horoscope", prediction: 'Personal: Aquarius, you want to be extra kind and extra compassionate towards your partner. Arrange a romantic evening with them. Single Aquarius signs will get a very cute text from their crush.' },
//       { sign: "Pisces

// Define the valid horoscope types
type HoroscopeType = 'todays' | 'daily' | 'weekly' | 'monthly' | 'yesterday' | 'tomorrow';

export const metadata: Metadata = {
  title: "Horoscope",
  description: "Get your horoscope!",
};

interface Horoscope {
  sign: string;
  prediction: string;
}
const logoIcon = {
  horoscopeIcon: [
    {icon:icon1},
    { icon:icon2},
    {icon:icon3},
    { icon:icon4},
    { icon:icon5},
    {icon:icon6},
    {icon:icon7},
    {icon:icon8},
    {icon:icon9},
    {icon:icon10},
    {icon:icon11},
    {icon:icon12},
  ]
};



// Mock fetchHoroscopes function (you can replace this with an actual API call)
async function fetchHoroscopes(type: HoroscopeType): Promise<Horoscope[]> {
  const horoscopes = {
   
    todays: [
    
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
    ],
    
    daily: [
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
    ],
    weekly: [
      { sign: "Aries This Week's Horoscope", prediction: 'Personal: You will feel like flirting with people, no matter if you are single or taken. Taken signs will get in trouble for this.' },
      { sign: "Taurus This Week's Horoscope", prediction: 'Personal: Making an effort isn’t always easy. It takes work. But if something is meant to be, then don’t give up on it.' },
      { sign: "Gemini This Week's Horoscope", prediction: 'Personal: If you are single, then this week will be a bit of a confusing one for you. Lots of messy flirting, and no serious candidates for you to date. Married couples will have a lovely week full of laughter and fun.' },
      { sign: "Cancer This Week's Horoscope", prediction: 'Personal: New connections will prove to be lucky for you this week. Even if all is in your favor, you still have to take some steps, be more active and energetic to make these relations more lasting one.' },
      { sign: "Leo This Week's Horoscope", prediction: 'Personal: If you are in a relationship, your partner notice that you are behaving a little off. Single signs enjoy the company of water signs this week.' },
      { sign: "Virgo This Week's Horoscope", prediction: 'Personal: Venus is sending out some loving energy to you, Virgo. If you are in a relationship, you will feel loved. Single signs are going to enjoy flirting with a Capricorn. They will have a captivating smile.' },
      { sign: "Libra This Week's Horoscope", prediction: 'Personal: Single Libra signs may receive some very interesting and “spicy” texts this week. It may blossom into something new... Taken Libra signs will feel absolutely stable and confident when it comes to their relationship.' },
      { sign: "Scorpio This Week's Horoscope", prediction: 'Personal: Venus is making you feel doubtful about your romantic relationship. For some reason you will think about someone who you used to love in the past. This goes for taken and single Scorpio signs.' },
      { sign: "Sagittarius This Week's Horoscope", prediction: 'Personal: Single signs feel happy just being single. A gorgeous Sagittarius will try to deceive you with their looks. This will cause you problems, especially if you’re already in a relationship.' },
      { sign: "Capricorn This Week's Horoscope", prediction: "Personal: Single Capricorn signs will be in the mood to have something with someone that won't last very long. Married couples might argue about money later in the week." },
      { sign: "Aquarius This Week's Horoscope", prediction: 'Personal: Aquarius, you want to be extra kind and extra compassionate towards your partner. Arrange a romantic evening with them. Single Aquarius signs will get a very cute text from their crush.' },
      { sign: "Pisces This Week's Horoscope", prediction: 'Personal: Single Pisces signs feel good around kind and loving earth signs. You will be attracted to someone with a great sense of humor. That’s always a plus, isn’t it?' },
    ],
    monthly: [
      { sign: "Aries This Month's Horoscope", prediction: 'Personal: This month will bring significant changes in your personal life. Be open to new relationships and experiences.' },
      { sign: "Taurus This Month's Horoscope", prediction: 'Personal: Focus on building strong foundations in your relationships. Patience will be key this month.' },
      { sign: "Gemini This Month's Horoscope", prediction: 'Personal: You might face some challenges in your relationships. Communication will be crucial to overcoming them.' },
      { sign: "Cancer This Month's Horoscope", prediction: 'Personal: This month is favorable for nurturing your relationships. Spend quality time with loved ones.' },
      { sign: "Leo This Month's Horoscope", prediction: 'Personal: Be mindful of your ego in relationships. Focus on understanding and empathy.' },
      { sign: "Virgo This Month's Horoscope", prediction: 'Personal: You will feel a surge of energy in your personal life. Use this time to strengthen your relationships.' },
      { sign: "Libra This Month's Horoscope", prediction: 'Personal: Balance will be important this month. Ensure you are giving and receiving equally in your relationships.' },
      { sign: "Scorpio This Month's Horoscope", prediction: 'Personal: Deep emotional connections will be highlighted this month. Be open to exploring your feelings.' },
      { sign: "Sagittarius This Month's Horoscope", prediction: 'Personal: Adventure and spontaneity will mark your personal life. Embrace new experiences.' },
      { sign: "Capricorn This Month's Horoscope", prediction: 'Personal: Stability and security will be your focus this month. Strengthen your existing relationships.' },
      { sign: "Aquarius This Month's Horoscope", prediction: 'Personal: Innovation and change will influence your personal life. Be open to new ideas and perspectives.' },
      { sign: "Pisces This Month's Horoscope", prediction: 'Personal: Compassion and understanding will be key in your relationships. Be kind and empathetic.' },
    ],
    yesterday: [
      { sign: "Aries Yesterday's Horoscope", prediction: 'Personal: You will feel like flirting with people, no matter if you are single or taken. Taken signs will get in trouble for this.' },
      { sign: "Taurus Yesterday's Horoscope", prediction: 'Personal: Making an effort isn’t always easy. It takes work. But if something is meant to be, then don’t give up on it.' },
      { sign: "Gemini Yesterday's Horoscope", prediction: 'Personal: If you are single, then yesterday was a bit of a confusing day for you. Lots of messy flirting, and no serious candidates for you to date. Married couples had a lovely day full of laughter and fun.' },
      { sign: "Cancer Yesterday's Horoscope", prediction: 'Personal: New connections proved to be lucky for you yesterday. Even if all was in your favor, you still had to take some steps, be more active and energetic to make these relations more lasting one.' },
      { sign: "Leo Yesterday's Horoscope", prediction: 'Personal: If you were in a relationship, your partner noticed that you were behaving a little off. Single signs enjoyed the company of water signs yesterday.' },
      { sign: "Virgo Yesterday's Horoscope", prediction: 'Personal: Venus sent out some loving energy to you, Virgo. If you were in a relationship, you felt loved. Single signs enjoyed flirting with a Capricorn. They had a captivating smile.' },
      { sign: "Libra Yesterday's Horoscope", prediction: 'Personal: Single Libra signs may have received some very interesting and “spicy” texts yesterday. It may blossom into something new... Taken Libra signs felt absolutely stable and confident when it came to their relationship.' },
      { sign: "Scorpio Yesterday's Horoscope", prediction: 'Personal: Venus made you feel doubtful about your romantic relationship. For some reason you thought about someone who you used to love in the past. This went for taken and single Scorpio signs.' },
      { sign: "Sagittarius Yesterday's Horoscope", prediction: 'Personal: Single signs felt happy just being single. A gorgeous Sagittarius tried to deceive you with their looks. This caused you problems, especially if you were already in a relationship.' },
      { sign: "Capricorn Yesterday's Horoscope", prediction: "Personal: Single Capricorn signs were in the mood to have something with someone that wouldn't last very long. Married couples might have argued about money later in the day." },
      { sign: "Aquarius Yesterday's Horoscope", prediction: 'Personal: Aquarius, you wanted to be extra kind and extra compassionate towards your partner. Arrange a romantic evening with them. Single Aquarius signs got a very cute text from their crush.' },
      { sign: "Pisces Yesterday's Horoscope", prediction: 'Personal: Single Pisces signs felt good around kind and loving earth signs. You were attracted to someone with a great sense of humor. That’s always a plus, isn’t it?' },
    ],
    tomorrow: [
      { sign: "Aries Tomorrow's Horoscope", prediction: 'Personal: You will feel like flirting with people, no matter if you are single or taken. Taken signs will get in trouble for this.' },
      { sign: "Taurus Tomorrow's Horoscope", prediction: 'Personal: Making an effort isn’t always easy. It takes work. But if something is meant to be, then don’t give up on it.' },
      { sign: "Gemini Tomorrow's Horoscope", prediction: 'Personal: If you are single, then tomorrow will be a bit of a confusing day for you. Lots of messy flirting, and no serious candidates for you to date. Married couples will have a lovely day full of laughter and fun.' },
      { sign: "Cancer Tomorrow's Horoscope", prediction: 'Personal: New connections will prove to be lucky for you tomorrow. Even if all is in your favor, you still have to take some steps, be more active and energetic to make these relations more lasting one.' },
      { sign: "Leo Tomorrow's Horoscope", prediction: 'Personal: If you are in a relationship, your partner notice that you are behaving a little off. Single signs enjoy the company of water signs tomorrow.' },
      { sign: "Virgo Tomorrow's Horoscope", prediction: 'Personal: Venus is sending out some loving energy to you, Virgo. If you are in a relationship, you will feel loved. Single signs are going to enjoy flirting with a Capricorn. They will have a captivating smile.' },
      { sign: "Libra Tomorrow's Horoscope", prediction: 'Personal: Single Libra signs may receive some very interesting and “spicy” texts tomorrow. It may blossom into something new... Taken Libra signs will feel absolutely stable and confident when it comes to their relationship.' },
      { sign: "Scorpio Tomorrow's Horoscope", prediction: 'Personal: Venus is making you feel doubtful about your romantic relationship. For some reason you will think about someone who you used to love in the past. This goes for taken and single Scorpio signs.' },
      { sign: "Sagittarius Tomorrow's Horoscope", prediction: 'Personal: Single signs feel happy just being single. A gorgeous Sagittarius will try to deceive you with their looks. This will cause you problems, especially if you’re already in a relationship.' },
      { sign: "Capricorn Tomorrow's Horoscope", prediction: "Personal: Single Capricorn signs will be in the mood to have something with someone that won't last very long. Married couples might argue about money later tomorrow." },
      { sign: "Aquarius Tomorrow's Horoscope", prediction: 'Personal: Aquarius, you want to be extra kind and extra compassionate towards your partner. Arrange a romantic evening with them. Single Aquarius signs will get a very cute text from their crush.' },
      { sign: "Pisces Tomorrow's Horoscope", prediction: 'Personal: Single Pisces signs feel good around kind and loving earth signs. You will be attracted to someone with a great sense of humor. That’s always a plus, isn’t it?' },
    ],
  };

  return horoscopes[type] || [];
}


// Introduction mapping for each horoscope type
const horoscopeIntros: { [key in HoroscopeType]: { title: string, subTitle: string, description: string ,intro: String} } = {
  todays: {
    title: "Today's Horoscope",
    subTitle: "Your Daily Cosmic Insights",
    intro:"Unveiling the Mysteries of Today's Horoscope",
    description: "In the vast expanse of the cosmos, where stars twinkle like scattered jewels and planets dance in cosmic harmony, lies a profound mystery waiting to be unveiled - the enigmatic language of the heavens. Today's horoscope serves as our celestial compass, guiding us through the labyrinth of fate and offering glimpses into the intricate web of destiny woven by the cosmos.As dawn breaks and the world stirs from its slumber, the celestial stage is set for a spectacle unlike any other. The ancient art of astrology, passed down through the annals of time, finds its manifestation in the daily horoscope, a beacon of light amidst the uncertainty of life's journey. At the heart of astrology lies the belief that the celestial bodies - the sun, moon, planets, and stars - exert a profound influence on earthly affairs. Each zodiac sign, infused with its unique cosmic energy, serves as a vessel through which the universe communicates its divine wisdom."
  },
  daily: {
    title: "Daily Horoscope",
    subTitle: "Start Your Day with the Stars",
    intro:"Daily Horoscope: Your Guide to the Stars",
    description: "Reading your Daily Horoscope is a fascinating way to gain insights into your day. This ancient practice of foretelling the future remains relevant today, providing predictions based on astrological elements like planetary positions, Nakshatras, Tithi, and more. The daily movement of planets significantly impacts an individual's life, influencing their daily horoscope. By keeping track of these celestial shifts, you can better understand the events and opportunities that may come your way each day. Horoscope reading is a cherished Vedic tradition that has gained global acceptance. People from all walks of life turn to daily horoscopes for guidance and inspiration. Whether accessed through TV, newspapers, magazines, or online platforms, the purpose of the Daily Horoscope remains consistent: to prepare you for life's challenges and opportunities by offering foresight into daily occurrences. Astrological signs, or zodiac signs, form the foundation of daily horoscopes. According to Indian astrology, there are 12 zodiac signs: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each individual has both a Sun Sign and a Moon Sign. The Sun sign is determined by your birth date, as the Sun stays in each zodiac sign for about 30 days. The sign where the Sun was positioned at your birth is your Sun sign. The Moon changes its position every 2 to 3 days, and the sign it was in at your birth is your Moon sign. Astrologers often prefer reading daily horoscopes based on the Moon sign for its frequent changes and detailed insights. Through your daily horoscope, astrologers can predict details about various aspects of your life, including love, career, health, and more. The Horoscope today for different zodiac signs can clear doubts and help you make informed decisions. Whether you're planning to start something new or seeking advice on personal matters, your Daily Horoscope offers timely guidance. Wondering if today is the best day to take a significant step? Check your Daily Horoscope. Planning to express your feelings to someone special? Your Love Horoscope might have the answers. At Astrotalk, our team of experienced astrologers provides the most accurate and insightful daily, weekly, monthly, and yearly horoscopes. Our free horoscopes offer an authentic glimpse into your future, helping you navigate life confidently. If the day's forecast isn't favorable, our astrologers can suggest remedies to improve your circumstances. By staying attuned to your horoscope, you can approach each day with preparedness and optimism."
  },
  weekly: {
    title: "Weekly Horoscope",
    subTitle: "Your Week Ahead",
    intro:"Navigating the Cosmic Currents: Your Weekly Horoscope Unveiled",
    description: "In the vast expanse of the celestial realm, where stars shimmer and planets orbit in a timeless ballet, lies the captivating saga of the weekly horoscope. A sacred narrative woven into the fabric of time, it offers a glimpse into the cosmic symphony that shapes our destinies. As the sun sets on one week and rises on the next, a new chapter unfolds in the cosmic saga of our lives. The weekly horoscope stands as a celestial compass, guiding us through the ebb and flow of the cosmic tides and illuminating the path ahead. Rooted in ancient wisdom and steeped in tradition, astrology unveils the intricate interplay of planetary energies that govern our earthly existence. Each zodiac sign, infused with its unique celestial essence, resonates with the cosmic vibrations that reverberate throughout the universe."
  },
  monthly: {
    title: "Monthly Horoscope",
    subTitle: "Unlock the Secrets of the Month",
    intro:"Embracing the Cosmic Rhythms: Your Monthly Horoscope Unveiled",
    description: "As we turn the pages of the calendar, each new month heralds a fresh chapter in the cosmic narrative that shapes our lives. The monthly horoscope stands as a celestial guide, offering insights into the intricate dance of the planets and stars that influence our journey through time.Rooted in the ancient art of astrology, the monthly horoscope provides a comprehensive overview of the celestial energies at play. It is a tapestry woven with the threads of planetary movements, lunar phases, and astrological transits, each contributing to the unique story of the month ahead.The zodiac, with its twelve distinct signs, serves as the foundation for this cosmic map. From the dynamic and pioneering spirit of Aries to the compassionate and intuitive nature of Pisces, each sign brings its own flavor to the celestial landscape. The monthly horoscope delves into the essence of these signs, revealing how the shifting positions of the planets will impact each one."
  },
  yesterday: {
    title: "Yesterday's Horoscope",
    subTitle: "Unlock Insights from the Past to Navigate Your Future with Clarity and Wisdom",
    intro:"Reflecting on the Past: Your Yesterday’s Horoscope Revealed",
    description: "As the sun sets and a new day dawns, taking a moment to reflect on yesterday can offer valuable insights and understanding. Yesterday's horoscope provides a glimpse into the celestial influences that shaped the events, emotions, and experiences of the day just passed. It serves as a guide to help you understand the cosmic energies that were at play and how they impacted your journey. Astrology, with its rich history and profound wisdom, allows us to connect the dots between the movements of the planets and the unfolding of our lives. Each zodiac sign, with its unique characteristics and tendencies, experiences the dance of the cosmos in distinct ways. Yesterday's horoscope is a tool to decode these influences, offering clarity and perspective on the past."
  },
  tomorrow: {
    title: "Tomorrow's Horoscope",
    subTitle: "Prepare for the Day Ahead with Astrological Guidance and Forecasts",
    intro:"Tomorrow's Horoscope: Navigating Your Future",
    description: "Understanding your tomorrow's horoscope can provide you with insights and foresight, helping you to prepare for what lies ahead. Astrological predictions for the coming day take into account various celestial factors, including the position of planets, Nakshatras, Tithis, and more. The movement of these celestial bodies from one house of your Kundli to another plays a significant role in shaping your daily experiences and future events. The practice of reading horoscopes has deep roots in ancient traditions and remains a vital part of many people's lives today. Horoscopes are a bridge between the cosmic influences and your personal journey, guiding you through the ups and downs of life. They offer predictions that can help you navigate love, career, health, and other significant areas of life."
  }
};


const HoroscopePage = async ({ params }: { params: { type: HoroscopeType } }) => {
  const { type } = params;
  const horoscopes = await fetchHoroscopes(type);

  let Component;

  switch (type) {
    case 'todays':
      Component = TodayhoroscopeBlog;
      break;
    case 'daily':
      Component = DailyHoroscopeBlog;
      break;
    case 'tomorrow':
      Component = TomorrowHoroscopeBlog;
      break;
    case 'yesterday':
      Component = YesterdayHoroscopeBlog;
      break;
    case 'weekly':
      Component = WeeklyHoroscopeBlog;
      break;
    case 'monthly':
      Component = MonthlyHoroscopeBlog;
      break;
    default:
      return <div>Invalid horoscope type</div>;
  }
  const { title, subTitle,intro, description } = horoscopeIntros[type];
  return (
    <div>
    <Header />
    <div className={styles.pageContainer}>
      <div className="mb-8">
      <div className="flex flex-col items-center text-center mt-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <h2 className="text-2xl font-semibold mb-4">{subTitle}</h2>
        </div>

        <div className={styles.logoContainer}>
          <div className={`${styles.line} ${styles.leftLine}`}></div>
          <Image src={logo.src} alt="Astroshree Logo" />
          <div className={`${styles.line} ${styles.rightLine}`}></div>
        </div>
        <h1 className="text-4xl font-bold mb-2">{intro}</h1>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {horoscopes.map((horoscope, index) => (
            <div key={index} className="border p-4 rounded shadow flex bg-white items-center text-left">
              <Image src={logoIcon.horoscopeIcon[index % logoIcon.horoscopeIcon.length].icon} alt="Icon" width={100} height={100} className="mr-4" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-2">{horoscope.sign}</h2>
                <p>{horoscope.prediction}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    <Component />
    <Footer />
  </div>
  );
};

export default HoroscopePage;

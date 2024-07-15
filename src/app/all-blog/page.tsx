"use client"
// components/BlogPage.js
import React from 'react';
import Image from 'next/image';
import styles from '../all-blog/Blogs.module.css';
import blog1 from "../../../public/Assets/blog1.svg";
import blog2 from "../../../public/Assets/blog2.svg";
import blog3 from "../../../public/Assets/blog3.svg";
import blog4 from "../../../public/Assets/blog4.svg";
import blog5 from "../../../public/Assets/blog5.svg";
import blog6 from "../../../public/Assets/blog6.svg";
import blog7 from '../../../public/Assets/blog7.jpg'; // Add import for new blog image
import blog8 from '../../../public/Assets/broken-heart-concept.jpg';
import blog9 from '../../../public/Assets/young-couple-cooking-home.jpg';
import blog10 from '../../../public/Assets/home-office-time-capsule-crafting-digital-memories-reflections.jpg';
import blog11 from "../../../public/Assets/3d-photo-clock-wallpaper.jpg";
import blog12 from "../../../public/Assets/Construction-of-a-chart1.jpg";
import blog13 from "../../../public/Assets/planets-horoscope.jpg";
import blog14 from "../../../public/Assets/astrological-remedies.jpg";
import blog15 from "../../../public/Assets/career-path.jpg";
import blog16 from "../../../public/Assets/financial-astrology.jpg";
import blog17 from "../../../public/Assets/horoscope-12-houses.jpg";
import blog18 from "../../../public/Assets/spiritual-growth.jpg";
import blog19 from "../../../public/Assets/planets-horoscopes.jpg";
import blog20 from "../../../public/Assets/saturn-return-image.jpg";
import blog21 from "../../../public/Assets/karma-destiny-image.jpg";
import blog22 from "../../../public/Assets/astrology-in-everyday-life.jpg";
import blog23 from "../../../public/Assets/zodiac-journey.jpg";
import blog24 from "../../../public/Assets/starry-wisdom.jpg";
import blog25 from "../../../public/Assets/zodiac-diaries.jpg";
import blog26 from "../../../public/Assets/marriage-matching.jpg";
import blog27 from "../../../public/Assets/palmistry.jpg";
import blog28 from "../../../public/Assets/life-line.jpg";

import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Header from '../Common/Header';
import Footer from '../Common/Footer/Footer';

const blogPostsData = [
  { 
    id: 1, 
    slug: "unraveling-the-mysteries-of-manglik-dosh-and-its-influence-on-each-zodiac-sign", 
    image: blog1, 
    date: '06/01/2024', 
    description: 'Delve into the intriguing world of Manglik Dosh and its profound impact on each zodiac sign.' 
  },
  { 
    id: 2, 
    slug: "how-many-guna-matching-is-needed-for-a-successful-marriage-a-comprehensive-guide", 
    image: blog2, 
    date: '10/02/2024', 
    description: 'Discover the significance of Guna matching in ensuring a successful marriage journey.' 
  },
  { 
    id: 3, 
    slug: "Powerful-Gemstones-for-Love-and-Marriage", 
    image: blog3, 
    date: '15/03/2024', 
    description: 'Explore the power of gemstones and their role in fostering love and harmony in relationships.' 
  },
  { 
    id: 4, 
    slug: "nadi-dosh", 
    image: blog4, 
    date: '20/04/2024', 
    description: 'Uncover the mysteries of Nadi Dosh and its implications on marital bliss.' 
  },
  { 
    id: 5, 
    slug: "scared-to-fall-in-love", 
    image: blog5, 
    date: '25/05/2024', 
    description: 'Discover why some zodiac signs are hesitant to take the plunge into love and commitment.' 
  },
  { 
    id: 6, 
    slug: "compatible-zodiac-signs", 
    image: blog6, 
    date: '23/06/2024', 
    description: 'Find out which zodiac signs are most compatible with each other and explore the dynamics of perfect partnerships.' 
  },
  { 
    id: 7, 
    slug: "putra-parapti-astrology-and-the-birth-of-a-son", 
    image: blog7, 
    date: '25/06/2024', 
    description: 'Putra Parapti: Understanding Astrology and the Birth of a Son.' 
  },
  {
    id: 8,
    slug: "kya-mujhe-mera-khoya-hua-pyar-milega",
    image: blog8  ,
    date: '26/06/2024',
    description: 'Kya Mujhe Mera Khoya Hua Pyar Milega?',
    content: 'Content of the blog post...'
  },
  {
    id: 9,
    slug: "vastu-for-the-kitchen-designing-the-heart-of-your-home",
    image: blog9,
    date: '22/06/2024',
    description: 'Kitchen Vastu: Creating Harmony in the Heart of Your Home.',
    content: 'Content of the blog post...'
  },
  {
    id: 10,
    slug: "vastu-for-career-success-designing-your-home-office",
    image: blog10,
    date: '21/06/2024',
    description: 'Home Office Vastu: Tips for Career Success.',
    content:""
  },
  {
    id: 11,
    slug: "vastu-shastra-understanding-orientation-and-directions",
    image: blog11,
    date: '2024-06-21',
    description: 'Vastu Shastra: Exploring Orientation and Directions.',
    content: ""
  },
  {
    id: 12,
    slug: "understanding-your-birth-chart-basics-of-natal-astrology",
    image: blog12,
    date: '2024-07-06',
    //description: 'Explore the fundamentals of natal astrology and learn how to interpret your birth chart for personal insights and growth.',
    description: 'Understanding Your Birth Chart: The Basics of Natal Astrology'
  },
  {
    id: 13,
    slug: "role-of-planets-in-your-horoscope-how-they-affect-your-daily-life",
    image: blog13,
    date: '2024-07-06',
    //description: 'Learn how the planets in your horoscope influence various aspects of your daily life, including personality, behavior, and experiences.',
    description: 'The Role of Planets in Your Horoscope: How They Affect Your Daily Life'
  },
  {
    id: 14,
    slug: "astrological-remedies-using-gemstones-mantras-and-rituals",
    image: blog14,
    date: '2024-07-06',
    //description: 'Discover powerful astrological remedies such as gemstones, mantras, and rituals to enhance various aspects of life and overcome challenges.',
    description: 'Astrological Remedies: Using Gemstones, Mantras, and Rituals for Better Life'
  },
  {
    id: 15,
    slug: "career-predictions-choosing-the-right-path-through-astrology",
    image: blog15,
    date: '2024-07-07',
   // description: 'Explore how astrology can guide you in making informed career choices and achieving professional success.',
    description: 'Career Predictions: Choosing the Right Path Through Astrology'
},
{
  id: 16,
  slug: "financial-success-and-astrology-best-times-to-invest-and-save",
  image: blog16,
  date: '2024-07-07',
  //description: 'Learn how astrology can help you identify the best times for investing and saving to achieve financial success.',
  description: 'Financial Success and Astrology: Best Times to Invest and Save'
},
{
  id: 17,
  slug: "importance-of-12-houses-in-your-horoscope",
  image: blog17,
  date: '2024-07-07',
  //description: 'Explore the significance of the 12 houses in your horoscope and how they influence various aspects of your life.',
  description: 'The Importance of the 12 Houses in Your Horoscope'
},
{
  id: 18,
  slug: "astrology-and-spiritual-growth-finding-your-life-purpose",
  image: blog18,
  date: '2024-07-07',
  //description: 'Explore how astrology can guide you in finding your life purpose and support your journey of spiritual growth and self-discovery.',
  description: 'Astrology and Spiritual Growth: Finding Your Life Purpose'
},
{
  id: 19,
  slug: "astrology-and-health-how-planetary-positions-affect-well-being",
  image: blog19,
  date: '2024-07-07',
  //description: 'Learn how the positions of planets in your horoscope can influence your health and well-being, and discover astrological remedies to enhance your vitality.',
  description: 'Astrology and Health: How Planetary Positions Affect Well-Being'
},
{
  id: 20,
  slug: "the-significance-of-saturn-return-and-life-transformations",
  image: blog20,
  date: '2024-07-07',
  //description: 'Explore the astrological phenomenon of Saturn return and its profound impact on life transitions, personal growth, and maturity.',
  description: 'The Significance of Saturn Return and Life Transformations'
},
{
  id: 21,
  slug: "the-role-of-karma-and-destiny-in-astrology",
  image: blog21,
  date: '2024-07-08',
  //description: 'Explore the concepts of karma and destiny in astrology, their influence on life events, and how understanding them can provide spiritual insights.',
  description: 'The Role of Karma and Destiny in Astrology'
},
{
  id: 22,
  slug: "astrology-in-everyday-life-practical-applications-and-insights",
  image: blog22, // Placeholder for your image import or URL
  date: '2024-07-08',
  //description: 'Explore practical ways astrology can enrich daily life, from decision-making to personal growth, and how understanding cosmic influences can provide valuable insights.',
  description: 'Astrology in Everyday Life: Practical Applications and Insights'
},
{
  id: 23,
  slug: "unlocking-the-mysteries-of-the-zodiac-a-journey-through-the-stars",
  image: blog23, // Placeholder for your image import or URL
  date: '2024-07-10',
  //description: 'Embark on a journey through the stars as we explore the mysteries of the Zodiac. Discover the influence of zodiac signs on personality, life paths, and relationships.',
  description: 'Unlocking the Mysteries of the Zodiac: A Journey Through the Stars'
},
{
  id: 24,
  slug: "starry-wisdom-how-your-zodiac-sign-shapes-your-life",
  image: blog24, // Placeholder for your image import or URL
  date: '2024-07-11',
  //description: 'Discover how your zodiac sign influences your personality, decisions, and life path. Unveil the wisdom of the stars in shaping your destiny.',
  description: 'Starry Wisdom: How Your Zodiac Sign Shapes Your Life'
},
{
  id: 25,
  slug: "the-zodiac-diaries-real-life-experiences-and-horoscope-insights",
  image: blog25, // Placeholder for your image import or URL
  date: '2024-07-11',
  //description: 'Delve into real-life experiences and horoscope insights that highlight how the zodiac shapes our daily lives and personal journeys.',
  description: 'The Zodiac Diaries: Real-Life Experiences and Horoscope Insights'
},
{
  id: 26,
  slug: "vivah-milan-marriage-matching-kundli-milan-marital-issues-auspicious-time",
  image: blog26, // Placeholder for your image import or URL
  date: '2024-07-12',
  description: 'विवाह मिलान (Marriage Matching): कुंडली मिलान, वैवाहिक जीवन की समस्याएं, विवाह के लिए अनुकूल समय'
},
{
  id: 27,
  slug: "navigating-lifes-path-understanding-palmistry-and-your-unique-journey",
  image: blog27, // Placeholder for your image import or URL
  date: '2024-07-12',
  description: "Navigating Life's Path: Understanding Palmistry and Your Unique Journey"
},
{
  id: 28,
  slug: "exploring-your-life-line-what-jewan-rekha-reveals-about-your-journey",
  image: blog28, // Placeholder for your image import or URL
  date: '2024-07-12',
  description: "Exploring Your Life Line: What 'Jewan Rekha' Reveals About Your Journey"
}
];

const BlogPage = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = (slug: string) => {
    router.push(`/blog/${slug}`); // Navigate to the details page when a blog post is clicked
  };

  return (
    <div>
         <Header />
      <section className={styles.blogSection}>
        <h2>Latest from Astroshree Blog</h2>
        <p>Read our latest updates and news on the blog</p>
        <div className={styles.blogPostsContainer}>
          {blogPostsData.map((post) => (
            <div key={post.id} className={styles.blogPost} onClick={() => handleClick(post.slug)}>
              <Image src={post.image.src} alt={`Blog post ${post.slug}`} width={500} height={300} />
              <div className={styles.dateContainer}>
              <div className={styles.date}>{post.date}</div>
                <div className={styles.date}>By Astroshree</div>
                
              </div>
              <div className={styles.description}>{post.description}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;

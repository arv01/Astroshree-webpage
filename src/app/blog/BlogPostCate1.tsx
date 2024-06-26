import Head from 'next/head';
import Image from 'next/image';
import styles from '../blog/case1.module.css';
import blog1 from '../../../public/Assets/blog1.svg'; 

const BlogCase1Post = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Unraveling the Mysteries of Manglik Dosh and Its Influence on Each Zodiac Sign</title>
      </Head>
      <h1 className={`${styles.title} text-1xl font-bold text-center mb-8`}>
        Unraveling the Mysteries of Manglik Dosh and Its Influence on Each Zodiac Sign
      </h1>
      <div className="w-full max-w-4xl mx-auto mb-4">
        <div className={styles.imageContainer}>
          <Image 
            src={blog1} 
            alt="Blog post: Unraveling the Mysteries of Manglik Dosh and Its Influence on Each Zodiac Sign"
            className={styles.image}
            layout="fill" // Ensures the image fills the container
          />
        </div>
      </div>
      <article className="prose lg:prose-xl mx-auto">
        <div className={styles.prose}>
          <h1>Introduction</h1>
          <p>Manglik Dosh, also known as Mangal Dosha, is a significant astrological condition in Vedic astrology that is believed to influence an individual&apos;s life, particularly their marital prospects and relationships. This dosh occurs when Mars (Mangal) is positioned in certain houses of the birth chart. Let&apos;s delve deeper into what Manglik Dosh is, how it is formed, and its effects on each zodiac sign.</p>
        </div>
        
        <div className={styles.prose}>
          <h1>What is Manglik Dosh?</h1>
          <p>Manglik Dosh is formed when Mars is positioned in the 1st, 4th, 7th, 8th, or 12th house of a person&apos;s birth chart. Mars is considered a fiery and aggressive planet, and its placement in these houses is believed to cause tension, delays, and challenges in marriage and relationships.</p>
        </div>
        
        <div className={styles.prose}>
          <h1>General Effects of Manglik Dosh</h1>
          <ul>
            <li><strong>Marital Discord</strong>: Those with Manglik Dosh are believed to face delays in marriage, and once married, they might experience conflicts and misunderstandings with their spouse.</li>
            <li><strong>Health Issues</strong>: It can also cause health problems, especially related to blood and the digestive system.</li>
            <li><strong>Financial Struggles</strong>: Financial instability and hurdles in career growth can be another consequence.</li>
            <li><strong>Emotional Turmoil</strong>: Increased stress and emotional disturbances are common among Manglik individuals.</li>
          </ul>
        </div>
        
        <div className={styles.prose}>
          <h1>Manglik Dosh and Its Influence on Each Zodiac Sign</h1>
          <div className="space-y-4">
            {[
              { sign: "Aries", impact: "Aries, being ruled by Mars, might face amplified effects. Impatience and aggression in relationships are common.", remedies: "Chanting Hanuman Chalisa and observing fasts on Tuesdays can help mitigate the effects." },
              { sign: "Taurus", impact: "Financial difficulties and misunderstandings in marital life.", remedies: "Visiting Navagraha temples and donating red lentils on Tuesdays." },
              { sign: "Gemini", impact: "Communication issues and frequent arguments with spouse.", remedies: "Wearing a coral gemstone after consulting an astrologer." },
              { sign: "Cancer", impact: "Emotional instability and health issues.", remedies: "Performing Kumbh Vivah (a ritual marriage to a pot) before the actual marriage." },
              { sign: "Leo", impact: "Power struggles and ego clashes in relationships.", remedies: "Reciting the Navagraha Stotra and donating sweets to the needy on Tuesdays." },
              { sign: "Virgo", impact: "Anxiety and overthinking, leading to strained relationships.", remedies: "Keeping fasts on Tuesdays and offering red flowers to Lord Hanuman." },
              { sign: "Libra", impact: "Balance issues in love and financial partnerships.", remedies: "Lighting a lamp with sesame oil in front of Hanuman idol." },
              { sign: "Scorpio", impact: "Intense and tumultuous relationships.", remedies: "Wearing a red coral gemstone and participating in Rudra Abhishek." },
              { sign: "Sagittarius", impact: "Delays in marriage and professional instability.", remedies: "Offering sweets to monkeys and chanting Mangal Beej Mantra." },
              { sign: "Capricorn", impact: "Career-related stress affecting personal life.", remedies: "Performing Mangal Shanti Pooja and feeding birds." },
              { sign: "Aquarius", impact: "Challenges in maintaining long-term relationships.", remedies: "Donating red clothes to the poor and chanting Hanuman Chalisa regularly." },
              { sign: "Pisces", impact: "Emotional and psychological stress impacting marital harmony.", remedies: "Offering vermillion to Lord Hanuman and observing fasts on Tuesdays." }
            ].map(({ sign, impact, remedies }) => (
              <div key={sign}>
                <h3 className="text-2xl font-semibold">{sign}</h3>
                <p><strong>Impact</strong>: {impact}</p>
                <p><strong>Remedies</strong>: {remedies}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.prose}>
          <h1>Conclusion</h1>
          <p>While Manglik Dosh can have various adverse effects on an individual&apos;s life, it&apos;s important to remember that these influences can be mitigated through specific remedies and astrological guidance. Understanding how Mars&apos; placement affects each zodiac sign can help individuals take proactive steps to balance these energies and lead a harmonious life.</p>
        </div>
        
        <div className={styles.prose}>
          <h1>About the Author</h1>
          <p><strong>by Astroshree</strong> is a seasoned astrologer with over a decade of experience in Vedic astrology. Passionate about helping individuals navigate their astrological paths, Astroshree specializes in relationship astrology and spiritual guidance.</p>
        </div>
      </article>
    </div>
  );
};

export default BlogCase1Post;

// pages/blog/[slug].js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import RoseQuartzImage from "../../../../public/Assets/RoseQuartzImage.jpg";
import RubyImage from "../../../../public/Assets/RubyImage.jpg";
import EmeraldImage from "../../../../public/Assets/EmeraldImage.jpg";
import SapphireImage from "../../../../public/Assets/SapphireImage.jpg";
import MoonstoneImage from "../../../../public/Assets/MoonstoneImage.jpg";
import CitrineImage from "../../../../public/Assets/CitrineImage.jpg";
import AquamarineImage from "../../../../public/Assets/AquamarineImage.jpg";
import Layout from "@/app/layout";
import Header from '../../Common/Header'; 
import Footer from '../../Common/Footer/Footer';
import styles from '../BlogsDetails.module.css';
import blog1 from "../../../../public/Assets/blog1.svg";
import blog2 from "../../../../public/Assets/blog2.svg";
import blog3 from "../../../../public/Assets/blog3.svg";
import blog4 from "../../../../public/Assets/blog4.svg";
import blog5 from "../../../../public/Assets/blog5.svg";
import blog6 from "../../../../public/Assets/blog6.svg";
import { blogPostsData } from '../../../data/blogPostsData'; // Import blog posts data from a file

interface Params {
  slug: string | string[] | undefined;
}

const BlogDetailPage = ({ params }: { params: Params }) => {
  const { slug } = params;
  const selectedPost = blogPostsData.find(post => post.slug === slug);

  if (!selectedPost) {
    return <div>Page not found</div>;
  }

  const renderBlogContent = () => {
    switch (slug) {
     
      case "unraveling-the-mysteries-of-manglik-dosh-and-its-influence-on-each-zodiac-sign":
        return (
          <div>
            <div className="container mx-auto px-4 py-8">
              <Head>
                <title>Unraveling the Mysteries of Manglik Dosh and Its Influence on Each Zodiac Sign</title>
              </Head>
              <h1 className="text-4xl font-bold text-center mb-8">Unraveling the Mysteries of Manglik Dosh and Its Influence on Each Zodiac Sign</h1>
              <div className="w-full max-w-3xl mx-auto mb-8">
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
                <section>
                  <h2>Introduction</h2>
                  <p>Manglik Dosh, also known as Mangal Dosha, is a significant astrological condition in Vedic astrology that is believed to influence an individual&apos;s life, particularly their marital prospects and relationships. This dosh occurs when Mars (Mangal) is positioned in certain houses of the birth chart. Let&apos;s delve deeper into what Manglik Dosh is, how it is formed, and its effects on each zodiac sign.</p>
                </section>
                
                <section>
                  <h2>What is Manglik Dosh?</h2>
                  <p>Manglik Dosh is formed when Mars is positioned in the 1st, 4th, 7th, 8th, or 12th house of a person&apos;s birth chart. Mars is considered a fiery and aggressive planet, and its placement in these houses is believed to cause tension, delays, and challenges in marriage and relationships.</p>
                </section>
                
                <section>
                  <h2>General Effects of Manglik Dosh</h2>
                  <ul>
                  <li><strong>Marital Discord</strong>: Those with Manglik Dosh are believed to face delays in marriage, and once married, they might experience conflicts and misunderstandings with their spouse.</li>


                    <li><strong>Health Issues</strong>: It can also cause health problems, especially related to blood and the digestive system.</li>
                    <li><strong>Financial Struggles</strong>: Financial instability and hurdles in career growth can be another consequence.</li>
                    <li><strong>Emotional Turmoil</strong>: Increased stress and emotional disturbances are common among Manglik individuals.</li>
                  </ul>
                </section>
                
                <section>
                  <h2>Manglik Dosh and Its Influence on Each Zodiac Sign</h2>
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
                </section>
                
                <section>
                  <h2>Conclusion</h2>
                  <p>While Manglik Dosh can have various adverse effects on an individual&apos;s life, it&apos;s important to remember that these influences can be mitigated through specific remedies and astrological guidance. Understanding how Mars&apos; placement affects each zodiac sign can help individuals take proactive steps to balance these energies and lead a harmonious life.</p>

                </section>
                
                <section>
                  <h2>About the Author</h2>
                  <p><strong>by Astroshree</strong> is a seasoned astrologer with over a decade of experience in Vedic astrology. Passionate about helping individuals navigate their astrological paths, Astroshree specializes in relationship astrology and spiritual guidance.</p>
                </section>
              </article>
            </div>
          </div>
        );
      
        case "how-many-guna-matching-is-needed-for-a-successful-marriage-a-comprehensive-guide":
          return (
            <div>
              <Head>
                <title>How Many Guna Matching Is Needed for a Successful Marriage?</title>
                <meta
                  name="description"
                  content="A comprehensive guide to Guna Matching for a successful marriage."
                />
              </Head>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                  How Many Guna Matching is Needed for a Successful Marriage? A Comprehensive Guide
                </h1>
                <section className="prose lg:prose-xl mx-auto">
                  <div className="w-full max-w-3xl mx-auto mb-8">
                    <Image
                      src={blog2} 
                      alt={`Blog post ${selectedPost?.id}`}
                      className={styles.image}
                      layout="responsive"
                      width={800}
                      height={500}
                    />
                  </div>
            
                  <section>
                    <h2>Introduction</h2>
                    <p>
                      In Vedic astrology, the concept of Guna Matching plays a pivotal role in determining the compatibility between two individuals for a successful and harmonious marriage. This ancient practice involves assessing the alignment of various aspects of a person&apos;s life to determine the overall compatibility with a prospective partner. The matching of Guna, or qualities, is based on the idea that certain astrological attributes influence the temperament, character, and harmony of a couple.
                    </p>
                  </section>
            
                  <section>
                    <h2>Understanding Guna Matching</h2>
                    <p>
                      Guna Matching is based on the principles outlined in the &quot;Ashtakoota&quot; system, which involves evaluating eight specific qualities or attributes in both partners. Each of these qualities, or Guna, contributes to the overall compatibility score. The assessment considers various aspects, including:
                    </p>
                    <ul>
                      <li>Varna (Caste): Different castes have different attributes and tendencies. Compatibility based on Varna ensures that both partners complement each other in terms of their lifestyle and values.</li>
                      <li>Vasya (Control): Vasya Guna assesses the influence each partner has over the other. When partners have a balanced control dynamic, their marriage tends to be harmonious.</li>
                      <li>Tara (Birth Star): This quality relates to the compatibility of the birth stars or Nakshatras of the partners. It determines their emotional and spiritual alignment.</li>
                      <li>Yoni (Animal Symbolism): Yoni Guna examines the compatibility of the animal symbols associated with each partner. This helps determine physical and emotional intimacy.</li>
                      <li>Rashi (Zodiac Sign): The zodiac sign compatibility plays a role in assessing the nature and temperament of both partners.</li>
                      <li>Nadi (Pulse): The Nadi Guna assesses the physical and mental well-being of the partners. It&apos;s crucial in determining whether either partner may suffer from health issues or other complications.</li>
                      <li>Gana (Mental Nature): This quality assesses the mental and emotional compatibility between partners. It determines whether they share similar values and attitudes.</li>
                      <li>Bhakoot (Moon Group): Bhakoot Guna evaluates the long-term compatibility of the partners in terms of family life and domestic harmony.</li>
                    </ul>
                  </section>
            
                  <section>
                    <h2>Importance of Guna Matching</h2>
                    <p>
                      Guna Matching is essential in Vedic astrology as it provides insights into potential challenges and areas of compatibility between partners. The higher the Guna score, the greater the chances of a harmonious and lasting marriage. A strong Guna match indicates emotional, mental, and physical alignment between partners, leading to a smoother journey in marital life.
                    </p>
                  </section>
            
                  <section>
                    <h2>The Required Guna Matching Score</h2>
                    <p>
                      The optimal score for a successful marriage, according to Vedic tradition, is generally considered to be 18 or above. A higher Guna score often reflects strong compatibility and increased chances of marital harmony. Scores below this threshold may require additional considerations or modifications, such as adjusting wedding dates, performing remedial rituals, or seeking astrological advice.
                    </p>
                  </section>
            
                  <section>
                    <h2>Conclusion</h2>
                    <p>
                      Guna Matching is a crucial aspect of Vedic astrology that offers valuable insights into the compatibility and harmony of a marriage. While the Guna Matching system provides a guideline, it&apos;s essential to recognize that individual personality traits, mutual respect, and understanding play a significant role in ensuring a successful marriage. By considering these aspects, couples can navigate their journey with greater ease and fulfillment.
                    </p>
                  </section>
                </section>
              </div>
            </div>
          );
        
          case "Powerful-Gemstones-for-Love-and-Marriage":
            return (
              <div>
                <Head>
                  <title>Powerful Gemstones for Love and Marriage</title>
                  <meta name="description" content="Explore powerful gemstones that can enhance love and marriage." />
                </Head>
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-4xl font-bold text-center mb-8">Powerful Gemstones for Love and Marriage</h1>
                  <article className="prose lg:prose-xl mx-auto">
                    <section>
                      <h2>Introduction</h2>
                      <p>
                        Gemstones have been used for centuries to enhance love, marital harmony, and emotional bonds. Each gemstone possesses unique metaphysical properties that can positively influence relationships. In this guide, we will explore powerful gemstones and their significance in fostering love and marital happiness.
                      </p>
                    </section>
          
                    <section>
                      <h2>1. Rose Quartz</h2>
                      <Image src={RoseQuartzImage} alt="Rose Quartz" width={600} height={400} className={styles.image} />
                      <p>
                        Rose Quartz, often referred to as the &quot;Stone of Unconditional Love,&quot; is a pink crystal that exudes soothing and calming energies. It is believed to open the heart chakra, inviting feelings of compassion, empathy, and forgiveness. It can help foster deeper emotional bonds between partners and encourage open communication and understanding.
                      </p>
                    </section>
          
                    <section>
                      <h2>2. Ruby</h2>
                      <Image src={RubyImage} alt="Ruby" width={600} height={400} className={styles.image} />
                      <p>
                        Ruby, a vibrant red gemstone, is associated with love, passion, and vitality. It inspires energy and warmth in relationships and encourages a deep sense of commitment and emotional connection. It also enhances courage, making it easier for partners to navigate challenges and confront fears together.
                      </p>
                    </section>
          
                    <section>
                      <h2>3. Emerald</h2>
                      <Image src={EmeraldImage} alt="Emerald" width={600} height={400} className={styles.image} />
                      <p>
                        Emerald, a green gemstone, enhances harmony and understanding between partners. It can strengthen marital bonds, encourage loyalty, and provide emotional support during difficult times. Wearing or placing an Emerald in a prominent location in your living space can help benefit from its calming energies.
                      </p>
                    </section>
          
                    <section>
                      <h2>4. Sapphire</h2>
                      <Image src={SapphireImage} alt="Sapphire" width={600} height={400} className={styles.image} />
                      <p>
                        Sapphire is associated with loyalty and truthfulness. It can promote honesty in relationships and strengthen emotional connections. It helps foster trust and mutual respect, making it easier for couples to navigate challenges together. Wearing Sapphire jewelry can amplify its effects.
                      </p>
                    </section>
          
                    <section>
                      <h2>5. Moonstone</h2>
                      <Image src={MoonstoneImage} alt="Moonstone" width={600} height={400} className={styles.image} />
                      <p>
                        Moonstone offers nurturing energy and emotional balance. It enhances emotional intimacy and brings a sense of tranquility to the relationship. It is beneficial for couples facing emotional turmoil and promotes harmony in relationships.
                      </p>
                    </section>
          
                    <section>
                      <h2>6. Citrine</h2>
                      <Image src={CitrineImage} alt="Citrine" width={600} height={400} className={styles.image} />
                      <p>
                        Citrine, a bright yellow gemstone, offers abundance and positive energy. It creates a joyful environment and encourages optimism in relationships. Placing Citrine in your living space or wearing it as jewelry can benefit from its uplifting energies.
                      </p>
                    </section>
          
                    <section>
                      <h2>7. Aquamarine</h2>
                      <Image src={AquamarineImage} alt="Aquamarine" width={600} height={400} className={styles.image} />
                      <p>
                        Aquamarine provides clarity and emotional balance. It helps calm any turbulence in relationships and enhances communication. Keeping an Aquamarine crystal in your living space or wearing it as jewelry can help benefit from its soothing effects.
                      </p>
                    </section>
          
                    <section>
                      <h2>Conclusion</h2>
                      <p>
                        Gemstones can play a significant role in enhancing love, marital harmony, and emotional bonds. Whether through wearing them as jewelry or placing them in a prominent location, their metaphysical properties can contribute to a deeper understanding and connection between partners. Consider exploring these powerful gemstones and their benefits to cultivate a harmonious and loving relationship.
                      </p>
                    </section>
                  </article>
                </div>
              </div>
            );
          
            case "nadi-dosh":
              return (
                <div>
                  <Head>
                    <title>नाड़ी दोष: प्रभाव, उपचार और बहुत कुछ</title>
                    <meta name="description" content="नाड़ी दोष के प्रभाव, उपचार और बहुत कुछ पर जानकारी प्राप्त करें।" />
                  </Head>
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8">नाड़ी दोष: प्रभाव, उपचार और बहुत कुछ</h1>
                    <article className="prose lg:prose-xl mx-auto">
                      <section>
                        <h2>परिचय</h2>
                        <p>
                          नाड़ी दोष, वैदिक ज्योतिष में विवाह के लिए कुंडली मिलान की एक महत्वपूर्ण कारक है। इसे मंगली दोष के रूप में भी जाना जाता है, यह दोष जन्म कुंडली में मंगल ग्रह की स्थिति के आधार पर होता है। नाड़ी दोष का प्रभाव केवल विवाह पर ही नहीं, बल्कि स्वास्थ्य, करियर, और वित्त पर भी हो सकता है। इस ब्लॉग में, हम इसके प्रकार, प्रभाव, उपचार, और बहुत कुछ पर चर्चा करेंगे।
                        </p>
                      </section>
            
                      <section>
                        <h2>नाड़ी दोष क्या है?</h2>
                        <p>
                          नाड़ी दोष का संबंध कुंडली में मंगल ग्रह की स्थिति से होता है। यदि जन्म कुंडली में मंगल ग्रह के कारण नाड़ी दोष होता है, तो यह एक व्यक्ति के जीवन में कई कठिनाइयों का कारण बन सकता है, जैसे कि विवाह में विलंब, विवाह में तनाव, और विभिन्न स्वास्थ्य समस्याएं।
                        </p>
                      </section>
            
                      <section>
                        <h2>नाड़ी दोष के प्रकार</h2>
                        <ul>
                          <li>गर्भवती नाड़ी दोष: जब मंगल ग्रह प्रथम, चौथे, सप्तम, अष्टम या द्वादश भाव में स्थित होता है, तो इसे गर्भवती नाड़ी दोष कहा जाता है।</li>
                          <li>विवाहित नाड़ी दोष: जब मंगल ग्रह सप्तम भाव में स्थित होता है और यह विवाह में समस्याओं का कारण बनता है।</li>
                          <li>चंचल नाड़ी दोष: यह दोष जन्म कुंडली में मंगल ग्रह के कारण उत्पन्न होता है और विवाह में चंचलता का कारण बन सकता है।</li>
                          <li>अत्यधिक नाड़ी दोष: यह दोष जन्म कुंडली में मंगल ग्रह के कारण अत्यधिक तनाव, स्वास्थ्य समस्याएं और विवाह में विफलता का कारण बन सकता है।</li>
                        </ul>
                      </section>
            
                      <section>
                        <h2>नाड़ी दोष के प्रभाव</h2>
                        <p>
                          नाड़ी दोष का प्रभाव व्यक्ति के जीवन के विभिन्न पहलुओं पर हो सकता है। इसके कुछ प्रमुख प्रभाव निम्नलिखित हैं:
                        </p>
                        <ul>
                          <li>विवाह विलंब: विवाह में विलंब नाड़ी दोष का एक सामान्य परिणाम है।</li>
                          <li>विवाह में तनाव: नाड़ी दोष विवाह में संघर्ष और तनाव का कारण बन सकता है।</li>
                          <li>स्वास्थ्य समस्याएं: नाड़ी दोष के कारण विभिन्न स्वास्थ्य समस्याएं उत्पन्न हो सकती हैं।</li>
                          <li>वित्तीय समस्याएं: व्यक्ति की वित्तीय स्थिति पर भी नाड़ी दोष का असर हो सकता है।</li>
                        </ul>
                      </section>
            
                      <section>
                        <h2>नाड़ी दोष के उपचार</h2>
                        <p>
                          नाड़ी दोष के उपचार के लिए कई पारंपरिक उपाय हैं, जैसे कि कुछ विशेष पूजाएं, मंत्रों का जाप, और अस्थी शांति पूजा। इन उपचारों का उद्देश्य मंगल की अशुभता को कम करना और विवाह में सुख-शांति प्राप्त करना होता है।
                        </p>
                      </section>
            
                      <section>
                        <h2>एस्ट्रोपश की भूमिका</h2>
                        <p>
                          एस्ट्रोपश, एक अनुभवी ज्योतिषी, नाड़ी दोष की पहचान और उपचार में आपकी मदद कर सकता है। वे आपकी जन्म कुंडली का विस्तृत अध्ययन कर नाड़ी दोष की गहनता को समझ सकते हैं और आपके जीवन की विभिन्न समस्याओं का समाधान प्रस्तुत कर सकते हैं।
                        </p>
                      </section>
            
                      <section>
                        <h2>निष्कर्ष</h2>
                        <p>
                          नाड़ी दोष एक महत्वपूर्ण पहलू है जो वैदिक ज्योतिष में विवाह के लिए कुंडली मिलान में ध्यान देने की आवश्यकता होती है। इसका सही समय पर निदान और उपचार व्यक्ति के जीवन में सुख-शांति और संतुलन ला सकता है।
                        </p>
                      </section>
                    </article>
                  </div>
                </div>
              );
            
              case "scared-to-fall-in-love":
                return (
                  <div className="max-w-4xl mx-auto p-6">
                    <Head>
                      <title>4 Zodiac Signs Who Are Scared To Fall In Love</title>
                      <meta name="description" content="Discover the 4 zodiac signs that are often scared to fall in love and why." />
                    </Head>
                    <article className="bg-white p-6 rounded-lg shadow-lg">
                      <h1 className="text-4xl font-bold mb-6 text-gray-800 uppercase tracking-wide">4 Zodiac Signs Who Are Scared To Fall In Love</h1>
                      <div className="relative w-full h-64 mb-6">
                        <Image
                          src={blog5}
                          alt="4 Zodiac Signs Who Are Scared To Fall In Love"
                          width={800}
                          height={450}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        Love is a beautiful yet complex emotion that can bring immense joy and sometimes heartache. While some people dive headfirst into romance, others approach it with caution or even fear. Astrology can offer insights into why certain zodiac signs might be more hesitant to fall in love. Here are four zodiac signs that often find themselves wary of love&apos;s unpredictable journey.
                      </p>
              
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase">1. Virgo (August 23 - September 22)</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Virgos are known for their analytical minds and perfectionist tendencies. They often set high standards for themselves and their partners, which can make the idea of falling in love daunting. Fear of imperfection and vulnerability can hold Virgos back. They worry about getting hurt or not meeting their partner&apos;s expectations. This meticulous earth sign prefers to take their time, analyzing and ensuring that a relationship is worth the emotional investment before they fully commit.
                      </p>
                      <h3 className="text-xl font-bold mb-2 text-gray-700">Why They&apos;re Scared:</h3>
                      <ul className="list-disc list-inside mb-6">
                        <li className="text-lg text-gray-700">Fear of imperfection</li>
                        <li className="text-lg text-gray-700">High expectations</li>
                        <li className="text-lg text-gray-700">Vulnerability</li>
                      </ul>
              
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase">2. Scorpio (October 23 - November 21)</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Scorpios are intense and passionate, but they also guard their hearts fiercely. This water sign feels emotions deeply and is wary of betrayal and loss. Past experiences of hurt and mistrust can make Scorpios hesitant to open up and fall in love again. They fear giving someone the power to hurt them and often build emotional walls to protect themselves.
                      </p>
                      <h3 className="text-xl font-bold mb-2 text-gray-700">Why They&apos;re Scared:</h3>
                      <ul className="list-disc list-inside mb-6">
                        <li className="text-lg text-gray-700">Intense emotions</li>
                        <li className="text-lg text-gray-700">Fear of betrayal</li>
                        <li className="text-lg text-gray-700">Past hurts</li>
                      </ul>
              
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase">3. Capricorn (December 22 - January 19)</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Capricorns are pragmatic and career-oriented. They often prioritize their professional goals and personal ambitions over romantic relationships. Falling in love requires a level of spontaneity and emotional vulnerability that Capricorns might find uncomfortable. They fear that love might distract them from their goals or that their partner might not be supportive of their ambitions.
                      </p>
                      <h3 className="text-xl font-bold mb-2 text-gray-700">Why They&apos;re Scared:</h3>
                      <ul className="list-disc list-inside mb-6">
                        <li className="text-lg text-gray-700">Fear of distraction from goals</li>
                        <li className="text-lg text-gray-700">Emotional vulnerability</li>
                        <li className="text-lg text-gray-700">Need for control</li>
                      </ul>
              
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase">4. Aquarius (January 20 - February 18)</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Aquarians value their independence and freedom above all else. This air sign is known for its unconventional thinking and reluctance to conform to societal norms, including traditional relationships. Aquarians fear losing their individuality and freedom in a committed relationship. They are wary of being tied down and often keep emotions at arm&apos;s length to protect their sense of self.
                      </p>
                      <h3 className="text-xl font-bold mb-2 text-gray-700">Why They&apos;re Scared:</h3>
                      <ul className="list-disc list-inside mb-6">
                        <li className="text-lg text-gray-700">Value of independence</li>
                        <li className="text-lg text-gray-700">Fear of losing individuality</li>
                        <li className="text-lg text-gray-700">Reluctance to conform to traditional relationships</li>
                      </ul>
              
                      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase">How to Overcome These Fears</h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Understanding the reasons behind these fears can be the first step towards overcoming them. Here are some general tips for each sign to help them open up to love:
                      </p>
                      <ul className="list-disc list-inside mb-6">
                        <li className="text-lg text-gray-700"><strong>Virgo:</strong> Practice self-compassion and understand that imperfection is part of the human experience. Allow yourself to be vulnerable and embrace the unpredictability of love.</li>
                        <li className="text-lg text-gray-700"><strong>Scorpio:</strong> Work on healing past wounds and building trust gradually. Open up to the possibility that not everyone will hurt you.</li>
                        <li className="text-lg text-gray-700"><strong>Capricorn:</strong> Learn to balance your professional and personal life. Recognize that love can be a source of strength and support rather than a distraction.</li>
                        <li className="text-lg text-gray-700"><strong>Aquarius:</strong> Understand that relationships do not necessarily mean losing your freedom. Find a partner who respects your need for independence and supports your unique perspective.</li>
                      </ul>
              
                      <p className="text-lg text-gray-700">
                        Falling in love can be scary, but it can also be one of the most rewarding experiences. By understanding and addressing their fears, these zodiac signs can learn to embrace love and all the beautiful possibilities it brings.
                      </p>
                    </article>
                  </div>
                );
              
                case "compatible-zodiac-signs":
                return (
                  <div className="container mx-auto px-4 py-8">
                    <Head>
                      <title>The Most Compatible Zodiac Sign Matches: Who&apos;s Your Perfect Partner?</title>
                    </Head>
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-4xl font-bold mb-4">The Most Compatible Zodiac Sign Matches: Who&apos;s Your Perfect Partner?</h1>
                      <p className="text-gray-600 mb-8">By Astroshree / June 4, 2024</p>
                      <div className="relative w-full h-64 mb-6">
                        <Image
                          src={blog6}
                          alt="The Most Compatible Zodiac Sign Matches"
                          width={800}
                          height={450}
                          className="rounded-lg"
                        />
                      </div>
                      <article className="prose prose-lg">
                        <p>When it comes to finding your perfect partner, astrology can offer some intriguing insights. Each zodiac sign has unique characteristics that can influence compatibility in relationships. Whether you&apos;re a fiery Aries or a nurturing Cancer, understanding how your sign matches with others can help you find a harmonious and fulfilling relationship. Let&apos;s dive into the most compatible zodiac sign matches and discover who might be your perfect partner.</p>

                        <h2>Aries (March 21 - April 19)</h2>
                        <p><strong>Best Matches: Leo, Sagittarius, Libra</strong></p>
                        <p>Aries, ruled by Mars, are passionate, energetic, and adventurous. They thrive with partners who can match their enthusiasm and zest for life.</p>
                        <ul>
                          <li><strong>Leo</strong>: Both signs are dynamic and love excitement, making them a powerful and passionate pair.</li>
                          <li><strong>Sagittarius</strong>: This match is fueled by adventure and spontaneity, creating a relationship full of fun and exploration.</li>
                          <li><strong>Libra</strong>: Opposites attract here, with Aries&apos; fiery nature balancing Libra&apos;s calm and harmonious demeanor.</li>
                        </ul>

                        <h2>Taurus (April 20 - May 20)</h2>
                        <p><strong>Best Matches: Virgo, Capricorn, Cancer</strong></p>
                        <p>Taurus, ruled by Venus, values stability, loyalty, and comfort. They need a partner who shares their appreciation for the finer things in life.</p>
                        <ul>
                          <li><strong>Virgo</strong>: This earth sign duo creates a grounded and reliable partnership, built on mutual respect and shared values.</li>
                          <li><strong>Capricorn</strong>: Both signs are practical and goal-oriented, forming a stable and ambitious relationship.</li>
                          <li><strong>Cancer</strong>: Taurus and Cancer share a love for home and family, creating a nurturing and supportive bond.</li>
                        </ul>

                        <h2>Gemini (May 21 - June 20)</h2>
                        <p><strong>Best Matches: Libra, Aquarius, Aries</strong></p>
                        <p>Geminis are curious, social, and adaptable, thriving in relationships that offer mental stimulation and variety.</p>
                        <ul>
                          <li><strong>Libra</strong>: Both air signs, Gemini and Libra, share a love for communication and intellectual pursuits, making them a well-matched pair.</li>
                          <li><strong>Aquarius</strong>: This match is innovative and unconventional, with both signs valuing independence and creativity.</li>
                          <li><strong>Aries</strong>: Aries brings excitement and spontaneity to Gemini&apos;s life, creating a dynamic and lively relationship.</li>
                        </ul>

                        <h2>Cancer (June 21 - July 22)</h2>
                        <p><strong>Best Matches: Scorpio, Pisces, Taurus</strong></p>
                        <p>Cancer, ruled by the Moon, is emotional, intuitive, and deeply caring. They seek a partner who can provide security and emotional connection.</p>
                        <ul>
                          <li><strong>Scorpio</strong>: Both water signs, Cancer and Scorpio, share intense emotional depth and loyalty, forming a deeply bonded relationship.</li>
                          <li><strong>Pisces</strong>: This pairing is empathetic and nurturing, with both signs understanding each other&apos;s emotional needs.</li>
                          <li><strong>Taurus</strong>: Taurus provides the stability and security Cancer craves, creating a comforting and supportive partnership.</li>
                        </ul>

                        <h2>Leo (July 23 - August 22)</h2>
                        <p><strong>Best Matches: Aries, Sagittarius, Gemini</strong></p>
                        <p>Leos are confident, charismatic, and generous, needing a partner who appreciates their exuberance and shares their zest for life.</p>
                        <ul>
                          <li><strong>Aries</strong>: Both signs are bold and adventurous, creating a passionate and dynamic relationship.</li>
                          <li><strong>Sagittarius</strong>: This match is full of excitement and exploration, with both signs loving adventure and new experiences.</li>
                          <li><strong>Gemini</strong>: Gemini&apos;s adaptability and wit complement Leo&apos;s charisma, making for a lively and entertaining partnership.</li>
                        </ul>

                        <h2>Virgo (August 23 - September 22)</h2>
                        <p><strong>Best Matches: Taurus, Capricorn, Cancer</strong></p>
                        <p>Virgos are practical, analytical, and detail-oriented, thriving with partners who share their work ethic and values.</p>
                        <ul>
                          <li><strong>Taurus</strong>: This earth sign duo is reliable and practical, building a strong and stable relationship.</li>
                          <li><strong>Capricorn</strong>: Both signs are hardworking and goal-oriented, forming a partnership based on mutual ambition and respect.</li>
                          <li><strong>Cancer</strong>: Cancer provides emotional depth and nurturing, balancing Virgo&apos;s practicality with warmth and care.</li>
                        </ul>

                        <h2>Libra (September 23 - October 22)</h2>
                        <p><strong>Best Matches: Gemini, Aquarius, Leo</strong></p>
                        <p>Libras are diplomatic, charming, and value harmony, seeking partners who can offer balance and intellectual stimulation.</p>
                        <ul>
                          <li><strong>Gemini</strong>: Both air signs, Libra and Gemini, enjoy intellectual conversations and social interactions, making them a well-matched pair.</li>
                          <li><strong>Aquarius</strong>: This match is innovative and open-minded, with both signs valuing independence and creativity.</li>
                          <li><strong>Leo</strong>: Leo&apos;s confidence and charisma complement Libra&apos;s charm and diplomacy, creating a balanced and harmonious relationship.</li>
                        </ul>

                        <h2>Scorpio (October 23 - November 21)</h2>
                        <p><strong>Best Matches: Cancer, Pisces, Virgo</strong></p>
                        <p>Scorpios are intense, passionate, and deeply emotional, needing a partner who can match their depth and commitment.</p>
                        <ul>
                          <li><strong>Cancer</strong>: Both water signs, Scorpio and Cancer, share a profound emotional connection and loyalty, forming a deeply bonded relationship.</li>
                          <li><strong>Pisces</strong>: This pairing is empathetic and intuitive, with both signs understanding each other&apos;s emotional needs.</li>
                          <li><strong>Virgo</strong>: Virgo&apos;s practicality and stability provide a grounding influence for Scorpio&apos;s intensity, creating a balanced and supportive partnership.</li>
                        </ul>

                        <h2>Sagittarius (November 22 - December 21)</h2>
                        <p><strong>Best Matches: Aries, Leo, Aquarius</strong></p>
                        <p>Sagittarius individuals are adventurous, optimistic, and free-spirited, thriving with partners who share their love for exploration and excitement.</p>
                        <ul>
                          <li><strong>Aries</strong>: Both signs are bold and adventurous, creating a passionate and dynamic relationship.</li>
                          <li><strong>Leo</strong>: This match is full of excitement and exploration, with both signs loving adventure and new experiences.</li>
                          <li><strong>Aquarius</strong>: Aquarius&apos; innovative and unconventional nature complements Sagittarius&apos; adventurous spirit, making for an exciting and dynamic partnership.</li>
                        </ul>

                        <h2>Capricorn (December 22 - January 19)</h2>
                        <p><strong>Best Matches: Taurus, Virgo, Scorpio</strong></p>
                        <p>Capricorns are ambitious, disciplined, and practical, seeking partners who share their work ethic and values.</p>
                        <ul>
                          <li><strong>Taurus</strong>: This earth sign duo is reliable and practical, building a strong and stable relationship.</li>
                          <li><strong>Virgo</strong>: Both signs are hardworking and goal-oriented, forming a partnership based on mutual ambition and respect.</li>
                          <li><strong>Scorpio</strong>: Scorpio&apos;s intensity and passion balance Capricorn&apos;s practicality, creating a deeply bonded and supportive relationship.</li>
                        </ul>

                        <h2>Aquarius (January 20 - February 18)</h2>
                        <p><strong>Best Matches: Gemini, Libra, Sagittarius</strong></p>
                        <p>Aquarians are innovative, independent, and forward-thinking, thriving with partners who appreciate their unique perspective and creativity.</p>
                        <ul>
                          <li><strong>Gemini</strong>: Both air signs, Aquarius and Gemini, enjoy intellectual conversations and social interactions, making them a well-matched pair.</li>
                          <li><strong>Libra</strong>: This match is open-minded and balanced, with both signs valuing independence and creativity.</li>
                          <li><strong>Sagittarius</strong>: Sagittarius&apos; adventurous spirit complements Aquarius&apos; innovative nature, making for an exciting and dynamic partnership.</li>
                        </ul>

                        <h2>Pisces (February 19 - March 20)</h2>
                        <p><strong>Best Matches: Cancer, Scorpio, Taurus</strong></p>
                        <p>Pisces are empathetic, intuitive, and deeply emotional, seeking partners who can provide security and emotional connection.</p>
                        <ul>
                          <li><strong>Cancer</strong>: Both water signs, Pisces and Cancer, share a profound emotional connection and loyalty, forming a deeply bonded relationship.</li>
                          <li><strong>Scorpio</strong>: This pairing is intense and passionate, with both signs understanding each other&apos;s emotional needs.</li>
                          <li><strong>Taurus</strong>: Taurus provides the stability and security Pisces craves, creating a comforting and supportive partnership.</li>
                        </ul>
                      </article>
                    </div>
                  </div>
                );

          default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Layout>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {renderBlogContent()}
      </div>
      <Footer />
    </Layout>
  );
};

export default BlogDetailPage;

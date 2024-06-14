import Head from 'next/head';
import Image from 'next/image';

import RoseQuartzImage from "../../../public/Assets/RoseQuartzImage.jpg";
import RubyImage from "../../../public/Assets/RubyImage.jpg";
import EmeraldImage from "../../../public/Assets/EmeraldImage.jpg";
import SapphireImage from "../../../public/Assets/SapphireImage.jpg";
import MoonstoneImage from "../../../public/Assets/MoonstoneImage.jpg";
import CitrineImage from "../../../public/Assets/CitrineImage.jpg";
import AquamarineImage from "../../../public/Assets/AquamarineImage.jpg";
import styles from '../blog/case2.module.css';

const BlogCase3: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Powerful Gemstones for Love and Marriage</title>
        <meta name="description" content="Explore powerful gemstones that can enhance love and marriage." />
      </Head>
      <div className={styles.container}>
        <h1 className="text-4xl lg:text-4xl font-bold text-center mb-8 text-gray-800">
          Powerful Gemstones for Love and Marriage
        </h1>
        <article className="prose lg:prose-xl mx-auto">
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Gemstones have been used for centuries to enhance love, marital harmony, and emotional bonds. Each gemstone possesses unique metaphysical properties that can positively influence relationships. In this guide, we will explore powerful gemstones and their significance in fostering love and marital happiness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">1. Rose Quartz</h2>
            <Image src={RoseQuartzImage} alt="Rose Quartz" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4"/>
            <p className="text-gray-600 leading-relaxed">
              Rose Quartz, often referred to as the &quot;Stone of Unconditional Love,&quot; is a pink crystal that exudes soothing and calming energies. It is believed to open the heart chakra, inviting feelings of compassion, empathy, and forgiveness. It can help foster deeper emotional bonds between partners and encourage open communication and understanding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">2. Ruby</h2>
            <Image src={RubyImage} alt="Ruby" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Ruby, a vibrant red gemstone, is associated with love, passion, and vitality. It inspires energy and warmth in relationships and encourages a deep sense of commitment and emotional connection. It also enhances courage, making it easier for partners to navigate challenges and confront fears together.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">3. Emerald</h2>
            <Image src={EmeraldImage} alt="Emerald" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Emerald, a green gemstone, enhances harmony and understanding between partners. It can strengthen marital bonds, encourage loyalty, and provide emotional support during difficult times. Wearing or placing an Emerald in a prominent location in your living space can help benefit from its calming energies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">4. Sapphire</h2>
            <Image src={SapphireImage} alt="Sapphire" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Sapphire is associated with loyalty and truthfulness. It can promote honesty in relationships and strengthen emotional connections. It helps foster trust and mutual respect, making it easier for couples to navigate challenges together. Wearing Sapphire jewelry can amplify its effects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">5. Moonstone</h2>
            <Image src={MoonstoneImage} alt="Moonstone" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Moonstone offers nurturing energy and emotional balance. It enhances emotional intimacy and brings a sense of tranquility to the relationship. It is beneficial for couples facing emotional turmoil and promotes harmony in relationships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">6. Citrine</h2>
            <Image src={CitrineImage} alt="Citrine" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Citrine, a bright yellow gemstone, offers abundance and positive energy. It creates a joyful environment and encourages optimism in relationships. Placing Citrine in your living space or wearing it as jewelry can benefit from its uplifting energies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">7. Aquamarine</h2>
            <Image src={AquamarineImage} alt="Aquamarine" className="rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Aquamarine provides clarity and emotional balance. It helps calm any turbulence in relationships and enhances communication. Keeping an Aquamarine crystal in your living space or wearing it as jewelry can help benefit from its soothing effects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed">
              Gemstones can play a significant role in enhancing love, marital harmony, and emotional bonds. Whether through wearing them as jewelry or placing them in a prominent location, their metaphysical properties can contribute to a deeper understanding and connection between partners. Consider exploring these powerful gemstones and their benefits to cultivate a harmonious and loving relationship.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default BlogCase3;

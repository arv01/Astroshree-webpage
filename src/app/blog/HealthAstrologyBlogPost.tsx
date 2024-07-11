import Head from 'next/head';
import Image from 'next/image';
import styles from '../blog/case8.module.css'; // Adjust the path as per your file structure
import blogImage from '../../../public/Assets/planets-horoscopes.jpg'; // Adjust the image path

const HealthAstrologyBlogPost = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Astrology and Health: How Planetary Positions Affect Well-Being - Astroshree Astrologer</title>
                <meta name="description" content="Explore the influence of astrological planetary positions on health and well-being. Learn how astrology offers insights and remedies for better health." />
            </Head>

            <article>
                <h1 className={styles.title}>
                    Astrology and Health: How Planetary Positions Affect Well-Being
                </h1>
                <div className={styles.featuredImage}>
                    <Image
                        src={blogImage}
                        alt="Astrology and Health"
                        layout="responsive"
                        width={1200}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <p>
                        Astrology has long been associated with predicting health outcomes and offering insights into preventive measures.
                        The positions of planets and their transits are believed to influence various aspects of physical and mental health.
                    </p>

                    <h2 className={styles.h2}>Planetary Influences on Health</h2>
                    <p className={styles.p}>
                        Different planets in astrology are linked with specific health concerns. For example:
                    </p>

                    <ul className={styles.list}>
                        <li><strong>Mars:</strong> Governs energy levels, vitality, and muscular system</li>
                        <li><strong>Mercury:</strong> Affects nervous system, communication, and mental agility</li>
                        <li><strong>Jupiter:</strong> Influences liver, growth, and overall well-being</li>
                        <li><strong>Venus:</strong> Connected with kidneys, reproductive health, and skin</li>
                        <li><strong>Saturn:</strong> Rules bones, teeth, and the aging process</li>
                        <li><strong>Sun:</strong> Represents heart, spine, and overall vitality</li>
                        <li><strong>Moon:</strong> Influences digestive system, fluids in the body, and emotional health</li>
                        <li><strong>Rahu:</strong> Associated with chronic diseases, poisoning, and unexpected health issues</li>
                        <li><strong>Ketu:</strong> Linked with hidden illnesses, spiritual health, and healing</li>
                    </ul>

                    <h2 className={styles.h2}>Astrological Remedies for Health</h2>
                    <p className={styles.p}>
                        Astrologers prescribe remedies such as wearing specific gemstones, performing rituals on auspicious days, and chanting mantras associated with beneficial planets.
                        These remedies are believed to mitigate negative influences and promote physical and mental well-being.
                    </p>

                    <h2 className={styles.h2}>Consulting an Astrologer</h2>
                    <p className={styles.p}>
                        For personalized health insights, consulting an astrologer who specializes in medical astrology can provide valuable guidance.
                        Astrologers analyze birth charts to identify potential health vulnerabilities and recommend preventive measures and remedies.
                    </p>

                    <h2 className={styles.h2}>Conclusion</h2>
                    <p className={styles.p}>
                        Integrating astrology with health care practices offers a holistic approach to well-being.
                        By understanding astrological influences and taking proactive steps, individuals can enhance their health and quality of life.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HealthAstrologyBlogPost;

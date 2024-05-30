import React from 'react';
import Image from 'next/image';
import styles from './Blogs.module.css';
import Slide1 from "@/assets/banner1.svg";

const blogPostsData = [
  { image: Slide1, date: '2024-05-21', description: 'Discover the latest astrological insights for this week.' },
  { image: Slide1, date: '2024-05-20', description: 'Understanding the impact of planetary movements on your life.' },
  { image: Slide1, date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.' },
  { image: Slide1, date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.' },
  { image: Slide1, date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.' },
  { image: Slide1, date: '2024-05-19', description: 'Top 5 ways to balance your chakras using astrology.' },
];

const BlogPage: React.FC = () => {
  return (
    <div>
      <section className={styles.blogSection}>
        <h2>Latest from Astroshree Blog</h2>
        <p>Read our latest updates and news on the blog</p>
        <div className={styles.blogPostsContainer}>
          {blogPostsData.map((post, index) => (
            <div key={index} className={styles.blogPost}>
              <Image src={post.image.src} alt={`Blog post ${index + 1}`} width={500} height={300} />
              <div className={styles.date}>{post.date}</div>
              <div className={styles.description}>{post.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

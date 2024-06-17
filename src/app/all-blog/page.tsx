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
    date: '30/06/2024', 
    description: 'Find out which zodiac signs are most compatible with each other and explore the dynamics of perfect partnerships.' 
  },
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
              <Image src={post.image.src} alt={`Blog post ${post.id}`} width={500} height={300} />
              <div className={styles.date}>{post.date}</div>
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

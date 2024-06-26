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
    description: 'Explore the astrological factors influencing the birth of a son, known as Putra Parapti in Vedic astrology.' 
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
    description: 'Learn how to design your kitchen according to Vastu Shastra principles to create a harmonious and prosperous living environment.',
    content: 'Content of the blog post...'
  },
  {
    id: 10,
    slug: "vastu-for-career-success-designing-your-home-office",
    image: blog10,
    date: '21/06/2024',
    description: 'Learn how to design your home office according to Vastu Shastra principles to enhance your career success and productivity.',
    content:""
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

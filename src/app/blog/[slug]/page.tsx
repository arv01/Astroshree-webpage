// pages/blog/[slug].js

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Layout from "@/app/layout";
import Header from '../../Common/Header'; 
import Footer from '../../Common/Footer/Footer';
import styles from '../BlogsDetails.module.css';

import { blogPostsData } from '../../../data/blogPostsData'; // Import blog posts data from a file
import BlogCase1Post from '../BlogPostCate1';
import BlogCase2 from '../BlogCase2';
import BlogCase3 from '../BlogCase3';
import BlogCase4 from '../Blogcase4';
import BlogCase5 from '../BlogCase5';
import BlogCase6 from '../BlogCase6';
import BlogCase7 from '../BlogCase7';
import LostLoveBlogPost from '../LostLoveBlogPost';


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
           <BlogCase1Post/>
          </div>
        );
      
        case "how-many-guna-matching-is-needed-for-a-successful-marriage-a-comprehensive-guide":
          return (
            <div>
              <BlogCase2/>
            </div>
          );
        
        case "Powerful-Gemstones-for-Love-and-Marriage":
            return (
             <div>
              <BlogCase3/>
             </div>
            );
          
        case "nadi-dosh":
              return (
                <div><BlogCase4/></div>
              );
            
        case "scared-to-fall-in-love":
                return (
                  <div>
                    <BlogCase5/>
                  </div>
                );
              
        case "compatible-zodiac-signs":
                return (
                  <div>
                    <BlogCase6/>
                  </div>
                );

        case "putra-parapti-astrology-and-the-birth-of-a-son":
                return (
                  <div>
                    <BlogCase7/>
                  </div>
                );


                kya-mujhe-mera-khoya-hua-pyar-milega
        
        case "kya-mujhe-mera-khoya-hua-pyar-milega":
              return (
                <div>
                    <LostLoveBlogPost/>
                  </div>
                  );
  
  
        default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      <Header />
      <div className={`${styles.pageContainer}`}>
        {renderBlogContent()}
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;

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
import BlogCaseVastuKitchen from '../BlogCaseVastuKitchen';
import BlogCase10 from '../BlogCase10';
import BlogCase11 from '../blogCase11';
import BlogUnderstandingBirthChart from '../BlogUnderstandingBirthChart';
import RoleOfPlanetsBlogPost from '../RoleOfPlanetsBlogPost';
import AstrologicalRemediesBlogPost from '../AstrologicalRemediesBlogPost';
import CareerPredictionsBlogPost from '../CareerPredictionsBlogPost';
import FinancialSuccessBlogPost from '../FinancialSuccessBlogPost';
import HousesInHoroscopePost from '../HousesInHoroscopePost';
import SpiritualGrowthBlogPost from '../SpiritualGrowthBlogPost';
import HealthAstrologyBlogPost from '../HealthAstrologyBlogPost';
import SaturnReturnBlogPost from '../SaturnReturnBlogPost';
import KarmaDestinyBlogPost from '../KarmaDestinyBlogPost';
import AstrologyInEverydayLifePost from '../AstrologyInEverydayLifePost';
import ZodiacJourneyBlogPost from '../ZodiacJourneyBlogPost';
import StarryWisdomBlogPost from '../StarryWisdomBlogPost';
import ZodiacDiariesBlogPost from '../ZodiacDiariesBlogPost';
import MarriageMatchingBlogPost from '../vivah-milan';
import PalmistryBlogPost from '../PalmistryBlogPost';
import LifeLineBlogPost from '../LifeLineBlogPost';
import BedroomVastuBlogPost from '../BedroomVastuBlogPost';
import LivingRoomVastuBlogPost from '../LivingRoomVastuBlogPost';


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
        
        case "kya-mujhe-mera-khoya-hua-pyar-milega":
              return (
                <div>
                    <LostLoveBlogPost/>
                  </div>
                  );

                  case "vastu-for-the-kitchen-designing-the-heart-of-your-home":
                    return (
                      <div>
                          <BlogCaseVastuKitchen/>
                        </div>
                        );
                        
                  case "vastu-for-career-success-designing-your-home-office":
                    return (
                      <div>
                          <BlogCase10/>
                        </div>
                        );
                        case "vastu-shastra-understanding-orientation-and-directions":
                          return (
                            <div>
                                <BlogCase11/>
                              </div>
                              );
                              case "understanding-your-birth-chart-basics-of-natal-astrology":
                                return (
                                  <div>
                                      <BlogUnderstandingBirthChart/>
                                    </div>
                                    );case "role-of-planets-in-your-horoscope-how-they-affect-your-daily-life":
                                    return (
                                      <div>
                                          <RoleOfPlanetsBlogPost/>
                                        </div>
                                        );
                                        case "astrological-remedies-using-gemstones-mantras-and-rituals":
                                        return (
                                          <div>
                                              <AstrologicalRemediesBlogPost/>
                                            </div>
                                            );
                                            case "career-predictions-choosing-the-right-path-through-astrology":
                                              return (
                                                <div>
                                                    <CareerPredictionsBlogPost/>
                                                  </div>
                                                  );
                                                  case "career-predictions-choosing-the-right-path-through-astrology":
                                                  return (
                                                    <div>
                                                        <CareerPredictionsBlogPost/>
                                                      </div>
                                                      );
                                                      case "financial-success-and-astrology-best-times-to-invest-and-save":
                                                        return (
                                                          <div>
                                                              <FinancialSuccessBlogPost/>
                                                            </div>
                                                            );
                                                            case "importance-of-12-houses-in-your-horoscope":
                                                            return (
                                                              <div>
                                                                  <HousesInHoroscopePost/>
                                                                </div>
                                                                );
                                                                case "astrology-and-spiritual-growth-finding-your-life-purpose":
                                                                  return (
                                                                    <div>
                                                                        <SpiritualGrowthBlogPost/>
                                                                      </div>
                                                                      );
                                                                      case "astrology-and-health-how-planetary-positions-affect-well-being":
                                                                      return (
                                                                        <div>
                                                                            <HealthAstrologyBlogPost/>
                                                                          </div>
                                                                          );
                                                                          case "the-significance-of-saturn-return-and-life-transformations":
                                                                            return (
                                                                              <div>
                                                                                  <SaturnReturnBlogPost/>
                                                                                </div>
                                                                                );
                                                                                case "the-role-of-karma-and-destiny-in-astrology":
                                                                                return (
                                                                                  <div>
                                                                                      <KarmaDestinyBlogPost/>
                                                                                    </div>
                                                                                    );
                                                                                    case "astrology-in-everyday-life-practical-applications-and-insights":
                                                                                    return (
                                                                                      <div>
                                                                                          <AstrologyInEverydayLifePost/>
                                                                                        </div>
                                                                                        );
                                                                                        case "unlocking-the-mysteries-of-the-zodiac-a-journey-through-the-stars":
                                                                                          return (
                                                                                            <div>
                                                                                                <ZodiacJourneyBlogPost/>
                                                                                              </div>
                                                                                              );
                                                                                              case "starry-wisdom-how-your-zodiac-sign-shapes-your-life":
                                                                                              return (
                                                                                                <div>
                                                                                                    <StarryWisdomBlogPost/>
                                                                                                  </div>
                                                                                                  );
                                                                                                  case "the-zodiac-diaries-real-life-experiences-and-horoscope-insights":
                                                                                                    return (
                                                                                                      <div>
                                                                                                          <ZodiacDiariesBlogPost/>
                                                                                                        </div>
                                                                                                        );
                                                                                                        case "vivah-milan-marriage-matching-kundli-milan-marital-issues-auspicious-time":
                                                                                                    return (
                                                                                                      <div>
                                                                                                          <MarriageMatchingBlogPost/>
                                                                                                        </div>
                                                                                                        );
                                                                                                        case "navigating-lifes-path-understanding-palmistry-and-your-unique-journey":
                                                                                                          return (
                                                                                                            <div>
                                                                                                                <PalmistryBlogPost/>
                                                                                                              </div>
                                                                                                              );
                                                                                                              case "exploring-your-life-line-what-jewan-rekha-reveals-about-your-journey":
                                                                                                                return (
                                                                                                                  <div>
                                                                                                                      <LifeLineBlogPost/>
                                                                                                                    </div>
                                                                                                                    );
                                                                                                                    case "bedroom-vastu-for-better-sleep":
                                                                                                                return (
                                                                                                                  <div>
                                                                                                                      <BedroomVastuBlogPost/>
                                                                                                                    </div>
                                                                                                                    );
                                                                                                                    case "vastu-tips-for-a-harmonious-living-room":
                                                                                                                      return (
                                                                                                                        <div>
                                                                                                                            <LivingRoomVastuBlogPost/>
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

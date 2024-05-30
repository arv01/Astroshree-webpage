"use client";

import React from 'react';

import Header from '../app/Common/Header';
import Slideshow from './HomeSlide/Slideshow';
import GreetingsPage from './Greetings/Greeting';
import ServiceLayoutPage from './Services/ServiceLayout';
import BlogPage from './blogs/Blogs';
import TestimonialPage from './Testimonial/TestimonialPage';
import MainContent from './MainContent/MainContent';
import FAQSection from './FAQSection/FAQSection';
import Footer from '../app/Common/Footer/Footer';


const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <GreetingsPage/>
      <Slideshow />
      <ServiceLayoutPage/>
      <BlogPage/>
      <TestimonialPage/>
      <MainContent/>
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default LandingPage;

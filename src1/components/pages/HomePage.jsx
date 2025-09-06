"use client";

import React, { useState, Suspense } from "react";
// Import HeroSlider as a separate component for proper lazy loading
import HeroSlider from "../ui/HeroSlider";
// Use React.lazy to lazy load the rest of your components
// import About from '../ui/About.jsx';
import OurServices from "../ui/OurServices";
import WhyChooseUs from '../ui/WhyChooseUs.jsx'
// import OurGallery from '../ui/Gallerywhy.jsx'
import OurPromise from "../ui/OurPromise";
import StillHaveQuestion from "../ui/StillHaveQuestion";
import FAQSection from "../ui/FaqSection.jsx"
// const OurServices = React.lazy(() => import("../ui/OurServices"));
// const WhyChooseUs = React.lazy(() => import("../ui/WhyChooseUs"));
const Testimonial = React.lazy(() => import('../ui/Testimonial'));
// const StillHaveQuestion = React.lazy(() => import('../ui/StillHaveQuestion'));
const OurGallery = React.lazy(() => import('../ui/Gallerywhy'));
const Products = React.lazy(() => import('../ui/Product'));
// const FAQSection = React.lazy(() => import('../ui/FaqSection'));
// const OurPromise = React.lazy(() => import('../ui/OurPromise'));
const ContactPage = React.lazy(() => import("../ui/EnquiryLocateUs"));

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleEnquiryClick = () => {
    setCurrentPage('contact');
  };

  return (
    <div>
      {currentPage === 'home' && (
        <>
          {/* HeroSlider is rendered directly for fast initial display */}
          <HeroSlider onEnquiryClick={handleEnquiryClick} />
          {/* <About /> */}
          <OurServices/>
          <WhyChooseUs />
          
          {/* Wrap other components in Suspense for lazy loading */}
          <Suspense fallback={<div>Loading...</div>}>
            
            <OurGallery/>
            <Products />
            <Testimonial />
            
          </Suspense>
        </>
      )}
      <OurPromise/>
            <StillHaveQuestion/>
            <FAQSection/>
      {currentPage === 'contact' && (
        <Suspense fallback={<div>Loading...</div>}>
          <ContactPage />
        </Suspense>
      )}
    </div>
  );
};

export default HomePage;
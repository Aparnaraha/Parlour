"use client";

import React, { useState, Suspense } from "react";
// Import HeroSlider as a separate component for proper lazy loading
import HeroSlider from "../ui/HeroSlider";
// Use React.lazy to lazy load the rest of your components
const About = React.lazy(() => import("../ui/About"));
const OurServices = React.lazy(() => import("../ui/OurServices"));
const WhyChooseUs = React.lazy(() => import("../ui/WhyChooseUs"));
const Testimonial = React.lazy(() => import('../ui/Testimonial'));
const StillHaveQuestion = React.lazy(() => import('../ui/StillHaveQuestion'));
const OurGallery = React.lazy(() => import('../ui/Gallerywhy'));
const Products = React.lazy(() => import('../ui/Product'));
const FAQSection = React.lazy(() => import('../ui/FaqSection'));
const OurPromise = React.lazy(() => import('../ui/OurPromise'));
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
          {/* Wrap other components in Suspense for lazy loading */}
          <Suspense fallback={<div>Loading...</div>}>
            <About />
            <OurServices />
            <WhyChooseUs />
            <OurGallery/>
            <Products />
            <Testimonial />
            <OurPromise/>
            <StillHaveQuestion/>
            <FAQSection/>
          </Suspense>
        </>
      )}
      {currentPage === 'contact' && (
        <Suspense fallback={<div>Loading...</div>}>
          <ContactPage />
        </Suspense>
      )}
    </div>
  );
};

export default HomePage;
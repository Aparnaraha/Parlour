// src/components/Layout/SiteLayout.jsx
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import TopHeader from './TopHeader';
import NavigationBar from './NavigationBar';
import TopFooter from './TopFooter';
import SiteFooter from './SiteFooter';
import EnquiryLocateUs from '../ui/EnquiryLocateUs';
import ServiceStepCounter from '../sections/ServiceStep';
import StillHaveQuestion from '../ui/StillHaveQuestion';
import FloatingButtons from './Floating';

// The SiteLayout component is a container for all pages, providing a consistent header and footer.
const SiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* ScrollRestoration goes here, now that SiteLayout is within RouterProvider */}
      <ScrollRestoration />
      <TopHeader />
      <NavigationBar />
      
      {/* Main content of the page */}
      <main className="flex-grow">
        {children}
      </main>

      <ServiceStepCounter />
      <TopFooter />
      <EnquiryLocateUs />
      <SiteFooter />

      {/* 👇 Floating buttons always visible on every page */}
      <FloatingButtons />
    </div>
  );
};

export default SiteLayout;
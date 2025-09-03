// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './components/pages/HomePage';
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';
import FAQ from './components/pages/FAQ';
import Skin from './components/pages/services/SkinService';
import Makeup from './components/pages/services/MakeUp';
import Hair from './components/pages/services/HairService';
import AboutPage from './components/pages/About';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout><HomePage /></SiteLayout>,
  },
  {
    path: '/about',
    element: <SiteLayout><AboutPage /></SiteLayout>,
  },
  {
    path: '/contact',
    element: <SiteLayout><ContactUs /></SiteLayout>,
  },
  {
    path: '/gallery',
    element: <SiteLayout><Gallery /></SiteLayout>,
  },
  {
    path: '/faq',
    element: <SiteLayout><FAQ /></SiteLayout>,
  },
  {
    path: '/services/hair/',
    element: <SiteLayout><Hair /></SiteLayout>,
  },
  {
    path: '/services/skin/',
    element: <SiteLayout><Skin /></SiteLayout>,
  },
  {
    path: '/services/makeup/',
    element: <SiteLayout><Makeup /></SiteLayout>,
  },
]);

const App = () => {
  return (
  
      <RouterProvider router={router} />
    
  );
};

export default App;
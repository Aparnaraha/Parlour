// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './components/pages/HomePage';
import './index.css'; // Assuming Tailwind CSS is imported here
import ContactUs from './components/pages/ContactUs';
import Gallery from './components/pages/Gallery';
import FAQ from './components/pages/FAQ'
import Skin from './components/pages/services/SkinService';
import Makeup from './components/pages/services/MakeUp';
import Hair from './components/pages/services/HairService'
import AboutPage from './components/pages/About';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout><HomePage /></SiteLayout>} />
        <Route path="/about" element={<SiteLayout><AboutPage /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout><ContactUs/></SiteLayout>} />
        <Route path="/gallery" element={<SiteLayout><Gallery/></SiteLayout>} />
        <Route path='/faq' element={<SiteLayout><FAQ/></SiteLayout>}/>
        <Route path='/services/hair/' element={<SiteLayout><Hair/></SiteLayout>}/>
        <Route path='/services/skin/' element={<SiteLayout><Skin/></SiteLayout>}/>
        <Route path='/services/makeup/' element={<SiteLayout><Makeup/></SiteLayout>}/>
      </Routes>
    </Router>
  );
};

export default App;

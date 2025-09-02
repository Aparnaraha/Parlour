"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Heart, Eye, Play, Film, GalleryHorizontal, Award, Trophy, Users, Star,
  Car, Zap, Gem, Shield, Crown, Sun, Moon, ArrowUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import ThemeChanger from '../ui/ThemeChanger';
import StillQuestionsSection from '../ui/StillHaveQuestion';



const AnimatedCounter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const increment = to / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isInView, from, to, duration]);

  return <span ref={ref} className="font-extrabold text-5xl md:text-6xl">{count.toLocaleString()}</span>;
};

const Gallery = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.5 });
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -200]);

  const galleryImages = [
    'https://images.unsplash.com/photo-1549488390-e55d54a2a19c?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517487841170-c0b9d6a3f9e9?ixlib=rb-4.0.3&q=80&fm=jpg',
    'https://images.unsplash.com/photo-1557007787-21a48c58066f?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555546258-0027f6f59c23?q=80&w=1935&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544465557-550f5c15033c?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547462438-d65287f32997?q=80&w=1974&auto=format&fit=crop',
  ];

  const videoLinks = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ?si=0i6vR8WjB5tP71lq',
    'https://www.youtube.com/embed/yCjJzyi8l1g?si=638o9y7rWnBvL_D-',
    'https://www.youtube.com/embed/nL7P2o3J5qE?si=jM28hF7X_lC3O-zC',
    'https://www.youtube.com/embed/bL6t11Jt950?si=L3lTjV6P-oV51F7k',
  ];
  
  const reelImages = [
    'https://images.unsplash.com/photo-1629854742491-38e9c9f7a83d?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587823521257-2e624c449c47?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517487841170-c0b9d6a3f9e9?ixlib=rb-4.0.3&q=80&fm=jpg',
    'https://images.unsplash.com/photo-1555546258-0027f6f59c23?q=80&w=1935&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549488390-e55d54a2a19c?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544465557-550f5c15033c?q=80&w=1974&auto=format&fit=crop',
  ]
  const [currentReel, setCurrentReel] = useState(0);

  const colors = theme === 'dark' ? {
    bg: "bg-gray-950",
    text: "text-gray-200",
    secondaryText: "text-gray-400",
    primaryAccent: "text-yellow-400",
    secondaryAccent: "text-teal-400",
    sectionBg: "bg-gray-900",
    button: "bg-yellow-500 hover:bg-yellow-600 text-white",
  } : {
    bg: "bg-gray-50",
    text: "text-gray-900",
    secondaryText: "text-gray-600",
    primaryAccent: "text-yellow-600",
    secondaryAccent: "text-teal-600",
    sectionBg: "bg-white",
    button: "bg-yellow-500 hover:bg-yellow-600 text-white",
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reelImages.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reelImages.length) % reelImages.length);
  };

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans overflow-x-hidden transition-colors duration-500 relative`}>
      <ThemeChanger theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center min-h-[50vh] text-center p-8 overflow-hidden`}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520696342898-1f190d635c05?q=80&w=1935&auto=format&fit=crop')`,
            y: parallaxY
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Masterpieces
          </motion.h1>
          <motion.p
            className={`text-xl md:text-2xl mb-8 opacity-80 ${colors.secondaryText}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A visual journey through our finest work and unforgettable moments.
          </motion.p>
          <motion.button
            className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${colors.button}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Gallery
          </motion.button>
        </div>
      </motion.section>

      {/* Photo Gallery Section */}
      <section className={`py-16 px-4 md:px-8 ${colors.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center ${colors.text}`}>Photo Gallery</h2>
          <p className={`text-center text-lg mb-12 ${colors.secondaryText}`}>Capture your moments in perfect light.</p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-xl ${index % 3 === 0 ? 'col-span-2 row-span-2 md:col-span-1' : ''}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 50 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                  <Eye size={36} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Counter Section */}
      <section className={`py-20 px-4 md:px-8 ${colors.bg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-4 ${colors.text}`}>Our Success in Numbers</h2>
          <p className={`text-lg mb-12 ${colors.secondaryText}`}>We take pride in our achievements, one client at a time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-lg shadow-xl transition-colors duration-300 ${colors.sectionBg}`}
              whileHover={{ y: -10, rotate: 2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Users size={64} className={`mb-4 ${colors.primaryAccent}`} />
              <AnimatedCounter from={0} to={5000} duration={2} />
              <p className={`text-lg font-medium mt-2 ${colors.secondaryText}`}>Happy Clients</p>
            </motion.div>
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-lg shadow-xl transition-colors duration-300 ${colors.sectionBg}`}
              whileHover={{ y: -10, rotate: 2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Award size={64} className={`mb-4 ${colors.primaryAccent}`} />
              <AnimatedCounter from={0} to={750} duration={2} />
              <p className={`text-lg font-medium mt-2 ${colors.secondaryText}`}>Projects Completed</p>
            </motion.div>
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-lg shadow-xl transition-colors duration-300 ${colors.sectionBg}`}
              whileHover={{ y: -10, rotate: 2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Star size={64} className={`mb-4 ${colors.primaryAccent}`} />
              <AnimatedCounter from={0} to={100} duration={2} />
              <p className={`text-lg font-medium mt-2 ${colors.secondaryText}`}>Years of Experience</p>
            </motion.div>
            <motion.div 
              className={`flex flex-col items-center p-6 rounded-lg shadow-xl transition-colors duration-300 ${colors.sectionBg}`}
              whileHover={{ y: -10, rotate: 2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Trophy size={64} className={`mb-4 ${colors.primaryAccent}`} />
              <AnimatedCounter from={0} to={25} duration={2} />
              <p className={`text-lg font-medium mt-2 ${colors.secondaryText}`}>Awards Won</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className={`py-16 px-4 md:px-8 ${colors.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 text-center ${colors.text}`}>Video Showcase</h2>
          <p className={`text-center text-lg mb-12 ${colors.secondaryText}`}>Watch our creative process and final results.</p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {videoLinks.map((link, index) => (
              <motion.div
                key={index}
                className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src={link}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Reels Section (Slider) */}
      <section className={`py-16 px-4 md:px-8 ${colors.bg}`}>
        <div className="max-w-7xl mx-auto relative">
          <h2 className={`text-4xl font-bold mb-4 ${colors.text}`}>Quick Reels</h2>
          <p className={`text-lg mb-8 ${colors.secondaryText}`}>A collection of our favorite short-form videos.</p>
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentReel * (256 + 16)}px` }} // 256px width + 16px gap
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {reelImages.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={src} alt={`Reel ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play size={48} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <button
              onClick={prevReel}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 backdrop-blur-md text-gray-800 hover:bg-opacity-100 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReel}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 backdrop-blur-md text-gray-800 hover:bg-opacity-100 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Still Have Questions is hardcoded to dark theme */}
      <StillQuestionsSection />

     
    </div>
  );
};

export default Gallery;

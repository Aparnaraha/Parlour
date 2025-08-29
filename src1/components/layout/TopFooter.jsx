"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
const TopFooter = () => {
  const circleControls = useAnimation();
  const handleHoverStart = () => {
    circleControls.start({
      opacity: 1,
      scale: 1.6,
      filter: 'blur(40px)',
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };
  const handleHoverEnd = () => {
    circleControls.start({
      opacity: 0.3,
      scale: 1,
      filter: 'blur(50px)',
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };
  return (
    <section className="relative bg-[#1B198f] text-white py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient: deep blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B198f] via-[#11116f] to-[#1B198f]"></div>
        {/* Illuminated grid pattern (subtle lines) - secondary color themed */}
        <div className="absolute inset-0 illuminated-grid-animation opacity-10"></div>
        {/* Dynamic, flowing light trails/particles - secondary color themed */}
        <div className="absolute inset-0 light-trails-container animate-light-trails">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
        </div>
        {/* Animated particles/stars - a stylistic touch */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <motion.div
            className="w-4 h-4 rounded-full bg-[#C3B3F1] opacity-60 absolute"
            animate={{
              x: [100, 500, 800, 300, 100],
              y: [200, 50, 400, 500, 200],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.6, 0.8, 0.4, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          />
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-white bg-gradient-to-r from-white to-[#C3B3F1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Style, Perfected.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover a new you with our premium grooming services. <br className="hidden md:block" /> Experience excellence, every visit.
        </motion.p>
        
        <div className="relative inline-block">
          <motion.div
            className="absolute rounded-full bg-[#39ff14] transform -translate-x-1/2 -translate-y-1/2"
            style={{ width: '220px', height: '220px', top: '50%', left: '50%', zIndex: -1 }}
            initial={{ opacity: 0.3, scale: 1, filter: 'blur(50px)' }}
            animate={circleControls}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
          <motion.button
            className="px-10 py-5 bg-green-500 text-white font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto text-xl relative z-0"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => window.location.href='#'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>Enquire Now</span>
            <ArrowRight size={28} />
          </motion.button>
        </div>
      </div>
      {/* Tailwind CSS custom animations and styles for the new background */}
      <style>{`
        /* --- General Background Theme --- */
        .bg-gradient-to-br {
            background-color: #1B198f; /* Base dark color */
        }
        /* --- Illuminated Grid Pattern (Secondary Color Themed) --- */
        .illuminated-grid-animation {
            background-image: repeating-linear-gradient(0deg,
                rgba(195, 179, 241, 0.08) 0px,
                rgba(195, 179, 241, 0.08) 1px,
                transparent 1px,
                transparent 50px
            ),
            repeating-linear-gradient(90deg,
                rgba(195, 179, 241, 0.08) 0px,
                rgba(195, 179, 241, 0.08) 1px,
                transparent 1px,
                transparent 50px
            );
            background-size: 50px 50px; 
            animation: grid-pulse 10s linear infinite alternate; 
        }
        @keyframes grid-pulse {
            0% { opacity: 0.1; }
            50% { opacity: 0.2; }
            100% { opacity: 0.1; }
        }
        /* --- Dynamic Light Trails/Particles (Secondary Color Themed) --- */
        .light-trails-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            filter: blur(20px);
            opacity: 0.6;
        }
        .light-trail {
            position: absolute;
            background: linear-gradient(to right, 
                rgba(195, 179, 241, 0) 0%, 
                rgba(195, 179, 241, 0.5) 50%,
                rgba(195, 179, 241, 0.3) 100% 
            );
            border-radius: 50%; 
            opacity: 0; 
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            box-shadow: 0 0 20px rgba(195, 179, 241, 0.4);
        }
        .trail-1 {
            width: 300px; height: 50px; 
            top: 10%; left: -50%;
            animation: move-trail-1 25s -5s infinite; 
        }
        .trail-2 {
            width: 400px; height: 70px; 
            top: 60%; left: -80%;
            animation: move-trail-2 30s -10s infinite;
        }
        .trail-3 {
            width: 250px; height: 40px; 
            top: 40%; left: -30%;
            animation: move-trail-3 20s -2s infinite;
        }
        @keyframes move-trail-1 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { transform: translateX(150vw); opacity: 0; }
        }
        @keyframes move-trail-2 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: translateX(160vw); opacity: 0; }
        }
        @keyframes move-trail-3 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateX(140vw); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
export default TopFooter;

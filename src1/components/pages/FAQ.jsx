import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import PremiumFaqSection from '../ui/FaqSection';

// Memoized component for the particle effect to prevent re-renders
const ParticleEffect = React.memo(() => (
  <div className="absolute inset-0 z-0 opacity-30">
    <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-yellow-500 animate-[pulse-slow_6s_infinite] blur-sm"></div>
    <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-orange-500 animate-[pulse-fast_4s_infinite] blur-sm"></div>
    <div className="absolute bottom-10 right-20 w-4 h-4 rounded-full bg-yellow-400 animate-[pulse-medium_5s_infinite] blur-sm"></div>
    <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-orange-400 animate-[pulse-slow_7s_infinite] blur-sm"></div>
    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-yellow-500 animate-[pulse-fast_3s_infinite] blur-sm"></div>
  </div>
));

// Memoized component for the medal icon
const Medal = React.memo(({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.148a.562.562 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.6l-4.725-2.885a.563.563 0 00-.582 0l-4.725 2.885a.562.562 0 01-.84-.6l1.285-5.385a.562.562 0 00-.182-.557L3.922 9.499c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.148z"
    />
  </svg>
));

// Hero section component
const HeroSection = React.memo(() => {
  return (
    <section className="relative py-28 bg-[#1a1c24] text-white overflow-hidden h-[40vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <ParticleEffect />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Queries  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">in Mind?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          We’re more than just a barbershop — we’re a destination for refinement, precision, and style.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        
      </motion.div>
    </section>
  );
});

const FAQ = () => {
  return (
    <div>
      <HeroSection/>
      <PremiumFaqSection/>
    </div>
  );
}

export default FAQ;
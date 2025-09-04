"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../../img/Hero_20.mp4";

const slides = [
  {
    type: "video",
    src: heroVideo,
    heading: "Welcome to Alex",
    subtitle:
      "At Alex Beauty Parlour, we blend modern style with traditional elegance to give you confidence and charm every single day.",
  },
  {
    type: "image",
    src: 'https://www.albane.ru/images/camille-albane-infoblock/0x0x1-item/5k0st-muzhchiny.webp',
    heading: "World-Class Grooming",
    subtitle:
      "Our professionals craft unique looks tailored to your personality, ensuring you leave with unmatched elegance and sophistication.",
  },
  {
    type: "image",
    src: 'https://i.pinimg.com/originals/b8/38/1d/b8381d1cdc3cae338e25c6e6e551c32b.jpg',
    heading: "Grooming Redefined",
    subtitle:
      "At Alex, we redefine beauty with premium services, attention to detail, and timeless style.",
  },
  {
    type: "image",
    src: 'https://magicaldayweddings.com/wp-content/uploads/2022/05/How-Long-Does-It-Take-To-Tailor-A-Suit-For-The-Groom-1.jpg',
    heading: "Style Meets Elegance",
    subtitle:
      "Discover premium grooming crafted to perfection for every gentleman who values class.",
  },
];

const backgroundVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeIn"
    }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const HeroSlider = ({ onEnquiryClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[86vh] w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {slides[current].type === "video" ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slides[current].src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slides[current].src}
              alt="Slide Background"
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <div 
        className="absolute inset-0 z-10" 
        style={{ 
          boxShadow: 'inset 0px 0px 100px rgba(0,0,0,0.8)'
        }}
      ></div>

      <div className="relative z-20 w-full max-w-4xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2 
              className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-amber-300 text-transparent bg-clip-text drop-shadow-lg"
              variants={itemVariants}
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              {slides[current].heading}
            </motion.h2>

            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-lg"
              variants={itemVariants}
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div 
              className="mt-8 flex justify-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 25px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)' 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnquiryClick}
              >
                <span className="relative z-10">Enquiry</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
              </motion.button>

              <motion.button
                className="relative px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.2)',
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? "bg-yellow-500" : "bg-gray-300"
            }`}
          >
            <div className="w-full h-full rounded-full" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
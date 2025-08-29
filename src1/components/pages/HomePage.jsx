import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgVideo from "../../img/hero2.mp4";
import "../../styles/globals.css"; // Ensure this file exists with the CSS from the previous response
import About from "../ui/About";

const Hero = () => {
  const texts = [
    "Expert Haircuts & Styling",
    "Luxury Skin Treatments",
    "Signature Grooming Experience",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-['Montserrat',sans-serif] hero-section">
        {/* Background Video (z-index: 0) */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={imgVideo} type="video/mp4" />
        </video>

        {/* Content (z-index: 2, sits on top of the overlay) */}
        <motion.div
          className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto py-16 hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Brand Tagline */}
          <div
            className="inline-flex items-center px-6 py-2 rounded-full mb-6 font-medium text-sm tracking-wide"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: "#4ade80" }}
            ></span>
            THE GENTLEMAN'S PARLOUR
          </div>

          {/* Rotating Heading (Updated with golden and white) */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              className="font-['Cormorant Garamond',serif] text-4xl md:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #FFD700 50%, #B8860B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {texts[currentIndex]}
            </motion.h1>
          </AnimatePresence>

          {/* Buttons with onClick handler */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base shadow-lg text-white"
              style={{
                background: "linear-gradient(90deg, #2c3e50 0%, #3498db 100%)",
              }}
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log('Book Appointment button clicked!')}
            >
              <i className="fa-solid fa-calendar-check" /> Book Appointment
            </motion.button>

            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
              whileHover={{ background: "rgba(255, 255, 255, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log('View Our Work button clicked!')}
            >
              <i className="fa-solid fa-images" /> View Our Work
            </motion.button>
          </div>

          {/* 3 Service Icons with onClick handler */}
          <div className="flex justify-center gap-10 mt-16">
            {[
              { icon: "fa-scissors", text: "Hair Styling" },
              { icon: "fa-spa", text: "Skin Care" },
              { icon: "fa-crown", text: "Luxury Service" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center text-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                onClick={() => console.log(`${item.text} icon clicked!`)}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl shadow-lg transition-all duration-300 ease-in-out"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <i className={`fa-solid ${item.icon} text-white`} />
                </div>
                <div className="text-sm font-medium">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About />
    </div>
  )
}

export default HomePage
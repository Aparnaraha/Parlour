"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

/**
 * A reusable component for the "Still Have Questions" section.
 * This component has a hardcoded dark theme as requested.
 */
const StillQuestionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Fixed dark theme colors for this section
  const darkThemeColors = {
    sectionBg: "bg-[#0c1824]", // Main section background - darkest
    mainCardBg: "bg-[#222633]", // Main card container background - slightly less dark
    innerCardBg: "bg-[#1a1c24]", // Individual contact cards background - darker than main card for depth
    text: "text-gray-200",
    secondaryText: "text-gray-400",
    border: "border-gray-700"
  };

  return (
    <motion.section
      ref={ref}
      className={`relative py-16 px-4 md:px-6 z-20 transition-colors duration-500 ${darkThemeColors.sectionBg}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      <div className={`max-w-4xl mx-auto p-8 rounded-xl shadow-lg text-center transition-colors duration-500 ${darkThemeColors.mainCardBg}`}
        style={{
          border: `1px solid ${darkThemeColors.border.replace('border-','')}`
        }}
      >
        <motion.h2
          variants={cardVariants}
          className={`text-3xl font-bold mb-3 ${darkThemeColors.text}`}
        >
          Still Have Questions?
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className={`text-md ${darkThemeColors.secondaryText} mb-10`}
        >
          Our support team is here to help you 24/7. Reach out through any of these channels and we'll get back to you as soon as possible.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            className={`p-6 rounded-lg text-center flex flex-col items-center group ${darkThemeColors.innerCardBg} ${darkThemeColors.border}`}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(76,175,80,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-700">
              <Phone size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkThemeColors.text}`}>Call Us</h3>
            <p className={`${darkThemeColors.secondaryText} mb-2`}>+91 9090375666</p>
            <a href="tel:+919090375666" className="text-green-500 hover:underline">Call Now</a>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className={`p-6 rounded-lg text-center flex flex-col items-center group ${darkThemeColors.innerCardBg} ${darkThemeColors.border}`}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(66,133,244,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-700">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkThemeColors.text}`}>Email Us</h3>
            <p className={`${darkThemeColors.secondaryText} mb-2`}>hellodrive60@gmail.com</p>
            <a href="mailto:hellodrive60@gmail.com" className="text-blue-500 hover:underline">Send Email</a>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className={`p-6 rounded-lg text-center flex flex-col items-center group ${darkThemeColors.innerCardBg} ${darkThemeColors.border}`}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(96,56,192,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-purple-700">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkThemeColors.text}`}>WhatsApp</h3>
            <p className={`${darkThemeColors.secondaryText} mb-2`}>Available 24/7</p>
            <a href="https://wa.me/919090375666" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">Start Chat</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StillQuestionsSection;

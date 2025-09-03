"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowDown } from 'lucide-react';

/**
 * A reusable component for the "Still Have Questions" section.
 * This component features a static glow effect on the main card with a dark theme.
 * It also includes a scroll-to-FAQs button.
 */
const StillQuestionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Variants for staggered animation of the container and its children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleScrollToFAQs = () => {
    const faqSection = document.getElementById('faqs-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* CSS for the static glow effect on the border */}
      <style>{`
        .animated-border-container {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          /* Static glow effect */
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.1);
        }
      `}</style>
      
      {/* Outer container with dark background and central alignment */}
      <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#21242c] font-['Inter',sans-serif]">
        
        {/* Main Card Container with the static glow border */}
        <motion.div
          ref={ref}
          className="w-full max-w-4xl mx-auto shadow-2xl flex flex-col animated-border-container relative z-10"
          style={{
            background: '#1d212a',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Main content area */}
          <div className="p-8 rounded-xl text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-3 text-white"
            >
              Still Have Questions?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-md text-gray-400 mb-10"
            >
              Our support team is here to help you 24/7. Reach out through any of these channels and we'll get back to you as soon as possible.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Call Us */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-lg text-center flex flex-col items-center group bg-[#2c3e50] border border-white/20"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(76,175,80,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-700">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-gray-400 mb-2">+91 9329182237</p>
                <button 
                  onClick={() => window.location.href = 'tel:+919329182237'}
                  className="mt-2 px-4 py-2 text-green-500 hover:text-white hover:bg-green-500/20 border border-green-500 rounded-full transition-all duration-300"
                >
                  Call Now
                </button>
              </motion.div>

              {/* Card 2: Email Us */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-lg text-center flex flex-col items-center group bg-[#2c3e50] border border-white/20"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(66,133,244,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-700">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-gray-400 mb-2">aparnaraha0@gmail.com</p>
                <button
                  onClick={() => window.location.href = 'mailto:aparnaraha0@gmail.com'}
                  className="mt-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500/20 border border-blue-500 rounded-full transition-all duration-300"
                >
                  Send Email
                </button>
              </motion.div>

              {/* Card 3: WhatsApp */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-lg text-center flex flex-col items-center group bg-[#2c3e50] border border-white/20"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 0 10px rgba(96,56,192,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-purple-700">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp</h3>
                <p className="text-gray-400 mb-2">Available 24/7</p>
                <button
                  onClick={() => window.open('https://wa.me/919329182237', '_blank')}
                  className="mt-2 px-4 py-2 text-purple-500 hover:text-white hover:bg-purple-500/20 border border-purple-500 rounded-full transition-all duration-300"
                >
                  Start Chat
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Moved: Arrow to scroll to the FAQ section, now in the background */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 bg-[#1d212a] rounded-full border border-gray-700 cursor-pointer shadow-lg z-20 flex flex-col justify-center items-center shadow-green-100"
          onClick={handleScrollToFAQs}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
        
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </section>
    </>
  );
};

export default StillQuestionsSection;
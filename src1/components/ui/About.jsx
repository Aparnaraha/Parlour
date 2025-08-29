import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#F0F2F5] py-20 px-4 md:px-6 font-['Poppins',sans-serif] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center p-4 min-h-[500px] lg:min-h-[600px]">
            <motion.div
              className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Back Image (larger and off-center) */}
              <div className="absolute top-0 left-0 z-10 w-[85%] aspect-[3/4] rounded-lg shadow-2xl overflow-hidden -translate-x-4 -translate-y-4">
                <img
                  src="https://placehold.co/500x700/D4C9BD/2C150B?text=Hair+Styling"
                  alt="A professional hair stylist working on a client's hair"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Front Image (smaller, with overlap and shadow) */}
              <div className="absolute bottom-0 right-0 z-20 w-[85%] aspect-[3/4] rounded-lg shadow-2xl overflow-hidden translate-x-4 translate-y-4">
                <img
                  src="https://placehold.co/500x700/A69280/F2F2F2?text=Client+Hair+Wash"
                  alt="A person getting their hair washed at the salon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0"
            variants={sectionVariants}
          >
            <motion.div
              className="inline-flex items-center px-5 py-2 rounded-full mb-8 font-medium text-sm text-white"
              style={{ background: 'rgba(44, 62, 80, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: '#4ade80' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.span>
              Learn About Us
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-8 leading-tight"
              variants={textVariants}
            >
              A Tradition Of Excellence And Craftsmanship
            </motion.h2>
            <motion.p
              className="text-gray-600 leading-relaxed mb-8 max-w-lg"
              variants={textVariants}
            >
              With over **20 years of experience**, our master barbers and stylists are dedicated to providing a premium grooming experience. We blend classic techniques with modern trends to ensure every client leaves looking and feeling their best.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
              <motion.button
                whileHover={{ y: -3, scale: 1.05, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold text-white rounded-full shadow-md transition-all duration-300 w-full sm:w-auto"
                style={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }}
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-8 py-3 font-semibold text-[#2C3E50] rounded-full border-2 border-[#2C3E50] transition-colors duration-300 w-full sm:w-auto hover:bg-[#2C3E50] hover:text-white"
              >
                Contact Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
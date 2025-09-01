import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Phone, Star, MessageCircle } from 'lucide-react';

const AllexGentsParlour = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* CSS for the animated border effect, now applied only to the image container */}
      <style>{`
        @keyframes slide-border {
          0% {
            top: 0;
            left: 0;
          }
          25% {
            top: 0;
            left: calc(100% - 100px);
          }
          50% {
            top: calc(100% - 4px);
            left: calc(100% - 100px);
          }
          75% {
            top: calc(100% - 4px);
            left: 0;
          }
          100% {
            top: 0;
            left: 0;
          }
        }
        .animated-border-container-image {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem; /* Matches the image's rounded corners */
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2px; /* Add slight padding so the border isn't on the edge of the content */
        }
        .animated-border-container-image::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          animation: slide-border 8s linear infinite;
        }
      `}</style>

      <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#1d212a] font-inter text-white">
        <motion.div
          className="w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Section - Content */}
          <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              className="inline-flex items-center justify-center lg:justify-start bg-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-5 mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <Scissors size={16} className="mr-2 text-yellow-500" />
              Hair Styling & Care
            </motion.div>

            <motion.h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={itemVariants}
            >
              Crafting Your <br className="hidden lg:inline" />
              <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Signature Look
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-base sm:text-lg mb-8"
              variants={itemVariants}
            >
              Experience world-class grooming services for the modern gentleman,
              including expert haircuts, clean shaves, and flawless styling.
            </motion.p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 sm:gap-16 mb-8">
              <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <h2 className="text-3xl font-bold text-white">20+</h2>
                <span className="text-sm text-gray-500">Years Experience</span>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <h2 className="text-3xl font-bold text-white">100%</h2>
                <span className="text-sm text-gray-500">Client Satisfaction</span>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <h2 className="text-3xl font-bold text-white">1000+</h2>
                <span className="text-sm text-gray-500">Happy Clients</span>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment <span className="ml-2">→</span>
              </motion.button>
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700"
                whileHover={{ scale: 1.05, background: '#2c3e50', boxShadow: '0 0 20px rgba(44, 62, 80, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="mr-2" /> Call Now
              </motion.button>
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700 bg-gray-700"
                whileHover={{ scale: 1.05, background: '#4b5563', boxShadow: '0 0 20px rgba(75, 85, 99, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} className="mr-2" /> Make an Enquiry
              </motion.button>
            </div>
          </div>

          {/* Right Section - Image with Animated Border */}
          <motion.div
            className="flex-1 flex justify-center p-6 sm:p-12 lg:p-0 relative max-w-lg w-full"
            variants={itemVariants}
          >
            <div className="relative w-full animated-border-container-image">
              <img
                src="http://googleusercontent.com/image_generation_content/1"
                alt="A stylishly groomed man with a modern haircut in a barber shop"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                <Star size={20} className="mr-2 text-yellow-400" fill="currentColor" />
                <div>
                  4.9/5 <br /> Client Rating
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default AllexGentsParlour;
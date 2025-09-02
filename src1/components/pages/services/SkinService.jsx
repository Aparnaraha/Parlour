import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Star, MessageCircle } from 'lucide-react';

const SkinService = () => {
  // Animation variants for staggered entry
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
      {/* Custom CSS for the single, continuous animated border */}
      <style>{`
        @keyframes continuous-border-move {
          0%, 100% {
            top: 0;
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform: none;
          }
          25% {
            top: 0;
            left: calc(100% - 80px);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform: none;
          }
          25.1% {
            top: 0;
            left: calc(100% - 4px);
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: top center;
          }
          50% {
            top: calc(100% - 80px);
            left: calc(100% - 4px);
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: top center;
          }
          50.1% {
            top: calc(100% - 4px);
            left: calc(100% - 80px);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform-origin: right center;
          }
          75% {
            top: calc(100% - 4px);
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform-origin: right center;
          }
          75.1% {
            top: calc(100% - 80px);
            left: 0;
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: bottom center;
          }
          100% {
            top: 0;
            left: 0;
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: bottom center;
          }
        }

        .animated-border-container-image {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3px;
        }

        .animated-border-container-image::after {
          content: '';
          position: absolute;
          animation: continuous-border-move 10s linear infinite;
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
              <Sparkles size={16} className="mr-2 text-yellow-500" />
              Advanced Skin Care
            </motion.div>

            <motion.h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={itemVariants}
            >
              Revitalize Your <br className="hidden lg:inline" />
              <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Skin
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-base sm:text-lg mb-8"
              variants={itemVariants}
            >
              Discover our signature skin treatments, including revitalizing
              facials, deep cleansing, and rejuvenating masks for a healthy,
              glowing complexion.
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
                <MessageCircle size={20} className="mr-2" /> Enquiry
              </motion.button>
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700"
                whileHover={{ scale: 1.05, background: '#2c3e50', boxShadow: '0 0 20px rgba(44, 62, 80, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} className="mr-2" /> Call Now
              </motion.button>
            </div>
          </div>

          {/* Right Section - Image with Animated Full Border */}
          <motion.div
            className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full"
            variants={itemVariants}
          >
            <div className="relative w-full h-[450px] animated-border-container-image">
              <img
                src="https://images.unsplash.com/photo-1620748117976-4d7a4b081079?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A man receiving a facial treatment in a modern, professional setting"
                className="w-full h-full rounded-3xl shadow-2xl block object-cover"
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

export default SkinService;
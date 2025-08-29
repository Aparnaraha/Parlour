import React from 'react';
import { motion } from 'framer-motion';

const TopFooter = () => {
  return (
    <>
      {/* This is a link to the Font Awesome CDN.
        It needs to be included for the icons to display. 
        In a real-world React app, this would be in the public/index.html file.
      */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-['Montserrat',sans-serif]">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/4009139/4009139-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20"
          style={{ background: 'linear-gradient(90deg, rgba(52, 73, 94, 0.7) 0%, rgba(41, 128, 185, 0.7) 100%)' }}>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-30 text-center text-white px-5 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-5 py-2 rounded-full mb-8 font-medium text-sm"
            style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: '#4ade80' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.span>
            THE GENTLEMAN'S PARLOUR
          </motion.div>

          <h1 className="font-['Cormorant Garamond',serif] text-5xl md:text-6xl font-semibold mb-5 leading-tight">
            Crafting Your <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Signature Look</span> with Precision
          </h1>

          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Experience world-class grooming services for the modern man, including expert haircuts, refreshing skin treatments, and flawless makeup.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all"
              style={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }}
              whileHover={{ y: -3, scale: 1.05, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-solid fa-circle-info w-5 h-5" /> Make an Enquiry
            </motion.button>
            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              whileHover={{ background: 'rgba(255, 255, 255, 0.25)' }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-solid fa-star w-5 h-5" /> View Our Work
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl"
                style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-solid fa-scissors" />
              </motion.div>
              <div className="text-sm">Hair Styling</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl"
                style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-solid fa-hands-bubbles" />
              </motion.div>
              <div className="text-sm">Skin Care</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl"
                style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-solid fa-brush" />
              </motion.div>
              <div className="text-sm">Makeup</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl"
                style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-solid fa-star" />
              </motion.div>
              <div className="text-sm">5-Star Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white text-xs opacity-80 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Scroll to explore
          <motion.div
            className="mt-2 text-base"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="fa-solid fa-chevron-down" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default TopFooter;

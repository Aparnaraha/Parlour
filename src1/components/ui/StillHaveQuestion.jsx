"use client";

import React, { useRef, useCallback, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowDown } from 'lucide-react';

/**
 * A reusable component for the "Still Have Questions" section.
 * This component features a static glow effect on the main card with a dark theme.
 * It also includes a scroll-to-next-section button.
 */

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

const StillQuestionsSection = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Modified function to scroll to the next section after this component
  const handleScrollToNextSection = useCallback(() => {
    if (ref.current && ref.current.nextElementSibling) {
      ref.current.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      {/* CSS for the static glow effect on the border */}
      <style>{`
        .animated-border-container {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animated-border-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            #ffd700, #ffa500, #ff8c00, #ffd700,
            #ffa500, #ff8c00, #ffd700,
            #ffa500, #ff8c00
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
        }
      `}</style>

      <motion.div
        ref={ref}
        className="relative py-20 bg-[#0d1017] font-sans"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team is ready to assist you with any questions or concerns you may have. Contact us through your preferred method below.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-8 rounded-3xl overflow-hidden bg-[#12161f] shadow-2xl animated-border-container">
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{
                   background: 'radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, transparent 70%)'
                 }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-6">
              {/* Phone Card */}
              <motion.div
                className="group p-6 rounded-2xl bg-[#1d212a] transition-all duration-300 transform-gpu hover:scale-[1.02] hover:bg-black/50 hover:shadow-xl hover:shadow-yellow-500/10 cursor-pointer"
                variants={itemVariants}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <Phone size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                <p className="text-gray-400 mb-2">Available 9 AM - 8 PM</p>
                <a
                  href="tel:+919876543210"
                  className="mt-2 px-4 py-2 text-yellow-500 hover:text-white hover:bg-yellow-500/20 border border-yellow-500 rounded-full transition-all duration-300"
                >
                  Give a Call
                </a>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="group p-6 rounded-2xl bg-[#1d212a] transition-all duration-300 transform-gpu hover:scale-[1.02] hover:bg-black/50 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer"
                variants={itemVariants}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-lime-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-700">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                <p className="text-gray-400 mb-2">Typically replies in 24h</p>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=appuraha29@gmail.com&su=Enquiry%20from%20Website&body=Hello%20Alex%20Parlour,"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 px-4 py-2 text-green-500 border border-green-500 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white"
>
  Send Email
</a>

              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                className="group p-6 rounded-2xl bg-[#1d212a] transition-all duration-300 transform-gpu hover:scale-[1.02] hover:bg-black/50 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
                variants={itemVariants}
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-purple-700">
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
        </div>

        {/* Updated: Arrow to scroll to the next section */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 bg-[#1d212a] rounded-full border border-gray-700 cursor-pointer shadow-lg z-20 flex flex-col justify-center items-center shadow-green-100"
          onClick={handleScrollToNextSection}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <ArrowDown className="w-6 h-6 text-green-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
});

export default StillQuestionsSection;
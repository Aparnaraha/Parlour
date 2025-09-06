// src/components/FloatingButtons.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import EnquiryFormModal from '../ui/EnquiryModalForm'; // Import your custom modal component

// A simple debounce utility function
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const FloatingButtons = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonBase =
    "relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl text-white transition-all duration-300";

  return (
    <>
      {/* Floating Buttons Layer */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* WhatsApp + Enquiry Buttons (bottom right corner) */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-4 pointer-events-auto">
          {/* WhatsApp (pulsating ring) */}
          <motion.a
            href="https://wa.me/918093011746"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 group-hover:animate-ping"></span>
            <span
              className={`${buttonBase} bg-emerald-500 hover:bg-emerald-600`}
            >
              <Phone size={24} />
            </span>
          </motion.a>

          {/* Enquiry */}
          <motion.button
            onClick={() => setShowEnquiry(true)}
            className={`${buttonBase} bg-gradient-to-r from-yellow-400 to-yellow-600`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
          </motion.button>
        </div>

        {/* Scroll-to-top button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white shadow-lg pointer-events-auto"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    
    {/* This is where your custom modal is now placed */}
    <EnquiryFormModal 
      isOpen={showEnquiry} 
      onClose={() => setShowEnquiry(false)} 
    />
    </>
  );
};

export default FloatingButtons;
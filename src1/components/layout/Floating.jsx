// src/components/FloatingButtons.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonBase =
    "relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl text-white transition-all duration-300";

  return (
    <>
      {/* WhatsApp + Enquiry (bottom right corner) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp (pulsating ring) */}
        <div className="relative group">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
          <motion.a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-emerald-500 hover:bg-emerald-600`}
            whileHover={{ scale: 1.1 }}
          >
            <MessageCircle size={26} />
          </motion.a>
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Chat on WhatsApp
          </span>
        </div>

        {/* Enquiry (heartbeat animation) */}
        <div className="relative group">
          <motion.button
            onClick={() => setShowEnquiry(true)}
            className={`${buttonBase} bg-yellow-500 hover:bg-yellow-600`}
            animate={{
              scale: [1, 1.15, 1], // beating effect
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <Phone size={26} />
          </motion.button>
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Send Enquiry
          </span>
        </div>
      </div>

      {/* Scroll to Top (bottom left side, visible only after scroll) */}
      {showScroll && (
        <div className="relative group">
          <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-6 left-6 ${buttonBase} bg-blue-600 hover:bg-blue-700`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUp size={26} />
          </motion.button>
          {/* Tooltip */}
          <span className="absolute left-20 bottom-10 px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Back to Top
          </span>
        </div>
      )}

      {/* Enquiry Drawer (bottom side with backdrop) */}
      <AnimatePresence>
        {showEnquiry && (
          <>
            {/* Dark backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEnquiry(false)}
            ></motion.div>

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed bottom-0 left-0 w-full bg-white shadow-2xl rounded-t-2xl p-6 z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Send an Enquiry ✨
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-800 text-lg"
                  onClick={() => setShowEnquiry(false)}
                >
                  ✕
                </button>
              </div>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-lg py-3 hover:shadow-md"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;

"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, Sun, Moon } from "lucide-react";
import FAQ from '../ui/FaqSection';
import StillQuestionsSection from '../ui/StillHaveQuestion'

/**
 * A simple theme changer button that toggles between light and dark themes.
 * @param {object} props - The component props.
 * @param {string} props.theme - The current theme ('light' or 'dark').
 * @param {Function} props.toggleTheme - The function to toggle the theme.
 */
const ThemeChanger = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-3 rounded-full shadow-lg transition-transform duration-300"
  >
    {theme === "dark" ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-900" />}
  </button>
);


/**
 * Hero section for the contact page, featuring a background image, animated text, and theme toggle.
 */
const HeroContact = React.memo(({ theme, colors, toggleTheme }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden text-center transition-colors duration-500 ${colors.bg} py-16`}
    >
      <motion.div
        className="relative z-20 px-4 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={textVariants}
          className={`text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent ${
            theme === "light"
              ? "bg-gradient-to-r from-yellow-600 to-orange-700"
              : "bg-gradient-to-r from-yellow-400 to-orange-500"
          }`}
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={textVariants}
          className={`text-lg max-w-2xl mx-auto font-medium ${colors.secondaryText}`}
        >
          Your journey to the perfect look starts here. We’re ready to answer
          your questions.
        </motion.p>

        <motion.div
          variants={textVariants}
          className="mt-6 flex justify-center"
        >
          <ThemeChanger theme={theme} toggleTheme={toggleTheme} />
        </motion.div>
      </motion.div>
    </section>
  );
});

// Moved variants outside the component to prevent re-creation on every render
const reachOutSectionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const reachOutItemVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Reach Out Section (contact details + map).
 */
const ReachOutSection = React.memo(({ colors }) => {
  return (
    <motion.section
      className={`relative py-20 px-4 md:px-6 bg-gray-50 text-gray-900`}
      initial={{ opacity: 0, y: 50 }}
      animate="visible"
      variants={reachOutSectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          className={`p-8 shadow-lg bg-white`}
          style={{ border: `1px solid #e5e7eb`, borderRadius: 0 }}
        >
          <motion.h2
            variants={reachOutItemVariants}
            className={`text-3xl font-bold mb-4 text-gray-900`}
          >
            Reach Out, We're Here!
          </motion.h2>
          <motion.p
            variants={reachOutItemVariants}
            className={`text-gray-600 mb-8`}
          >
            We're dedicated to serving you across the city. Discover our
            locations below or send us a quick inquiry!
          </motion.p>

          <motion.div variants={reachOutItemVariants} className="mb-6 space-y-4">
            <div className="flex items-start text-sm">
              <MapPin
                size={20}
                className={`text-yellow-600 mr-3`}
              />
              <div>
                <p className={`text-gray-900 font-semibold`}>
                  Allex Gents Parlour
                </p>
                <p className={`text-gray-600`}>
                  751015, N3 Block, IRC Village, Bhubaneswar, Odisha
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <Phone
                size={20}
                className={`text-yellow-600 mr-3`}
              />
              <a
                href="tel:+919876543210"
                className={`text-gray-900 hover:underline`}
              >
                +91 98765 43210
              </a>
              ,
              <a
                href="tel:+919123456789"
                className={`text-gray-900 ml-1 hover:underline`}
              >
                +91 91234 56789
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Mail
                size={20}
                className={`text-yellow-600 mr-3`}
              />
              <a
                href="mailto:allexparlour@gmail.com"
                className={`text-gray-900 hover:underline`}
              >
                allexparlour@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.h3
            variants={reachOutItemVariants}
            className={`text-xl font-bold mb-4 text-gray-900`}
          >
            Contact Us
          </motion.h3>
          <form className="space-y-4">
            <motion.div variants={reachOutItemVariants}>
              <input
                type="text"
                placeholder="Your Full Name"
                className={`w-full p-3 border bg-white border-gray-300 text-gray-900`}
                style={{ borderRadius: 0 }}
              />
            </motion.div>
            <motion.div variants={reachOutItemVariants}>
              <input
                type="email"
                placeholder="Your Email Address"
                className={`w-full p-3 border bg-white border-gray-300 text-gray-900`}
                style={{ borderRadius: 0 }}
              />
            </motion.div>
            <motion.div variants={reachOutItemVariants}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className={`w-full p-3 border bg-white border-gray-300 text-gray-900`}
                style={{ borderRadius: 0 }}
                required
              />
            </motion.div>
            <motion.div variants={reachOutItemVariants}>
              <textarea name="message" placeholder="Your Message / Inquiry" 
                className={`w-full p-3 border bg-white border-gray-300 text-gray-900`}
                style={{ borderRadius: 0 }}
                required
              />
            </motion.div>
            
            <motion.button
              variants={reachOutItemVariants}
              type="submit"
              className={`w-full py-3 font-semibold text-white bg-green-600 hover:bg-green-700`}
              style={{ borderRadius: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Inquiry via WhatsApp
            </motion.button>
          </form>
        </div>

        {/* Map */}
        <div
          className={`p-0 overflow-hidden shadow-lg flex flex-col`}
          style={{ border: `1px solid #e5e7eb`, borderRadius: 0 }}
        >
          <div
            className={`py-8 px-8 bg-gradient-to-r from-yellow-500 to-orange-600 text-center`}
          >
            <motion.h2
              variants={reachOutItemVariants}
              className={`text-3xl font-bold mb-2 text-white`}
            >
              Locate Us Easily
            </motion.h2>
            <motion.p
              variants={reachOutItemVariants}
              className={`text-sm text-gray-200`}
            >
              We're available throughout your city. Find our nearest hub or
              office on the map below and reach out to us anytime!
            </motion.p>
          </div>

          {/* Map with tooltip overlay */}
          <motion.div
            variants={reachOutItemVariants}
            className="relative w-full flex-grow"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1473.3381828647258!2d85.81389059694043!3d20.28485403221552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093b2afdbf1d%3A0xdad1afbbb42c1f7!2sAllex%20Gents%20Parlour!5e0!3m2!1sen!2sin!4v1693526437421!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            {/* Custom Tooltip */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-3 shadow-lg border border-gray-300">
              <p className="text-sm font-bold text-gray-900">
                Allex Gents Parlour
              </p>
              <p className="text-xs text-gray-600">
                751015, N3 Block, IRC Village
              </p>
              <p className="text-xs text-gray-600">Bhubaneswar, Odisha</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

/**
 * Main Contact Page
 */
const ContactPage = () => {
  const [theme, setTheme] = useState("dark");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const colorsForPage = useMemo(() =>
    theme === "dark"
      ? {
          bg: "bg-[#0c1824]",
          text: "text-gray-200",
          secondaryText: "text-gray-400",
          primaryAccent: "text-amber-400",
          accentButton: "bg-amber-500 text-white hover:bg-amber-600",
        }
      : {
          bg: "bg-gray-50",
          text: "text-gray-900",
          secondaryText: "text-gray-600",
          primaryAccent: "text-yellow-600",
          accentButton: "bg-yellow-500 text-white hover:bg-yellow-600",
        },
    [theme]
  );

  return (
    <div
      className={`min-h-screen ${colorsForPage.bg} ${colorsForPage.text} transition-colors duration-500 relative`}
    >
      <HeroContact
        theme={theme}
        colors={colorsForPage}
        toggleTheme={toggleTheme}
      />
      <ReachOutSection colors={colorsForPage} />

      <StillQuestionsSection />
      <FAQ />
    </div>
  );
};

export default ContactPage;
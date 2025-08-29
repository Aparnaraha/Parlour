import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../img/allex_logo.png"; // ← update if needed

const GRADIENT = "linear-gradient(90deg, #4a90e2 0%, #7c4dff 100%)";

const NavigationBar = ({ handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Home active by default
  const buttonControls = useAnimation();

  // Sticky shrink on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CTA glow
  useEffect(() => {
    buttonControls.start({
      boxShadow: [
        "0 0 5px rgba(74, 144, 226, 0.4)",
        "0 0 15px rgba(74, 144, 226, 0.8)",
        "0 0 5px rgba(74, 144, 226, 0.4)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    });
  }, [buttonControls]);

  const handleCtaClick = useCallback(() => {
    buttonControls
      .start({ scale: 0.9, transition: { duration: 0.1, ease: "easeIn" } })
      .then(() => buttonControls.start({ scale: 1, transition: { duration: 0.2, ease: "easeOut" } }));
    handleNavClick("Book Now");
  }, [buttonControls, handleNavClick]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  // Single source of truth for a nav link (active + hover gradient text + underline)
  const NavLink = ({ link }) => {
    const isActive = activeLink === link.id;

    return (
      <a
        href="#"
        onClick={() => {
          handleNavClick(link.name);
          setActiveLink(link.id);
        }}
        className="relative group inline-flex items-center pb-1.5 font-medium cursor-pointer transition-all duration-300"
      >
        {/* text */}
        <span
          className={`transition-all duration-300 ${
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-800 group-hover:text-blue-500"
          }`}
        >
          {link.name}
        </span>

        {/* underline - only visible on hover or when active */}
        <span
          className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full transform origin-left transition-transform duration-300 ${
            isActive 
              ? "scale-x-100 bg-blue-600" 
              : "scale-x-0 group-hover:scale-x-100 bg-blue-500"
          }`}
        />
      </a>
    );
  };

  const CtaButton = () => (
    <motion.a
      href="#"
      onClick={handleCtaClick}
      className="hidden lg:flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg text-white"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 144, 226, 0.8)" }}
      whileTap={{ scale: 0.95 }}
      style={{ background: GRADIENT }}
      animate={buttonControls}
    >
      Book Now
      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </motion.a>
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 w-full z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* logo (increased size) */}
          <a
            href="#"
            onClick={() => {
              handleNavClick("Home");
              setActiveLink("home");
            }}
            className="flex items-center"
          >
            <motion.img 
              src={Logo} 
              alt="ALLEX Logo" 
              className="h-16 w-auto" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </a>

          {/* desktop nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <NavLink key={link.id} link={link} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <CtaButton />

          {/* mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden px-2 pt-2 pb-4 space-y-1 bg-white shadow-md"
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.id}
                href="#"
                onClick={() => {
                  handleNavClick(link.name);
                  setActiveLink(link.id);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                <span
                  className={`${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"} relative group`}
                >
                  {link.name}
                  {/* Mobile underline effect */}
                  <span className={`absolute left-0 -bottom-1 h-0.5 w-0 rounded-full transition-all duration-300 ${isActive ? "w-full bg-blue-600" : "group-hover:w-full bg-blue-500"}`} />
                </span>
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavigationBar;
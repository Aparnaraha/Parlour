import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/allex_logo.png"; // Update if needed

// Color Palette
const GRADIENT = "linear-gradient(90deg, #2c3e50 0%, #3498db 100%)";
const TEXT_COLOR = "text-gray-900";
const HOVER_TEXT_COLOR = "text-gray-800";

const NavigationBar = ({ handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonControls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    buttonControls.start({
      boxShadow: [
        `0 0 5px rgba(52, 152, 219, 0.4)`,
        `0 0 15px rgba(52, 152, 219, 0.8)`,
        `0 0 5px rgba(52, 152, 219, 0.4)`,
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
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const NavLink = ({ link, isActive, onHoverStart, onHoverEnd }) => (
    <Link
      to={link.path}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`relative inline-flex items-center pb-1.5 font-medium cursor-pointer transition-all duration-300 ${isActive ? HOVER_TEXT_COLOR : TEXT_COLOR}`}
    >
      <motion.span>{link.name}</motion.span>
    </Link>
  );

  const CtaButton = () => (
    <motion.a
      href="#"
      onClick={handleCtaClick}
      className={`hidden lg:flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg text-white`}
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(52, 152, 219, 0.8)` }}
      whileTap={{ scale: 0.95 }}
      style={{ background: GRADIENT }}
      animate={buttonControls}
    >
      Book Now
      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </motion.a>
  );

  const [hoveredLink, setHoveredLink] = useState(null);

  const activeLink = navLinks.find(link => location.pathname === link.path);
  const activeHoverLink = hoveredLink ? hoveredLink : activeLink;

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 w-full z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.img
              src={Logo}
              alt="ALLEX Logo"
              className={`h-14 w-auto`}
              animate={{ height: isScrolled ? '3rem' : '3.5rem' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center items-center">
            <AnimatePresence>
              <div
                className="flex gap-10" // Kept gap-10 but removed mx-auto
                onMouseLeave={() => setHoveredLink(null)}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    link={link}
                    isActive={activeLink?.path === link.path}
                    onHoverStart={() => setHoveredLink(link)}
                    onHoverEnd={() => setHoveredLink(null)}
                  />
                ))}
                
                {activeHoverLink && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 rounded-full"
                    style={{
                      backgroundImage: GRADIENT,
                      width: `calc(100% / ${navLinks.length})`,
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </AnimatePresence>
          </div>
          
          <CtaButton />

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className={`p-2 ${TEXT_COLOR} hover:${HOVER_TEXT_COLOR} focus:outline-none rounded-md`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.svg
                  key={isMenuOpen ? "close" : "open"}
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ rotate: isMenuOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isMenuOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </motion.svg>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden px-2 pt-2 pb-4 space-y-1 shadow-md"
            style={{ backgroundColor: 'white' }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? HOVER_TEXT_COLOR : TEXT_COLOR}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;
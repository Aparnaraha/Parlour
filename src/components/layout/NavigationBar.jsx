import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Brush,
  Image,
  Gift,
  Calendar,
  ChevronDown,
} from "lucide-react";

const NavigationBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset dropdown/mobile when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileOpen(false);
  }, [location]);

  const isActive = (path) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Hair", path: "/services/hair", icon: <Scissors size={18} /> },
        { name: "Skin", path: "/services/skin", icon: <Sparkles size={18} /> },
        { name: "Makeup", path: "/services/makeup", icon: <Brush size={18} /> },
      ],
    },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Team", path: "/team" },
    {
      name: "Media",
      path: "/media",
      dropdown: [
        { name: "Gallery", path: "/media/gallery", icon: <Image size={18} /> },
        { name: "Offers", path: "/media/offers", icon: <Gift size={18} /> },
        { name: "Events", path: "/media/events", icon: <Calendar size={18} /> },
      ],
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-black shadow-xl backdrop-blur-md border-b border-gray-800"
            : "py-4 bg-black/90 backdrop-blur-md border-b border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-md relative">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
                alt="Allex Gents"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 -left-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-shine" />
              <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-amber-500 transition-all" />
            </div>
            <div className="ml-4 text-white leading-tight">
              <h1 className="text-lg font-bold">ALLEX GENTS</h1>
              <span className="text-xs text-amber-400 tracking-wider">PARLOUR</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 text-sm uppercase tracking-wide font-medium relative transition-all duration-300 ${
                    isActive(item.path) ? "text-amber-400" : "text-white hover:text-amber-400"
                  }`}
                >
                  {item.name}
                  {/* Dropdown arrow if dropdown exists */}
                  {item.dropdown && (
                    <motion.span
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                        y: activeDropdown === item.name ? 2 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="ml-1 text-amber-400"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-44 bg-black/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center px-4 py-2 text-sm text-white hover:text-amber-400 transition-all"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          <span className="mr-2 text-amber-400">{subItem.icon}</span>
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Hamburger */}
          <Link to="/book-now" onClick={() => setIsMobileOpen(false)}>
            <motion.button
              className="relative px-6 py-2 bg-amber-600 text-white font-bold rounded-full shadow-lg transition-all duration-500 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(245, 158, 11, 0.7)",
                  "0 0 0 10px rgba(245, 158, 11, 0)",
                  "0 0 0 0 rgba(245, 158, 11, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-sm flex items-center">Book Now</span>
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur px-6 pt-24 pb-10 z-40 overflow-y-auto md:hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <div key={item.name} className="mb-4 border-b border-gray-700 pb-3">
                <button
                  className="w-full text-left text-white text-lg flex justify-between items-center"
                  onClick={() =>
                    item.dropdown ? toggleDropdown(item.name) : setIsMobileOpen(false)
                  }
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <motion.span
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                        y: activeDropdown === item.name ? 2 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="ml-2 text-amber-400"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  )}
                </button>
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center text-sm text-white hover:text-amber-300 transition-all"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          <span className="mr-2 text-amber-400">{subItem.icon}</span>
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Padding for fixed navbar */}
      <div className="pt-[72px]" />

      <style jsx="true">{`
        @keyframes shine {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }
        .animate-shine {
          animation: shine 1.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default NavigationBar;

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Import your logo image
import Logo from "../../img/allex_logo.png";

// =========================================================================
// SVG Icons for the Dropdown Subheaders (inline for simplicity)
// =========================================================================

const HairIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 8c0 1.93-1.57 3.5-3.5 3.5S7 9.93 7 8s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s-8-4-8-12c0-3 2-6 5-6s5 3 5 6c0 8-8 12-8 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10h-2M22 10h-2M20 8v4" />
    </svg>
);

const SkinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 21v-2a4 4 0 00-4-4H6a4 4 0 01-4-4V6a4 4 0 014-4h2a4 4 0 014 4v2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MakeupIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3" />
    </svg>
);

const ChevronDown = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// =========================================================================
// Styling and Animation Variants
// =========================================================================

const GRADIENT = "linear-gradient(to right, #2c3e50 0%, #3498db 100%)";
const TEXT_COLOR = "text-gray-600";
const HOVER_GRADIENT_TEXT = "group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-gray-600 group-hover:text-transparent group-hover:bg-clip-text";

// Framer Motion Variants for Premium Dropdown Animation
const menuVariants = {
    closed: {
        opacity: 0,
        y: -10,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: 0.2,
        },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.07,
            duration: 0.3,
        },
    },
};

const itemVariants = {
    closed: {
        y: -10,
        opacity: 0,
    },
    open: {
        y: 0,
        opacity: 1,
    },
};

// =========================================================================
// Main NavigationBar Component
// =========================================================================

const NavigationBar = ({ handleNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const buttonControls = useAnimation();
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
    ];

    const serviceSubLinks = [
        { name: "Hair", path: "/services/hair", icon: HairIcon },
        { name: "Skin", path: "/services/skin", icon: SkinIcon },
        { name: "Makeup", path: "/services/makeup", icon: MakeupIcon },
    ];
    
    // Custom logic to insert "Services" at the correct position
    const mainNavLinks = [...navLinks];
    mainNavLinks.splice(1, 0, { name: "Services", isDropdown: true });

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        buttonControls.start({
            boxShadow: [
                "0 0 5px rgba(74, 144, 226, 0.4)",
                "0 0 15px rgba(74, 144, 226, 0.8)",
                "0 0 5px rgba(74, 144, 226, 0.4)"
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

    const CtaButton = () => (
        <motion.a
            href="#"
            onClick={handleCtaClick}
            className={`hidden lg:flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg text-white`}
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px rgba(74, 144, 226, 0.8)` }}
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
                        <motion.div
                            animate={{ height: isScrolled ? '3.5rem' : '4.5rem' }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={Logo}
                                alt="Allex Gents Parlour Logo"
                                className="h-16 w-auto transition-transform duration-300"
                            />
                        </motion.div>
                    </Link>

                    <div className="hidden lg:flex flex-1 justify-center items-center">
                        <div className="relative flex gap-10">
                            {mainNavLinks.map((link) => {
                                if (link.isDropdown) {
                                    return (
                                        <div
                                            key="services-dropdown"
                                            className="relative group"
                                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                        >
                                            <Link
                                                to="/services"
                                                className={`relative inline-flex items-center pb-1.5 font-medium cursor-pointer transition-all duration-300 ${
                                                    location.pathname.startsWith('/services') ? "text-[#4a90e2]" : TEXT_COLOR
                                                }`}
                                            >
                                                <motion.span
                                                    className={`relative z-10 flex items-center ${HOVER_GRADIENT_TEXT}`}
                                                    whileHover={{ y: -3 }}
                                                >
                                                    Services
                                                    <motion.div
                                                        initial={false}
                                                        animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="ml-1"
                                                    >
                                                        <ChevronDown className="h-4 w-4" />
                                                    </motion.div>
                                                </motion.span>
                                                <span
                                                    className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                                    style={{ background: GRADIENT }}
                                                ></span>
                                            </Link>
                                            <AnimatePresence>
                                                {isServicesDropdownOpen && (
                                                    <motion.div
                                                        initial="closed"
                                                        animate="open"
                                                        exit="closed"
                                                        variants={menuVariants}
                                                        style={{ originY: 0 }}
                                                        className="absolute left-1/2 -translate-x-1/2 mt-2 py-2 w-48 bg-white rounded-lg shadow-2xl z-20 border border-gray-100 overflow-hidden"
                                                    >
                                                        {serviceSubLinks.map((subLink) => (
                                                            <motion.div key={subLink.path} variants={itemVariants}>
                                                                <Link
                                                                    to={subLink.path}
                                                                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200 group"
                                                                    onClick={() => setIsServicesDropdownOpen(false)}
                                                                >
                                                                    <subLink.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                                                                    <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-gray-600 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200">
                                                                        {subLink.name}
                                                                    </span>
                                                                </Link>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative group inline-flex items-center pb-1.5 font-medium cursor-pointer transition-all duration-300 ${
                                            isActive ? "text-[#4a90e2]" : TEXT_COLOR
                                        }`}
                                    >
                                        <motion.span
                                            className={`relative z-10 ${HOVER_GRADIENT_TEXT}`}
                                            whileHover={{ y: -3 }}
                                        >
                                            {link.name}
                                        </motion.span>
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                            style={{ background: GRADIENT }}
                                        ></span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <CtaButton />

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen((v) => !v)}
                            className={`p-2 ${TEXT_COLOR} hover:text-gray-900 focus:outline-none rounded-md`}
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
                        {/* Mobile Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsServicesDropdownOpen(v => !v)}
                                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                                    location.pathname.startsWith('/services') ? "text-[#4a90e2]" : TEXT_COLOR
                                }`}
                            >
                                <span>Services</span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {isServicesDropdownOpen && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={menuVariants}
                                        style={{ originY: 0 }}
                                        className="pl-6 pt-1 space-y-1 overflow-hidden"
                                    >
                                        {serviceSubLinks.map((subLink) => (
                                            <motion.div key={subLink.path} variants={itemVariants}>
                                                <Link
                                                    to={subLink.path}
                                                    onClick={() => { setIsMenuOpen(false); setIsServicesDropdownOpen(false); }}
                                                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
                                                >
                                                    <subLink.icon className="h-5 w-5 text-gray-400" />
                                                    <span>{subLink.name}</span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-[#4a90e2]" : TEXT_COLOR}`}
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
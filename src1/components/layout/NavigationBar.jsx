"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Import your logo image
import Logo from "../../img/logo1.png";

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

// New color scheme to match the header
const GRADIENT = "linear-gradient(90deg, #FF9800 0%, #FFD700 100%)";
const BACKGROUND_COLOR = "#050506ff";
const NAVBAR_SCROLLED_BG = "rgba(5, 5, 6, 0.4)"; // Semi-transparent color for glassmorphism
const TEXT_COLOR = "text-[#e0e0e0]";
const HOVER_GRADIENT_TEXT = "group-hover:bg-gradient-to-r group-hover:from-[#FF9800] group-hover:to-[#FFD700] group-hover:text-transparent group-hover:bg-clip-text";

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
// Enquiry Form Modal Component
// =========================================================================

const serviceOptions = [
    { value: 'hair', label: 'Hair' },
    { value: 'skin', label: 'Skin' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'general', label: 'General Enquiry' },
];

const EnquiryFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        setFormData({ name: '', phone: '', service: '', message: '' });
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, service, message } = formData;
        
        // **IMPORTANT:** Replace the phone number below with your actual WhatsApp number,
        // including the country code without any '+' or '00' prefixes.
        const whatsappNumber = "919329182237"; 

        const preFilledMessage = `Hello, I would like to make an enquiry.\n\nName: ${name}\nPhone: ${phone}\nService: ${serviceOptions.find(opt => opt.value === service)?.label || 'Not specified'}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        handleClose(); // Close the modal after sending
    };

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black bg-opacity-70 backdrop-blur-sm overflow-y-auto"
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="bg-[#1d212a] p-8 rounded-lg shadow-2xl max-w-md w-full border border-gray-700 relative"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#FF9800] to-[#FFD700] text-transparent bg-clip-text">Make an Enquiry</h2>
                <p className="text-[#e0e0e0] mb-6 text-sm">Fill out the form below and we'll connect with you on WhatsApp.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-400">Interested Service</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                            required
                        >
                            <option value="" disabled>Select a service</option>
                            {serviceOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#1d212a] bg-[#FFD700] hover:bg-[#FF9800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] transition-colors"
                        style={{ background: GRADIENT, color: '#1d212a' }}
                    >
                        Send Enquiry via WhatsApp
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

// =========================================================================
// Main NavigationBar Component
// =========================================================================

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                "0 0 5px rgba(255, 152, 0, 0.4)",
                "0 0 15px rgba(255, 215, 0, 0.8)",
                "0 0 5px rgba(255, 152, 0, 0.4)"
            ],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        });
    }, [buttonControls]);

    const handleEnquiryClick = useCallback(() => {
        buttonControls
            .start({ scale: 0.9, transition: { duration: 0.1, ease: "easeIn" } })
            .then(() => buttonControls.start({ scale: 1, transition: { duration: 0.2, ease: "easeOut" } }));
        setIsModalOpen(true);
    }, [buttonControls]);

    const CtaButton = () => (
        <motion.button
            onClick={handleEnquiryClick}
            className={`cta-btn hidden lg:flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg text-white`}
            whileHover={{ scale: 1.05, background: GRADIENT, color: '#1d212a' }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: BACKGROUND_COLOR }}
            animate={buttonControls}
        >
            Enquire Now
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
        </motion.button>
    );

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "py-2 shadow-lg backdrop-blur-sm border-b border-gray-700" : "py-4"
            }`}
            style={{
                backgroundColor: isScrolled ? NAVBAR_SCROLLED_BG : BACKGROUND_COLOR,
            }}
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
                                                    location.pathname.startsWith('/services') ? "text-[#FFD700]" : TEXT_COLOR
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
                                                        className="absolute left-1/2 -translate-x-1/2 mt-2 py-2 w-48 bg-[#2a303d] rounded-lg shadow-2xl z-20 border border-gray-700 overflow-hidden"
                                                    >
                                                        {serviceSubLinks.map((subLink) => (
                                                            <motion.div key={subLink.path} variants={itemVariants}>
                                                                <Link
                                                                    to={subLink.path}
                                                                    className="flex items-center space-x-2 px-4 py-2 text-sm text-[#e0e0e0] hover:bg-gray-700 transition-all duration-200 group"
                                                                    onClick={() => setIsServicesDropdownOpen(false)}
                                                                >
                                                                    <subLink.icon className="h-5 w-5 text-gray-400 group-hover:bg-gradient-to-r group-hover:from-[#FF9800] group-hover:to-[#FFD700] group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-200" />
                                                                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#FF9800] group-hover:to-[#FFD700] group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200">
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
                                            isActive ? "text-[#FFD700]" : TEXT_COLOR
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
                            className={`p-2 ${TEXT_COLOR} hover:text-[#FFD700] focus:outline-none rounded-md`}
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
                        style={{ backgroundColor: BACKGROUND_COLOR }}
                    >
                        {/* Mobile Enquiry Button */}
                        <div className="py-2">
                            <motion.button
                                onClick={() => { setIsMenuOpen(false); handleEnquiryClick(); }}
                                className={`w-full text-center px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg text-white`}
                                whileHover={{ scale: 1.05, background: GRADIENT, color: '#1d212a' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ backgroundColor: BACKGROUND_COLOR }}
                            >
                                Enquire Now
                            </motion.button>
                        </div>
                        {/* Mobile Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsServicesDropdownOpen(v => !v)}
                                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                                    location.pathname.startsWith('/services') ? "text-[#FFD700]" : TEXT_COLOR
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
                                                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-[#e0e0e0] hover:text-[#FFD700] transition-colors duration-200"
                                                >
                                                    <subLink.icon className="h-5 w-5 text-gray-400 group-hover:bg-gradient-to-r group-hover:from-[#FF9800] group-hover:to-[#FFD700] group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-200" />
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
                                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-[#FFD700]" : TEXT_COLOR}`}
                                                >
                                                    {link.name}
                                                </Link>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <EnquiryFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                            <style jsx="true">{`
                                .cta-btn {
                                    position: relative;
                                    z-index: 1;
                                }
                                .cta-btn::before {
                                    content: '';
                                    position: absolute;
                                    inset: 0;
                                    z-index: -1;
                                    border-radius: 9999px;
                                    padding: 2px;
                                    background: ${GRADIENT};
                                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                                    -webkit-mask-composite: xor;
                                    mask-composite: exclude;
                                }
                                .cta-btn:hover::before {
                                    background: none;
                                }
                            `}</style>
                        </motion.nav>
                    );
                };
                
                export default NavigationBar;
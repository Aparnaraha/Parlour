"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const TopHeader = () => {
    // A refined color palette based on your design
    const colors = {
        primaryBg: '#2c0b70', // The deep indigo for the main navbar below
        secondaryBg: '#120b2f', // The very dark background for this top header
        textLight: '#e0e0e0', // Light text for readability on dark backgrounds
        accentMagenta: '#5a30e8', // The vibrant purple from your brand
        accentLime: '#007bff', // The accent blue from your brand
    };

    const socialLinks = [
        { icon: <Facebook size={14} />, url: '#' },
        { icon: <Instagram size={14} />, url: '#' },
        { icon: <Twitter size={14} />, url: '#' },
        { icon: <Youtube size={14} />, url: '#' },
    ];

    const contactInfo = [
        { icon: <Phone size={14} />, text: '+91 8093011746' },
        { icon: <Mail size={14} />, text: 'allex_parlour@gmail.com' },
        { icon: <MapPin size={14} />, text: 'PLOT NO-18, NUAGAON, Bhubaneswar, Odisha, 751002' },
    ];

    // Animation variants for the main header container
    const headerVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Container variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    // Variants for individual items
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Variants for social icons (animating from the right)
    const socialVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.header
            className="relative py-1 px-4 md:px-6 z-50 overflow-hidden background-pulse-animation"
            style={{ backgroundColor: colors.secondaryBg }}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: colors.textLight }}>

                {/* Contact Information */}
                <motion.div
                    className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 group cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <motion.div
                                className="p-2 rounded-full transition-all duration-300 group-hover:shadow-lg"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: colors.textLight
                                }}
                                whileHover={{
                                    backgroundColor: colors.accentMagenta,
                                    color: 'white',
                                    boxShadow: `0 0 10px 2px ${colors.accentMagenta}`
                                }}
                            >
                                {item.icon}
                            </motion.div>
                            <span className="truncate">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    className="flex items-center gap-4 mt-2 md:mt-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            aria-label={`Visit us on ${social.url}`}
                            className="transition-transform duration-300 ease-in-out"
                            style={{ color: colors.textLight }}
                            variants={socialVariants}
                            whileHover={{
                                scale: 1.2,
                                color: colors.accentLime,
                                filter: `drop-shadow(0 0 8px ${colors.accentLime})`
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
            <style jsx="true">{`
                .background-pulse-animation {
                    animation: color-pulse 10s infinite ease-in-out;
                }
                @keyframes color-pulse {
                    0%, 100% { background-color: ${colors.secondaryBg}; }
                    50% { background-color: ${colors.primaryBg}; }
                }
            `}</style>
        </motion.header>
    );
};

export default TopHeader;
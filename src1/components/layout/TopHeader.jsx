"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Star,
} from "lucide-react";

const TopHeader = () => {
  const colors = {
    primaryText: "#1e4598",
    accentGold: "#FFD700",
    accentOrange: "#FF9800",
  };

  const socialLinks = [
    { icon: <Facebook size={14} />, url: "#" },
    { icon: <Instagram size={14} />, url: "#" },
    { icon: <Twitter size={14} />, url: "#" },
    { icon: <Youtube size={14} />, url: "#" },
  ];

  const contactInfo = [
    { icon: <Phone size={14} />, text: "+91 8093011746" },
    { icon: <Mail size={14} />, text: "allex_parlour@gmail.com" },
    {
      icon: <MapPin size={14} />,
      text: "PLOT NO-18, NUAGAON, Bhubaneswar, Odisha, 751002",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contactInfo.length);
    }, 1550);
    return () => clearInterval(interval);
  }, [contactInfo.length]);

  // Screen size detection for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
    exit: { opacity: 0, y: 5, transition: { duration: 0.05 } },
  };

  return (
    <motion.header
      className="relative py-1 px-4 md:px-6 z-50 overflow-hidden"
      style={{
        background: `linear-gradient(90deg, ${colors.accentOrange} 0%, ${colors.accentGold} 100%)`,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-sm"
        style={{ color: colors.primaryText }}
      >
        {/* Desktop: show all contact info */}
        <div className="hidden md:flex flex-wrap items-center gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                className="p-2 rounded-full transition-all duration-300 group-hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: colors.primaryText,
                }}
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.1)",
                  boxShadow: `0 0 10px 2px ${colors.primaryText}`,
                }}
              >
                {item.icon}
              </motion.div>
              <span className="truncate">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: show only one contact item at a time */}
        <div className="flex md:hidden items-center gap-2 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <div
                className="p-1 rounded-full"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: colors.primaryText,
                }}
              >
                {contactInfo[currentIndex].icon}
              </div>
              <span className="truncate text-xs">
                {contactInfo[currentIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Social Icons + Google Review (visible on all screens) */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="transition-transform duration-300"
              style={{ color: colors.primaryText }}
              whileHover={{
                scale: 1.2,
                color: "white",
                filter: `drop-shadow(0 0 8px white)`,
              }}
            >
              {social.icon}
            </motion.a>
          ))}

          <motion.a
            href="https://share.google/b2DNrn74ijLl5B6gc"
            className="flex items-center gap-1 px-2 py-1 rounded-full font-semibold text-xs transition-all duration-300"
            style={{
              backgroundColor: colors.primaryText,
              color: colors.accentGold,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "black",
              color: colors.accentGold,
            }}
          >
            {isMobile ? (
              <Star size={14} fill={colors.accentGold} />
            ) : (
              [...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={colors.accentGold} />
              ))
            )}
            <span>Review</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default TopHeader;
"use client";

import React, { useRef, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Scissors, UserRound, Fan, Gem, Heart
} from 'lucide-react';

const AnimatedCounter = ({ from, to, suffix, isInView }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          node.textContent = Math.floor(latest);
        },
      });
    }
  }, [isInView, from, to]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="text-4xl md:text-5xl font-extrabold flex items-baseline">
        <span ref={nodeRef} className="text-yellow-500">{Math.floor(from)}</span>
        <span className="text-xl md:text-2xl font-normal ml-1 text-white">{suffix}</span>
      </div>
    </div>
  );
};

const About = () => {
  // Use a single ref for the main container
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const featureCards = [
    {
      icon: <UserRound className="w-10 h-10 text-[#FFD700] mb-4" />,
      title: "Industry Experts",
      description: "Our barbers and stylists bring **over 10+ years** of **precision grooming** expertise to every client.",
      lineGradient: "bg-gradient-to-r from-[#FFD700] to-[#B8860B]",
      hoverColor: "hover:border-yellow-500",
      boxShadowColor: "rgba(255, 215, 0, 0.6)",
      defaultShadow: "shadow-xl",
    },
    {
      icon: <Fan className="w-10 h-10 text-[#50E3C2] mb-4" />,
      title: "Signature Services",
      description: "Tailored **grooming experiences** crafted exclusively for the **modern gentleman**.",
      lineGradient: "bg-gradient-to-r from-[#50E3C2] to-[#25A684]",
      hoverColor: "hover:border-[#50E3C2]",
      boxShadowColor: "rgba(80, 227, 194, 0.6)",
      defaultShadow: "shadow-2xl",
    },
    {
      icon: <Gem className="w-10 h-10 text-[#7ED321] mb-4" />,
      title: "Premium Products",
      description: "We trust only **world-class, skin-safe products** for an unmatched result.",
      lineGradient: "bg-gradient-to-r from-[#7ED321] to-[#4A90E2]",
      hoverColor: "hover:border-[#7ED321]",
      boxShadowColor: "rgba(126, 211, 33, 0.6)",
      defaultShadow: "shadow-xl",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#F5A623] mb-4" />,
      title: "Dedicated Care",
      description: "Our staff ensures **personalized attention** and a truly **royal grooming journey**.",
      lineGradient: "bg-gradient-to-r from-[#F5A623] to-[#E94E51]",
      hoverColor: "hover:border-[#F5A623]",
      boxShadowColor: "rgba(245, 166, 35, 0.6)",
      defaultShadow: "shadow-2xl",
    },
  ];

  const metrics = [
    { count: 10000, label: "Clients Served", suffix: "+"},
    { count: 99, label: "Satisfaction Rate", suffix: "%"},
    { count: 50, label: "Award-Winning Styles", suffix: "+"},
    { count: 15, label: "Years in Business", suffix: "+"},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      ref={containerRef}
      className="bg-white min-h-screen flex flex-col items-center py-16 px-6 lg:px-12 font-sans overflow-hidden"
    >
      {/* Heading Section with Animations */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 mb-5 border border-gray-300 rounded-full text-[#333] font-semibold text-sm">
          <Scissors className="w-4 h-4 mr-2 text-yellow-500" /> About Allex
        </motion.div>
        <motion.h1 className="text-3xl md:text-4xl font-extrabold text-[#333] mb-3 max-w-xl mx-auto">
          <motion.span variants={itemVariants}>Mastering Grooming at</motion.span>{" "}
          <motion.span variants={itemVariants} className="text-[#1e4598]">Allex Gents Parlour</motion.span>
        </motion.h1>
        <motion.div
          className="h-1 mx-auto bg-gradient-to-r from-[#1e4598] via-[#FFD700] to-[#34A853] rounded-full my-6 origin-left"
          style={{ width: "80px" }}
          variants={underlineVariants}
        />
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          At <span className="font-semibold text-blue-600">Allex Gentleman’s Parlour</span>,
          we redefine men’s grooming with <span className="font-semibold text-blue-600">luxury services</span>
          and <span className="font-semibold text-blue-600">expert care</span>. From classic haircuts and
          beard styling to rejuvenating skin treatments, we ensure every gentleman leaves
          looking sharp and confident.
        </motion.p>
      </motion.div>

      <hr className="my-16 w-full max-w-xl border-t border-gray-300" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {featureCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: `0px 20px 50px ${card.boxShadowColor}`, scaleX: 1.1 }}
            className={`relative bg-white rounded-xl ${card.defaultShadow} p-6 text-center flex flex-col items-center justify-center group border border-transparent ${card.hoverColor} transition-all duration-300`}
          >
            {card.icon}
            <h3 className="text-lg font-bold text-[#333] mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: card.description }}></p>
            <motion.div
              className={`absolute inset-0 rounded-xl pointer-events-none ${card.lineGradient}`}
              initial={{ scale: 0 }}
              whileHover={{ scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
              style={{ originX: 0, originY: 0, opacity: 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <hr className="my-16 w-full max-w-6xl border-t border-gray-300" />

      <motion.div
        className="relative bg-[#1e4598] text-white rounded-xl shadow-2xl p-10 w-full max-w-6xl text-center overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="absolute inset-0 rounded-xl border-4 border-yellow-400"
          initial={{ opacity: 0.2, scale: 1 }}
          animate={
            isInView ?
            { opacity: [0.2, 0.9, 0.2], scale: [1, 1.05, 1], boxShadow: '0 0 40px 10px rgba(255, 215, 0, 0.9)' } :
            {}
          }
          transition={{ duration: 1.5, type: 'easeInOut', repeat: 0 }}
        />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Our Impact in the Grooming Industry</h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-white via-[#FFD700] to-white rounded-full mb-5"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <AnimatedCounter from={0} to={metric.count} suffix={metric.suffix} isInView={isInView} />
                <motion.span
                  className="text-sm md:text-base font-medium opacity-80 mt-2"
                  variants={itemVariants}
                >
                  {metric.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
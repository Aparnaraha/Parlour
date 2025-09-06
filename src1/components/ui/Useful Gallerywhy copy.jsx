"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Scissors, Crown, Award } from "lucide-react";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const middleCards = [
    {
      title: "Master Barbers",
      description:
        "Our skilled barbers are artists dedicated to crafting your perfect look with precision and style.",
    },
    {
      title: "Premium Products",
      description:
        "We use only the finest grooming products for a luxurious and lasting finish.",
    },
    {
      title: "Relaxing Ambiance",
      description:
        "Step into a space designed for your comfort and relaxation, a true retreat from the everyday hustle.",
    },
  ];

  const rightCards = [
    { icon: <Award size={48} />, text: "EXPERT STYLISTS" },
    { icon: <Scissors size={48} />, text: "PRECISION CUTS" },
    { icon: <Crown size={48} />, text: "ROYAL TREATMENT" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 lg:py-40">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?semt=ais_hybrid&w=740')",
          y: backgroundY,
        }}
      />

      {/* Glass Effect Overlay */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto p-8 md:p-12 lg:p-16 rounded-xl text-center shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/30"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
            backdropFilter: 'blur(12px)',
        }}
      >
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow mx-auto">
            Our Gallery
          </span>
        </motion.div>
        <motion.h2
          className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          variants={itemVariants}
        >
          We have a Bunch of Customer{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Gallery</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg leading-8 text-gray-800"
          variants={itemVariants}
        >
          We are dedicated to giving our best out of us. Happy to help always.
        </motion.p>

        {/* Layout */}
        <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
          {/* First Container: Image is now background */}
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            {/* Column 1: Descriptive Cards */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col gap-6"
              variants={containerVariants}
            >
              {middleCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="shadow-md p-8 bg-white/50 rounded-lg border border-gray-100 backdrop-blur-lg hover:border-yellow-200 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Column 2: Icon Cards */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col gap-6"
              variants={containerVariants}
            >
              {rightCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="shadow-md p-8 bg-white/50 rounded-lg border border-gray-100 backdrop-blur-lg hover:border-blue-200 transition-colors duration-300 flex flex-col items-center justify-center h-full"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-gray-800 mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{card.text}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
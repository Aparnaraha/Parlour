import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Crown, Award } from "lucide-react";

export default function OurPromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants
  const headingVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Hover effect for cards
  const hoverCard = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  // Hover for icons
  const hoverIcon = {
    initial: { y: 0 },
    hover: { y: -4, transition: { duration: 0.2 } },
  };

  // Data
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
    <>
      <style>
        {`
          .blue-gradient-text {
            background: linear-gradient(90deg, #3498db 0%, #2c3e50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .gold-gradient-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      <div className="bg-white py-16 md:py-24">
        <motion.div
          ref={ref}
          className="w-full max-w-7xl mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow mx-auto">
            Our Gallery
          </span>
          <motion.h2
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            variants={headingVariants}
          >
            We have Bunch of Customers{" "}
            <span className="gold-gradient-text">Gallery</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            variants={itemVariants}
          >
            We are dedicated at giving our Best out of us. Happy to help always.
          </motion.p>

          {/* Layout */}
          <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
            {/* First Container: Image */}
            <motion.div
              className="w-full lg:w-1/3 overflow-hidden shadow-lg relative group cursor-pointer rounded-none"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
            >
              <motion.img
                src="https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?semt=ais_hybrid&w=740"
                alt="A modern barbershop interior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Second & Third Containers */}
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              {/* Column 1: Descriptive Cards */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6 border border-yellow-200 rounded-none p-6 bg-gradient-to-b from-yellow-50 to-orange-50"
                variants={itemVariants}
              >
                {middleCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md cursor-pointer p-8 bg-white rounded-none hover:bg-gradient-to-r hover:from-yellow-200 hover:to-orange-200 transition-colors duration-300"
                    variants={hoverCard}
                    initial="initial"
                    whileHover="hover"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 font-open-sans tracking-wide">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Column 2: Icon Cards */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6 border border-blue-200 rounded-none p-6 bg-gradient-to-b from-blue-50 to-gray-50"
                variants={itemVariants}
              >
                {rightCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md cursor-pointer p-8 bg-white rounded-none hover:bg-gradient-to-r hover:from-blue-200 hover:to-gray-200 transition-colors duration-300 flex flex-col items-center justify-center gap-4 h-full"
                    variants={hoverCard}
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.div variants={hoverIcon} initial="initial" whileHover="hover">
                      <div className="text-gray-800 transition-colors group-hover:text-blue-600">
                        {card.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800 font-poppins">
                      {card.text}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

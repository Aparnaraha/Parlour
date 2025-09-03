import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Crown, Award } from "lucide-react";

/**
 * Our Promise Section: Showcases the key benefits and promises of the brand.
 * Features a responsive grid layout with a prominent image and two sets of cards.
 * Uses Framer Motion for scroll-based and hover animations.
 * This version uses a light theme with golden and blue color accents.
 */
export default function OurPromiseSection() {
  // Use a ref to trigger animations when the container is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for main heading animation
  const headingVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  // Variants for individual container animations (slide-in from bottom)
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for descriptive cards (Section 2) hover animation
  const descriptiveCardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
  };

  // Variants for the left-to-right wipe effect for the second column
  const wipeLeftToRightVariants = {
    initial: { width: "0%" },
    hover: { width: "100%", transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Variants for the sliding background of the third column
  const slideDownVariants = {
    initial: { height: 0 },
    hover: { height: "100%", transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Variants for icon cards (Section 3) hover animation
  const iconCardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
  };

  // Variants for icon hover animation
  const iconHoverVariants = {
    hover: { y: -5, transition: { duration: 0.2 } },
  };

  // Variants for the image zoom and lift effect
  const imageZoomVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5, transition: { duration: 0.3 } },
  };

  // Data for the middle cards
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

  // Data for the right cards
  const rightCards = [
    {
      icon: <Award size={48} />,
      text: "EXPERT STYLISTS",
    },
    {
      icon: <Scissors size={48} />,
      text: "PRECISION CUTS",
    },
    {
      icon: <Crown size={48} />,
      text: "ROYAL TREATMENT",
    },
  ];

  // Image URL for the promise section.
  const mainImage = "https://wallpapercave.com/wp/wp7542786.jpg";

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@500;600&family=Open+Sans:wght@400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');


          .font-poppins {
            font-family: 'Inter',sans-serif;
          }

          .font-open-sans {
            font-family: 'Inter',sans-serif;
          }
          
          .font-cinzel {
            font-family: 'Inter',sans-serif;
          }

          .bg-parlour {
            background-image: url('https://wallpapercave.com/wp/wp7542786.jpg');
            background-attachment: fixed;
            background-size: contain;
          }

          .blue-gradient-text {
            background: linear-gradient(90deg, #3498db 0%, #2c3e50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .gold-gradient-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .gold-gradient-hover-bg {
            background: linear-gradient(90deg, rgba(255, 215, 0, 0.4), rgba(255, 165, 0, 0.4));
          }

          .gray-blue-gradient-hover-bg {
            background: linear-gradient(90deg, rgba(44, 62, 80, 0.25), rgba(52, 152, 219, 0.25));
          }
        `}
      </style>
      
      {/* Main container with light background and parallax effect */}
      <div
        className="bg-parlour bg-center py-16 md:py-24"
      >
        <motion.div
          ref={ref}
          className="w-full max-w-7xl mx-auto px-4 text-center "
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
            We have Bunch of Customers <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Gallery</span>
          </motion.h2>
                      <motion.p
                        className="mt-6 text-lg leading-8 text-gray-600"
                        variants={itemVariants}
                      >
                        We are dedicated at giving our Best out of us. Happy to help always.
                      </motion.p>
          
          <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
            {/* First Container: Image */}
            <motion.div
              className="w-full lg:w-1/3 rounded-lg overflow-hidden shadow-2xl relative group cursor-pointer"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
            >
              <motion.img
                src="https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?semt=ais_hybrid&w=740"
                alt="A modern barbershop interior"
                className="w-full h-full object-cover"
                variants={imageZoomVariants}
              />
            </motion.div>

            {/* Second and Third Containers: Cards arranged side by side on desktop */}
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              {/* Second Container: 3 Descriptive Cards */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6"
                variants={itemVariants}
                transition={{ duration: 0.3 }}
              >
                {middleCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md group cursor-pointer min-h-[180px] transition-all duration-300 ease-in-out hover:border-transparent"
                    variants={descriptiveCardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    {/* The animated background that will fill the card on hover */}
                    <motion.div
                      className="absolute inset-0 origin-left gold-gradient-hover-bg"
                      variants={wipeLeftToRightVariants}
                    />
                    
                    {/* The content container that will have its background fade on hover */}
                    <div className="relative z-10 bg-white p-8 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-transparent">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins group-hover:blue-gradient-text">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 font-open-sans tracking-wide">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Third Container: 3 Icon Cards */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col gap-6"
                variants={itemVariants}
                transition={{ duration: 0.3 }}
              >
                {rightCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md group cursor-pointer min-h-[180px] transition-all duration-300 ease-in-out hover:border-transparent"
                    variants={iconCardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    {/* The animated background that will fill the card on hover */}
                    <motion.div
                      className="absolute inset-0 origin-top gray-blue-gradient-hover-bg"
                      variants={slideDownVariants}
                    />

                    {/* The content container that will have its background fade on hover */}
                    <div className="relative z-10 bg-white p-8 rounded-lg transition-all duration-300 ease-in-out group-hover:bg-transparent flex flex-col items-center justify-center gap-4 h-full">
                      <motion.div
                        className="flex-shrink-0"
                        variants={iconHoverVariants}
                        whileHover="hover"
                      >
                        <motion.div
                          className="text-gray-800"
                          animate={{ color: "#333333" }}
                          whileHover={{ color: "#3498db" }}
                          transition={{ duration: 0.3 }}
                        >
                          {card.icon}
                        </motion.div>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-800 font-poppins group-hover:blue-gradient-text">
                        {card.text}
                      </h3>
                    </div>
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
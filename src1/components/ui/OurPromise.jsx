"use client";

import React, { useRef, memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, LifeBuoy, BadgeCheck, ShieldCheck } from "lucide-react";

// Import your local images
import photo1 from "../../img/photo1.jpg";
import photo2 from "../../img/photo3.jpg";
import photo3 from "../../img/photo24.jpg";


// Isolate static data and variants outside the component to prevent re-creation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const headingVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const serviceCards = [
  { image: photo1, title: "Eco-Friendly Hair Care", description: "We use organic, eco-friendly products for precision cutting, styling, and treatments for all hair types." },
  { image: photo2, title: "Exceptional Skin Care", description: "Our team provides exceptional facials and rejuvenating treatments with a focus on client satisfaction." },
  { image: photo3, title: "Uncompromising Quality", description: "Experience professional makeup applications with our highest standard of quality and precision." },
];

const promiseCards = [
  { icon: <Leaf className="text-4xl" />, text: "Eco-Friendly Products" },
  { icon: <LifeBuoy className="text-4xl" />, text: "Exceptional Support" },
  { icon: <BadgeCheck className="text-4xl" />, text: "Uncompromising Quality" },
  { icon: <ShieldCheck className="text-4xl" />, text: "Client Safety" },
];


const OurPromiseSection = memo(() => {
  const ref = useRef(null);
  
  // The 'once: true' property has been removed to allow animations on both scroll up and down.
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div className="bg-gray-50 pt-10 sm:pt-16 pb-20 sm:pb-32" ref={ref}>
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8 text-center" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
        {/* Heading */}
        <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow mx-auto">
          Our Promise
        </span>
        <motion.h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl" variants={headingVariants}>
          We're dedicated to your satisfaction.
        </motion.h2>
        <motion.p className="mt-6 text-lg leading-8 text-gray-700" variants={itemVariants}>
          Experience the difference that passion, precision, and personalized service can make.
        </motion.p>

        {/* Service Cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 transform-gpu hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                // The `whileInView` and `viewport` properties are kept as they are.
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-2xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promise Cards */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promiseCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden bg-white p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center text-center group cursor-pointer"
                // The hover animation now uses a combination of Framer Motion and CSS for efficiency
                initial={{ y: 0, boxShadow: "0px 6px 25px rgba(0,0,0,0.1)" }}
                whileHover={{ y: -5, boxShadow: "0px 12px 40px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Simplified slide-down effect */}
                <div className="absolute inset-0 bg-orange-400 origin-top transform-gpu transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  {/* Icon hover effect now uses CSS for smoothness */}
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-15">
                    <div className="text-orange-600 group-hover:text-black transition-colors duration-300">{card.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">{card.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

export default OurPromiseSection;
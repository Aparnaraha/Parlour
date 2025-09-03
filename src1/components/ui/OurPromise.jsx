import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, LifeBuoy, BadgeCheck, ShieldCheck } from "lucide-react";

export default function OurPromiseSection() {
  // Use a ref to trigger animations when the container is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for main heading and descriptive text animation
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

  // Variants for descriptive cards hover animation
  const descriptiveCardHoverVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0px 4px 20px rgba(0,0,0,0.05)" },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Variants for individual container animations (slide-in from bottom)
  const iconCardItemVariants = {
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

  const slideDownVariants = {
    initial: { y: "-100%" },
    hover: { y: "0%", transition: { duration: 0.3, ease: "easeOut" } },
  };

  const iconHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: 15 },
  };

  // Data for the image-based cards
  const serviceCards = [
    {
      image:
        "https://avatars.mds.yandex.net/get-altay/14702189/2a0000019542465fed992be415146ef17259/XXL_height",
      title: "Eco-Friendly Hair Care",
      description:
        "We use organic, eco-friendly products for precision cutting, styling, and treatments for all hair types.",
    },
    {
      image:
        "https://img.skininc.com/files/base/allured/all/image/2022/08/dreamstime_m_149613990.62ec14bb23638.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
      title: "Exceptional Skin Care",
      description:
        "Our team provides exceptional facials and rejuvenating treatments with a focus on client satisfaction.",
    },
    {
      image:
        "https://avatars.mds.yandex.net/i?id=53a713fa8b2cdd0ed49c2a2e44d8d627c653aa54-16437103-images-thumbs&n=13",
      title: "Uncompromising Quality",
      description:
        "Experience professional makeup applications with our highest standard of quality and precision.",
    },
  ];

  // Data for the icon-based cards
  const promiseCards = [
    {
      icon: <Leaf className="text-4xl" />,
      text: "Eco-Friendly Products",
      // description:
      //   "We prioritize the health of our planet and our customers by using all-natural and organic ingredients.",
    },
    {
      icon: <LifeBuoy className="text-4xl" />,
      text: "Exceptional Support",
      // description:
      //   "Our team is always here to assist you, from the moment you book until you leave with a smile.",
    },
    {
      icon: <BadgeCheck className="text-4xl" />,
      text: "Uncompromising Quality",
      // description:
      //   "Every service is performed with precision and care, ensuring a perfect result every time.",
    },
    {
      icon: <ShieldCheck className="text-4xl" />,
      text: "Client Safety",
      // description:
      //   "Your health and safety are our top priorities, with strict hygiene protocols in place.",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 py-20 sm:py-32">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
          ref={ref}
        >
          {/* Main heading from the second code */}
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow mx-auto">
              Our Promise
            </span>
            <motion.h2
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              variants={headingVariants}
            >
              We're dedicated to your satisfaction.
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600"
              variants={itemVariants}
            >
              Experience the difference that passion, precision, and
              personalized service can make.
            </motion.p>
          </motion.div>

          {/* Image-based cards from the first code with updated hover effect */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 transform-gpu hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Add a wrapper div with an aspect ratio or fixed height */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4 text-center backdrop-filter backdrop-blur-sm bg-black bg-opacity-30 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                    }}
                    transition={{ duration: 0.5 }}
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

          {/* Icon-based cards from the second code with updated hover effect */}
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                initial="initial"
                whileInView="hover"
                viewport={{ once: true, amount: 0.5 }}
              >
                {promiseCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden bg-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center text-center group cursor-pointer"
                    variants={descriptiveCardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-orange-400 origin-top"
                      variants={slideDownVariants}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <motion.div
                        className="flex-shrink-0"
                        variants={iconHoverVariants}
                        whileHover="hover"
                      >
                        <motion.div
                          className="text-orange-600"
                          animate={{ color: "rgb(249, 115, 22)" }}
                          whileHover={{ color: "#ffffff" }}
                          transition={{ duration: 0.3 }}
                        >
                          {card.icon}
                        </motion.div>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                        {card.text}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
                        {card.description}
                      </p>
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

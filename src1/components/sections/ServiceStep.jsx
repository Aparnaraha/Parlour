"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Scissors,
  CreditCard,
  Smile,
  ArrowRight,
} from "lucide-react";

// Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
      delay: i * 0.12, // cards one after another
    },
  }),
};

const arrowVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: i * 0.12 + 0.1 },
  }),
};

const StepCard = React.memo(({ step, index }) => (
  <motion.div
    style={{ willChange: "transform, opacity" }}
    className="relative bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center w-64 transition-all duration-300 transform-gpu"
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    whileHover={{
      y: -10,
      scale: 1.03,
      boxShadow:
        "0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(255,165,0,0.25)",
    }}
  >
    <motion.div
      style={{ willChange: "transform" }}
      className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md"
      whileHover={{ scale: 1.2, rotate: 15 }}
    >
      {step.id}
    </motion.div>

    <div className="mb-4">{step.icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">
      {step.title}
    </h3>
    <p className="text-gray-600 text-sm">{step.description}</p>
  </motion.div>
));
StepCard.displayName = "StepCard";

const PremiumServiceStepCounter = React.memo(() => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    once: true,
    threshold: 0.15,
  });

  const steps = useMemo(
    () => [
      {
        id: 1,
        icon: <Calendar className="w-10 h-10 text-yellow-500" />,
        title: "Book Appointment",
        description:
          "Pick a convenient date and time from our smart booking calendar.",
      },
      {
        id: 2,
        icon: <Scissors className="w-10 h-10 text-orange-500" />,
        title: "Choose Service",
        description: "Select from a wide range of grooming & makeover services.",
      },
      {
        id: 3,
        icon: <CreditCard className="w-10 h-10 text-blue-500" />,
        title: "Confirm & Pay",
        description: "Secure your slot instantly with simple payment options.",
      },
      {
        id: 4,
        icon: <Smile className="w-10 h-10 text-pink-500" />,
        title: "Enjoy Service",
        description:
          "Visit us and experience the best-in-class salon experience.",
      },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-r from-yellow-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Background blobs (fast) */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-40"
        initial={{ x: -200, y: -200, opacity: 0 }}
        animate={sectionInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40"
        initial={{ x: 200, y: 200, opacity: 0 }}
        animate={sectionInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title (super fast) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
            Steps to follow
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Apply
            </span>{" "}
            for Our Services
          </h2>
        </motion.div>

        {/* Steps (sequential but quick) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 mt-16">
          {sectionInView &&
            steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <StepCard step={step} index={i} />
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center justify-center"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={arrowVariants}
                  >
                    <ArrowRight className="w-8 h-8 text-orange-500" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
});
PremiumServiceStepCounter.displayName = "PremiumServiceStepCounter";

export default PremiumServiceStepCounter;

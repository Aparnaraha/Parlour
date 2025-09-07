"use client";

import { useRef, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Scissors,
  UserRound,
  Fan,
  Gem,
  Heart
} from "lucide-react";

// ✅ Optimized Counter Component
const AnimatedCounter = ({ from, to, suffix, isInView }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      animate(from, to, {
        duration: 0.8,
        ease: "easeOut",
        onUpdate: (latest) => {
          node.textContent = Math.floor(latest).toLocaleString();
        },
      });
    }
  }, [isInView, from, to]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="text-4xl md:text-5xl font-extrabold flex items-baseline">
        <span ref={nodeRef} className="text-yellow-500">
          {Math.floor(from)}
        </span>
        <span className="text-xl md:text-2xl font-normal ml-1 text-white">
          {suffix}
        </span>
      </div>
    </div>
  );
};

// ✅ Optimized Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: i * 0.12, // wave effect
    },
  }),
};

const About = () => {
  const { ref: containerRef, inView: isInView } = useInView({
    once: true,
    threshold: 0.1,
  });

  const featureCards = [
    {
      icon: <UserRound className="w-10 h-10 text-[#FFD700] mb-4" />,
      title: "Industry Experts",
      description:
        "Our barbers and stylists bring **over 10+ years** of **precision grooming** expertise to every client.",
      lineGradient: "bg-gradient-to-r from-[#FFD700] to-[#B8860B]",
      boxShadowColor: "rgba(255, 215, 0, 0.35)",
    },
    {
      icon: <Fan className="w-10 h-10 text-[#50E3C2] mb-4" />,
      title: "Signature Services",
      description:
        "Tailored **grooming experiences** crafted exclusively for the **modern gentleman**.",
      lineGradient: "bg-gradient-to-r from-[#50E3C2] to-[#25A684]",
      boxShadowColor: "rgba(80, 227, 194, 0.35)",
    },
    {
      icon: <Gem className="w-10 h-10 text-[#7ED321] mb-4" />,
      title: "Premium Products",
      description:
        "We trust only **world-class, skin-safe products** for an unmatched result.",
      lineGradient: "bg-gradient-to-r from-[#7ED321] to-[#4A90E2]",
      boxShadowColor: "rgba(126, 211, 33, 0.35)",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#F5A623] mb-4" />,
      title: "Dedicated Care",
      description:
        "Our staff ensures **personalized attention** and a truly **royal grooming journey**.",
      lineGradient: "bg-gradient-to-r from-[#F5A623] to-[#E94E51]",
      boxShadowColor: "rgba(245, 166, 35, 0.35)",
    },
  ];

  const metrics = [
    { count: 10000, label: "Clients Served", suffix: "+" },
    { count: 99, label: "Satisfaction Rate", suffix: "%" },
    { count: 50, label: "Award-Winning Styles", suffix: "+" },
    { count: 15, label: "Years in Business", suffix: "+" },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white min-h-screen flex flex-col items-center py-16 px-6 lg:px-12 font-sans overflow-hidden"
    >
      {/* ✅ Heading stays static for smoothness */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 mb-5 border border-gray-300 rounded-full text-[#333] font-semibold text-sm">
          <Scissors className="w-4 h-4 mr-2 text-yellow-500" /> About Allex
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#333] mb-3 max-w-xl mx-auto">
          Mastering Grooming at{" "}
          <span className="text-[#1e4598]">Allex Gents Parlour</span>
        </h1>
        <div
          className="h-1 mx-auto bg-gradient-to-r from-[#1e4598] via-[#FFD700] to-[#34A853] rounded-full my-6 origin-left"
          style={{ width: "80px" }}
        />
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">Allex Gentleman’s Parlour</span>,
          we redefine men’s grooming with{" "}
          <span className="font-semibold text-blue-600">luxury services</span> and{" "}
          <span className="font-semibold text-blue-600">expert care</span>. From
          classic haircuts and beard styling to rejuvenating skin treatments, we
          ensure every gentleman leaves looking sharp and confident.
        </p>
      </div>

      <hr className="my-16 w-full max-w-xl border-t border-gray-300" />

      {/* ✅ Cards animate in wave one by one */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: `0px 8px 20px ${card.boxShadowColor}`,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            style={{
              willChange: "transform, opacity", // ✅ GPU hint
              transform: "translateZ(0)",
            }}
            className={`relative bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center justify-center group border border-transparent transition-all duration-300`}
          >
            {card.icon}
            <h3 className="text-lg font-bold text-[#333] mb-2">
              {card.title}
            </h3>
            <p
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
            <motion.div
              className={`absolute inset-0 rounded-xl pointer-events-none ${card.lineGradient}`}
              initial={{ scaleX: 0 }}
              whileHover={{
                scaleX: 1,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              style={{ originX: 0, originY: 0, opacity: 0.15 }}
            />
          </motion.div>
        ))}
      </div>

      <hr className="my-16 w-full max-w-6xl border-t border-gray-300" />

      {/* ✅ Impact / Counter Section (no border now) */}
      <motion.div
        className="relative bg-[#1e4598] text-white rounded-xl shadow-2xl p-10 w-full max-w-6xl text-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Our Impact in the Grooming Industry</h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-white via-[#FFD700] to-white rounded-full mb-5"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <AnimatedCounter
                  from={0}
                  to={metric.count}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
                <span className="text-sm md:text-base font-medium opacity-80 mt-2">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

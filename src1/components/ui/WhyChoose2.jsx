import React, { useRef, useState, useEffect, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Award, Droplet, User } from "lucide-react";

/**
 * Why Choose Us Section
 * Features a responsive grid layout with a prominent image and two sets of cards.
 * Uses Framer Motion for scroll-based and hover animations.
 */
// =====================
// Static Data moved outside component to prevent re-creation
// =====================
const features = [
  {
    icon: Crown,
    title: "Artisanal Expertise",
    desc: "Our barbers are artists, trained in traditional and modern techniques.",
  },
  {
    icon: Droplet,
    title: "Premium Products",
    desc: "We use only the finest hair and beard products for a superior finish.",
  },
  {
    icon: User,
    title: "Personalized Service",
    desc: "Every service is tailored to your unique style and needs.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    desc: "Recognized for excellence in client satisfaction and service.",
  },
];

// =====================
// Counter Component with useInView - Moved outside for performance
// =====================
const AnimatedCounter = memo(({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center text-white"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        {count}+
      </h2>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
});

// =====================
// Why Choose Us Main Component - Memoized
// =====================
const WhyChooseUs = memo(() => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1a1c24] to-[#0f1116] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
          Why us?
        </span>
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
            Our Barber Shop?
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="p-8 rounded-2xl bg-[#222633]/80 backdrop-blur-md border border-gray-700 shadow-xl text-center flex flex-col items-center hover:scale-[1.03] transition-all duration-300"
            >
              <f.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center">
          <AnimatedCounter value={1000} label="Happy Clients" delay={0.2} />
          <AnimatedCounter value={20} label="Years Experience" delay={0.4} />
          <AnimatedCounter value={100} label="5★ Reviews" delay={0.6} />
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUs;
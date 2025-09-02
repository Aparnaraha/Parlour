import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        {count}+
      </h2>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;

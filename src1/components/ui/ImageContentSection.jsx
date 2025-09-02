  import React, { useRef } from 'react';
  import { motion, useInView, useScroll, useTransform } from 'framer-motion';

  const ImageContentSection = ({ title, description, imageUrl, isImageOnRight }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
    });

    // Fixed parallax transform
    const parallaxY = useTransform(scrollYProgress, [0, 1], ['-100px', '100px']);

    const containerVariants = {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
          staggerChildren: 0.2,
        },
      },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    };

    const textVariants = {
      hidden: { opacity: 0, x: isImageOnRight ? -50 : 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={`relative flex flex-col md:flex-row items-center gap-12 py-24 px-6 max-w-7xl mx-auto rounded-3xl overflow-hidden ${
          isImageOnRight ? 'md:flex-row-reverse' : ''
        }`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 40px rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Background Image Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            y: parallaxY,
          }}
        />

        {/* Foreground Image */}
        <motion.div
          variants={imageVariants}
          className="md:w-1/2 z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          className="md:w-1/2 z-10 text-white text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {description}
          </p>
        </motion.div>
      </motion.section>
    );
  };

  export default ImageContentSection;

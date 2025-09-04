import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, HeartHandshake, ShieldCheck, Sparkles, User, Medal } from 'lucide-react';
import ParticleEffect from '../ui/ParticleEffect';
import AnimatedCounter from '../ui/AnimatedCounter';
import StillHaveQuestion from '../ui/StillHaveQuestion';
import OurPromise from '../ui/OurPromise';
import Testimonials from '../ui/Testimonial'

// A reusable component with a solid background and a powerful parallax effect
const ImageContentSection = ({ title, description, imageUrl, isImageOnRight, overlayTexts }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: isImageOnRight ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const overlayHoverVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0px 10px 20px rgba(255,165,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const overlayChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-12 py-20 px-6 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#222633] ${isImageOnRight ? 'md:flex-row-reverse' : ''}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0 bg-black/80"></div>
      
      <motion.div
        variants={imageVariants}
        className="md:w-1/2 rounded-2xl overflow-hidden z-10 relative"
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
          style={{
            boxShadow: "0 0 10px rgba(255, 165, 0, 0.7)"
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
          transition={{ duration: 0.5 }}
        />

        {overlayTexts && overlayTexts.map((text, index) => (
          <motion.div
            key={index}
            className={`absolute px-4 py-2 bg-black/40 backdrop-blur-sm text-white rounded-md text-sm font-semibold cursor-pointer`}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={overlayChildVariants}
            whileHover="hover"
            style={{
              top: text.position.top,
              bottom: text.position.bottom,
              left: text.position.left,
              right: text.position.right,
            }}
          >
            {text.label}
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={textVariants} className="md:w-1/2 text-center md:text-left z-10 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Hero section with centered text and animated overlays
const HeroAbout = () => {
  return (
    <section className="relative py-28 bg-[#1a1c24] text-white overflow-hidden h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <ParticleEffect />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Our Craft</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We’re more than just a barbershop — we’re a destination for refinement, precision, and style.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0, rotate: -5, x: -50 }}
        animate={{ opacity: 0.2, rotate: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-5 text-8xl font-black text-white/10 opacity-10"
      >
        Styled
      </motion.p>
      <motion.p
        initial={{ opacity: 0, rotate: 5, x: 50 }}
        animate={{ opacity: 0.2, rotate: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 right-5 text-8xl font-black text-white/10 opacity-10"
      >
        Perfect
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Medal className="w-48 h-48 text-yellow-400/20" />
      </motion.div>
    </section>
  );
};



// Our Story section with a new theme
const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section
      ref={ref}
      className="bg-white py-20 px-6 text-center max-w-4xl mx-auto rounded-3xl shadow-2xl border border-gray-100 -mt-20 z-20 relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{
        boxShadow: "0 30px 60px rgba(0,0,0,0.2), 0 0 20px rgba(255,165,0,0.3)",
        scale: 1.02
      }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Our Story</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Founded on the principles of classic barbering and modern artistry, our journey began with a single chair and a simple promise: to provide more than just a haircut. We built our salon as a sanctuary for those who appreciate the finer details of grooming, a place where every visit is an an experience in itself.
      </p>
    </motion.section>
  );
};

// Services section with hover animations
const AboutServices = () => {
  const services = [
    { title: "Hair Mastery", desc: "Signature cuts, styling & grooming with a modern twist.", icon: Sparkles, color: 'blue', hoverBg: 'bg-blue-50', hoverBorder: 'border-blue-500' },
    { title: "Beard Sculpting", desc: "Crafted beards tailored to your face and personality.", icon: ShieldCheck, color: 'pink', hoverBg: 'bg-pink-50', hoverBorder: 'border-pink-500' },
    { title: "Facial & Relaxation", desc: "Deep clean facials and rejuvenating scalp massages.", icon: HeartHandshake, color: 'green', hoverBg: 'bg-green-50', hoverBorder: 'border-green-500' },
    { title: "Client-Centric", desc: "We take the time to understand and perfect your style.", icon: CheckCircle, color: 'orange', hoverBg: 'bg-orange-50', hoverBorder: 'border-orange-500' }
  ];

  return (
    <section className="bg-white text-black py-20 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Exceptional grooming services that define sophistication.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto z-10 relative">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className={`p-8 rounded-xl shadow-xl text-center border border-gray-200 transition-all duration-300 transform-gpu relative group`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.2)"
            }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <s.icon className={`w-10 h-10 mx-auto mb-4 text-${s.color}-500`} />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
            {/* Animated background and border on hover */}
            <motion.div
              className={`absolute inset-0 rounded-xl transition-all duration-300 ease-in-out z-0`}
              initial={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
              whileHover={{
                backgroundColor: `var(--color-${s.color}-50)`,
                borderColor: `var(--color-${s.color}-500)`
              }}
              transition={{ duration: 0.3 }}
              style={{
                '--color-blue-50': 'rgba(239, 246, 255, 1)',
                '--color-blue-500': 'rgba(59, 130, 246, 1)',
                '--color-pink-50': 'rgba(253, 242, 248, 1)',
                '--color-pink-500': 'rgba(236, 72, 153, 1)',
                '--color-green-50': 'rgba(236, 253, 245, 1)',
                '--color-green-500': 'rgba(34, 197, 94, 1)',
                '--color-orange-50': 'rgba(255, 247, 237, 1)',
                '--color-orange-500': 'rgba(249, 115, 22, 1)',
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};


// Team member card and section with hover and animation
const TeamMemberCard = ({ name, role, photoUrl, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      filter: "grayscale(0%)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-xl text-center flex flex-col items-center transition-all duration-300 group overflow-hidden border border-gray-200"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(255, 165, 0, 0.4)",
        transition: {
          scale: { duration: 0.3 },
          boxShadow: { duration: 0.3 }
        }
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 border-4 rounded-xl"
        style={{
          borderImageSlice: 1
        }}
        initial={{
          borderImageSource: 'linear-gradient(45deg, #f3f4f6, #f3f4f6)',
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
          borderImageSource: ['linear-gradient(45deg, #F59E0B, #EF4444)', 'linear-gradient(45deg, #EF4444, #3B82F6)', 'linear-gradient(45deg, #3B82F6, #10B981)', 'linear-gradient(45deg, #10B981, #F59E0B)'],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src={photoUrl}
            alt={`Photo of ${name}`}
            className="w-full h-full object-cover grayscale transition-all duration-300"
          />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm font-semibold text-orange-500 mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
    const teamMembers = [
        {
          name: "Alex Smith",
          role: "Founder & Master Barber",
          photoUrl: "https://i.pinimg.com/originals/f7/f4/f4/f7f4f41f15a26d029d1af40964c8ed50.jpg",
          description: "Alex founded our salon with a passion for precision cuts and a vision for exceptional client care. He leads our team with years of industry expertise.",
        },
        {
          name: "Mia Johnson",
          role: "Lead Stylist",
          photoUrl: "https://i.pinimg.com/originals/ab/5e/ee/ab5eee9c91e0aa79c16c64b533001538.jpg",
          description: "Mia specializes in modern styling and color work, constantly staying ahead of trends. Her artistic flair brings every client's vision to life.",
        },
        {
          name: "Chris Lee",
          role: "Grooming Specialist",
          photoUrl: "https://i.pinimg.com/736x/c8/32/94/c83294e8a3a4f1cf2e0d379737a6209c.jpg",
          description: "Chris is our resident expert in beard care and luxury shaves. His meticulous attention to detail ensures a clean, sharp look every time.",
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={headingVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Meet Our{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                            Exceptional Team
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                        Our team of dedicated professionals is committed to providing a tailored experience and a flawless finish every time.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Core Values section with parallax
const CoreValues = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const values = [
      { label: "Integrity", desc: "We do what’s right – always.", icon: ShieldCheck },
      { label: "Excellence", desc: "Precision in every detail.", icon: Sparkles },
      { label: "Empathy", desc: "Client comfort is our priority.", icon: HeartHandshake }
    ];

    return (
      <motion.section
        ref={ref}
        className="bg-white text-black py-20 px-6"
        style={{ y: parallaxY }}
      >
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Our Core Values</h2>
          <p className="text-gray-600">We lead with values that define everything we do.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="text-center p-8 rounded-2xl bg-white shadow-xl relative overflow-hidden border border-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1), 0 0 15px rgba(255,165,0,0.2)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <val.icon className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{val.label}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
};

const StatsCounter = () => (
    <section className="bg-[#1a1c24] text-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        <AnimatedCounter value={1000} label="Happy Clients" delay={0.2} />
        <AnimatedCounter value={15} label="Years of Craft" delay={0.4} />
        <AnimatedCounter value={500} label="Beards Perfected" delay={0.6} />
      </div>
    </section>
);

const AboutPage = () => {
    const newImageUrl = "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyfGVufDB8fDB8fHww";

    return (
        <main className="bg-white">
            <HeroAbout />
            <OurStory />
            <AboutServices />
            <section className="bg-[#1a1c24] py-20 text-white">
              <div className="space-y-20 p-4">
                <ImageContentSection
                  title="The Art of Precision"
                  description="Every cut is a canvas, and our skilled barbers are the artists. We combine time-honored techniques with a modern approach to create a look that's not just a style, but a statement."
                  imageUrl={newImageUrl}
                  isImageOnRight={true}
                  overlayTexts={[
                      { label: "Masterful Fades", position: { top: '10%', left: '10%' } },
                      { label: "Meticulous Detail", position: { top: '30%', right: '10%' } }
                  ]}
                />
                <ImageContentSection
                  title="Our Client-First Philosophy"
                  description="We believe that a great haircut is built on a great conversation. We take the time to listen, understand your desires, and offer expert advice. Your comfort and confidence are our highest priorities."
                  imageUrl={newImageUrl}
                  isImageOnRight={false}
                  overlayTexts={[
                      { label: "Personalized Service", position: { bottom: '10%', left: '10%' } },
                      { label: "Unmatched Comfort", position: { top: '20%', right: '10%' } }
                  ]}
                />
                <ImageContentSection
                  title="Where-Tradition-Meets-Innovation"
                  description="Our parlour is a place where classic grooming traditions are elevated by modern innovation. We use state-of-the-art tools and premium products to ensure a superior and sustainable grooming experience."
                  imageUrl={newImageUrl}
                  isImageOnRight={true}
                  overlayTexts={[
                      { label: "Eco-Friendly Products", position: { bottom: '10%', right: '10%' } },
                      { label: "The Latest Trends", position: { top: '50%', left: '10%' } }
                  ]}
                />
              </div>
            </section>
            <CoreValues />
            <StatsCounter />
            <OurPromise/>
            <StillHaveQuestion/>
            <OurTeam />
            <Testimonials/>
            
        </main>
    );
};

export default AboutPage;
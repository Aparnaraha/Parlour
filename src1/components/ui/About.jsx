import React from "react";
import { motion } from "framer-motion";

// =========================================================================
// SVG Icons for the Sections
// =========================================================================
const QualityIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.279a9.96 9.96 0 011.903 8.361A10.005 10.005 0 0112 22 9.972 9.972 0 012.484 12.382a10.006 10.006 0 018.847-1.897" />
  </svg>
);

const ClientIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-4a2 2 0 01-2-2v-2a2 2 0 01-2-2V8a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2v2a2 2 0 00-2 2v2a2 2 0 01-2 2zM9 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EcoIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20.25c4.97 0 9-3.666 9-8.188s-4.03-8.188-9-8.188-9 3.666-9 8.188c0 4.522 4.03 8.188 9 8.188zM12 11a1 1 0 100 2 1 1 0 000-2z" />
</svg>
);

const RelaxIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15M17.5 9.5a5 5 0 01-11 0c0-1.282.684-2.484 1.777-3.376.657-.518 1.488-.824 2.393-.824h1.777c.905 0 1.736.306 2.393.824 1.093.892 1.777 2.094 1.777 3.376z" />
  </svg>
);

const HygieneIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ExpertiseIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c-3.142 0-6.19 1.137-8.5 3.5m17-3.5c-2.31-2.363-5.358-3.5-8.5-3.5" />
  </svg>
);

// =========================================================================
// Framer Motion Variants
// =========================================================================
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const missionCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const teamCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// =========================================================================
// Data for the sections
// =========================================================================
const teamMembers = [
  { name: "John Doe", title: "Master Barber", img: "https://placehold.co/400x400/5A5A5A/FFFFFF?text=John+Doe" },
  { name: "Jane Smith", title: "Lead Stylist", img: "https://placehold.co/400x400/A0A0A0/FFFFFF?text=Jane+Smith" },
  { name: "Alex Chen", title: "Skin Specialist", img: "https://placehold.co/400x400/808080/FFFFFF?text=Alex+Chen" },
  { name: "Sarah Lee", title: "Makeup Artist", img: "https://placehold.co/400x400/B0B0B0/FFFFFF?text=Sarah+Lee" },
];

const values = [
  { title: "Quality First", description: "We use only the finest products and techniques to deliver unparalleled results.", icon: QualityIcon, from: "left" },
  { title: "Client-Centric", description: "Your satisfaction is our top priority. We listen, advise, and deliver personalized service.", icon: ClientIcon, from: "top" },
  { title: "Eco-Friendly", description: "We are committed to using sustainable practices and minimizing our environmental impact.", icon: EcoIcon, from: "right" },
];

const experienceFeatures = [
  { title: "A Relaxing Atmosphere", description: "Step into a space designed for your comfort and tranquility.", icon: RelaxIcon },
  { title: "Uncompromising Hygiene", description: "Our tools and stations are meticulously sanitized for your safety.", icon: HygieneIcon },
  { title: "Expertise You Can Trust", description: "Our team is professionally trained and passionate about their craft.", icon: ExpertiseIcon },
];

const About = () => {
  return (
    <div className="bg-[#F0F2F5] font-['Poppins',sans-serif] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. Hero Section */}
      {/* ========================================================================= */}
      <section className="relative py-20 px-4 md:px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center p-4 min-h-[500px] lg:min-h-[600px]">
              <motion.div
                className="relative w-full max-w-lg aspect-[4/5] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Back Image (larger and off-center) */}
                <div className="absolute top-0 left-0 z-10 w-[85%] aspect-[3/4] rounded-lg shadow-2xl overflow-hidden -translate-x-4 -translate-y-4">
                  <img
                    src="https://placehold.co/500x700/D4C9BD/2C150B?text=Hair+Styling"
                    alt="A professional hair stylist working on a client's hair"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Front Image (smaller, with overlap and shadow) */}
                <div className="absolute bottom-0 right-0 z-20 w-[85%] aspect-[3/4] rounded-lg shadow-2xl overflow-hidden translate-x-4 translate-y-4">
                  <img
                    src="https://placehold.co/500x700/A69280/F2F2F2?text=Client+Hair+Wash"
                    alt="A person getting their hair washed at the salon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Text Content Section */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0"
              variants={sectionVariants}
            >
              <motion.div
                className="inline-flex items-center px-5 py-2 rounded-full mb-8 font-medium text-sm text-white"
                style={{ background: 'rgba(44, 62, 80, 0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: '#4ade80' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                ></motion.span>
                Learn About Us
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-8 leading-tight"
                variants={textVariants}
              >
                A Tradition Of Excellence And Craftsmanship
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed mb-8 max-w-lg"
                variants={textVariants}
              >
                With over **20 years of experience**, our master barbers and stylists are dedicated to providing a premium grooming experience. We blend classic techniques with modern trends to ensure every client leaves looking and feeling their best.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
                <motion.button
                  whileHover={{ y: -3, scale: 1.05, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 font-semibold text-white rounded-full shadow-md transition-all duration-300 w-full sm:w-auto"
                  style={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }}
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-2 px-8 py-3 font-semibold text-[#2C3E50] rounded-full border-2 border-[#2C3E50] transition-colors duration-300 w-full sm:w-auto hover:bg-[#2C3E50] hover:text-white"
                >
                  Contact Us
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. Legacy Section with Image and Animated Text Overlay */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center py-20 px-4 md:px-6 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('https://placehold.co/1920x1080/D3D3D3/000000?text=Barber+Shop+Interior')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          className="container mx-auto max-w-4xl text-center z-10 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h2 className="text-4xl md:text-6xl font-extrabold mb-4" variants={textVariants}>
            A Legacy of Craftsmanship
          </motion.h2>
          <motion.p className="text-lg md:text-xl font-light max-w-2xl mx-auto" variants={textVariants}>
            For over two decades, we have been more than a parlour; we are a community built on a foundation of skill, dedication, and genuine care. Each cut, shave, and treatment is a testament to our enduring legacy.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3. Our Mission & Values Section */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission & Values
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are guided by principles that define our craft and commitment to our clients.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  when: "beforeChildren",
                },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-lg shadow-xl text-center transition-transform duration-300 transform hover:scale-105"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)' }}
                variants={{
                  hidden: { opacity: 0, x: value.from === 'left' ? -100 : value.from === 'right' ? 100 : 0, y: value.from === 'top' ? -50 : 0 },
                  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
              >
                <motion.div
                  className="mx-auto mb-4 text-[#2C3E50]"
                  whileHover={{ scale: 1.1, rotate: 10, transition: { duration: 0.3 } }}
                >
                  <value.icon className="w-12 h-12 mx-auto" />
                </motion.div>
                <h4 className="text-xl font-semibold text-[#2C3E50] mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      {/* ========================================================================= */}
      {/* 4. Meet Our Experts Section (Refined Card Layout) */}
      {/* ========================================================================= */}
      <section className="bg-[#fcf8f5] py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#212121] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Master Artisans
          </motion.h2>
          <motion.p
            className="text-[#616161] mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated experts, united by a passion for their craft and a commitment to your satisfaction.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl shadow-md overflow-hidden group"
                variants={teamCardVariants}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 p-6 w-full text-white text-left">
                  <h4 className="text-xl font-bold mb-1 group-hover:text-[#6b9e87] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-sm font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  {/* ========================================================================= */}
      {/* 5. The Allex Experience Section (Side-by-side) */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-1/2 rounded-xl shadow-xl overflow-hidden"
              variants={textVariants}
            >
              <img
                src="https://placehold.co/900x600/EFEFEF/3498DB?text=Relaxing+Experience"
                alt="A cozy, clean barbershop interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              variants={sectionVariants}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#212121] mb-6"
                variants={textVariants}
              >
                The Allex Experience
              </motion.h2>
              <motion.p
                className="text-[#616161] leading-relaxed mb-8"
                variants={textVariants}
              >
                We believe a great service is just the beginning. The true value lies in the experience. Our parlor is designed to be a sanctuary where you can escape the daily grind and indulge in a moment of self-care.
              </motion.p>
              <ul className="space-y-6">
                {experienceFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start lg:items-center text-left"
                    variants={textVariants}
                  >
                    <div className="flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-[#6b9e87]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-[#212121]">
                        {feature.title}
                      </h4>
                      <p className="text-[#616161] text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "../ui/About";
import imgVideo from "../../img/hero2.mp4";
import "../../styles/globals.css";
// Importing Lucide Icons
import { Scissors, Sparkles, Paintbrush, ChevronRight } from "lucide-react";

// =========================================================================
// Framer Motion Variants for a sophisticated reveal
// =========================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Controls the delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const iconGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const iconItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // A brief delay to allow the video to load and start smoothly
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-['Cormorant Garamond',serif]">
      {/* Background Video Layer */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={imgVideo} type="video/mp4" />
      </video>
      
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-40" />
      
      {/* Main Content Area */}
      <div className="relative z-20 text-center px-6 md:px-12 py-16 w-full max-w-7xl mx-auto text-white">
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="flex flex-col items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Brand Tagline */}
              <motion.p
                className="text-lg md:text-xl font-light tracking-widest uppercase mb-4 opacity-80 drop-shadow-md"
                variants={itemVariants}
              >
                The Gentleman's Parlour
              </motion.p>
              
              {/* Main Heading with a luxurious thin font style */}
              <motion.h1
                className="text-5xl md:text-8xl font-thin leading-tight text-center mb-6 drop-shadow-lg"
                variants={itemVariants}
              >
                Timeless Style, Crafted for the Modern Man.
              </motion.h1>

              {/* Service Highlights with Lucide Icons and individual animations */}
              <motion.div
                className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-12"
                variants={iconGroupVariants}
              >
                {/* Precision Cuts Icon */}
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  variants={iconItemVariants}
                  whileHover={{ scale: 1.15, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scissors className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-md transition-all duration-300 group-hover:text-blue-300" />
                  <p className="mt-2 text-xs md:text-sm font-light tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">Precision Cuts</p>
                </motion.div>
                
                {/* Luxury Treatments Icon */}
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  variants={iconItemVariants}
                  whileHover={{ scale: 1.15, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-md transition-all duration-300 group-hover:text-blue-300" />
                  <p className="mt-2 text-xs md:text-sm font-light tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">Luxury Treatments</p>
                </motion.div>

                {/* Expert Grooming Icon */}
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  variants={iconItemVariants}
                  whileHover={{ scale: 1.15, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paintbrush className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-md transition-all duration-300 group-hover:text-blue-300" />
                  <p className="mt-2 text-xs md:text-sm font-light tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">Expert Grooming</p>
                </motion.div>
              </motion.div>
              
              {/* Call to Action Button with a modern hover effect */}
              <motion.button
                className="px-12 py-4 font-medium text-lg tracking-wider border border-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <span>Book Your Appointment</span>
                  <ChevronRight className="w-5 h-5 ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About />
    </div>
  )
}

export default HomePage;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import imgVideo from "../../img/hero2.mp4";
// import "../../styles/globals.css"; // Ensure this file exists with the CSS from the previous response
// import About from "../ui/About";

// const Hero = () => {
//   const texts = [
//     "Expert Haircuts & Styling",
//     "Luxury Skin Treatments",
//     "Signature Grooming Experience",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
//         crossOrigin="anonymous"
//         referrerPolicy="no-referrer"
//       />

//       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-['Montserrat',sans-serif] hero-section">
//         {/* Background Video (z-index: 0) */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src={imgVideo} type="video/mp4" />
//         </video>

//         {/* Content (z-index: 2, sits on top of the overlay) */}
//         <motion.div
//           className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto py-16 hero-content"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Brand Tagline */}
//           <div
//             className="inline-flex items-center px-6 py-2 rounded-full mb-6 font-medium text-sm tracking-wide"
//             style={{
//               background: "rgba(255, 255, 255, 0.15)",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//             }}
//           >
//             <span
//               className="w-2 h-2 rounded-full mr-2"
//               style={{ backgroundColor: "#4ade80" }}
//             ></span>
//             THE GENTLEMAN'S PARLOUR
//           </div>

//           {/* Rotating Heading (Updated with golden and white) */}
//           <AnimatePresence mode="wait">
//             <motion.h1
//               key={currentIndex}
//               className="font-['Cormorant Garamond',serif] text-4xl md:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//               style={{
//                 background: "linear-gradient(90deg, #FFFFFF 0%, #FFD700 50%, #B8860B 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               {texts[currentIndex]}
//             </motion.h1>
//           </AnimatePresence>

//           {/* Buttons with onClick handler */}
//           <div className="flex flex-wrap justify-center gap-6 mt-6">
//             <motion.button
//               className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base shadow-lg text-white"
//               style={{
//                 background: "linear-gradient(90deg, #2c3e50 0%, #3498db 100%)",
//               }}
//               whileHover={{
//                 y: -3,
//                 scale: 1.05,
//                 boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => console.log('Book Appointment button clicked!')}
//             >
//               <i className="fa-solid fa-calendar-check" /> Book Appointment
//             </motion.button>

//             <motion.button
//               className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white"
//               style={{
//                 background: "rgba(255, 255, 255, 0.15)",
//                 backdropFilter: "blur(10px)",
//                 border: "1px solid rgba(255, 255, 255, 0.25)",
//               }}
//               whileHover={{ background: "rgba(255, 255, 255, 0.25)" }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => console.log('View Our Work button clicked!')}
//             >
//               <i className="fa-solid fa-images" /> View Our Work
//             </motion.button>
//           </div>

//           {/* 3 Service Icons with onClick handler */}
//           <div className="flex justify-center gap-10 mt-16">
//             {[
//               { icon: "fa-scissors", text: "Hair Styling" },
//               { icon: "fa-spa", text: "Skin Care" },
//               { icon: "fa-crown", text: "Luxury Service" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="flex flex-col items-center text-center text-gray-100 cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 onClick={() => console.log(`${item.text} icon clicked!`)}
//               >
//                 <div
//                   className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl shadow-lg transition-all duration-300 ease-in-out"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                 >
//                   <i className={`fa-solid ${item.icon} text-white`} />
//                 </div>
//                 <div className="text-sm font-medium">{item.text}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };


// const HomePage = () => {
//   return (
//     <div>
//       <Hero/>
//       <About />
//     </div>
//   )
// }

// export default HomePage
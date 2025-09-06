import React, { useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, Star, MessageCircle } from "lucide-react";
import EnquiryModal from "../../ui/EnquiryModalForm";
import WhyChooseUs from "../../ui/WhyChoose2";
import CallModal from "../../ui/CallModal";

// Static data and variants extracted from the component.
const packageLinks = [
  "https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000",
  "https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg",
  "https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig",
  "https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp",
  "https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp",
];
const allPackages = [
  {
    name: "Executive Facial",
    type: "Classic",
    desc: "A deep-cleansing facial for a refreshed look.",
    price: "₹1,200",
    rating: 4.8,
  },
  {
    name: "Hydrating Boost",
    type: "Treatment",
    desc: "Intensive moisturizing facial to combat dry skin.",
    price: "₹1,500",
    rating: 4.9,
  },
  {
    name: "Acne Control Facial",
    type: "Problematic Skin",
    desc: "Targets blemishes and breakouts with purifying ingredients.",
    price: "₹1,800",
    rating: 4.7,
  },
  {
    name: "Anti-Aging Facial",
    type: "Luxury",
    desc: "Reduces fine lines and promotes youthful skin.",
    price: "₹2,500",
    rating: 5.0,
  },
  {
    name: "Gentleman's Glow",
    type: "Classic",
    desc: "Deep cleanse, exfoliation, and a refreshing mask.",
    price: "₹1,000",
    rating: 4.6,
  },
  {
    name: "Back Facial",
    type: "Treatment",
    desc: "A cleansing and exfoliating treatment for the back.",
    price: "₹1,600",
    rating: 4.8,
  },
  {
    name: "Organic Facial",
    type: "Natural",
    desc: "Uses all-natural products for sensitive skin.",
    price: "₹1,400",
    rating: 4.9,
  },
  {
    name: "Microdermabrasion",
    type: "Advanced",
    desc: "Exfoliates to remove dead skin cells and improve texture.",
    price: "₹3,000",
    rating: 5.0,
  },
];
const portfolioImages = [
  "https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000",
  "https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg",
  "https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig",
  "https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp",
];
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0px 25px 60px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};
const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
};

// Memoized components.
const MemoizedEnquiryModal = memo(EnquiryModal);
const MemoizedCallModal = memo(CallModal);

// --- Section 1: Skin Service Hero ---
const SkinServiceHero = memo(({ onShowEnquiry }) => {
  const [showCallModal, setShowCallModal] = useState(false);
  const randomImage = useMemo(
    () => packageLinks[Math.floor(Math.random() * packageLinks.length)],
    []
  );
  const handleShowCall = useCallback(() => setShowCallModal(true), []);
  const handleCloseCall = useCallback(() => setShowCallModal(false), []);

  return (
    <>
      <style>{`
        @keyframes continuous-border-move {
          0%, 100% { top: 0; left: 0; width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); transform: none; }
          25% { top: 0; left: calc(100% - 80px); width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); transform: none; }
          25.1% { top: 0; left: calc(100% - 4px); width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); transform-origin: top center; }
          50% { top: calc(100% - 80px); left: calc(100% - 4px); width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); transform-origin: top center; }
          50.1% { top: calc(100% - 4px); left: calc(100% - 80px); width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); transform-origin: right center; }
          75% { top: calc(100% - 4px); left: 0; width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); transform-origin: right center; }
          75.1% { top: calc(100% - 80px); left: 0; width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); transform-origin: bottom center; }
          100% { top: 0; left: 0; width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); transform-origin: bottom center; }
        }
        .animated-border-container-image {
          position: relative; overflow: hidden; border-radius: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.1); padding: 3px;
        }
        .animated-border-container-image::after {
          content: ''; position: absolute; animation: continuous-border-move 10s linear infinite;
        }
      `}</style>
      <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#1a1c24] font-inter text-white">
        <motion.div
          className="w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl"
          variants={containerVariants}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              className="inline-flex items-center justify-center lg:justify-start bg-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-5 mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <Sparkles size={16} className="mr-2 text-yellow-500" />
              Advanced Skin Care
            </motion.div>
            <motion.h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              variants={itemVariants}
            >
              Revitalize Your <br className="hidden lg:inline" />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skin
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-base sm:text-lg mb-8"
              variants={itemVariants}
            >
              Discover our signature skin treatments, including revitalizing
              facials, deep cleansing, and rejuvenating masks for a healthy,
              glowing complexion.
            </motion.p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 sm:gap-16 mb-8">
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-3xl font-bold text-white">20+</h2>
                <span className="text-sm text-gray-500">Years Experience</span>
              </motion.div>
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-3xl font-bold text-white">100%</h2>
                <span className="text-sm text-gray-500">
                  Client Satisfaction
                </span>
              </motion.div>
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="text-3xl font-bold text-white">1000+</h2>
                <span className="text-sm text-gray-500">Happy Clients</span>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, #FF9800 0%, #FFD700 100%)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onShowEnquiry}
              >
                <MessageCircle size={20} className="mr-2" /> Enquiry
              </motion.button>
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700"
                whileHover={{
                  scale: 1.05,
                  background: "#2c3e50",
                  boxShadow: "0 0 20px rgba(44, 62, 80, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowCall}
              >
                <Phone size={20} className="mr-2" /> Call Now
              </motion.button>
            </div>
          </div>
          <motion.div
            className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full"
            variants={itemVariants}
          >
            <div className="relative w-full h-[450px] animated-border-container-image">
              <img
                src={randomImage}
                alt="A man receiving a facial treatment in a modern, professional setting"
                className="w-full h-full rounded-3xl shadow-2xl block object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                <Star
                  size={20}
                  className="mr-2 text-yellow-400"
                  fill="currentColor"
                />
                <div>
                  4.9/5 <br /> Client Rating
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <MemoizedCallModal show={showCallModal} onClose={handleCloseCall} />
    </>
  );
});

// Memoized component.
const PackageCard = memo(({ packageInfo, onBookNow }) => {
  const randomImage = useMemo(
    () => packageLinks[Math.floor(Math.random() * packageLinks.length)],
    []
  );
  return (
    <motion.div
      className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl cursor-pointer bg-white backdrop-blur-xl border border-gray-200 group card-with-gradient-border"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <img
        src={randomImage}
        alt={packageInfo.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 text-white z-10">
        <h3 className="text-2xl font-bold drop-shadow-md">
          {packageInfo.name}
        </h3>
        <p className="text-sm opacity-80 mt-2">{packageInfo.desc}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">{packageInfo.price}</span>
          <div className="flex text-yellow-400">
            {[...Array(Math.floor(packageInfo.rating))].map((_, starIndex) => (
              <Star key={starIndex} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-white z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.4 } }}
      >
        <div className="flex gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookNow}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Memoized component.
const SignaturePackages = memo(({ onShowEnquiry }) => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white font-inter">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Signature Treatments
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Revitalize your skin with our exclusive and effective treatments.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {allPackages.map((pkg) => (
            <PackageCard key={pkg.name} packageInfo={pkg} onBookNow={onShowEnquiry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

// Memoized component.
const PhotoGallery = memo(() => {
  return (
    <section className="bg-white text-black py-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of our finest work, showcasing precision and style.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {portfolioImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer"
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

// Memoized main component.
const CombinedSkinServicePage = memo(() => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const handleShowEnquiry = useCallback(() => setShowEnquiryModal(true), []);
  const handleCloseEnquiry = useCallback(() => setShowEnquiryModal(false), []);

  return (
    <>
      <SkinServiceHero onShowEnquiry={handleShowEnquiry} />
      <SignaturePackages onShowEnquiry={handleShowEnquiry} />
      <WhyChooseUs />
      <PhotoGallery />
      <MemoizedEnquiryModal isOpen={showEnquiryModal} onClose={handleCloseEnquiry} />
    </>
  );
});

export default CombinedSkinServicePage;

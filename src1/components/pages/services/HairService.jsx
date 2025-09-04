    import React, { useEffect, useRef, useState } from 'react';
    import { motion, useScroll, useTransform, useInView } from 'framer-motion';
    import { Sparkles, Scissors, Phone, Star, MessageCircle, Crown, Droplet, User, Award, Check, Search } from 'lucide-react';

    // --- Section 1: Hair Service Hero ---
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

    const HairServiceHero = () => {
          const [showEnquiryModal, setShowEnquiryModal] = useState(false);
          const [showCallModal, setShowCallModal] = useState(false);
    return (
        <>
        {/* Border Animation Styles */}
        <style>{`
            @keyframes continuous-border-move {
            0%, 100% { top: 0; left: 0; width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); transform: none; }
            25% { top: 0; left: calc(100% - 80px); width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); }
            25.1% { top: 0; left: calc(100% - 4px); width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); }
            50% { top: calc(100% - 80px); left: calc(100% - 4px); width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); }
            50.1% { top: calc(100% - 4px); left: calc(100% - 80px); width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); }
            75% { top: calc(100% - 4px); left: 0; width: 80px; height: 4px; background: linear-gradient(90deg, transparent, #FFD700); }
            75.1% { top: calc(100% - 80px); left: 0; width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); }
            100% { top: 0; left: 0; width: 4px; height: 80px; background: linear-gradient(180deg, transparent, #FFD700); }
            }
            .animated-border-container-image {
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 3px;
            }
            .animated-border-container-image::after {
            content: '';
            position: absolute;
            animation: continuous-border-move 10s linear infinite;
            }
        `}</style>

        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#1a1c24] font-inter text-white">
            <motion.div
            className="w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl"
            variants={containerVariants}
            // initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            >
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center text-center lg:text-left">
                <motion.div
                className="inline-flex items-center justify-center lg:justify-start bg-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-5 mx-auto lg:mx-0"
                variants={itemVariants}
                >
                <Sparkles size={16} className="mr-2 text-yellow-500" />
                Professional Hair Services
                </motion.div>

                <motion.h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                variants={itemVariants}
                >
                Redefine Your{" "}
                <span
                    style={{
                    background: "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    }}
                >
                    Hairstyle
                </span>
                </motion.h1>

                <motion.p
                className="text-gray-400 text-base sm:text-lg mb-8"
                variants={itemVariants}
                >
                From trendy cuts to luxurious treatments, our expert stylists
                provide personalized hair services that enhance your look and
                confidence.
                </motion.p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-10 sm:gap-16 mb-8">
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                >
                    <h2 className="text-3xl font-bold text-white">15+</h2>
                    <span className="text-sm text-gray-500">Years Expertise</span>
                </motion.div>
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                >
                    <h2 className="text-3xl font-bold text-white">5000+</h2>
                    <span className="text-sm text-gray-500">Hair Makeovers</span>
                </motion.div>
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                >
                    <h2 className="text-3xl font-bold text-white">98%</h2>
                    <span className="text-sm text-gray-500">Client Retention</span>
                </motion.div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                              <motion.button onClick={() => setShowEnquiryModal(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all" style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }} whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }} whileTap={{ scale: 0.95 }}>
                                <MessageCircle size={20} className="mr-2" /> Enquiry
                              </motion.button>
                              <motion.button onClick={() => setShowCallModal(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700" style={{ background: 'linear-gradient(90deg, #3498db 0%, #2c3e50 100%)' }} whileHover={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }} whileTap={{ scale: 0.95 }}>
                                <Phone size={20} className="mr-2" /> Call Now
                              </motion.button>
                            </div>
            </div>

            {/* Right Image */}
            <motion.div
                className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full"
                variants={itemVariants}
            >
                <div className="relative w-full h-[450px] animated-border-container-image">
                <img
                    src="https://www.ypsed.ru/image/catalog/001/mug-obl08.jpg"
                    alt="Professional hairstylist working on client’s hair"
                    className="w-full h-full rounded-3xl shadow-2xl block object-cover"
                />

                {/* Client Rating Overlay */}
                <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                    <Star
                    size={20}
                    className="mr-2 text-yellow-400"
                    fill="currentColor"
                    />
                    <div>
                    4.8/5 <br /> Client Reviews
                    </div>
                </div>
                </div>
            </motion.div>
            </motion.div>
        </section>
        <EnquiryModal show={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
      <CallModal show={showCallModal} onClose={() => setShowCallModal(false)} />
        </>
    );
    };


    // --- Data for Packages ---
    const allPackages = [
        { name: "Executive Cut & Style", type: "Hair Cut", category: "Classic", desc: "Expert haircut, wash, and professional style.", price: "₹800", rating: 4.8, img: "https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75" },
        { name: "Classic Clean Shave", type: "Beard Style", category: "Clean", desc: "Hot towel, precise razor shave, and aftershave balm.", price: "₹600", rating: 4.7, img: "https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg" },
        { name: "The Royal Treatment", type: "Hair Cut", category: "Luxury", desc: "Full haircut, beard trim, deep cleanse, and facial.", price: "₹2,500", rating: 4.9, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200" },
        { name: "Beard Sculpt & Trim", type: "Beard Style", category: "Sculpt", desc: "Shaping, trimming, and styling for a sharp beard.", price: "₹750", rating: 4.8, img: "https://sk-myata.ru/img/slide/slide-27.jpg" },
        { name: "Hair & Scalp Detox", type: "Hair Care", category: "Treatment", desc: "Revitalizing treatment for healthy hair and scalp.", price: "₹1,200", rating: 4.6, img: "https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg" },
        { name: "Crew Cut with Fade", type: "Hair Cut", category: "Fade", desc: "Classic crew cut with a modern, clean fade.", price: "₹900", rating: 4.9, img: "https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp" },
        { name: "Signature Hair Color", type: "Hair Care", category: "Color", desc: "Professional hair coloring tailored to your style.", price: "₹1,800", rating: 4.7, img: "https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL" },
        { name: "Kids' Haircut", type: "Hair Cut", category: "Kids", desc: "Safe and stylish haircuts for children.", price: "₹500", rating: 4.5, img: "https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75" },
        { name: "Luxury Hot Towel Shave", type: "Beard Style", category: "Luxury", desc: "A deluxe shave with aromatic hot towels and balms.", price: "₹950", rating: 5.0, img: "https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg" },
        { name: "The Corporate Trim", type: "Hair Cut", category: "Classic", desc: "A neat, professional haircut for the office.", price: "₹700", rating: 4.6, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200" },
        { name: "Precision Buzz Cut", type: "Hair Cut", category: "Clean", desc: "A perfectly even buzz cut with a sharp finish.", price: "₹400", rating: 4.7, img: "https://sk-myata.ru/img/slide/slide-27.jpg" },
        { name: "Beard Contouring", type: "Beard Style", category: "Sculpt", desc: "Expert shaping to define your jawline.", price: "₹850", rating: 4.9, img: "https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg" },
        { name: "Facial for Men", type: "Skin Care", category: "Treatment", desc: "A deep cleansing and rejuvenating facial treatment.", price: "₹1,500", rating: 4.8, img: "https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp" },
        { name: "Hair & Beard Combo", type: "Combo", category: "All", desc: "A complete grooming package for hair and beard.", price: "₹1,400", rating: 4.9, img: "https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL" },
        { name: "Senior Citizen's Cut", type: "Hair Cut", category: "Classic", desc: "A comfortable and respectful haircut for seniors.", price: "₹600", rating: 4.5, img: "https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75" },
        { name: "High & Tight Fade", type: "Hair Cut", category: "Fade", desc: "A sharp and clean military-inspired fade cut.", price: "₹950", rating: 4.8, img: "https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg" },
        { name: "Long Hair Styling", type: "Hair Cut", category: "Styling", desc: "Professional wash and styling for long hair.", price: "₹1,000", rating: 4.7, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200" },
        { name: "Mustache Trim & Style", type: "Beard Style", category: "Clean", desc: "A quick and precise trim for your mustache.", price: "₹300", rating: 4.6, img: "https://sk-myata.ru/img/slide/slide-27.jpg" },
        { name: "Deep Conditioning Treatment", type: "Hair Care", category: "Treatment", desc: "Restores moisture and shine to dry hair.", price: "₹1,100", rating: 4.8, img: "https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg" },
        { name: "Eyebrow Grooming", type: "Skin Care", category: "Treatment", desc: "Tidy up your look with professional eyebrow shaping.", price: "₹450", rating: 4.5, img: "https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp" },
        { name: "Shape Up & Line Up", type: "Hair Cut", category: "Clean", desc: "A sharp, clean line up to define your haircut.", price: "₹500", rating: 4.7, img: "https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL" },
        { name: "The Dapper Gentleman", type: "Combo", category: "Luxury", desc: "Haircut, shave, facial, and head massage.", price: "₹3,500", rating: 5.0, img: "https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75" },
        { name: "Kids' First Haircut", type: "Hair Cut", category: "Kids", desc: "A memorable and gentle first haircut experience.", price: "₹600", rating: 4.9, img: "https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg" },
        { name: "The Silver Fox Trim", type: "Beard Style", category: "Classic", desc: "Specialized trim for gray and silver beards.", price: "₹700", rating: 4.8, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200" },
        { name: "Keratin Hair Treatment", type: "Hair Care", category: "Treatment", desc: "Reduces frizz and straightens hair.", price: "₹2,800", rating: 4.7, img: "https://sk-myata.ru/img/slide/slide-27.jpg" },
        { name: "Clean Up & Go", type: "Hair Cut", category: "Quick", desc: "A quick trim of the neck and around the ears.", price: "₹350", rating: 4.6, img: "https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg" },
        { name: "Beard Dye Service", type: "Beard Style", category: "Color", desc: "Professional beard coloring for a consistent look.", price: "₹1,000", rating: 4.5, img: "https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp" },
        { name: "The Razor Fade", type: "Hair Cut", category: "Fade", desc: "A sharp, zero-blade fade with a razor finish.", price: "₹1,100", rating: 4.9, img: "https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL" },
        { name: "Anti-Dandruff Treatment", type: "Hair Care", category: "Treatment", desc: "Scalp treatment to combat dandruff.", price: "₹1,300", rating: 4.8, img: "https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75" },
        { name: "Complete Beard Makeover", type: "Beard Style", category: "Sculpt", desc: "Full beard trim, contouring, and styling.", price: "₹1,200", rating: 5.0, img: "https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg" },
    ];

    const filters = ["All", "Hair Cut", "Beard Style", "Hair Care", "Skin Care", "Combo"];

    // New Card Component to match the provided UI
    const PackageCard = ({ packageInfo, index }) => {
        const cardVariants = {
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100
                }
            },
        };

        return (
            <motion.div
                className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="relative w-full h-48 overflow-hidden">
                    <img
                        src={packageInfo.img}
                        alt={packageInfo.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 flex items-center">
                        <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" />
                        {packageInfo.rating}
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {packageInfo.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{packageInfo.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{packageInfo.desc}</p>
                    <div className="mt-auto flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                        <div>
                            <span className="text-sm text-gray-500">Price</span>
                            <p className="text-2xl font-bold text-gray-900">{packageInfo.price}</p>
                        </div>
                        <motion.button
                            className="px-6 py-3 rounded-full font-semibold text-white shadow-lg"
                            style={{ background: "linear-gradient(90deg, #FF9800 0%, #FFD700 100%)" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Now
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        );
    };

    // --- Modal Components ---
    
    const EnquiryModal = ({ show, onClose }) => {
        if (!show) return null;
    
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
                <div className="bg-[#21242c] text-white rounded-xl p-8 max-w-lg w-full relative border border-gray-700 shadow-2xl">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Enquire Now</h2>
                    <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 font-medium mb-1">Name</label>
                            <input type="text" id="name" className="w-full bg-zinc-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 font-medium mb-1">Email</label>
                            <input type="email" id="email" className="w-full bg-zinc-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-300 font-medium mb-1">Phone</label>
                            <input type="tel" id="phone" className="w-full bg-zinc-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 font-medium mb-1">Message</label>
                            <textarea id="message" rows="4" className="w-full bg-zinc-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-xl font-semibold text-lg transition-all"
                            style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }}
                        >
                            Send Enquiry
                        </button>
                    </form>
                </div>
            </div>
        );
    };
    
    const CallModal = ({ show, onClose }) => {
        if (!show) return null;
    
        return (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
                <div className="bg-[#21242c] text-white rounded-xl p-8 max-w-sm w-full relative border border-gray-700 shadow-2xl text-center">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <Phone size={48} className="text-yellow-400 mb-4 mx-auto" />
                    <h2 className="text-2xl font-bold mb-2">Call Now</h2>
                    <p className="text-gray-400 mb-4">You can reach us at:</p>
                    <a href="tel:+1234567890" className="text-3xl font-bold text-yellow-400 hover:underline">+1 (234) 567-890</a>
                    <p className="text-sm text-gray-500 mt-2">Tap the number to call directly.</p>
                </div>
            </div>
        );
    };
    
    // --- Section 1: Makeup Service (Hero Section) ---
    const MakeupServiceHero = () => {
      const [showEnquiryModal, setShowEnquiryModal] = useState(false);
      const [showCallModal, setShowCallModal] = useState(false);
    
      const containerVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      };
    
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
          <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#21242c] font-inter text-white">
            <motion.div
              className="w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center text-center lg:text-left">
                <motion.div className="inline-flex items-center justify-center lg:justify-start bg-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-5 mx-auto lg:mx-0" variants={itemVariants}>
                  <Sparkles size={16} className="mr-2 text-yellow-500" />
                  Professional Makeup
                </motion.div>
                <motion.h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" variants={itemVariants}>
                  Elevate Your <br className="hidden lg:inline" />
                  <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Look</span>
                </motion.h1>
                <motion.p className="text-gray-400 text-base sm:text-lg mb-8" variants={itemVariants}>
                  Our professional makeup artists offer personalized application, from natural everyday looks to stunning, camera-ready transformations for any occasion.
                </motion.p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-10 sm:gap-16 mb-8">
                  <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                    <h2 className="text-3xl font-bold text-white">20+</h2>
                    <span className="text-sm text-gray-500">Years Experience</span>
                  </motion.div>
                  <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                    <h2 className="text-3xl font-bold text-white">100%</h2>
                    <span className="text-sm text-gray-500">Client Satisfaction</span>
                  </motion.div>
                  <motion.div className="text-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                    <h2 className="text-3xl font-bold text-white">1000+</h2>
                    <span className="text-sm text-gray-500">Happy Clients</span>
                  </motion.div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <motion.button onClick={() => setShowEnquiryModal(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all" style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }} whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }} whileTap={{ scale: 0.95 }}>
                    <MessageCircle size={20} className="mr-2" /> Enquiry
                  </motion.button>
                  <motion.button onClick={() => setShowCallModal(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700" style={{ background: 'linear-gradient(90deg, #3498db 0%, #2c3e50 100%)' }} whileHover={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }} whileTap={{ scale: 0.95 }}>
                    <Phone size={20} className="mr-2" /> Call Now
                  </motion.button>
                </div>
              </div>
              <motion.div className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full" variants={itemVariants}>
                <div className="relative w-full h-[450px] animated-border-container-image">
                  <img src="https://ua.cosmohit.ua/uploadfiles/fckeditor/muzhskoy-makiyazh-1.jpg" alt="A professional makeup artist applying makeup to a client" className="w-full h-full rounded-3xl shadow-2xl block object-cover" />
                  <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                    <Star size={20} className="mr-2 text-yellow-400" fill="currentColor" />
                    <div>4.9/5 <br /> Client Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>
    
          <EnquiryModal show={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
          <CallModal show={showCallModal} onClose={() => setShowCallModal(false)} />
        </>
      );
    };
    


    // --- Section 2: Signature Packages with Filters ---
    const SignaturePackages = () => {
        const [selectedFilter, setSelectedFilter] = useState("All");
        const [searchQuery, setSearchQuery] = useState("");
        const [filteredPackages, setFilteredPackages] = useState(allPackages);

        useEffect(() => {
            let newFilteredPackages = allPackages;

            // Apply filter
            if (selectedFilter !== "All") {
                newFilteredPackages = newFilteredPackages.filter(pkg =>
                    pkg.type === selectedFilter
                );
            }

            // Apply search query
            if (searchQuery) {
                newFilteredPackages = newFilteredPackages.filter(pkg =>
                    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    pkg.desc.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setFilteredPackages(newFilteredPackages);
        }, [selectedFilter, searchQuery]);

        const handleFilterClick = (filter) => {
            setSelectedFilter(filter);
        };

        return (
            <section className="relative py-20 px-6 overflow-hidden bg-white font-inter">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Our Packages
                </span>
                        <motion.h2
                            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our Signature Services
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Premium grooming designed for the modern gentleman.
                        </motion.p>
                    </div>

                    {/* Filter & Search Section */}
                    <motion.div
                        className="sticky top-4 z-20 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-100/90 backdrop-blur-lg rounded-full p-2 shadow-xl mx-auto max-w-5xl transition-all duration-300"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    >
                        <div className="relative w-full md:w-auto flex items-center bg-white rounded-full px-4 py-3 flex-grow shadow-inner">
                            <Search size={20} className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2 md:w-auto w-full">
                            {filters.map(filter => (
                                <motion.button
                                    key={filter}
                                    className={`px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedFilter === filter ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
                                    onClick={() => handleFilterClick(filter)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {filter}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Packages Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {filteredPackages.map((pkg, index) => (
                            <PackageCard key={pkg.name} packageInfo={pkg} index={index} />
                        ))}
                    </motion.div>
                    {filteredPackages.length === 0 && (
                        <div className="text-center text-gray-500 mt-12">
                            No packages found matching your criteria.
                        </div>
                    )}
                </div>
            </section>
        );
    };

    // =====================
    // Counter Component with useInView
    // =====================
    const AnimatedCounter = ({ value, label, delay }) => {
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
    };

    // =====================
    // Why Choose Us + Counter Section
    // =====================
    const WhyChooseUs = () => {
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
    };

    // --- Section 4: Photo Gallery (New Grid Layout) ---
    const PhotoGallery = () => {
        const images = [
            'https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75',
            'https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200',
            'https://sk-myata.ru/img/slide/slide-27.jpg',
            'https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg',
            'https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp',
            'https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL'
        ];

        const styleNames = [
            "Executive Cut", "Classic Fade", "Beard Sculpt", "The Royal Shave", "Sharp Line-Up", "Modern Crew", "Signature Color"
        ];

        const imageVariants = {
            initial: { opacity: 0, scale: 0.8, rotate: -5 },
            inView: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } }
        };

        return (
            <section className="bg-white text-black py-20 px-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Photos Bunch
                </span>
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
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer"
                            variants={imageVariants}
                            initial="initial"
                            whileInView="inView"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
                        >
                            <img
                                src={img}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center backdrop-blur-sm">
                                <h3 className="text-white text-2xl font-bold">{styleNames[index % styleNames.length]}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        );
    };

    // --- Main Combined Component ---
    const CombinedHairServicePage = () => {
        return (
            <>
                <HairServiceHero />
                <SignaturePackages />
                <WhyChooseUs />
                <PhotoGallery />
            </>
        );
    };

    export default CombinedHairServicePage;
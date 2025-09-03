"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useAnimation } from 'framer-motion';
import {
    Heart, Eye, Play, Film, GalleryHorizontal, Award, Trophy, Users, Star,
    Car, Zap, Gem, Shield, Crown, Sun, Moon, ArrowUp, X
} from 'lucide-react';
import ThemeChanger from '../ui/ThemeChanger';
import StillQuestionsSection from '../ui/StillHaveQuestion';
import Gallerywhy from '../ui/Gallerywhy';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Testimonials from '../ui/Testimonial'

// --- New Animated Slider Component ---
const AutoAnimatedSlider = ({ videos, theme, onVideoClick }) => {
    const gradientClass = theme === 'dark' ? 'from-yellow-500 to-orange-500' : 'from-yellow-400 to-orange-400';

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 },
        },
    };

    return (
        <div className={`py-16 px-4 md:px-8 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
            <style jsx>{`
                .gradient-ring {
                    position: relative;
                    overflow: hidden;
                    border-radius: 1.5rem; /* rounded-3xl */
                }
                .gradient-ring::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(90deg, #facc15, #fb923c);
                    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
            `}</style>
            <div className={`max-w-7xl mx-auto relative p-6 md:p-10 rounded-3xl shadow-2xl transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <motion.h2
                    className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${gradientClass}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Quick Reels
                </motion.h2>
                <motion.p
                    className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A collection of our favorite short-form videos.
                </motion.p>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: { slidesPerView: 1.6 },
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 3.1 },
                    }}
                    loop
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={3800}
                    className="pb-6"
                >
                    {videos.map((video, index) => {
                        const videoId = video.split('/').pop();
                        return (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="gradient-ring rounded-xl h-[560px] w-80 mx-auto cursor-pointer
                                               transition-all duration-400 ease-out
                                               hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/15"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    onClick={() => onVideoClick(video)}
                                >
                                    <iframe
                                        className="w-full h-full rounded-2xl"
                                        src={`${video}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                                        title={`YouTube video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

// --- New Our Story Component ---
const OurStory = ({ theme }) => {
    const storyPoints = [
        { year: 2010, title: "Founded with a Vision", desc: "Our journey began with a single chair and a commitment to excellence.", icon: Crown },
        { year: 2014, title: "Expanded Services", desc: "We introduced new services, from advanced skincare to professional makeovers.", icon: Gem },
        { year: 2018, title: "Award-Winning Team", desc: "Our team received recognition for creativity and client satisfaction.", icon: Award },
        { year: 2022, title: "Our First Salon", desc: "We opened our flagship location, designed to be a sanctuary of style.", icon: Car },
        { year: 2025, title: "Global Recognition", desc: "Featured in leading magazines, we are now a destination for beauty.", icon: Trophy },
    ];

    const controls = useAnimation();
    const timelineRef = useRef(null);
    const inView = useInView(timelineRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    const gradientClass = theme === 'dark' ? 'from-yellow-500 to-orange-500' : 'from-yellow-400 to-orange-400';

    const storyContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const storyItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <section className={`py-16 px-4 md:px-8 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="max-w-5xl mx-auto text-center">
                <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Our Journey
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Story</h2>
                <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>A journey of passion, creativity, and dedication.</p>
                <motion.div
                    ref={timelineRef}
                    className="relative flex flex-col items-center"
                    variants={storyContainerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent z-0"></div>
                    {storyPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center w-full my-8 relative z-10`}
                            variants={storyItemVariants}
                        >
                            <div className={`md:w-1/2 md:pr-12 text-center md:text-right ${index % 2 !== 0 ? 'md:order-1 md:text-left md:pl-12' : ''}`}>
                                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{point.title}</h3>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{point.desc}</p>
                            </div>
                            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border-4 border-yellow-500">
                                <point.icon className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div className={`md:w-1/2 md:pl-12 text-center md:text-left ${index % 2 !== 0 ? 'md:order-0 md:text-right md:pr-12' : ''}`}>
                                <h4 className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${gradientClass}`}>{point.year}</h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


const Gallery = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: true, amount: 0.5 });
    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 500], [0, -200]);

    // State for the pop-up image
    const [selectedImage, setSelectedImage] = useState(null);
    // State for the pop-up video
    const [selectedVideo, setSelectedVideo] = useState(null);

    const galleryImages = [
        { src: 'https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg', className: 'col-span-2 row-span-2' },
        { src: 'https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig', className: '' },
        { src: 'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp', className: 'row-span-2' },
        { src: 'https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp', className: 'col-span-2' },
        { src: 'https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL', className: '' },
        { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200', className: 'row-span-2' },
        { src: 'https://sk-myata.ru/img/slide/slide-27.jpg', className: '' },
        { src: 'https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75', className: 'col-span-2' },
        { src: 'https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg', className: '' },
        { src: 'https://blog.clover.com/wp-content/uploads/2024/03/barber-shaving-customer-with-straight-razor.jpg', className: '' },
        { src: 'https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000', className: 'col-span-2 row-span-2' },
        { src: 'https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg', className: '' },
        { src: 'https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig', className: 'row-span-2' },
        { src: 'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp', className: 'col-span-2' },
        { src: 'https://img.grouponcdn.com/bynder/3yVmdamquoQej7rcgUNpo1bBXFeS/3y-2048x1229/v1/t4200x2544.webp', className: '' },
        { src: 'https://avatars.mds.yandex.net/get-altay/10156117/2a0000018b6ae2016bc50d00a6994a5cb21f/XXXL', className: 'row-span-2' },
        { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fe/3a/64/caption.jpg?w=1200', className: '' },
        { src: 'https://sk-myata.ru/img/slide/slide-27.jpg', className: 'col-span-2' },
        { src: 'https://dce0b408-c951-4bea-96e5-3180fc41c3e8.selcdn.net/_next/image?url=https%3A%2F%2Fdefst1.gilmon.ru%2Fresources%2Ffs%2Fi%2Fshares%2F97%2F15%2F9715_large_1626958734.jpg&w=3840&q=75', className: '' },
        { src: 'https://www.r-ulybka.ru/upload/iblock/67f/67fdb6b55b83335feaf3fff4bcb1d190.jpg', className: '' },
    ];

    const videoLinks = [
        'https://www.youtube.com/embed/_DwcXVi0ugo',
        'https://www.youtube.com/embed/-2ilXbquols',
        'https://www.youtube.com/embed/nL7P2o3J5qE?si=jM28hF7X_lC3O-zC',
        'https://www.youtube.com/embed/bL6t11Jt950?si=L3TjV6P-oV51F7k',
    ];
    
    const shortVideos = [
        'https://www.youtube.com/embed/AC_7D3E9wNY',
        'https://www.youtube.com/embed/oJbC-7y943w',
        'https://www.youtube.com/embed/q_mYhB3dC3M',
        'https://www.youtube.com/embed/oP26oWvB7eE',
        'https://www.youtube.com/embed/vA2g-iJt4tM'
    ];
    
    const colors = theme === 'dark' ? {
        bg: "bg-gray-950",
        text: "text-gray-200",
        secondaryText: "text-gray-400",
        primaryAccent: "text-yellow-400",
        secondaryAccent: "text-teal-400",
        sectionBg: "bg-gray-900",
        button: "bg-yellow-500 hover:bg-yellow-600 text-white",
    } : {
        bg: "bg-white",
        text: "text-gray-900",
        secondaryText: "text-gray-600",
        primaryAccent: "text-yellow-600",
        secondaryAccent: "text-teal-600",
        sectionBg: "bg-gray-100",
        button: "bg-yellow-500 hover:bg-yellow-600 text-white",
    };

    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen ${colors.bg} ${colors.text} font-sans overflow-x-hidden transition-colors duration-500 relative`}>
            <ThemeChanger theme={theme} toggleTheme={toggleTheme} />

            {/* Image Pop-up Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Pop-up Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.button
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                            onClick={() => setSelectedVideo(null)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.div
                            className="w-full h-full max-w-4xl aspect-video rounded-lg shadow-2xl overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src={`${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Hero Section with Parallax */}
            <motion.section
                ref={heroRef}
                className={`relative flex flex-col items-center justify-center min-h-[50vh] text-center p-8 overflow-hidden`}
            >
                <motion.div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1520696342898-1f190d635c05?q=80&w=1935&auto=format&fit=crop')`,
                        y: parallaxY
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Our Masterpieces
                    </motion.h1>
                    <motion.p
                        className={`text-xl md:text-2xl mb-8 opacity-80 ${colors.secondaryText}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A visual journey through our finest work and unforgettable moments.
                    </motion.p>
                    <motion.button
                        className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${colors.button}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Gallery
                    </motion.button>
                </div>
            </motion.section>
            
            {/* Photo Gallery Section */}
            <section className={`py-16 px-4 md:px-8 ${colors.sectionBg}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                        Our Portfolio
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${colors.text}`}>Photo Gallery</h2>
                    <p className={`text-center text-lg mb-12 ${colors.secondaryText}`}>Capture your moments in perfect light.</p>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`relative overflow-hidden rounded-lg shadow-xl ${image.className} cursor-pointer group`}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8, y: 50 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                                }}
                                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                                <div className={`absolute inset-0 bg-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm`}>
                                    <Eye size={36} className="text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <OurStory theme={theme} />

            <div className='text-center mt-16'>
                <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Why Us?
                </span>
            </div>
            <Gallerywhy />

            {/* Videos Section */}
            <section className={`py-16 px-4 md:px-8 ${colors.bg}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                        Our Vision
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${colors.text}`}>Video Showcase</h2>
                    <p className={`text-center text-lg mb-12 ${colors.secondaryText}`}>Watch our creative process and final results.</p>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        {videoLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl"
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                                <iframe
                                    src={link}
                                    title={`YouTube video player ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Reels Section (Horizontal Slider) */}
            <AutoAnimatedSlider videos={shortVideos} theme={theme} onVideoClick={setSelectedVideo} />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${colors.button} text-white`}
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Still Questions Section with new header */}
            <div className='text-center mt-16'>
                <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Get in Touch
                </span>
            </div>
            <StillQuestionsSection />
            <Testimonials/>

            {/* GalleryWhy Section with new header */}
            
            
        </div>
    );
};

export default Gallery;
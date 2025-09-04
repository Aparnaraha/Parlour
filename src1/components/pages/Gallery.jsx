"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Heart, Eye, Play, Film, GalleryHorizontal, Award, Trophy, Users, Star,
    Car, Zap, Gem, Shield, Crown, Sun, Moon, ArrowUp, X
} from 'lucide-react';
import StillQuestionsSection from '../ui/StillHaveQuestion';
import Testimonials from '../ui/Testimonial'
import Gallerywhy from '../ui/Gallerywhy'

// Using a single file structure, the components are defined here.
const ThemeChanger = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';
    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-8 left-8 p-3 rounded-full shadow-lg z-50 transition-colors duration-300 ${
                isDark ? 'bg-gray-800 text-yellow-500' : 'bg-white text-gray-900'
            }`}
        >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
};


// --- Refactored Animated Slider Component ---
const AutoAnimatedSlider = ({ videos, theme, onVideoClick }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId;
        const speed = 0.5;
        let lastTimestamp = 0;

        const animate = (timestamp) => {
            if (lastTimestamp === 0) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            const scrollAmount = speed * deltaTime / 1000 * 60;
            slider.scrollLeft += scrollAmount;

            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const sliderColors = theme === 'dark' ? 'bg-gray-950 text-gray-200' : 'bg-white text-gray-900';

    return (
        <div className={`py-16 px-4 md:px-8 relative overflow-hidden ${sliderColors}`}>
            <div className={`text-center max-w-7xl mx-auto relative p-6 md:p-10 rounded-3xl transition-all duration-500`}>
                <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Our Reels
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Reels Showcase</h2>
                <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Watch our Reels and process and see results you will get.
                </p>
                <div
                    ref={sliderRef}
                    className="flex overflow-x-hidden space-x-6 md:space-x-8 pb-6"
                >
                    {videos.map((video, index) => {
                        const videoId = video.split('/').pop();
                        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1`;
                        return (
                            <div
                                key={index}
                                className="relative h-[560px] w-80 flex-shrink-0 cursor-pointer rounded-2xl p-[3px]
                                           bg-gradient-to-r from-yellow-400 to-orange-500
                                           transition-all duration-400 ease-out"
                                onClick={() => onVideoClick(video)}
                            >
                                <div className="absolute inset-0 bg-gray-950 rounded-[calc(0.75rem-3px)]"></div>
                                <iframe
                                    className="w-full h-full rounded-2xl relative z-10"
                                    src={embedUrl}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --- Our Story Component ---
const OurStory = ({ theme }) => {
    const storyPoints = [
        { year: 2010, title: "Founded with a Vision", desc: "Our journey began with a single chair and a commitment to excellence.", icon: Crown },
        { year: 2014, title: "Expanded Services", desc: "We introduced new services, from advanced skincare to professional makeovers.", icon: Gem },
        { year: 2018, title: "Award-Winning Team", desc: "Our team received recognition for creativity and client satisfaction.", icon: Award },
        { year: 2022, title: "Our First Salon", desc: "We opened our flagship location, designed to be a sanctuary of style.", icon: Car },
        { year: 2025, title: "Global Recognition", desc: "Featured in leading magazines, we are now a destination for beauty.", icon: Trophy },
    ];

    const timelineRef = useRef(null);
    const isInView = false;
    
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
                <div
                    ref={timelineRef}
                    className="relative flex flex-col items-center"
                >
                    <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent z-0"></div>
                    {storyPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center w-full my-8 relative z-10`}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Gallery = () => {
    // State for light/dark theme, initialized from local storage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // Default to dark on server side
    });

    // Save theme to local storage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, []);

    // State for the pop-up image
    const [selectedImage, setSelectedImage] = useState(null);
    // State for the pop-up video
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Reverted to original galleryImages array
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
        'https://www.youtube.com/embed/-2ilXbquols',
        'https://www.youtube.com/embed/_DwcXVi0ugo',
        
    ];
    
    const shortVideos = [
        'https://www.youtube.com/shorts/8BfaJSEhMAU',
        'https://www.youtube.com/shorts/AC_7D3E9wNY',
        'https://www.youtube.com/shorts/QlAf7-EbCMU',
        'https://www.youtube.com/shorts/DweHkUA06IU',
        'https://www.youtube.com/shorts/MmJdbJy2wNY'
    ];
    
    // Function to get colors based on theme
    const getColors = (sectionTheme) => {
        return sectionTheme === 'dark' ? {
            bg: "bg-gray-950",
            text: "text-gray-200",
            secondaryText: "text-gray-400",
            primaryAccent: "text-yellow-400",
            button: "bg-yellow-500 hover:bg-yellow-600 text-white",
        } : {
            bg: "bg-white",
            text: "text-gray-900",
            secondaryText: "text-gray-600",
            primaryAccent: "text-yellow-600",
            button: "bg-yellow-500 hover:bg-yellow-600 text-white",
        };
    };

    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    // Define colors for each section
    const heroColors = getColors('dark');
    const galleryColors = getColors('light');
    const storyColors = getColors('dark');
    const whyColors = getColors('light');
    const videosColors = getColors('dark');
    const reelsColors = getColors('light');
    
    const heroRef = useRef(null);

    return (
        <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 relative`}>
            <ThemeChanger theme={theme} toggleTheme={toggleTheme} />

            {/* Image Pop-up Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full Screen View"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    />
                </div>
            )}

            {/* Video Pop-up Modal - Spacing and size adjusted here */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black bg-opacity-80 backdrop-blur-md"
                    onClick={() => setSelectedVideo(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <X size={24} />
                    </button>
                    <div
                        className="w-full h-full max-w-6xl aspect-video rounded-lg shadow-2xl overflow-hidden"
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
                    </div>
                </div>
            )}

            {/* Hero Section with Parallax */}
            <section
                ref={heroRef}
                className={`relative flex flex-col items-center justify-center min-h-[50vh] text-center p-8 overflow-hidden ${heroColors.bg} ${heroColors.text}`}
            >
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1520696342898-1f190d635c05?q=80&w=1935&auto=format&fit=crop')`,
                    }}
                />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
                    >
                        Our Masterpieces
                    </h1>
                    <p
                        className={`text-xl md:text-2xl mb-8 opacity-80 ${heroColors.secondaryText}`}
                    >
                        A visual journey through our finest work and unforgettable moments.
                    </p>
                    <button
                        className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${heroColors.button}`}
                        onClick={() => {
                            const gallerySection = document.getElementById('photo-gallery-section');
                            if (gallerySection) {
                                gallerySection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Explore Gallery
                    </button>
                </div>
            </section>
            
            {/* Photo Gallery Section */}
            <section 
                id="photo-gallery-section" 
                className={`py-16 px-4 md:px-8 ${galleryColors.bg} ${galleryColors.text}`}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                        Our Portfolio
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${galleryColors.text}`}>Photo Gallery</h2>
                    <p className={`text-center text-lg mb-12 ${galleryColors.secondaryText}`}>Capture your moments in perfect light.</p>
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-lg shadow-xl ${image.className} cursor-pointer group`}
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                                <div className={`absolute inset-0 bg-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm`}>
                                    <Eye size={36} className="text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <OurStory theme={theme} />
            <Gallerywhy />

            {/* Videos Section - Simple animation applied here */}
            <section 
                className={`py-16 px-4 md:px-8 ${videosColors.bg} ${videosColors.text}`}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                        Our Vision
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${videosColors.text}`}>Video Showcase</h2>
                    <p className={`text-center text-lg mb-12 ${videosColors.secondaryText}`}>Watch our creative process and final results.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videoLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl"
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Reels Section (Horizontal Slider) */}
            <AutoAnimatedSlider videos={shortVideos} theme={reelsColors} onVideoClick={setSelectedVideo} />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${heroColors.button} text-white`}
                    onClick={scrollToTop}
                >
                    <ArrowUp size={24} />
                </button>
            )}
            <StillQuestionsSection />
            <Testimonials/>  
        </div>
    );
};

export default Gallery;
"use client";

import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
import { Eye, Play, Award, Trophy, Car, Gem, Crown, Sun, Moon, ArrowUp, X } from 'lucide-react';
import React from 'react';

// --- Lazy Load Components for Code Splitting ---
const StillQuestionsSection = lazy(() => import('../ui/StillHaveQuestion'));
const Testimonials = lazy(() => import('../ui/Testimonial'));
const Gallerywhy = lazy(() => import('../ui/Gallerywhy'));
const AutoAnimatedSlider = lazy(() => import('../ui/AutoAnimatedSlider'));

// --- Static Data Moved Outside Components for Performance ---
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

// --- Reusable VideoPlayer Component (already optimized) ---
const VideoPlayer = React.memo(({ videoUrl, isShorts }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    const getYouTubeId = useCallback((url) => {
        let videoId = '';
        const shortMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
        const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]+)/);

        if (shortMatch && shortMatch[1]) {
            videoId = shortMatch[1];
        } else if (watchMatch && watchMatch[1]) {
            videoId = watchMatch[1];
        } else if (embedMatch && embedMatch[1]) {
            videoId = embedMatch[1];
        } else {
            videoId = url.split('/').pop();
        }
        return videoId;
    }, []);
    
    const videoId = getYouTubeId(videoUrl);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    const handlePlay = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const aspectRatioClass = useMemo(() => isShorts ? 'aspect-[9/16]' : 'aspect-video', [isShorts]);

    return (
        <div className={`relative w-full rounded-lg overflow-hidden shadow-xl group ${aspectRatioClass}`}>
            {!isLoaded ? (
                <div
                    className="relative w-full h-full cursor-pointer bg-gray-900 flex items-center justify-center transition-all duration-300"
                    onClick={handlePlay}
                >
                    <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 group-hover:bg-black/60">
                         <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Play size={28} className="text-white transform translate-x-0.5" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            ) : (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            )}
        </div>
    );
});


const ThemeChanger = React.memo(({ theme, toggleTheme }) => {
    const isDark = useMemo(() => theme === 'dark', [theme]);
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
});

// --- Our Story Component ---
const OurStory = React.memo(({ theme }) => {
    const storyPoints = useMemo(() => [
        { year: 2010, title: "Founded with a Vision", desc: "Our journey began with a single chair and a commitment to excellence.", icon: Crown },
        { year: 2014, title: "Expanded Services", desc: "We introduced new services, from advanced skincare to professional makeovers.", icon: Gem },
        { year: 2018, title: "Award-Winning Team", desc: "Our team received recognition for creativity and client satisfaction.", icon: Award },
        { year: 2022, title: "Our First Salon", desc: "We opened our flagship location, designed to be a sanctuary of style.", icon: Car },
        { year: 2025, title: "Global Recognition", desc: "Featured in leading magazines, we are now a destination for beauty.", icon: Trophy },
    ], []);

    const gradientClass = useMemo(() => theme === 'dark' ? 'from-yellow-500 to-orange-500' : 'from-yellow-400 to-orange-400', [theme]);

    return (
        <section className={`py-16 px-4 md:px-8 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="max-w-5xl mx-auto text-center">
                <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                    Our Journey
                </span>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Story</h2>
                <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-black' : 'text-gray-900'}`}>A journey of passion, creativity, and dedication.</p>
                <div className="relative flex flex-col items-center">
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
});


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

const Gallery = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const openImageModal = useCallback((src) => setSelectedImage(src), []);
    const openVideoModal = useCallback((src) => setSelectedVideo(src), []);
    const closeImageModal = useCallback(() => setSelectedImage(null), []);
    const closeVideoModal = useCallback(() => setSelectedVideo(null), []);
    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
    
    // Using a more robust, simple scroll check
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroColors = useMemo(() => getColors('dark'), []);
    const galleryColors = useMemo(() => getColors('light'), []);
    const videosColors = useMemo(() => getColors('dark'), []);
    const reelsColors = useMemo(() => getColors('light'), []);
    
    return (
        <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 relative`}>
            <ThemeChanger theme={theme} toggleTheme={toggleTheme} />

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
                    onClick={closeImageModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                        onClick={closeImageModal}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full Screen View"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        loading="lazy"
                    />
                </div>
            )}

            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black bg-opacity-80 backdrop-blur-md"
                    onClick={closeVideoModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all"
                        onClick={closeVideoModal}
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
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Hero Section with Parallax */}
            <section
                className={`relative flex flex-col items-center justify-center min-h-[50vh] text-center p-8 overflow-hidden ${heroColors.bg} ${heroColors.text}`}
            >
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-lg shadow-xl ${image.className} cursor-pointer group`}
                                onClick={() => openImageModal(image.src)}
                            >
                                <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
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
            
            {/* Lazy-loaded components below */}
            <Suspense fallback={<div>Loading...</div>}>
                <Gallerywhy />
            </Suspense>

            {/* Videos Section */}
            <section className={`py-16 px-4 md:px-8 ${videosColors.bg} ${videosColors.text}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                        Our Vision
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${videosColors.text}`}>Video Showcase</h2>
                    <p className={`text-center text-lg mb-12 ${videosColors.secondaryText}`}>Watch our creative process and final results.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videoLinks.map((link, index) => (
                            <VideoPlayer key={index} videoUrl={link} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Reels Section (Horizontal Slider) */}
            <Suspense fallback={<div>Loading...</div>}>
                <AutoAnimatedSlider videos={shortVideos} theme={reelsColors} />
            </Suspense>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${heroColors.button} text-white`}
                    onClick={scrollToTop}
                >
                    <ArrowUp size={24} />
                </button>
            )}

            <Suspense fallback={<div>Loading...</div>}>
                <StillQuestionsSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Testimonials />
            </Suspense>
        </div>
    );
};

export default Gallery;
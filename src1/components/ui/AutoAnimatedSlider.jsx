"use client";

import React, { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from 'lucide-react';
import photo12 from "../../img/parallax2.jpg"; // Assuming you have this image for the parallax background

// Animation variants for the main container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/**
 * A reusable video player component that displays a thumbnail before loading the video.
 * @param {object} props - The component props.
 * @param {string} props.videoUrl - The YouTube video URL.
 * @param {boolean} [props.isShorts=false] - Flag for YouTube Shorts aspect ratio.
 */
const VideoPlayer = React.memo(({ videoUrl, isShorts }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Function to get the correct YouTube video ID from different URL formats
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
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 group-hover:bg-black/60">
                         <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Play
                                size={28}
                                className="text-white transform translate-x-0.5"
                                strokeWidth={2.5}
                            />
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


/**
 * An auto-scrolling slider component with a parallax background, optimized for performance.
 * @param {object} props - The component props.
 * @param {Array<string>} props.videos - An array of YouTube video URLs.
 * @param {string} [props.theme='dark'] - The theme of the slider.
 * @param {number} [props.speed=0.5] - The scrolling speed.
 */
const AutoAnimatedSlider = React.memo(({ videos, theme, speed = 0.5 }) => {
    const sliderRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || !isInView) return;

        let animationFrameId;
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
    }, [speed, isInView]);

    const sliderColors = useMemo(() => theme === 'dark' ? 'text-gray-200' : 'text-gray-900', [theme]);
    
    return (
        <>
            <style jsx>{`
                .parallax-wrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                }
                .parallax-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    will-change: transform;
                    transform: translate3d(0, 0, -1px) scale(1.1);
                    z-index: -1;
                }
            `}</style>
            
            <section className="relative min-h-screen flex items-center justify-center py-20 lg:py-40 overflow-hidden">
                {/* Parallax Background using CSS */}
                <div className="parallax-wrapper">
                    <div className="parallax-background">
                        <img 
                            src={photo12}
                            alt="Barbershop mirror and lights"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Main content container with backdrop blur */}
                <motion.div
                    ref={ref}
                    className={`relative z-10 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 rounded-xl text-center shadow-2xl backdrop-blur-md bg-white/30`}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    style={{ backdropFilter: 'blur(12px)' }}
                >
                    <div className={`text-center max-w-7xl mx-auto p-6 md:p-10 rounded-3xl transition-all duration-500`}>
                        <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
                            Our Reels
                        </span>
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Reels Showcase</h2>
                        <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-gray-700' : 'text-gray-900'}`}>
                            Watch our Reels and process and see results you will get.
                        </p>
                        <div
                            ref={sliderRef}
                            className="flex overflow-x-hidden space-x-6 md:space-x-8 pb-6"
                        >
                            {videos.map((video, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="relative w-80 flex-shrink-0 cursor-pointer rounded-2xl p-[3px]
                                                   bg-gradient-to-r from-yellow-400 to-orange-500
                                                   transition-all duration-400 ease-out"
                                    >
                                        <div className="absolute inset-0 bg-gray-950 rounded-[calc(0.75rem-3px)]"></div>
                                        <VideoPlayer videoUrl={video} isShorts={true} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
});

export default AutoAnimatedSlider;
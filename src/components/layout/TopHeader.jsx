import React, { useState, useEffect } from 'react';

const TopHeader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  // Check if current time is within business hours
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hours = now.getHours();
      const isOpenNow = hours >= 7 && hours < 22; // 7 AM to 10 PM
      setIsOpen(isOpenNow);
    };
    
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);
  
  const texts = [
    "Premium Hair | Skin | Makeup Services",
    "Luxury Grooming Experience in Bhubaneswar",
    "Transforming Looks with Expert Care"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-3 px-4 shadow-lg relative overflow-hidden border-b border-amber-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-10 bg-gradient-to-r from-amber-500 to-purple-600 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left section - Contact info */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm mb-2 md:mb-0">
          <div className="flex items-center transition-all duration-500 hover:text-amber-400 transform hover:scale-105">
            <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>+91 97770 44576</span>
          </div>
          <div className="flex items-center transition-all duration-500 hover:text-amber-400 transform hover:scale-105">
            <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="flex items-center">
              <span className={isOpen ? "text-green-400 flex items-center mr-1" : "text-red-400 flex items-center mr-1"}>
                <span className={`w-2 h-2 rounded-full mr-1 ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`}></span>
                {isOpen ? "Open" : "Closed"}
              </span>
              7:00 AM - 10:00 PM
            </span>
          </div>
        </div>

        {/* Middle section - Animated text */}
        <div className="my-2 md:my-0 overflow-hidden h-6">
          <div 
            className="text-amber-400 font-medium text-sm transition-all duration-1000 transform text-center"
            key={currentTextIndex}
            style={{ 
              animation: `slideIn 0.5s ease-in-out, fadeIn 0.5s ease-in-out`
            }}
          >
            {texts[currentTextIndex]}
          </div>
        </div>

        {/* Right section - Social media and Review button */}
        <div className="flex items-center space-x-3">
          {/* Social Icons */}
          <div className="flex space-x-3 mr-2">
            {[
              { icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z", 
                name: "Facebook", color: "hover:text-blue-500" },
              { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", 
                name: "Instagram", color: "hover:text-pink-500" },
              { icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z", 
                name: "YouTube", color: "hover:text-red-500" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`transition-all duration-500 transform hover:scale-110 ${social.color} text-gray-300`}
                aria-label={social.name}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
          
          {/* Google Reviews Button */}
          <a
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-amber-500/30"
          >
            <div className="flex items-center">
              <div className="flex mr-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-current text-amber-300" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span>Review Us</span>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TopHeader;
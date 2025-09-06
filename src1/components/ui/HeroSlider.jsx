"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../img/Hero_20.mp4";
import About from "./About";
import EnquiryFormModal from "./EnquiryModalForm";

const slides = [
  {
    type: "video",
    src: heroVideo,
    heading: "Welcome to Alex",
    subtitle: "At Alex Beauty Parlour, we blend modern style with traditional elegance to give you confidence and charm every single day.",
  },
  {
    type: "image",
    src: 'https://www.albane.ru/images/camille-albane-infoblock/0x0x1-item/5k0st-muzhchiny.webp',
    heading: "World-Class Grooming",
    subtitle: "Our professionals craft unique looks tailored to your personality, ensuring you leave with unmatched elegance and sophistication.",
  },
  {
    type: "image",
    src: 'https://i.pinimg.com/originals/b8/38/1d/b8381d1cdc3cae338e25c6e6e551c32b.jpg',
    heading: "Grooming Redefined",
    subtitle: "At Alex, we redefine beauty with premium services, attention to detail, and timeless style.",
  },
  {
    type: "image",
    src: 'https://magicaldayweddings.com/wp-content/uploads/2022/05/How-Long-Does-It-Take-To-Tailor-A-Suit-For-The-Groom-1.jpg',
    heading: "Style Meets Elegance",
    subtitle: "Discover premium grooming crafted to perfection for every gentleman who values class.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const aboutRef = useRef(null);

  // Preload all slides
  useEffect(() => {
    slides.forEach(slide => {
      if (slide.type === "image") {
        const img = new Image();
        img.src = slide.src;
      } else if (slide.type === "video") {
        const vid = document.createElement("video");
        vid.src = slide.src;
        vid.preload = "auto";
      }
    });
  }, []);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-[86vh] w-full overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 z-0"
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {slide.type === "video" ? (
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img src={slide.src} alt="Slide Background" className="w-full h-full object-cover" />
            )}
          </motion.div>
        ))}

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 z-10" style={{ boxShadow: 'inset 0px 0px 100px rgba(0,0,0,0.8)' }}></div>

        <div className="relative z-20 w-full max-w-4xl px-6 text-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-amber-300 text-transparent bg-clip-text drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(255, 255, 255,0.4),0 0 20px rgba(255,255,255,0.2)' }}>
              {slides[current].heading}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-lg">{slides[current].subtitle}</p>

            <div className="mt-8 flex justify-center gap-4">
              {/* Enquiry button */}
              <button
                className="relative px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 overflow-hidden"
                style={{ boxShadow: '0 0 15px rgba(255,215,0,0.4),0 0 20px rgba(255,215,0,0.2)' }}
                onClick={() => setShowEnquiryModal(true)}
              >
                Enquiry
              </button>

              {/* Learn More button */}
              <button
                onClick={scrollToAbout}
                className="relative px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-xl transition-all duration-300 overflow-hidden"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${index === current ? "bg-yellow-500" : "bg-gray-300"}`}
            >
              <div className="w-full h-full rounded-full" />
            </button>
          ))}
        </div>
      </section>

      {/* Enquiry Modal Section */}
      {showEnquiryModal && (
        <EnquiryFormModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
      )}

      {/* About Section */}
      <div ref={aboutRef} id="about-section">
        <About />
      </div>
    </>
  );
};

export default HeroSlider;
  
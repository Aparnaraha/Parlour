import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, Star, MessageCircle, Camera,  Heart} from 'lucide-react';
import EnquiryModal from '../../ui/EnquiryModalForm';
import WhyChooseUs from '../../ui/WhyChoose2';
import CallModal from '../../ui/CallModal';

// Static data and variants extracted from the component.
const makeupPackages = [
  {
    title: "Gentleman's Groom",
    desc: "Face cleansing, light concealer, compact, brow grooming",
    price: "₹500 – ₹1,000",
    img: "https://avatars.mds.yandex.net/i?id=b6ec274228c851ac62564b2bbbc464002545abdf-4234038-images-thumbs&n=13"
  },
  {
    title: "Dapper Night Look",
    desc: "Primer, foundation, contouring, light eye & lip makeup",
    price: "₹1,500 – ₹3,000",
    img: "https://i.pinimg.com/736x/3f/54/ca/3f54cad4a7ec8eaae14e54624d967726.jpg"
  },
  {
    title: "Camera-Ready Look",
    desc: "High-definition makeup for shoots/events",
    price: "₹3,000 – ₹5,000",
    img: "https://i.pinimg.com/originals/4c/9f/bd/4c9fbd8c0230b1b98a3df85d76025753.jpg"
  },
  {
    title: "Oil-Free Matte Pack",
    desc: "Matte base, oil-control products, sweat-proof finish",
    price: "₹2,000 – ₹4,000",
    img: "https://www.lorealparis.com.ar/-/media/project/loreal/brand-sites/oap/americas/ar/articles/crema-antiarrugas-hombre-(1).jpg"
  },
  {
    title: "Flawless Air Finish",
    desc: "Airbrush foundation for even & long-lasting finish",
    price: "₹5,000 – ₹8,000",
    img: "https://i.ytimg.com/vi/k8LGIv8OTIw/maxresdefault.jpg"
  },
  {
    title: "Groom Spotlight",
    desc: "Full makeup, hairstyling, skin prep, basic grooming",
    price: "₹5,000 – ₹10,000",
    img: "https://i.pinimg.com/736x/2c/05/e5/2c05e511dcb83b356007545ddaf2ae52.jpg"
  },
  {
    title: "Royal Groom Ritual",
    desc: "Facial, cleanup, makeup trial, event-day makeup",
    price: "₹8,000 – ₹15,000",
    img: "https://i.pinimg.com/originals/cc/a2/c5/cca2c5c5c95ebff8f7d5c3a879519754.jpg"
  },
  {
    title: "Portfolio Perfect",
    desc: "Makeup for modelling, acting, or personal shoots",
    price: "₹3,000 – ₹6,000",
    img: "https://avatars.mds.yandex.net/i?id=21733400a3f871b1bb1459a5e5335c62e5d1a239-4376415-images-thumbs&n=13"
  },
  {
    title: "SunShield Glow",
    desc: "Tan removal, makeup with sun-protection products",
    price: "₹2,000 – ₹4,000",
    img: "https://avatars.mds.yandex.net/i?id=b6ec274228c851ac62564b2bbbc464002545abdf-4234038-images-thumbs&n=13"
  },
  {
    title: "Boss Mode",
    desc: "Subtle makeup, skin-tone correction, hair set",
    price: "₹1,500 – ₹2,500",
    img: "https://i.pinimg.com/736x/3f/54/ca/3f54cad4a7ec8eaae14e54624d967726.jpg"
  },
];
const portfolioImages = [
  'https://avatars.mds.yandex.net/i?id=21733400a3f871b1bb1459a5e5335c62e5d1a239-4376415-images-thumbs&n=13',
  'https://i.pinimg.com/originals/cc/a2/c5/cca2c5c5c95ebff8f7d5c3a879519754.jpg',
  'https://i.pinimg.com/736x/2c/05/e5/2c05e511dcb83b356007545ddaf2ae52.jpg',
  'https://i.ytimg.com/vi/k8LGIv8OTIw/maxresdefault.jpg',
  'https://www.lorealparis.com.ar/-/media/project/loreal/brand-sites/oap/americas/ar/articles/crema-antiarrugas-hombre-(1).jpg',
  'https://i.pinimg.com/originals/4c/9f/bd/4c9fbd8c0230b1b98a3df85d76025753.jpg',
  'https://i.pinimg.com/736x/3f/54/ca/3f54cad4a7ec8eaae14e54624d967726.jpg',
  'https://avatars.mds.yandex.net/i?id=b6ec274228c851ac62564b2bbbc464002545abdf-4234038-images-thumbs&n=13'
];
const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const cardVariants = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 10, duration: 0.8 } } };
const rightCardVariants = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, damping: 10, duration: 0.8 } } };

// Memoized components.
const MemoizedEnquiryModal = React.memo(EnquiryModal);
const MemoizedCallModal = React.memo(CallModal);

// --- Section 1: Makeup Service (Hero Section) ---
const MakeupServiceHero = React.memo(() => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const handleShowEnquiryModal = useCallback(() => setShowEnquiryModal(true), []);
  const handleShowCallModal = useCallback(() => setShowCallModal(true), []);

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
              <motion.button onClick={handleShowEnquiryModal} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all" style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }} whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }} whileTap={{ scale: 0.95 }}>
                <MessageCircle size={20} className="mr-2" /> Enquiry
              </motion.button>
              <motion.button onClick={handleShowCallModal} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700" style={{ background: 'linear-gradient(90deg, #3498db 0%, #2c3e50 100%)' }} whileHover={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }} whileTap={{ scale: 0.95 }}>
                <Phone size={20} className="mr-2" /> Call Now
              </motion.button>
            </div>
          </div>
          <motion.div className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full" variants={itemVariants}>
            <div className="relative w-full h-[450px] animated-border-container-image">
              <img src="https://ua.cosmohit.ua/uploadfiles/fckeditor/muzhskoy-makiyazh-1.jpg" alt="A professional makeup artist applying makeup to a client" className="w-full h-full rounded-3xl shadow-2xl block object-cover" loading="lazy" />
              <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                <Star size={20} className="mr-2 text-yellow-400" fill="currentColor" />
                <div>4.9/5 <br /> Client Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <MemoizedEnquiryModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
      <MemoizedCallModal show={showCallModal} onClose={() => setShowCallModal(false)} />
    </>
  );
});

// Memoized component.
const SignaturePackages = React.memo(({ onBookNowClick }) => {
  return (
    <section className="relative py-20 px-6 overflow-hidden text-black bg-[#fafafa]">
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
          Our Packages
        </span>
        <motion.h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Our Signature Packages
        </motion.h2>
        <motion.p className="text-gray-600 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          Tailored luxury looks for every occasion
        </motion.p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-12 max-w-5xl mx-auto">
        {makeupPackages.map((pkg, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col sm:flex-row w-full rounded-3xl shadow-2xl overflow-hidden bg-white cursor-pointer`}
            variants={i % 2 === 0 ? cardVariants : rightCardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`w-full sm:w-1/2 h-64 sm:h-96 relative overflow-hidden ${i % 2 === 0 ? '' : 'sm:order-2'}`}>
              <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className={`w-full sm:w-1/2 p-8 flex flex-col justify-center text-center sm:text-left ${i % 2 === 0 ? '' : 'sm:order-1'}`}>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{pkg.desc}</p>
              <span className="text-xl font-semibold text-yellow-500 mb-4">{pkg.price}</span>
              <motion.button onClick={onBookNowClick} className="mt-auto px-8 py-3 rounded-full font-semibold text-white shadow-lg mx-auto sm:mx-0" style={{ background: "linear-gradient(90deg, #FF9800 0%, #FFD700 100%)" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

// Memoized component.
const PhotoGallery = React.memo(() => {
  return (
    <section className="bg-white text-black py-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Our Portfolio
        </motion.h2>
        <motion.p className="text-lg text-gray-700 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          Explore transformations and styles crafted by our expert artists.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {portfolioImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          >
            <motion.img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-80 object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center">
              <motion.div className="p-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Camera className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                <p className="text-white font-medium">View Work</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

// Memoized main component.
const CombinedMakeupServicePage = React.memo(() => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const handleShowEnquiryModal = useCallback(() => setShowEnquiryModal(true), []);
  const handleCloseEnquiryModal = useCallback(() => setShowEnquiryModal(false), []);
  return (
    <>
      <MakeupServiceHero />
      <SignaturePackages onBookNowClick={handleShowEnquiryModal} />
      <WhyChooseUs />
      <PhotoGallery />
      <MemoizedEnquiryModal isOpen={showEnquiryModal} onClose={handleCloseEnquiryModal} />
    </>
  );
});

export default CombinedMakeupServicePage;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles, Phone, Star, MessageCircle, Heart, User, Award, Check, Droplet, Sun, Zap, Leaf, Shield, Camera } from 'lucide-react';

// Reusable particle effect component for a dynamic background
const ParticleEffect = ({ color1, color2 }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 50;
        let animationFrameId;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };
        class Particle {
            constructor(x, y, size, speedX, speedY, color) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.color = color;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.05;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const size = Math.random() * 3 + 1;
                const speedX = Math.random() * 0.5 - 0.25;
                const speedY = Math.random() * 0.5 - 0.25;
                const color = `rgba(${parseInt(color1.slice(1, 3), 16)}, ${parseInt(color1.slice(3, 5), 16)}, ${parseInt(color1.slice(5, 7), 16)}, ${Math.random() * 0.5 + 0.2})`;
                particles.push(new Particle(x, y, size, speedX, speedY, color));
            }
        };
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].size <= 0.2 || particles[i].x < 0 || particles[i].x > canvas.width || particles[i].y < 0 || particles[i].y > canvas.height) {
                    particles[i] = new Particle(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height,
                        Math.random() * 3 + 1,
                        Math.random() * 0.5 - 0.25,
                        Math.random() * 0.5 - 0.25,
                        `rgba(${parseInt(color2.slice(1, 3), 16)}, ${parseInt(color2.slice(3, 5), 16)}, ${parseInt(color2.slice(5, 7), 16)}, ${Math.random() * 0.5 + 0.2})`
                    );
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        resizeCanvas();
        initParticles();
        animate();
        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color1, color2]);
    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />;
};


// --- Section 1: Skin Service Hero ---
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

const SkinServiceHero = () => {
  const images = [
    'https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000',
    'https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg',
    'https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig',
    'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp',
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <style>{`
        @keyframes continuous-border-move {
          0%, 100% {
            top: 0;
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform: none;
          }
          25% {
            top: 0;
            left: calc(100% - 80px);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform: none;
          }
          25.1% {
            top: 0;
            left: calc(100% - 4px);
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: top center;
          }
          50% {
            top: calc(100% - 80px);
            left: calc(100% - 4px);
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: top center;
          }
          50.1% {
            top: calc(100% - 4px);
            left: calc(100% - 80px);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform-origin: right center;
          }
          75% {
            top: calc(100% - 4px);
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #FFD700);
            transform-origin: right center;
          }
          75.1% {
            top: calc(100% - 80px);
            left: 0;
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: bottom center;
          }
          100% {
            top: 0;
            left: 0;
            width: 4px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #FFD700);
            transform-origin: bottom center;
          }
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

      <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#1d212a] font-inter text-white">
        <motion.div
          className="w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Section - Content */}
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
              <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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

            {/* Stats */}
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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                // TODO: Add onClick handler to open a modal here
              >
                <MessageCircle size={20} className="mr-2" /> Enquiry
              </motion.button>
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-gray-700"
                whileHover={{ scale: 1.05, background: '#2c3e50', boxShadow: '0 0 20px rgba(44, 62, 80, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                // TODO: Add onClick handler to open a modal here
              >
                <Phone size={20} className="mr-2" /> Call Now
              </motion.button>
            </div>
          </div>

          {/* Right Section - Image with Animated Full Border */}
          <motion.div
            className="flex-1 flex justify-center p-6 sm:p-12 flex-grow relative max-w-xl w-full"
            variants={itemVariants}
          >
            <div className="relative w-full h-[450px] animated-border-container-image">
              <img
                src={randomImage}
                alt="A man receiving a facial treatment in a modern, professional setting"
                className="w-full h-full rounded-3xl shadow-2xl block object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white p-4 rounded-lg text-sm font-medium flex items-center">
                <Star size={20} className="mr-2 text-yellow-400" fill="currentColor" />
                <div>
                  4.9/5 <br /> Client Rating
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

// --- Data for Packages ---
const packageLinks = [
  'https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000',
  'https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg',
  'https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig',
  'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp',
  'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp',
];

const allPackages = [
    { name: "Executive Facial", type: "Classic", desc: "A deep-cleansing facial for a refreshed look.", price: "₹1,200", rating: 4.8 },
    { name: "Hydrating Boost", type: "Treatment", desc: "Intensive moisturizing facial to combat dry skin.", price: "₹1,500", rating: 4.9 },
    { name: "Acne Control Facial", type: "Problematic Skin", desc: "Targets blemishes and breakouts with purifying ingredients.", price: "₹1,800", rating: 4.7 },
    { name: "Anti-Aging Facial", type: "Luxury", desc: "Reduces fine lines and promotes youthful skin.", price: "₹2,500", rating: 5.0 },
    { name: "Gentleman's Glow", type: "Classic", desc: "Deep cleanse, exfoliation, and a refreshing mask.", price: "₹1,000", rating: 4.6 },
    { name: "Back Facial", type: "Treatment", desc: "A cleansing and exfoliating treatment for the back.", price: "₹1,600", rating: 4.8 },
    { name: "Organic Facial", type: "Natural", desc: "Uses all-natural products for sensitive skin.", price: "₹1,400", rating: 4.9 },
    { name: "Microdermabrasion", type: "Advanced", desc: "Exfoliates to remove dead skin cells and improve texture.", price: "₹3,000", rating: 5.0 },
];

const PackageCard = ({ packageInfo, index }) => {
    // Card animation with float
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
    const image = packageLinks[Math.floor(Math.random() * packageLinks.length)];
    
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
                src={image}
                alt={packageInfo.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-2xl font-bold drop-shadow-md">{packageInfo.name}</h3>
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
                        className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                    >
                       Book Now
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};


const SignaturePackages = () => {
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
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {allPackages.map((pkg, index) => (
                        <PackageCard key={pkg.name} packageInfo={pkg} index={index} />
                    ))}
                </motion.div>
            </div>
             <style jsx>{`
                .card-with-gradient-border {
                    position: relative;
                    z-index: 1;
                }

                .card-with-gradient-border::after {
                    content: "";
                    position: absolute;
                    inset: -3px;
                    z-index: -1;
                    background: linear-gradient(45deg, #FFD700, #FFA500);
                    opacity: 0;
                    transform: scale(0.95);
                    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                }

                .card-with-gradient-border:hover::after {
                    opacity: 1;
                    transform: scale(1);
                }
            `}</style>
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
            icon: Leaf,
            title: "Natural Ingredients",
            desc: "We use organic, skin-friendly products for a gentle and effective experience.",
        },
        {
            icon: Droplet,
            title: "Hydration Focus",
            desc: "Our treatments are designed to restore moisture and a healthy glow.",
        },
        {
            icon: User,
            title: "Expert Aestheticians",
            desc: "Trained professionals providing personalized care for your unique skin type.",
        },
        {
            icon: Shield,
            title: "Safety First",
            desc: "All products and tools are sanitized to ensure a safe and hygienic service.",
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-[#1a1c24] to-[#0f1116] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-5xl font-extrabold mb-6 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Why Choose{" "}
                    <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
                        Our Skin Services?
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center">
                    <AnimatedCounter value={500} label="Happy Clients" delay={0.2} />
                    <AnimatedCounter value={10} label="Years Experience" delay={0.4} />
                    <AnimatedCounter value={99} label="Satisfaction Rate" delay={0.6} />
                </div>
            </div>
        </section>
    );
};

// --- Section 4: Photo Gallery ---
const PhotoGallery = () => {
  const images = [
    'https://lh3.googleusercontent.com/pl7xF55fPTwqJqMepNnln16fScBuzA7bv5Sn22mVHJ8XO3J2Bvexzq7mly5BFiCDs4Y956u4nayf4F2yLD07Nu4Dl83iubvHSw=s1000',
    'https://gvlclinic.ru/wp-content/uploads/2021/06/sgdhgdhddh.jpg',
    'https://avatars.mds.yandex.net/get-altay/13970739/2a000001927b427a8acda582a922b8ee1c35/orig',
    'https://img.grouponcdn.com/metro_draft_service/3TL4j1ghLQ1UPSYq7AZKQScVdHAv/3T-900x600/v1/t1100x664.webp',
  ];
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    inView: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 100 } }
};
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
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer"
                        variants={imageVariants}
                        initial="initial"
                        whileInView="inView"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
                    >
                        <img
                            src={img}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- Main Combined Component ---
const CombinedSkinServicePage = () => {
    return (
        <>
            <SkinServiceHero />
            <SignaturePackages />
            <WhyChooseUs />
            <PhotoGallery />
        </>
    );
};

export default CombinedSkinServicePage;
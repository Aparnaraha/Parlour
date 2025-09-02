"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Calendar, ArrowRight, Filter, ChevronLeft, ChevronRight,
  Newspaper, Search, BookOpen, Clock, User, MessageSquare,
  Tag, Heart, Share2, Bookmark, Eye, ArrowUp, Star, Award,
  MapPin, Car, Zap, Gem, Users, Shield, Crown, Droplet, Scissors, Phone,
  MessageCircle, ChevronDown, Sun, Moon, Palette,
} from 'lucide-react';

const AnimatedBackground = ({ themeColors }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: themeColors[Math.floor(Math.random() * themeColors.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (10 - 2) + 2,
    duration: Math.random() * (8 - 4) + 4,
    delay: Math.random() * 2,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: p.color,
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            top: `${p.y}%`,
            left: `${p.x}%`,
            opacity: 0.1,
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0.8, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, p.direction * (Math.random() * 20 - 10), 0],
            y: [0, p.direction * (Math.random() * 20 - 10), 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [filterOpen, setFilterOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const postsPerPage = 9;

  const filterContentRef = useRef(null);
  const [filterHeight, setFilterHeight] = useState(0);

  useEffect(() => {
    if (filterContentRef.current) {
      setFilterHeight(filterContentRef.current.scrollHeight);
    }
  }, [filterOpen, selectedCategory]);

  const blogPosts = [
    {
      id: 1,
      title: "The Perfect Fade: A Guide to Modern Haircuts",
      date: "August 15, 2025",
      excerpt: "Master the art of the fade haircut. Learn about different fade styles and how to find the one that's right for you.",
      category: "Haircuts",
      imageUrl: "https://images.unsplash.com/photo-1596464531649-07b9a5435985?q=80&w=1964&auto=format&fit=crop",
      readTime: "5 min read",
      likes: 142,
      views: 1204,
      premium: true,
      content: "The fade haircut is a timeless style that has evolved into a modern art form. From low fades to high fades, and skin fades to scissor fades, the options are endless. A good fade is all about precision and a smooth transition from short to long hair. Our expert barbers are trained to create a flawless fade that complements your head shape and personal style, ensuring you leave with a sharp, clean look."
    },
    {
      id: 2,
      title: "Essential Beard Grooming Tips for the Modern Gentleman",
      date: "August 12, 2025",
      excerpt: "Keep your beard looking its best with these essential tips on washing, oiling, and shaping.",
      category: "Grooming",
      imageUrl: "https://images.unsplash.com/photo-1588698944588-444a17953ff4?q=80&w=1964&auto=format&fit=crop",
      readTime: "7 min read",
      likes: 89,
      views: 987,
      premium: false,
      content: "A well-groomed beard is a sign of a true gentleman. It requires regular care and attention to maintain its health and shape. Start with a proper beard wash to cleanse away dirt and grime without stripping natural oils. Follow up with a quality beard oil to moisturize the skin and soften the hair. Finally, use a beard balm or wax to style and tame any flyaways, giving your beard a polished finish."
    },
    {
      id: 3,
      title: "The Classic Hot Towel Shave: An Unforgettable Experience",
      date: "August 10, 2025",
      excerpt: "Discover the relaxing and luxurious ritual of a traditional hot towel shave.",
      category: "Shaving",
      imageUrl: "https://images.unsplash.com/photo-1621607592398-e7a6839d48b1?q=80&w=1887&auto=format&fit=crop",
      readTime: "4 min read",
      likes: 76,
      views: 845,
      premium: true,
      content: "A hot towel shave is more than just a shave; it's a therapeutic experience. The process begins with warm, scented towels to open pores and soften hair, followed by a meticulous shave with a straight razor. This ancient technique provides the closest and smoothest shave possible, leaving your skin feeling refreshed and incredibly smooth. It’s the perfect way to unwind and indulge in a moment of self-care."
    },
    {
      id: 4,
      title: "Finding the Right Hairstyle for Your Face Shape",
      date: "August 8, 2025",
      excerpt: "Learn how to choose a haircut that complements your unique facial features.",
      category: "Haircuts",
      imageUrl: "https://images.unsplash.com/photo-1598971616744-933e8b4e5486?q=80&w=1965&auto=format&fit=crop",
      readTime: "6 min read",
      likes: 63,
      views: 723,
      premium: false,
      content: "The right haircut can enhance your best features and bring balance to your face. Whether you have a round, oval, square, or heart-shaped face, there's a hairstyle that will look great on you. Our barbers can consult with you to determine your face shape and recommend a style that not only looks fantastic but is also easy to maintain."
    },
    {
      id: 5,
      title: "Mastering the Art of a Clean Shave",
      date: "August 5, 2025",
      excerpt: "Get a perfect, irritation-free shave every time with our expert tips.",
      category: "Shaving",
      imageUrl: "https://images.unsplash.com/photo-1596700869188-460d96d27ae8?q=80&w=1974&auto=format&fit=crop",
      readTime: "8 min read",
      likes: 118,
      views: 1056,
      premium: true,
      content: "A clean shave requires more than just a razor and shaving cream. The key to avoiding irritation and getting a close shave lies in proper preparation. Exfoliate your skin to remove dead cells, use a pre-shave oil to protect your skin, and always shave with the grain. Our master barbers can teach you the techniques for a flawless shave at home."
    },
    {
      id: 6,
      title: "Grooming Trends for 2025: What's Hot This Year",
      date: "August 3, 2025",
      excerpt: "Stay ahead of the curve with our breakdown of the top grooming trends for the new year.",
      category: "Trends",
      imageUrl: "https://images.unsplash.com/photo-1560943960-e4b786c2f0f0?q=80&w=1887&auto=format&fit=crop",
      readTime: "5 min read",
      likes: 94,
      views: 892,
      premium: false,
      content: "From textured crops to classic side parts, 2025 is all about embracing individuality and personal style. We're seeing a return to classic, clean-cut looks, but with modern twists like subtle fades and intricate designs. The beard is also evolving, with a focus on natural shapes and well-defined lines. Visit our parlour to get a trendy new look that's tailored to you."
    },
    {
      id: 7,
      title: "The Ultimate Guide to Men's Hair Products",
      date: "July 30, 2025",
      excerpt: "Pomade, clay, wax, or gel? Find the right product to achieve your desired style.",
      category: "Products",
      imageUrl: "https://images.unsplash.com/photo-1541221799772-246e7f8472f7?q=80&w=1964&auto=format&fit=crop",
      readTime: "9 min read",
      likes: 157,
      views: 1342,
      premium: true,
      content: "Choosing the right hair product is crucial for maintaining your style throughout the day. Pomade is great for classic, slick looks, while hair clay provides a matte finish and strong hold. For a more natural look, a styling cream or sea salt spray can add texture without a stiff feel. Our barbers can recommend the perfect product for your hair type and style."
    },
    {
      id: 8,
      title: "Why You Should Get a Professional Haircut",
      date: "July 28, 2025",
      excerpt: "The difference between a DIY trim and a professional haircut is worth every penny.",
      category: "Haircuts",
      imageUrl: "https://images.unsplash.com/photo-1621590747190-252787e7939c?q=80&w=1887&auto=format&fit=crop",
      readTime: "7 min read",
      likes: 72,
      views: 812,
      premium: false,
      content: "A professional haircut from a skilled barber is an investment in your appearance. It provides precision, symmetry, and a clean finish that's nearly impossible to achieve at home. A barber can also offer valuable advice on hair care, product recommendations, and how to style your hair to perfection."
    },
    {
      id: 9,
      title: "The Importance of a Well-Maintained Mustache",
      date: "July 25, 2025",
      excerpt: "Your mustache needs love too. Learn how to keep it shaped and healthy.",
      category: "Grooming",
      imageUrl: "https://images.unsplash.com/photo-1588698944588-444a17953ff4?q=80&w=1964&auto=format&fit=crop",
      readTime: "6 min read",
      likes: 131,
      views: 1128,
      premium: true,
      content: "A mustache can be a statement piece, but only if it's well-maintained. Regular trimming, using a quality mustache wax, and keeping it clean are key to a sharp look. Our barbers are experts in mustache sculpting and can help you find the perfect style to complement your face."
    },
    {
      id: 10,
      title: "Beyond the Cut: Our Other Premium Services",
      date: "July 22, 2025",
      excerpt: "Discover our full range of services from facials to scalp treatments.",
      category: "Services",
      imageUrl: "https://images.unsplash.com/photo-1621607590829-4d6d6284f2c9?q=80&w=1887&auto=format&fit=crop",
      readTime: "7 min read",
      likes: 92,
      views: 876,
      premium: false,
      content: "Our parlour offers more than just haircuts and shaves. We provide a full range of grooming services, including revitalizing facials, scalp treatments for healthy hair, and eyebrow grooming. We believe in providing a holistic grooming experience that leaves you feeling and looking your best."
    },
    {
      id: 11,
      title: "The History of the Gentlemen's Barber Shop",
      date: "July 20, 2025",
      excerpt: "A look back at the origins of the barber shop and its place in modern society.",
      category: "History",
      imageUrl: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2072&auto=format&fit=crop",
      readTime: "6 min read",
      likes: 78,
      views: 754,
      premium: true,
      content: "From ancient Roman public baths to the modern-day man cave, the barber shop has always been a place for men to gather, socialize, and, of course, get a great haircut. We're proud to carry on this tradition, offering a place of camaraderie and exceptional service in our community."
    },
    {
      id: 12,
      title: "Caring for Your Skin After a Shave",
      date: "July 18, 2025",
      excerpt: "Post-shave care is just as important as the shave itself. Here's why.",
      category: "Skincare",
      imageUrl: "https://images.unsplash.com/photo-1621607590829-4d6d6284f2c9?q=80&w=1887&auto=format&fit=crop",
      readTime: "5 min read",
      likes: 121,
      views: 1103,
      premium: false,
      content: "Proper post-shave care can prevent razor burn, ingrown hairs, and irritation. After your shave, rinse your face with cold water to close the pores and pat it dry. Follow up with a high-quality aftershave balm or moisturizer to hydrate your skin and soothe any redness. This simple routine will ensure your skin stays healthy and smooth."
    }
  ];

  const categories = ["All", "Haircuts", "Grooming", "Shaving", "Trends", "Products", "Services", "History", "Skincare"];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    : blogPosts.filter(post =>
        post.category === selectedCategory &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())));

  const getPostCount = (category) => {
    if (category === "All") return blogPosts.length;
    return blogPosts.filter(post => post.category === category).length;
  };

  const featuredPosts = blogPosts.filter(post => post.premium);

  const handleNextFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === 0 ? featuredPosts.length - 1 : prevIndex - 1
    );
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExpandPost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === "light" ? "dark" : "light"));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: Scissors,
      title: "Professional Haircuts",
      desc: "Our skilled barbers deliver precision cuts tailored to your style."
    },
    {
      icon: Droplet,
      title: "Signature Shaves",
      desc: "Experience the ultimate in relaxation with our classic hot towel shave."
    },
    {
      icon: Shield,
      title: "Beard Grooming",
      desc: "Expert shaping and care for a perfect, well-maintained beard."
    },
    {
      icon: Gem,
      title: "Luxury Facials",
      desc: "Revitalize your skin with our deep cleansing and rejuvenating facial treatments."
    }
  ];

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
        className="flex flex-col items-center"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          {count}+
        </h2>
        <p className="text-gray-400 text-lg">{label}</p>
      </motion.div>
    );
  };

  const themeClasses = {
    light: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      sectionBg: "bg-white",
      cardBg: "bg-white",
      cardBorder: "border-gray-200",
      featuredCardBg: "bg-gray-100",
      featuredCardBorder: "border-gray-300",
      secondaryText: "text-gray-600",
      tertiaryText: "text-gray-500",
      primaryAccent: "text-yellow-600",
      accentGradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-r from-yellow-50 via-white to-orange-50",
      newsletterBg: "bg-gradient-to-r from-gray-900 to-gray-800",
      newsletterInputBg: "bg-gray-800",
      newsletterInputText: "text-gray-200",
      newsletterInputPlaceholder: "placeholder-gray-400",
      darkSectionBg: "bg-[#1d212a]",
      darkSectionText: "text-white",
      animatedBgColors: ["#FDE68A", "#FDBA74", "#FB923C", "#FCA5A5", "#F87171", "#EF4444"]
    },
    dark: {
      bg: "bg-[#1d212a]",
      text: "text-gray-200",
      sectionBg: "bg-[#2c3e50]",
      cardBg: "bg-[#2c3e50]",
      cardBorder: "border-[#4a5f70]",
      featuredCardBg: "bg-[#2c3e50]",
      featuredCardBorder: "border-[#4a5f70]",
      secondaryText: "text-gray-400",
      tertiaryText: "text-gray-500",
      primaryAccent: "text-yellow-400",
      accentGradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
      gradient: "bg-gradient-to-r from-[#1d212a] to-[#2c3e50]",
      newsletterBg: "bg-gradient-to-r from-[#1d212a] to-[#2c3e50]",
      newsletterInputBg: "bg-white/10",
      newsletterInputText: "text-white",
      newsletterInputPlaceholder: "placeholder-gray-400",
      darkSectionBg: "bg-[#1d212a]",
      darkSectionText: "text-white",
      animatedBgColors: ["#FACC15", "#EAB308", "#D97706", "#F97316", "#EA580C", "#DC2626"]
    }
  };

  const colors = themeClasses[theme];
  const featuredPost = featuredPosts[currentFeaturedIndex];
  
  // New animated border classes
  const animatedBorder = `
    relative overflow-hidden
    before:content-[''] before:absolute before:inset-0 before:z-0
    before:rounded-[1.2rem]
    before:bg-[conic-gradient(from_var(--angle),_transparent_20%,_#38bdf8_40%,_#0a5281_60%,_transparent_80%)]
    before:animate-spin-slow
    before:duration-[2000ms]
    
    after:content-[''] after:absolute after:inset-[1px] after:z-10 after:rounded-2xl
    after:bg-${themeClasses[theme].cardBg.slice(3)}
  `;

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} font-inter overflow-x-hidden transition-colors duration-500 relative`}>
      <AnimatedBackground themeColors={colors.animatedBgColors} />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          theme === "light" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        <Palette size={24} />
      </button>

      {/* Page Title Section */}
      <section className={`relative h-96 flex items-center justify-center overflow-hidden ${colors.gradient} z-10`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596464531649-07b9a5435985?q=80&w=1964&auto=format&fit=crop")',
          }}
        ></div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent ${colors.accentGradient}`}>
            The Gentleman's Blog
          </h1>
          <p className={`text-lg md:text-xl mb-6 max-w-2xl mx-auto ${colors.secondaryText}`}>
            Your source for expert grooming tips, style trends, and premium care insights
          </p>

          <motion.div
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.secondaryText}`} size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className={`w-full py-3 pl-12 pr-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${colors.cardBg} ${colors.text} ${colors.cardBorder} placeholder-gray-500 transition-colors duration-500`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center px-6 py-3 rounded-full mb-4 font-medium transition-all duration-300 ${
                theme === 'light' ? 'bg-yellow-500 text-white' :
                'bg-yellow-600 text-white'
              }`}
            >
              <Filter size={18} className="mr-2"/>
              {filterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <motion.div
              style={{
                height: filterOpen ? `${filterHeight}px` : '0',
                opacity: filterOpen ? 1 : 0,
              }}
              className="flex flex-wrap justify-center gap-4 w-full transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div ref={filterContentRef} className="flex flex-wrap justify-center gap-4">
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                    className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 border shadow-lg flex flex-col items-center justify-center min-w-[120px]
                                ${selectedCategory === cat
                                  ? `${
                                      theme === 'light' ? 'bg-yellow-500 border-yellow-500' :
                                      'bg-yellow-600 border-yellow-600'
                                    } text-white shadow-xl`
                                  : `${colors.cardBg} ${colors.text} ${colors.cardBorder} hover:border-yellow-500`
                                }`}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-semibold mb-1">{cat}</span>
                    <span className={`text-xs ${selectedCategory === cat ? 'text-white' : colors.secondaryText}`}>
                      {getPostCount(cat)} Article{getPostCount(cat) !== 1 ? 's' : ''}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className={colors.primaryAccent}>
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {searchQuery ? ` for "${searchQuery}"` : ''}
          </p>
        </motion.div>

        {/* Featured Post Slider */}
        {featuredPosts.length > 0 && (
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className={`text-3xl font-bold mb-8 text-center bg-clip-text text-transparent ${
              theme === 'light' ? 'bg-gradient-to-r from-yellow-600 to-orange-700' :
              'bg-gradient-to-r from-yellow-400 to-orange-500'
            }`}>
              Featured Articles
            </h2>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeaturedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={featuredPosts[currentFeaturedIndex].imageUrl}
                      alt={featuredPosts[currentFeaturedIndex].title}
                      className="w-full h-80 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-lg ${
                        theme === 'light' ? 'bg-yellow-500 text-white' :
                        'bg-yellow-600 text-white'
                      }`}>
                        {featuredPosts[currentFeaturedIndex].category}
                      </div>
                    </div>
                    {featuredPosts[currentFeaturedIndex].premium && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white`}>
                          <Star size={16} className="mr-1 fill-current" />
                          Premium
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`p-8 ${colors.featuredCardBg} ${colors.featuredCardBorder} border`}>
                    <div className={`flex items-center text-sm mb-4 ${colors.tertiaryText}`}>
                      <Calendar size={16} className={`mr-2 ${colors.primaryAccent}`} />
                      <span>{featuredPosts[currentFeaturedIndex].date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className={`mr-2 ${colors.primaryAccent}`} />
                      <span>{featuredPosts[currentFeaturedIndex].readTime}</span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${colors.text}`}>
                      {featuredPosts[currentFeaturedIndex].title}
                    </h3>
                    <p className={`mb-6 leading-relaxed ${colors.secondaryText}`}>
                      {featuredPosts[currentFeaturedIndex].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <motion.a
                        href="#"
                        className={`inline-flex items-center font-medium transition-colors duration-300 group/readmore hover:${colors.text} ${colors.primaryAccent}`}
                        whileHover={{ x: 5 }}
                      >
                        Read Full Article
                        <ArrowRight size={18} className="ml-2 group-hover/readmore:translate-x-1 transition-transform" />
                      </motion.a>
                      <div className={`flex items-center space-x-4 ${colors.tertiaryText}`}>
                        <button className={`flex items-center transition-colors hover:${colors.primaryAccent}`}>
                          <Heart size={16} className="mr-1" />
                          <span>{featuredPosts[currentFeaturedIndex].likes}</span>
                        </button>
                        <button className={`flex items-center transition-colors hover:${colors.primaryAccent}`}>
                          <Eye size={16} className="mr-1" />
                          <span>{featuredPosts[currentFeaturedIndex].views}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handlePrevFeatured}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg ${colors.sectionBg} ${colors.text} transition-transform duration-300 hover:scale-110 z-20`}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNextFeatured}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg ${colors.sectionBg} ${colors.text} transition-transform duration-300 hover:scale-110 z-20`}
              >
                <ChevronRight />
              </button>
            </div>
          </motion.section>
        )}

        {/* Why Choose Us Section with dark theme */}
        <motion.section
          className={`mb-16 py-12 px-8 rounded-2xl ${colors.darkSectionBg} ${colors.darkSectionText} border border-[#2c3e50] shadow-xl backdrop-blur-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className={`text-3xl font-bold mb-8 text-center bg-clip-text text-transparent ${colors.accentGradient}`}>
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl bg-[#2c3e50] backdrop-blur-md border border-gray-700 shadow-xl text-center flex flex-col items-center hover:scale-[1.03] transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-yellow-900/40`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <service.icon className="w-8 h-8 text-yellow-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 text-center">
            <AnimatedCounter value={1000} label="Happy Clients" delay={0.2} />
            <AnimatedCounter value={20} label="Years Experience" delay={0.4} />
            <AnimatedCounter value={100} label="5★ Reviews" delay={0.6} />
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className={`rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl relative ${colors.cardBg} ${colors.cardBorder} hover:scale-[1.02] cursor-pointer group`}
                    variants={scaleUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    custom={index}
                  >
                    <div className={`${animatedBorder} p-[2px]`}>
                      <div className={`p-6 bg-white rounded-[1.2rem] h-full relative z-20`}>
                        {post.premium && (
                          <div className="absolute top-4 right-4 z-30">
                            <div className="flex items-center px-2 py-1 rounded-full text-xs font-medium shadow-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
                              <Star size={12} className="mr-1 fill-current" />
                              Premium
                            </div>
                          </div>
                        )}

                        <div className="relative overflow-hidden group">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
                            {post.category}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div className="flex space-x-3">
                              <button className="p-2 bg-white/10 backdrop-blur-md rounded-full transition-colors hover:bg-yellow-500">
                                <Bookmark size={14} className="text-white" />
                              </button>
                              <button className="p-2 bg-white/10 backdrop-blur-md rounded-full transition-colors hover:bg-yellow-500">
                                <Share2 size={14} className="text-white" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className={`flex items-center text-xs mb-3 ${colors.tertiaryText}`}>
                            <Calendar size={14} className={`mr-1 ${colors.primaryAccent}`} />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock size={14} className={`mr-1 ${colors.primaryAccent}`} />
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className={`text-xl font-bold mb-3 leading-tight line-clamp-2 ${colors.text}`}>
                            {post.title}
                          </h3>

                          <p className={`text-sm mb-4 leading-relaxed line-clamp-3 ${colors.secondaryText}`}>
                            {post.excerpt}
                          </p>

                          <AnimatePresence>
                            {expandedPost === post.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className={`text-sm mb-4 leading-relaxed ${colors.secondaryText}`}>
                                  {post.content}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <motion.button
                              onClick={() => toggleExpandPost(post.id)}
                              className={`inline-flex items-center text-sm font-medium transition-colors duration-300 hover:text-blue-500 text-blue-500`}
                              whileHover={{ x: 5 }}
                            >
                              {expandedPost === post.id ? "Show Less" : "Read More"}
                              {expandedPost === post.id ? (
                                <ChevronDown size={16} className="ml-1 rotate-180 transition-transform" />
                              ) : (
                                <ArrowRight size={16} className="ml-1 transition-transform" />
                              )}
                            </motion.button>

                            <div className={`flex items-center space-x-3 text-xs ${colors.tertiaryText}`}>
                              <span className="flex items-center">
                                <Heart size={14} className="mr-1" />
                                {post.likes}
                              </span>
                              <span className="flex items-center">
                                <Eye size={14} className="mr-1" />
                                {post.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl font-semibold text-gray-400">
                No articles found for this category.
              </p>
            </div>
          )}
        </motion.section>

        {/* Photo Gallery Section */}
        <motion.section
          className={`py-20 px-6 overflow-hidden relative rounded-2xl ${colors.cardBg} ${colors.text}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <h2
                className={`text-5xl font-extrabold mb-4 bg-clip-text text-transparent ${
                  theme === 'light' ? 'bg-gradient-to-r from-yellow-600 to-orange-700' :
                  'bg-gradient-to-r from-yellow-400 to-orange-500'
                }`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Our Portfolio
            </h2>
            <p
                className={`text-lg max-w-2xl mx-auto ${colors.secondaryText}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                A collection of our finest work, showcasing precision and style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
            {blogPosts.slice(0, 6).map((post, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{post.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section
          className={`mt-16 p-10 rounded-2xl border shadow-2xl text-center backdrop-blur-md relative overflow-hidden ${
            theme === 'light' ? 'bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700' :
            'bg-gradient-to-r from-[#1d212a] to-[#2c3e50] border-[#2c3e50]'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Newspaper size={64} className={`mx-auto mb-6 opacity-80 text-yellow-400`} />
          <h2 className={`text-3xl font-bold mb-4 bg-clip-text text-transparent ${colors.accentGradient}`}>
            Stay Updated with Grooming Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get the latest articles, exclusive offers, and expert grooming tips directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className={`px-6 py-3 rounded-full border border-yellow-500/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${colors.newsletterInputBg} ${colors.newsletterInputText} ${colors.newsletterInputPlaceholder}`}
            />
            <motion.button
              className={`px-8 py-3 text-white font-bold rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-600`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.section>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-4 bg-yellow-500 text-white rounded-full shadow-lg z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        html {
          scroll-behavior: smooth;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Blog;
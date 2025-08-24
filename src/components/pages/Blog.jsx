"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, ArrowRight, Filter, ChevronLeft, ChevronRight, 
  Newspaper, Search, BookOpen, Clock, User, MessageSquare, 
  Tag, Heart, Share2, Bookmark, Eye, ArrowUp, Star, Award,
  MapPin, Car, Zap, Gem, Users, Shield, ChevronDown, Plus,
  Mountain, Sun, Waves, Palette, Castle, Utensils
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const postsPerPage = 9;

  // Sample blog data with high-quality Unsplash images
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Luxury Electric Vehicles",
      date: "August 15, 2025",
      excerpt: "Discover how electric vehicles are redefining luxury with cutting-edge technology and sustainable design.",
      category: "Innovation",
      imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      readTime: "5 min read",
      likes: 142,
      views: 1204,
      premium: true,
      content: "The automotive industry is undergoing a revolutionary transformation, with luxury electric vehicles leading the charge. These marvels of engineering combine breathtaking performance with sustainable technology, offering instantaneous torque, whisper-quiet operation, and zero emissions."
    },
    {
      id: 2,
      title: "Top 10 Scenic Drives for Luxury Car Enthusiasts",
      date: "August 12, 2025",
      excerpt: "Experience the world's most breathtaking routes in the comfort of a premium luxury vehicle.",
      category: "Travel",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "7 min read",
      likes: 89,
      views: 987,
      premium: false,
      content: "There's something magical about exploring beautiful landscapes from the cockpit of a luxury vehicle. The Amalfi Coast's winding cliffside roads, California's Pacific Coast Highway, and Scotland's North Coast 500 represent just a few of the world's most spectacular driving routes."
    },
    {
      id: 3,
      title: "The Art of Chauffeur Services: Excellence in Motion",
      date: "August 10, 2025",
      excerpt: "Learn what sets apart world-class chauffeur services and how they enhance your travel experience.",
      category: "Service",
      imageUrl: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      readTime: "4 min read",
      likes: 76,
      views: 845,
      premium: true,
      content: "A luxury chauffeur service represents the pinnacle of personalized transportation. Beyond simply driving from point A to point B, professional chauffeurs provide an experience characterized by impeccable manners, extensive local knowledge, and unwavering discretion."
    },
    {
      id: 4,
      title: "Luxury Car Maintenance: Preserving Excellence",
      date: "August 8, 2025",
      excerpt: "Essential tips and practices for maintaining the performance and appearance of luxury vehicles.",
      category: "Maintenance",
      imageUrl: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "6 min read",
      likes: 63,
      views: 723,
      premium: false,
      content: "Maintaining a luxury vehicle requires specialized knowledge and attention to detail. From using only manufacturer-approved fluids to following precise service intervals, every aspect of care matters."
    },
    {
      id: 5,
      title: "Exploring Odisha's Hidden Gems by Luxury Car",
      date: "August 5, 2025",
      excerpt: "Discover the cultural richness and natural beauty of Odisha with the comfort of premium transportation.",
      category: "Odisha",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "8 min read",
      likes: 118,
      views: 1056,
      premium: true,
      content: "Odisha, on India's eastern coast, offers a perfect blend of ancient temples, pristine beaches, and vibrant culture. Exploring this region by luxury car allows you to experience its wonders in comfort and style. From the Sun Temple at Konark to the serene Chilika Lake, every destination becomes more accessible and enjoyable."
    },
    {
      id: 6,
      title: "Sustainable Luxury: Eco-Friendly Premium Vehicles",
      date: "August 3, 2025",
      excerpt: "How luxury car manufacturers are embracing sustainability without compromising on excellence.",
      category: "Innovation",
      imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min read",
      likes: 94,
      views: 892,
      premium: false,
      content: "Sustainability has become a central focus for luxury automakers, who are incorporating eco-friendly materials and processes without compromising on quality or performance."
    },
    {
      id: 7,
      title: "Iconic Luxury Cars That Shaped Automotive History",
      date: "July 30, 2025",
      excerpt: "A journey through time exploring the most influential luxury vehicles ever created.",
      category: "History",
      imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "9 min read",
      likes: 157,
      views: 1342,
      premium: true,
      content: "Throughout automotive history, certain models have transcended their function as mere transportation to become cultural icons."
    },
    {
      id: 8,
      title: "The Ultimate Guide to Corporate Car Services",
      date: "July 28, 2025",
      excerpt: "How businesses can leverage premium transportation to enhance their corporate image and efficiency.",
      category: "Business",
      imageUrl: "https://images.unsplash.com/photo-1563720223880-4d93eef1f1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "7 min read",
      likes: 72,
      views: 812,
      premium: false,
      content: "Corporate transportation services have evolved far beyond simple point-to-point transfers."
    },
    {
      id: 9,
      title: "Luxury Car Interior Design: Where Comfort Meets Technology",
      date: "July 25, 2025",
      excerpt: "Exploring the exquisite craftsmanship and advanced technology that define premium vehicle interiors.",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80",
      readTime: "6 min read",
      likes: 131,
      views: 1128,
      premium: true,
      content: "The interior of a luxury vehicle represents a sanctuary of comfort and technology."
    },
    {
      id: 10,
      title: "Must-Visit Temples of Odisha: A Spiritual Journey",
      date: "July 22, 2025",
      excerpt: "Explore the architectural marvels and spiritual sanctuaries of Odisha's ancient temples.",
      category: "Odisha",
      imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      readTime: "7 min read",
      likes: 92,
      views: 876,
      premium: false,
      content: "Odisha is home to some of India's most magnificent temple architecture. The Jagannath Temple in Puri, the Sun Temple at Konark, and the Lingaraj Temple in Bhubaneswar showcase extraordinary craftsmanship and spiritual significance. Each temple tells a story of devotion, artistry, and cultural heritage that spans centuries."
    },
    {
      id: 11,
      title: "Odisha's Culinary Delights: A Food Lover's Guide",
      date: "July 20, 2025",
      excerpt: "Savor the unique flavors and traditional dishes that make Odisha's cuisine unforgettable.",
      category: "Odisha",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
      readTime: "6 min read",
      likes: 78,
      views: 754,
      premium: true,
      content: "Odisha's cuisine is a delightful exploration of flavors, with dishes like Pakhala Bhata, Chhena Poda, and Machha Jhola. The state's coastal location ensures an abundance of fresh seafood, while its fertile plains provide diverse vegetables and grains. A culinary journey through Odisha is as rewarding as its cultural experiences."
    },
    {
      id: 12,
      title: "Luxury Car Technology: What's New in 2025",
      date: "July 18, 2025",
      excerpt: "Discover the latest technological innovations in the world of premium automobiles.",
      category: "Innovation",
      imageUrl: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min read",
      likes: 121,
      views: 1103,
      premium: false,
      content: "The luxury automotive sector continues to push boundaries with advanced technologies."
    }
  ];

  const categories = ["All", "Innovation", "Travel", "Service", "Maintenance", "Odisha", "History", "Business", "Design"];

  // Filter posts based on category and search query
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    : blogPosts.filter(post => 
        post.category === selectedCategory && 
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle scroll to top functionality
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

  // Animation variants
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

  // Car collage images
  const carCollageImages = [
    "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
    "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1601268859287-9cec8a74e9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
  ];

  // Odisha destination images
  const odishaImages = [
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Puri Beach",
      description: "Golden sands and spiritual ambiance"
    },
    {
      url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "Konark Sun Temple",
      description: "Architectural marvel from the 13th century"
    },
    {
      url: "https://images.unsplash.com/photo-1598239839630-e522415e4ca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Chilika Lake",
      description: "Asia's largest brackish water lagoon"
    },
    {
      url: "https://images.unsplash.com/photo-1612774412775-9df6cce80374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Daringbadi",
      description: "Kashmir of Odisha with pine forests"
    },
    {
      url: "https://images.unsplash.com/photo-1596461404969-9d4c4e303e14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Bhitarkanika Wildlife Sanctuary",
      description: "Mangrove ecosystem and saltwater crocodiles"
    },
    {
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Simlipal National Park",
      description: "Dense forests and majestic waterfalls"
    }
  ];

  // Different styling patterns for content sections
  const contentPatterns = [
    {
      bg: "bg-gradient-to-br from-amber-900/20 to-amber-800/30",
      border: "border-amber-500/20",
      text: "text-white"
    },
    {
      bg: "bg-gradient-to-br from-rose-900/20 to-rose-800/30",
      border: "border-rose-400/20",
      text: "text-white"
    },
    {
      bg: "bg-gradient-to-br from-emerald-900/20 to-emerald-800/30",
      border: "border-emerald-500/30",
      text: "text-white"
    }
  ];

  // Testimonials with enhanced content
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Business Executive",
      content: "The luxury car service transformed my business trips across Odisha. Comfort, reliability, and style made every journey exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "Travel Blogger",
      content: "Exploring Odisha's hidden gems in a luxury car was unforgettable. The comfort allowed me to fully appreciate the state's beauty.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      rating: 5
    },
    {
      name: "Michael Richardson",
      role: "International Tourist",
      content: "The chauffeur's knowledge of Odisha's cultural sites enhanced my experience tremendously. A perfect blend of luxury and local expertise.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans overflow-x-hidden">
      {/* Page Title Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-rose-900/40"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-400/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            Luxury Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Discover the world of premium automotive excellence, innovation, and exclusive travel experiences
          </p>
          
          {/* Search bar */}
          <motion.div 
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 pl-12 pr-4 bg-black/30 backdrop-blur-md rounded-full border border-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Category Filter - Fixed to work correctly */}
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
              className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-full mb-4"
            >
              <Filter size={18} className="mr-2"/> 
              {filterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <AnimatePresence>
              {filterOpen && (
                <motion.div 
                  className="flex flex-wrap justify-center gap-3 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories.map(cat => (
                    <motion.button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                  ${selectedCategory === cat 
                                    ? 'bg-amber-500 text-white shadow-lg' 
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white backdrop-blur-md'
                                  }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-amber-400">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {searchQuery ? ` for "${searchQuery}"` : ''}
          </p>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
              Featured Article
            </h2>
            
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 backdrop-blur-md relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium badge */}
              {filteredPosts[0].premium && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    <Star size={16} className="mr-1 fill-current" />
                    Premium
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="relative overflow-hidden rounded-xl group">
                  <img 
                    src={filteredPosts[0].imageUrl} 
                    alt={filteredPosts[0].title}
                    className="w-full h-80 object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredPosts[0].category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-amber-500 transition-colors">
                        <Bookmark size={16} />
                      </button>
                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-amber-500 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2 text-amber-400" />
                    <span>{filteredPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-2 text-amber-400" />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {filteredPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <motion.a 
                      href="#"
                      className="inline-flex items-center text-amber-400 font-medium hover:text-white transition-colors duration-300 group/readmore"
                      whileHover={{ x: 5 }}
                    >
                      Read Full Article
                      <ArrowRight size={18} className="ml-2 group-hover/readmore:translate-x-1 transition-transform" />
                    </motion.a>
                    
                    <div className="flex items-center space-x-4 text-gray-400">
                      <button className="flex items-center hover:text-amber-400 transition-colors">
                        <Heart size={16} className="mr-1" />
                        <span>{filteredPosts[0].likes}</span>
                      </button>
                      <button className="flex items-center hover:text-amber-400 transition-colors">
                        <Eye size={16} className="mr-1" />
                        <span>{filteredPosts[0].views}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Odisha Travel Guide Section */}
        <motion.section 
          className={`mb-16 p-8 rounded-2xl ${contentPatterns[0].bg} border ${contentPatterns[0].border} backdrop-blur-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
              Discover Odisha in Luxury
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the cultural richness and natural beauty of India's hidden gem with the comfort and style of premium transportation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Why Visit Odisha?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Odisha offers a perfect blend of ancient temples, pristine beaches, vibrant festivals, and exquisite cuisine. From the majestic Sun Temple at Konark to the serene Chilika Lake, every experience is enriched when traveled in luxury.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Castle className="text-amber-400 mr-2" size={20} />
                  <span className="text-white">Ancient Temples</span>
                </div>
                <div className="flex items-center">
                  <Waves className="text-amber-400 mr-2" size={20} />
                  <span className="text-white">Pristine Beaches</span>
                </div>
                <div className="flex items-center">
                  <Palette className="text-amber-400 mr-2" size={20} />
                  <span className="text-white">Rich Culture</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="text-amber-400 mr-2" size={20} />
                  <span className="text-white">Delicious Cuisine</span>
                </div>
              </div>
              
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Plan Your Odisha Journey
              </motion.button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {odishaImages.slice(0, 4).map((image, index) => (
                <motion.div 
                  key={index}
                  className="relative overflow-hidden rounded-xl group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h4 className="font-semibold">{image.title}</h4>
                      <p className="text-xs text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Luxury Fleet Showcase */}
        <motion.section 
          className={`mb-16 p-8 rounded-2xl ${contentPatterns[1].bg} border ${contentPatterns[1].border} backdrop-blur-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            Luxury Fleet Showcase
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {carCollageImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image} 
                  alt={`Luxury car ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-semibold">Premium Luxury</h4>
                    <p className="text-sm text-gray-300">Experience excellence</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Posts Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {currentPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-amber-500/20 backdrop-blur-md transition-all duration-300 hover:shadow-2xl relative"
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                custom={index}
              >
                {/* Premium badge */}
                {post.premium && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      <Star size={12} className="mr-1 fill-current" />
                      Premium
                    </div>
                  </div>
                )}
                
                <div className="relative overflow-hidden group">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-amber-500 transition-colors">
                        <Bookmark size={14} />
                      </button>
                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-amber-500 transition-colors">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-xs mb-3">
                    <Calendar size={14} className="mr-1 text-amber-400" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1 text-amber-400" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
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
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {post.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <motion.button 
                      onClick={() => toggleExpandPost(post.id)}
                      className="inline-flex items-center text-amber-400 text-sm font-medium hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {expandedPost === post.id ? "Show Less" : "Read More"}
                      {expandedPost === post.id ? (
                        <ChevronDown size={16} className="ml-1 rotate-180 transition-transform" />
                      ) : (
                        <Plus size={16} className="ml-1 transition-transform" />
                      )}
                    </motion.button>
                    
                    <div className="flex items-center space-x-3 text-gray-400 text-xs">
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
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Services Showcase */}
        <motion.section 
          className={`mb-16 p-8 rounded-2xl ${contentPatterns[2].bg} border ${contentPatterns[2].border} backdrop-blur-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            Our Premium Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4 mx-auto">
                <Car className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Car Rental</h3>
              <p className="text-gray-300 text-sm">Exquisite selection of premium vehicles for any occasion</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4 mx-auto">
                <Users className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chauffeur Services</h3>
              <p className="text-gray-300 text-sm">Professional drivers with extensive training and local knowledge</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-500/20"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4 mx-auto">
                <MapPin className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tour Packages</h3>
              <p className="text-gray-300 text-sm">Curated experiences to explore Odisha's cultural and natural wonders</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-amber-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <motion.button
                key={page}
                onClick={() => paginate(page)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-md
                            ${currentPage === page 
                              ? 'bg-amber-500 text-white shadow-lg' 
                              : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white/5 text-gray-300 hover:bg-amber-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Testimonials Section with Enhanced Design */}
        <motion.section 
          className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 backdrop-blur-md relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-400/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                }}
                animate={{
                  y: [0, Math.random() * 40 - 20, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-amber-500/20 backdrop-blur-md relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">"</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-amber-500">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-amber-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Subscription */}
        <motion.section 
          className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-amber-500/20 shadow-2xl text-center backdrop-blur-md relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-amber-400/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                }}
                animate={{
                  y: [0, Math.random() * 40 - 20, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <Newspaper size={64} className="text-amber-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-500">
            Stay Updated with Luxury Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get the latest articles, exclusive offers, and expert tips on luxury car rentals directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-3 rounded-full bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent border border-amber-500/30 backdrop-blur-md"
            />
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-lg transition-all duration-300"
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
            className="fixed bottom-8 right-8 p-4 bg-amber-500 text-white rounded-full shadow-lg z-50"
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

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Blog;
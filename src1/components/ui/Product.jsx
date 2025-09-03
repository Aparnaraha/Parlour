import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Heart, Info, Star, X } from "lucide-react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});

  // Section animation with float
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Container stagger for cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animations with float
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.08,
      y: -10,
      boxShadow: "0px 25px 60px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  // Modal animation
  const detailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  // Updated product list with Indian Rupee sign and reduced prices
  const products = [
    { name: "Luxury Hair Wax", desc: "Strong hold with natural shine.", price: "₹250", rating: 5, id: 1, img: "https://images.pexels.com/photos/3992877/pexels-photo-3992877.jpeg", details: "Non-greasy matte finish, all-day hold, made with beeswax and nourishing oils." },
    { name: "Beard Grooming Kit", desc: "Complete beard care essentials.", price: "₹400", rating: 4, id: 2, img: "https://images.pexels.com/photos/3998425/pexels-photo-3998425.jpeg", details: "Includes beard oil, balm, boar bristle brush, wooden comb & travel pouch." },
    { name: "Facial Cleanser", desc: "Gentle deep cleaning.", price: "₹300", rating: 4, id: 3, img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg", details: "Charcoal + tea tree oil formula, removes impurities, suitable for all skin types." },
    { name: "Hair Dryer Pro", desc: "Salon-grade fast drying.", price: "₹800", rating: 5, id: 4, img: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg", details: "Lightweight, ionic tech for shine, multiple heat/speed settings, quiet motor." },
    { name: "Premium Razor", desc: "Smooth, irritation-free shave.", price: "₹350", rating: 4, id: 5, img: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg", details: "Ergonomic handle, precision blades, lubricating strip, compatible cartridges." },
    { name: "Skincare Set", desc: "Complete men’s skincare bundle.", price: "₹900", rating: 5, id: 6, img: "https://images.pexels.com/photos/3735613/pexels-photo-3735613.jpeg", details: "Includes cleanser, toner, moisturizer, anti-aging serum for healthy skin." },
    { name: "Grooming Scissors", desc: "Sharp & ergonomic design.", price: "₹220", rating: 4, id: 7, img: "https://images.pexels.com/photos/6621243/pexels-photo-6621243.jpeg", details: "Stainless steel precision scissors, ergonomic grip, travel case included." },
    { name: "Luxury Perfume", desc: "Bold, long-lasting fragrance.", price: "₹1100", rating: 5, id: 8, img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg", details: "Notes of sandalwood, musk, bergamot, presented in elegant glass bottle." },
    { name: "Aftershave Balm", desc: "Soothes & refreshes.", price: "₹280", rating: 4, id: 9, img: "https://images.pexels.com/photos/3735636/pexels-photo-3735636.jpeg", details: "Aloe vera & chamomile infused, reduces irritation, hydrates skin." },
    { name: "Luxury Shampoo", desc: "Strengthens & nourishes.", price: "₹320", rating: 5, id: 10, img: "https://images.pexels.com/photos/3735630/pexels-photo-3735630.jpeg", details: "Keratin enriched formula, adds shine & volume, sulfate-free." },
    { name: "Electric Trimmer", desc: "Precision trimming tool.", price: "₹600", rating: 5, id: 11, img: "https://images.pexels.com/photos/3992872/pexels-photo-3992872.jpeg", details: "Cordless design, multiple guards, fast charge, ergonomic grip." },
    { name: "Face Mask Pack", desc: "Rejuvenating skincare masks.", price: "₹250", rating: 4, id: 12, img: "https://images.pexels.com/photos/3735614/pexels-photo-3735614.jpeg", details: "Hydrating, brightening, and detox masks for weekly skin care." },
  ];

  const handleLike = (id) => {
    setLikedProducts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="font-sans">
      {/* Parallax Hero (Optimized with CSS) */}
      <div 
        className="relative h-[40vh] overflow-hidden flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/3992877/pexels-photo-3992877.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={sectionHeaderVariants} className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg">Premium Grooming Products</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Discover our curated collection, crafted to elevate your style and grooming routine.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 container mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl cursor-pointer bg-white backdrop-blur-xl border border-gray-200 group card-with-gradient-border"
              variants={cardVariants}
              whileHover="hover"
            >
              <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-2xl font-bold drop-shadow-md">{product.name}</h3>
                <p className="text-sm opacity-80 mt-2">{product.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(product.rating)].map((_, starIndex) => (
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
                    onClick={(e) => { e.stopPropagation(); handleLike(product.id); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" fill={likedProducts[product.id] ? "red" : "white"} /> Like
                  </motion.button>
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border border-white text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
                  >
                    <Info className="w-5 h-5" /> Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div className="fixed inset-0 bg-gray-200/90 backdrop-blur-lg flex items-center justify-center p-4 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="relative bg-white text-gray-900 p-8 rounded-2xl max-w-2xl w-full mx-auto shadow-2xl overflow-hidden border border-gray-200"
              variants={detailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 overflow-hidden rounded-xl">
                  <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-500 text-lg mb-4">{selectedProduct.desc}</p>
                  <div className="flex items-center text-gray-800 mb-4">
                    <span className="text-2xl font-bold mr-2">{selectedProduct.price}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(selectedProduct.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedProduct.details}</p>
                  <div className="flex gap-4">
                    <button onClick={() => handleLike(selectedProduct.id)} className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition">
                      <Heart className="w-5 h-5" fill={likedProducts[selectedProduct.id] ? "red" : "white"} /> Like
                    </button>
                    <button className="flex-1 border border-gray-400 text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">
                      <Info className="w-5 h-5" /> More Info
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

export default Products;
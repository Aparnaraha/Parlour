import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowLeft } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I book an appointment?",
    answer:
      "You can easily book an appointment through our online booking calendar. Simply select your preferred date, time, and service.",
    category: "appointments",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "We offer a wide range of premium grooming and makeover services, including haircuts, styling, coloring, facials, and more. You can view all options on our services page.",
    category: "services",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as secure online payment gateways. You can confirm your slot instantly with simple and secure payment options.",
    category: "appointments",
  },
  {
    id: 4,
    question: "Is there a cancellation policy?",
    answer:
      "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any charge. Cancellations within 24 hours may be subject to a fee.",
    category: "appointments",
  },
  {
    id: 5,
    question: "How do I know which service is right for me?",
    answer:
      "Our team of experts is happy to provide a free consultation to help you choose the best service for your needs and preferences.",
    category: "services",
  },
  {
    id: 6,
    question: "Do you offer group bookings?",
    answer:
      "Absolutely! We offer special packages for groups, including bridal parties, corporate events, and other special occasions. Contact us for details.",
    category: "appointments",
  },
  {
    id: 7,
    question: "Can I bring my own products?",
    answer:
      "While we primarily use our premium, in-house products, we are happy to accommodate special requests. Please inform your stylist during the consultation.",
    category: "products",
  },
  {
    id: 8,
    question: "Do you have a loyalty program?",
    answer:
      "Yes, we have a premium loyalty program that rewards you for every visit. Members receive exclusive discounts, priority booking, and special offers.",
    category: "general",
  },
  {
    id: 9,
    question: "Are your stylists professionally certified?",
    answer:
      "All of our stylists are certified professionals with years of experience in their fields. We regularly invest in training to keep their skills up-to-date.",
    category: "general",
  },
  {
    id: 10,
    question: "What should I do if I am running late?",
    answer:
      "Please call us as soon as you know you'll be late. We'll do our best to accommodate you, but please be aware that we may have to shorten your service to avoid disrupting other clients.",
    category: "appointments",
  },
  {
    id: 11,
    question: "Do you offer gift cards?",
    answer:
      "Yes, gift cards are available for purchase both in-store and on our website. They make the perfect gift for any occasion!",
    category: "general",
  },
  {
    id: 12,
    question: "Is your salon accessible for people with disabilities?",
    answer:
      "Our salon is fully accessible, with ramps and wide doorways. Please let us know if you have any specific needs when booking so we can prepare for your visit.",
    category: "general",
  },
  {
    id: 13,
    question: "How do you ensure cleanliness and hygiene?",
    answer:
      "We follow the highest standards of cleanliness and hygiene. All tools and stations are sanitized between each client, and we maintain a clean and welcoming environment at all times.",
    category: "general",
  },
  {
    id: 14,
    question: "What is your return policy for products purchased?",
    answer:
      "Unopened and unused products can be returned within 30 days of purchase for a full refund. Please bring your receipt with you.",
    category: "products",
  },
  {
    id: 15,
    question: "Can I request a specific stylist?",
    answer:
      "Yes, you can request a specific stylist when booking your appointment online or by calling us directly. Stylist availability may vary.",
    category: "services",
  },
  {
    id: 16,
    question: "Do you cater to all hair types?",
    answer:
      "Our stylists are trained to work with a diverse range of hair types and textures, from straight and fine to curly and coily.",
    category: "services",
  },
  {
    id: 17,
    question: "What brands of products do you use?",
    answer:
      "We partner with several leading professional brands known for their high-quality, effective, and ethically-sourced ingredients. Ask your stylist for more information during your visit.",
    category: "products",
  },
  {
    id: 18,
    question: "How do I leave a review?",
    answer:
      "We would love to hear your feedback! You can leave a review on our website or on our social media pages. Your input helps us improve.",
    category: "general",
  },
  {
    id: 19,
    question: "What is the best time to visit for a quiet experience?",
    answer:
      "Our busiest times are typically on weekends and evenings. For a more relaxed and quiet visit, we recommend booking a weekday morning or afternoon appointment.",
    category: "appointments",
  },
  {
    id: 20,
    question: "Do you offer makeup services for special events?",
    answer:
      "Yes, our makeup artists specialize in looks for weddings, parties, photoshoots, and other special events. We offer both in-salon and on-location services.",
    category: "services",
  },
  {
    id: 21,
    question: "Can I get a consultation before my service?",
    answer:
      "Absolutely. A consultation is a key part of our service. It's a no-obligation conversation where your stylist listens to your needs and gives expert recommendations.",
    category: "services",
  },
  {
    id: 22,
    question: "Do you provide complimentary drinks?",
    answer:
      "Yes, we offer a selection of complimentary beverages, including water, coffee, tea, and sparkling water, to enhance your relaxing experience.",
    category: "general",
  },
  {
    id: 23,
    question: "What safety measures are in place due to COVID-19?",
    answer:
      "We continue to prioritize the health and safety of our clients and staff. We adhere to all local health guidelines, which includes maintaining a clean and sanitized environment.",
    category: "general",
  },
];

const categories = ["appointments", "services", "products", "general"];

const categoryNames = {
  appointments: "Appointments",
  services: "Services",
  products: "Products",
  general: "General",
};

const categoryGradients = {
  appointments: "from-blue-400 to-indigo-600",
  services: "from-pink-400 to-purple-600",
  products: "from-green-400 to-teal-600",
  general: "from-yellow-400 to-orange-600",
};

const categoryIcons = {
  appointments: <i className="fas fa-calendar-check" />,
  services: <i className="fas fa-cut" />,
  products: <i className="fas fa-box" />,
  general: <i className="fas fa-info-circle" />,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardItem = {
  hidden: { y: 20, opacity: 0, rotateX: 20 },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const buttonContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const buttonItem = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

const PremiumFaqSection = () => {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpenId(null);
    setSearchQuery("");
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setOpenId(null);
    setSearchQuery("");
  };

  const allFilteredFaqs = faqs.filter((faq) => {
    return (
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const categoryFilteredFaqs = faqs.filter((faq) => {
    const matchesCategory = faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayFaqs = selectedCategory
    ? categoryFilteredFaqs
    : allFilteredFaqs;

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const isFiltered = selectedCategory || searchQuery;

  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className={`text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg transition-all duration-500 ${
            selectedCategory
              ? "bg-clip-text text-transparent bg-gradient-to-r " +
                categoryGradients[selectedCategory]
              : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {selectedCategory ? (
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {categoryNames[selectedCategory]} FAQs
              </motion.span>
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              <motion.span
                key="faq-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  Frequently
                </span>{" "}
                Asked Questions
              </motion.span>
            </AnimatePresence>
          )}
        </motion.h2>

        <motion.p className="text-gray-600 mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Browse our topics or search for the answers you're looking for.
        </motion.p>

        <motion.div
          className="relative w-full max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search all FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 pl-12 pr-6 text-gray-900 border-2 border-transparent rounded-full shadow-lg transition-all duration-500 bg-white/80 backdrop-blur-md focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
            />
            <motion.div
              className="absolute inset-y-0 left-0 flex items-center pl-4"
              initial={{ color: "#9ca3af" }}
              animate={{
                color: searchQuery.length > 0 ? "#f97316" : "#9ca3af",
              }}
              transition={{ duration: 0.3 }}
            >
              <Search className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isFiltered ? (
            <motion.div
              key="initial-view"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-8"
                variants={buttonContainer}
                initial="hidden"
                animate="show"
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform-gpu
                       bg-white/60 text-gray-700 shadow-xl hover:bg-white hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                    variants={buttonItem}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {categoryIcons[category]}
                    {categoryNames[category]}
                  </motion.button>
                ))}
              </motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                {faqs.slice(0, 2).map((faq) => (
                  <motion.div
                    key={faq.id}
                    className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 overflow-hidden cursor-pointer
                    transition-all duration-300 transform-gpu group"
                    variants={cardItem}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 20px 40px rgba(0,0,0,0.1), 0 0 20px rgba(255,165,0,0.3)",
                    }}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <ChevronDown className="h-6 w-6 text-orange-500 drop-shadow-md" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              delay: 0.1,
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.2 },
                          }}
                          className="px-0 pb-0 pt-4 text-gray-600 text-left"
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="filtered-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={handleBack}
                className="mb-8 flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="h-5 w-5" /> Back to Categories
              </motion.button>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                {displayFaqs.length > 0 ? (
                  displayFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 overflow-hidden cursor-pointer
                      transition-all duration-300 transform-gpu group"
                      variants={cardItem}
                      whileHover={{
                        scale: 1.02,
                        boxShadow:
                          "0 20px 40px rgba(0,0,0,0.1), 0 0 20px rgba(255,165,0,0.3)",
                      }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pointer-events-none" />
                      <div className="relative z-10 flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-left">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openId === faq.id ? 180 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                        >
                          <ChevronDown className="h-6 w-6 text-orange-500 drop-shadow-md" />
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                delay: 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                              },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.2 },
                            }}
                            className="px-0 pb-0 pt-4 text-gray-600 text-left"
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.p
                    className="text-gray-500 text-lg py-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    No results found. Please try a different search or category.
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PremiumFaqSection;
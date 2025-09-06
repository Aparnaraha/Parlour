import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowLeft, CalendarCheck, Scissors, Box, Info } from "lucide-react";

// Move static data outside the component to prevent re-creation on every render
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
      "Our team of experts is happy to provide a free consultation to help you choose the best service for your needs and style. Simply mention it during your booking.",
    category: "services",
  },
  {
    id: 6,
    question: "What products do you use?",
    answer:
      "We use only premium, high-quality products from trusted brands. Our focus is on providing the best results while prioritizing the health and safety of your skin and hair.",
    category: "products",
  },
  {
    id: 7,
    question: "Are your stylists certified?",
    answer:
      "Yes, all of our stylists are certified professionals with extensive training and experience in the latest grooming and styling techniques.",
    category: "general",
  },
  {
    id: 8,
    question: "Do you offer any loyalty programs?",
    answer:
      "We have an exclusive rewards program for our regular clients. You can earn points with every service that can be redeemed for discounts on future visits.",
    category: "general",
  },
];

const categories = [
  { id: "all", name: "All", icon: <ArrowLeft size={16} /> },
  { id: "appointments", name: "Appointments", icon: <CalendarCheck size={16} /> },
  { id: "services", name: "Services", icon: <Scissors size={16} /> },
  { id: "products", name: "Products", icon: <Box size={16} /> },
  { id: "general", name: "General", icon: <Info size={16} /> },
];

const colors = {
  primaryBg: "bg-gray-950",
  secondaryBg: "bg-gray-900",
  primaryText: "text-white",
  secondaryText: "text-gray-400",
  headingText: "text-yellow-400",
  iconBg: "bg-yellow-400",
};

const PremiumFaqSection = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFaqId, setOpenFaqId] = useState(null);

  // Use useMemo to prevent re-calculating the filtered list on every render
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSelectCategory = (id) => setSelectedCategory(id);
  const handleToggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className={`py-16 md:py-24 ${colors.primaryBg} font-sans`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-white drop-shadow-md">
            Frequently Asked Questions
          </h2>
          <p className={`${colors.secondaryText} max-w-2xl mx-auto leading-relaxed`}>
            Find quick answers to the most common questions about our services, booking, and more.
          </p>
        </div>

        {/* Search & Categories */}
        <motion.div
          className="bg-gray-800 p-4 rounded-xl shadow-lg mb-8 md:flex md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 md:gap-4 md:w-3/4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`flex items-center gap-2 text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-200
                  ${selectedCategory === cat.id
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg transform scale-105"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative mt-4 md:mt-0 md:w-1/4">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 pr-10 text-white bg-gray-700 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </motion.div>

        {/* FAQ List */}
        <AnimatePresence mode="wait">
          {filteredFaqs.length > 0 ? (
            <motion.div
              key={selectedCategory + searchTerm}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
            >
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleToggleFaq(faq.id)}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <motion.span
                      animate={{ rotate: openFaqId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400"
                    >
                      <ChevronDown size={24} />
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {openFaqId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-gray-700 text-gray-300"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className={`text-lg py-10 ${colors.secondaryText} text-center col-span-1 md:col-span-2`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              No results found. Please try a different search or category.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default PremiumFaqSection;
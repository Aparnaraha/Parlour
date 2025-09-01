import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Check, HeartHandshake, Smile, Users, Star } from 'lucide-react';

const OurServices = () => {
  // Variants for individual service section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Variants for the content within each service section
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const services = [
    {
      title: "Haircut & Styling",
      icon: <Scissors className="w-4 h-4 mr-2 text-yellow-400" />,
      badge: "Sharp Styles",
      desc: "Our expert barbers deliver precision haircuts and modern styles tailored to your unique look. From classic cuts to the latest trends, we'll make sure you look your best.",
      features: ["Precision cuts", "Modern styling", "Beard trim included", "Scalp massage"],
      imgSrc: "https://placehold.co/800x600/E8E9F3/384787?text=Haircut+Service",
    },
    {
      title: "Facial & Clean-up",
      icon: <Sparkles className="w-4 h-4 mr-2 text-[#3498db]" />,
      badge: "Relaxing Treatments",
      desc: "Revitalize your skin with our professional facials and clean-up services. We use high-quality products to cleanse, exfoliate, and hydrate your skin for a fresh, healthy glow.",
      features: ["Deep cleansing", "Exfoliation", "Hydrating masks", "Head and shoulder massage"],
      imgSrc: "https://placehold.co/800x600/D4E0EE/2C3E50?text=Skincare+Service",
    },
    {
      title: "Beard Grooming",
      icon: <HeartHandshake className="w-4 h-4 mr-2 text-blue-500" />,
      badge: "Perfect Grooming",
      desc: "Tame your mane with our specialized beard grooming services. We offer professional trimming, shaping, and conditioning to keep your beard looking sharp and well-maintained.",
      features: ["Precision shaping", "Beard oil treatment", "Hot towel service", "After-shave balm"],
      imgSrc: "https://placehold.co/800x600/F0E6D2/5A4E3A?text=Beard+Grooming",
    },
    {
      title: "Manicure & Pedicure",
      icon: <Smile className="w-4 h-4 mr-2 text-[#3498db]" />,
      badge: "Hand & Foot Care",
      desc: "Give your hands and feet the care they deserve. Our manicure and pedicure services will leave your nails and skin looking clean, healthy, and polished.",
      features: ["Nail shaping and buffing", "Cuticle care", "Exfoliating scrub", "Relaxing massage"],
      imgSrc: "https://placehold.co/800x600/EBE8F3/6A5ACD?text=Manicure+Pedicure",
    },
    {
      title: "Groom's Makeup",
      icon: <Users className="w-4 h-4 mr-2 text-blue-500" />,
      badge: "Wedding Ready",
      desc: "Prepare for your big day with our professional groom's makeup services. Our artists use subtle techniques to even out skin tone and ensure you look picture-perfect.",
      features: ["Skin priming", "Light foundation", "Concealer for blemishes", "Matte finish"],
      imgSrc: "https://placehold.co/800x600/D2F0E6/3A5A4E?text=Groom's+Makeup",
    },
    {
      title: "Special Occasion Makeup",
      icon: <Star className="w-4 h-4 mr-2 text-[#3498db]" />,
      badge: "Event Ready",
      desc: "Look your best for any special event with our professional makeup services. We'll enhance your features to give you a natural and confident look for any occasion.",
      features: ["Customized look", "Natural finish", "Long-lasting products", "Touch-up kit provided"],
      imgSrc: "https://placehold.co/800x600/F3E8E8/CD6A6A?text=Occasion+Makeup",
    },
  ];

  return (
    <div className="font-sans">
      {/* Heading Section with full-width white background */}
     {/* Heading Section */}
<div className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 text-center text-white">
  <motion.div
    className="container mx-auto px-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Tag with Icon */}
    <div className="inline-flex items-center px-4 py-2 mb-5 border border-white/40 rounded-full text-yellow-400 font-semibold text-sm bg-white/10 backdrop-blur-sm shadow-sm">
      <Scissors className="w-4 h-4 mr-2 text-yellow-400" /> Our Gents Parlour Services
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide text-white">
      Elevate Your Look
    </h1>

    {/* Gradient Line */}
    <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4"></div>

    {/* Subheading */}
    <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
      Discover our wide range of professional grooming services, from a fresh haircut 
      to a rejuvenating facial, designed to help you look and feel your best.
    </p>
  </motion.div>
</div>


      {/* Services Section with main background and scrollable content */}
      <div className="bg-gradient-to-br from-[#F5F2EC] to-[#EDECE9] flex flex-col items-center p-8 lg:p-16">
        <div className="w-full flex flex-col items-center gap-24 py-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center w-full max-w-6xl p-6 lg:p-12 space-y-12 lg:space-y-0 lg:gap-x-12`}
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Service Text and Features */}
              <motion.div
                className="flex-1 space-y-8"
                variants={index % 2 === 0 ? textVariants : imageVariants}
              >
                <div className="inline-flex items-center px-4 py-2 border border-blue-200 bg-blue-50 rounded-full text-[#1e4598] font-semibold text-sm">
                  {service.icon} {service.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#333]">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
                <ul className="list-none p-0 m-0 space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2" /> {feature}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Book Now →
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>

              {/* Service Image */}
              <motion.div
                className="relative flex-1 w-full lg:w-auto p-4 lg:p-6 rounded-[32px] shadow-xl backdrop-blur-sm"
                style={{ boxShadow: "0px 0px 50px rgba(0,0,0,0.5)" }}
                variants={index % 2 === 0 ? imageVariants : textVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-auto rounded-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#3a609d" }}
                  className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold py-1.5 px-4 rounded-full"
                >
                  Professional Service
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#1e4598", color: "#ffffff" }}
                  className="absolute -bottom-4 -left-4 bg-blue-50 text-[#1e4598] text-xs font-bold py-1.5 px-4 rounded-full"
                >
                  Best Value
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
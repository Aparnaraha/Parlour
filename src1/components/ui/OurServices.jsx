import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Check, HeartHandshake, Users, Star, Droplets, X } from 'lucide-react';
import EnquiryFormModal from '../ui/EnquiryModalForm';

// Main Services Component
const OurServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnquiry = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
            category: "hair", // Added category for routing
            icon: <Scissors className="w-4 h-4 mr-2 text-yellow-400" />,
            badge: "Sharp Styles",
            desc: "Our expert barbers deliver precision haircuts and modern styles tailored to your unique look. From classic cuts to the latest trends, we'll make sure you look your best.",
            features: ["Precision cuts", "Modern styling", "Beard trim included", "Scalp massage"],
            imgSrc: "https://qtxasset.com/quartz/qcloud2/media/image/2017-07/barber3.jpg?VersionId=QBJorlw0y78QUoDiwH0lichSGwjceYjX",
        },
        {
            title: "Facial & Clean-up",
            category: "skin", // Added category for routing
            icon: <Sparkles className="w-4 h-4 mr-2 text-[#3498db]" />,
            badge: "Relaxing Treatments",
            desc: "Revitalize your skin with our professional facials and clean-up services. We use high-quality products to cleanse, exfoliate, and hydrate your skin for a fresh, healthy glow.",
            features: ["Deep cleansing", "Exfoliation", "Hydrating masks", "Head and shoulder massage"],
            imgSrc: "https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/HealthBeauty_HigherImpact_Thumbnail._TTW_.jpg",
        },
        {
            title: "Beard Grooming",
            category: "hair", // Added category for routing
            icon: <HeartHandshake className="w-4 h-4 mr-2 text-blue-500" />,
            badge: "Perfect Grooming",
            desc: "Tame your mane with our specialized beard grooming services. We offer professional trimming, shaping, and conditioning to keep your beard looking sharp and well-maintained.",
            features: ["Precision shaping", "Beard oil treatment", "Hot towel service", "After-shave balm"],
            imgSrc: "https://cache3.youla.io/files/images/780_780/5c/ed/5ced25e102a558529a50b377.jpg",
        },
        {
            title: "Hair & Scalp Treatment", // New service title
            category: "hair", // Added category
            icon: <Droplets className="w-4 h-4 mr-2 text-[#3498db]" />, // New icon
            badge: "Healthy Hair",
            desc: "Strengthen and nourish your hair from root to tip. Our treatments combat issues like dandruff, hair fall, and dryness, restoring vitality and shine.",
            features: ["Anti-dandruff therapy", "Hair spa and massage", "Keratin treatment", "Hair growth stimulation"], // Updated features
            imgSrc: "https://avatars.mds.yandex.net/get-ydo/11397567/2a0000018bf3fef914467833c98fc941e7da/diploma", // A more relevant image
        },
        {
            title: "Groom's Makeup",
            category: "makeup", // Added category for routing
            icon: <Users className="w-4 h-4 mr-2 text-blue-500" />,
            badge: "Wedding Ready",
            desc: "Prepare for your big day with our professional groom's makeup services. Our artists use subtle techniques to even out skin tone and ensure you look picture-perfect.",
            features: ["Skin priming", "Light foundation", "Concealer for blemishes", "Matte finish"],
            imgSrc: "https://cdn0.weddingwire.in/img_e_12832/2/8/3/2/r10_2x_img-4341_15_12832.jpg",
        },
        {
            title: "Special Occasion Makeup",
            category: "makeup", // Added category for routing
            icon: <Star className="w-4 h-4 mr-2 text-[#3498db]" />,
            badge: "Event Ready",
            desc: "Look your best for any special event with our professional makeup services. We'll enhance your features to give you a natural and confident look for any occasion.",
            features: ["Customized look", "Natural finish", "Long-lasting products", "Touch-up kit provided"],
            imgSrc: "https://avatars.mds.yandex.net/i?id=2458b0dcd622e13b485089072db66c657789c3ee-10967292-images-thumbs&n=13",
        },
    ];

    const handleLearnMore = (category) => {
        window.location.href = `/services/${category}`;
    };

    return (
        <div className="font-sans">
            {/* Heading Section */}
            <div className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-20 text-center text-white">
                <motion.div
                    className="container mx-auto px-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center px-4 py-2 mb-5 border border-white/40 rounded-full text-yellow-400 font-semibold text-sm bg-white/10 backdrop-blur-sm shadow-sm">
                        <Scissors className="w-4 h-4 mr-2 text-yellow-400" /> Our Gents Parlour Services
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide text-white">
                        Elevate Your Look
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
                        Discover our wide range of professional grooming services, from a fresh haircut 
                        to a rejuvenating facial, designed to help you look and feel your best.
                    </p>
                </motion.div>
            </div>
            {/* Services Section */}
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
                                className="flex-1 space-y-6 lg:space-y-8"
                                variants={index % 2 === 0 ? textVariants : imageVariants}
                            >
                                <div className="inline-flex items-center px-4 py-2 border border-blue-200 bg-blue-50 rounded-full text-[#1e4598] font-semibold text-sm">
                                    {service.icon} {service.badge}
                                </div>
                                <h2 className="text-3xl lg:text-3xl font-bold text-[#333]">{service.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
                                <ul className="list-none p-0 m-0 space-y-3">
                                    {service.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center text-gray-800 text-base"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                        >
                                            <Check className="w-4 h-4 text-green-500 mr-2" /> {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    {/* Primary Button with Gold Gradient - Changed to "Enquiry" */}
                                    <motion.button
                                        onClick={handleEnquiry}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base text-white shadow-2xl transition-all border border-transparent"
                                        style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }}
                                    >
                                        Enquiry →
                                    </motion.button>
                                    
                                    {/* Secondary Button with Blue-Gray Gradient */}
                                    <motion.button
                                        onClick={() => handleLearnMore(service.category)}
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all border border-transparent text-white"
                                        style={{ background: 'linear-gradient(90deg, #3498db 0%, #2c3e50 100%)' }}
                                        whileHover={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)', scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
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
            
            {/* Enquiry Modal Component */}
            <EnquiryFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
            
        </div>
    );
};

export default OurServices;
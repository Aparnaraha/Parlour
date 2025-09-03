// TwoColumnCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Assuming you have react-router-dom and want to use it
import { useNavigate } from 'react-router-dom'; 

// Import the new modal component
import BookingModal from '../ui/EnquiryModalForm';

const TwoColumnCard = () => {
  const navigate = useNavigate();
  // State to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Handlers for the buttons
  const handleAppointmentClick = () => {
    setIsModalOpen(true);
  };

  const handleServicesClick = () => {
    // This will navigate to the /services/skin route
    navigate('/services/skin'); 
  };
  
  return (
    <>
      {/* ... (existing link and style tags) ... */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      
      <style>{`
        /* ... (existing CSS) ... */
      `}</style>
      
      <section className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[#21242c] font-['Inter',sans-serif]">
        {/* Main Card Container with animated border effect */}
        <motion.div
          className="w-full max-w-5xl shadow-2xl flex flex-col md:flex-row animated-border-container"
          style={{
            background: '#1d212a',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* ... (existing Left Section) ... */}
          <motion.div 
            className="flex-1 p-6 sm:p-8 flex flex-col justify-center md:border-r md:border-white/20"
            style={{ backgroundColor: '#2c3e50' }}
            variants={itemVariants}
          >
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
              Crafting Your <br className="hidden sm:inline" />
              <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Signature Look</span> with Precision
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                Experience world-class grooming services for the modern man, including expert haircuts, refreshing skin treatments, and flawless makeup.
            </p>
            
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center text-gray-200">
                <i className="fa-solid fa-scissors w-5 h-5 mr-2 text-yellow-400" />
                <span>Expert haircuts and styling available</span>
              </div>
              <div className="flex items-center text-gray-200">
                <i className="fa-solid fa-hand-sparkles w-5 h-5 mr-2 text-yellow-400" />
                <span>Refreshing skin treatments and facials</span>
              </div>
            </div>
          </motion.div>
          
          {/* ... (existing Right Section) ... */}
          <motion.div 
            className="flex-1 p-6 sm:p-8 flex flex-col justify-center text-white"
            style={{ backgroundColor: '#1d212a' }}
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-snug">
              Start Your <span style={{ background: 'linear-gradient(90deg, #FFA500 0%, #FFD700 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Grooming Journey</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
                Our expert stylist will contact you within 24 hours.
            </p>
            
            <div className="space-y-4">
              {/* Updated onClick handler for the "Book an Appointment" button */}
              <motion.button
                onClick={handleAppointmentClick}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base shadow-2xl transition-all border border-transparent"
                style={{ background: 'linear-gradient(90deg, #FF9800 0%, #FFD700 100%)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fa-solid fa-calendar-check w-5 h-5" /> Enquire an Appointment
              </motion.button>
              
              {/* Updated onClick handler for the "View Our Services" button */}
              <motion.button
                onClick={handleServicesClick}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all border border-white/20"
                style={{ background: 'linear-gradient(90deg, #3498db 0%, #2c3e50 100%)' }}
                whileHover={{ background: 'linear-gradient(90deg, #2c3e50 0%, #3498db 100%)' }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fa-solid fa-eye w-5 h-5" /> View Our Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Conditionally render the modal based on state */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default TwoColumnCard;
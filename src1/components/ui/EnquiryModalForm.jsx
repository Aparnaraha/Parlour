import { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data for the services dropdown in the form
const serviceOptions = [
    { value: 'haircut', label: 'Haircut & Styling' },
    { value: 'skincare', label: 'Skin Treatment' },
    { value: 'makeup', label: 'Makeup Application' },
    { value: 'other', label: 'Other' },
];

/**
 * A modal component for capturing user enquiries and sending them via WhatsApp.
 * It includes an animated backdrop and a form with fields for name, phone, service, and message.
 * The modal uses Framer Motion for smooth entry and exit animations.
 *
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.onClose - A function to call when the modal needs to be closed.
 */
const EnquiryFormModal = memo(({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

    // Use useCallback to memoize this function
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    // Use useCallback to memoize this function
    const handleClose = useCallback(() => {
        // Reset form data and close the modal
        setFormData({ name: '', phone: '', service: '', message: '' });
        onClose();
    }, [onClose]);

    // Use useCallback to memoize this function
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const { name, phone, service, message } = formData;
        
        // This is a placeholder number. Replace with the actual WhatsApp number.
        const whatsappNumber = "919329182237"; 

        const preFilledMessage = `Hello, I would like to make an enquiry.\n\nName: ${name}\nPhone: ${phone}\nService: ${serviceOptions.find(opt => opt.value === service)?.label || 'Not specified'}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        handleClose();
    }, [formData, handleClose]);
    
    // Gradient style for the button and text
    const GRADIENT = 'linear-gradient(90deg, #FFD700 0%, #FF9800 100%)';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark backdrop with blur effect */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    ></motion.div>

                    {/* Modal container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center z-[100] px-4 py-8 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="bg-[#1d212a] p-8 rounded-lg shadow-2xl max-w-md w-full border border-gray-700 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            {/* Modal Header */}
                            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#FF9800] to-[#FFD700] text-transparent bg-clip-text">Make an Enquiry</h2>
                            <p className="text-[#e0e0e0] mb-6 text-sm">Fill out the form below and we'll connect with you on WhatsApp.</p>
                            
                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-400">Interested Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                                        required
                                    >
                                        <option value="" disabled>Select a service</option>
                                        {serviceOptions.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 bg-[#2a303d] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-[#FFD700] focus:border-[#FFD700]"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#1d212a] bg-[#FFD700] hover:bg-[#FF9800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] transition-colors"
                                    style={{ background: GRADIENT, color: '#1d212a' }}
                                >
                                    Send Enquiry via WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
});

export default EnquiryFormModal;
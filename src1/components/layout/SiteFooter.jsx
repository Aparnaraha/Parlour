"use client" // Needed for Framer Motion

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Phone, MapPin, Mail, Star, Facebook, Twitter, Instagram, Linkedin, Scissors, HandPlatter, Sparkles, Diamond, Hourglass, X
} from 'lucide-react';

const AllexFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [showTermsModal, setShowTermsModal] = useState(false);

  const servicesList = [
    'Hair Styling',
    'Spa & Massage',
    'Facial & Skincare',
    'Bridal Packages',
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !service) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const phoneNumber = '9876543210';
    const message = `Hello Allex Gents Parlour, I would like to get in touch. My name is ${name}. My email is ${email}. I am interested in your ${service} service.`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setName('');
    setEmail('');
    setService('');
  };
  
  // Removed all `useInView` hooks and `variants` props from the top-level
  // motion.footer component to make it instantly visible.
  // Individual child animations (like hover effects) are retained.

  return (
    <motion.footer
      className="relative text-neutral-400 py-12 overflow-hidden"
      style={{ background: '#1d212a' }}
      // No initial, animate, or variants here for instant visibility
    >
      {/* Dynamic background gradient layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, #21242c, #1d212a, #2c3e50)' }}></div>

      {/* Newsletter Form Section */}
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <h4
                className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
              >
                Stay Updated with Allex Gents Parlour
              </h4>
              <p
                className="text-sm leading-relaxed text-neutral-300"
              >
                Get the latest on expert grooming, offers, and exclusive deals.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm font-semibold">
              <div
                className="flex items-center space-x-2 text-amber-400"
              >
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <span className="text-neutral-300 ml-2">Rated 4.9 Stars on Google</span>
              </div>
              <a
                href="https://share.google/yNa1fgnHUrB3cKOpP"
                className="text-sm underline hover:no-underline transition-all duration-300"
                style={{ color: '#FFD700' }}
              >
                Review on Google
              </a>
            </div>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] border border-neutral-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] border border-neutral-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] border border-neutral-600"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-lg shadow-lg transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,215,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
          <hr className="border-t border-neutral-700 mt-8 pt-4 relative z-10" />
        </div>
      </div>

      {/* Main Content Grid (Four columns) */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info with Social Media */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Your destination for premium grooming services.</h4>
          <p className="text-sm leading-relaxed mb-4 text-neutral-300">
            We provide world-class grooming services for the modern man, including expert haircuts, refreshing skin treatments, and flawless makeup.
          </p>
          <div className="flex items-center space-x-4 mt-4 mb-4">
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Facebook"
            >
              <Facebook strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Twitter"
            >
              <Twitter strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Instagram"
            >
              <Instagram strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="LinkedIn"
            >
              <Linkedin strokeWidth={1.5} />
            </motion.a>
          </div>
          <a
            href="#"
            className="flex flex-col items-start space-y-1 text-teal-400 hover:text-white transition-colors duration-300 group"
            style={{ color: '#FFD700' }}
          >
            <div className="flex items-center space-x-2">
              <Scissors size={28} strokeWidth={1.5} />
              <span className="font-bold text-xl">Allex Gents Parlour</span>
            </div>
            <p className="text-xs text-neutral-400 group-hover:text-white transition-colors duration-300">Experience world-class grooming</p>
          </a>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <motion.li
              whileHover={{ x: 10, color: "#FFD700", transition: { duration: 0.1 } }}
            >
              <a href="#" className="flex items-center nav-link-underline-footer">
                <Scissors size={18} className="mr-2" style={{ color: '#FFD700' }} /> Hair Styling
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 10, color: "#FFD700", transition: { duration: 0.1 } }}
            >
              <a href="#" className="flex items-center nav-link-underline-footer">
                <HandPlatter size={18} className="mr-2" style={{ color: '#FFD700' }} /> Spa & Massage
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 10, color: "#FFD700", transition: { duration: 0.1 } }}
            >
              <a href="#" className="flex items-center nav-link-underline-footer">
                <Sparkles size={18} className="mr-2" style={{ color: '#FFD700' }} /> Facial & Skincare
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 10, color: "#FFD700", transition: { duration: 0.1 } }}
            >
              <a href="#" className="flex items-center nav-link-underline-footer">
                <Diamond size={18} className="mr-2" style={{ color: '#FFD700' }} /> Bridal Packages
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="#" className="hover:text-[#FFD700] transition-colors">About Us</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="#" className="hover:text-[#FFD700] transition-colors">FAQ</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="#" className="hover:text-[#FFD700] transition-colors">Book Now</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setShowTermsModal(true);
                }}
              >
                Terms & Conditions
              </a>
            </motion.li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <span className="block">+91 98765 43210</span>
                <span className="block text-xs text-neutral-400">Mon-Sun, 9 AM - 9 PM</span>
              </div>
            </li>
            <li className="flex items-start">
              <Mail size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <span className="block">support@allexparlour.in</span>
                <span className="block text-xs text-neutral-400">24/7 Email Support</span>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <p className="text-sm">N3 Block, IRC Village, Bhubaneswar, Odisha, 751015</p>
                <span className="block text-xs text-neutral-400">Corporate Office</span>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <p className="font-semibold text-white flex items-center">
              <Hourglass size={18} className="mr-2" style={{ color: '#FFD700' }} /> Quick Appointment Booking
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-700 mt-2 pt-2 text-sm relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-neutral-500 mb-2 md:mb-0">
            © {new Date().getFullYear()} Allex Gents Parlour. All rights reserved.
          </p>
          <motion.a
            href="#"
            className="text-neutral-500 transition-colors duration-300 relative group underline"
            whileHover={{
              color: "#FFD700",
              textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
              scale: 1.02
            }}
            onClick={(e) => {
              e.preventDefault();
              setShowTermsModal(true);
            }}
          >
            Terms & Conditions
          </motion.a>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div
              className="relative w-full max-w-xl max-h-[80vh] bg-white/70 rounded-lg p-6 md:p-8 shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <button
                onClick={() => setShowTermsModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-white bg-black/50 hover:bg-black/80 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Terms & Conditions
              </h2>
              <div className="text-gray-800 text-sm leading-relaxed space-y-4">
                <p>Welcome to Allex Gents Parlour. By accessing and using our website and services, you agree to be bound by the following terms and conditions. These terms govern your access to and use of our website, including any content, functionality, and services offered on or through the site.</p>
                
                <h3 className="text-lg font-semibold text-gray-900">1. Services and Appointments</h3>
                <p>All services are subject to availability. We reserve the right to refuse service to any person for any reason at any time. Appointments can be booked through our website, mobile application, or by phone. Cancellation policies apply and will be communicated at the time of booking.</p>

                <h3 className="text-lg font-semibold text-gray-900">2. User Conduct</h3>
                <p>You agree not to use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, or other malicious computer software.</p>

                <h3 className="text-lg font-semibold text-gray-900">3. Intellectual Property</h3>
                <p>The content, design, and all other materials on this website are owned by Allex Gents Parlour or its licensors and are protected by copyright laws. You may not reproduce, duplicate, copy, or otherwise exploit our material for any commercial purpose without our express written consent.</p>

                <h3 className="text-lg font-semibold text-gray-900">4. Limitation of Liability</h3>
                <p>Allex Gents Parlour will not be liable for any direct, indirect, special, incidental, or consequential damages arising out of the use or inability to use the services or products on this website.</p>

                <h3 className="text-lg font-semibold text-gray-900">5. Changes to Terms</h3>
                <p>We reserve the right to modify these terms and conditions at any time. Your continued use of the website after any such changes constitutes your acceptance of the new terms. We encourage you to review this page periodically for any updates.</p>
                
                <p className="mt-6 text-sm text-neutral-600">This is a general template. For professional and legal purposes, please consult with a legal professional to draft your specific terms and conditions.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-underline-footer {
          display: inline-flex;
          position: relative;
          padding-bottom: 2px;
          background-image: linear-gradient(to right, #FFD700, #FFD700);
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: 0% 100%;
          transition: background-size 0.3s ease-out, color 0.3s ease-out;
        }

        .nav-link-underline-footer:hover {
          background-size: 100% 1px;
          color: white;
        }
      `}</style>
    </motion.footer>
  );
};

export default AllexFooter;
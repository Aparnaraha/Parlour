"use client" // Needed for Framer Motion

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone, MapPin, Mail, Star, Heart, Users, Briefcase, HandPlatter, Sparkles, Scissors, Diamond, Award, Hourglass, Facebook, Twitter, Instagram, Linkedin, Wifi, CreditCard, Clock, X
} from 'lucide-react';

const AllexFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [showTermsModal, setShowTermsModal] = useState(false); // State for the modal
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const servicesList = [
    'Hair Styling',
    'Spa & Massage',
    'Facial & Skincare',
    'Bridal Packages',
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg z-50';
    messageBox.innerHTML = `
      <p class="text-center font-semibold text-lg mb-4">Please fill out all fields.</p>
      <div class="flex justify-center">
        <button onclick="this.parentElement.parentElement.remove()" class="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg text-black">OK</button>
      </div>
    `;
    if (!name || !email || !service) {
      document.body.appendChild(messageBox);
      return;
    }

    const phoneNumber = '9876543210';
    const message = `Hello Allex Gents Parlour, I would like to get in touch. My name is ${name}. My email is ${email}. I am interested in your ${service} service.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.footer
      className="relative bg-black text-neutral-400 py-12 overflow-hidden"
      style={{ background: '#1d212a' }}
      ref={footerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Dynamic background gradient layer - kept for design */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, #21242c, #1d212a, #2c3e50)' }}></div>

      {/* Newsletter Form Section */}
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <motion.div variants={itemVariants}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <motion.h4
                className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                variants={itemVariants}
              >
                Stay Updated with Allex Gents Parlour
              </motion.h4>
              <motion.p
                className="text-sm leading-relaxed text-neutral-300"
                variants={itemVariants}
              >
                Get the latest on expert grooming, offers, and exclusive deals.
              </motion.p>
            </div>

            <div className="flex flex-col gap-4 text-sm font-semibold">
              <motion.div
                className="flex items-center space-x-2 text-amber-400"
                variants={itemVariants}
              >
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <span className="text-neutral-300 ml-2">Rated 4.9 Stars on Google</span>
              </motion.div>
              <motion.a
                href="https://share.google/yNa1fgnHUrB3cKOpP"
                className="text-sm underline hover:no-underline transition-all duration-300"
                style={{ color: '#FFD700' }}
                variants={itemVariants}
              >
                Review on Google
              </motion.a>
            </div>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 border border-neutral-600"
              style={{ focusRingColor: '#FFD700' }}
              whileHover={{ scale: 1.02 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 border border-neutral-600"
              style={{ focusRingColor: '#FFD700' }}
              whileHover={{ scale: 1.02 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.select
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 border border-neutral-600"
              style={{ focusRingColor: '#FFD700' }}
              whileHover={{ scale: 1.02 }}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </motion.select>
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
        </motion.div>
      </div>

      {/* Main Content Grid (Four columns) */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info with Social Media */}
        <motion.div variants={linkVariants}>
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
          <motion.a
            href="#"
            className="flex flex-col items-start space-y-1 text-teal-400 hover:text-white transition-colors duration-300 group"
            style={{ color: '#FFD700' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Scissors size={28} strokeWidth={1.5} />
              <span className="font-bold text-xl">Allex Gents Parlour</span>
            </div>
            <p className="text-xs text-neutral-400 group-hover:text-white transition-colors duration-300">Experience world-class grooming</p>
          </motion.a>
        </motion.div>

        {/* Our Services */}
        <motion.div variants={linkVariants}>
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
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={linkVariants}>
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
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={linkVariants}>
          <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <motion.li whileHover={{ color: "#FFD700", textShadow: "0 0 8px #FFD700", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <Phone size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <span className="block">+91 98765 43210</span>
                <span className="block text-xs text-neutral-400">Mon-Sun, 9 AM - 9 PM</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ color: "#FFD700", textShadow: "0 0 8px #FFD700", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <Mail size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <span className="block">support@allexparlour.in</span>
                <span className="block text-xs text-neutral-400">24/7 Email Support</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ color: "#FFD700", textShadow: "0 0 8px #FFD700", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <MapPin size={18} className="mr-2 mt-1" style={{ color: '#FFD700' }} />
              <div>
                <p className="text-sm">N3 Block, IRC Village, Bhubaneswar, Odisha, 751015</p>
                <span className="block text-xs text-neutral-400">Corporate Office</span>
              </div>
            </motion.li>
          </ul>
          <div className="mt-8">
            <p className="font-semibold text-white flex items-center">
              <Hourglass size={18} className="mr-2" style={{ color: '#FFD700' }} /> Quick Appointment Booking
            </p>
          </div>
        </motion.div>
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
      {showTermsModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowTermsModal(false)} // Close modal when clicking outside
        >
          <motion.div
            className="relative w-full max-w-xl max-h-[80vh] bg-white/70 rounded-lg p-6 md:p-8 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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
"use client" // Needed for Framer Motion

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone, MapPin, Mail, Star, Heart, Users, Briefcase, HandPlatter, Sparkles, Scissors, Diamond, Award, Hourglass, Facebook, Twitter, Instagram, Linkedin, Wifi, CreditCard, Clock // Corrected: Replaced Ring with Diamond
} from 'lucide-react';

const AllexFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
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
      style={{ background: '#1d212a' }} // Updated base color
      ref={footerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Dynamic background layers (mimicking the hero section from your image) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient, subtle and dark */}
        <div className="absolute inset-0 bg-gradient-to-br" style={{ background: 'linear-gradient(to bottom right, #21242c, #1d212a, #2c3e50)' }}></div>

        {/* Dynamic, shadowy particle layer (blobs) */}
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move-footer">
          <div className="background-blob blob-sf-1" style={{ background: 'rgba(255, 215, 0, 0.9)' }}></div> {/* Gold */}
          <div className="background-blob blob-sf-2" style={{ background: 'rgba(255, 165, 0, 0.9)' }}></div> {/* Orange */}
          <div className="background-blob blob-sf-3" style={{ background: 'rgba(52, 152, 219, 0.9)' }}></div> {/* Blue */}
        </div>

        {/* Subtle, moving diagonal lines/texture */}
        <div className="absolute inset-0 background-lines-animation-footer opacity-5"></div>
      </div>

      {/* Newsletter Form Section (Full-width row) */}
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
                href="#"
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
              <Facebook strokeWidth={1.5}/>
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Twitter"
            >
              <Twitter strokeWidth={1.5}/>
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Instagram"
            >
              <Instagram strokeWidth={1.5}/>
            </motion.a>
            <motion.a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="LinkedIn"
            >
              <Linkedin strokeWidth={1.5}/>
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
              <a href="#" className="hover:text-[#FFD700] transition-colors">Terms & Conditions</a>
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
          >
            Terms & Conditions
          </motion.a>
        </div>
      </div>

      <style>{`
        .background-blobs-container {
            width: 300%;
            height: 300%;
            top: -100%;
            left: -100%;
            position: absolute;
            filter: blur(30px);
        }

        .background-blob {
            position: absolute;
            border-radius: 50%;
            opacity: 0.55;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
            box-shadow: 0 0 100px rgba(255,215,0,0.6);
        }

        .blob-sf-1 {
            width: 650px; height: 650px;
            top: 10%; left: -5%;
            animation: blob-move-sf-1 30s ease-in-out infinite alternate;
        }
        .blob-sf-2 {
            width: 750px; height: 750px;
            bottom: 0%; right: -10%;
            animation: blob-move-sf-2 40s ease-in-out infinite alternate;
        }
        .blob-sf-3 {
            width: 600px; height: 600px;
            top: 70%; left: 20%;
            animation: blob-move-sf-3 25s ease-in-out infinite alternate;
        }

        @keyframes blob-move-sf-1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(700px, 750px) scale(1.4); }
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-sf-2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-750px, -680px) scale(1.35); }
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-sf-3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(680px, -720px) scale(0.65); }
            100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes animate-blob-group-move-footer {
            0% { transform: translate(-80%, -80%); }
            25% { transform: translate(40%, -75%); }
            50% { transform: translate(-75%, 80%); }
            75% { transform: translate(80%, -40%); }
            100% { transform: translate(-80%, -80%); }
        }
        .animate-blob-group-move-footer {
            animation: animate-blob-group-move-footer 120s linear infinite;
        }

        .background-lines-animation-footer {
            background-image: repeating-linear-gradient(45deg,
                rgba(255,255,255,0.3) 0px,
                rgba(255,255,255,0.3) 2px,
                transparent 2px,
                transparent 50px
            );
            background-size: 100px 100px;
            animation: lines-pan-footer 40s linear infinite;
        }

        @keyframes lines-pan-footer {
            0% { background-position: 0 0; }
            25% { background-position: 2000px 600px; }
            50% { background-position: 1000px 2000px; }
            75% { background-position: -600px 1000px; }
            100% { background-position: 0 0; }
        }

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
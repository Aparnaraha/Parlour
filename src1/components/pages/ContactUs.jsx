"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Scissors,
  Droplet,
  Brush,
  Send,
  CheckCircle,
  XCircle,
  Users,
  Calendar,
  ArrowRight,
  BookOpen,
  Star,
  Award,
  Shield,
  Headphones,
  ChevronDown,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Enhanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50, rotateX: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50, rotateX: 10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const bounce = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  const glow = {
    hover: {
      boxShadow:
        "0 0 20px rgba(212, 160, 23, 0.5), 0 0 40px rgba(212, 160, 23, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const faqs = [
    {
      question: "How long does it take to book an appointment?",
      answer:
        "Appointments can be booked instantly online or within 24 hours via phone or email. We prioritize quick scheduling for your convenience.",
    },
    {
      question: "What services do you offer for special events?",
      answer:
        "We provide tailored grooming packages for weddings, photoshoots, and events, including hair styling, skin treatments, and makeup. Contact us for a consultation.",
    },
    {
      question: "Can I visit without an appointment?",
      answer:
        "Walk-ins are welcome, but appointments ensure priority service. Book online or call our team to secure your slot.",
    },
    {
      question: "What products do you use for treatments?",
      answer:
        "We use premium, dermatologist-approved brands for hair, skin, and makeup services to ensure the best results and safety.",
    },
    {
      question: "Do you offer membership or loyalty programs?",
      answer:
        "Yes, our loyalty program offers discounts and exclusive perks for regular clients. Ask our team for details during your visit.",
    },
  ];

  // Enhanced floating particles with metallic sheen
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-antique-gold/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              boxShadow: "0 0 10px rgba(212, 160, 23, 0.5)",
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-obsidian-black text-platinum-silver font-sans overflow-hidden"
      ref={containerRef}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <style jsx>{`
        :root {
          --obsidian-black: #080808;
          --midnight-slate: #1a2525;
          --antique-gold: #d4a017;
          --platinum-silver: #b0b7b8;
          --deep-sapphire: #1e3a5f;
          --luxury-gradient: linear-gradient(135deg, #d4a017, #b0b7b8, #1e3a5f);
        }
        h1,
        h2,
        h3 {
          font-family: "Playfair Display", serif;
          color: var(--antique-gold);
        }
        .bg-obsidian-black {
          background-color: var(--obsidian-black);
        }
        .bg-midnight-slate {
          background-color: var(--midnight-slate);
        }
        .text-platinum-silver {
          color: var(--platinum-silver);
        }
        .bg-antique-gold {
          background-color: var(--antique-gold);
        }
        .text-antique-gold {
          color: var(--antique-gold);
        }
        .border-antique-gold {
          border-color: var(--antique-gold);
        }
        .bg-deep-sapphire {
          background-color: var(--deep-sapphire);
        }
        .text-deep-sapphire {
          color: var(--deep-sapphire);
        }
        .bg-luxury-gradient {
          background: var(--luxury-gradient);
        }
        .wave-bg {
          background: linear-gradient(
            180deg,
            rgba(26, 37, 37, 0.3) 0%,
            rgba(8, 8, 8, 0.8) 100%
          );
          position: absolute;
          inset: 0;
          opacity: 0.5;
        }
        .glow-border {
          position: relative;
        }
        .glow-border::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          background: var(--luxury-gradient);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }
        .glow-border:hover::after {
          opacity: 0.5;
        }
      `}</style>

      {/* Hero Section with Parallax and Wave Background */}
      <section className="relative py-28 bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1610873167011-5db12d781c51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Premium barbershop
            transform: `translateY(${mousePosition.y * 0.04}px) rotateX(${
              mousePosition.y * 0.01
            }deg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 to-midnight-slate/60 wave-bg"></div>

        <FloatingParticles />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-antique-gold"
            initial={{ opacity: 0, y: -50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            Connect with Allex Gents Parlour
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-platinum-silver max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your style with our premium hair, skin, and makeup services.
            Contact us today.
          </motion.p>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-32 h-1 bg-luxury-gradient mx-auto rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 h-full glow-border"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-bold text-antique-gold mb-8"
              variants={staggerItem}
            >
              Reach Out
            </motion.h2>
            <motion.div
              className="flex items-center mb-6"
              variants={staggerItem}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-antique-gold/30 rounded-full blur-md"></div>
                <Phone
                  size={32}
                  className="text-antique-gold mr-4 flex-shrink-0 relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-platinum-silver">+91 8093011746</p>
                <p className="text-platinum-silver">+91 674 123 4567</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center mb-6"
              variants={staggerItem}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-antique-gold/30 rounded-full blur-md"></div>
                <Mail
                  size={32}
                  className="text-antique-gold mr-4 flex-shrink-0 relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-platinum-silver">info@allexgents.com</p>
                <p className="text-platinum-silver">bookings@allexgents.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center mb-6"
              variants={staggerItem}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-antique-gold/30 rounded-full blur-md"></div>
                <MapPin
                  size={32}
                  className="text-antique-gold mr-4 flex-shrink-0 relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Our Parlours
                </h3>
                <p className="text-platinum-silver">
                  N3 IRC Village, Bhubaneswar
                </p>
                <p className="text-platinum-silver">
                  Shampur near Sum Hospital
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center mb-6"
              variants={staggerItem}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-antique-gold/30 rounded-full blur-md"></div>
                <Clock
                  size={32}
                  className="text-antique-gold mr-4 flex-shrink-0 relative z-10"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Operating Hours
                </h3>
                <p className="text-platinum-silver">
                  Mon-Sat: 9:00 AM - 8:00 PM
                </p>
                <p className="text-platinum-silver">Sun: 10:00 AM - 5:00 PM</p>
              </div>
            </motion.div>
            <motion.div className="mt-8" variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/allex.gents_official"
                  className="text-platinum-silver hover:text-antique-gold transition-colors duration-200"
                  whileHover={{ scale: 1.3, rotate: 5, y: -5 }}
                >
                  <Instagram size={28} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/allexgents"
                  className="text-platinum-silver hover:text-antique-gold transition-colors duration-200"
                  whileHover={{ scale: 1.3, rotate: 5, y: -5 }}
                >
                  <Facebook size={28} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 glow-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <motion.h2
              className="text-4xl font-bold text-antique-gold mb-8 text-center"
              variants={scaleUp}
            >
              Schedule Your Transformation
            </motion.h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="name"
                  className="block text-platinum-silver text-sm font-bold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 bg-obsidian-black border-platinum-silver/30 text-white placeholder-platinum-silver/50 focus:outline-none focus:ring-2 focus:ring-antique-gold transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="email"
                  className="block text-platinum-silver text-sm font-bold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 bg-obsidian-black border-platinum-silver/30 text-white placeholder-platinum-silver/50 focus:outline-none focus:ring-2 focus:ring-antique-gold transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <label
                  htmlFor="service"
                  className="block text-platinum-silver text-sm font-bold mb-2"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 bg-obsidian-black border-platinum-silver/30 text-white placeholder-platinum-silver/50 focus:outline-none focus:ring-2 focus:ring-antique-gold transition-all duration-300"
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="Hair">Hair (Cut, Styling, Coloring)</option>
                  <option value="Skin">Skin (Facials, Treatments)</option>
                  <option value="Makeup">Makeup (Event Prep, Grooming)</option>
                </select>
              </motion.div>
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <label
                  htmlFor="message"
                  className="block text-platinum-silver text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-3 px-4 bg-obsidian-black border-platinum-silver/30 text-white placeholder-platinum-silver/50 focus:outline-none focus:ring-2 focus:ring-antique-gold transition-all duration-300"
                  placeholder="Tell us about your grooming needs..."
                  required
                ></textarea>
              </motion.div>
              <motion.div
                className="md:col-span-2 text-center"
                variants={staggerItem}
              >
                <motion.button
                  type="submit"
                  className="mt-6 px-8 py-4 bg-luxury-gradient text-obsidian-black font-bold rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto text-lg relative overflow-hidden"
                  whileHover={{ scale: 1.05, ...glow }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-obsidian-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </motion.button>
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 text-antique-gold flex items-center justify-center"
                    >
                      <CheckCircle size={20} className="mr-2" /> Enquiry sent
                      successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 text-red-400 flex items-center justify-center"
                    >
                      <XCircle size={20} className="mr-2" /> Failed to send
                      enquiry. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 bg-midnight-slate text-platinum-silver relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-antique-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why Allex Gents Parlour
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-obsidian-black p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12, rotateY: 5, ...glow }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-4 bg-antique-gold/30 rounded-full blur-lg"></div>
                <Award size={56} className="text-antique-gold relative z-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Master Stylists</h3>
              <p className="text-platinum-silver text-center">
                Our artisans craft precision haircuts, skin treatments, and
                makeup looks tailored to you.
              </p>
            </motion.div>
            <motion.div
              className="bg-obsidian-black p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12, rotateY: 5, ...glow }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-4 bg-antique-gold/30 rounded-full blur-lg"></div>
                <Headphones
                  size={56}
                  className="text-antique-gold relative z-10"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Bespoke Care</h3>
              <p className="text-platinum-silver text-center">
                Every visit is personalized to ensure you leave radiating
                confidence.
              </p>
            </motion.div>
            <motion.div
              className="bg-obsidian-black p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12, rotateY: 5, ...glow }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-4 bg-antique-gold/30 rounded-full blur-lg"></div>
                <Shield size={56} className="text-antique-gold relative z-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Luxury Products</h3>
              <p className="text-platinum-silver text-center">
                We use elite brands for safe, transformative grooming results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Process Your Enquiry */}
      <section className="py-24 bg-obsidian-black text-platinum-silver relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-antique-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Your Enquiry, Our Craft
          </motion.h2>
          <motion.p
            className="text-lg text-platinum-silver mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            We handle your enquiry with the same precision as our grooming
            services.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-16 left-1/4 right-1/4 h-1 bg-antique-gold hidden md:block"></div>
            <motion.div
              className="bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center relative z-10 glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-12 h-12 rounded-full bg-antique-gold flex items-center justify-center text-obsidian-black font-bold text-lg mb-4">
                1
              </div>
              <Send size={48} className="text-antique-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enquiry Received</h3>
              <p className="text-platinum-silver text-center">
                Your message is securely received by our team.
              </p>
            </motion.div>
            <motion.div
              className="bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center relative z-10 glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-12 h-12 rounded-full bg-antique-gold flex items-center justify-center text-obsidian-black font-bold text-lg mb-4">
                2
              </div>
              <Users size={48} className="text-antique-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stylist Review</h3>
              <p className="text-platinum-silver text-center">
                Our experts assess your needs for the perfect service.
              </p>
            </motion.div>
            <motion.div
              className="bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center relative z-10 glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-12 h-12 rounded-full bg-antique-gold flex items-center justify-center text-obsidian-black font-bold text-lg mb-4">
                3
              </div>
              <Mail size={48} className="text-antique-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Swift Response</h3>
              <p className="text-platinum-silver text-center">
                We reply within 24 hours with tailored solutions.
              </p>
            </motion.div>
            <motion.div
              className="bg-midnight-slate p-8 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center relative z-10 glow-border"
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-12 h-12 rounded-full bg-antique-gold flex items-center justify-center text-obsidian-black font-bold text-lg mb-4">
                4
              </div>
              <Star size={48} className="text-antique-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence Ensured</h3>
              <p className="text-platinum-silver text-center">
                We follow up to guarantee your satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Enquiry Topics */}
      <section className="py-24 bg-midnight-slate text-platinum-silver relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-antique-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Explore Common Queries
          </motion.h2>
          <motion.p
            className="text-lg text-platinum-silver mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Find quick answers to guide your grooming journey.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href="#services"
              className="bg-obsidian-black p-6 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center text-center group glow-border"
              initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-16 h-16 rounded-full bg-antique-gold/20 flex items-center justify-center mb-4 group-hover:bg-antique-gold/40 transition-colors">
                <Scissors size={36} className="text-antique-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hair Services</h3>
              <p className="text-platinum-silver text-sm">
                Cuts, styling, and coloring inquiries.
              </p>
              <div className="mt-4 text-antique-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
            <motion.a
              href="#services"
              className="bg-obsidian-black p-6 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center text-center group glow-border"
              initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-16 h-16 rounded-full bg-antique-gold/20 flex items-center justify-center mb-4 group-hover:bg-antique-gold/40 transition-colors">
                <Droplet size={36} className="text-antique-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skin Treatments</h3>
              <p className="text-platinum-silver text-sm">
                Facials and skincare questions.
              </p>
              <div className="mt-4 text-antique-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
            <motion.a
              href="#services"
              className="bg-obsidian-black p-6 rounded-2xl shadow-2xl border border-platinum-silver/20 flex flex-col items-center text-center group glow-border"
              initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5, ...glow }}
            >
              <div className="w-16 h-16 rounded-full bg-antique-gold/20 flex items-center justify-center mb-4 group-hover:bg-antique-gold/40 transition-colors">
                <Brush size={36} className="text-antique-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Makeup Services</h3>
              <p className="text-platinum-silver text-sm">
                Event prep and grooming inquiries.
              </p>
              <div className="mt-4 text-antique-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Visit Our Parlour */}
      <section className="py-24 bg-obsidian-black text-platinum-silver relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1621605815971-8fc675e024eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" // Barbershop interior
              alt="Allex Gents Parlour"
              className="rounded-2xl shadow-2xl border border-platinum-silver/20 w-full h-auto object-cover"
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)",
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 bg-antique-gold w-32 h-32 rounded-full flex items-center justify-center text-obsidian-black text-lg font-bold shadow-xl text-center p-3"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Step Into <br />
              Luxury
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <h2 className="text-5xl font-bold mb-6 text-antique-gold">
              Visit Our Parlour
            </h2>
            <p className="text-lg text-platinum-silver mb-4">
              Immerse yourself in the ultimate grooming experience at Allex
              Gents Parlour. Our master stylists craft exceptional hair, skin,
              and makeup looks.
            </p>
            <p className="text-lg text-platinum-silver mb-6">
              Book your appointment or walk in to our Bhubaneswar locations for
              a transformative session.
            </p>
            <div className="flex items-center mb-4">
              <MapPin size={28} className="text-antique-gold mr-3" />
              <p className="text-platinum-silver">
                N3 IRC Village, Bhubaneswar, Odisha
              </p>
            </div>
            <div className="flex items-center mb-6">
              <Clock size={28} className="text-antique-gold mr-3" />
              <p className="text-platinum-silver">
                Mon-Sat: 9 AM - 8 PM, Sun: 10 AM - 5 PM
              </p>
            </div>
            <motion.button
              className="px-8 py-3 bg-luxury-gradient text-obsidian-black font-bold rounded-lg shadow-xl transition-all duration-300 flex items-center relative overflow-hidden"
              whileHover={{ scale: 1.05, ...glow }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment <ArrowRight size={24} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-24 bg-midnight-slate text-platinum-silver relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center text-antique-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Quick Answers
          </motion.h2>
          <motion.p
            className="text-lg text-platinum-silver mb-12 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover answers to common grooming questions before reaching out.
          </motion.p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-obsidian-black rounded-2xl shadow-2xl border border-platinum-silver/20 overflow-hidden glow-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 20px rgba(212, 160, 23, 0.3)",
                }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <BookOpen size={24} className="mr-3 text-antique-gold" />{" "}
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeFaq === index ? (
                      <ChevronUp
                        size={24}
                        className="text-antique-gold flex-shrink-0"
                      />
                    ) : (
                      <ChevronDown
                        size={24}
                        className="text-antique-gold flex-shrink-0"
                      />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-platinum-silver">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="py-24 bg-obsidian-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold text-antique-gold mb-8"
            variants={bounce}
          >
            Locate Our Parlours
          </motion.h2>
          <motion.p
            className="text-platinum-silver mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Visit our Bhubaneswar parlours for an unparalleled grooming
            experience.
          </motion.p>
          <motion.div
            className="bg-midnight-slate rounded-2xl overflow-hidden shadow-2xl border border-platinum-silver/20 glow-border"
            style={{ height: "500px" }}
            variants={scaleUp}
            whileHover={{ boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.771013071199!2d85.824539714873!3d20.29605998639895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b07fa!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1691421215894!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Allex Gents Parlour Locations"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-luxury-gradient text-obsidian-black relative overflow-hidden">
        <div className="wave-bg"></div>
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-6 text-obsidian-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Transform Your Style Today
          </motion.h2>
          <motion.p
            className="text-xl text-obsidian-black/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Book your premium hair, skin, or makeup session now and experience
            luxury.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="tel:+918093011746"
              className="px-8 py-4 bg-obsidian-black text-antique-gold font-bold rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5, ...glow }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} className="mr-2" /> Call Now
            </motion.a>
            <motion.a
              href="mailto:info@allexgents.com"
              className="px-8 py-4 border-2 border-obsidian-black text-obsidian-black font-bold rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(8, 8, 8, 0.1)",
                ...glow,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="mr-2" /> Email Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

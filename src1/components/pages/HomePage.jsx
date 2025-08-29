"use client"; // Needed for Framer Motion

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
// Assuming react-router-dom is used for NavLink
import { NavLink } from "react-router-dom";
import {
  Scissors,
  Droplets,
  Smile,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Award,
  Users,
  CreditCard,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Lightbulb,
  Zap,
  Brush,
  Sparkles,
  ChevronDown,
  User,
  MessageCircle,
  Briefcase,
  Handshake,
  Info,
  BookOpen, // All necessary Lucide icons for various sections
} from "lucide-react"; // Updated Lucide icons for the new theme

// Helper Component: Animated Counter
const Counter = ({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect once when in view

  useEffect(() => {
    if (isInView) {
      // Only start animation if in view
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easedProgress = easeOutQuad(percentage); // Apply easing for smoother animation
        setCount(Math.floor(easedProgress * (to - from) + from));

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(to); // Ensure final value is exact
        }
      };
      requestAnimationFrame(animate);

      function easeOutQuad(t) {
        return t * (2 - t);
      }
    }
  }, [to, duration, from, isInView]); // Add isInView as a dependency

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// --- TestimonialCard Component ---
const TestimonialCard = ({ testimonial, isActive }) => (
  <motion.div
    className={`bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-800 transition-all duration-300 ${
      isActive ? "scale-105 shadow-2xl" : "scale-100"
    }`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <img
        src={
          testimonial.avatar ||
          "https://placehold.co/100x100/3b82f6/ffffff?text=AV"
        }
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-4 border-blue-600"
      />
      <div>
        <h4 className="text-lg font-bold text-white font-heading">
          {testimonial.name}
        </h4>
        <p className="text-neutral-400 text-sm">{testimonial.role}</p>
        <div className="flex items-center gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
          ))}
        </div>
      </div>
    </div>

    <div className="relative">
      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-neutral-700" />
      <p className="text-neutral-300 leading-relaxed text-lg italic pl-6">
        {testimonial.content}
      </p>
    </div>

    <div className="mt-6 pt-6 border-t border-neutral-800">
      <div className="flex items-center justify-between text-sm text-neutral-500">
        <span>{testimonial.location}</span>
        <span>{testimonial.date}</span>
      </div>
    </div>
  </motion.div>
);

// --- TestimonialsAndReviews Component ---
const TestimonialsAndReviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Arjun Singh",
      role: "Grooming Enthusiast",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=AS",
      content:
        "The best haircut I've had in years. The stylist was a true artist and the attention to detail was incredible. The hot towel service at the end was the perfect finish.",
      location: "New Delhi, India",
      date: "December 2024",
    },
    {
      name: "Rohan Kumar",
      role: "Corporate Professional",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=RK",
      content:
        "I came in for a cleanup facial and the results were amazing. My skin feels fresh and rejuvenated. It's a great way to unwind after a long week. Highly recommended!",
      location: "Mumbai, India",
      date: "November 2024",
    },
    {
      name: "Vishal Desai",
      role: "College Student",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=VD",
      content:
        "Got a makeover for a friend's wedding and the makeup artist did a fantastic job. It was subtle yet elegant, and lasted all night. Definitely my go-to place for special occasions!",
      location: "Bangalore, India",
      date: "October 2024",
    },
    {
      name: "Sanjay Sharma",
      role: "Entrepreneur",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=SS",
      content:
        "The ambiance is great, and the staff is very professional. They listened to exactly what I wanted for my haircut and delivered perfectly. Quick and efficient service.",
      location: "Pune, India",
      date: "December 2024",
    },
    {
      name: "Karan Johar",
      role: "Fashion Consultant",
      avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=KJ",
      content:
        "Their skin treatments are top-notch. I've been a regular for their express facials and it has made a noticeable difference in my skin's texture. The products they use are excellent.",
      location: "Hyderabad, India",
      date: "September 2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-heading">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their grooming experience at our parlour.
          </p>
        </motion.div>

        {/* Main testimonial carousel */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentTestimonial}
                testimonial={testimonials[currentTestimonial]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-neutral-900 rounded-full shadow-lg border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-neutral-900 rounded-full shadow-lg border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-neutral-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? "bg-blue-600 w-8"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review summary grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white mb-2 font-heading">
              4.9/5
            </div>
            <div className="text-neutral-400 mb-4">Average Rating</div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white mb-2 font-heading">
              99%
            </div>
            <div className="text-neutral-400 mb-4">Would Recommend</div>
            <div className="text-sm text-neutral-500">
              Based on 5,000+ happy clients
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-white mb-2 font-heading">
              #1
            </div>
            <div className="text-neutral-400 mb-4">Gents Parlour</div>
            <div className="text-sm text-neutral-500">
              Customer Choice Awards 2024
            </div>
          </motion.div>
        </div>

        {/* Review platforms */}
        <motion.div
          className="bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Trusted Across All Platforms
            </h3>
            <p className="text-neutral-400">
              See what customers are saying about us on major review platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-400 font-medium">
                Justdial
              </div>
              <div className="text-xs text-neutral-500">1,123 reviews</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-400 font-medium">Yelp</div>
              <div className="text-xs text-neutral-500">956 reviews</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-white mb-1">4.7/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <div className="text-sm text-neutral-400 font-medium">
                Facebook
              </div>
              <div className="text-xs text-neutral-500">2,621 reviews</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Hero Section Component ---
const HeroSection = () => {
  // Define the 3 specific services
  const serviceOptions = [
    {
      id: "hair",
      name: "Hair Services",
      icon: <Scissors size={20} className="mr-2" />,
    },
    {
      id: "skin",
      name: "Skin Care",
      icon: <Droplets size={20} className="mr-2" />,
    },
    {
      id: "makeup",
      name: "Makeup & Styling",
      icon: <Smile size={20} className="mr-2" />,
    },
  ];

  const [selectedService, setSelectedService] = useState(serviceOptions[0].id);

  const renderBookingFormContent = () => {
    // Dynamic animation offsets
    const initialOffsets = {
      hair: { y: 50, x: -50 },
      skin: { y: -50, x: 50 },
      makeup: { y: 50, x: -50 },
    };

    const formLayout = "grid grid-cols-1 md:grid-cols-2 gap-6";
    const inputStyle =
      "shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400";
    const labelStyle = "block text-neutral-300 text-sm font-bold mb-2";
    const submitButtonStyle =
      "md:col-span-2 mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105";

    switch (selectedService) {
      case "hair":
        return (
          <motion.div
            key="hair-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Book a Hair Service
            </h3>
            <form className={formLayout}>
              <div>
                <label htmlFor="hairService" className={labelStyle}>
                  Service
                </label>
                <select id="hairService" className={inputStyle}>
                  <option>Haircut</option>
                  <option>Beard Trim</option>
                  <option>Hair Spa</option>
                  <option>Hair Colouring</option>
                </select>
              </div>
              <div>
                <label htmlFor="hairDate" className={labelStyle}>
                  Date
                </label>
                <input type="date" id="hairDate" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="hairTime" className={labelStyle}>
                  Time
                </label>
                <input type="time" id="hairTime" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="hairName" className={labelStyle}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="hairName"
                  className={inputStyle}
                  placeholder="e.g., John Doe"
                />
              </div>
              <div>
                <label htmlFor="hairPhone" className={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="hairPhone"
                  className={inputStyle}
                  placeholder="e.g., 9876543210"
                />
              </div>
              <div>
                <label htmlFor="hairNotes" className={labelStyle}>
                  Special Notes (Optional)
                </label>
                <textarea
                  id="hairNotes"
                  rows="2"
                  className={inputStyle}
                  placeholder="e.g., Specific stylist, special requests"
                ></textarea>
              </div>
              <button type="submit" className={submitButtonStyle}>
                Book Hair Appointment
              </button>
            </form>
          </motion.div>
        );
      case "skin":
        return (
          <motion.div
            key="skin-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Book a Skin Treatment
            </h3>
            <form className={formLayout}>
              <div>
                <label htmlFor="skinService" className={labelStyle}>
                  Service
                </label>
                <select id="skinService" className={inputStyle}>
                  <option>Facial Cleanup</option>
                  <option>De-Tan Treatment</option>
                  <option>Face Bleach</option>
                  <option>Acne Treatment</option>
                </select>
              </div>
              <div>
                <label htmlFor="skinDate" className={labelStyle}>
                  Date
                </label>
                <input type="date" id="skinDate" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="skinTime" className={labelStyle}>
                  Time
                </label>
                <input type="time" id="skinTime" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="skinName" className={labelStyle}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="skinName"
                  className={inputStyle}
                  placeholder="e.g., John Doe"
                />
              </div>
              <div>
                <label htmlFor="skinPhone" className={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="skinPhone"
                  className={inputStyle}
                  placeholder="e.g., 9876543210"
                />
              </div>
              <div>
                <label htmlFor="skinNotes" className={labelStyle}>
                  Special Notes (Optional)
                </label>
                <textarea
                  id="skinNotes"
                  rows="2"
                  className={inputStyle}
                  placeholder="e.g., Discuss skin concerns"
                ></textarea>
              </div>
              <button type="submit" className={submitButtonStyle}>
                Book Skin Appointment
              </button>
            </form>
          </motion.div>
        );
      case "makeup":
        return (
          <motion.div
            key="makeup-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Book a Makeup & Styling Session
            </h3>
            <form className={formLayout}>
              <div>
                <label htmlFor="makeupService" className={labelStyle}>
                  Service
                </label>
                <select id="makeupService" className={inputStyle}>
                  <option>Event Makeup</option>
                  <option>Photo Shoot Makeup</option>
                  <option>Groom Makeup</option>
                  <option>General Styling</option>
                </select>
              </div>
              <div>
                <label htmlFor="makeupDate" className={labelStyle}>
                  Date
                </label>
                <input type="date" id="makeupDate" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="makeupTime" className={labelStyle}>
                  Time
                </label>
                <input type="time" id="makeupTime" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="makeupName" className={labelStyle}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="makeupName"
                  className={inputStyle}
                  placeholder="e.g., John Doe"
                />
              </div>
              <div>
                <label htmlFor="makeupPhone" className={labelStyle}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="makeupPhone"
                  className={inputStyle}
                  placeholder="e.g., 9876543210"
                />
              </div>
              <div>
                <label htmlFor="makeupNotes" className={labelStyle}>
                  Special Notes (Optional)
                </label>
                <textarea
                  id="makeupNotes"
                  rows="2"
                  className={inputStyle}
                  placeholder="e.g., Event type, look preference"
                ></textarea>
              </div>
              <button type="submit" className={submitButtonStyle}>
                Book Makeup Appointment
              </button>
            </form>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      {/* Background blobs for dynamic effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Adjusted blob properties for new color scheme */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500 opacity-10 blur-3xl animate-blob-pulse top-[10%] left-[10%]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500 opacity-10 blur-3xl animate-blob-pulse-delay bottom-[15%] right-[10%]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500 opacity-10 blur-3xl animate-blob-pulse top-[40%] right-[20%]"></div>
        <div className="absolute w-[350px] h-[350px] rounded-full bg-pink-500 opacity-10 blur-3xl animate-blob-pulse-delay bottom-[30%] left-[25%]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Look, Elevated. The Ultimate Grooming Experience.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover our premier services for hair, skin, and makeup, designed
          exclusively for the modern man.
        </motion.p>
        {/* Unified Booking Form Container */}
        <motion.div
          className="p-4 md:p-8 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 w-full max-w-5xl mx-auto mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Service selection buttons (as tabs within the form) */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {serviceOptions.map((service) => (
              <motion.button
                key={service.id}
                className={`flex-1 min-w-[120px] md:min-w-[150px] lg:min-w-[180px] px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center whitespace-nowrap ${
                  selectedService === service.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-400 text-white shadow-md border border-blue-300"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white border border-transparent"
                }`}
                onClick={() => setSelectedService(service.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.icon} {service.name}
              </motion.button>
            ))}
          </motion.div>
          {/* Dynamic Booking Form Content */}
          <AnimatePresence mode="wait">
            {selectedService && renderBookingFormContent()}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// --- About Us Section Component ---
const AboutUsSection = () => (
  <section className="py-24 bg-black text-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl lg:text-5xl font-black mb-4 font-heading">
          Who We Are
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            {" "}
            at The Gents Parlour
          </span>
        </h2>
        <p className="text-lg text-neutral-300 leading-relaxed">
          At The Gents Parlour, we believe that grooming is an art form. We are
          dedicated to providing a premium and personalized experience for every
          man who walks through our doors. Our mission is to combine classic
          techniques with modern trends to help you look and feel your absolute
          best.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-400">
          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="text-blue-500 mr-2 flex-shrink-0"
            />
            <p>A team of highly skilled and professional grooming experts.</p>
          </li>
          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="text-blue-500 mr-2 flex-shrink-0"
            />
            <p>Exclusive use of premium, high-quality grooming products.</p>
          </li>
          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="text-blue-500 mr-2 flex-shrink-0"
            />
            <p>A relaxing and welcoming environment designed for men.</p>
          </li>
        </ul>
        <motion.a
          href="/about"
          className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src="https://placehold.co/600x400/222831/ffffff?text=About+Us+Image"
          alt="A professional barbershop interior"
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  </section>
);

// --- Our Team Section Component ---
const OurTeamSection = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Master Stylist",
      image: "https://placehold.co/150x150/00adb5/ffffff?text=Rahul",
      description:
        "An expert in modern hair trends and classic barber techniques.",
    },
    {
      name: "Priya Singh",
      role: "Skin & Facial Specialist",
      image: "https://placehold.co/150x150/00adb5/ffffff?text=Priya",
      description: "Dedicated to helping you achieve healthy, glowing skin.",
    },
    {
      name: "Amit Kumar",
      role: "Makeup & Grooming Artist",
      image: "https://placehold.co/150x150/00adb5/ffffff?text=Amit",
      description:
        "Transforms looks for special events with a subtle, natural approach.",
    },
    {
      name: "Sunil Verma",
      role: "Client Relations Manager",
      image: "https://placehold.co/150x150/00adb5/ffffff?text=Sunil",
      description:
        "Ensures every client has a seamless and comfortable experience.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 font-heading">
            Meet the
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Experts
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-12">
            Our team of dedicated professionals is committed to providing you
            with a first-class experience from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-800 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-400 text-sm mb-3">{member.role}</p>
              <p className="text-neutral-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- How It Works Section Component (Section 2) ---
const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "Book Your Slot",
      description:
        "Use our online form or call us to reserve a time that works for you.",
    },
    {
      icon: Scissors,
      title: "Tell Us Your Vibe",
      description:
        "Arrive at our parlour and consult with your stylist to discuss your desired look.",
    },
    {
      icon: CheckCircle,
      title: "Relax & Unwind",
      description:
        "Our expert team takes over, providing you with a relaxing and professional grooming session.",
    },
    {
      icon: Smile,
      title: "Leave Looking Your Best",
      description:
        "Walk out with a fresh, confident look and a new sense of style.",
    },
  ];
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          How It
          <span className="font-light"> Works</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 bg-neutral-900 rounded-xl shadow-lg border border-neutral-800 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white w-8 h-8">
                  {React.createElement(step.icon, {
                    size: 32,
                    className: "text-white",
                  })}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing Section Component ---
const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Hair Services",
      description: "Expert cuts and styling for a sharp, clean look.",
      icon: Scissors,
      features: [
        "Haircut & Wash",
        "Beard Styling",
        "Head Massage",
        "Hair Spa Treatment",
      ],
      price: "₹499",
      priceDuration: "onwards",
      cta: "Book Hair Service",
      isHighlighted: false,
    },
    {
      name: "Skin Care",
      description: "Rejuvenating treatments for healthy, glowing skin.",
      icon: Droplets,
      features: [
        "Facial Cleanup",
        "De-Tan Pack",
        "Face & Neck Bleach",
        "Blackhead Removal",
      ],
      price: "₹799",
      priceDuration: "onwards",
      cta: "Book Skin Care",
      isHighlighted: true,
    },
    {
      name: "Makeup & Styling",
      description: "Professional makeup for any occasion.",
      icon: Brush,
      features: [
        "Event Makeup",
        "Groom Makeup",
        "Photo Shoot Makeup",
        "Hairstyle & Styling",
      ],
      price: "₹1,499",
      priceDuration: "onwards",
      cta: "Book Makeup Session",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 font-heading">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Pricing
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Choose from our range of premium grooming services tailored to meet
            your every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-neutral-900 p-8 rounded-3xl shadow-xl transition-all duration-300 transform ${
                plan.isHighlighted
                  ? "ring-4 ring-blue-500 scale-105 z-10"
                  : "hover:shadow-2xl hover:scale-[1.02]"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {plan.isHighlighted && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6">
                {React.createElement(plan.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 font-heading">
                {plan.name}
              </h3>
              <p className="text-center text-neutral-400 mb-6">
                {plan.description}
              </p>

              <div className="text-center mb-8">
                <span className="text-5xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-xl font-medium text-neutral-400 ml-2">
                  {plan.priceDuration}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-white font-bold transition-transform duration-200 hover:scale-105 shadow-lg ${
                  plan.isHighlighted
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                    : "bg-gradient-to-r from-gray-700 to-gray-800"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ Section Component ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are your operating hours?",
      a: "Our parlour is open from 10 AM to 9 PM, Monday to Sunday. We recommend booking an appointment to ensure prompt service.",
    },
    {
      q: "Can I book an appointment online?",
      a: "Yes, you can easily book an appointment through the online form on our homepage. Simply select your desired service, date, and time.",
    },
    {
      q: "Do you offer services for kids?",
      a: "Our services are primarily tailored for men, but we do offer haircuts for children and teenagers as well. Please contact us for specific requirements.",
    },
    {
      q: "What products do you use for skin treatments?",
      a: "We use a range of professional-grade, dermatologically-tested products. Our stylists can recommend products based on your specific skin type and needs.",
    },
    {
      q: "Do you accept walk-ins?",
      a: "We welcome walk-ins, but appointments are highly recommended to avoid any wait time and ensure you get the service you desire at your convenience.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 font-heading">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Find answers to the most common questions about our services,
            booking, and more.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 rounded-xl p-6 shadow-md cursor-pointer border border-neutral-800"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-400 mt-4 leading-relaxed pr-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component: HomePage
const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <main>
        <HeroSection />
        <AboutUsSection />
        <OurTeamSection />
        <HowItWorksSection />
        <TestimonialsAndReviews />
        <PricingSection />
        <FAQSection />
      </main>
    </div>
  );
};

export default HomePage;

"use client" // Needed for Framer Motion

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, User, CheckCircle, XCircle } from 'lucide-react';

const EnquiryLocateUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all fields.");
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (Math.random() > 0.1) {
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const contentBlockVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 40px rgba(57, 255, 20, 0.3), 0 0 20px rgba(195, 179, 241, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const inputFocusVariants = {
    focus: {
      borderColor: ['#39FF14', '#C3B3F1', '#39FF14'],
      boxShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 12px rgba(57,255,20,0.5)', '0 0 12px rgba(195,179,241,0.5)', '0 0 12px rgba(57,255,20,0.5)'],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const contactInfoItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(57, 255, 20, 0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="relative bg-pearl-white text-indigo-dark py-16 md:py-20 px-6 md:px-12 overflow-hidden z-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pearl-white via-white to-pearl-white"></div>
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move">
          <div className="background-blob blob-1"></div>
          <div className="background-blob blob-2"></div>
          <div className="background-blob blob-3"></div>
          <div className="background-blob blob-4"></div>
          <div className="background-blob blob-5"></div>
        </div>
        <div className="absolute inset-0 background-lines-animation opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionHeaderVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-dark to-green-vibrant" style={{ fontFamily: 'Cinzel, serif' }}>
            Get In Touch & Find Us
          </h2>
          <p className="text-lg text-indigo-dark/80 max-w-3xl mx-auto" style={{ fontFamily: 'Lora, sans-serif' }}>
            We're here to answer your questions and guide you to our luxurious parlour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentBlockVariants}
            className="bg-white p-6 rounded-2xl shadow-xl border border-light-gray transition-all duration-300 ease-out"
          >
            <h3 className="text-2xl font-bold text-indigo-dark mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-dark to-lavender" style={{ fontFamily: 'Cinzel, serif' }}>
              Contact Details & Quick Enquiry
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={contactInfoItemVariants}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start bg-white border border-light-gray rounded-2xl p-4 flex-1 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Phone
                    size={20}
                    className="text-green-vibrant mr-3 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-dark" style={{ fontFamily: 'Cinzel, serif' }}>
                      Phone Support
                    </h4>
                    <p className="text-indigo-dark/80 text-sm" style={{ fontFamily: 'Lora, sans-serif' }}>
                      +91(8093011746)
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={contactInfoItemVariants}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start bg-white border border-light-gray rounded-2xl p-4 flex-1 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Mail
                    size={20}
                    className="text-lavender mr-3 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-dark" style={{ fontFamily: 'Cinzel, serif' }}>
                      Email Us
                    </h4>
                    <p className="text-indigo-dark/80 text-sm" style={{ fontFamily: 'Lora, sans-serif' }}>
                      allex_parlour@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={contactInfoItemVariants}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start bg-white border border-light-gray rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <MapPin
                  size={20}
                  className="text-green-vibrant mr-3 flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-lg font-semibold text-indigo-dark" style={{ fontFamily: 'Cinzel, serif' }}>
                    Our Address
                  </h4>
                  <p className="text-indigo-dark/80 text-sm" style={{ fontFamily: 'Lora, sans-serif' }}>
                    Allex Gents Parlour Office, PLOT NO-18, NUAGAON,
                  </p>
                  <p className="text-indigo-dark/80 text-sm" style={{ fontFamily: 'Lora, sans-serif' }}>
                    Bhubaneswar, Odisha, 751002
                  </p>
                </div>
              </motion.div>
            </div>

            <h4 className="text-xl font-bold text-indigo-dark mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-dark to-green-vibrant" style={{ fontFamily: 'Cinzel, serif' }}>
              Send a Quick Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-indigo-dark mb-1"
                  style={{ fontFamily: 'Lora, sans-serif' }}
                >
                  Your Name
                </label>
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <User
                    size={18}
                    className="absolute left-3 text-indigo-dark/60"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-2 rounded-xl bg-white text-indigo-dark border border-light-gray pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-indigo-dark mb-1"
                  style={{ fontFamily: 'Lora, sans-serif' }}
                >
                  Your Email
                </label>
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <Mail
                    size={18}
                    className="absolute left-3 text-indigo-dark/60"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full p-2 rounded-xl bg-white text-indigo-dark border border-light-gray pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-indigo-dark mb-1"
                  style={{ fontFamily: 'Lora, sans-serif' }}
                >
                  Your Message
                </label>
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <MessageSquare
                    size={18}
                    className="absolute left-3 top-2.5 text-indigo-dark/60"
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="4"
                    className="w-full p-2 rounded-xl bg-white text-indigo-dark border border-light-gray pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300 resize-y"
                    required
                  ></textarea>
                </motion.div>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(57,255,20,0.5), 0 0 10px rgba(195,179,241,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-green-vibrant to-lavender shadow-lg flex items-center justify-center space-x-2 transition-all duration-300"
                disabled={isSubmitting}
                variants={formFieldVariants}
                style={{ fontFamily: 'Lora, sans-serif' }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-2 rounded-lg text-center font-semibold text-xs bg-green-600 text-white flex items-center justify-center space-x-1.5"
                    style={{ fontFamily: 'Lora, sans-serif' }}
                  >
                    <CheckCircle size={16} className="mr-1" />
                    <span>Message sent successfully!</span>
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-2 rounded-lg text-center font-semibold text-xs bg-red-600 text-white flex items-center justify-center space-x-1.5"
                    style={{ fontFamily: 'Lora, sans-serif' }}
                  >
                    <XCircle size={16} className="mr-1" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentBlockVariants}
            className="w-full h-[400px] lg:h-auto bg-white rounded-2xl overflow-hidden shadow-xl border border-light-gray transition-all duration-300 ease-out"
          >
            <iframe
              title="Our Location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent('Allex Gents Parlour Office, PLOT NO-18, NUAGAON, Bhubaneswar, Odisha, 751002, India')}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        :root {
          --pearl-white: #F5F5F5;
          --white: #FFFFFF;
          --indigo-dark: #1B198F;
          --green-vibrant: #39FF14;
          --lavender: #C3B3F1;
          --light-gray: #E0E0E0;
        }

        .bg-pearl-white {
          background-color: var(--pearl-white);
        }

        .bg-white {
          background-color: var(--white);
        }

        .text-indigo-dark {
          color: var(--indigo-dark);
        }

        .bg-gradient-to-r.from-green-vibrant {
          background: linear-gradient(to right, var(--green-vibrant), var(--lavender));
        }

        .border-light-gray {
          border-color: var(--light-gray);
        }

        .background-blobs-container {
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          position: absolute;
          filter: blur(80px);
        }

        .background-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: rgba(57, 255, 20, 0.3);
          top: 10%;
          left: 15%;
          animation: blob-move-1 50s linear infinite alternate;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: rgba(195, 179, 241, 0.2);
          bottom: 20%;
          right: 10%;
          animation: blob-move-2 60s linear infinite alternate;
        }

        .blob-3 {
          width: 300px;
          height: 300px;
          background: rgba(57, 255, 20, 0.3);
          top: 50%;
          left: 40%;
          animation: blob-move-3 45s linear infinite alternate;
        }

        .blob-4 {
          width: 350px;
          height: 350px;
          background: rgba(195, 179, 241, 0.2);
          top: 30%;
          right: 30%;
          animation: blob-move-4 55s linear infinite alternate;
        }

        .blob-5 {
          width: 450px;
          height: 450px;
          background: rgba(57, 255, 20, 0.3);
          bottom: 5%;
          left: 5%;
          animation: blob-move-5 70s linear infinite alternate;
        }

        @keyframes blob-move-1 {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(100px, 150px) scale(1.1); }
        }

        @keyframes blob-move-2 {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-120px, -80px) scale(1.05); }
        }

        @keyframes blob-move-3 {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(80px, -100px) scale(0.95); }
        }

        @keyframes blob-move-4 {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-90px, 110px) scale(1.08); }
        }

        @keyframes blob-move-5 {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(150px, -50px) scale(0.98); }
        }

        @keyframes blob-group-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20%, -20%); }
        }

        .animate-blob-group-move {
          animation: blob-group-move 180s linear infinite alternate;
        }

        .background-lines-animation {
          background-image: repeating-linear-gradient(
            45deg,
            rgba(57, 255, 20, 0.05) 0px,
            rgba(195, 179, 241, 0.05) 2px,
            transparent 2px,
            transparent 100px
          );
          background-size: 200px 200px;
          animation: lines-pan 90s linear infinite;
        }

        @keyframes lines-pan {
          from { background-position: 0 0; }
          to { background-position: 200px 200px; }
        }
      `}</style>
    </section>
  );
};

export default EnquiryLocateUs;

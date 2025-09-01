import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MapPin, Clock, CheckCircle, Info } from "lucide-react";

const Enquiry = () => {
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3000); // Auto-hide after 3s
  };
  // const { scrollY } = useScroll();
  // const yParallax = useTransform(scrollY, [0, 500], [0, 100]); // map parallax

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-yellow-50 to-orange-50 font-['Inter',sans-serif]">
      {/* Toast Notification */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}

      {/* Contact Section */}
      <section className="relative py-20 md:py-24">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-transparent to-orange-100/40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Get In{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-300/50"></div>
            <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
              Visit our parlour, send us a message, or call anytime. We’d love
              to welcome you to a premium grooming experience.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* LEFT - Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border border-yellow-400/30 p-8 relative"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-between space-y-5"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:border-yellow-400 transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:border-yellow-400 transition"
                  required
                />
                <select
                  className="w-full p-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:border-yellow-400 transition"
                  required
                >
                  <option>Select Service</option>
                  <option>Hair Styling</option>
                  <option>Spa & Massage</option>
                  <option>Facial & Skincare</option>
                  <option>Bridal Packages</option>
                </select>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:border-yellow-400 transition"
                  required
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-lg shadow-md relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 hover:opacity-30 transition" />
                </motion.button>
              </form>
            </motion.div>

            {/* RIGHT - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-white/70 backdrop-blur-lg rounded-2xl border border-yellow-400/30 shadow-xl hover:shadow-2xl p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-yellow-500" />,
                    title: "Call Us",
                    content: "+91 98765 43210\n+91 91234 56789",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-yellow-500" />,
                    title: "Visit Us",
                    content:
                      "751015, N3 Block, IRC Village,\nBhubaneswar, Odisha",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-yellow-500" />,
                    title: "Business Hours",
                    content: "Mon-Sat: 9:00 AM - 8:00 PM",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-5 rounded-xl bg-white/90 backdrop-blur-md border border-yellow-400/30 shadow-sm hover:shadow-yellow-400/30 transition-all duration-500"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      {item.icon}
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-6 p-6 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {[
                    "Expert Stylists & Premium Products",
                    "Modern Grooming Experience",
                    "Transparent Pricing",
                    "Customer Satisfaction Guarantee",
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1473.3381828647258!2d85.81389059694043!3d20.28485403221552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093b2afdbf1d%3A0xdad1afbbb42c1f7!2sAllex%20Gents%20Parlour!5e0!3m2!1sen!2sin!4v1693526437421!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-0"
          ></iframe>
        </motion.div>

        {/* Overlay Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-4 rounded-xl shadow-lg text-center max-w-lg"
        >
          <h3 className="text-2xl font-bold">Allex Gents Parlour</h3>
          <p className="mt-2 text-sm text-gray-200">
            751015, N3 Block, IRC Village, Bhubaneswar, Odisha
          </p>
        </motion.div>
        {/* Toast Notification */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md shadow-xl rounded-xl px-5 py-3 flex items-center gap-3 border border-yellow-400/30"
          >
            <Info className="w-6 h-6 text-orange-500" />
            <span className="text-gray-800 font-medium">
              You’re viewing our location live on Google Maps.
            </span>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Enquiry;

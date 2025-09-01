import React from "react";
import { motion } from "framer-motion";
import img from "../../img/hero1.jpeg"

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>{`
        @keyframes slide-border {
          0% { top: 0; left: 0; }
          25% { top: 0; left: calc(100% - 100px); }
          50% { top: calc(100% - 4px); left: calc(100% - 100px); }
          75% { top: calc(100% - 4px); left: 0; }
          100% { top: 0; left: 0; }
        }
        .animated-border-container {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animated-border-container::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          animation: slide-border 8s linear infinite;
        }

        /* Gradient border for cards */
        .gradient-border {
          position: relative;
          border-radius: 1rem;
          padding: 2px; /* thickness of gradient border */
          background: linear-gradient(135deg, #FFD700, #FFA500, #FFD700);
        }
        .gradient-border .card-content {
          background: #2c3e50;
          border-radius: 0.9rem;
          height: 100%;
        }
      `}</style>

      <section className="relative py-20 bg-[#1d212a] font-['Inter',sans-serif] text-center text-white">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              background:
                "linear-gradient(90deg, #FFD700 0%, #FFA500 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={itemVariants}
          >
            Why Choose Allex Gents Parlour
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 mb-12"
            variants={itemVariants}
          >
            At <span className="text-yellow-400 font-semibold">Allex Gents Parlour</span>, 
            we combine expert craftsmanship, luxury care, and modern grooming 
            techniques to give every gentleman a truly signature look.
          </motion.p>
        </motion.div>

        {/* Cards + Image */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "fa-scissors",
                title: "Expert Stylists",
                desc: "Our highly skilled barbers and stylists craft every haircut with precision. From classic trims to modern styles, we make sure you leave looking your best.",
              },
              {
                icon: "fa-hand-sparkles",
                title: "Luxury Skin Care",
                desc: "Refresh and rejuvenate your skin with premium facials, scrubs, and treatments — designed to keep you looking youthful and confident.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="gradient-border"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-content p-6 shadow-lg flex items-center gap-4 text-left transition-all hover:shadow-yellow-500/30">
                  <i className={`fa-solid ${card.icon} text-yellow-400 text-3xl`} />
                  <div>
                    <h4 className="font-bold text-lg">{card.title}</h4>
                    <p className="text-gray-300 text-sm">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="animated-border-container mx-auto w-full max-w-xs flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={img}
              alt="Allex Gents Parlour"
              className="rounded-2xl shadow-2xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "fa-user-shield",
                title: "Premium Grooming",
                desc: "From beard styling to advanced treatments, we use high-quality products and techniques to deliver a premium grooming experience.",
              },
              {
                icon: "fa-crown",
                title: "Unmatched Experience",
                desc: "Step into a luxurious space designed exclusively for gentlemen. Comfort, style, and satisfaction — all in one place.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="gradient-border"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-content p-6 shadow-lg flex items-center gap-4 text-right transition-all hover:shadow-yellow-500/30">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{card.title}</h4>
                    <p className="text-gray-300 text-sm">{card.desc}</p>
                  </div>
                  <i className={`fa-solid ${card.icon} text-yellow-400 text-3xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default WhyChooseUs;

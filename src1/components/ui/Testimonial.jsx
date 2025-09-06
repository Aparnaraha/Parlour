import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Note: To prevent performance issues, it's best practice to add Font Awesome CSS
// to your main HTML file (e.g., public/index.html) or a global CSS file.
// Example:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="..." crossorigin="anonymous" referrerpolicy="no-referrer" />

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Regular Client",
    review:
      "AllEx Gents Parlour is my go-to grooming destination. Premium ambience, skilled stylists, and consistent results—every single time.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amit Verma",
    role: "Happy Customer",
    review:
      "Professional service with a personal touch. The team understands style and makes you feel confident.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Sandeep Kumar",
    role: "Businessman",
    review:
      "Clean, precise, and stylish. I’ve been coming here for a year—great consistency and care.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Vikas Singh",
    role: "Model",
    review:
      "Sharp cuts and great skincare. I always get compliments after my visits. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=18",
  },
];

const TestimonialSection = memo(() => {
  const handleReviewClick = () => {
    window.open("https://share.google/kAcan8A0nWy0aQZTp", "_blank");
  };

  return (
    <section className="bg-[#1d212a] py-16 px-4 md:px-8 font-['Inter',sans-serif]">
      {/* Gradient border utility (thin, always visible, no bleed) */}
      <style>{`
        .gradient-ring {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
        }
        .gradient-ring::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(90deg, #facc15, #fb923c);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      {/* Container ~3/4 width, centered */}
      <div className="w-11/12 md:w-3/4 mx-auto">
        {/* Heading block with clean spacing */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why Clients <span className="text-yellow-400">Love Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real experiences from AllEx Gents Parlour—premium grooming, consistent results, and a refined atmosphere.
          </p>
        </div>

        {/* Swiper Row (no column issues) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={8}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.1 },
          }}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3800}
          className="pb-6"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              {/* Card */}
              <div
                className="gradient-ring bg-[#111820] rounded-xl
                           h-[300px] w-[320px] p-6 mx-1
                           transition-all duration-400 ease-out
                           hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/15"
              >
                {/* Top */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-yellow-400 shadow-sm"
                  />
                  <div className="ml-3 text-left">
                    <h4 className="text-white text-base font-semibold leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm italic leading-relaxed mb-5">
                  “{t.review}”
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fa-star fa ${
                          i < t.rating ? "fa-solid text-yellow-400" : "fa-regular text-gray-600"
                        } mr-1`}
                      />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 text-[11px] bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-medium">
                    {t.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={handleReviewClick}
            className="relative px-7 py-2.5 rounded-full font-semibold text-white
                       bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500
                       bg-[length:200%_100%] transition-all duration-300
                       hover:scale-105 shadow-lg"
          >
            Review On Google
          </button>
        </div>
      </div>
    </section>
  );
});

export default TestimonialSection;
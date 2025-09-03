import { Parallax } from 'react-scroll-parallax';

const HeroSection = () => {
  return (
    <section className="relative py-28 bg-[#1a1c24] text-white overflow-hidden h-[40vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <ParticleEffect />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <Parallax speed={-10}>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Queries <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">in Mind?</span>
          </motion.h1>
        </Parallax>

        <Parallax speed={-5}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We’re more than just a barbershop — we’re a destination for refinement, precision, and style.
          </motion.p>
        </Parallax>
      </div>
    </section>
  );
};
export default Parallax;
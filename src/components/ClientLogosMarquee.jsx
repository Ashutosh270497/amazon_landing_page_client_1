import { motion } from 'framer-motion';

const ClientLogosMarquee = () => {
  // Simulated brand logos with placeholder styling
  const brands = [
    { name: 'TechGear', color: 'from-primary-400 to-amber-500' },
    { name: 'HomeStyle', color: 'from-yellow-400 to-orange-500' },
    { name: 'FitLife', color: 'from-amber-400 to-primary-600' },
    { name: 'PetPals', color: 'from-yellow-400 to-amber-500' },
    { name: 'BeautyBox', color: 'from-orange-400 to-amber-600' },
    { name: 'KidZone', color: 'from-yellow-300 to-primary-500' },
    { name: 'OutdoorPro', color: 'from-amber-500 to-orange-600' },
    { name: 'GourmetCo', color: 'from-orange-400 to-amber-500' },
    { name: 'AutoParts', color: 'from-primary-500 to-yellow-600' },
    { name: 'SmartHome', color: 'from-yellow-400 to-amber-400' },
    { name: 'EcoGoods', color: 'from-amber-400 to-orange-500' },
    { name: 'LuxWatch', color: 'from-yellow-300 to-amber-400' },
  ];

  // Double the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-amazon-dark relative overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-gray-400 text-lg font-medium">
          Trusted by <span className="text-primary-400 font-bold">500+</span> brands worldwide
        </p>
      </motion.div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amazon-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amazon-dark to-transparent z-10"></div>

      {/* First row - scrolling left */}
      <div className="flex overflow-hidden mb-6">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {brand.name.charAt(0)}
                </div>
                <span className="text-gray-300 font-semibold text-lg group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - scrolling right */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedBrands.reverse().map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {brand.name.charAt(0)}
                </div>
                <span className="text-gray-300 font-semibold text-lg group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats below marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
      >
        {[
          { value: '15+', label: 'Industries' },
          { value: '25+', label: 'Categories' },
          { value: '100M+', label: 'Products Managed' },
          { value: '99.9%', label: 'Uptime' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              {stat.value}
            </p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientLogosMarquee;

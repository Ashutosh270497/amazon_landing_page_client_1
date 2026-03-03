import { motion } from 'framer-motion';
import { allBrands } from '../data/brands';

const ClientLogosMarquee = () => {
  const duplicatedBrands = [...allBrands, ...allBrands];
  const reversedDuplicatedBrands = [...duplicatedBrands].reverse();

  return (
    <section className="py-12 bg-amazon-dark relative overflow-hidden">
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

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amazon-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amazon-dark to-transparent z-10"></div>

      <div className="flex overflow-hidden mb-6">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`row1-${brand.name}-${index}`}
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-28 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-gray-300 font-semibold text-base group-hover:text-white transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {reversedDuplicatedBrands.map((brand, index) => (
            <div
              key={`row2-${brand.name}-${index}`}
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-28 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-gray-300 font-semibold text-base group-hover:text-white transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

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

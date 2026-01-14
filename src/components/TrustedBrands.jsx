import { motion } from 'framer-motion';

const TrustedBrands = () => {
  // Using text-based logos for demo - replace with actual brand logos
  const brands = [
    { name: 'AZIO', style: 'font-bold text-4xl tracking-widest' },
    { name: 'NORTHWEST', subtitle: 'ENTERPRISES', style: 'font-semibold text-2xl' },
    { name: 'Onyx', style: 'font-serif text-5xl italic' },
    { name: 'VEGAN', prefix: 'AMALA', style: 'font-bold text-3xl' },
    { name: 'YOOYIST', style: 'font-black text-3xl tracking-wide' },
    { name: 'tuuli', style: 'font-light text-4xl italic' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Join The <span className="text-primary-500">100+ Brands</span> We Have Helped To Grow
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                {brand.prefix && (
                  <span className="text-sm font-semibold text-primary-500 block">{brand.prefix}</span>
                )}
                <span className={brand.style}>{brand.name}</span>
                {brand.subtitle && (
                  <span className="text-sm font-medium text-primary-600 block tracking-wider">{brand.subtitle}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"
        />
      </div>
    </section>
  );
};

export default TrustedBrands;

import { motion } from 'framer-motion';
import dartlerLogo from '../../assets/amazon_pics/br_1.jpeg';
import geocarterLogo from '../../assets/amazon_pics/br_2.jpeg';
import auraveLogo from '../../assets/amazon_pics/br_3.jpeg';
import pollieLogo from '../../assets/amazon_pics/br_4.jpeg';
import evairLogo from '../../assets/amazon_pics/br_5.jpeg';
import moonAndMeiLogo from '../../assets/amazon_pics/br_6.jpeg';
import upsilonLogo from '../../assets/amazon_pics/br_7.jpeg';
import kadamLogo from '../../assets/amazon_pics/br_8.jpeg';
import lickiciousLogo from '../../assets/amazon_pics/br_9.jpeg';
import giocareLogo from '../../assets/amazon_pics/br_10.jpeg';

const ClientLogosMarquee = () => {
  // Actual client brands
  const brands = [
    { name: 'Dartler', logo: dartlerLogo },
    { name: 'Geocarter', logo: geocarterLogo },
    { name: 'Aurave', logo: auraveLogo },
    { name: 'Pollie by Kadam', logo: pollieLogo },
    { name: 'Evair', logo: evairLogo },
    { name: 'Moon & Mei', logo: moonAndMeiLogo },
    { name: 'Upsilon', logo: upsilonLogo },
    { name: 'Kadam', logo: kadamLogo },
    { name: 'Lickicious', logo: lickiciousLogo },
    { name: 'Giocare', logo: giocareLogo },
  ];

  // Double the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];
  const reversedDuplicatedBrands = [...duplicatedBrands].reverse();

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
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-28 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full w-auto object-contain" loading="lazy" />
                </div>
                <span className="text-gray-300 font-semibold text-base group-hover:text-white transition-colors whitespace-nowrap">
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
          {reversedDuplicatedBrands.map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-28 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full w-auto object-contain" loading="lazy" />
                </div>
                <span className="text-gray-300 font-semibold text-base group-hover:text-white transition-colors whitespace-nowrap">
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

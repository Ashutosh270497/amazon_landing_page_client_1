import { motion } from 'framer-motion';
import { CONTAINER } from '../constants';
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

const TrustedBrands = () => {
  // International Clients
  const internationalClients = [
    { name: 'Dartler', logo: dartlerLogo },
    { name: 'Evair', logo: evairLogo },
    { name: 'Moon & Mei', logo: moonAndMeiLogo },
    { name: 'Upsilon', logo: upsilonLogo },
    { name: 'Giocare', logo: giocareLogo },
  ];

  // Indian Clients
  const indianClients = [
    { name: 'Aurave', logo: auraveLogo },
    { name: 'Geocarter', logo: geocarterLogo },
    { name: 'Lickicious', logo: lickiciousLogo },
    { name: 'Pollie by Kadam', logo: pollieLogo },
    { name: 'Kadam', logo: kadamLogo },
  ];

  const renderBrand = (brand, index) => (
    <motion.div
      key={brand.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="w-full max-w-[260px] flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-28 md:h-32 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-4">
        <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full w-auto object-contain" loading="lazy" />
      </div>
      <p className="mt-3 text-sm md:text-base font-semibold text-gray-700 text-center">{brand.name}</p>
    </motion.div>
  );

  return (
    <section className="py-20 bg-white">
      <div className={CONTAINER.default}>
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="bg-primary-400 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold shadow-lg shadow-primary-400/30">
            We Worked With
          </span>
        </motion.div>

        {/* Clients Container */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-12">
          {/* International Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              International Client's
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
              {internationalClients.map((brand, index) => renderBrand(brand, index))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

          {/* Indian Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
              Indian Client's
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
              {indianClients.map((brand, index) => renderBrand(brand, index))}
            </div>
          </motion.div>
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

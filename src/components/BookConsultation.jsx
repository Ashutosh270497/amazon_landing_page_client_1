import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { CONTAINER } from '../constants';

const BookConsultation = () => {
  const discoverItems = [
    'Proven strategies for optimizing your Amazon product listings to increase traffic, rankings, and conversions.',
    'Step-by-step strategy on launching and scaling profitable ad campaigns with Amazon PPC for good ROI.',
    'How to leverage A+ Content, Brand Story, and enhanced product pages to boost brand authority and customer trust.',
  ];

  const bonusItems = [
    {
      title: 'Bonus #1:',
      description: 'Free Amazon Account Health Checklist for ongoing compliance and performance.',
    },
    {
      title: 'Bonus #2:',
      description: 'List of Top-Performing Keywords for your niche to supercharge your listings.',
    },
    {
      title: 'Bonus #3:',
      description: 'Expert Product Photography Blueprint to improve click-through rates.',
    },
    {
      title: 'Bonus #4:',
      description: 'Exclusive Invitation to a Private Amazon Sellers Community for ongoing support and networking.',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-amazon-cream relative overflow-hidden">
      <div className={CONTAINER.default}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Book Your Consultation Call Now
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Before It's Too Late
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Card - What you'll Discover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-400 to-amber-500 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <p className="text-white/80 text-lg mb-2">What you'll</p>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8">Discover</h3>

            <div className="space-y-6">
              {discoverItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckSquare className="w-6 h-6 text-white" fill="white" stroke="currentColor" />
                  </div>
                  <p className="text-white text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card - Bonuses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-600 text-lg mb-2">Wait There Are</p>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Bonuses</h3>

            <div className="space-y-6">
              {bonusItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckSquare className="w-6 h-6 text-primary-500" fill="#f59e0b" stroke="white" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-bold">{item.title}</span> {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-amber-500 hover:from-primary-500 hover:to-amber-600 text-white px-6 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg shadow-primary-400/30 hover:shadow-primary-500/40"
          >
            Book A Consultation Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookConsultation;

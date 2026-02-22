import { motion } from 'framer-motion';
import { CONTAINER } from '../constants';

const IsItWorthIt = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className={CONTAINER.default}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Is It Worth it?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-700 mb-8"
          >
            Time? Money? Or the opportunity you've been waiting for?
          </motion.p>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed"
          >
            Think about it—how often do we spend hours scrolling social media or ordering a pizza without a second thought... yet hesitate when it comes to investing in our future growth?
          </motion.p>

          {/* Decision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Decision Is Yours
            </h3>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              You can take action today, book your Free Strategy Call, and finally unlock the clarity and roadmap your Amazon business needs. Or, you can sit back and let things stay the same.
            </p>

            <p className="text-lg md:text-xl text-gray-700 font-semibold mb-8">
              But remember—if you do nothing, nothing changes.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-gray-600">
                – Your sales will stay the same.
              </p>
              <p className="text-lg md:text-xl text-gray-600">
                – Your business will feel stuck.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              And years later, you may look back wishing you had started earlier.
            </p>

            {/* Call to Action */}
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-8">
              <span className="mr-2">👉</span> Don't wait for "someday."
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Book your Free Strategy Call now and take the first step toward scaling your Amazon business.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-primary-400 hover:bg-primary-500 text-white px-6 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-primary-400/30 hover:shadow-primary-500/40"
            >
              Book Your Free Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IsItWorthIt;

import { motion } from 'framer-motion';
import { Shield, BarChart3, Users2, Clock, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users2 className="w-10 h-10" />,
      title: 'Multiple Client Accounts',
      description: 'We seamlessly manage accounts for multiple sellers using our proprietary systems, ensuring each client receives dedicated attention and customized strategies.',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and weekly reports keep you informed about every metric that matters. No hidden data, no surprises.',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Proven Track Record',
      description: 'With 500+ sellers managed and $50M+ in revenue generated, our results speak for themselves. We know what works.',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Save Time & Scale',
      description: 'Focus on strategic growth while we handle the day-to-day grind. Our team becomes your team, working around the clock.',
    },
  ];

  return (
    <section id="results" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-base font-bold">
              Why Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium"
          >
            We're not just another agency. We're your growth partner with systems built to scale multiple Amazon businesses simultaneously.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="flex gap-6 p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 h-full">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-r from-amazon-dark via-gray-900 to-amazon-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Profit Revolution</span>
              </h3>
              <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
                Join hundreds of successful sellers who trust us to manage their Amazon operations. Let's discuss how we can help you achieve your goals.
              </p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 inline-flex items-center justify-center gap-2 group"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you start managing my Amazon account?",
      answer: "We can typically onboard new clients within 24-48 hours. Our streamlined process includes account access setup, initial audit, and strategy development to get you started immediately.",
    },
    {
      question: "What makes your agency different from others?",
      answer: "We specialize in managing multiple client accounts simultaneously using proprietary systems. Our proven track record of 500+ sellers managed and $50M+ in revenue generated speaks to our expertise and scalability.",
    },
    {
      question: "Do you work with sellers outside the United States?",
      answer: "Yes! We work with Amazon sellers globally across all major marketplaces including US, UK, Canada, Europe, Australia, and more. Our team is experienced in navigating different market dynamics.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on your specific needs, revenue level, and services required. We offer flexible packages including performance-based pricing. Contact us for a personalized quote.",
    },
    {
      question: "How do you communicate progress and results?",
      answer: "We provide real-time dashboards with 24/7 access, weekly performance reports, and monthly strategy calls. Transparency is key - you'll always know exactly how your account is performing.",
    },
    {
      question: "Can you help with brand registry and A+ content?",
      answer: "Absolutely! We handle brand registry setup, A+ content creation, storefront design, and all aspects of brand enhancement to maximize your conversion rates and brand presence.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-amazon-lightGold">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-base font-bold mb-6"
          >
            <HelpCircle className="w-5 h-5" />
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            Get answers to common questions about our Amazon management services
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-white rounded-2xl shadow-md border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-primary-300 shadow-lg shadow-primary-500/10'
                  : 'border-gray-100 hover:border-primary-200 hover:shadow-lg'
              }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors duration-200"
                >
                  <h3 className={`text-xl font-bold pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-primary-700' : 'text-gray-900 group-hover:text-primary-700'
                  }`}>
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-primary-50 text-primary-600 group-hover:bg-primary-100'
                    }`}
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 font-medium text-lg">
            Our team is here to help. Get in touch and we'll answer all your questions.
          </p>
          <motion.button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

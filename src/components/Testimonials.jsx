import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Excellent Work',
      meta: 'by SALMAN KHAN & RAJAT on May 19, 2025',
      content:
        'We have been working with the Amazon account management team for the past few days and the experience has been great. The team provided expert guidance on catalogue optimisation, buy box strategies and listing SEO, which significantly increased our product visibility and conversions.',
    },
    {
      title: 'Recommended',
      meta: 'by Suveba Sayed on Apr 14, 2025',
      content:
        'Digital Universe offers reliable, vetted experts for account management, making it easier for my brand to scale and resolve issues efficiently. Service quality is awesome with instant solutions and expert management...would definitely recommend.',
    },
    {
      title: 'Focused & Result-Oriented Performance Marketing Team',
      meta: 'by SS on Jun 22, 2025',
      content:
        "Working with DIGITAL UNIVERSE has been a great experience. Gautam's performance marketing strategies are data-driven and very effective. We saw noticeable improvement in sales while keeping ACOS and TACOS well under control. The team is professional, responsive, and truly focused on delivering results.",
    },
    {
      title: 'Consistent Sales Growth Month Over Month',
      meta: 'by Vatsal Vachhani on May 20, 2025',
      content:
        'Digital Universe has exceeded our expectations when it comes to overall performance. Beyond managing ads, their team provided full support - from listing optimization and keyword strategy to analytics and growth planning. The results speak for themselves: our sales have grown consistently month-over-month while keeping TACOS under control. Their strategic thinking, transparency, and hands-on execution make them a reliable long-term partner for any brand aiming to grow on Amazon.',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-base font-bold">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Our Client&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Speak For Us</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8"
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary-500 to-amber-500 rounded-l-2xl" />
              <div className="pl-4 md:pl-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium">{item.meta}</p>
                <div className="flex items-center gap-2 mt-1 mb-4 text-primary-700">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">Verified</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white px-6 sm:px-10 md:px-16 py-4 rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-lg shadow-primary-400/30 hover:shadow-primary-500/50 transition-all duration-300"
          >
            Get Free Consultation Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

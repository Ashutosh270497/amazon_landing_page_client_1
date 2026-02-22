import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Percent, DollarSign, Handshake, Target, Award } from 'lucide-react';

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      number: '#1',
      title: 'Featured Case Study',
      quote: '"With targeted PPC campaigns and optimized listings, Niche products drive higher sales!"',
      metrics: [
        {
          icon: <Handshake className="w-14 h-14" />,
          title: 'Strong Brand Presence',
          description: 'With consistent growth and a strong brand presence in the Home Decor category.',
        },
        {
          icon: <Percent className="w-14 h-14" />,
          title: '73% Growth',
          description: 'They achieved 73% growth in 12 months on Amazon marketplace.',
        },
        {
          icon: <TrendingUp className="w-14 h-14" />,
          title: '$2.9M Revenue',
          description: 'Their sales boosted from $1.68M to $2.9M with our PPC optimization.',
        },
      ],
      amazonStats: {
        sales: '$4.66M',
        period: 'Jan 1, 2024 to Dec 31, 2024',
        status: 'Store is healthy',
      },
    },
    {
      number: '#2',
      title: 'Featured Case Study',
      quote: '"Strategic inventory management and A+ content helped us dominate our category!"',
      metrics: [
        {
          icon: <Target className="w-14 h-14" />,
          title: 'Category Leader',
          description: 'Became the #1 seller in Kitchen Accessories within 8 months.',
        },
        {
          icon: <DollarSign className="w-14 h-14" />,
          title: '156% ROI',
          description: 'Advertising ROI increased from 45% to 156% with optimized campaigns.',
        },
        {
          icon: <Award className="w-14 h-14" />,
          title: 'Best Seller Badge',
          description: 'Achieved Amazon Best Seller badge across 5 product lines.',
        },
      ],
      amazonStats: {
        sales: '$5.36M',
        period: 'Jan 1, 2024 to Dec 31, 2024',
        status: 'Store is healthy',
      },
    },
    {
      number: '#3',
      title: 'Featured Case Study',
      quote: '"From struggling startup to 7-figure brand - the results exceeded our expectations!"',
      metrics: [
        {
          icon: <TrendingUp className="w-14 h-14" />,
          title: '340% Sales Growth',
          description: 'Revenue skyrocketed from $500K to $2.2M in just 10 months.',
        },
        {
          icon: <Percent className="w-14 h-14" />,
          title: '28% ACoS',
          description: 'Reduced advertising cost of sale from 52% to just 28%.',
        },
        {
          icon: <Handshake className="w-14 h-14" />,
          title: 'Global Expansion',
          description: 'Successfully launched in 5 international Amazon marketplaces.',
        },
      ],
      amazonStats: {
        sales: '$2.86M',
        period: 'Mar 1, 2024 to Dec 31, 2024',
        status: 'Store is healthy',
      },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const currentCase = caseStudies[currentIndex];

  return (
    <section className="py-0 overflow-hidden">
      {/* Amber Case Study Section */}
      <div className="bg-gradient-to-br from-primary-600 via-amber-700 to-orange-800 py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg mb-6">
                  <span className="font-bold">{currentCase.number} {currentCase.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
                  {currentCase.quote}
                </h2>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>
                  <div className="flex gap-2">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right - Amazon Seller Dashboard Mock */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-5 bg-blue-900 rounded flex items-center justify-center">
                      <span className="text-white text-xs">US</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-900">amazon</span>
                      <span className="text-xl text-gray-500"> seller</span>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 mb-4">
                  <span className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-2">Performance</span>
                  <span className="text-blue-500 font-medium pb-2">Actions</span>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-amber-50 rounded-lg">
                  <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{currentCase.amazonStats.status}</span>
                </div>

                {/* Sales */}
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Product sales</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">{currentCase.amazonStats.sales}</span>
                    <span className="text-gray-500">USD</span>
                  </div>
                  <p className="text-gray-400 text-sm">{currentCase.amazonStats.period}</p>
                </div>

                {/* Mini Chart */}
                <div className="h-16 bg-gradient-to-r from-amber-100 to-primary-200 rounded-lg flex items-end px-2 gap-1">
                  {[40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary-500 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer hover:bg-primary-600 transition-colors"
              >
                <span className="font-bold">Connect with Us</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-500 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Metrics Cards Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentCase.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-100 text-primary-600 rounded-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {metric.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{metric.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{metric.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

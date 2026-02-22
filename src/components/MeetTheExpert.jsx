import { motion } from 'framer-motion';
import { Award, TrendingUp, Target, CheckCircle } from 'lucide-react';
import expertPhoto from '../../assets/amazon_pics/br_12.jpeg';

const MeetTheExpert = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Award-Winning Expertise',
      description: 'Recognized as an award-winning Amazon Strategist, Gautam has a proven track record of driving exponential growth for leading brands on Amazon.',
      color: 'from-primary-400 to-amber-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Extensive Amazon PPC Management',
      description: 'With 7+ years of hands-on experience, he specializes in advanced Amazon PPC campaigns and has successfully managed millions in ad spend for clients worldwide.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data-Driven Growth Strategies',
      description: 'Gautam\'s data-driven strategies and innovative product launches consistently help brands achieve category leadership and long-term profitability on Amazon.',
      color: 'from-amber-400 to-orange-600',
    },
  ];

  const highlights = [
    '7+ Years Experience',
    'Award-Winning Strategist',
    'Amazon PPC Specialist',
    'Product Launch Expert',
    'Category Leadership',
    'Data-Driven Approach',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amazon-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Expert</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Expert Image & Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Image Container with Gradient Border */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                {/* Expert image */}
                <div className="relative aspect-[3/4]">
                  <img
                    src={expertPhoto}
                    alt="Gautam Soni - Award Winning Amazon Strategist"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback if image not found
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                    <div className="text-center text-white">
                      <Award className="w-24 h-24 mx-auto mb-4 text-primary-400" />
                      <p className="text-sm opacity-75">Gautam Soni</p>
                      <p className="text-xs opacity-50 mt-1">Amazon Strategist</p>
                    </div>
                  </div>

                  {/* Gradient overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-primary-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg z-10"
            >
              <p className="text-xs md:text-sm font-bold whitespace-nowrap">7+ Years</p>
              <p className="text-[10px] md:text-xs">Experience</p>
            </motion.div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 bg-white rounded-xl p-4 shadow-sm border border-primary-100 hover:border-primary-300 transition-colors duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-base font-semibold text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Expert Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 w-full"
          >
            {/* Name & Title */}
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-500 leading-tight">
                Gautam Soni
              </h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 leading-snug">
                Award Winning Amazon Strategist
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p className="text-justify">
                Gautam Soni is an award-winning Amazon Strategist with 7+ years of experience. He specializes in Amazon PPC, product launches, and advanced optimization, helping brands achieve sustainable growth and category leadership.
              </p>
              <p className="text-justify">
                Gautam is dedicated to guiding businesses in unlocking their full potential on Amazon through data-driven strategies and expert mentorship.
              </p>
              <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/5 rounded-2xl p-5 md:p-6 border border-primary-500/20 mt-6">
                <p className="text-lg md:text-xl text-primary-700 font-semibold italic leading-relaxed">
                  "My mission is to help brands unlock their full growth potential on Amazon through expert strategy, transparent guidance, and measurable results."
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-primary-400 hover:bg-primary-500 text-white px-6 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-primary-400/30 hover:shadow-primary-500/40 inline-flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <Award className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg flex-shrink-0`}>
                {achievement.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                {achievement.title}
              </h4>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed flex-grow">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-3xl p-6 md:p-8 lg:p-10 border border-primary-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-500 mb-2">
                7+
              </p>
              <p className="text-base md:text-lg text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                500+
              </p>
              <p className="text-base md:text-lg text-gray-600 font-medium">Brands Helped</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-2">
                $100M+
              </p>
              <p className="text-base md:text-lg text-gray-600 font-medium">Revenue Generated</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 mb-2">
                98%
              </p>
              <p className="text-base md:text-lg text-gray-600 font-medium">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheExpert;

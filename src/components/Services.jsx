import { motion } from 'framer-motion';
import { Target, BarChart3, FileText, Search, Building2, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: <Target className="w-10 h-10" />,
      title: 'Amazon PPC',
      description: 'Get an expert review of your Amazon Pay-Per-Click campaigns to uncover wasted spend, enhance targeting, and unlock higher revenue through actionable optimizations.',
      features: ['Campaign audit & optimization', 'Bid management & targeting', 'ROI-focused strategies'],
      color: 'from-primary-400 to-amber-500',
      spnUrl: SITE_CONFIG.spnLinks.advertising,
    },
    {
      number: '02',
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Amazon Performance',
      description: 'Receive a detailed analysis of your Amazon performance marketing, focusing on strategy, campaign structure, and data-driven improvements to boost growth and visibility.',
      features: ['Performance analysis', 'Campaign structure optimization', 'Data-driven insights'],
      color: 'from-yellow-400 to-orange-500',
      spnUrl: SITE_CONFIG.spnLinks.advertising,
    },
    {
      number: '03',
      icon: <FileText className="w-10 h-10" />,
      title: 'Amazon A+ Content',
      description: 'Access a comprehensive check of your Amazon Brand Story and Enhanced Brand Content, optimizing creative elements for better engagement and increased conversion rates.',
      features: ['Brand Story optimization', 'Enhanced Brand Content', 'Creative element enhancement'],
      color: 'from-amber-400 to-primary-600',
      spnUrl: SITE_CONFIG.spnLinks.enhancedBrandContent,
    },
    {
      number: '04',
      icon: <Search className="w-10 h-10" />,
      title: 'Amazon SEO & Listing Optimization',
      description: 'Benefit from a full audit of your product listings and keywords to maximize organic traffic, improve search rankings, and increase your Amazon marketplace sales.',
      features: ['Product listing audit', 'Keyword optimization', 'Search ranking improvement'],
      color: 'from-orange-400 to-amber-600',
      spnUrl: SITE_CONFIG.spnLinks.cataloging,
    },
    {
      number: '05',
      icon: <Building2 className="w-10 h-10" />,
      title: 'Amazon Business Account Consultation',
      description: 'Gain personalized guidance on setting up and scaling your Amazon business, including verified partner support and compliance for profitable expansion into global markets.',
      features: ['Business setup & scaling', 'Verified partner support', 'Global market expansion'],
      color: 'from-primary-500 to-yellow-500',
      spnUrl: SITE_CONFIG.spnLinks.accountManagement,
    },
    {
      number: '06',
      icon: <MessageSquare className="w-10 h-10" />,
      title: 'Free Consultation & Growth Planning',
      description: 'Take advantage of a strategy session to clarify business goals, address challenges, and receive a custom growth plan tailored to your Amazon account success.',
      features: ['Strategy session', 'Goal clarification', 'Custom growth plan'],
      color: 'from-yellow-300 to-amber-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
            <span className="bg-primary-400 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg shadow-primary-400/30">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Comprehensive Amazon Account <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Growth Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
          >
            Expert solutions covering every aspect of your Amazon business - from PPC optimization to A+ content creation
          </motion.p>
        </div>

        {/* Services Grid with Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white to-primary-50/30 hover:from-white hover:to-primary-50/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:shadow-primary-400/20 transition-all duration-500 border border-primary-200/50 hover:border-primary-400/70 h-full overflow-hidden relative">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Large Number Background */}
                <div className="absolute -top-4 -right-4 text-[140px] font-black text-primary-100 group-hover:text-primary-200 transition-colors duration-500 select-none leading-none">
                  {service.number}
                </div>

                <div className="relative z-10">
                  {/* Header with Icon and Number */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div 
                      className={`bg-gradient-to-br ${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3)'
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.span 
                      className="text-6xl font-black text-primary-400 group-hover:text-primary-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-base text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0" />
                        </motion.div>
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {service.spnUrl ? (
                    <motion.a
                      href={service.spnUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      Explore on SPN
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.a>
                  ) : (
                    <motion.button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center gap-2 text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      Learn More
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href={SITE_CONFIG.spnLinks.accountManagement}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-bold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
          >
            Explore Our SPN Page
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white px-6 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-primary-400/40 hover:shadow-2xl hover:shadow-primary-500/50 relative overflow-hidden group"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: ['100%', '100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

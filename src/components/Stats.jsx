import { motion } from 'framer-motion';
import { Users, DollarSign, Award, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      value: 500,
      suffix: '+',
      label: 'Active Sellers',
      description: 'Managed partnerships worldwide'
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      value: 108,
      prefix: '$',
      suffix: 'M+',
      label: 'Revenue Generated',
      description: 'Total client sales in 2024'
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: 43655,
      suffix: '+',
      label: 'Units Sold',
      description: 'Products delivered to customers'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: 41953,
      suffix: '+',
      label: 'Orders Processed',
      description: 'Successfully fulfilled'
    },
  ];

  return (
    <section className="relative bg-amazon-dark py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional results for Amazon sellers globally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className="relative group perspective-1000"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 hover:border-primary-400/70 hover:bg-white/15 transition-all duration-500 h-full transform-gpu shadow-xl hover:shadow-2xl hover:shadow-primary-400/20 relative overflow-hidden">
                {/* Enhanced gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Enhanced shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: ['−100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                  />
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 30px rgba(251, 191, 36, 0.3) inset'
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="bg-gradient-to-br from-primary-400 to-primary-600 text-white p-5 rounded-xl shadow-2xl shadow-primary-500/40 group-hover:shadow-primary-400/60 transition-all duration-500"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0], 
                        scale: 1.15,
                        boxShadow: '0 20px 40px rgba(251, 191, 36, 0.5)'
                      }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <motion.h3 
                    className="text-5xl md:text-6xl font-extrabold mb-3 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 bg-[length:200%_auto] animate-gradient">
                      <AnimatedCounter
                        end={stat.value}
                        prefix={stat.prefix || ''}
                        suffix={stat.suffix || ''}
                        duration={2.5}
                      />
                    </span>
                  </motion.h3>
                  <p className="text-white text-xl font-bold text-center group-hover:text-primary-300 transition-colors duration-300">{stat.label}</p>
                  <p className="text-gray-400 text-base text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

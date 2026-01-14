import { motion } from 'framer-motion';
import { Award, Shield, Star, Trophy, Target, Zap } from 'lucide-react';

const AchievementBadges = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Top 1%',
      subtitle: 'Amazon Partners',
      color: 'from-yellow-400 to-amber-500',
      delay: 0,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified',
      subtitle: 'Ads Specialist',
      color: 'from-primary-400 to-primary-600',
      delay: 0.1,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Verified',
      subtitle: 'Service Provider',
      color: 'from-amber-400 to-orange-500',
      delay: 0.2,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5-Star',
      subtitle: 'Client Rating',
      color: 'from-yellow-300 to-amber-400',
      delay: 0.3,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '98%',
      subtitle: 'Success Rate',
      color: 'from-orange-400 to-amber-600',
      delay: 0.4,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast',
      subtitle: 'Results Delivery',
      color: 'from-primary-500 to-yellow-500',
      delay: 0.5,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amazon-dark to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-400/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Why Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Trust Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognized excellence in Amazon marketplace management
          </p>
        </motion.div>

        {/* Achievement Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: achievement.delay }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 h-full">
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon with gradient background */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-1">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.subtitle}</p>

                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl border border-primary-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ scale: [0.95, 1.02, 1] }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementBadges;

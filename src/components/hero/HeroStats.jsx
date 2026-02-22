import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <DollarSign className="w-5 h-5" />, value: '$50M+', label: 'Revenue Generated' },
  { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Sellers Managed' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '1.8B+', label: 'Ad Spend Managed' },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex flex-wrap gap-6 py-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <motion.div
            className="bg-primary-500/20 p-2 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-400">{stat.icon}</span>
          </motion.div>
          <div>
            <p className="text-2xl md:text-3xl font-black text-primary-400">{stat.value}</p>
            <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;

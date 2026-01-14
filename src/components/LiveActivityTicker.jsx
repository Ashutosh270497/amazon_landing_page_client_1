import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShoppingCart, DollarSign, Package, Users, BarChart3 } from 'lucide-react';

const LiveActivityTicker = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: 'Sales increased by 127% for TechGear Pro',
      location: 'Amazon US',
      time: 'Just now',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20',
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      text: 'New bestseller rank achieved #3 in Electronics',
      location: 'Amazon UK',
      time: '2 mins ago',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: '$45,000 revenue generated this week',
      location: 'Amazon DE',
      time: '5 mins ago',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
    },
    {
      icon: <Package className="w-5 h-5" />,
      text: '2,500 units sold in last 24 hours',
      location: 'Amazon JP',
      time: '8 mins ago',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'New seller onboarded from California',
      location: 'Global',
      time: '12 mins ago',
      color: 'text-primary-300',
      bgColor: 'bg-primary-500/15',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: 'PPC ACOS reduced to 15% from 35%',
      location: 'Amazon CA',
      time: '15 mins ago',
      color: 'text-amber-300',
      bgColor: 'bg-amber-500/20',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <section className="py-8 bg-amazon-dark border-y border-white/5 relative overflow-hidden">
      {/* Animated background line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-center gap-4">
          {/* Live indicator */}
          <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1.5 rounded-full border border-red-500/30">
            <motion.div
              className="w-2 h-2 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-red-400 text-sm font-bold">LIVE</span>
          </div>

          {/* Activity ticker */}
          <div className="flex-1 max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentActivity}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 flex-wrap"
              >
                <div className={`${activities[currentActivity].bgColor} p-2 rounded-lg`}>
                  <span className={activities[currentActivity].color}>
                    {activities[currentActivity].icon}
                  </span>
                </div>
                <span className="text-white font-medium text-sm md:text-base">
                  {activities[currentActivity].text}
                </span>
                <span className="text-gray-500 text-sm hidden md:inline">•</span>
                <span className="text-primary-400 text-sm font-medium hidden md:inline">
                  {activities[currentActivity].location}
                </span>
                <span className="text-gray-500 text-sm hidden md:inline">•</span>
                <span className="text-gray-400 text-sm hidden md:inline">
                  {activities[currentActivity].time}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Activity counter */}
          <div className="hidden lg:flex items-center gap-2 text-gray-400 text-sm">
            <motion.span
              key={currentActivity}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="text-primary-400 font-bold"
            >
              {currentActivity + 1}
            </motion.span>
            <span>/</span>
            <span>{activities.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityTicker;

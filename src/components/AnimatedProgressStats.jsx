import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, BarChart2, PieChart, Activity } from 'lucide-react';

const AnimatedProgressStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animated progress ring component
  const ProgressRing = ({ progress, size = 120, strokeWidth = 8, color, label, value }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (animatedProgress / 100) * circumference;

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setAnimatedProgress(progress);
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [isInView, progress]);

    return (
      <div className="relative flex flex-col items-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl md:text-3xl font-black text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {value}
          </motion.span>
        </div>
        <p className="text-gray-400 text-sm mt-3 text-center">{label}</p>
      </div>
    );
  };

  // Animated bar chart component
  const AnimatedBar = ({ label, value, maxValue, color, index }) => {
    const percentage = (value / maxValue) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-300 text-sm font-medium">{label}</span>
          <span className="text-primary-400 font-bold">{value}%</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${color}`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${percentage}%` } : {}}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  // Performance metrics data
  const performanceMetrics = [
    { label: 'Sales Growth', value: 94, color: 'bg-gradient-to-r from-primary-400 to-amber-500' },
    { label: 'ACOS Reduction', value: 78, color: 'bg-gradient-to-r from-yellow-400 to-primary-500' },
    { label: 'Conversion Rate', value: 85, color: 'bg-gradient-to-r from-amber-400 to-orange-500' },
    { label: 'Keyword Rankings', value: 92, color: 'bg-gradient-to-r from-orange-400 to-amber-600' },
  ];

  // Live stats data
  const liveStats = [
    { label: 'Active Campaigns', value: '1,247', change: '+12%', isPositive: true, icon: <Activity className="w-5 h-5" /> },
    { label: 'Daily Revenue', value: '$847K', change: '+8.5%', isPositive: true, icon: <BarChart2 className="w-5 h-5" /> },
    { label: 'Avg. ACOS', value: '18.2%', change: '-4.2%', isPositive: true, icon: <PieChart className="w-5 h-5" /> },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-amazon-dark relative overflow-hidden">
      {/* Background decorations */}
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
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-6 py-3 rounded-full text-base font-bold border border-primary-500/30 mb-6">
            <BarChart2 className="w-5 h-5" />
            Performance Metrics
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Results</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Real performance metrics from our managed accounts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Progress Rings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <PieChart className="w-6 h-6 text-primary-400" />
              Success Rates
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ProgressRing
                progress={98}
                value="98%"
                label="Client Retention"
                color="#f59e0b"
              />
              <ProgressRing
                progress={94}
                value="94%"
                label="Revenue Growth"
                color="#fbbf24"
              />
              <ProgressRing
                progress={89}
                value="89%"
                label="ROI Positive"
                color="#fb923c"
              />
              <ProgressRing
                progress={96}
                value="96%"
                label="On-Time Delivery"
                color="#fcd34d"
              />
            </div>

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
              {liveStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-primary-400">{stat.icon}</span>
                  </div>
                  <p className="text-xl md:text-2xl font-black text-white">{stat.value}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {stat.isPositive ? (
                      <TrendingUp className="w-3 h-3 text-primary-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-orange-400" />
                    )}
                    <span className={stat.isPositive ? 'text-primary-400 text-xs' : 'text-orange-400 text-xs'}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Progress Bars & Comparison */}
          <div className="space-y-8">
            {/* Performance Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <BarChart2 className="w-6 h-6 text-primary-400" />
                Improvement Metrics
              </h3>
              <div className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                  <AnimatedBar
                    key={index}
                    label={metric.label}
                    value={metric.value}
                    maxValue={100}
                    color={metric.color}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-3xl p-8 md:p-10 border border-primary-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Average Results</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <div className="text-center p-4 bg-gray-500/10 rounded-xl border border-gray-500/20">
                  <p className="text-gray-400 text-sm font-medium mb-2">Before</p>
                  <p className="text-3xl md:text-4xl font-black text-gray-300">35%</p>
                  <p className="text-gray-400 text-sm mt-1">Avg. ACOS</p>
                </div>
                {/* After */}
                <div className="text-center p-4 bg-primary-500/10 rounded-xl border border-primary-500/20 relative">
                  <motion.div
                    className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    -57%
                  </motion.div>
                  <p className="text-primary-400 text-sm font-medium mb-2">After</p>
                  <p className="text-3xl md:text-4xl font-black text-primary-400">15%</p>
                  <p className="text-gray-400 text-sm mt-1">Avg. ACOS</p>
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="flex justify-center my-4">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-primary-400"
                >
                  <ArrowUpRight className="w-8 h-8" />
                </motion.div>
              </div>

              <p className="text-center text-gray-400 text-sm">
                Average improvement across <span className="text-primary-400 font-bold">500+</span> managed accounts
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedProgressStats;

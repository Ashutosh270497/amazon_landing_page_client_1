import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X, Zap, Users } from 'lucide-react';

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Randomly decrease spots occasionally
  useEffect(() => {
    const spotTimer = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 3) {
        setSpotsLeft((prev) => prev - 1);
      }
    }, 30000);

    return () => clearInterval(spotTimer);
  }, [spotsLeft]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white relative overflow-hidden"
      >
        {/* Animated background stripes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            }}
            animate={{ x: [0, 20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            {/* Zap Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Zap className="w-5 h-5 fill-white" />
            </motion.div>

            {/* Main Text */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium">
              <span className="font-bold">Limited Time Offer:</span>
              <span>Free Amazon Audit +</span>
              <span className="bg-white/20 px-2 py-0.5 rounded font-bold">30% OFF</span>
              <span>First Month</span>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <div className="flex items-center gap-1 font-mono font-bold">
                <span className="bg-amazon-dark/30 px-2 py-1 rounded">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-amazon-dark/30 px-2 py-1 rounded">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-amazon-dark/30 px-2 py-1 rounded">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Spots Left */}
            <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full border border-red-400/30">
              <Users className="w-4 h-4 text-red-200" />
              <motion.span
                key={spotsLeft}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-bold text-red-100"
              >
                Only {spotsLeft} spots left!
              </motion.span>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              Claim Now
            </motion.button>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/10 p-1 rounded transition-colors hidden sm:block"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UrgencyBanner;

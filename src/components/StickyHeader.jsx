import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header after scrolling past hero section (about 600px)
      if (currentScrollY > 600) {
        setIsVisible(true);
        setIsScrollingUp(currentScrollY < lastScrollY);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-amazon-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl"
        >
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center"
              >
                <h1 className="text-xl md:text-2xl font-bold text-white">
                  Scale<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Amazon</span>
                </h1>
              </motion.div>

              {/* CTA Section */}
              <div className="flex items-center gap-4">
                {/* Urgency Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hidden md:flex items-center gap-2 text-primary-400"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-semibold">Limited Spots Available!</span>
                </motion.div>

                {/* Phone CTA */}
                <motion.a
                  href="tel:+1234567890"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:flex items-center gap-2 text-white hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (234) 567-890</span>
                </motion.a>

                {/* CTA Button */}
                <motion.button
                  onClick={scrollToContact}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-primary-500/30 overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Audit</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Animated progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min((lastScrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;

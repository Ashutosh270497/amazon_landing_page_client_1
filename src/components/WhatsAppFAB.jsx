import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/site';

const WhatsAppFAB = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-amazon-dark text-white px-4 py-2 rounded-xl shadow-xl border border-white/10"
              >
                <span className="text-sm font-medium">Chat with us on WhatsApp!</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-amazon-dark"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Close button for tooltip */}
          {showTooltip && (
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full p-1 hover:bg-gray-600 transition-colors z-10"
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
          )}

          {/* Main WhatsApp Button */}
          <motion.button
            onClick={openWhatsApp}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white p-3 sm:p-4 rounded-2xl shadow-2xl shadow-primary-500/30 transition-all duration-300 group border-2 border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>

          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-2xl bg-primary-400 animate-ping opacity-50"></span>
        </div>
      </motion.div>
    </>
  );
};

export default WhatsAppFAB;

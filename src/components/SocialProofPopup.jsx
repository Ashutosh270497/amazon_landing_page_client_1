import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const proofs = [
    {
      name: 'Michael T.',
      location: 'New York, USA',
      action: 'just started their free audit',
      time: '2 minutes ago',
      avatar: 'M',
    },
    {
      name: 'Sarah K.',
      location: 'London, UK',
      action: 'increased sales by 340%',
      time: '5 minutes ago',
      avatar: 'S',
    },
    {
      name: 'David L.',
      location: 'Toronto, Canada',
      action: 'signed up for account management',
      time: '8 minutes ago',
      avatar: 'D',
    },
    {
      name: 'Emma R.',
      location: 'Sydney, Australia',
      action: 'achieved Best Seller status',
      time: '12 minutes ago',
      avatar: 'E',
    },
    {
      name: 'James W.',
      location: 'Los Angeles, USA',
      action: 'reduced ACoS by 45%',
      time: '15 minutes ago',
      avatar: 'J',
    },
  ];

  useEffect(() => {
    if (dismissed) return;

    // Show first popup after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer;
    let showTimer;

    if (isVisible) {
      // Hide after 5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);

        // Show next proof after 10 seconds
        showTimer = setTimeout(() => {
          setCurrentProof((prev) => (prev + 1) % proofs.length);
          setIsVisible(true);
        }, 10000);
      }, 5000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [isVisible, dismissed, proofs.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  const proof = proofs[currentProof];

  return (
    <AnimatePresence>
      {isVisible && !dismissed && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-24 left-6 z-40 max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
                  {proof.avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-900 truncate">{proof.name}</p>
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-600 truncate">{proof.location}</p>
                <p className="text-sm font-medium text-primary-600 mt-1">{proof.action}</p>
                <p className="text-xs text-gray-400 mt-1">{proof.time}</p>
              </div>
            </div>

            {/* Verified badge */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
              <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-primary-600" />
              </div>
              <span className="text-xs text-gray-500">Verified by ScaleAmazon</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofPopup;

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import useTypingEffect from '../hooks/useTypingEffect';
import { AnimatedBackground, WorldMapSection, HeroForm, HeroStats } from './hero';
import { CONTAINER } from '../constants';

const typingTexts = [
  'Turn Products into Bestsellers!',
  'Scale Your Amazon Business!',
  'Maximize Your ROI!',
  'Dominate Your Category!',
];

const HeroWithForm = () => {
  const typedText = useTypingEffect(typingTexts);

  return (
    <section className="relative bg-gradient-to-br from-amazon-dark via-gray-900 to-amazon-dark min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden">
      <AnimatedBackground />

      <div className={`relative ${CONTAINER.default} w-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-400 rounded-full px-5 py-2 shadow-lg shadow-primary-500/30"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-white text-sm font-bold">Trusted by 500+ Amazon Sellers</span>
            </motion.div>

            {/* Heading with typing effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Struggling to Scale?
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Let Us Help You {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-12 bg-primary-400 ml-1 align-middle"
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 font-medium"
            >
              Boosting profitability, growth opportunities and building brand globally.
            </motion.p>

            {/* Stats */}
            <HeroStats />

            {/* World Map */}
            <WorldMapSection />

            {/* Amazon Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-500/30 hover:border-primary-400 transition-all duration-300"
              >
                <p className="text-sm font-bold text-white">Amazon Global Selling</p>
                <p className="text-xs text-primary-400">Solution Provider Network</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-500/30 hover:border-primary-400 transition-all duration-300"
              >
                <p className="text-sm font-bold text-white">Amazon Ads</p>
                <p className="text-xs text-primary-400">Verified Partner</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <HeroForm />
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;

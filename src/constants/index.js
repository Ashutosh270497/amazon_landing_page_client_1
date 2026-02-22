// Shared constants and utilities for the Amazon Agency Landing Page

// =============================================================================
// COLORS & GRADIENTS
// =============================================================================

export const GRADIENTS = {
  primary: 'from-primary-400 to-amber-500',
  secondary: 'from-yellow-400 to-orange-500',
  tertiary: 'from-amber-400 to-primary-600',
  quaternary: 'from-orange-400 to-amber-600',
  accent: 'from-primary-500 to-yellow-500',
  light: 'from-yellow-300 to-amber-500',
  warm: 'from-yellow-300 to-amber-400',
  sunset: 'from-orange-400 to-amber-600',
};

export const GRADIENT_CLASSES = {
  text: {
    primary: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300',
    secondary: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-500',
    warm: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500',
    amber: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500',
    sunset: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600',
  },
  bg: {
    primary: 'bg-gradient-to-br from-primary-500/10 to-primary-600/5',
    dark: 'bg-gradient-to-b from-gray-900 to-amazon-dark',
    light: 'bg-gradient-to-b from-white to-amazon-cream',
  },
};

// =============================================================================
// LAYOUT & CONTAINER
// =============================================================================

export const CONTAINER = {
  default: 'max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6',
  wide: 'max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-12',
};

export const SECTION_PADDING = {
  default: 'py-24',
  large: 'py-32',
  small: 'py-16',
};

// =============================================================================
// ANIMATION VARIANTS (Framer Motion)
// =============================================================================

export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    whileInView: { opacity: 1, scale: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    whileInView: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
  },
  bounceIn: {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
  },
  shimmer: {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },
};

export const VIEWPORT_CONFIG = {
  once: true,
};

export const TRANSITION = {
  default: { duration: 0.5 },
  fast: { duration: 0.3 },
  slow: { duration: 0.7 },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};

// =============================================================================
// HOVER EFFECTS
// =============================================================================

export const HOVER = {
  lift: { y: -8, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  scale: { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  scaleSmall: { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  scaleLarge: { scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
  glow: { 
    boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3)',
    transition: { duration: 0.3 }
  },
  rotate3d: { 
    rotateX: 5,
    rotateY: 5,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  },
};

// =============================================================================
// CARD STYLES
// =============================================================================

export const CARD_STYLES = {
  default: 'bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-primary-400/20 transition-all duration-500 border border-gray-100 hover:border-primary-300',
  dark: 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary-400/70 hover:bg-white/10 transition-all duration-500',
  cream: 'bg-amazon-cream hover:bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-primary-400/10 transition-all duration-500 border border-primary-100 hover:border-primary-400',
  gradient: 'bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-3xl border border-primary-500/20 hover:from-primary-500/20 hover:to-primary-600/10 hover:border-primary-500/40 transition-all duration-500',
  glass: 'bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl border border-white/20 hover:bg-white/90 transition-all duration-500',
  premium: 'bg-gradient-to-br from-white to-primary-50/30 rounded-3xl p-8 shadow-2xl hover:shadow-primary-400/30 border border-primary-200/50 hover:border-primary-400/60 transition-all duration-500',
};

// =============================================================================
// BUTTON STYLES
// =============================================================================

export const BUTTON_STYLES = {
  primary: 'bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-400/40 hover:shadow-2xl hover:shadow-primary-500/50',
  secondary: 'bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary-50 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-gray-200 hover:border-primary-300 shadow-md hover:shadow-lg',
  outline: 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary-400/30',
  small: 'bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-500/40',
  ghost: 'bg-transparent hover:bg-primary-50 text-primary-500 hover:text-primary-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-transparent hover:border-primary-200',
};

// =============================================================================
// BADGE/TAG STYLES
// =============================================================================

export const BADGE_STYLES = {
  primary: 'bg-primary-400 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg shadow-primary-400/30',
  outline: 'bg-primary-500/20 text-primary-400 px-6 py-3 rounded-full text-base font-bold border border-primary-500/30',
  dark: 'bg-gray-800 text-primary-400 px-6 py-3 rounded-full text-base font-bold',
};

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const TYPOGRAPHY = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-black',
  h2: 'text-4xl md:text-5xl lg:text-6xl font-extrabold',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
  h4: 'text-xl md:text-2xl font-bold',
  subtitle: 'text-xl md:text-2xl text-gray-600',
  body: 'text-base md:text-lg text-gray-600 leading-relaxed',
  bodyLarge: 'text-lg md:text-xl text-gray-600 leading-relaxed',
  small: 'text-sm text-gray-500',
};

// =============================================================================
// FORM STYLES
// =============================================================================

export const FORM_STYLES = {
  input: 'w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-200 text-gray-900 placeholder-gray-400',
  label: 'block text-sm font-semibold text-gray-700 mb-2',
  error: 'text-red-500 text-sm mt-1',
};

// =============================================================================
// ICON CONTAINERS
// =============================================================================

export const ICON_CONTAINER = {
  default: 'w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg',
  small: 'w-10 h-10 rounded-xl flex items-center justify-center',
  large: 'w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl',
};

// =============================================================================
// BACKGROUND DECORATIONS
// =============================================================================

export const BG_DECORATIONS = {
  blob: 'absolute rounded-full blur-3xl',
  gradient: {
    primary: 'bg-primary-500/5',
    secondary: 'bg-primary-400/5',
    amber: 'bg-amber-500/5',
  },
};

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const Z_INDEX = {
  background: 0,
  content: 10,
  overlay: 20,
  modal: 30,
  sticky: 40,
  tooltip: 50,
};

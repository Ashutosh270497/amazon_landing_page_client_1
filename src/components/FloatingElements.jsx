import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 20, x: '10%', y: '20%', duration: 8, delay: 0 },
    { size: 15, x: '85%', y: '15%', duration: 10, delay: 1 },
    { size: 25, x: '75%', y: '60%', duration: 12, delay: 2 },
    { size: 18, x: '15%', y: '70%', duration: 9, delay: 0.5 },
    { size: 12, x: '90%', y: '80%', duration: 11, delay: 1.5 },
    { size: 22, x: '5%', y: '50%', duration: 7, delay: 2.5 },
    { size: 16, x: '50%', y: '10%', duration: 13, delay: 3 },
    { size: 14, x: '60%', y: '85%', duration: 8.5, delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, -15, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {/* Different shapes */}
          {index % 4 === 0 && (
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-primary-400/20 to-primary-500/10 blur-sm"
            />
          )}
          {index % 4 === 1 && (
            <div
              className="w-full h-full rotate-45 bg-gradient-to-br from-primary-300/15 to-primary-400/5"
            />
          )}
          {index % 4 === 2 && (
            <div
              className="w-full h-full rounded-full border border-primary-400/20"
            />
          )}
          {index % 4 === 3 && (
            <svg viewBox="0 0 24 24" className="w-full h-full text-primary-400/20 fill-current">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingElements;

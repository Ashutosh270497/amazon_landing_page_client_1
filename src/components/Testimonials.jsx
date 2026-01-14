import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechBrand Co.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Working with ScaleAmazon transformed our business. Our sales increased by 340% in just 6 months. Their PPC optimization alone saved us thousands while driving more conversions.',
      rating: 5,
      revenue: '$2.5M+',
      growth: '340%',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, HomeGoods Plus',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'The team\'s expertise in Amazon\'s algorithm is unmatched. They helped us rank on page 1 for our main keywords within weeks. Highly recommend their services!',
      rating: 5,
      revenue: '$1.8M+',
      growth: '280%',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, BeautyBox Inc.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'From listing optimization to brand registry, they handled everything professionally. Our brand presence on Amazon has never been stronger.',
      rating: 5,
      revenue: '$3.2M+',
      growth: '420%',
    },
    {
      name: 'David Park',
      role: 'Owner, FitGear Pro',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      content: 'Their data-driven approach to PPC management reduced our ACoS by 45% while increasing sales. The ROI has been incredible.',
      rating: 5,
      revenue: '$890K+',
      growth: '210%',
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-amazon-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-base font-bold">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what sellers who've worked with us have to say.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[450px] md:h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100 h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote size={80} className="text-primary-500" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    {/* Left - Image and Info */}
                    <div className="flex flex-col items-center md:items-start">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-lg border-4 border-primary-100"
                      />
                      <div className="mt-4 text-center md:text-left">
                        <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                        <div className="flex gap-1 mt-2 justify-center md:justify-start">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-primary-400 text-primary-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-gray-700 text-xl leading-relaxed italic">
                        "{testimonials[currentIndex].content}"
                      </p>

                      {/* Stats */}
                      <div className="flex gap-10 mt-8 pt-8 border-t border-gray-100">
                        <div>
                          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                            {testimonials[currentIndex].revenue}
                          </p>
                          <p className="text-base text-gray-500">Revenue Generated</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                            {testimonials[currentIndex].growth}
                          </p>
                          <p className="text-base text-gray-500">Growth Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 p-3 rounded-xl shadow-md transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 p-3 rounded-xl shadow-md transition-all duration-300"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

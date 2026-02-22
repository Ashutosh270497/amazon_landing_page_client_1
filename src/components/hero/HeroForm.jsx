import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import { getLeadMailtoHref } from '../../config/site';

const trustIndicators = [
  { icon: <Shield className="w-4 h-4" />, text: 'NDA Protected' },
  { icon: <Clock className="w-4 h-4" />, text: '24hr Response' },
  { icon: <Star className="w-4 h-4" />, text: '5-Star Rated' },
];

const serviceOptions = [
  { value: 'account-management', label: 'Account Management' },
  { value: 'ppc-optimization', label: 'PPC Optimization' },
  { value: 'listing-optimization', label: 'Listing Optimization' },
  { value: 'brand-registry', label: 'Brand Registry & A+ Content' },
  { value: 'amazon-premium-creative', label: 'Amazon Premium Creative' },
  { value: 'storefront-of-amazon', label: 'Storefront of Amazon' },
  { value: 'full-service', label: 'Full Service Package' },
];

const serviceLabelMap = serviceOptions.reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {});

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productLink: '',
    serviceType: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailBody = [
      'New Hero Audit Form Submission',
      `Submitted At: ${new Date().toLocaleString()}`,
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Amazon Store/Product Link: ${formData.productLink || 'N/A'}`,
      `Service Type: ${serviceLabelMap[formData.serviceType] || formData.serviceType}`,
      `Business Notes: ${formData.message || 'N/A'}`,
    ].join('\n');

    const mailtoHref = getLeadMailtoHref({
      subject: 'New Lead - Hero Free Audit Form',
      body: emailBody,
    });

    window.location.href = mailtoHref;

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      productLink: '',
      serviceType: '',
      message: '',
    });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  const inputBaseClass =
    'w-full px-5 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg';

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="relative"
    >
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
      >
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
          FREE AUDIT
        </motion.span>
      </motion.div>

      <div className="bg-primary-400 rounded-3xl shadow-2xl shadow-primary-500/20 p-8 md:p-10 relative overflow-hidden">
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ translateX: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />

        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 relative">
          Get Your Free Amazon Audit
        </h2>
        <p className="text-white/80 mb-4 relative">Find out how we can boost your sales</p>

        {/* Trust indicators */}
        <div className="flex flex-wrap gap-3 mb-6">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="flex items-center gap-1.5 text-white/80 text-xs"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll contact you within 24 hours with your free audit.</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="space-y-4 relative">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputBaseClass} ${errors.name ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Your Name *"
                />
                {errors.name && <p className="mt-1 text-sm text-red-100 font-bold">{errors.name}</p>}
              </motion.div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBaseClass} ${errors.email ? 'border-red-400' : 'border-transparent'}`}
                    placeholder="Email *"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-100 font-bold">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputBaseClass} ${errors.phone ? 'border-red-400' : 'border-transparent'}`}
                    placeholder="Phone *"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-100 font-bold">{errors.phone}</p>
                  )}
                </motion.div>
              </div>

              {/* Product Link */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <input
                  type="url"
                  name="productLink"
                  value={formData.productLink}
                  onChange={handleChange}
                  className={`${inputBaseClass} border-transparent`}
                  placeholder="Amazon Store/Product Link"
                />
              </motion.div>

              {/* Service Type */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`${inputBaseClass} ${errors.serviceType ? 'border-red-400' : 'border-transparent'}`}
                >
                  <option value="">Select Service Type *</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-100 font-bold">{errors.serviceType}</p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className={`${inputBaseClass} border-transparent resize-none`}
                  placeholder="Tell us about your business"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amazon-dark hover:bg-gray-900 text-white px-8 py-5 rounded-xl font-black text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Free Audit Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ translateX: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>

              <p className="text-center text-white/60 text-xs mt-4">
                By submitting, you agree to our Terms & Privacy Policy
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-6 flex items-center justify-center gap-4"
      >
        <div className="flex -space-x-2">
          {['M', 'S', 'D', 'E'].map((letter, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: -10 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 1.5 + i * 0.1, type: 'spring' }}
              className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-amazon-dark"
            >
              {letter}
            </motion.div>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          <span className="text-primary-400 font-bold">127 sellers</span> got their audit this week
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroForm;

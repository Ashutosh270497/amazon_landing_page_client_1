import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    monthlyRevenue: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.brandName.trim()) {
      newErrors.brandName = 'Brand name is required';
    }

    if (!formData.monthlyRevenue) {
      newErrors.monthlyRevenue = 'Please select monthly revenue';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);

    setShowSuccess(true);

    setFormData({
      name: '',
      brandName: '',
      monthlyRevenue: '',
      email: '',
      phone: '',
      message: '',
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const openWhatsApp = () => {
    const phoneNumber = 'YOUR_NUMBER';
    const message = encodeURIComponent('Hello, I am interested in your Amazon agency services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-amazon-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-primary-500/20 text-primary-400 px-6 py-3 rounded-full text-base font-bold border border-primary-500/30">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Let's Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">Amazon Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-medium"
          >
            Get in touch with us today and receive a free audit of your Amazon account
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/10"
          >
            <h3 className="text-3xl font-extrabold text-white mb-8">Contact Us</h3>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-primary-500/20 border border-primary-500/30 rounded-xl p-4 flex items-center gap-3 text-primary-300"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Thank you! We've received your message and will get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? 'border-red-400' : 'border-white/20'
                  } rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-gray-500`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="brandName" className="block text-base font-semibold text-gray-300 mb-2">
                  Brand Name *
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.brandName ? 'border-red-400' : 'border-white/20'
                  } rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-gray-500`}
                  placeholder="Your Brand"
                />
                {errors.brandName && <p className="mt-1 text-sm text-red-400">{errors.brandName}</p>}
              </div>

              <div>
                <label htmlFor="monthlyRevenue" className="block text-base font-semibold text-gray-300 mb-2">
                  Monthly Revenue *
                </label>
                <select
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.monthlyRevenue ? 'border-red-400' : 'border-white/20'
                  } rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white`}
                >
                  <option value="" className="bg-gray-900">Select revenue range</option>
                  <option value="0-10k" className="bg-gray-900">$0 - $10,000</option>
                  <option value="10k-50k" className="bg-gray-900">$10,000 - $50,000</option>
                  <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                  <option value="100k-500k" className="bg-gray-900">$100,000 - $500,000</option>
                  <option value="500k+" className="bg-gray-900">$500,000+</option>
                </select>
                {errors.monthlyRevenue && <p className="mt-1 text-sm text-red-400">{errors.monthlyRevenue}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    } rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-gray-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? 'border-red-400' : 'border-white/20'
                    } rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-gray-500`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your business and goals..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Now
              </motion.button>
            </form>
          </motion.div>

          {/* WhatsApp Option */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a href="mailto:contact@scaleamazon.com" className="text-white font-semibold hover:text-primary-400 transition-colors">
                    contact@scaleamazon.com
                  </a>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <a href="tel:+1234567890" className="text-white font-semibold hover:text-primary-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">123 Business Street, Suite 100</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-3xl shadow-xl p-10 border border-primary-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary-500/30">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  Prefer a Quick Chat?
                </h3>
                <p className="text-gray-400 mb-10 font-medium text-lg">
                  Connect with us instantly on WhatsApp. We're here to answer your questions and help you get started.
                </p>
                <motion.button
                  onClick={openWhatsApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </motion.button>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-500 mb-4">Why choose WhatsApp?</p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Instant responses during business hours</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Share screenshots and documents easily</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>Get quick answers to simple questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

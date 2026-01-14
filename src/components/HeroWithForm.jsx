import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Sparkles, TrendingUp, DollarSign, Users, Shield, Clock, ArrowRight, Star } from 'lucide-react';

const HeroWithForm = () => {
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
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const typingTexts = [
    'Turn Products into Bestsellers!',
    'Scale Your Amazon Business!',
    'Maximize Your ROI!',
    'Dominate Your Category!',
  ];

  // Typing effect
  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex <= currentText.length) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex++;
      } else if (!isDeleting && charIndex > currentText.length) {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (isDeleting && charIndex >= 0) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex--;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

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

    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      productLink: '',
      serviceType: '',
      message: '',
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const heroStats = [
    { icon: <DollarSign className="w-5 h-5" />, value: '$50M+', label: 'Revenue Generated' },
    { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Sellers Managed' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '1.8B+', label: 'Ad Spend Managed' },
  ];

  const trustIndicators = [
    { icon: <Shield className="w-4 h-4" />, text: 'NDA Protected' },
    { icon: <Clock className="w-4 h-4" />, text: '24hr Response' },
    { icon: <Star className="w-4 h-4" />, text: '5-Star Rated' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-amazon-dark via-gray-900 to-amazon-dark min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content with World Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge with animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-400 rounded-full px-5 py-2 shadow-lg shadow-primary-500/30"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-white text-sm font-bold">Trusted by 500+ Amazon Sellers</span>
            </motion.div>

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

            {/* Stats Bar with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6 py-6"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <motion.div
                    className="bg-primary-500/20 p-2 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-primary-400">{stat.icon}</span>
                  </motion.div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-primary-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* World Map Section - Global Reach */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative w-full"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <p className="text-primary-400 font-bold text-lg">Global Amazon Marketplace Coverage</p>
              </div>

              {/* Map Container with Glow Effect */}
              <div className="relative h-72 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-primary-500/20 bg-gradient-to-br from-amazon-dark/50 to-gray-900/50 backdrop-blur-sm">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

                {/* World Map Image */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1280px-World_map_blank_without_borders.svg.png"
                  alt="World Map - Global Amazon Marketplaces"
                  className="absolute inset-0 w-full h-full object-contain opacity-70 p-4"
                  style={{ filter: 'sepia(100%) saturate(300%) brightness(60%) hue-rotate(10deg)' }}
                />

                {/* SVG Overlay for Connections and Markers */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Connection Lines - Animated curved paths */}
                  <g stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)">
                    {/* USA to Europe */}
                    <path d="M22,18 Q35,8 48,14">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="3s" repeatCount="indefinite"/>
                    </path>
                    {/* Europe to Middle East */}
                    <path d="M48,14 Q55,18 58,22">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                    {/* Middle East to India */}
                    <path d="M58,22 Q65,24 70,26">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2.8s" repeatCount="indefinite"/>
                    </path>
                    {/* India to Japan */}
                    <path d="M70,26 Q76,20 82,18">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="3.2s" repeatCount="indefinite"/>
                    </path>
                    {/* Japan to Australia */}
                    <path d="M82,18 Q86,30 88,38">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2.6s" repeatCount="indefinite"/>
                    </path>
                    {/* USA to Brazil */}
                    <path d="M22,18 Q26,28 30,34">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2.4s" repeatCount="indefinite"/>
                    </path>
                    {/* USA to Canada */}
                    <path d="M22,18 Q22,12 24,10">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" repeatCount="indefinite"/>
                    </path>
                    {/* Europe to UK */}
                    <path d="M48,14 Q46,12 44,11">
                      <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2.2s" repeatCount="indefinite"/>
                    </path>
                  </g>

                  {/* Location Markers with Labels */}
                  {[
                    {x: 22, y: 18, label: 'USA', flag: '🇺🇸', major: true},
                    {x: 24, y: 10, label: 'Canada', flag: '🇨🇦', major: false},
                    {x: 30, y: 34, label: 'Brazil', flag: '🇧🇷', major: false},
                    {x: 44, y: 11, label: 'UK', flag: '🇬🇧', major: true},
                    {x: 48, y: 14, label: 'Europe', flag: '🇪🇺', major: true},
                    {x: 50, y: 18, label: 'Germany', flag: '🇩🇪', major: false},
                    {x: 58, y: 22, label: 'UAE', flag: '🇦🇪', major: false},
                    {x: 70, y: 26, label: 'India', flag: '🇮🇳', major: true},
                    {x: 82, y: 18, label: 'Japan', flag: '🇯🇵', major: true},
                    {x: 88, y: 38, label: 'Australia', flag: '🇦🇺', major: true},
                    {x: 76, y: 30, label: 'Singapore', flag: '🇸🇬', major: false},
                  ].map((loc, i) => (
                    <g key={i} filter="url(#glow)">
                      {/* Outer pulse ring for major markets */}
                      {loc.major && (
                        <circle cx={loc.x} cy={loc.y} r="2" fill="none" stroke="#f59e0b" strokeWidth="0.2" opacity="0.6">
                          <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
                        </circle>
                      )}
                      {/* Inner pulse ring */}
                      <circle cx={loc.x} cy={loc.y} r="1" fill="none" stroke="#fbbf24" strokeWidth="0.15" opacity="0.8">
                        <animate attributeName="r" values="0.8;1.5;0.8" dur="1.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite"/>
                      </circle>
                      {/* Center dot */}
                      <circle cx={loc.x} cy={loc.y} r={loc.major ? "0.8" : "0.5"} fill="#f59e0b"/>
                      <circle cx={loc.x} cy={loc.y} r={loc.major ? "0.4" : "0.25"} fill="#fff"/>
                    </g>
                  ))}

                  {/* Traveling data packets along routes */}
                  {[
                    {path: "M22,18 Q35,8 48,14", dur: "4s"},
                    {path: "M48,14 Q65,20 82,18", dur: "5s"},
                    {path: "M70,26 Q79,32 88,38", dur: "3.5s"},
                    {path: "M22,18 Q26,28 30,34", dur: "3s"},
                  ].map((route, i) => (
                    <circle key={i} r="0.4" fill="#fcd34d">
                      <animateMotion dur={route.dur} repeatCount="indefinite" path={route.path}/>
                      <animate attributeName="opacity" values="0;1;1;0" dur={route.dur} repeatCount="indefinite"/>
                    </circle>
                  ))}
                </svg>

                {/* Marketplace Labels Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* USA Label */}
                  <motion.div
                    className="absolute left-[18%] top-[32%] bg-amazon-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p className="text-primary-400 text-xs font-bold whitespace-nowrap">🇺🇸 USA</p>
                  </motion.div>

                  {/* Europe Label */}
                  <motion.div
                    className="absolute left-[44%] top-[22%] bg-amazon-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                  >
                    <p className="text-primary-400 text-xs font-bold whitespace-nowrap">🇪🇺 Europe</p>
                  </motion.div>

                  {/* India Label */}
                  <motion.div
                    className="absolute left-[66%] top-[48%] bg-amazon-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
                  >
                    <p className="text-primary-400 text-xs font-bold whitespace-nowrap">🇮🇳 India</p>
                  </motion.div>

                  {/* Japan Label */}
                  <motion.div
                    className="absolute left-[78%] top-[30%] bg-amazon-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
                  >
                    <p className="text-primary-400 text-xs font-bold whitespace-nowrap">🇯🇵 Japan</p>
                  </motion.div>

                  {/* Australia Label */}
                  <motion.div
                    className="absolute left-[82%] top-[72%] bg-amazon-dark/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-primary-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: 1.2 }}
                  >
                    <p className="text-primary-400 text-xs font-bold whitespace-nowrap">🇦🇺 AU</p>
                  </motion.div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-3 md:gap-6">
                  {[
                    { value: '15+', label: 'Marketplaces' },
                    { value: '50+', label: 'Countries' },
                    { value: '24/7', label: 'Global Support' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="bg-amazon-dark/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary-500/30"
                    >
                      <p className="text-primary-400 font-black text-lg md:text-xl">{stat.value}</p>
                      <p className="text-gray-400 text-xs">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

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
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                FREE AUDIT
              </motion.span>
            </motion.div>

            <div className="bg-primary-400 rounded-3xl shadow-2xl shadow-primary-500/20 p-8 md:p-10 relative overflow-hidden">
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ translateX: ["−100%", "200%"] }}
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
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you within 24 hours with your free audit.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 relative"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${
                          errors.name ? 'border-red-400' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg`}
                        placeholder="Your Name *"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-100 font-bold">{errors.name}</p>}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl border-2 ${
                            errors.email ? 'border-red-400' : 'border-transparent'
                          } focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg`}
                          placeholder="Email *"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-100 font-bold">{errors.email}</p>}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl border-2 ${
                            errors.phone ? 'border-red-400' : 'border-transparent'
                          } focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg`}
                          placeholder="Phone *"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-100 font-bold">{errors.phone}</p>}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <input
                        type="url"
                        id="productLink"
                        name="productLink"
                        value={formData.productLink}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg"
                        placeholder="Amazon Store/Product Link"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl border-2 ${
                          errors.serviceType ? 'border-red-400' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner transition-all duration-300 hover:shadow-lg`}
                      >
                        <option value="">Select Service Type *</option>
                        <option value="account-management">Account Management</option>
                        <option value="ppc-optimization">PPC Optimization</option>
                        <option value="listing-optimization">Listing Optimization</option>
                        <option value="brand-registry">Brand Registry & A+ Content</option>
                        <option value="full-service">Full Service Package</option>
                      </select>
                      {errors.serviceType && <p className="mt-1 text-sm text-red-100 font-bold">{errors.serviceType}</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-5 py-4 rounded-xl border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-semibold bg-white shadow-inner resize-none transition-all duration-300 hover:shadow-lg"
                        placeholder="Tell us about your business"
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-amazon-dark hover:bg-gray-900 text-white px-8 py-5 rounded-xl font-black text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Get Free Audit Now</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ translateX: ["−100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </motion.button>

                    {/* Form footer */}
                    <p className="text-center text-white/60 text-xs mt-4">
                      By submitting, you agree to our Terms & Privacy Policy
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Social proof under form */}
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
                    transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
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
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;

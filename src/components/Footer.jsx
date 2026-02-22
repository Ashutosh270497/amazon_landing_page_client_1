import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG, getMailtoHref, getTelHref } from '../config/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Results', id: 'results' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Account Management',
    'PPC Optimization',
    'Listing Optimization',
    'Brand Registry',
  ];

  const socialIconMap = {
    Facebook,
    Twitter,
    LinkedIn: Linkedin,
    Instagram,
  };

  return (
    <footer className="bg-gradient-to-b from-amazon-dark to-gray-950 text-gray-300 relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              {SITE_CONFIG.brandName}
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Your trusted partner in Amazon growth. We help sellers scale their business through expert account management, PPC optimization, and strategic guidance.
            </p>
            <div className="flex gap-4">
              {SITE_CONFIG.socialLinks.map((social) => {
                const Icon = socialIconMap[social.name];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/5 hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 p-4 rounded-xl transition-all duration-300 border border-white/10 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"></div>
              Quick Links
            </h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-lg hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"></div>
              Services
            </h3>
            <ul className="space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-lg">{service}</span>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.spnLinks.accountManagement}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors text-lg font-semibold"
                >
                  Explore Our SPN Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-8 flex items-center gap-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"></div>
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-white/5 p-3.5 rounded-xl group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Mail size={22} className="text-primary-400" />
                </div>
                <a href={getMailtoHref()} className="text-gray-400 hover:text-white transition-colors text-lg">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="bg-white/5 p-3.5 rounded-xl group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Phone size={22} className="text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <a href={getTelHref()} className="text-gray-400 hover:text-white transition-colors text-lg">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  <a
                    href={getTelHref(SITE_CONFIG.contact.secondaryPhoneE164)}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {SITE_CONFIG.contact.secondaryPhoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3.5 rounded-xl group-hover:bg-primary-500/20 transition-colors duration-300">
                  <MapPin size={22} className="text-primary-400" />
                </div>
                <span className="text-gray-400 text-lg leading-relaxed">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-lg text-gray-500">
              &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <a href={SITE_CONFIG.legalLinks.privacy} className="text-gray-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href={SITE_CONFIG.legalLinks.terms} className="text-gray-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href={SITE_CONFIG.legalLinks.cookie} className="text-gray-500 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;

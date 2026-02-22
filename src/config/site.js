export const SITE_CONFIG = {
  brandName: 'ScaleAmazon',
  contact: {
    email: 'support@digitaluniversepro.co',
    leadInboxEmail: 'Gautamsoni4422@gmail.com',
    phoneDisplay: '+91 63871 04378',
    phoneE164: '+916387104378',
    secondaryPhoneDisplay: '+91 92080 24236',
    secondaryPhoneE164: '+919208024236',
    whatsappNumber: '916387104378',
    address: 'India',
  },
  whatsappDefaultMessage: 'Hello, I am interested in your Amazon agency services.',
  socialLinks: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100095308834069' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/' },
    { name: 'Instagram', url: 'https://www.instagram.com/digitaluniversepro.co/' },
  ],
  spnLinks: {
    accountManagement:
      'https://sellercentral.amazon.in/gspn/provider-details/Account%20Management/aa773aa8-2399-4069-a240-31cf2a209a5d?ref_=sc_gspn_blst_bdt-aa773aa8&localeSelection=en_US&sellFrom=IN&sellIn=IN',
    advertising:
      'https://sellercentral.amazon.in/gspn/provider-details/Advertising%20Optimization/aa773aa8-2399-4069-a240-31cf2a209a5d?ref_=sc_gspn_alst_adt-aa773aa8&localeSelection=en_US&sellFrom=IN&sellIn=IN',
    cataloging:
      'https://sellercentral.amazon.in/gspn/provider-details/Cataloguing/aa773aa8-2399-4069-a240-31cf2a209a5d?ref_=sc_gspn_clst_cdt-aa773aa8&localeSelection=en_US&sellFrom=IN&sellIn=IN',
    enhancedBrandContent:
      'https://sellercentral.amazon.in/gspn/provider-details/Enhanced%20Brand%20Content/aa773aa8-2399-4069-a240-31cf2a209a5d?ref_=sc_gspn_ebclst_ebcdt-aa773aa8&localeSelection=en_US&sellFrom=IN&sellIn=IN',
  },
  legalLinks: {
    privacy: '#',
    terms: '#',
    cookie: '#',
  },
};

export const getWhatsAppUrl = (message = SITE_CONFIG.whatsappDefaultMessage) =>
  `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const getMailtoHref = () => `mailto:${SITE_CONFIG.contact.email}`;

export const getTelHref = (phoneE164 = SITE_CONFIG.contact.phoneE164) => `tel:${phoneE164}`;

export const getLeadMailtoHref = ({ subject, body, to = SITE_CONFIG.contact.leadInboxEmail }) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const SITE_CONFIG = {
  brandName: 'ScaleAmazon',
  contact: {
    email: 'support@digitaluniversepro.co',
    leadInboxEmail: 'Gautamsoni4422@gmail.com',
    leadFormEndpoint: 'https://formsubmit.co/Gautamsoni4422@gmail.com',
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
    { name: 'YouTube', url: 'https://www.youtube.com/@Prodigitaluniverse' },
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

export const submitLeadForm = ({
  subject,
  formName,
  replyTo,
  fields,
  nextUrl,
}) => {
  if (typeof document === 'undefined') {
    throw new Error('Form submission is only available in the browser');
  }

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = SITE_CONFIG.contact.leadFormEndpoint;
  form.style.display = 'none';

  const resolvedNextUrl = nextUrl
    ? new URL(nextUrl, window.location.origin).toString()
    : window.location.href;

  const payload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _next: resolvedNextUrl,
    _replyto: replyTo || SITE_CONFIG.contact.email,
    form_name: formName,
    ...fields,
  };

  Object.entries(payload).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value ?? '';
    form.appendChild(input);
  });

  document.body.appendChild(form);

  try {
    form.submit();
  } finally {
    form.remove();
  }
};

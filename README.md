# ScaleAmazon - Amazon Seller Agency Landing Page

A high-converting, modern landing page built for an Amazon Seller Agency. This project showcases professional design, smooth animations, and lead generation features including WhatsApp integration.

## Features

- **Sticky Navigation** - Professional navbar with smooth scroll navigation
- **Hero Section** - Compelling headline with dual CTAs (Form + WhatsApp)
- **Social Proof Bar** - Stats showcasing credibility (500+ Sellers, $50M+ Revenue, 98% Retention)
- **Services Grid** - 4 key services with animated cards
- **Why Choose Us** - Trust-building section highlighting unique value propositions
- **Lead Generation Form** - Validated contact form with success messaging
- **WhatsApp Integration** - Floating Action Button (FAB) and inline chat options
- **Fully Responsive** - Mobile-first design approach
- **Smooth Animations** - Framer Motion for professional micro-interactions

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **Framer Motion** - Animation library

## Color Palette

- **Primary Blue**: Trustworthy professional brand color
- **Amazon Orange**: Strategic accent color (#FF9900)
- **Neutrals**: White and Gray for balance

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── Stats.jsx           # Social proof statistics
│   ├── Services.jsx        # Service cards grid
│   ├── WhyChooseUs.jsx     # Trust-building section
│   ├── ContactForm.jsx     # Lead generation form
│   ├── Footer.jsx          # Footer with links and social
│   └── WhatsAppFAB.jsx     # Floating WhatsApp button
├── App.jsx                 # Main app component
├── index.css               # Tailwind imports and global styles
└── main.jsx                # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd amazon-agency-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Configuration

### WhatsApp Integration

To configure WhatsApp functionality, update the phone number in the following files:

1. **Hero.jsx** (Line 13):
```javascript
const phoneNumber = 'YOUR_NUMBER'; // Replace with format: 1234567890
```

2. **ContactForm.jsx** (Line 85):
```javascript
const phoneNumber = 'YOUR_NUMBER'; // Replace with format: 1234567890
```

3. **WhatsAppFAB.jsx** (Line 9):
```javascript
const phoneNumber = 'YOUR_NUMBER'; // Replace with format: 1234567890
```

**Format**: Use international format without + or spaces (e.g., 1234567890 for US number +1 (234) 567-890)

### Form Submission

Currently, the form logs data to the console and shows a success message. To integrate with a backend:

1. Open [ContactForm.jsx](src/components/ContactForm.jsx#L60)
2. In the `handleSubmit` function, replace the console.log with your API call:

```javascript
// Replace this:
console.log('Form submitted:', formData);

// With your API call:
try {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response...
} catch (error) {
  // Handle error...
}
```

### Customization

#### Update Brand Name
- Change "ScaleAmazon" in [Navbar.jsx](src/components/Navbar.jsx#L27) and [Footer.jsx](src/components/Footer.jsx#L33)

#### Update Content
- Modify headlines in [Hero.jsx](src/components/Hero.jsx)
- Update stats in [Stats.jsx](src/components/Stats.jsx#L5)
- Edit services in [Services.jsx](src/components/Services.jsx#L6)
- Customize reasons in [WhyChooseUs.jsx](src/components/WhyChooseUs.jsx#L6)

#### Adjust Colors
- Edit color palette in [tailwind.config.js](tailwind.config.js#L8)

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment

You can deploy this project to:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` npm package

## Features Breakdown

### 1. Sticky Navbar
- Fixed to top of viewport
- Smooth scroll to sections
- Mobile hamburger menu
- CTA button integrated

### 2. Hero Section
- Gradient background with decorative elements
- Two CTA buttons (Strategy Call + WhatsApp)
- Framer Motion entrance animations

### 3. Stats Bar
- Three key metrics
- Animated on scroll
- High contrast for visibility

### 4. Services Grid
- 4 responsive cards
- Hover effects with scale transform
- Icon + description + features list

### 5. Why Choose Us
- 2-column responsive grid
- Icon-based feature highlights
- Inline CTA at bottom

### 6. Contact Form
- Full validation
- Dropdown for revenue selection
- Success/error states
- Console logging (ready for API integration)

### 7. WhatsApp Integration
- Floating Action Button (bottom-right)
- Pre-filled message template
- Tooltip on hover
- Pulse animation for attention

### 8. Footer
- Company info with contact details
- Quick navigation links
- Social media icons
- Copyright and legal links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

Built with ❤️ for Amazon Sellers

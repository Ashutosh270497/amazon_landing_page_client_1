import UrgencyBanner from './components/UrgencyBanner';
import StickyHeader from './components/StickyHeader';
import HeroWithForm from './components/HeroWithForm';
import LiveActivityTicker from './components/LiveActivityTicker';
import Stats from './components/Stats';
import AchievementBadges from './components/AchievementBadges';
import TrustedBrands from './components/TrustedBrands';
import ClientLogosMarquee from './components/ClientLogosMarquee';
import Services from './components/Services';
import RealClientDashboards from './components/RealClientDashboards';
import ROICalculator from './components/ROICalculator';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import MeetTheExpert from './components/MeetTheExpert';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import SocialProofPopup from './components/SocialProofPopup';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background floating elements */}
      <FloatingElements />

      {/* Urgency banner at top */}
      <UrgencyBanner />

      {/* Sticky header appears on scroll */}
      <StickyHeader />

      {/* Main content */}
      <HeroWithForm />
      <LiveActivityTicker />
      <Stats />
      <AchievementBadges />
      <TrustedBrands />
      <ClientLogosMarquee />
      <Services />
      <RealClientDashboards />
      <ROICalculator />
      <CaseStudies />
      <Testimonials />
      <MeetTheExpert />
      <WhyChooseUs />
      <FAQ />
      <ContactForm />
      <Footer />

      {/* Floating elements */}
      <WhatsAppFAB />
      <SocialProofPopup />
    </div>
  );
}

export default App;

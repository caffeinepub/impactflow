import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WaterSolutionSection from './components/WaterSolutionSection';
import IndustriesSection from './components/IndustriesSection';
import HowItWorksSection from './components/HowItWorksSection';
import SocialImpactSection from './components/SocialImpactSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WaterSolutionSection />
        <IndustriesSection />
        <HowItWorksSection />
        <SocialImpactSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

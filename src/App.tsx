import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyWorkWithUs } from "./components/WhyWorkWithUs";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { WorkingProcess } from "./components/WorkingProcess";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyWorkWithUs />
      <PortfolioGallery />
      <WorkingProcess />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { InspiringDesign } from "./components/InspiringDesign";
import { ServicesSection } from "./components/ServicesSection";
import { WorkingProcess } from "./components/WorkingProcess";
import { WhyWorkWithUs } from "./components/WhyWorkWithUs";
import { SocialFeed } from "./components/SocialFeed";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioGallery />
      <InspiringDesign />
      <ServicesSection />
      <WorkingProcess />
      <WhyWorkWithUs />
      <SocialFeed />
      <Footer />
    </div>
  );
}
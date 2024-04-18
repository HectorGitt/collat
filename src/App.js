import AboutSection from "./scenes/AboutSection";
import COLToken from "./scenes/COLToken";
import FeatureSection from "./scenes/FeatureSection";
import HeroSection from "./scenes/HeroSection";
import HowSection from "./scenes/HowSection";
import Nav from "./scenes/Nav";
import ServiceSection from "./scenes/ServiceSection";
import TeamSection from "./scenes/TeamSection";
import JoinSection from "./scenes/JoinSection";
import FooterSection from "./scenes/FooterSection";
import FAQSection from "./scenes/FAQSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <AboutSection />
      <HowSection />
      <ServiceSection />
      <FeatureSection />
      <COLToken />
      <TeamSection />
      <JoinSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;

import HeroSection from "../HeroSection";
import Feature from "../Feature";
import SubHeroSection from "../SubHeroSection";
import Testimonial from "../Testimonial";

const LandingPage = () => {
  return (
    <div className="bg-rk-alto-50">
      <HeroSection />
      <Feature />
      <SubHeroSection />
      <Testimonial />
    </div>
  );
};

export default LandingPage;

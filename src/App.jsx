import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Feature from "./Feature";
import SubHeroSection from "./SubHeroSection";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const App = () => {
  return (
    <div
      className="bg-rk-alto-50
     h-screen"
    >
      <Navbar />
      <HeroSection />
      <Feature />
      <SubHeroSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

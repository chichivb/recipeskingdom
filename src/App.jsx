import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SubHeroSection from "./SubHeroSection";

const App = () => {
  return (
    <div
      className="bg-rk-alto-50
     h-screen"
    >
      <Navbar />
      <HeroSection />
      <SubHeroSection />
    </div>
  );
};

export default App;

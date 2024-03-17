import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "./assets/Phone1.png";

const HeroSectionRecipes = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8 ">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Eating Healthy is Simple
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Access over +1,000 recipes and enjoy cooking your way!
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center ">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full rounded-lg justify-items-center"
              style={{ justifySelf: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionRecipes;

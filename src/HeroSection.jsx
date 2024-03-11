import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "./assets/cooking.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Cooking Made Easy
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Access over +1,000 recipes and enjoy cooking your way!
            </p>
            <div className="flex justify-right mt-8">
              <button
                className="text-lg font-semibold text-white bg-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => navigate("/recipes")}
              >
                RECIPES FOR YOUR DIET
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full rounded-lg object-right"
            />
          </div>
        </div>
      </div>
      {/* Logos */}
      <div className="wr">
        <div className="logos logos--fill flex justify-center  pt-20 gap-16">
          <a
            href="https://www.buzzfeed.com/annaborges/mealime-meal-planning-app"
            className="mr-4"
          >
            <img
              src="https://landen.imgix.net/omhfx82j2z7u/assets/dw8a4c0b.png?w=200&amp;h=160"
              className="logos__logo"
              srcset="https://landen.imgix.net/omhfx82j2z7u/assets/dw8a4c0b.png?w=200&amp;h=160 2x"
              alt="BuzzFeed Logo"
            />
          </a>
          <a
            href="https://www.washingtonpost.com/lifestyle/magazine/iso-meal-planning-app-for-single-busy-professional/2016/08/17/17f0edde-54d5-11e6-bbf5-957ad17b4385_story.html"
            className="mr-4"
          >
            <img
              src="https://landen.imgix.net/omhfx82j2z7u/assets/dhzl670a.png?w=200&amp;h=160"
              className="logos__logo"
              srcset="https://landen.imgix.net/omhfx82j2z7u/assets/dhzl670a.png?w=200&amp;h=160 2x"
              alt="Washington Post Logo"
            />
          </a>
          <a
            href="https://www.goodhousekeeping.com/food-recipes/a28377603/how-to-meal-prep/"
            className="mr-4"
          >
            <img
              src="https://landen.imgix.net/omhfx82j2z7u/assets/4oceu0s2.png?w=200&amp;h=160"
              className="logos__logo"
              srcset="https://landen.imgix.net/omhfx82j2z7u/assets/4oceu0s2.png?w=200&amp;h=160 2x"
              alt="Good Housekeeping Logo"
            />
          </a>
          <a
            href="https://www.vogue.es/living/articulos/apps-cocina-recetas-alimentacion"
            className="mr-4"
          >
            <img
              src="https://landen.imgix.net/omhfx82j2z7u/assets/f8n2b6ob.png?w=200&amp;h=160"
              className="logos__logo"
              srcset="https://landen.imgix.net/omhfx82j2z7u/assets/f8n2b6ob.png?w=200&amp;h=160 2x"
              alt="Vogue Logo"
            />
          </a>
          <a href="https://mashable.com/article/grocery-shopping-apps/">
            <img
              src="https://landen.imgix.net/omhfx82j2z7u/assets/8uro7b93.png?w=200&amp;h=160"
              className="logos__logo"
              srcset="https://landen.imgix.net/omhfx82j2z7u/assets/8uro7b93.png?w=200&amp;h=160 2x"
              alt="Mashable Logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

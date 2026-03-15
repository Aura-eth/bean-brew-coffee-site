"use client";

import { FadeInUp } from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const coffeeItems = [
    {
      name: "Bean & Brew Signature Blend",
      description: "Our house blend featuring Ethiopian and Colombian beans",
      price: "$3.75"
    },
    {
      name: "Single-Origin Pour Over",
      description: "Rotating selection of premium single-origin coffees",
      price: "$6.25"
    },
    {
      name: "Cappuccino Perfetto",
      description: "Traditional Italian cappuccino with microfoam artistry",
      price: "$4.50"
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso marked with steamed milk and house-made caramel",
      price: "$5.25"
    }
  ];

  const foodItems = [
    {
      name: "Desert Sunrise Pastries",
      description: "Fresh-baked croissants and muffins made daily with local ingredients",
      price: "$4.25"
    },
    {
      name: "Artisan Toast Selection",
      description: "Avocado, almond butter, or seasonal jam on house-made sourdough",
      price: "$7.50"
    },
    {
      name: "Southwest Breakfast Bowl",
      description: "Quinoa, black beans, poached egg, and green chile hollandaise",
      price: "$12.75"
    },
    {
      name: "Seasonal Soup & Salad",
      description: "Chef's daily selection featuring local produce and flavors",
      price: "$9.95"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 1.5px, transparent 1.5px);
          background-size: 40px 40px, 60px 60px;
          background-position: 0 0, 20px 20px;
        }
        
        .menu-item:hover .brewing-method {
          opacity: 1;
          transform: translateY(0);
        }
        
        .brewing-method {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x1080/?specialty+coffee+barista+pouring+latte+art+foam" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
              Our Complete Coffee Experience
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every drink crafted with passion, every bite made with care
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Coffee Menu Showcase */}
      <section id="coffee-menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
              Specialty Coffee & Espresso
            </h2>
          </FadeInUp>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {coffeeItems.map((item, index) => (
                <FadeInUp key={item.name} delay={index * 100}>
                  <div className="menu-item group border-b border-gray-200 pb-8 last:border-b-0 cursor-pointer">
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-amber-700 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="brewing-method text-sm text-amber-600 font-medium">
                          {index === 0 && "Slow drip method • Medium roast"}
                          {index === 1 && "V60 pour over • Single estate"}
                          {index === 2 && "Double shot • Steamed to 150°F"}
                          {index === 3 && "Signature espresso • Hand-pulled shots"}
                        </div>
                      </div>
                      <div className="flex-none">
                        <span className="text-xl md:text-2xl font-bold text-amber-700">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Break */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?modern+coffee+shop+interior+desert+southwest+arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{backgroundAttachment: 'fixed'}}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Crafted in the Heart of Scottsdale
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Where desert inspiration meets coffee perfection
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Food Menu Showcase */}
      <section id="food-menu" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Artisanal Food Pairings
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Thoughtfully prepared dishes that complement our exceptional coffee
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {foodItems.map((item, index) => (
              <FadeInUp key={item.name} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-amber-700 flex-none">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 text-sm text-amber-600 font-medium">
                    {index === 0 && "Available all day • Locally sourced"}
                    {index === 1 && "Made with heritage grains • Gluten-free option"}
                    {index === 2 && "Farm-to-table ingredients • Vegetarian"}
                    {index === 3 && "Seasonal rotation • Chef's special"}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={200}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-8 py-3 bg-amber-100 rounded-full">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <p className="text-amber-800 font-medium">
                  All food items pair perfectly with our signature coffee blends
                </p>
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final Atmosphere Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?people+enjoying+coffee+in+upscale+cafe+atmosphere" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-heading)'}}>
              More Than Coffee
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              We're a gathering place where the Scottsdale community comes together over exceptional coffee and genuine hospitality. Every cup tells a story, every bite creates a memory.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Visit Us Today
              </a>
              <a href="/about" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                Our Story
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
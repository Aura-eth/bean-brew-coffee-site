"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const coffeeItems = [
    {
      name: "Desert Sunrise Blend",
      description: "Our signature medium roast with notes of chocolate and citrus",
      price: "$4.50"
    },
    {
      name: "Single Origin Pour Over",
      description: "Rotating selection of premium beans, expertly brewed",
      price: "$6.00"
    },
    {
      name: "Sonoran Spice Latte",
      description: "Espresso with cinnamon, vanilla, and a touch of chili",
      price: "$5.25"
    }
  ];

  const foodItems = [
    {
      name: "Artisan Croissants",
      description: "Freshly baked daily with French butter and local honey",
      price: "$3.75"
    },
    {
      name: "Southwest Breakfast Bowl",
      description: "Farm eggs, black beans, avocado, and roasted peppers",
      price: "$12.50"
    },
    {
      name: "Desert Oat Scone",
      description: "Made with Arizona mesquite flour and seasonal fruit",
      price: "$4.25"
    },
    {
      name: "Local Harvest Salad",
      description: "Mixed greens from nearby farms with house vinaigrette",
      price: "$10.00"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 20%),
                           radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.08) 0%, transparent 15%),
                           radial-gradient(circle at 40% 40%, rgba(101, 67, 33, 0.12) 0%, transparent 18%);
        }
        
        .menu-item-hover {
          transition: all 0.3s ease;
        }
        
        .menu-item-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .dotted-line {
          border-bottom: 2px dotted var(--color-muted);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/1600x1200/?coffee pouring latte art barista hands steam" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Exceptional Coffee, Thoughtfully Crafted
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              From single-origin pour-overs to signature blends, discover your perfect cup
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Coffee Menu Showcase */}
      <section id="coffee-menu" className="py-32 px-6 coffee-bean-pattern">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
              Signature Coffee & Espresso
            </h2>
          </FadeInUp>
          
          <div className="space-y-8">
            {coffeeItems.map((item, index) => (
              <FadeInUp key={item.name} delay={index * 100}>
                <div className="menu-item-hover bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50">
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-none">
                      <span className="text-2xl font-bold text-amber-700">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Image Band */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/1600x900/?cozy coffee shop interior warm lighting scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Crafted with Care
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80">
              Every cup tells a story of origin, roasting, and artistry
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Food Menu Showcase */}
      <section id="food-menu" className="py-32 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">
              Fresh Food & Local Flavors
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto">
              Thoughtfully sourced ingredients from local Arizona farms and artisan producers
            </p>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodItems.map((item, index) => (
              <FadeInUp key={item.name} delay={index * 100}>
                <div className="menu-item-hover bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
                  <div className="flex justify-between items-baseline gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <div className="dotted-line flex-1 mx-4" />
                    <span className="text-xl font-bold text-amber-700 flex-none">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Bean Decorative Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100">
        <div className="max-w-6xl mx-auto text-center">
          <FadeInUp delay={0}>
            <div className="inline-flex items-center gap-6 text-amber-700">
              <div className="w-4 h-4 rounded-full bg-amber-600 opacity-60" />
              <div className="w-3 h-3 rounded-full bg-amber-700" />
              <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80" />
              <span className="text-lg font-medium tracking-wider uppercase px-6">
                Made Fresh Daily
              </span>
              <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-amber-700" />
              <div className="w-4 h-4 rounded-full bg-amber-600 opacity-60" />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Our Menu?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-80 mb-10">
              Visit us today and discover your new favorite coffee creation
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-white/90 transition duration-300 transform hover:scale-105"
            >
              Find Us
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
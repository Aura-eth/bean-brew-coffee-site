"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const menuCategories = [
    {
      category: "Signature Drinks",
      items: [
        {
          name: "Desert Sunrise Latte",
          description: "House espresso with vanilla, cinnamon, and desert honey",
          price: "$5.25"
        },
        {
          name: "Cactus Cold Brew",
          description: "Cold brew with prickly pear and lime",
          price: "$4.75"
        },
        {
          name: "Copper Canyon Mocha",
          description: "Chocolate espresso with Mexican spices",
          price: "$5.50"
        }
      ]
    },
    {
      category: "Classic Coffee",
      items: [
        {
          name: "House Blend Drip",
          description: "Our signature roast, perfectly balanced",
          price: "$3.25"
        },
        {
          name: "Cappuccino",
          description: "Traditional Italian-style with microfoam art",
          price: "$4.25"
        },
        {
          name: "Americano",
          description: "Bold espresso with hot water",
          price: "$3.75"
        }
      ]
    },
    {
      category: "Fresh Pastries",
      items: [
        {
          name: "Almond Croissant",
          description: "Buttery pastry with almond cream and sliced almonds",
          price: "$3.95"
        },
        {
          name: "Cinnamon Scone",
          description: "House-made with local honey glaze",
          price: "$3.25"
        },
        {
          name: "Seasonal Muffin",
          description: "Ask about today's fresh-baked flavor",
          price: "$2.95"
        }
      ]
    }
  ];

  const specialFeatures = [
    {
      title: "Local Sourcing",
      description: "Honey from Arizona apiaries and pastries from local bakeries"
    },
    {
      title: "House-Made Syrups",
      description: "All flavor syrups crafted in-house with natural ingredients"
    },
    {
      title: "Dietary Options",
      description: "Oat, almond, and coconut milk available, plus gluten-free pastries"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heat-wave {
          0%, 100% { transform: translateX(0) scaleY(1); }
          25% { transform: translateX(2px) scaleY(0.95); }
          75% { transform: translateX(-2px) scaleY(1.05); }
        }
        .coffee-bean-scatter {
          background-image: radial-gradient(circle at 20% 50%, var(--color-primary) 2px, transparent 2px),
                          radial-gradient(circle at 80% 20%, var(--color-accent) 1px, transparent 1px),
                          radial-gradient(circle at 40% 80%, var(--color-primary) 1.5px, transparent 1.5px);
          background-size: 200px 100px, 150px 120px, 180px 90px;
          animation: float 6s ease-in-out infinite;
        }
        .heat-wave {
          animation: heat-wave 3s ease-in-out infinite;
        }
        .film-grain {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0);
          background-size: 20px 20px, 15px 15px;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting Arizona desert" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover film-grain" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-orange-800/50 to-amber-900/80" />
          <div className="absolute inset-0 heat-wave opacity-20" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight font-serif">
                Crafted Daily, Served Fresh
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Explore our full menu of artisanal coffee and fresh fare
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#menu-showcase" 
                  className="px-10 py-4 bg-amber-600 text-white font-semibold rounded-full text-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Order Online
                </a>
                <a 
                  href="#feature-highlight" 
                  className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-amber-900 transition-all duration-300"
                >
                  View Specials
                </a>
              </div>
            </FadeInUp>
          </div>
          
          {/* Coffee Bean Scatter Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32 coffee-bean-scatter opacity-30" />
        </section>

        {/* Menu Showcase Section */}
        <section id="menu-showcase" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-5xl font-bold text-center mb-4 text-amber-900 font-serif">
                Full Menu
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-20" />
            </FadeInUp>
            
            <div className="space-y-20">
              {menuCategories.map((category, categoryIndex) => (
                <FadeInUp key={category.category} delay={categoryIndex * 100}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200/50">
                    <h3 className="text-3xl font-bold mb-8 text-amber-900 border-b-2 border-amber-200 pb-4 font-serif">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {category.items.map((item, itemIndex) => (
                        <FadeInUp key={item.name} delay={itemIndex * 50}>
                          <div className="flex justify-between items-start gap-4 group hover:bg-amber-50/50 p-4 rounded-xl transition-all duration-300">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-amber-700/80 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-none">
                              <span className="text-2xl font-bold text-amber-600 bg-amber-100 px-4 py-2 rounded-full">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </FadeInUp>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-20 coffee-bean-scatter" />
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-300 to-amber-400 opacity-20 coffee-bean-scatter" />
        </section>

        {/* Feature Highlight Section */}
        <section id="feature-highlight" className="py-24 px-6 relative bg-gradient-to-r from-amber-100 to-orange-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900 font-serif">
                  What Makes Our Menu Special
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto" />
              </FadeInUp>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {specialFeatures.map((feature, index) => (
                <FadeInUp key={feature.title} delay={index * 100}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      {index === 0 && (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-900 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-amber-700 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="coffee-bean-scatter h-full w-full" />
          </div>
        </section>
      </main>
    </>
  );
}
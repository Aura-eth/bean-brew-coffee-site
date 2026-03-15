"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';

const menuCategories = [
  {
    name: "Espresso & Coffee",
    items: [
      { name: "Sonoran Sunrise Espresso", description: "Single origin beans with notes of desert honey", price: "$3.50" },
      { name: "Saguaro Cold Brew", description: "16-hour steeped cold brew with prickly pear syrup", price: "$4.25" },
      { name: "Camelback Cappuccino", description: "Classic cappuccino with Arizona wildflower honey", price: "$4.75" },
      { name: "Desert Pour Over", description: "Single origin rotating selection, ceremonially brewed", price: "$5.50" }
    ]
  },
  {
    name: "Seasonal Specialties",
    items: [
      { name: "Palo Verde Latte", description: "Oat milk latte with mesquite and vanilla", price: "$5.25" },
      { name: "Copper Canyon Mocha", description: "Dark chocolate and cinnamon with chili dust rim", price: "$5.75" },
      { name: "Monsoon Refresher", description: "Iced coffee with agave nectar and lime zest", price: "$4.50" },
      { name: "Ghost Town Fog", description: "London fog with prickly pear and lavender", price: "$5.00" }
    ]
  },
  {
    name: "Light Bites & Pastries",
    items: [
      { name: "Hummingbird Scone", description: "Orange blossom scone with local honey butter", price: "$3.75" },
      { name: "Desert Bloom Muffin", description: "Prickly pear and white chocolate chip", price: "$3.25" },
      { name: "Cactus Flower Bagel", description: "Everything bagel with herbed cream cheese", price: "$4.50" },
      { name: "Sunrise Parfait", description: "Greek yogurt with desert wildflower honey and granola", price: "$6.25" }
    ]
  }
];

export default function MenuPage() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .coffee-bean {
          animation: float 6s ease-in-out infinite;
        }
        
        .coffee-bean:nth-child(2) {
          animation-delay: -2s;
        }
        
        .coffee-bean:nth-child(3) {
          animation-delay: -4s;
        }
        
        .coffee-stain::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 12px;
          background: radial-gradient(ellipse, rgba(139, 69, 19, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }
      `}</style>
      
      {/* Floating Coffee Beans */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="coffee-bean absolute top-1/4 left-1/4 w-3 h-4 bg-amber-800 rounded-full opacity-20" />
        <div className="coffee-bean absolute top-3/4 right-1/3 w-2 h-3 bg-amber-900 rounded-full opacity-15" />
        <div className="coffee-bean absolute top-1/2 right-1/4 w-3 h-4 bg-amber-800 rounded-full opacity-10" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior desert modern Scottsdale Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-stone-800/60 to-amber-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[var(--font-heading)]">
              Crafted with Arizona Heart
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every drink tells a story of desert inspiration and coffee craftsmanship
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <div className="coffee-stain relative mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-stone-800 font-[var(--font-heading)]">
                Full Menu
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Complete menu with espresso drinks, pour-overs, cold brews, seasonal specialties, pastries, and light Arizona-inspired fare
              </p>
            </FadeInUp>
          </div>
          
          <div className="space-y-20">
            {menuCategories.map((category, categoryIndex) => (
              <FadeInUp key={category.name} delay={categoryIndex * 100}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
                  <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900 font-[var(--font-heading)] relative">
                    {category.name}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {category.items.map((item, itemIndex) => (
                      <FadeInUp key={item.name} delay={(categoryIndex * 100) + (itemIndex * 50)}>
                        <div className="group hover:bg-amber-50 p-6 rounded-2xl transition-all duration-300">
                          <div className="flex justify-between items-start gap-4 mb-3">
                            <h4 className="font-semibold text-xl text-stone-800 group-hover:text-amber-800 transition-colors">
                              {item.name}
                            </h4>
                            <span className="text-xl font-bold text-amber-700 whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-stone-600 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </FadeInUp>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <FadeInUp delay={300}>
            <div className="text-center mt-16">
              <ShineBorder 
                borderRadius={16} 
                borderWidth={2} 
                duration={3} 
                color={["#f59e0b", "#ea580c", "#dc2626"]}
                className="inline-block"
              >
                <div className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl">
                  Ask about our daily specials and seasonal rotations
                </div>
              </ShineBorder>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="relative">
              <img 
                src="https://source.unsplash.com/800x600/?coffee beans roasting warm lighting steam" 
                alt="Coffee creation process" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <p className="text-stone-700 italic font-medium">
                    "Every signature blend captures the essence of our Arizona landscape"
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
          
          <div>
            <FadeInUp delay={100}>
              <div className="coffee-stain relative mb-8" />
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-800 font-[var(--font-heading)] leading-tight">
                Our Signature Creations
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Each signature drink draws inspiration from the Arizona landscape we call home, featuring partnerships with local suppliers and seasonal ingredients that celebrate the unique flavors of the Sonoran Desert.
                </p>
                
                <p>
                  From our Palo Verde Latte infused with native mesquite to our Monsoon Refresher that captures the essence of desert rainfall, every creation tells the story of this remarkable place we're privileged to call home.
                </p>
                
                <p>
                  We source our honey from local beekeepers in the Salt River Valley, our agave nectar from traditional producers in southern Arizona, and our seasonal fruits from the farms that dot our desert oases.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Local Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">8</div>
                  <div className="text-sm text-stone-600 uppercase tracking-wide">Seasonal Rotations</div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
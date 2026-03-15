"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

const menuCategories = [
  {
    name: "Coffee & Espresso",
    items: [
      {
        name: "House Drip Coffee",
        description: "Fresh brewed Saguaro Blend",
        price: "$3.25"
      },
      {
        name: "Americano",
        description: "Double shot espresso with hot water",
        price: "$3.75"
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and foam",
        price: "$4.50"
      },
      {
        name: "Desert Sunrise Latte",
        description: "Signature latte with cinnamon and agave",
        price: "$5.50"
      }
    ]
  },
  {
    name: "Specialty Teas",
    items: [
      {
        name: "Chamomile Desert Bloom",
        description: "Locally sourced chamomile with honey",
        price: "$3.75"
      },
      {
        name: "Prickly Pear Green Tea",
        description: "Refreshing green tea with desert fruit",
        price: "$4.25"
      },
      {
        name: "Arizona Sunset Chai",
        description: "Spiced chai with cardamom and orange",
        price: "$4.75"
      }
    ]
  },
  {
    name: "Fresh Pastries & Food",
    items: [
      {
        name: "Desert Rose Croissant",
        description: "Buttery croissant with local mesquite honey",
        price: "$4.50"
      },
      {
        name: "Saguaro Breakfast Bowl",
        description: "Quinoa, seasonal fruit, and agave drizzle",
        price: "$8.75"
      },
      {
        name: "Southwest Avocado Toast",
        description: "Sourdough with avocado, lime, and pepitas",
        price: "$7.25"
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <>
      <style jsx>{`
        .coffee-beans::before {
          content: '';
          position: absolute;
          top: 20%;
          right: 10%;
          width: 60px;
          height: 30px;
          background: radial-gradient(ellipse at center, var(--color-primary) 2px, transparent 2px);
          background-size: 12px 8px;
          opacity: 0.1;
          transform: rotate(-15deg);
        }
        .coffee-beans::after {
          content: '';
          position: absolute;
          bottom: 30%;
          left: 8%;
          width: 40px;
          height: 20px;
          background: radial-gradient(ellipse at center, var(--color-accent) 2px, transparent 2px);
          background-size: 8px 6px;
          opacity: 0.08;
          transform: rotate(25deg);
        }
        .steam-hover:hover {
          animation: steamRise 2s ease-in-out infinite;
        }
        @keyframes steamRise {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 1; }
          50% { transform: translateY(-3px) scale(1.02); opacity: 0.9; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-beans">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting Scottsdale Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Crafted with Care, Served with Pride
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Every drink and dish made from the finest ingredients
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#order" 
                className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-white/90 transition steam-hover"
              >
                Order Online
              </a>
              <a 
                href="#specials" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition"
              >
                View Specials
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              Our Menu
            </h2>
          </FadeInUp>
          
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <FadeInUp key={category.name} delay={categoryIndex * 100}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 border-b border-gray-200 pb-4" style={{ color: 'var(--color-primary)' }}>
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={item.name} className="flex justify-between items-baseline gap-4 steam-hover p-3 rounded-lg transition-all">
                        <div className="flex-1">
                          <span className="font-medium text-lg block" style={{ color: 'var(--color-text)' }}>
                            {item.name}
                          </span>
                          <span className="text-sm leading-relaxed block mt-1" style={{ color: 'var(--color-muted)' }}>
                            {item.description}
                          </span>
                        </div>
                        <span className="font-bold text-lg flex-none" style={{ color: 'var(--color-accent)' }}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x600/?coffee beans being roasted close-up steam rising" 
                alt="Coffee roasting process" 
                className="w-full h-[500px] object-cover steam-hover" 
              />
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide mb-4 block" style={{ color: 'var(--color-accent)' }}>
                Our Philosophy
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                From Bean to Cup
              </h2>
              <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--color-muted)' }}>
                <p>
                  We source our beans from sustainable farms and roast them fresh daily in our Scottsdale facility, ensuring every cup delivers the perfect balance of flavor and aroma.
                </p>
                <p>
                  Our commitment to quality extends beyond coffee to every item on our menu. From locally sourced ingredients to traditional preparation methods, we honor both the craft of coffee making and the vibrant spirit of the Arizona desert.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center coffee-beans">
        <img 
          src="https://source.unsplash.com/1920x800/?desert landscape sunrise warm golden light Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Taste the Desert's Finest
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/70">
              Where Arizona's natural beauty meets exceptional coffee craftsmanship
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-24 px-6" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Experience Bean & Brew?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-80 mb-10">
              Visit us today or place your order online for pickup
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-white font-bold rounded-full text-lg hover:bg-white/90 transition steam-hover" 
                style={{ color: 'var(--color-primary)' }}
              >
                Visit Our Location
              </a>
              <a 
                href="#order" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition"
              >
                Order Online
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
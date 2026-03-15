"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const menuItems = [
    {
      name: "Desert Sunrise",
      description: "Our signature espresso blend with notes of chocolate and citrus, inspired by Arizona mornings",
      price: "$4.50",
      category: "Coffee"
    },
    {
      name: "Saguaro Cold Brew",
      description: "Smooth cold brew infused with vanilla and a hint of cinnamon",
      price: "$5.25",
      category: "Coffee"
    },
    {
      name: "Scottsdale Cortado",
      description: "Perfect balance of espresso and steamed milk in a traditional Spanish style",
      price: "$4.75",
      category: "Coffee"
    },
    {
      name: "Arizona Honey Latte",
      description: "Creamy latte sweetened with local desert wildflower honey",
      price: "$5.00",
      category: "Coffee"
    },
    {
      name: "Prickly Pear Refresher",
      description: "Refreshing iced tea with prickly pear syrup and lime",
      price: "$4.25",
      category: "Tea"
    },
    {
      name: "Desert Rose Chai",
      description: "Spiced chai latte with rose water and cardamom",
      price: "$4.75",
      category: "Tea"
    },
    {
      name: "Sunrise Breakfast Bowl",
      description: "Acai bowl topped with local fruits, granola, and agave drizzle",
      price: "$8.50",
      category: "Food"
    },
    {
      name: "Cactus Flower Muffin",
      description: "Lemon poppyseed muffin with edible flower petals",
      price: "$3.75",
      category: "Food"
    }
  ];

  const coffeeStory = [
    {
      title: "Direct Trade Sourcing",
      description: "We work directly with farmers to ensure quality and fair compensation"
    },
    {
      title: "Roasted Weekly",
      description: "Fresh roasting ensures peak flavor in every cup we serve"
    },
    {
      title: "Seasonal Selections",
      description: "Rotating single-origin offerings showcase coffee's diversity"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes coffee-particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(180deg); opacity: 0; }
        }
        .coffee-particles::before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(139, 69, 19, 0.3);
          border-radius: 50%;
          animation: coffee-particle 8s infinite;
          left: 20%;
          top: 80%;
        }
        .coffee-particles::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(160, 82, 45, 0.4);
          border-radius: 50%;
          animation: coffee-particle 10s infinite 2s;
          left: 70%;
          top: 70%;
        }
        .desert-divider {
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 C200,10 400,30 600,15 C800,0 1000,25 1200,10 L1200,40 Z' fill='white'/%3E%3C/svg%3E");
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
        }
      `}</style>
      
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-particles">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisanal%20coffee%20shop%20interior%20desert%20modern%20Scottsdale%20Arizona" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
                Handcrafted Coffee & Treats
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                Every drink tells a story of quality, craft, and desert inspiration
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Menu Grid Section */}
        <section id="menu-grid" className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Our Menu
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-muted)'}}>
                Handcrafted beverages and artisanal treats made with love
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <FadeInUp key={item.name} delay={index * 100}>
                <div className="p-8 rounded-2xl transition-all duration-300 hover:scale-105" style={{backgroundColor: 'var(--color-surface)', border: '1px solid rgba(139, 69, 19, 0.1)'}}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                      {item.name}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full" style={{backgroundColor: 'var(--color-accent)', color: 'var(--color-text)', opacity: 0.7}}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed mb-4" style={{color: 'var(--color-muted)'}}>
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>
                      {item.price}
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Menu Showcase Section */}
        <section id="menu-showcase" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Signature Coffee
              </h2>
            </FadeInUp>
            <div className="space-y-12">
              {menuItems.slice(0, 3).map((item, index) => (
                <FadeInUp key={item.name} delay={index * 100}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 p-8 rounded-2xl" style={{backgroundColor: 'var(--color-surface)', border: '1px solid rgba(139, 69, 19, 0.1)'}}>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                        {item.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed" style={{color: 'var(--color-muted)'}}>
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-none">
                      <span className="text-xl md:text-2xl font-bold" style={{color: 'var(--color-primary)'}}>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Desert Divider */}
        <div className="h-16 desert-divider" style={{backgroundColor: 'var(--color-accent)'}} />

        {/* Feature Highlight Section */}
        <section id="feature-highlight" className="py-24 px-6" style={{backgroundColor: 'var(--color-bg)'}}>
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                  Our Coffee Story
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-muted)'}}>
                  From farm to cup, every step reflects our commitment to quality and sustainability
                </p>
              </div>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {coffeeStory.map((story, index) => (
                <FadeInUp key={story.title} delay={index * 100 + 200}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{backgroundColor: 'var(--color-primary)', opacity: 0.1}}>
                      <div className="w-8 h-8 rounded-full" style={{backgroundColor: 'var(--color-primary)'}} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                      {story.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{color: 'var(--color-muted)'}}>
                      {story.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Atmospheric Image Band */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?latte%20art%20coffee%20beans%20roasting%20golden%20hour%20lighting" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{transform: 'translateZ(0)', willChange: 'transform'}} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-transparent to-amber-900/60" />
          <FadeInUp delay={0}>
            <div className="relative text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Crafted with Passion
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Where desert warmth meets coffee culture
              </p>
            </div>
          </FadeInUp>
        </section>
      </main>
    </>
  );
}
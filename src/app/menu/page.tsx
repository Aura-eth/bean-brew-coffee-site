"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function Menu() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 1.5px, transparent 1.5px),
                            radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.05) 1px, transparent 1px);
          background-size: 60px 60px, 80px 80px, 40px 40px;
        }
        
        .desert-curve {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        .mesa-layers {
          background: linear-gradient(180deg, 
            rgba(218, 165, 32, 0.1) 0%, 
            rgba(160, 82, 45, 0.1) 50%, 
            rgba(139, 69, 19, 0.1) 100%);
        }
      `}</style>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden desert-curve">
        <img 
          src="https://source.unsplash.com/1920x1080/?specialty%20coffee%20beans%20roasting%20artisanal%20cafe" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Crafted with Care, Inspired by the Desert
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every drink tells a story of quality, creativity, and Arizona's unique coffee culture
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 coffee-bean-pattern">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--color-text)]">
              Signature Beverages
            </h2>
          </FadeInUp>
          
          <div className="space-y-20">
            {/* Desert Signatures Category */}
            <FadeInUp delay={100}>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-10 border-b-2 border-[var(--color-primary)] pb-4 text-[var(--color-primary)]">
                  Desert Signatures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        Saguaro Sunset Latte
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Vanilla and cinnamon with our house espresso
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $5.50
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        Prickly Pear Cold Brew
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Smooth cold brew with prickly pear syrup
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $4.75
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        Camelback Cappuccino
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Double shot with perfectly steamed milk
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $4.25
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>
            
            {/* Classic Favorites Category */}
            <FadeInUp delay={200}>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-10 border-b-2 border-[var(--color-secondary)] pb-4 text-[var(--color-secondary)]">
                  Classic Favorites
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        House Americano
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Our signature blend, bold and smooth
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $3.75
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        Vanilla Bean Latte
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Real vanilla bean with house-made syrup
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $5.25
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline gap-4 p-6 bg-[var(--color-surface)] rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <span className="font-medium text-lg md:text-xl text-[var(--color-text)] block mb-2">
                        Seasonal Pour Over
                      </span>
                      <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
                        Rotating single-origin selection
                      </p>
                    </div>
                    <span className="font-bold text-lg text-[var(--color-accent)] whitespace-nowrap">
                      $4.50
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 mesa-layers">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://source.unsplash.com/800x600/?barista%20pouring%20coffee%20pour%20over%20brewing%20process" 
                alt="Coffee brewing process" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div>
              <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide block mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-text)] leading-tight">
                From Bean to Brew
              </h2>
              <div className="space-y-6 text-[var(--color-muted)] text-lg leading-relaxed">
                <p>
                  Our coffee journey begins with carefully selected beans from sustainable farms, roasted in small batches right here in Arizona to capture the perfect flavor profile for our desert climate.
                </p>
                <p className="text-[var(--color-text)] font-medium">
                  Every cup reflects our commitment to quality, sustainability, and the unique character that makes Arizona coffee culture so special.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
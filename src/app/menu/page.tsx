"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 80% 80%, rgba(160, 82, 45, 0.08) 1.5px, transparent 1.5px);
          background-size: 60px 60px, 40px 40px;
        }
        .desert-gradient {
          background: linear-gradient(135deg, var(--color-primary) 0%, #D2691E  100%);
        }
        .menu-card {
          transition: all 0.3s ease;
        }
        .menu-card:hover {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(255, 140, 0, 0.05) 100%);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Crafted Daily, Served with Passion
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Discover our signature drinks and locally-sourced treats
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--color-text)]">
              Our Menu
            </h2>
          </FadeInUp>
          
          <div className="space-y-16">
            {/* Signature Drinks */}
            <FadeInUp delay={100}>
              <div>
                <h3 className="text-2xl font-semibold mb-8 border-b border-[var(--color-muted)] pb-4 text-[var(--color-primary)]">
                  Signature Drinks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Desert Sunrise Latte
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Espresso with cinnamon, agave, and steamed oat milk
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Prickly Pear Cold Brew
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Smooth cold brew with house-made prickly pear syrup
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Saguaro Spice Mocha
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Rich chocolate with desert spices and whipped cream
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Classic Coffee */}
            <FadeInUp delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-8 border-b border-[var(--color-muted)] pb-4 text-[var(--color-primary)]">
                  Classic Coffee
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      House Blend Drip
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Smooth, balanced daily roast
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Single Origin Pour Over
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Rotating selection of premium beans
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Traditional Cappuccino
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Perfect balance of espresso and steamed milk
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Local Treats */}
            <FadeInUp delay={100}>
              <div>
                <h3 className="text-2xl font-semibold mb-8 border-b border-[var(--color-muted)] pb-4 text-[var(--color-primary)]">
                  Local Treats
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Mesquite Scones
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Made with local mesquite flour
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Desert Honey Muffins
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Sweetened with Arizona wildflower honey
                    </p>
                  </div>
                  <div className="menu-card p-6 rounded-2xl border border-[var(--color-muted)] bg-white">
                    <h4 className="font-semibold text-lg mb-3 text-[var(--color-text)]">
                      Palo Verde Cookies
                    </h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      Inspired by Arizona's state tree
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://source.unsplash.com/1920x800/?specialty coffee beans roasting desert modern cafe" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Roasted Fresh Daily
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80">
              Every cup tells a story of quality and craft
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">
                Our Coffee Story
              </h2>
              <p className="text-[var(--color-muted)] max-w-xl mx-auto text-lg">
                From bean to cup, every step reflects our commitment to excellence
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl desert-gradient flex items-center justify-center mx-auto mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                  Direct Trade Sourcing
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Building relationships with coffee farmers for quality and sustainability
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl desert-gradient flex items-center justify-center mx-auto mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                  Expert Roasting
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Small batch roasting to bring out each bean's unique characteristics
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl desert-gradient flex items-center justify-center mx-auto mb-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                  Seasonal Specials
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Limited-time drinks celebrating desert seasons and local flavors
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 desert-gradient text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Taste the Difference?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Visit us today and experience coffee crafted with passion in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Visit Us Today
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
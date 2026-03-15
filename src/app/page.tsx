"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        @keyframes coffeeBeanFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .coffee-bean {
          animation: coffeeBeanFloat 6s ease-in-out infinite;
        }
        .coffee-bean:nth-child(2) {
          animation-delay: 2s;
        }
        .coffee-bean:nth-child(3) {
          animation-delay: 4s;
        }
        .linen-texture {
          background-image: radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal-coffee-roasting-beans-desert-sunlight" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Floating coffee beans */}
        <div className="absolute top-20 left-10 w-3 h-5 bg-amber-800 rounded-full coffee-bean opacity-30" />
        <div className="absolute top-40 right-20 w-2 h-4 bg-amber-900 rounded-full coffee-bean opacity-20" />
        <div className="absolute bottom-32 left-1/4 w-4 h-6 bg-amber-700 rounded-full coffee-bean opacity-25" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              Desert-Roasted,<br />
              <span className="text-amber-300">Artisan-Crafted</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover exceptional single-origin coffee in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ShineBorder 
                borderRadius={12}
                borderWidth={2}
                duration={3}
                color={["#f59e0b", "#d97706", "#92400e"]}
              >
                <a 
                  href="#menu-showcase" 
                  className="px-10 py-4 bg-amber-600 text-white font-bold text-lg rounded-xl hover:bg-amber-700 transition-all duration-300"
                >
                  Explore Menu
                </a>
              </ShineBorder>
              <a 
                href="#contact" 
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Visit Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?modern-coffeehouse-interior-warm-lighting-scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white max-w-3xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Where Coffee Meets Community
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed">
              Experience the warmth of desert hospitality in every cup, every conversation, every moment.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50 linen-texture">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
                Crafted with Purpose
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-amber-800/70 max-w-2xl mx-auto">
                Every cup tells a story of quality and care
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  Single-Origin Sourcing
                </h3>
                <p className="text-amber-800/70 text-lg leading-relaxed">
                  Hand-selected beans from sustainable farms worldwide
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  Small-Batch Roasting
                </h3>
                <p className="text-amber-800/70 text-lg leading-relaxed">
                  Roasted in-house to unlock each bean's unique character
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600/20 transition-all duration-300">
                  <svg className="w-10 h-10 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  Expert Brewing
                </h3>
                <p className="text-amber-800/70 text-lg leading-relaxed">
                  Multiple brewing methods to showcase coffee at its finest
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-amber-900">
              Signature Selections
            </h2>
          </FadeInUp>
          
          <div className="space-y-16">
            <FadeInUp delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold mb-4 text-amber-900">
                    Desert Sunrise Blend
                  </h3>
                  <p className="text-xl text-amber-800/70 leading-relaxed mb-6">
                    Medium roast with notes of caramel and desert honey
                  </p>
                  <p className="text-amber-800/60">
                    Our signature blend captures the essence of a Sonoran sunrise, with carefully balanced beans that deliver warmth and complexity in every sip.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/600x400/?coffee-cupping-tasting-professional-barista-hands" 
                    alt="Desert Sunrise Blend" 
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500" 
                  />
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/600x400/?desert-landscape-coffee-plantation-mountains-sunrise" 
                    alt="Sonoran Single-Origin" 
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-amber-900">
                    Sonoran Single-Origin
                  </h3>
                  <p className="text-xl text-amber-800/70 leading-relaxed mb-6">
                    Bold, full-bodied coffee with chocolate undertones
                  </p>
                  <p className="text-amber-800/60">
                    Sourced from high-altitude farms that mirror our desert landscape, this single-origin offers rich, complex flavors with a smooth, lingering finish.
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-bold mb-4 text-amber-900">
                    Cactus Flower Cold Brew
                  </h3>
                  <p className="text-xl text-amber-800/70 leading-relaxed mb-6">
                    Smooth, refreshing cold brew with subtle floral notes
                  </p>
                  <p className="text-amber-800/60">
                    A refreshing tribute to the desert's unexpected beauty, our cold brew process extracts delicate floral notes that bloom with each refreshing sip.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/600x400/?latte-art-pour-overhead-shot-marble-counter" 
                    alt="Cactus Flower Cold Brew" 
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500" 
                  />
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-gradient-to-b from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              What Our Community Says
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div className="text-6xl text-amber-300 mb-8">&ldquo;</div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-amber-50">
              The best coffee in Scottsdale. Their attention to detail in every cup is remarkable.
            </blockquote>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-amber-100">Coffee Enthusiast</div>
                <div className="text-sm text-amber-300">Local Patron</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white linen-texture">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Desert Coffee Culture
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Join us in Scottsdale for an unforgettable coffee experience where desert meets craft.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Bean & Brew
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
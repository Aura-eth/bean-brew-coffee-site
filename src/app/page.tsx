"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter {
          position: relative;
        }
        .coffee-bean-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 20px;
          background: radial-gradient(ellipse, #8B4513 20%, transparent 20%),
                      radial-gradient(ellipse, #6F3410 20%, transparent 20%),
                      radial-gradient(ellipse, #A0522D 20%, transparent 20%);
          background-size: 15px 8px, 12px 6px, 18px 10px;
          background-position: 0 0, 30px 2px, 60px -1px;
          opacity: 0.3;
        }
        .heat-wave {
          animation: heatWave 4s ease-in-out infinite;
        }
        @keyframes heatWave {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-2px) scale(1.01); }
          66% { transform: translateY(1px) scale(0.99); }
        }
      `}</style>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting Arizona desert" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-orange-800/50 to-amber-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
              Where Desert Meets Coffee Culture
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Handcrafted coffee and community warmth in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#menu-showcase" 
                className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg hover:bg-amber-700 transition duration-300 heat-wave"
              >
                View Our Menu
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-amber-900 transition duration-300"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center coffee-bean-scatter">
        <img 
          src="https://source.unsplash.com/1920x800/?barista pouring latte art coffee beans rustic wooden counter" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Crafted with passion, served with heart
            </h2>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900 font-serif">
                The Bean & Brew Experience
              </h2>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-300 transition duration-300">
                  <svg className="w-10 h-10 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900 font-serif">Artisan Roasted</h3>
                <p className="text-gray-700 leading-relaxed">
                  Small-batch roasting brings out the unique character of each premium bean
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-300 transition duration-300">
                  <svg className="w-10 h-10 text-orange-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900 font-serif">Desert Inspired</h3>
                <p className="text-gray-700 leading-relaxed">
                  Signature drinks that capture the spirit and flavors of the Southwest
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-300 transition duration-300">
                  <svg className="w-10 h-10 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900 font-serif">Community Hub</h3>
                <p className="text-gray-700 leading-relaxed">
                  A welcoming space where Scottsdale neighbors become friends over great coffee
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 bg-gradient-to-b from-amber-900 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                Signature Favorites
              </h2>
              <p className="text-xl text-white/80">
                Taste what makes Bean & Brew special
              </p>
            </div>
          </FadeInUp>
          <div className="space-y-12">
            <FadeInUp delay={0}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-3 text-amber-100 font-serif">Desert Sunrise Latte</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  House espresso with vanilla, cinnamon, and a touch of desert honey
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-3 text-amber-100 font-serif">Cactus Cold Brew</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Smooth cold brew infused with prickly pear and lime
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-3 text-amber-100 font-serif">Copper Canyon Mocha</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Rich chocolate and espresso with Mexican spices and whipped cream
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <div className="text-8xl text-amber-600 mb-8 font-serif">&ldquo;</div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800 italic font-serif">
              Bean & Brew has become my daily ritual. The coffee is exceptional and the atmosphere makes you feel like family.
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="text-amber-900 font-bold text-xl">SM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800 text-lg">Sarah M.</div>
                <div className="text-sm text-gray-600">Scottsdale Local</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-32 px-6 coffee-bean-scatter">
        <img 
          src="https://source.unsplash.com/1920x800/?coffee cup desert landscape Scottsdale Arizona cactus" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Experience Bean & Brew?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              Visit us in the heart of Scottsdale and discover your new favorite coffee destination
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:480-555-0123" 
                className="inline-block px-10 py-4 bg-amber-600 text-white font-bold rounded-full text-lg hover:bg-amber-700 transition duration-300 heat-wave"
              >
                Call Us Today
              </a>
              <a 
                href="#directions" 
                className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-amber-900 transition duration-300"
              >
                Get Directions
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
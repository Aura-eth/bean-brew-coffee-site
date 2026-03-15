"use client";

import FadeInUp from '@/components/fade-in-up';
import ShineBorder from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        @keyframes coffeeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .coffee-float {
          animation: coffeeFloat 6s ease-in-out infinite;
        }
        .coffee-scatter::before {
          content: '☕';
          position: absolute;
          opacity: 0.1;
          font-size: 2rem;
          animation: coffeeFloat 8s ease-in-out infinite;
        }
        .desert-gradient {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(222, 184, 135, 0.6) 50%, rgba(255, 140, 0, 0.7) 100%);
        }
      `}</style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-bold text-amber-900">Bean & Brew Coffee</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/menu" className="text-sm font-medium text-amber-800 hover:text-amber-900 transition">Menu</a>
            <a href="/about" className="text-sm font-medium text-amber-800 hover:text-amber-900 transition">About</a>
            <a href="/contact" className="text-sm font-medium text-amber-800 hover:text-amber-900 transition">Contact</a>
            <a href="/visit" className="px-5 py-2 bg-amber-900 text-white rounded-lg text-sm font-medium hover:bg-amber-800 transition">Visit Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisan coffee roasting beans in copper roaster" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 desert-gradient" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <div className="coffee-float inline-block text-6xl mb-4">☕</div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
              Where Desert Warmth Meets Coffee Craft
            </h1>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Artisan-roasted beans and community spirit in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder 
                borderRadius={12} 
                borderWidth={2} 
                duration={3}
                color={["#8B4513", "#DEB887", "#FF8C00"]}
              >
                <a href="/menu" className="px-8 py-4 bg-white text-amber-900 font-bold rounded-xl text-lg hover:bg-white/90 transition">
                  View Our Menu
                </a>
              </ShineBorder>
              <a href="/visit" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white hover:text-amber-900 transition">
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center coffee-scatter">
        <img 
          src="https://source.unsplash.com/1920x1080/?cozy desert coffee shop interior warm lighting" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{backgroundAttachment: 'fixed'}}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white max-w-3xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Every cup tells a story of passion and precision
            </h2>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900 font-serif">
                The Bean & Brew Difference
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto"></div>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeInUp delay={100}>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Small-Batch Roasting</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Every bean roasted to perfection in our Scottsdale roastery
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏜️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Desert-Sourced Origins</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Carefully selected beans from high-altitude desert regions
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Community Hub</h3>
                  <p className="text-amber-700 leading-relaxed">
                    A welcoming space where neighbors become friends
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={400}>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-orange-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-amber-900">Expert Baristas</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Passionate coffee craftspeople dedicated to the perfect cup
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={0}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">10,000+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Pounds Roasted Monthly</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">8</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Years in Scottsdale</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">500+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Daily Cups Served</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">15</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Coffee Origins</div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 relative">
        <img 
          src="https://source.unsplash.com/1920x1080/?coffee latte art in ceramic cup with succulents" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <div className="text-8xl text-amber-300 mb-8 font-serif">&ldquo;</div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white font-serif italic">
              Bean & Brew isn't just a coffee shop, it's the heartbeat of our neighborhood. The quality is unmatched and the community they've built is extraordinary.
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                SM
              </div>
              <div className="text-left text-white">
                <div className="font-semibold text-lg">Sarah M.</div>
                <div className="text-sm text-amber-200">Local Regular</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white font-serif">Bean & Brew Coffee</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Where desert warmth meets coffee craft in the heart of Scottsdale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-amber-200">Menu</h4>
            <ul className="space-y-2">
              <li><a href="/menu#coffee" className="text-sm opacity-80 hover:opacity-100 transition">Coffee</a></li>
              <li><a href="/menu#espresso" className="text-sm opacity-80 hover:opacity-100 transition">Espresso</a></li>
              <li><a href="/menu#food" className="text-sm opacity-80 hover:opacity-100 transition">Food</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-amber-200">Visit</h4>
            <ul className="space-y-2">
              <li><a href="/visit" className="text-sm opacity-80 hover:opacity-100 transition">Location</a></li>
              <li><a href="/visit#hours" className="text-sm opacity-80 hover:opacity-100 transition">Hours</a></li>
              <li><a href="/contact" className="text-sm opacity-80 hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-amber-200">Connect</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm opacity-80 hover:opacity-100 transition">Our Story</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">Instagram</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-amber-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">© 2024 Bean & Brew Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm opacity-70 hover:opacity-100 transition">Privacy Policy</a>
            <a href="/terms" className="text-sm opacity-70 hover:opacity-100 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.08) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.06) 1.5px, transparent 1.5px);
          background-size: 60px 60px, 40px 40px, 80px 80px;
        }
        .desert-gradient-hover {
          transition: background 0.4s var(--ease-out);
        }
        .desert-gradient-hover:hover {
          background: linear-gradient(135deg, var(--color-primary) 0%, #d2691e  50%, #ff8c42 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-orange-800/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Where Desert Meets Coffee Culture
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Scottsdale's premier destination for specialty coffee, community connection, and desert-inspired drinks
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition"
                borderRadius={9999}
                color={["#d2691e", "#ff8c42", "#8b4513"]}
              >
                <a href="#menu">View Menu</a>
              </ShineBorder>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition"
              >
                Visit Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://source.unsplash.com/1920x800/?cozy coffee shop community gathering arizona desert" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Community Coffee Haven</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80">Where every cup tells a story and every visit feels like home</p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Crafted for Community</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-amber-800/70 max-w-xl mx-auto">What makes Bean & Brew special</p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">☕</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Specialty Roasted Beans</h3>
                <p className="text-amber-800/80 text-lg leading-relaxed">Carefully sourced and roasted in small batches for exceptional flavor</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-orange-100 border-4 border-orange-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">🌵</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Desert-Inspired Drinks</h3>
                <p className="text-amber-800/80 text-lg leading-relaxed">Unique seasonal beverages that capture the essence of the Southwest</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">🤝</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Community Hub</h3>
                <p className="text-amber-800/80 text-lg leading-relaxed">A gathering place where neighbors become friends over great coffee</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats" className="py-16 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={0}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90 uppercase tracking-wide font-medium">Bean Origins</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <div className="text-sm opacity-90 uppercase tracking-wide font-medium">Years Serving Scottsdale</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-sm opacity-90 uppercase tracking-wide font-medium">Happy Customers</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90 uppercase tracking-wide font-medium">Community Events</div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">What Our Community Says</h2>
          </FadeInUp>
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-xl border border-amber-100">
            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="text-6xl text-amber-600 mb-8 font-serif">&ldquo;</div>
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-10 text-amber-900">
                  Bean & Brew isn't just a coffee shop, it's the heart of our neighborhood. The desert sunrise latte is absolutely divine!
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                    <span className="text-xl font-bold text-amber-900">SM</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg text-amber-900">Sarah M.</div>
                    <div className="text-amber-700">Local Resident</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x800/?desert landscape sunset warm tones arizona scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
        <div className="absolute inset-0 coffee-bean-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Experience Desert Coffee Culture</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
              Join us for exceptional coffee, warm community, and the true taste of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ShineBorder
                className="px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition"
                borderRadius={9999}
                color={["#d2691e", "#ff8c42", "#8b4513"]}
              >
                <a href="#menu">View Our Menu</a>
              </ShineBorder>
              <a 
                href="#contact" 
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
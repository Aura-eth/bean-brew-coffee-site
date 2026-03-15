"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';
import { Coffee, Award, Users, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20px 30px, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                            radial-gradient(circle at 80px 10px, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                            radial-gradient(circle at 40px 70px, rgba(139, 69, 19, 0.1) 2px, transparent 2px);
          background-size: 100px 80px;
        }
        
        .menu-card:hover .brewing-detail {
          opacity: 1;
          transform: translateY(0);
        }
        
        .brewing-detail {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s var(--ease-out);
        }
        
        .parallax-coffee {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      
      {/* Hero Section - Split Content */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 coffee-bean-pattern">
        <div className="flex items-center px-8 lg:px-16 py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4 block">Scottsdale's Premier Coffee Experience</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                Exceptional Coffee, Crafted Daily
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Where Scottsdale discovers the art of specialty coffee, one perfect cup at a time
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <ShineBorder borderRadius={12} duration={3} color={["#f59e0b", "#d97706", "#92400e"]}>
                  <a href="/menu" className="px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-300 flex items-center gap-2">
                    View Menu
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </ShineBorder>
                <a href="/location" className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-300">
                  Visit Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[500px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x900/?specialty+coffee+barista+pouring+latte+art+foam" 
            alt="Expert barista crafting latte art" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </section>

      {/* Atmosphere Section - Full Bleed */}
      <section 
        id="atmosphere" 
        className="relative h-[70vh] flex items-center justify-center parallax-coffee"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1800x1200/?modern+coffee+shop+interior+desert+southwest+arizona)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
              More Than Coffee
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed">
              A gathering place where community meets craft, and every moment is savored
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                The Bean & Brew Difference
              </h2>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Single-Origin Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Carefully sourced beans from premier coffee regions, roasted to perfection in small batches
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Master Craftsmanship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert baristas bring years of experience to every pour, extraction, and artistic creation
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Community Haven</h3>
                <p className="text-gray-600 leading-relaxed">
                  A welcoming space where Scottsdale connects over exceptional coffee and genuine conversation
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                Signature Favorites
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-gray-600">
                Taste what makes us special
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0}>
              <div className="menu-card bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 hover:shadow-xl transition-all duration-500 group">
                <div className="relative">
                  <img 
                    src="https://source.unsplash.com/400x300/?latte+art+coffee+cup" 
                    alt="Desert Sunrise Latte" 
                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-amber-700">
                    $5.50
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Desert Sunrise Latte</h3>
                <p className="text-gray-600 mb-4">
                  Espresso with vanilla and cinnamon, topped with our signature foam art
                </p>
                <div className="brewing-detail text-xs text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
                  Double shot • Steamed milk • Signature vanilla blend
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="menu-card bg-gradient-to-br from-stone-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="relative">
                  <img 
                    src="https://source.unsplash.com/400x300/?cold+brew+coffee+glass" 
                    alt="Cold Brew Perfection" 
                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    $4.25
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cold Brew Perfection</h3>
                <p className="text-gray-600 mb-4">
                  12-hour steeped cold brew with notes of chocolate and caramel
                </p>
                <div className="brewing-detail text-xs text-gray-700 bg-gray-200 px-3 py-2 rounded-lg">
                  12-hour steep • Single origin • Served over ice
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="menu-card bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-500 group">
                <div className="relative">
                  <img 
                    src="https://source.unsplash.com/400x300/?granola+bowl+breakfast+fruit" 
                    alt="Artisan Breakfast Bowl" 
                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-green-700">
                    $8.75
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Artisan Breakfast Bowl</h3>
                <p className="text-gray-600 mb-4">
                  House-made granola with seasonal fruits and locally sourced honey
                </p>
                <div className="brewing-detail text-xs text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                  House-made granola • Local honey • Seasonal fruits
                </div>
              </div>
            </FadeInUp>
          </div>
          
          <div className="text-center mt-12">
            <FadeInUp delay={300}>
              <a href="/menu" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{fontFamily: 'var(--font-heading)'}}>
              What Our Community Says
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div className="relative">
              <div className="text-6xl text-amber-200 mb-8 opacity-50">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 -mt-16">
                Bean & Brew has become my daily ritual. The quality is unmatched and the atmosphere makes every visit special.
              </blockquote>
              
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-200 text-amber-200" />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://source.unsplash.com/80x80/?professional+woman+portrait" 
                  alt="Sarah M." 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20" 
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">Sarah M.</div>
                  <div className="text-amber-200">Scottsdale Resident</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-stone-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
              Experience the Difference Today
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join the Scottsdale coffee community that values quality, craft, and connection
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder borderRadius={12} duration={3} color={["#f59e0b", "#d97706", "#92400e"]}>
                <a href="/location" className="px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center gap-2">
                  Visit Our Cafe
                  <ArrowRight className="w-5 h-5" />
                </a>
              </ShineBorder>
              <a href="/menu" className="px-10 py-4 border-2 border-amber-500 text-amber-400 font-semibold rounded-xl text-lg hover:bg-amber-500 hover:text-white transition-all duration-300">
                Browse Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
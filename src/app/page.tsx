"use client";

import FadeInUp from '@/components/fade-in-up';
import ShineBorder from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .coffee-particle {
          animation: floatParticle 4s ease-in-out infinite;
        }
        .coffee-particle:nth-child(odd) {
          animation-delay: 2s;
        }
        .desert-divider {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
        }
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/1600x900/?artisanal+coffee+shop+interior+desert+modern+Scottsdale+Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Floating Coffee Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="coffee-particle absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-40" />
          <div className="coffee-particle absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300 rounded-full opacity-60" />
          <div className="coffee-particle absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-30" />
          <div className="coffee-particle absolute top-2/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-heading">
              Desert Mornings, Perfect Coffee
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where Scottsdale's coffee culture meets artisanal craftsmanship in every cup
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                duration={3}
                color={["#f59e0b", "#d97706", "#92400e"]}
              >
                <a 
                  href="/menu" 
                  className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition duration-300"
                >
                  View Menu
                </a>
              </ShineBorder>
              <a 
                href="/contact" 
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300"
              >
                Visit Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 relative bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="desert-divider absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-amber-50 to-orange-50" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2F1B14] font-[Cormorant Garamond]">
                Crafted for the Desert
              </h2>
              <p className="text-lg text-[#8B4513] max-w-2xl mx-auto">
                Experience the finest coffee craftsmanship in the heart of Scottsdale
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group bg-white p-8 rounded-xl shadow-lg">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#CD853F] to-[#D2691E] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-3xl">☕</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2F1B14] font-[Cormorant Garamond]">
                  Artisan Roasted
                </h3>
                <p className="text-lg text-[#8B4513] leading-relaxed">
                  Small-batch roasting brings out unique flavors in every carefully sourced bean
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="text-center group bg-white p-8 rounded-xl shadow-lg">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#CD853F] to-[#D2691E] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-3xl">🌵</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2F1B14] font-[Cormorant Garamond]">
                  Desert Inspired
                </h3>
                <p className="text-lg text-[#8B4513] leading-relaxed">
                  Our space reflects Arizona's natural beauty with warm, welcoming design
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="text-center group bg-white p-8 rounded-xl shadow-lg">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#CD853F] to-[#D2691E] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#2F1B14] font-[Cormorant Garamond]">
                  Community Focused
                </h3>
                <p className="text-lg text-[#8B4513] leading-relaxed">
                  A gathering place where Scottsdale comes together over exceptional coffee
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section 
        id="atmosphere" 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/1600x900/?modern+café+community+people+laptop+working+together)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[Cormorant Garamond]">
              Where Desert Meets Community
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Experience the warmth of Scottsdale's most inviting coffee destination, where modern design meets desert hospitality
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-[#8B4513] to-[#D2691E] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={0}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Coffee Origins</div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2019</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Founded</div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Weekly Regulars</div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Ethically Sourced</div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#2F1B14] font-[Cormorant Garamond]">
              What Our Community Says
            </h2>
          </FadeInUp>
          
          <div className="text-center">
            <FadeInUp delay={100}>
              <div className="text-6xl text-[#D2691E] mb-8">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-[#2F1B14] max-w-3xl mx-auto font-[Cormorant Garamond]">
                Finally, a coffee shop that understands what Scottsdale needed. The atmosphere is perfect for morning meetings or afternoon work sessions.
              </blockquote>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D2691E] to-[#8B4513] flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[#2F1B14]">Sarah M.</div>
                  <div className="text-sm text-[#8B4513]">Local Regular</div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#8B4513] via-[#D2691E] to-[#8B4513] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/1600x900/?specialty+coffee+pour+over+brewing+process+close+up" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[Cormorant Garamond]">
              Start Your Desert Coffee Journey
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Scottsdale coffee community that values quality, connection, and the perfect morning brew
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <ShineBorder
              borderRadius={16}
              borderWidth={3}
              duration={4}
              color={["#fbbf24", "#f59e0b", "#d97706"]}
            >
              <a 
                href="/contact" 
                className="inline-block px-12 py-5 bg-white text-[#8B4513] font-bold rounded-2xl text-lg hover:bg-amber-50 transition duration-300 shadow-lg"
              >
                Visit Bean & Brew Today
              </a>
            </ShineBorder>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
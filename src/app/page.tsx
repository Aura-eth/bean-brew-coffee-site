"use client"

import FadeInUp from '@/components/fade-in-up'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-color-bg text-color-text overflow-hidden">
      <style jsx>{`
        .coffee-ring {
          position: absolute;
          border: 2px solid var(--color-primary);
          border-radius: 50%;
          opacity: 0.1;
        }
        .coffee-ring-1 {
          width: 120px;
          height: 120px;
          top: 20%;
          left: 10%;
        }
        .coffee-ring-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 15%;
        }
        .coffee-ring-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
        }
        .floating-bean {
          position: absolute;
          width: 8px;
          height: 12px;
          background: var(--color-primary);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          opacity: 0.2;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .bean-1 { top: 30%; left: 5%; animation-delay: 0s; }
        .bean-2 { top: 70%; right: 8%; animation-delay: 2s; }
        .bean-3 { top: 50%; left: 85%; animation-delay: 4s; }
        .parallax-layer {
          transform: translateZ(0);
          will-change: transform;
        }
        .texture-overlay {
          background-image: radial-gradient(circle at 30% 60%, var(--color-primary) 1px, transparent 1px),
                           radial-gradient(circle at 70% 20%, var(--color-secondary) 1px, transparent 1px);
          background-size: 120px 80px, 150px 90px;
          opacity: 0.03;
        }
      `}</style>

      {/* Floating Coffee Beans */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="floating-bean bean-1"></div>
        <div className="floating-bean bean-2"></div>
        <div className="floating-bean bean-3"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 parallax-layer">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior desert modern Scottsdale Arizona" 
            alt="" 
            className="w-full h-full object-cover scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 texture-overlay"></div>
        
        {/* Coffee Ring Decorations */}
        <div className="coffee-ring coffee-ring-1"></div>
        <div className="coffee-ring coffee-ring-2"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Where Desert Meets Coffee Culture
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Artisanal coffee roasted locally, inspired by the Arizona desert, served in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#menu-showcase" 
                className="px-8 py-4 bg-color-primary text-white font-semibold rounded-full text-lg hover:bg-color-primary/90 transition-all duration-300 hover:scale-105"
              >
                Explore Our Menu
              </a>
              <a 
                href="#location" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?cozy coffee shop community people working laptops" 
            alt="" 
            className="w-full h-full object-cover" 
            style={{ backgroundAttachment: 'fixed' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-color-primary/60 to-color-secondary/40"></div>
        <div className="relative text-center text-white max-w-3xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-var-heading">
              Desert Sunlight & Coffee Warmth
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Step into our sun-drenched space where Arizona's golden light mingles with the rich aromas of freshly roasted beans
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-color-surface relative">
        <div className="absolute inset-0 texture-overlay"></div>
        <div className="coffee-ring coffee-ring-3"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-var-heading text-color-text">
                The Bean & Brew Difference
              </h2>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-color-primary to-color-secondary flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                  ☕
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-color-text">
                  Locally Roasted
                </h3>
                <p className="text-color-muted text-lg leading-relaxed">
                  Fresh beans roasted weekly by Arizona artisans
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-color-secondary to-color-accent flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                  🌵
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-color-text">
                  Desert-Inspired
                </h3>
                <p className="text-color-muted text-lg leading-relaxed">
                  Seasonal drinks featuring local flavors like prickly pear and mesquite
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-color-accent to-color-primary flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
                  🤝
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-color-text">
                  Community Hub
                </h3>
                <p className="text-color-muted text-lg leading-relaxed">
                  A welcoming space for work, connection, and cultural events
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 bg-gradient-to-br from-color-bg to-color-surface">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-var-heading text-color-text">
              Signature Favorites
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-center text-color-muted mb-16 max-w-2xl mx-auto text-lg">
              Discover our carefully crafted drinks that capture the essence of the desert
            </p>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <img 
                  src="https://source.unsplash.com/400x300/?specialty coffee latte art desert landscape background" 
                  alt="Desert Sunrise Latte" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-color-text">Desert Sunrise Latte</h3>
                    <span className="text-xl font-bold text-color-primary">$5.50</span>
                  </div>
                  <p className="text-color-muted leading-relaxed">
                    Espresso with prickly pear syrup and steamed oat milk
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <img 
                  src="https://source.unsplash.com/400x300/?coffee beans roasting warm lighting steam" 
                  alt="Mesquite Mocha" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-color-text">Mesquite Mocha</h3>
                    <span className="text-xl font-bold text-color-primary">$5.25</span>
                  </div>
                  <p className="text-color-muted leading-relaxed">
                    Rich chocolate and locally-sourced mesquite powder
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <img 
                  src="https://source.unsplash.com/400x300/?coffee shop exterior Arizona desert cacti sunset" 
                  alt="Saguaro Cold Brew" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-color-text">Saguaro Cold Brew</h3>
                    <span className="text-xl font-bold text-color-primary">$4.75</span>
                  </div>
                  <p className="text-color-muted leading-relaxed">
                    Smooth cold brew with a hint of agave nectar
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={300}>
            <div className="text-center mt-12">
              <a 
                href="/menu" 
                className="inline-block px-8 py-4 bg-color-primary text-white font-semibold rounded-full text-lg hover:bg-color-primary/90 transition-all duration-300 hover:scale-105"
              >
                View Full Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 relative">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x800/?live music coffee house acoustic guitar intimate" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-color-primary/85 to-color-secondary/75"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white font-var-heading">
              What Our Community Says
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div className="text-6xl text-white/30 mb-8">&ldquo;</div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white">
              Bean & Brew isn't just a coffee shop—it's where Scottsdale comes together. The desert-inspired drinks are unlike anything I've tasted, and the atmosphere makes you want to stay all day.
            </blockquote>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <div className="text-left text-white">
                <div className="font-semibold text-lg">Sarah M.</div>
                <div className="text-sm text-white/70">Scottsdale Local</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-color-primary to-color-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay"></div>
        <div className="floating-bean" style={{ top: '20%', left: '10%', animationDelay: '1s' }}></div>
        <div className="floating-bean" style={{ top: '70%', right: '15%', animationDelay: '3s' }}></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-var-heading">
              Experience Desert Coffee Culture
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Join us in the heart of Scottsdale where every cup tells the story of Arizona's coffee renaissance
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/visit" 
                className="inline-block px-10 py-4 bg-white text-color-primary font-bold rounded-full text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Plan Your Visit
              </a>
              <a 
                href="/about" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-color-primary transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
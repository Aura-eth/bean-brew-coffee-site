"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <style jsx>{`
        .coffee-ring-divider {
          position: relative;
        }
        .coffee-ring-divider::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          border: 3px solid rgba(139, 69, 19, 0.3);
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, transparent 20px, rgba(139, 69, 19, 0.1) 22px);
        }
        .floating-beans {
          position: fixed;
          pointer-events: none;
          z-index: 1;
        }
        .bean {
          position: absolute;
          width: 8px;
          height: 12px;
          background: #8B4513;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          opacity: 0.6;
          animation: float 4s ease-in-out infinite;
        }
        .bean::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1px;
          height: 8px;
          background: rgba(101, 67, 33, 0.8);
          border-radius: 50%;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
      
      <div className="floating-beans">
        <div className="bean" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="bean" style={{top: '40%', right: '15%', animationDelay: '1s'}}></div>
        <div className="bean" style={{top: '60%', left: '20%', animationDelay: '2s'}}></div>
        <div className="bean" style={{top: '80%', right: '25%', animationDelay: '3s'}}></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-8 lg:px-16 py-24">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4 block">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-amber-900">Rooted in Arizona, Inspired by Community</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-amber-800/80 mb-8">The story of how two coffee lovers created Scottsdale's favorite gathering place</p>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x1000/?artisanal coffee shop interior desert modern Scottsdale Arizona" 
            alt="Bean & Brew coffee shop interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-900/20 to-amber-900/60" />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://source.unsplash.com/600x500/?coffee beans roasting warm lighting steam" 
              alt="Coffee roasting process" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide coffee-ring-divider inline-block pb-8">Our Beginning</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="text-4xl font-bold mt-8 mb-6 text-amber-900">Our Beginning</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="space-y-4 text-amber-800/80 text-lg leading-relaxed">
                <p>Founded with a vision to bring specialty coffee culture to Scottsdale while honoring the unique character of the Arizona desert, Bean & Brew started as a dream to create more than just great coffee—we wanted to build a true community hub.</p>
                <p>Our founders saw an opportunity to blend the rich tradition of coffee craftsmanship with the warm, welcoming spirit of the Southwest. Every cup we serve carries the essence of our desert home and our commitment to bringing people together.</p>
                <p>From our carefully sourced beans to our handcrafted brewing methods, everything we do is rooted in the belief that great coffee creates great moments, and great moments build great communities.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={0}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2018</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Founded in Scottsdale</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Pounds of Local Beans</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Community Events Hosted</div>
            </div>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Happy Customers</div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team-profiles" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-amber-900 coffee-ring-divider">Meet Our Team</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200 group-hover:border-amber-400 transition-colors duration-300">
                  <img 
                    src="https://source.unsplash.com/400x400/?professional coffee roaster man smiling workshop" 
                    alt="Alex Rivera" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Alex Rivera</h3>
                <p className="text-amber-700 font-medium mb-3">Head Roaster</p>
                <p className="text-amber-800/70 max-w-xs mx-auto">Bringing 12 years of roasting expertise to every batch</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200 group-hover:border-amber-400 transition-colors duration-300">
                  <img 
                    src="https://source.unsplash.com/400x400/?professional barista person smiling coffee shop" 
                    alt="Jordan Chen" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Jordan Chen</h3>
                <p className="text-amber-700 font-medium mb-3">Lead Barista</p>
                <p className="text-amber-800/70 max-w-xs mx-auto">Passionate about latte art and creating the perfect cup</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1200x800/?cozy coffee shop community people working laptops" 
          alt="Coffee shop atmosphere" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <FadeInUp delay={0}>
          <div className="relative text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Where Community Comes Together</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">More than coffee—we're a gathering place where friendships are forged, ideas are born, and the spirit of Scottsdale thrives</p>
          </div>
        </FadeInUp>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-800 via-orange-700 to-amber-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Our Story</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10">Visit us today and become part of the Bean & Brew community</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-colors duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Visit Our Shop
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
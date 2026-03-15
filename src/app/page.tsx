"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter {
          position: absolute;
          width: 8px;
          height: 12px;
          background: radial-gradient(ellipse 60% 80% at 50% 40%, #8B4513 0%, #654321 100%);
          border-radius: 60% 40% 60% 40%;
        }
        .coffee-bean-scatter:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: 8px;
          background: #4A2C17;
          transform: translate(-50%, -50%);
        }
        .bean-1 { top: 20%; left: 15%; transform: rotate(25deg); }
        .bean-2 { top: 35%; right: 20%; transform: rotate(-45deg); }
        .bean-3 { bottom: 40%; left: 25%; transform: rotate(60deg); }
        .bean-4 { top: 60%; right: 15%; transform: rotate(-15deg); }
        .bean-5 { bottom: 20%; right: 30%; transform: rotate(80deg); }
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?cozy coffee shop interior warm lighting scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Coffee bean scatter decoration */}
        <div className="absolute inset-0">
          <div className="coffee-bean-scatter bean-1"></div>
          <div className="coffee-bean-scatter bean-2"></div>
          <div className="coffee-bean-scatter bean-3"></div>
          <div className="coffee-bean-scatter bean-4"></div>
          <div className="coffee-bean-scatter bean-5"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
              Crafted with Care, Roasted with Passion
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Scottsdale's premier coffee destination where community meets exceptional coffee, roasted fresh daily in the heart of the desert
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition">
                View Menu
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition">
                Visit Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center parallax-bg" style={{backgroundImage: 'url(https://source.unsplash.com/1920x1080/?modern coffee shop community people laptops conversation)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-800/50 to-amber-700/70" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Where every cup tells a story and every visit feels like home
            </h2>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-amber-900">
                The Bean & Brew Difference
              </h2>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">House Roasted Daily</h3>
                <p className="text-gray-600 leading-relaxed">Small-batch roasting ensures peak freshness in every cup</p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Local Partnerships</h3>
                <p className="text-gray-600 leading-relaxed">Supporting Arizona farmers and artisan food producers</p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Community Hub</h3>
                <p className="text-gray-600 leading-relaxed">Events, education, and connections that strengthen our neighborhood</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeInUp delay={0}>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-serif">8</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wide font-medium">Years Serving Scottsdale</div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-serif">500</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wide font-medium">Pounds Roasted Weekly</div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-serif">15</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wide font-medium">Local Partners</div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0}>
              <div>
                <div className="text-4xl md:text-5xl font-bold font-serif">50</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wide font-medium">Monthly Events</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-white relative">
        <div className="absolute inset-0">
          <div className="coffee-bean-scatter" style={{top: '15%', left: '10%', transform: 'rotate(45deg)'}}></div>
          <div className="coffee-bean-scatter" style={{top: '70%', right: '12%', transform: 'rotate(-30deg)'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeInUp delay={0}>
            <div className="text-8xl text-amber-600 mb-8 font-serif">&ldquo;</div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800 font-serif">
              Bean & Brew isn't just a coffee shop—it's the heartbeat of our neighborhood. The quality is unmatched and the community they've built is extraordinary.
            </blockquote>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xl">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Sarah M.</div>
                <div className="text-sm text-gray-600">Local Regular</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
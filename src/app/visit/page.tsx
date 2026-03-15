"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function Visit() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter {
          background-image: 
            radial-gradient(circle at 15% 20%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 40%, rgba(139, 69, 19, 0.08) 1.5px, transparent 1.5px),
            radial-gradient(circle at 35% 70%, rgba(139, 69, 19, 0.06) 2.5px, transparent 2.5px),
            radial-gradient(circle at 85% 80%, rgba(139, 69, 19, 0.09) 1px, transparent 1px),
            radial-gradient(circle at 25% 90%, rgba(139, 69, 19, 0.07) 2px, transparent 2px);
          background-size: 200px 200px, 150px 150px, 180px 180px, 120px 120px, 160px 160px;
        }
        .desert-curve {
          clip-path: ellipse(100% 100% at 50% 0%);
        }
        .parallax-layer {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Location Map Section */}
      <section id="location-map" className="relative py-24 px-6 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="absolute inset-0 coffee-bean-scatter opacity-30"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-900" style={{fontFamily: 'var(--font-heading)'}}>Find Us in Scottsdale</h2>
            </FadeInUp>
            <div className="space-y-6">
              <FadeInUp delay={100}>
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200">
                  <span className="font-semibold block text-amber-800 mb-2 text-lg">Address</span>
                  <p className="text-amber-700 text-lg">Scottsdale, AZ</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200">
                  <span className="font-semibold block text-amber-800 mb-2 text-lg">Hours</span>
                  <p className="text-amber-700 text-lg">Mon-Fri: 6am-8pm<br />Sat-Sun: 7am-9pm</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200">
                  <span className="font-semibold block text-amber-800 mb-2 text-lg">Parking</span>
                  <p className="text-amber-700 text-lg">Free parking available</p>
                </div>
              </FadeInUp>
            </div>
          </div>
          <div className="lg:col-span-3">
            <FadeInUp delay={200}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center relative">
                  <img 
                    src="https://source.unsplash.com/800x600/?desert-modern-coffee-shop-interior-Scottsdale-Arizona" 
                    alt="Bean & Brew Coffee location" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Come Visit Us</h3>
                    <p className="text-white/90">Experience the warmth of Scottsdale's premier coffee destination</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Curved Section Divider */}
      <div className="h-16 bg-amber-50 desert-curve"></div>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-amber-900 to-orange-800 overflow-hidden">
        <div className="absolute inset-0 parallax-layer" style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?Arizona-desert-landscape-morning-golden-hour-mountains)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.1
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/90"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-heading)'}}>Get in Touch</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">We'd love to hear from you. Whether you have questions about our coffee, want to learn about our roasting process, or just want to say hello.</p>
            </FadeInUp>
            
            <div className="space-y-8">
              <FadeInUp delay={100}>
                <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block text-white mb-1">Phone</span>
                    <p className="text-white/80">Contact us for current hours and information</p>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block text-white mb-1">Email</span>
                    <p className="text-white/80">hello@beanandbrew.coffee</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          <div>
            <FadeInUp delay={100}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-20 outline-none" placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-20 outline-none" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-20 outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-20 outline-none resize-none" placeholder="Tell us how we can help..."></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Curved Section Divider */}
      <div className="h-16 bg-gradient-to-br from-amber-900 to-orange-800 desert-curve transform rotate-180"></div>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax-layer" 
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1920x1080/?coffee-shop-community-people-laptop-working-together)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
              More Than Coffee
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              A gathering place where Scottsdale's creative spirit meets exceptional coffee craftsmanship
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span>Artisanal Roasting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span>Desert Modern Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span>Community Focused</span>
              </div>
            </div>
          </FadeInUp>
        </div>
        
        {/* Coffee bean scatter overlay */}
        <div className="absolute inset-0 coffee-bean-scatter opacity-20 pointer-events-none"></div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h3 className="text-3xl font-bold text-amber-900 mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Ready to Visit?
            </h3>
            <p className="text-amber-700 text-lg mb-8">
              Come experience the warmth of Bean & Brew Coffee in the heart of Scottsdale
            </p>
            <a href="/" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Our Menu
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
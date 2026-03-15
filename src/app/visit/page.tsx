"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function Visit() {
  return (
    <main className="bg-[var(--color-bg)]">
      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6">
        <style jsx>{`
          .bean-scatter {
            background-image: radial-gradient(circle at 20% 10%, #8B4513 2px, transparent 2px),
                            radial-gradient(circle at 80% 30%, #A0522D 1.5px, transparent 1.5px),
                            radial-gradient(circle at 40% 50%, #8B4513 1px, transparent 1px),
                            radial-gradient(circle at 70% 70%, #A0522D 2px, transparent 2px),
                            radial-gradient(circle at 15% 90%, #8B4513 1.5px, transparent 1.5px);
            background-size: 150px 150px, 200px 200px, 180px 180px, 220px 220px, 170px 170px;
            opacity: 0.1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
          }
        `}</style>
        <div className="max-w-6xl mx-auto relative">
          <div className="bean-scatter" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-text)] font-[var(--font-heading)]">
                  Find Us in Scottsdale
                </h2>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeInUp delay={100}>
                  <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-muted)]/20">
                    <span className="font-semibold block mb-2 text-[var(--color-primary)] uppercase tracking-wide text-sm">Address</span>
                    <p className="text-lg text-[var(--color-text)]">123 Main Street, Scottsdale, AZ 85251</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-muted)]/20">
                    <span className="font-semibold block mb-3 text-[var(--color-primary)] uppercase tracking-wide text-sm">Hours</span>
                    <div className="space-y-1">
                      <p className="text-[var(--color-text)]">Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p className="text-[var(--color-text)]">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-muted)]/20">
                    <span className="font-semibold block mb-2 text-[var(--color-primary)] uppercase tracking-wide text-sm">Parking</span>
                    <p className="text-[var(--color-text)]">Free parking available in adjacent lot and street parking</p>
                  </div>
                </FadeInUp>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <FadeInUp delay={400}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-[var(--color-muted)]/20">
                  <img 
                    src="https://source.unsplash.com/800x600/?scottsdale+arizona+street+coffee+shop+exterior+desert"
                    alt="Bean & Brew Coffee location in Scottsdale"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium text-[var(--color-text)]">📍 Downtown Scottsdale</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--color-surface)]/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-6 text-[var(--color-text)] font-[var(--font-heading)]">
                Get In Touch
              </h2>
              <p className="text-[var(--color-muted)] mb-8 text-lg leading-relaxed">
                Have questions about our coffee, want to book a private event, or just want to say hello? We'd love to hear from you.
              </p>
            </FadeInUp>
            
            <div className="space-y-6">
              <FadeInUp delay={100}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    📞
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-[var(--color-text)]">Phone</span>
                    <a href="tel:4805552739" className="text-[var(--color-primary)] hover:underline text-lg">
                      (480) 555-BREW
                    </a>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    ✉️
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-[var(--color-text)]">Email</span>
                    <a href="mailto:hello@beanandbrew.com" className="text-[var(--color-primary)] hover:underline text-lg">
                      hello@beanandbrew.com
                    </a>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mt-1">
                    💬
                  </div>
                  <div>
                    <span className="font-semibold block mb-2 text-[var(--color-text)]">Social Media</span>
                    <div className="flex gap-3">
                      <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition">Instagram</a>
                      <span className="text-[var(--color-muted)]">•</span>
                      <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition">Facebook</a>
                      <span className="text-[var(--color-muted)]">•</span>
                      <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition">Twitter</a>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          <div>
            <FadeInUp delay={400}>
              <div className="bg-white rounded-3xl p-8 border border-[var(--color-muted)]/20 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-primary)] transition"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-primary)] transition"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-primary)] transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[var(--color-text)]">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-primary)] transition resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary)]/90 transition transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <style jsx>{`
          .heat-wave {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              45deg,
              transparent 40%,
              rgba(255, 255, 255, 0.1) 45%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 55%,
              transparent 60%
            );
            background-size: 200px 200px;
            animation: heatwave 8s ease-in-out infinite;
            pointer-events: none;
          }
          
          @keyframes heatwave {
            0%, 100% { transform: translateX(-100px) translateY(0px); opacity: 0.3; }
            50% { transform: translateX(100px) translateY(-20px); opacity: 0.7; }
          }
        `}</style>
        
        <img 
          src="https://source.unsplash.com/1600x900/?cozy+coffee+shop+community+people+working+reading"
          alt="Bean & Brew atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="heat-wave" />
        
        <div className="relative text-center text-white max-w-4xl px-6 z-10">
          <FadeInUp delay={0}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-[var(--font-heading)]">
              Your perfect coffee moment awaits
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Where desert warmth meets artisanal craft, creating the perfect backdrop for connection, creativity, and exceptional coffee.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Decorative Section Divider */}
      <div className="relative py-8">
        <style jsx>{`
          .cactus-divider {
            background-image: linear-gradient(90deg, 
              transparent 0%, 
              var(--color-primary) 20%, 
              var(--color-accent) 40%, 
              var(--color-secondary) 60%, 
              var(--color-primary) 80%, 
              transparent 100%
            );
            height: 2px;
            position: relative;
          }
          
          .cactus-divider::before {
            content: '🌵';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-bg);
            padding: 0 1rem;
            font-size: 1.5rem;
          }
        `}</style>
        <div className="max-w-4xl mx-auto px-6">
          <div className="cactus-divider" />
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <style jsx>{`
          .coffee-steam {
            position: absolute;
            width: 3px;
            height: 100px;
            background: linear-gradient(to top, 
              rgba(255,255,255,0.8) 0%, 
              rgba(255,255,255,0.4) 50%, 
              transparent 100%
            );
            border-radius: 50%;
            animation: steam 3s ease-in-out infinite;
          }
          
          .coffee-steam:nth-child(1) {
            left: 10%;
            animation-delay: 0s;
          }
          
          .coffee-steam:nth-child(2) {
            left: 30%;
            animation-delay: 1s;
          }
          
          .coffee-steam:nth-child(3) {
            right: 30%;
            animation-delay: 2s;
          }
          
          .coffee-steam:nth-child(4) {
            right: 10%;
            animation-delay: 0.5s;
          }
          
          @keyframes steam {
            0% { transform: translateY(100px) scale(1); opacity: 0; }
            50% { transform: translateY(50px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0px) scale(0.8); opacity: 0; }
          }
        `}</style>
        
        <div className="coffee-steam" />
        <div className="coffee-steam" />
        <div className="coffee-steam" />
        <div className="coffee-steam" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-heading)]">
              Ready for Your Bean & Brew Experience?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us in Scottsdale for exceptional coffee, warm hospitality, and the perfect desert coffee shop atmosphere.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:4805552739" 
                className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full text-lg hover:bg-white/90 transition transform hover:scale-105"
              >
                Call Now
              </a>
              <a 
                href="#location-map" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[var(--color-primary)] transition transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
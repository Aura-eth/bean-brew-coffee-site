"use client";

import { FadeInUp } from "@/components/fade-in-up";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .coffee-beans {
          position: absolute;
          width: 8px;
          height: 12px;
          background: #8B4513;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        .coffee-beans:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .coffee-beans:nth-child(2) { top: 60%; left: 85%; animation-delay: 2s; }
        .coffee-beans:nth-child(3) { top: 30%; left: 75%; animation-delay: 4s; }
        .coffee-beans:nth-child(4) { top: 80%; left: 15%; animation-delay: 1s; }
        .coffee-beans:nth-child(5) { top: 45%; left: 5%; animation-delay: 3s; }
        .coffee-beans:nth-child(6) { top: 70%; left: 65%; animation-delay: 5s; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .desert-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #FF6B35 75%, #8B4513 100%);
        }
      `}</style>

      {/* Story Section */}
      <section id="story" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/1600x900/?artisan+coffee+roasting+beans+copper+roaster" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wide block mb-4">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{fontFamily: 'var(--font-heading)'}}>Our Story</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-white/90 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                Bean & Brew began with a simple mission: bring world-class coffee to the Scottsdale community while creating a space where neighbors become friends. Founded by coffee enthusiasts who fell in love with the art of roasting, we've spent years perfecting our craft and building relationships with growers who share our commitment to quality and sustainability.
              </p>
            </FadeInUp>
          </div>
          <div></div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section id="process-steps" className="py-32 px-6 bg-stone-50 relative overflow-hidden">
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>From Farm to Cup</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px desert-gradient" />
            <FadeInUp delay={0}>
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Source</h3>
                <p className="text-stone-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>Direct relationships with sustainable farms worldwide</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Roast</h3>
                <p className="text-stone-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>Small-batch roasting to highlight each bean's unique character</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Brew</h3>
                <p className="text-stone-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>Expert preparation using precise techniques and timing</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Serve</h3>
                <p className="text-stone-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>Delivered with care in our welcoming community space</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Parallax Coffee Preparation Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/1600x900/?coffee+pouring+latte+art+barista+hands+steam)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-amber-800/50 to-yellow-600/60" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>Crafted with Passion</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-xl text-white/90" style={{fontFamily: 'var(--font-body)'}}>Every cup tells the story of our dedication to excellence</p>
          </FadeInUp>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-5xl font-bold text-center mb-20 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Meet Our Team</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-full overflow-hidden mx-auto bg-gradient-to-br from-orange-100 to-amber-50 p-2">
                    <img 
                      src="https://images.unsplash.com/400x400/?professional+barista+coffee+roaster+portrait" 
                      alt="Alex Rodriguez" 
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 desert-gradient rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Alex Rodriguez</h3>
                <p className="text-orange-600 font-medium mb-4 text-lg" style={{fontFamily: 'var(--font-body)'}}>Owner & Head Roaster</p>
                <p className="text-stone-600 leading-relaxed max-w-sm mx-auto" style={{fontFamily: 'var(--font-body)'}}>Passionate about coffee since discovering specialty roasting in 2015</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-full overflow-hidden mx-auto bg-gradient-to-br from-orange-100 to-amber-50 p-2">
                    <img 
                      src="https://images.unsplash.com/400x400/?female+barista+coffee+shop+professional+portrait" 
                      alt="Maya Chen" 
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 desert-gradient rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>Maya Chen</h3>
                <p className="text-orange-600 font-medium mb-4 text-lg" style={{fontFamily: 'var(--font-body)'}}>Lead Barista</p>
                <p className="text-stone-600 leading-relaxed max-w-sm mx-auto" style={{fontFamily: 'var(--font-body)'}}>Latte art champion and coffee education enthusiast</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Community Connection Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/1600x800/?modern+coffee+shop+community+people+laptops+conversation" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>Where Community Meets Coffee</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-xl text-white/90 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>More than just a coffee shop, we're a gathering place for Scottsdale's vibrant community, fostering connections one cup at a time.</p>
          </FadeInUp>
        </div>
      </section>

      {/* Desert Sunrise Gradient Band */}
      <section className="h-32 desert-gradient relative overflow-hidden">
        <div className="coffee-beans"></div>
        <div className="coffee-beans"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </div>
  );
}
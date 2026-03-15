"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.1) 2px, transparent 2px);
          background-size: 60px 60px, 40px 40px, 50px 50px;
          background-position: 0 0, 30px 30px, 10px 50px;
        }
        
        .desert-curve {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert,modern,coffee,shop,interior,Scottsdale,Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Desert Roasted. Community Crafted.
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience Scottsdale's premier coffee destination where locally-roasted beans meet desert-inspired hospitality
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShineBorder 
                borderRadius={12} 
                borderWidth={2} 
                duration={3} 
                color={['#D4A574', '#8B4513', '#CD853F']}
              >
                <a 
                  href="/menu" 
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-lg transition-all duration-300"
                >
                  View Our Menu
                </a>
              </ShineBorder>
              <a 
                href="/location" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-xl text-lg transition-all duration-300"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section 
        id="atmosphere" 
        className="relative h-[70vh] flex items-center justify-center parallax-bg desert-curve" 
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?coffee,shop,community,people,laptop,working,together)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Where Community Meets Craft
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              More than just coffee – we're Scottsdale's living room, workspace, and creative hub rolled into one warm, welcoming space
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50 coffee-bean-pattern">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">
                The Bean & Brew Difference
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                  Desert-Roasted Beans
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  Small-batch roasted locally with beans sourced from sustainable farms
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 22.99c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-9c0-2.4-.99-3.87-2.43-5.29C8.31 7.72 6.71 6.87 5 6.4L5.05 5H1v17.99z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                  Signature Desert Drinks
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  Unique beverages inspired by Arizona's natural beauty and flavors
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-amber-600/10 flex items-center justify-center mx-auto mb-6 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-1c-.83 0-1.5.67-1.5 1.5v6h-2v-4c0-.83-.67-1.5-1.5-1.5S11 10.17 11 11v4H9v-6c0-.83-.67-1.5-1.5-1.5S6 8.17 6 9v6H4V9c0-1.66 1.34-3 3-3s3 1.34 3 3v1h2v-1c0-1.66 1.34-3 3-3s3 1.34 3 3v1h2V9c0-1.66 1.34-3 3-3s3 1.34 3 3v13z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                  Community Hub
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  A welcoming space for work, connection, and coffee education
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="py-16 px-6 bg-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://source.unsplash.com/1920x400/?Arizona,desert,landscape,morning,golden,hour,mountains" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeInUp delay={0}>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  12
                </div>
                <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
                  Bean Origins
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
                  Signature Drinks
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  2019
                </div>
                <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
                  Est. Scottsdale
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="group">
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
                  Local Roasted
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-gradient-to-br from-stone-100 to-amber-50 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://source.unsplash.com/1920x800/?latte,art,cappuccino,wooden,table,warm,lighting" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <FadeInUp delay={0}>
            <div className="text-8xl text-amber-600 mb-8 font-serif">&ldquo;</div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8 text-amber-900 max-w-4xl mx-auto">
              Bean & Brew isn't just a coffee shop - it's become my second office and favorite community gathering spot. The quality is unmatched in Scottsdale.
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold text-amber-900 text-lg">Sarah M.</div>
                <div className="text-sm text-amber-700">Regular Customer</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
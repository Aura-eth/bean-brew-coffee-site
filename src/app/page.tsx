"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes coffeeSteam {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
        }
        .coffee-steam { animation: coffeeSteam 3s ease-in-out infinite; }
        .bean-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(2px 2px at 20px 30px, var(--color-primary), transparent),
                            radial-gradient(2px 2px at 40px 70px, var(--color-primary), transparent),
                            radial-gradient(1px 1px at 90px 40px, var(--color-primary), transparent),
                            radial-gradient(1px 1px at 130px 80px, var(--color-primary), transparent);
          opacity: 0.1;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bean-scatter">
        <img 
          src="https://images.unsplash.com/1600x900/?artisanal+coffee+shop+interior+warm+lighting+Scottsdale+Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Desert-Roasted Coffee, Community-Crafted Moments
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover Scottsdale's premier coffee destination where artisanal roasting meets southwestern warmth
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShineBorder 
                borderRadius={12} 
                borderWidth={2} 
                duration={3} 
                color={["#d4a574", "#8b4513"]}
              >
                <a 
                  href="/menu" 
                  className="px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-600 transition coffee-steam"
                >
                  View Our Menu
                </a>
              </ShineBorder>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/1600x800/?cozy+coffee+shop+customers+laptops+community+atmosphere" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where Every Cup Tells a Story
            </h2>
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4 text-stone-800">
                The Bean & Brew Difference
              </h2>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInUp delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-800">
                  Small-Batch Roasted
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Coffee beans roasted fresh daily in small batches for optimal flavor and aroma
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-800">
                  Community Hub
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  A gathering place where neighbors become friends over exceptional coffee
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-800">
                  Desert-Inspired
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Unique southwestern atmosphere that celebrates our Scottsdale heritage
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section id="menu-showcase" className="py-24 px-6 relative bean-scatter">
        <img 
          src="https://images.unsplash.com/1600x900/?coffee+cup+saucer+wooden+table+desert+plants+background" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-white/95" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4 text-stone-800">
                Signature Favorites
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-stone-600 text-lg">
                Taste what makes Bean & Brew special
              </p>
            </FadeInUp>
          </div>
          <div className="space-y-8">
            <FadeInUp delay={0}>
              <div className="flex justify-between items-start gap-4 pb-6 border-b border-stone-200">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    Desert Sunrise Latte
                  </h3>
                  <p className="text-stone-600">
                    Espresso with cinnamon, vanilla, and a hint of agave nectar
                  </p>
                </div>
                <span className="text-xl font-bold text-amber-700 flex-none">
                  $5.50
                </span>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="flex justify-between items-start gap-4 pb-6 border-b border-stone-200">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    Copper Canyon Cold Brew
                  </h3>
                  <p className="text-stone-600">
                    Smooth, rich cold brew infused with chocolate and orange notes
                  </p>
                </div>
                <span className="text-xl font-bold text-amber-700 flex-none">
                  $4.75
                </span>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex justify-between items-start gap-4 pb-6">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    Saguaro Blend
                  </h3>
                  <p className="text-stone-600">
                    Our house blend featuring Central American beans with nutty undertones
                  </p>
                </div>
                <span className="text-xl font-bold text-amber-700 flex-none">
                  $3.25
                </span>
              </div>
            </FadeInUp>
          </div>
          <div className="text-center mt-12">
            <FadeInUp delay={300}>
              <a 
                href="/menu" 
                className="inline-block px-8 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
              >
                View Full Menu
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <div className="text-6xl text-amber-400 mb-8">&ldquo;</div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              Bean & Brew isn't just a coffee shop—it's where Scottsdale comes together. The quality is unmatched and the atmosphere feels like home.
            </blockquote>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-600 flex items-center justify-center">
                <span className="text-lg font-semibold">SM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-stone-400">Regular Customer</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-700 to-stone-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Desert Coffee Culture
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-80 mb-10">
              Join our community of coffee lovers in the heart of Scottsdale
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-stone-800 font-bold rounded-full text-lg hover:bg-stone-100 transition coffee-steam"
            >
              Visit Us Today
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
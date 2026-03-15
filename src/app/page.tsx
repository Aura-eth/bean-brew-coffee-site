"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(210, 180, 140, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(222, 184, 135, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(205, 175, 149, 0.05) 0%, transparent 50%);
        }
        .coffee-beans {
          background-image:
            radial-gradient(ellipse 3px 5px at 15% 25%, #8B4513 0%, #8B4513 40%, transparent 40%),
            radial-gradient(ellipse 2px 4px at 85% 75%, #A0522D 0%, #A0522D 40%, transparent 40%),
            radial-gradient(ellipse 3px 5px at 65% 15%, #654321 0%, #654321 40%, transparent 40%),
            radial-gradient(ellipse 2px 4px at 25% 85%, #8B4513 0%, #8B4513 40%, transparent 40%);
        }
        .parallax-layer-1 { transform: translateZ(-1px) scale(2); }
        .parallax-layer-2 { transform: translateZ(-2px) scale(3); }
      `}</style>
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
          <div className="absolute inset-0 parallax-layer-2">
            <img 
              src="https://source.unsplash.com/1920x1080/?Scottsdale+Arizona+desert+morning+sunrise+mountains+coffee+cup" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-30" 
            />
          </div>
          <div className="absolute inset-0 parallax-layer-1">
            <img 
              src="https://source.unsplash.com/1920x1080/?specialty+coffee+shop+interior+warm+lighting+Arizona+desert+modern" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover opacity-60" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Desert Mornings, Artisan Coffee
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Scottsdale's gathering place for exceptional coffee, locally roasted with Southwestern soul
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShineBorder borderRadius={12} borderWidth={2} duration={3} color={["#D2691E", "#CD853F", "#F4A460"]}>
                  <a href="#menu-showcase" className="px-8 py-4 bg-white text-black font-semibold rounded-xl text-lg hover:bg-white/90 transition duration-300">
                    View Our Menu
                  </a>
                </ShineBorder>
                <a href="#contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg hover:bg-white/10 transition duration-300">
                  Visit Us Today
                </a>
              </div>
            </FadeInUp>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Atmosphere Section */}
        <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(https://source.unsplash.com/1920x1080/?coffee+shop+community+people+laptops+conversations+warm+atmosphere)`
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center text-white max-w-3xl px-6">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Where Desert Meets Coffee Culture
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg text-white/80 leading-relaxed">
                Step into our warm, inviting space where Southwestern aesthetics blend seamlessly with modern coffee culture
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Feature Highlight Section */}
        <section id="feature-highlight" className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-orange-50/20 coffee-beans">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Crafted for the Desert
                </h2>
              </FadeInUp>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Locally Roasted",
                  description: "Small-batch beans roasted right here in Scottsdale for peak freshness",
                  icon: "☕"
                },
                {
                  title: "Desert-Inspired Drinks",
                  description: "Unique creations that capture the spirit of the Southwest",
                  icon: "🌵"
                },
                {
                  title: "Community Hub",
                  description: "A welcoming space where neighbors become friends over great coffee",
                  icon: "🤝"
                }
              ].map((feature, index) => (
                <FadeInUp key={feature.title} delay={index * 100}>
                  <div className="text-center bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-4xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Showcase Section */}
        <section id="menu-showcase" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Signature Favorites
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  Taste what makes us special
                </p>
              </FadeInUp>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Desert Sunrise Latte",
                  description: "Espresso with agave, cinnamon, and steamed oat milk",
                  price: "$5.50",
                  image: "https://source.unsplash.com/400x300/?latte+cinnamon+oat+milk"
                },
                {
                  name: "Prickly Pear Cold Brew",
                  description: "Smooth cold brew with house-made prickly pear syrup",
                  price: "$4.75",
                  image: "https://source.unsplash.com/400x300/?cold+brew+coffee+pink"
                },
                {
                  name: "Saguaro Blend",
                  description: "Our signature medium roast with notes of chocolate and citrus",
                  price: "$3.50",
                  image: "https://source.unsplash.com/400x300/?coffee+beans+roasted"
                }
              ].map((item, index) => (
                <FadeInUp key={item.name} delay={index * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" 
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-lg text-gray-900">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
            <FadeInUp delay={200}>
              <div className="text-center mt-12">
                <a href="/menu" className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition duration-300">
                  View Full Menu
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="social-proof" className="py-24 px-6 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp delay={0}>
              <div className="text-6xl text-amber-600 mb-8">&ldquo;</div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-gray-800">
                Bean & Brew isn't just a coffee shop - it's where Scottsdale comes together. The best coffee in the desert, hands down.
              </blockquote>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                  ☕
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Local Coffee Enthusiast</div>
                  <div className="text-sm text-gray-600">Scottsdale Resident</div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x1080/?artisan+coffee+brewing+pour+over+hands+close+up+warm+tones" 
              alt="" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center text-white">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience Desert Coffee Culture?
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Join our community of coffee lovers in the heart of Scottsdale
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition duration-300">
                  Find Us
                </a>
                <a href="/menu" className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition duration-300">
                  Explore Menu
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  )
}
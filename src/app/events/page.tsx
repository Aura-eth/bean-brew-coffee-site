"use client"

import FadeInUp from '@/components/fade-in-up'
import ShineBorder from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-var(--color-bg)">
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 20%, rgba(101, 67, 33, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 80% 40%, rgba(101, 67, 33, 0.08) 3px, transparent 3px),
                           radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.06) 2px, transparent 2px);
          background-size: 60px 60px, 80px 80px, 100px 100px;
        }
        .desert-gradient-hover {
          transition: background 0.3s ease-out;
        }
        .desert-gradient-hover:hover {
          background: linear-gradient(135deg, #654321 0%, #D4761A 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex items-center px-8 lg:px-16 py-24 coffee-bean-pattern">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-4 block">Community Hub</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">More Than Coffee</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-600 mb-8">Join us for community events, live music, and coffee education</p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <a href="#event-listing" className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition">
                  View Events
                </a>
                <a href="/contact" className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition">
                  Contact Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-screen">
          <img 
            src="https://source.unsplash.com/800x1000/?coffee-cupping-tasting-professional-cafe-setup" 
            alt="Coffee events" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="event-listing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Upcoming Events</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={100}>
              <ShineBorder borderRadius={16} borderWidth={2} duration={3} color={["#D4761A", "#654321", "#F59E0B"]}>
                <div className="p-8 bg-white rounded-2xl desert-gradient-hover hover:text-white transition-colors duration-300">
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-amber-600 uppercase mb-2">SAT</div>
                    <div className="text-4xl font-black text-gray-900">10</div>
                    <div className="text-sm text-gray-600">AM</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Saturday Morning Coffee Cupping</h3>
                  <p className="text-sm text-gray-600 mb-4">Every Saturday 10 AM</p>
                  <p className="text-sm">Learn to taste coffee like a pro with guided cupping sessions</p>
                </div>
              </ShineBorder>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 desert-gradient-hover hover:text-white transition-colors duration-300">
                <div className="text-center mb-6">
                  <div className="text-sm font-semibold text-amber-600 uppercase mb-2">FRI</div>
                  <div className="text-4xl font-black text-gray-900">1st</div>
                  <div className="text-sm text-gray-600">Monthly</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">Local Artist Showcase</h3>
                <p className="text-sm text-gray-600 mb-4">First Friday Monthly</p>
                <p className="text-sm">Featuring rotating Scottsdale artists with live music and art displays</p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 desert-gradient-hover hover:text-white transition-colors duration-300">
                <div className="text-center mb-6">
                  <div className="text-sm font-semibold text-amber-600 uppercase mb-2">WORKSHOP</div>
                  <div className="text-4xl font-black text-gray-900">•</div>
                  <div className="text-sm text-gray-600">Monthly</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">Latte Art Workshop</h3>
                <p className="text-sm text-gray-600 mb-4">Monthly Workshop</p>
                <p className="text-sm">Hands-on class to master the art of milk steaming and pouring</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Community in Action</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x300/?artisanal-coffee-shop-interior-warm-lighting-scottsdale" 
                  alt="Coffee shop interior" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x500/?specialty-coffee-beans-roasting-desert-modern-cafe" 
                  alt="Coffee beans" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x400/?barista-pouring-latte-art-sunny-coffee-shop" 
                  alt="Latte art" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x350/?cozy-coffee-shop-community-gathering-arizona-desert" 
                  alt="Community gathering" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x450/?coffee-cupping-tasting-professional-cafe-setup" 
                  alt="Coffee cupping" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="break-inside-avoid rounded-xl overflow-hidden">
                <img 
                  src="https://source.unsplash.com/400x300/?desert-landscape-sunset-warm-tones-arizona-scottsdale" 
                  alt="Desert landscape" 
                  className="w-full hover:scale-105 transition duration-500" 
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1400x800/?cozy-coffee-shop-community-gathering-arizona-desert" 
          alt="Community atmosphere" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="relative text-center text-white px-6 coffee-bean-pattern">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Where Community Brews</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80">Every cup tells a story, every event builds connection</p>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-amber-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Next Event</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10">Be part of Scottsdale's most vibrant coffee community</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block px-10 py-4 bg-white text-amber-600 font-bold rounded-full text-lg hover:bg-gray-100 transition">
                Get Event Updates
              </a>
              <a href="/menu" className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-amber-600 transition">
                View Our Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
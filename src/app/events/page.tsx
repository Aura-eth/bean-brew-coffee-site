"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { ShineBorder } from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function EventsPage() {
  const galleryImages = [
    {
      url: 'https://source.unsplash.com/400x500/?coffee+cupping+tasting+professional+barista+hands',
      alt: 'Coffee cupping session'
    },
    {
      url: 'https://source.unsplash.com/500x600/?coffee+community+gathering+people+talking+cafe',
      alt: 'Community gathering'
    },
    {
      url: 'https://source.unsplash.com/400x700/?modern+coffeehouse+interior+warm+lighting+scottsdale',
      alt: 'Coffee house interior'
    },
    {
      url: 'https://source.unsplash.com/600x400/?latte+art+pour+overhead+shot+marble+counter',
      alt: 'Latte art creation'
    },
    {
      url: 'https://source.unsplash.com/450x550/?artisanal+coffee+roasting+beans+desert+sunlight',
      alt: 'Coffee roasting process'
    },
    {
      url: 'https://source.unsplash.com/500x400/?desert+landscape+coffee+plantation+mountains+sunrise',
      alt: 'Coffee origin landscape'
    }
  ]

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <style jsx>{`
        @keyframes coffeeBean {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .coffee-bean {
          animation: coffeeBean 6s ease-in-out infinite;
        }
        .linen-texture {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.05) 1px, transparent 0);
          background-size: 20px 20px;
        }
        .paper-texture {
          background-image: 
            linear-gradient(90deg, transparent 79px, rgba(139, 69, 19, 0.04) 79px, rgba(139, 69, 19, 0.04) 81px, transparent 81px),
            linear-gradient(rgba(139, 69, 19, 0.02), rgba(139, 69, 19, 0.02));
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-8 lg:px-16 py-24 linen-texture">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4 block font-[var(--font-heading)]">Community Hub</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-[var(--font-heading)] text-[var(--color-text)]">Coffee Community</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-[var(--color-muted)] mb-8 font-[var(--font-body)] leading-relaxed">Join us for tastings, education, and connection</p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <ShineBorder 
                  borderRadius={8} 
                  borderWidth={1} 
                  duration={3000} 
                  color={["#8B4513", "#D2691E", "#CD853F"]}
                >
                  <a href="#event-listing" className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium font-[var(--font-body)] hover:bg-opacity-90 transition-all duration-[var(--duration-normal)]">
                    See Upcoming Events
                  </a>
                </ShineBorder>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x1000/?coffee+community+gathering+people+talking+cafe" 
            alt="Coffee community gathering" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/20" />
          <div className="absolute top-8 right-8 coffee-bean">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="event-listing" className="py-24 px-6 paper-texture">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold mb-16 text-center font-[var(--font-heading)] text-[var(--color-text)]">Upcoming Events</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={100}>
              <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-muted)]/20 hover:shadow-lg transition-all duration-[var(--duration-normal)] group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-all duration-[var(--duration-normal)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-[var(--font-heading)] text-[var(--color-text)]">Saturday Coffee Cupping</h3>
                <p className="text-[var(--color-muted)] mb-4 font-[var(--font-body)] leading-relaxed">Weekly tasting sessions to explore different origins</p>
                <div className="text-sm font-medium text-[var(--color-primary)] font-[var(--font-body)]">Every Saturday, 10 AM</div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-muted)]/20 hover:shadow-lg transition-all duration-[var(--duration-normal)] group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-all duration-[var(--duration-normal)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-[var(--font-heading)] text-[var(--color-text)]">Brewing Workshop</h3>
                <p className="text-[var(--color-muted)] mb-4 font-[var(--font-body)] leading-relaxed">Learn pour-over techniques from our expert baristas</p>
                <div className="text-sm font-medium text-[var(--color-primary)] font-[var(--font-body)]">Monthly workshops</div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={300}>
              <div className="bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-muted)]/20 hover:shadow-lg transition-all duration-[var(--duration-normal)] group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-all duration-[var(--duration-normal)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-[var(--font-heading)] text-[var(--color-text)]">Origin Story Sessions</h3>
                <p className="text-[var(--color-muted)] mb-4 font-[var(--font-body)] leading-relaxed">Meet coffee farmers and learn about sustainable practices</p>
                <div className="text-sm font-medium text-[var(--color-primary)] font-[var(--font-body)]">Quarterly events</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1600x800/?modern+coffeehouse+interior+warm+lighting+scottsdale" 
          alt="Coffee house atmosphere" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <FadeInUp delay={0}>
          <div className="relative text-center text-white px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-heading)]">Where Coffee Meets Community</h2>
            <p className="text-xl text-white/80 font-[var(--font-body)]">Experience the warmth of our desert coffeehouse</p>
          </div>
        </FadeInUp>
        <div className="absolute bottom-8 left-8 coffee-bean">
          <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-12 right-12 coffee-bean" style={{animationDelay: '2s'}}>
          <div className="w-4 h-4 bg-white rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-[var(--color-surface)] linen-texture">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 font-[var(--font-heading)] text-[var(--color-text)]">Community Moments</h2>
          </FadeInUp>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <FadeInUp key={i} delay={i * 100}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-[var(--duration-normal)] group">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full hover:scale-105 transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)]"></div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[var(--color-primary)] text-white paper-texture">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-heading)]">Join Our Coffee Community</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 font-[var(--font-body)] leading-relaxed">Be part of something special at Bean & Brew</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full text-lg hover:bg-opacity-90 transition-all duration-[var(--duration-normal)] font-[var(--font-body)]"
              >
                Get Event Updates
              </a>
              <a 
                href="/about" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-[var(--duration-normal)] font-[var(--font-body)]"
              >
                Learn Our Story
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
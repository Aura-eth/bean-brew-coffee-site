"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const events = [
    {
      title: "Acoustic Nights",
      date: "Every Friday 7-9 PM",
      description: "Local musicians perform in our cozy atmosphere",
      month: "FRI",
      day: "7-9"
    },
    {
      title: "Coffee Cupping Sessions",
      date: "Saturday Mornings",
      description: "Learn to taste coffee like a pro with our expert roasters",
      month: "SAT",
      day: "AM"
    },
    {
      title: "Community Book Club",
      date: "First Monday of Each Month",
      description: "Monthly book discussions over coffee and pastries",
      month: "MON",
      day: "1st"
    }
  ];

  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x600/?acoustic-guitar-performance-coffee-shop-intimate-lighting",
      alt: "Acoustic performance in cozy coffee shop setting"
    },
    {
      url: "https://source.unsplash.com/400x400/?coffee-cupping-tasting-session-professional-roaster",
      alt: "Coffee cupping session with expert guidance"
    },
    {
      url: "https://source.unsplash.com/400x500/?book-club-meeting-coffee-shop-community-discussion",
      alt: "Book club members discussing over coffee"
    },
    {
      url: "https://source.unsplash.com/400x450/?live-music-audience-coffee-shop-evening-atmosphere",
      alt: "Engaged audience enjoying live music"
    },
    {
      url: "https://source.unsplash.com/400x550/?community-gathering-coffee-shop-diverse-people-socializing",
      alt: "Community members connecting over coffee"
    },
    {
      url: "https://source.unsplash.com/400x480/?coffee-education-workshop-beans-tasting-notes",
      alt: "Coffee education workshop in progress"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-beans-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 30%, var(--color-accent) 2px, transparent 2px),
                          radial-gradient(circle at 70% 20%, var(--color-secondary) 2px, transparent 2px),
                          radial-gradient(circle at 40% 80%, var(--color-accent) 1px, transparent 1px),
                          radial-gradient(circle at 80% 70%, var(--color-secondary) 1px, transparent 1px);
          background-size: 150px 150px, 200px 200px, 120px 120px, 180px 180px;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .steam-hover:hover::after {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: linear-gradient(transparent, var(--color-muted), transparent);
          animation: steam 2s ease-in-out infinite;
        }
        
        @keyframes steam {
          0% { transform: translateX(-50%) translateY(0) scaleY(1); opacity: 0; }
          50% { transform: translateX(-50%) translateY(-5px) scaleY(1.2); opacity: 0.7; }
          100% { transform: translateX(-50%) translateY(-15px) scaleY(0.8); opacity: 0; }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-beans-scatter">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisanal-coffee-shop-interior-warm-lighting-Scottsdale-Arizona" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
                Where Community Comes Together
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us for live music, coffee education, and neighborhood connections
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#events" 
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-white/90 transition-all duration-300 steam-hover relative"
                >
                  View Calendar
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  Host an Event
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Event Listing Section */}
        <section id="events" className="py-24 px-6 bg-var(--color-bg)">
          <div className="max-w-5xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Upcoming Events
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <FadeInUp key={event.title} delay={index * 100}>
                  <div className="bg-var(--color-surface) p-8 rounded-2xl border border-var(--color-muted)/20 hover:shadow-lg transition-all duration-300 group steam-hover relative">
                    <div className="text-center mb-6">
                      <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-primary)'}}>
                        {event.month}
                      </div>
                      <div className="text-4xl font-black" style={{color: 'var(--color-text)'}}>
                        {event.day}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-var(--color-primary) transition-colors" style={{color: 'var(--color-text)'}}>
                        {event.title}
                      </h3>
                      <p className="text-sm font-medium mb-2" style={{color: 'var(--color-secondary)'}}>
                        {event.date}
                      </p>
                      <p className="text-var(--color-muted) leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6" style={{backgroundColor: 'var(--color-surface)'}}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                  Event Memories
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-lg" style={{color: 'var(--color-muted)'}}>
                  Moments from our vibrant community gatherings
                </p>
              </FadeInUp>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((img, index) => (
                <FadeInUp key={index} delay={index * 50}>
                  <div className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full hover:scale-105 transition-transform duration-500 group-hover:brightness-110" 
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={200}>
              <div className="text-center mt-16">
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 steam-hover relative"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-bg)'
                  }}
                >
                  Join Our Next Event
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Atmosphere Break */}
        <section className="relative h-[60vh] flex items-center justify-center coffee-beans-scatter">
          <img 
            src="https://source.unsplash.com/1920x800/?cozy-coffee-shop-customers-laptops-community-atmosphere" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          <div className="relative text-center text-white px-6">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Every Gathering Tells a Story
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                From intimate acoustic sets to educational coffee sessions, Bean & Brew is where Scottsdale comes together
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6" style={{backgroundColor: 'var(--color-primary)'}}>
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-bg)'}}>
                Ready to Host Your Event?
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl mb-10" style={{color: 'var(--color-bg)', opacity: 0.8}}>
                Let's create something memorable together in our welcoming space
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block px-10 py-4 font-bold rounded-full text-lg transition-all duration-300 steam-hover relative"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Get in Touch
                </a>
                <a 
                  href="tel:(480) 555-BREW" 
                  className="inline-block px-10 py-4 border-2 font-bold rounded-full text-lg transition-all duration-300"
                  style={{
                    borderColor: 'var(--color-bg)',
                    color: 'var(--color-bg)'
                  }}
                >
                  Call Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
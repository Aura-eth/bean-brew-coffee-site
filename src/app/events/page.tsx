"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const events = [
    {
      title: "Sunday Morning Acoustic Sessions",
      date: "Every Sunday, 9-11 AM",
      description: "Local musicians perform while you enjoy your morning coffee",
      month: "SUN",
      day: "9-11"
    },
    {
      title: "Coffee Cupping Experience",
      date: "First Friday of each month, 6 PM",
      description: "Learn to taste coffee like a pro with our roasting team",
      month: "FRI",
      day: "6PM"
    },
    {
      title: "Community Art Night",
      date: "Third Thursday, 7-9 PM",
      description: "Local artists showcase their work in our welcoming space",
      month: "THU",
      day: "7-9"
    }
  ];

  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x500/?coffee-shop-community-people-laptops-conversations-warm-atmosphere",
      alt: "Community gathering at Bean & Brew"
    },
    {
      url: "https://source.unsplash.com/400x600/?specialty-coffee-shop-interior-warm-lighting-Arizona-desert-modern",
      alt: "Live music performance"
    },
    {
      url: "https://source.unsplash.com/400x450/?artisan-coffee-brewing-pour-over-hands-close-up-warm-tones",
      alt: "Coffee cupping session"
    },
    {
      url: "https://source.unsplash.com/400x550/?desert-cafe-patio-seating-southwestern-architecture-modern",
      alt: "Art night showcase"
    },
    {
      url: "https://source.unsplash.com/400x480/?Scottsdale-Arizona-desert-morning-sunrise-mountains-coffee-cup",
      alt: "Community event"
    },
    {
      url: "https://source.unsplash.com/400x520/?specialty-coffee-beans-roasting-equipment-artisan-craft",
      alt: "Coffee education workshop"
    }
  ];

  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(222, 184, 135, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(210, 180, 140, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(218, 165, 32, 0.06) 1px, transparent 1px);
          background-size: 40px 40px, 60px 60px, 80px 80px;
        }
        
        .coffee-beans::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(ellipse 4px 6px at 10% 20%, rgba(101, 67, 33, 0.1), transparent),
            radial-gradient(ellipse 4px 6px at 80% 60%, rgba(101, 67, 33, 0.08), transparent),
            radial-gradient(ellipse 4px 6px at 30% 80%, rgba(101, 67, 33, 0.06), transparent);
          background-size: 120px 120px, 180px 180px, 150px 150px;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
        <img 
          src="https://source.unsplash.com/1920x1080/?coffee-shop-community-people-laptops-conversations-warm-atmosphere" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Where Community Comes Alive
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Live music, coffee education, and gatherings that bring Scottsdale together
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="events" className="py-24 px-6 relative coffee-beans">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{color: 'var(--color-primary)'}}>
              Upcoming Events
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <FadeInUp key={event.title} delay={index * 100}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-center flex-none">
                      <div 
                        className="text-sm font-semibold uppercase tracking-wide mb-1" 
                        style={{color: 'var(--color-primary)'}}
                      >
                        {event.month}
                      </div>
                      <div className="text-3xl font-black" style={{color: 'var(--color-text)'}}>
                        {event.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:" style={{color: 'var(--color-text)'}}>
                        {event.title}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{color: 'var(--color-primary)'}}>
                        {event.date}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
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
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{color: 'var(--color-text)'}}>
              Moments That Matter
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-center text-xl mb-16 max-w-2xl mx-auto" style={{color: 'var(--color-muted)'}}>
              Visual storytelling of past events showing vibrant community engagement and memorable moments
            </p>
          </FadeInUp>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <FadeInUp key={index} delay={index * 50}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full hover:scale-105 transition duration-700 ease-out" 
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x600/?Scottsdale-Arizona-desert-morning-sunrise-mountains-coffee-cup" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <FadeInUp delay={0}>
          <div className="relative text-center text-white px-6 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Every Event Tells a Story
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join us where the desert meets community, and every gathering becomes a cherished memory
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6" style={{backgroundColor: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Be Part of Our Story
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Follow us on social media to stay updated on upcoming events, or visit us in person to join the conversation
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Visit Us Today
              </a>
              <a 
                href="#events" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Schedule
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
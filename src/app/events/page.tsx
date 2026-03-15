"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const events = [
    {
      title: "Saturday Coffee Cupping",
      date: "Every Saturday, 10 AM",
      month: "SAT",
      day: "10",
      description: "Taste and compare different origins with our roasting team"
    },
    {
      title: "Local Artist Showcase",
      date: "First Friday Monthly",
      month: "FRI",
      day: "1st",
      description: "Rotating exhibitions featuring Scottsdale artists"
    },
    {
      title: "Acoustic Sessions",
      date: "Thursday Evenings",
      month: "THU",
      day: "7PM",
      description: "Live music from local musicians in an intimate setting"
    }
  ];

  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x500/?coffee-shop-community-event-people-laughing",
      alt: "Community event at Bean & Brew"
    },
    {
      url: "https://source.unsplash.com/400x300/?artisan-coffee-roasting-beans",
      alt: "Coffee cupping session"
    },
    {
      url: "https://source.unsplash.com/400x600/?cozy-desert-coffee-shop-interior",
      alt: "Interior during live music"
    },
    {
      url: "https://source.unsplash.com/400x400/?coffee-latte-art-ceramic-cup",
      alt: "Coffee art at events"
    },
    {
      url: "https://source.unsplash.com/400x500/?barista-pouring-espresso-desert",
      alt: "Barista at work during event"
    },
    {
      url: "https://source.unsplash.com/400x350/?scottsdale-arizona-desert-landscape",
      alt: "Desert-inspired atmosphere"
    }
  ];

  return (
    <main className="min-h-screen">
      <style jsx>{`
        @keyframes coffeeBean {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.3; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.1; }
        }
        .coffee-beans::before {
          content: '☕';
          position: absolute;
          top: 20%;
          left: 10%;
          font-size: 2rem;
          animation: coffeeBean 8s ease-in-out infinite;
          animation-delay: 0s;
        }
        .coffee-beans::after {
          content: '☕';
          position: absolute;
          top: 60%;
          right: 15%;
          font-size: 1.5rem;
          animation: coffeeBean 8s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden coffee-beans">
        <div className="flex items-center px-8 lg:px-16 py-24 relative z-10">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-4 block">Community Hub</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Where Community Comes Together</h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-600 mb-8">Join us for coffee tastings, live music, and neighborhood gatherings</p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <a href="#events" className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300">See Upcoming Events</a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x1000/?coffee-shop-community-event-people-laughing" 
            alt="Community gathering at Bean & Brew" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/30 to-amber-700/40" />
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="events" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Upcoming Events</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <FadeInUp key={event.title} delay={index * 100 + 100}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-center flex-none bg-amber-50 rounded-xl p-4">
                        <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{event.month}</div>
                        <div className="text-2xl font-black text-amber-700">{event.day}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                        <p className="text-sm text-amber-600 font-medium mb-3">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Event Memories</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">Capturing the vibrant community atmosphere from our past events</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1200x600/?cozy-desert-coffee-shop-interior-warm-lighting" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-orange-800/70 to-amber-700/80" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Be the first to know about upcoming events, special tastings, and community gatherings at Bean & Brew</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-amber-800 font-bold rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Stay Connected
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
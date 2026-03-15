"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const events = [
    {
      title: "Saturday Coffee Cupping",
      date: "Every Saturday 10 AM",
      description: "Learn to taste coffee like a pro with guided cupping sessions",
      month: "SAT",
      day: "10",
      time: "AM"
    },
    {
      title: "Latte Art Workshop",
      date: "First Friday Monthly",
      description: "Master the art of foam design with our expert baristas",
      month: "FRI",
      day: "1st",
      time: "7PM"
    },
    {
      title: "Origin Stories Tasting",
      date: "Third Thursday Monthly",
      description: "Journey through single-origin coffees from around the world",
      month: "THU",
      day: "3rd",
      time: "6PM"
    },
    {
      title: "Brewing Methods Workshop",
      date: "Second Saturday Monthly",
      description: "Explore pour-over, French press, and cold brew techniques",
      month: "SAT",
      day: "2nd",
      time: "2PM"
    }
  ];

  const galleryImages = [
    {
      url: "https://source.unsplash.com/600x800/?people+enjoying+coffee+in+upscale+cafe+atmosphere",
      alt: "Coffee enthusiasts at cupping event"
    },
    {
      url: "https://source.unsplash.com/600x400/?specialty+coffee+barista+pouring+latte+art+foam",
      alt: "Latte art workshop in progress"
    },
    {
      url: "https://source.unsplash.com/600x700/?coffee+cupping+tasting+professional+setup",
      alt: "Professional coffee cupping setup"
    },
    {
      url: "https://source.unsplash.com/600x500/?modern+coffee+shop+interior+desert+southwest+arizona",
      alt: "Event space at Bean & Brew"
    },
    {
      url: "https://source.unsplash.com/600x600/?coffee+beans+roasting+close+up+macro+photography",
      alt: "Fresh roasted beans for tasting"
    },
    {
      url: "https://source.unsplash.com/600x750/?people+enjoying+coffee+in+upscale+cafe+atmosphere",
      alt: "Community gathering at coffee event"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.05) 0%, transparent 50%);
        }
        
        .event-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .event-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-item:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x1080/?coffee+cupping+tasting+professional+setup" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Coffee Events & Community Gatherings
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us for tastings, workshops, and special coffee experiences
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#events" 
                className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                View Events
              </a>
              <a 
                href="#gallery" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Past Events
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="events" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Immerse yourself in the world of specialty coffee through our curated events and educational experiences
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <FadeInUp key={event.title} delay={index * 100}>
                <div className="flex gap-8 p-8 rounded-3xl border border-amber-100 bg-white event-hover shadow-sm">
                  <div className="text-center flex-none">
                    <div className="text-sm font-bold text-amber-700 uppercase tracking-wide mb-1">
                      {event.month}
                    </div>
                    <div className="text-4xl font-black text-gray-900 mb-1">
                      {event.day}
                    </div>
                    <div className="text-sm font-semibold text-amber-600">
                      {event.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                      <button className="text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <FadeInUp delay={200}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 bg-amber-50 px-8 py-4 rounded-2xl">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                <p className="text-lg font-medium text-gray-800">
                  All events include complimentary coffee tastings
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Event Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the vibrant community atmosphere at our coffee events through moments captured from past gatherings
              </p>
            </div>
          </FadeInUp>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <FadeInUp key={index} delay={index * 100}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm gallery-item">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full" 
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <FadeInUp delay={200}>
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-8">
                Want to stay updated on our latest events?
              </p>
              <button className="px-8 py-4 bg-amber-700 text-white font-bold rounded-full text-lg hover:bg-amber-800 transition-all duration-300 hover:scale-105">
                Join Our Newsletter
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://source.unsplash.com/1920x800/?scottsdale+arizona+desert+landscape+sunset" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Coffee Community?
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Reserve your spot at our next event and discover what makes Bean & Brew Coffee a gathering place for coffee enthusiasts
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-amber-800 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300">
                Reserve Your Spot
              </button>
              <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-amber-800 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
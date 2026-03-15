"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function EventsPage() {
  const events = [
    {
      title: "Friday Night Jazz",
      date: "Every Friday 7-9 PM",
      description: "Local musicians perform in our intimate setting",
      month: "FRI",
      day: "7PM"
    },
    {
      title: "Saturday Coffee Cupping",
      date: "First Saturday Monthly 10 AM",
      description: "Learn to taste coffee like a pro with guided tastings",
      month: "SAT",
      day: "1st"
    },
    {
      title: "Sunday Community Brunch",
      date: "Every Sunday 9 AM - 2 PM",
      description: "Extended menu and relaxed atmosphere for weekend gathering",
      month: "SUN",
      day: "9AM"
    }
  ];

  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x500/?coffee shop live music acoustic guitar intimate setting",
      alt: "Live music performance at Bean & Brew"
    },
    {
      url: "https://source.unsplash.com/400x600/?cozy coffee shop community people working reading",
      alt: "Community gathering at Bean & Brew"
    },
    {
      url: "https://source.unsplash.com/400x450/?coffee tasting cupping beans professional",
      alt: "Coffee cupping session"
    },
    {
      url: "https://source.unsplash.com/400x550/?brunch food coffee shop friends eating",
      alt: "Community brunch gathering"
    },
    {
      url: "https://source.unsplash.com/400x480/?jazz musician guitar coffee shop atmosphere",
      alt: "Jazz musician performing"
    },
    {
      url: "https://source.unsplash.com/400x520/?people laughing coffee shop community event",
      alt: "Community event memories"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.1) 1px, transparent 1px);
          background-size: 60px 60px, 80px 80px, 70px 70px;
          background-position: 0 0, 30px 30px, 15px 45px;
        }
        
        .heat-wave {
          animation: heat-wave 3s ease-in-out infinite;
        }
        
        @keyframes heat-wave {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-2px) scale(1.01); }
        }
        
        .desert-gradient {
          background: linear-gradient(135deg, 
            #8B4513 0%, 
            #D2691E 25%, 
            #CD853F 50%, 
            #DEB887 75%, 
            #F5DEB3 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-8 lg:px-16 py-24 coffee-bean-pattern">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4 block">
                Community & Connection
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-amber-900">
                More Than Coffee
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-amber-800/80 mb-8">
                Join us for live music, tastings, and community gatherings
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#event-listing" className="px-8 py-4 bg-amber-800 text-white rounded-lg font-medium hover:bg-amber-900 transition">
                  See All Events
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-amber-800 text-amber-800 rounded-lg font-medium hover:bg-amber-800 hover:text-white transition">
                  Join Our Newsletter
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-screen">
          <img 
            src="https://source.unsplash.com/800x1000/?coffee shop live music acoustic guitar intimate setting" 
            alt="Live music at Bean & Brew" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-800/30 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <FadeInUp delay={400}>
              <p className="text-lg font-medium opacity-90">
                Where community comes alive through music and coffee
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="event-listing" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold mb-16 text-center text-amber-900">
              Upcoming Events
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <FadeInUp key={event.title} delay={100 + index * 100}>
                <div className="bg-white p-8 rounded-2xl border border-amber-200 hover:shadow-lg transition-all duration-300 heat-wave">
                  <div className="flex items-start gap-6">
                    <div className="text-center flex-none">
                      <div className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                        {event.month}
                      </div>
                      <div className="text-3xl font-black text-amber-900 mt-1">
                        {event.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">
                        {event.title}
                      </h3>
                      <p className="text-sm text-amber-700 mb-3 font-medium">
                        {event.date}
                      </p>
                      <p className="text-amber-800/80 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-100">
                    <button className="text-amber-700 font-medium text-sm hover:text-amber-900 transition">
                      Learn More →
                    </button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          <FadeInUp delay={600}>
            <div className="text-center mt-16">
              <p className="text-amber-800/80 mb-6">
                Want to stay updated on all our events and special programming?
              </p>
              <a href="#newsletter" className="inline-block px-8 py-3 bg-amber-800 text-white rounded-lg font-medium hover:bg-amber-900 transition">
                Subscribe to Our Newsletter
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Decorative Band with Coffee Bean Pattern */}
      <div className="h-24 desert-gradient opacity-20 coffee-bean-pattern"></div>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4 text-amber-900">
                Event Memories
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-amber-800/80 text-lg max-w-2xl mx-auto">
                See the energy and joy of our community gatherings
              </p>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={200}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <div className="text-center mt-16">
              <p className="text-amber-800/80 mb-6">
                Follow us on social media to see more from our events and share your own Bean & Brew moments
              </p>
              <div className="flex justify-center gap-6">
                <a href="#" className="px-6 py-3 bg-amber-100 text-amber-800 rounded-lg font-medium hover:bg-amber-200 transition">
                  @beanandbrewaz
                </a>
                <a href="#" className="px-6 py-3 bg-amber-100 text-amber-800 rounded-lg font-medium hover:bg-amber-200 transition">
                  #BeanAndBrewCommunity
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 coffee-bean-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Be the first to know about upcoming events, special tastings, and community gatherings. Plus, get exclusive access to member-only events.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#newsletter" className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition">
                Join Our Newsletter
              </a>
              <a href="#events" className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-amber-900 transition">
                View All Events
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
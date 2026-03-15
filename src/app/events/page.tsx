"use client";

import { FadeInUp } from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  return (
    <>
      <style jsx>{`
        .coffee-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 20px,
            var(--color-accent) 20px,
            var(--color-accent) 22px,
            transparent 22px,
            transparent 40px,
            var(--color-accent) 40px,
            var(--color-accent) 41px,
            transparent 41px,
            transparent 60px,
            var(--color-accent) 60px,
            var(--color-accent) 61px
          );
        }
        
        .parallax-mesa {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        
        @media (max-width: 768px) {
          .parallax-mesa {
            background-attachment: scroll;
          }
        }
      `}</style>

      {/* Hero Section - Split Content */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-8 lg:px-16 py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4 block">
                Community Hub
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Where Coffee Lovers Gather
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-700 mb-8">
                Join us for coffee education, live music, and community connections
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <a 
                  href="#events" 
                  className="px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all duration-300 transform hover:scale-105"
                >
                  View Upcoming Events
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[500px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x1000/?coffee shop community people laptop working together" 
            alt="Coffee community gathering" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30" />
        </div>
      </section>

      {/* Parallax Mesa Section */}
      <section 
        className="relative h-[40vh] flex items-center justify-center parallax-mesa coffee-scatter"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.4), rgba(160, 82, 45, 0.4)), url(https://source.unsplash.com/1600x800/?Arizona desert landscape morning golden hour mountains)`
        }}
      >
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rooted in Community
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg text-white/90">
              Where Scottsdale's coffee culture comes alive
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Event Listing Section */}
      <section id="events" className="py-24 px-6 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Upcoming Events
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Saturday Coffee Cupping",
                date: "Every Saturday 10am",
                description: "Learn to taste coffee like a pro with guided cupping sessions",
                image: "https://source.unsplash.com/400x300/?specialty coffee beans roasting artisanal cafe"
              },
              {
                title: "Acoustic Evenings",
                date: "First Friday Monthly 7pm",
                description: "Local musicians perform while you enjoy evening coffee and pastries",
                image: "https://source.unsplash.com/400x300/?coffee shop community people laptop working together"
              },
              {
                title: "Latte Art Workshop",
                date: "Monthly - Check Schedule",
                description: "Master the art of milk steaming and pouring with our expert baristas",
                image: "https://source.unsplash.com/400x300/?latte art cappuccino wooden table warm lighting"
              }
            ].map((event, index) => (
              <FadeInUp key={event.title} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                      <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Bean Scatter Divider */}
      <div className="h-16 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 relative coffee-scatter" />

      {/* Booking CTA Section */}
      <section id="booking" className="py-24 px-6 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://source.unsplash.com/1600x800/?desert modern coffee shop interior Scottsdale Arizona" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                white 20px,
                white 22px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                white 20px,
                white 22px
              )
            `
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reserve Your Spot
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Popular events fill up quickly. Contact us to reserve your place at our next coffee experience.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact for Reservations
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-400" />
                  <span className="text-sm">Open Daily</span>
                </div>
                <div className="w-px h-4 bg-white/30" />
                <span className="text-sm">(480) 555-BREW</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Community Atmosphere Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp delay={0}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://source.unsplash.com/600x400/?barista pouring coffee pour over brewing process" 
                  alt="Coffee brewing process" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
            </FadeInUp>
            
            <div>
              <FadeInUp delay={100}>
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                  The Bean & Brew Experience
                </span>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
                  More Than Just Coffee
                </h3>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Every event at Bean & Brew is crafted to deepen your appreciation for coffee 
                    while building lasting connections within our Scottsdale community.
                  </p>
                  <p>
                    From the rich aroma of freshly roasted beans to the warm conversations 
                    shared over perfectly crafted lattes, each gathering celebrates the 
                    artistry and culture that makes coffee so special.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-amber-700 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Monthly Events</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-amber-700 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Community Members</div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
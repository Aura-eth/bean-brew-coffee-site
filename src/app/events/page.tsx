"use client"

import FadeInUp from '@/components/fade-in-up'
import ShineBorder from '@/components/shine-border'
import { cn } from '@/lib/utils'

export default function EventsPage() {
  const events = [
    {
      title: "Saturday Morning Cupping",
      date: "Every Saturday 10 AM",
      description: "Learn to taste coffee like a professional",
      month: "SAT",
      day: "10",
      time: "AM"
    },
    {
      title: "Local Artist Showcase",
      date: "First Friday Monthly", 
      description: "Featuring rotating Scottsdale artists and live music",
      month: "FRI",
      day: "1st",
      time: "PM"
    }
  ]

  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x600/?coffee-workshop-people-learning",
      alt: "Coffee cupping workshop"
    },
    {
      url: "https://source.unsplash.com/400x400/?live-music-coffee-shop-acoustic",
      alt: "Live acoustic music"
    },
    {
      url: "https://source.unsplash.com/400x500/?coffee-community-people-laughing",
      alt: "Community gathering"
    },
    {
      url: "https://source.unsplash.com/400x450/?artist-painting-coffee-shop",
      alt: "Local artist showcase"
    },
    {
      url: "https://source.unsplash.com/400x550/?coffee-education-barista-teaching",
      alt: "Coffee education session"
    },
    {
      url: "https://source.unsplash.com/400x480/?coffee-tasting-notes-beans",
      alt: "Coffee tasting notes"
    }
  ]

  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter::before {
          content: '';
          position: absolute;
          top: 20%;
          right: 10%;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle at 30% 40%, #8B4513 20%, #D2691E 40%, transparent 70%);
          border-radius: 60% 40% 60% 40%;
          opacity: 0.1;
          transform: rotate(45deg);
        }
        .coffee-bean-scatter::after {
          content: '';
          position: absolute;
          bottom: 30%;
          left: 8%;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at 30% 40%, #A0522D 20%, #CD853F 40%, transparent 70%);
          border-radius: 60% 40% 60% 40%;
          opacity: 0.08;
          transform: rotate(-30deg);
        }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      <main>
        {/* Hero Section - Split Content */}
        <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative coffee-bean-scatter">
          <div className="flex items-center px-8 lg:px-16 py-24">
            <div className="max-w-lg">
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block" style={{color: 'var(--color-primary)'}}>Community Hub</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                  More Than Coffee
                </h1>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p className="text-lg mb-8" style={{color: 'var(--color-muted)', lineHeight: '1.7'}}>
                  Join our community for events, education, and connection
                </p>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="flex gap-4">
                  <ShineBorder borderRadius={8} borderWidth={2} duration={3} color={['#D97706', '#F59E0B', '#FCD34D']}>
                    <a href="#events" className="px-8 py-4 text-white font-semibold rounded-lg block" style={{backgroundColor: 'var(--color-primary)'}}>
                      See Events
                    </a>
                  </ShineBorder>
                </div>
              </FadeInUp>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://source.unsplash.com/800x1000/?modern-coffee-shop-community-people-laptops-conversation" 
              alt="Community coffee space" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-orange-800/10" />
          </div>
        </section>

        {/* Event Listing Section */}
        <section id="events" className="py-24 px-6" style={{backgroundColor: 'var(--color-bg)'}}>
          <div className="max-w-5xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-16 text-center" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Upcoming Events
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <FadeInUp key={event.title} delay={index * 150}>
                  <div className="flex gap-6 p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg" style={{backgroundColor: 'var(--color-surface)', borderColor: 'var(--border)'}}>
                    <div className="text-center flex-none">
                      <div className="text-sm font-semibold uppercase" style={{color: 'var(--color-primary)'}}>
                        {event.month}
                      </div>
                      <div className="text-4xl font-black" style={{color: 'var(--color-text)'}}>
                        {event.day}
                      </div>
                      <div className="text-xs" style={{color: 'var(--color-muted)'}}>
                        {event.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-text)'}}>
                        {event.title}
                      </h3>
                      <p className="text-sm mb-3" style={{color: 'var(--color-primary)'}}>
                        {event.date}
                      </p>
                      <p style={{color: 'var(--color-muted)', lineHeight: '1.6'}}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Atmospheric Break - Full Bleed Image */}
        <section className="relative h-[60vh] flex items-center justify-center parallax-bg" style={{
          backgroundImage: `url(https://source.unsplash.com/1600x900/?desert-sunrise-orange-warm-gradient-southwestern)`
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-orange-800/50 to-yellow-800/60" />
          <FadeInUp delay={0}>
            <div className="relative text-center text-white px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Where Stories Brew
              </h2>
              <p className="text-xl text-white/80">
                Every gathering tells a story, every cup creates connection
              </p>
            </div>
          </FadeInUp>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6" style={{backgroundColor: 'var(--color-surface)'}}>
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Community Moments
              </h2>
            </FadeInUp>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <FadeInUp key={index} delay={index * 100}>
                  <div className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full hover:scale-105 transition duration-700" 
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 text-white relative overflow-hidden" style={{backgroundColor: 'var(--color-primary)'}}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full" style={{background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)'}} />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full" style={{background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)'}} />
            <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full" style={{background: 'radial-gradient(circle, #D97706 0%, transparent 70%)'}} />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
                Ready to Join Our Community?
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80 mb-10">
                Experience the warmth of connection over exceptional coffee
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition">
                  Visit Us Today
                </a>
                <a href="/menu" className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition">
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
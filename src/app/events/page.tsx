'use client';

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function Events() {
  const upcomingEvents = [
    {
      month: 'DEC',
      day: '15',
      title: 'Acoustic Evening with Local Artists',
      time: '7:00 PM - 10:00 PM',
      description: 'Intimate acoustic performances featuring Scottsdale\'s emerging musicians paired with our signature roasts.',
      type: 'Live Music'
    },
    {
      month: 'DEC',
      day: '22',
      title: 'Ethiopian Coffee Cupping Experience',
      time: '2:00 PM - 4:00 PM',
      description: 'Learn the art of coffee tasting with our expert roasters. Discover the complex flavors of single-origin Ethiopian beans.',
      type: 'Coffee Education'
    },
    {
      month: 'JAN',
      day: '05',
      title: 'Community Art Showcase Opening',
      time: '6:00 PM - 9:00 PM',
      description: 'Celebrating local desert artists with an evening of art, conversation, and craft coffee.',
      type: 'Art & Culture'
    },
    {
      month: 'JAN',
      day: '12',
      title: 'Saturday Morning Coffee & Connection',
      time: '9:00 AM - 11:00 AM',
      description: 'Weekly community meetup for coffee lovers, remote workers, and neighbors to connect.',
      type: 'Community'
    },
    {
      month: 'JAN',
      day: '19',
      title: 'Latte Art Workshop',
      time: '10:00 AM - 12:00 PM',
      description: 'Hands-on workshop learning the fundamentals of creating beautiful latte art designs.',
      type: 'Workshop'
    },
    {
      month: 'JAN',
      day: '26',
      title: 'Poetry & Pour Over Evening',
      time: '7:30 PM - 9:30 PM',
      description: 'Open mic poetry night featuring local writers, accompanied by our finest pour over selections.',
      type: 'Literary Arts'
    }
  ];

  const galleryImages = [
    {
      url: 'https://source.unsplash.com/400x600/?live-music-coffee-house-acoustic-guitar-intimate',
      alt: 'Acoustic performance in our cozy space'
    },
    {
      url: 'https://source.unsplash.com/500x300/?coffee-cupping-tasting-education-beans',
      alt: 'Coffee cupping session with guests'
    },
    {
      url: 'https://source.unsplash.com/350x500/?community-coffee-shop-people-talking-desert',
      alt: 'Community members connecting over coffee'
    },
    {
      url: 'https://source.unsplash.com/600x400/?latte-art-workshop-hands-coffee',
      alt: 'Latte art workshop in progress'
    },
    {
      url: 'https://source.unsplash.com/300x400/?coffee-shop-art-gallery-local-artists',
      alt: 'Local art displayed in our space'
    },
    {
      url: 'https://source.unsplash.com/450x350/?poetry-reading-coffee-house-intimate-lighting',
      alt: 'Poetry evening with warm lighting'
    },
    {
      url: 'https://source.unsplash.com/400x500/?coffee-community-gathering-scottsdale-desert',
      alt: 'Weekend community gathering'
    },
    {
      url: 'https://source.unsplash.com/550x400/?musician-acoustic-guitar-coffee-shop-performance',
      alt: 'Local musician performing'
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(139, 69, 19, 0.2);
          background: radial-gradient(circle at 30% 30%, transparent 40%, rgba(139, 69, 19, 0.05) 45%, transparent 50%);
        }
        .coffee-ring-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          right: 10%;
        }
        .coffee-ring-2 {
          width: 120px;
          height: 120px;
          bottom: 30%;
          left: 5%;
        }
        .coffee-ring-3 {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 20%;
        }
        .floating-bean {
          position: absolute;
          width: 8px;
          height: 12px;
          background: #8B4513;
          border-radius: 40% 60% 60% 40%;
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }
        .floating-bean:nth-child(1) { animation-delay: 0s; }
        .floating-bean:nth-child(2) { animation-delay: 2s; }
        .floating-bean:nth-child(3) { animation-delay: 4s; }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?live-music-coffee-house-acoustic-guitar-intimate" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* Floating coffee beans */}
          <div className="floating-bean" style={{top: '20%', left: '15%'}}></div>
          <div className="floating-bean" style={{top: '40%', right: '25%'}}></div>
          <div className="floating-bean" style={{bottom: '30%', left: '10%'}}></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Where Community Comes Alive
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Live music, coffee education, and connections that matter
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <a 
                href="#upcoming-events" 
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition duration-300 transform hover:scale-105"
              >
                See Upcoming Events
              </a>
            </FadeInUp>
          </div>
          
          {/* Coffee ring stains */}
          <div className="coffee-ring coffee-ring-1"></div>
          <div className="coffee-ring coffee-ring-2"></div>
        </section>

        {/* Event Listing Section */}
        <section id="upcoming-events" className="py-24 px-6 bg-gradient-to-b from-var(--color-bg) to-var(--color-surface)">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-var(--color-text)">
                  Upcoming Events
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-lg text-var(--color-muted) max-w-2xl mx-auto">
                  Regular programming including acoustic nights, coffee cupping sessions, local artist showcases, and community meetups
                </p>
              </FadeInUp>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <FadeInUp key={event.title} delay={index * 100}>
                  <div className="flex gap-6 p-8 rounded-2xl bg-white border border-var(--color-surface) hover:shadow-xl transition duration-300 group">
                    <div className="text-center flex-none">
                      <div className="text-sm font-semibold text-var(--color-primary) uppercase tracking-wide">
                        {event.month}
                      </div>
                      <div className="text-4xl font-black text-var(--color-text) group-hover:text-var(--color-primary) transition">
                        {event.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-var(--color-accent)/20 text-var(--color-accent) text-xs font-medium rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-var(--color-text)">
                        {event.title}
                      </h3>
                      <p className="text-sm text-var(--color-primary) font-medium mb-3">
                        {event.time}
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
          
          {/* Coffee ring stain */}
          <div className="coffee-ring coffee-ring-3"></div>
        </section>

        {/* Atmospheric Break */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x600/?coffee-shop-community-people-working-laptops" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative text-center text-white px-6">
            <FadeInUp delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every Event Tells a Story
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg text-white/80 max-w-xl mx-auto">
                From intimate acoustic sets to educational coffee journeys, each gathering strengthens our desert community
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-var(--color-text)">
                  Event Highlights
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-lg text-var(--color-muted) max-w-2xl mx-auto">
                  Moments from our vibrant community gatherings
                </p>
              </FadeInUp>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <FadeInUp key={index} delay={index * 50}>
                  <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full hover:scale-110 transition duration-700 group-hover:brightness-110" 
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-var(--color-primary) to-var(--color-secondary) text-white relative overflow-hidden">
          {/* Floating coffee beans */}
          <div className="floating-bean" style={{top: '20%', left: '20%'}}></div>
          <div className="floating-bean" style={{bottom: '20%', right: '15%'}}></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Next Gathering
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Stay connected with our community events, exclusive tastings, and intimate performances that make Bean & Brew a hub for desert culture
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition transform hover:scale-105"
                >
                  Get Event Updates
                </a>
                <a 
                  href="/menu" 
                  className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-black transition transform hover:scale-105"
                >
                  View Our Menu
                </a>
              </div>
            </FadeInUp>
          </div>
          
          {/* Coffee ring stains */}
          <div className="coffee-ring" style={{
            width: '100px',
            height: '100px',
            top: '10%',
            right: '10%',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          <div className="coffee-ring" style={{
            width: '150px',
            height: '150px',
            bottom: '10%',
            left: '5%',
            border: '2px solid rgba(255, 255, 255, 0.15)'
          }}></div>
        </section>
      </main>
    </>
  );
}
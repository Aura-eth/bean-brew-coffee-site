"use client"

import { FadeInUp } from '@/components/fade-in-up'

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Latte art coffee cup",
      height: "h-64"
    },
    {
      url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee shop interior",
      height: "h-80"
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee beans close up",
      height: "h-72"
    },
    {
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Desert landscape Arizona",
      height: "h-64"
    },
    {
      url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "People working in cafe",
      height: "h-80"
    },
    {
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Pour over coffee brewing",
      height: "h-72"
    },
    {
      url: "https://images.unsplash.com/photo-1593696954816-0c8b83dc4cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee cupping session",
      height: "h-64"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Saguaro cactus desert",
      height: "h-80"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Latte art heart",
      height: "h-72"
    },
    {
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee shop barista at work",
      height: "h-64"
    },
    {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Coffee brewing equipment",
      height: "h-72"
    },
    {
      url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Modern coffee shop interior",
      height: "h-80"
    }
  ]

  const events = [
    {
      name: "Saturday Coffee Cupping",
      date: "Every Saturday 10 AM",
      description: "Join us for guided tastings of our latest single-origin selections"
    },
    {
      name: "Community Art Night", 
      date: "First Friday Monthly",
      description: "Local artists showcase their work while we serve specialty drinks"
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes particles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        .coffee-particles {
          position: fixed;
          top: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .coffee-particles::before,
        .coffee-particles::after {
          content: '●';
          position: absolute;
          color: #8B4513;
          font-size: 8px;
          animation: particles 4s infinite;
        }
        .coffee-particles::before {
          left: 10%;
          animation-delay: 0s;
        }
        .coffee-particles::after {
          left: 90%;
          animation-delay: 2s;
        }
        .rock-divider {
          -webkit-mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 C20 5, 30 0, 50 10 C70 20, 80 0, 100 15 L100 20 L0 20' fill='white'/%3E%3C/svg%3E") repeat-x;
          mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 C20 5, 30 0, 50 10 C70 20, 80 0, 100 15 L100 20 L0 20' fill='white'/%3E%3C/svg%3E") repeat-x;
        }
      `}</style>

      <div className="coffee-particles"></div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal%20coffee%20shop%20interior%20desert%20modern%20Scottsdale%20Arizona" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
              Life at Bean & Brew
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              Moments of craft, community, and coffee culture captured
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${img.height}`}
                  style={{
                    transitionDelay: `${i * 50}ms`
                  }}
                >
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-700" 
                    loading={i > 6 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Rock Divider */}
      <div className="rock-divider h-8 bg-gradient-to-r from-amber-100 to-orange-50"></div>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
              Our Visual Story
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className={`break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${img.height}`}
                  style={{
                    transitionDelay: `${i * 50}ms`
                  }}
                >
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-700" 
                    loading={i > 6 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Rock Divider */}
      <div className="rock-divider h-8 bg-gradient-to-r from-orange-50 to-amber-100 transform rotate-180"></div>

      {/* Event Listing Section */}
      <section id="event-listing" className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
              Upcoming Events
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <FadeInUp key={event.name} delay={i * 100 + 100}>
                <div className="flex gap-6 p-8 rounded-2xl border border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:border-amber-300 group">
                  <div className="text-center flex-none">
                    <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{color: 'var(--color-primary)'}}>
                      {event.date.includes('Every') ? 'Weekly' : 'Monthly'}
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform duration-300" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
                      {event.date.includes('Every') ? '★' : '●'}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                      {event.name}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{color: 'var(--color-primary)'}}>
                      {event.date}
                    </p>
                    <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <FadeInUp delay={300}>
            <div className="text-center mt-16">
              <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                  Stay Connected
                </h3>
                <p className="text-gray-600 mb-6 max-w-md" style={{fontFamily: 'var(--font-body)'}}>
                  Follow us on social media or sign up for our newsletter to never miss an event at Bean & Brew.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: 'white'
                    }}
                  >
                    Join Our Newsletter
                  </a>
                  <a 
                    href="#" 
                    className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-primary)'
                    }}
                  >
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?desert%20landscape%20Arizona%20saguaro%20cactus%20warm%20morning%20light" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
              Where Desert Meets Coffee Culture
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              Every cup tells a story of our Scottsdale community, crafted with the same care and attention as the desert landscape that surrounds us.
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
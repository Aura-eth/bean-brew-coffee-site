"use client";

import { FadeInUp } from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function About() {
  const galleryImages = [
    {
      url: "https://source.unsplash.com/400x600/?specialty-coffee-beans-roasting-artisanal-cafe",
      alt: "Artisanal coffee beans being roasted"
    },
    {
      url: "https://source.unsplash.com/400x500/?barista-pouring-coffee-pour-over-brewing-process",
      alt: "Barista crafting pour-over coffee"
    },
    {
      url: "https://source.unsplash.com/400x700/?latte-art-cappuccino-wooden-table-warm-lighting",
      alt: "Beautiful latte art on wooden table"
    },
    {
      url: "https://source.unsplash.com/400x550/?coffee-shop-community-people-laptop-working-together",
      alt: "Community gathering at coffee shop"
    },
    {
      url: "https://source.unsplash.com/400x650/?desert-modern-coffee-shop-interior-Scottsdale-Arizona",
      alt: "Modern coffee shop interior"
    },
    {
      url: "https://source.unsplash.com/400x480/?Arizona-desert-landscape-morning-golden-hour-mountains",
      alt: "Arizona desert morning landscape"
    }
  ];

  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter {
          background-image: 
            radial-gradient(3px 3px at 20% 30%, var(--color-accent), transparent),
            radial-gradient(2px 2px at 40% 70%, var(--color-primary), transparent),
            radial-gradient(3px 3px at 90% 40%, var(--color-secondary), transparent),
            radial-gradient(2px 2px at 10% 90%, var(--color-accent), transparent);
          background-size: 180px 180px;
          opacity: 0.05;
        }
        
        .desert-parallax {
          background-image: linear-gradient(45deg, transparent 0%, rgba(139, 69, 19, 0.02) 25%, transparent 50%, rgba(160, 82, 45, 0.02) 75%, transparent 100%);
          background-size: 200px 200px;
        }
        
        .curved-section {
          border-radius: 60px 60px 0 0;
        }
        
        .curved-section-bottom {
          border-radius: 0 0 60px 60px;
        }
      `}</style>

      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Story Section */}
        <section id="story" className="relative py-24 px-6">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x800/?Arizona-desert-landscape-morning-golden-hour-mountains" 
              alt="" 
              className="w-full h-full object-cover"
              style={{
                filter: 'sepia(10%) saturate(120%) brightness(90%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-900/80" />
          </div>
          
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="coffee-bean-scatter absolute inset-0 pointer-events-none" />
            
            <FadeInUp delay={0}>
              <div className="text-white">
                <span className="text-sm font-semibold text-amber-200 uppercase tracking-wide block mb-4">
                  Our Journey
                </span>
                <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold mb-6 leading-tight">
                  Rooted in Community
                </h1>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2019, Bean & Brew Coffee was born from a passion for exceptional coffee and genuine community connection. We saw Scottsdale needed a place where coffee quality meets desert hospitality, creating a space where neighbors become friends over perfectly crafted cups.
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Team Profiles Section */}
        <section id="team-profiles" className="py-24 px-6 bg-[var(--color-surface)] curved-section relative">
          <div className="desert-parallax absolute inset-0 opacity-30" />
          
          <div className="max-w-5xl mx-auto relative">
            <FadeInUp delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold mb-4 text-[var(--color-text)]">
                  Meet Our Coffee Artisans
                </h2>
                <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
              </div>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <FadeInUp delay={100}>
                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-[var(--color-primary)]/20">
                    <img 
                      src="https://source.unsplash.com/300x300/?professional-coffee-roaster-man-portrait" 
                      alt="Alex Rodriguez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--color-text)]">
                    Alex Rodriguez
                  </h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-4 text-lg">
                    Founder & Head Roaster
                  </p>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Former tech professional turned coffee enthusiast, bringing precision and passion to every roast.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-[var(--color-primary)]/20">
                    <img 
                      src="https://source.unsplash.com/300x300/?professional-female-barista-latte-art" 
                      alt="Maria Santos" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--color-text)]">
                    Maria Santos
                  </h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-4 text-lg">
                    Lead Barista
                  </p>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Coffee competition veteran with a talent for latte art and customer connection.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)] curved-section-bottom relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold mb-6 text-[var(--color-text)]">
                  Behind the Beans
                </h2>
                <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
                  Capturing the moments that make Bean & Brew special — from sunrise roasting sessions to community gatherings
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full hover:scale-105 transition-transform duration-700 group-hover:saturate-110" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[var(--color-accent)]/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[var(--color-primary)]/20 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[var(--color-secondary)] rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[var(--color-accent)] rounded-full" />
        </section>

        {/* Community Connection CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold mb-6 text-[var(--color-text)]">
                Experience the Bean & Brew Difference
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
                Join our community of coffee lovers in the heart of Scottsdale
              </p>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/menu" 
                  className="px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary)]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Our Menu
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Visit Us Today
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
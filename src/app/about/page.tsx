"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <style jsx>{`
        .coffee-bean-float {
          animation: float 6s ease-in-out infinite;
        }
        .coffee-bean-float:nth-child(2n) {
          animation-delay: -2s;
        }
        .coffee-bean-float:nth-child(3n) {
          animation-delay: -4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        .desert-gradient {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E 25%, #CD853F 50%, #DEB887 75%, #F4A460 100%);
        }
      `}</style>

      {/* Hero Section with Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?scottsdale%20arizona%20desert%20landscape%20coffee%20beans" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-900/50 to-amber-800/60" />
        
        {/* Floating Coffee Bean Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="coffee-bean-float absolute top-1/4 left-1/4 w-3 h-5 bg-amber-800 rounded-full opacity-20 transform rotate-45"></div>
          <div className="coffee-bean-float absolute top-1/3 right-1/3 w-2 h-4 bg-amber-700 rounded-full opacity-15 transform rotate-12"></div>
          <div className="coffee-bean-float absolute bottom-1/3 left-1/2 w-4 h-6 bg-orange-800 rounded-full opacity-10 transform -rotate-30"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-300 mb-4 block">Our Journey</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[var(--font-heading)]">Our Story</h1>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Discover the passion and craftsmanship behind every cup at Bean & Brew Coffee</p>
          </FadeInUp>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-[var(--space-section)] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0}>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="https://source.unsplash.com/800x600/?cozy%20desert%20coffee%20shop%20interior%20warm%20lighting" 
                alt="" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <div>
              <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-4 block">Since 2016</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-heading)] text-[var(--color-text)]">
                Rooted in Scottsdale, Crafted with Love
              </h2>
              <div className="space-y-6 text-[var(--color-muted)] text-lg leading-relaxed">
                <p>
                  Bean & Brew began as a dream to bring authentic coffee culture to Scottsdale's growing community. Founded by coffee enthusiasts who fell in love with both the craft of roasting and the warmth of desert hospitality, we've spent eight years perfecting our approach to everything from bean selection to customer service.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-[var(--space-section)] px-6 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-heading)] text-[var(--color-text)]">
              Meet Our Coffee Craftspeople
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Alex Rodriguez",
                role: "Head Roaster",
                bio: "With 15 years in coffee, Alex brings precision and passion to every batch",
                imageQuery: "professional%20coffee%20roaster%20portrait"
              },
              {
                name: "Maria Chen",
                role: "Lead Barista",
                bio: "Former latte art champion with an eye for the perfect extraction",
                imageQuery: "barista%20latte%20art%20champion%20portrait"
              },
              {
                name: "David Thompson",
                role: "Community Manager",
                bio: "Connects our coffee community through events and partnerships",
                imageQuery: "coffee%20shop%20community%20manager%20portrait"
              }
            ].map((member, index) => (
              <FadeInUp key={member.name} delay={index * 100}>
                <div className="text-center group">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-transparent group-hover:ring-[var(--color-primary)] transition-all duration-300">
                    <img 
                      src={`https://source.unsplash.com/400x400/?${member.imageQuery}`} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)]">{member.name}</h3>
                  <p className="text-[var(--color-primary)] font-medium mb-3">{member.role}</p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section id="process-steps" className="py-[var(--space-section)] px-6 relative">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisan%20coffee%20roasting%20beans%20in%20copper%20roaster" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 desert-gradient opacity-90" />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white font-[var(--font-heading)]">
              From Bean to Cup Excellence
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-white/30" />
            
            {[
              {
                number: "01",
                title: "Source",
                description: "Hand-select premium beans from sustainable farms"
              },
              {
                number: "02",
                title: "Roast",
                description: "Small-batch roasting with precise temperature control"
              },
              {
                number: "03",
                title: "Brew",
                description: "Expert extraction techniques for optimal flavor"
              },
              {
                number: "04",
                title: "Serve",
                description: "Delivered with care and community spirit"
              }
            ].map((step, index) => (
              <FadeInUp key={step.number} delay={index * 100}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-[var(--space-section)] px-6 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-heading)]">
              Experience Our Craft
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Visit us in Scottsdale and taste the difference that passion, quality, and desert hospitality make.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu" 
                className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full text-lg hover:bg-white/90 transition-colors duration-300"
              >
                View Our Menu
              </a>
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                Visit Us Today
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
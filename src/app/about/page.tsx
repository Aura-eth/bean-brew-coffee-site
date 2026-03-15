"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 0%, transparent 20%),
                            radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.08) 0%, transparent 20%),
                            radial-gradient(circle at 50% 50%, rgba(101, 67, 33, 0.06) 0%, transparent 25%);
        }
        .desert-gradient-hover {
          transition: background 0.3s ease-out;
        }
        .desert-gradient-hover:hover {
          background: linear-gradient(135deg, var(--color-primary), #ff7043);
          color: white;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x1080/?artisanal coffee shop interior warm lighting scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About Bean & Brew</h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Discover the story behind Scottsdale's beloved community coffee destination, where desert-inspired creativity meets artisanal craftsmanship.</p>
          </FadeInUp>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://source.unsplash.com/800x600/?specialty coffee beans roasting desert modern cafe" 
              alt="Coffee roasting process" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Rooted in Community, Inspired by Desert</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-amber-900">Our Story</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                <p>Founded in 2016, Bean & Brew Coffee was born from a simple dream: to create a space where Scottsdale neighbors could gather over exceptional coffee. What started as a passion project has grown into a beloved community cornerstone, where every cup tells a story of craftsmanship, connection, and desert-inspired creativity.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">Meet Our Team</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Maria Rodriguez",
                role: "Founder & Owner",
                bio: "A former corporate executive who traded boardrooms for coffee beans and never looked back",
                image: "https://source.unsplash.com/400x400/?portrait business woman coffee"
              },
              {
                name: "Jake Thompson",
                role: "Head Roaster",
                bio: "Brings 12 years of roasting expertise and an obsession with perfect flavor profiles",
                image: "https://source.unsplash.com/400x400/?portrait man coffee roaster professional"
              },
              {
                name: "Emma Chen",
                role: "Lead Barista",
                bio: "Latte art champion who believes every cup should be as beautiful as it is delicious",
                image: "https://source.unsplash.com/400x400/?portrait woman barista coffee art"
              }
            ].map((member, i) => (
              <FadeInUp key={member.name} delay={i * 100}>
                <div className="text-center desert-gradient-hover p-8 rounded-2xl transition-all duration-300">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-amber-200">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values Feature Highlight Section */}
      <section id="feature-highlight" className="py-24 px-6 relative overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x800/?desert landscape sunset warm tones arizona scottsdale" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-orange-800/60 to-amber-900/90" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Values</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-white/80 max-w-xl mx-auto text-lg">The principles that guide everything we do at Bean & Brew Coffee</p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Sustainability First",
                description: "Committed to eco-friendly practices and supporting sustainable farming",
                icon: "🌱"
              },
              {
                title: "Local Partnership",
                description: "Sourcing ingredients and partnering with Scottsdale businesses whenever possible",
                icon: "🤝"
              },
              {
                title: "Community Impact",
                description: "Supporting local causes and creating space for meaningful connections",
                icon: "❤️"
              }
            ].map((value, i) => (
              <FadeInUp key={value.title} delay={i * 100}>
                <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmospheric Image Band */}
      <section className="relative h-[60vh] flex items-center justify-center coffee-bean-pattern">
        <img 
          src="https://source.unsplash.com/1920x800/?barista pouring latte art sunny coffee shop" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-transparent to-orange-800/70" />
        <div className="relative text-center text-white px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Crafted with Passion</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Every cup is a testament to our commitment to excellence and community</p>
          </FadeInUp>
        </div>
      </section>

      {/* Visit Us CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">Experience Bean & Brew</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">Visit us in Scottsdale and discover what makes our coffee community so special. We can't wait to share our passion with you.</p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu" 
                className="inline-block px-10 py-4 bg-amber-800 text-white font-bold rounded-full text-lg hover:bg-amber-900 transition duration-300 desert-gradient-hover"
              >
                View Our Menu
              </a>
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 border-2 border-amber-800 text-amber-800 font-bold rounded-full text-lg hover:bg-amber-800 hover:text-white transition duration-300"
              >
                Find Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
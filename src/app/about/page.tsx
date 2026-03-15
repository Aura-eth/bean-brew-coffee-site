"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <>
      <style jsx>{`
        .coffee-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(2px 2px at 20% 30%, var(--color-primary), transparent),
                            radial-gradient(1px 1px at 80% 20%, var(--color-accent), transparent),
                            radial-gradient(1px 2px at 40% 70%, var(--color-secondary), transparent),
                            radial-gradient(2px 1px at 90% 80%, var(--color-primary), transparent);
          opacity: 0.1;
          animation: scatter 15s linear infinite;
        }
        
        @keyframes scatter {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-3px) rotate(-1deg); }
        }
        
        .linen-texture {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px),
            repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(160, 82, 45, 0.02) 2px, rgba(160, 82, 45, 0.02) 4px);
        }
      `}</style>
      
      <main className="min-h-screen">
        {/* Story Section */}
        <section id="story" className="relative py-32 px-6 overflow-hidden coffee-scatter">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x1080/?artisanal coffee roasting beans desert sunlight" 
              alt="" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/70 to-red-900/60" />
          </div>
          
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-200 mb-4 block">Our Story</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Our Story
                </h1>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p className="text-xl leading-relaxed text-white/90">
                  Born from a passion for exceptional coffee and desert community, Bean & Brew Coffee brings together the best of artisanal coffee culture in the heart of Scottsdale. We believe every cup should be a moment of connection—to the bean's origin, to our craft, and to our community.
                </p>
              </FadeInUp>
            </div>
            
            <div className="relative">
              <FadeInUp delay={300}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://source.unsplash.com/600x700/?modern coffeehouse interior warm lighting scottsdale" 
                    alt="Bean & Brew Coffee interior" 
                    className="w-full h-[500px] object-cover" 
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section id="process-steps" className="py-32 px-6 linen-texture">
          <div className="max-w-5xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-amber-900">From Bean to Brew</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-center text-stone-600 mb-20 text-lg max-w-2xl mx-auto">
                Our meticulous process ensures every cup delivers the perfect balance of flavor, aroma, and craftsmanship.
              </p>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
              
              {[
                {
                  step: "1",
                  title: "Source",
                  description: "Partner with sustainable farms for premium beans"
                },
                {
                  step: "2", 
                  title: "Roast",
                  description: "Small-batch roasting to perfect each bean's profile"
                },
                {
                  step: "3",
                  title: "Brew", 
                  description: "Expert preparation using various brewing methods"
                },
                {
                  step: "4",
                  title: "Serve",
                  description: "Crafted with care for the perfect coffee experience"
                }
              ].map((item, i) => (
                <FadeInUp key={i} delay={i * 100}>
                  <div className="text-center relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10 shadow-xl">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-900">{item.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section id="stats-bar" className="py-20 px-6 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://source.unsplash.com/1920x400/?coffee cupping tasting professional barista hands" 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                number: "5+",
                label: "Years Roasting"
              },
              {
                number: "15", 
                label: "Origin Countries"
              },
              {
                number: "50,000+",
                label: "Cups Served"
              }
            ].map((stat, i) => (
              <FadeInUp key={i} delay={i * 100}>
                <div className="border-l-4 border-amber-200 pl-8 text-left md:text-center md:border-l-0 md:pl-0">
                  <div className="text-6xl md:text-7xl font-black mb-2 text-amber-100">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium uppercase tracking-wide text-amber-200">
                    {stat.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Atmosphere Image Band */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?desert landscape coffee plantation mountains sunrise" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          
          <div className="relative text-center text-white max-w-4xl px-6">
            <FadeInUp delay={0}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Where Desert Meets Bean
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-xl text-white/80 leading-relaxed">
                In the heart of Scottsdale, we've created a space where the rugged beauty of the desert converges with the refined art of coffee craftsmanship.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Community Connection Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <FadeInUp delay={0}>
                <h2 className="text-5xl font-bold mb-6 text-amber-900">More Than Coffee</h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                  We're building connections one cup at a time, creating a gathering place where Scottsdale's community comes together to share stories, ideas, and exceptional coffee.
                </p>
              </FadeInUp>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Partnerships",
                  description: "Supporting Scottsdale businesses and creating meaningful community connections.",
                  image: "https://source.unsplash.com/400x300/?coffee community gathering people talking cafe"
                },
                {
                  title: "Sustainable Sourcing",
                  description: "Working directly with farms to ensure fair trade and environmental responsibility.",
                  image: "https://source.unsplash.com/400x300/?coffee plantation sustainable farming mountains"
                },
                {
                  title: "Artisanal Craft",
                  description: "Every cup is a testament to our commitment to the art and science of coffee.",
                  image: "https://source.unsplash.com/400x300/?latte art pour overhead shot marble counter"
                }
              ].map((item, i) => (
                <FadeInUp key={i} delay={i * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-3 text-amber-900">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
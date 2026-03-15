"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 30%, rgba(101, 67, 33, 0.08) 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, rgba(101, 67, 33, 0.06) 1px, transparent 1px);
          background-size: 40px 40px, 60px 60px;
          animation: float 20s infinite linear;
        }
        
        @keyframes float {
          0% { background-position: 0% 0%, 0% 0%; }
          100% { background-position: 100% 100%, -100% -100%; }
        }
        
        .team-card:hover .team-image {
          transform: scale(1.05);
        }
        
        .team-image {
          transition: transform 0.5s var(--ease-out);
        }
        
        .stat-number {
          background: linear-gradient(135deg, var(--color-primary), #8B4513);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <main className="min-h-screen">
        {/* Story Section */}
        <section id="story" className="py-24 px-6 coffee-bean-pattern">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp delay={0}>
              <div className="rounded-2xl overflow-hidden relative">
                <img 
                  src="https://source.unsplash.com/600x500/?specialty%20coffee%20barista%20pouring%20latte%20art%20foam" 
                  alt="Coffee artisan at work" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent" />
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <div>
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide block mb-4">
                  Our Story
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Crafted with Passion, Rooted in Community
                </h1>
                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Bean & Brew Coffee was born from a simple belief: exceptional coffee brings people together. Founded in the heart of Scottsdale, we've dedicated ourselves to sourcing the finest beans and perfecting the craft of coffee preparation.
                  </p>
                  <p>
                    Our journey began with a passion for quality and a commitment to creating a space where the community could gather, connect, and savor truly exceptional coffee experiences.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Team Profiles Section */}
        <section id="team-profiles" className="py-24 px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                Meet Our Team
              </h2>
            </FadeInUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <FadeInUp delay={100}>
                <div className="team-card bg-white p-8 rounded-2xl shadow-sm border border-stone-200 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 team-image-container">
                    <img 
                      src="https://source.unsplash.com/320x320/?coffee%20professional%20male%20barista" 
                      alt="Alex Chen" 
                      className="w-full h-full object-cover team-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Alex Chen</h3>
                  <p className="text-amber-700 font-medium text-sm uppercase tracking-wide mb-4">
                    Head Roaster & Co-Founder
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With over 10 years in specialty coffee, Alex brings expertise in bean sourcing and roasting perfection to every batch.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="team-card bg-white p-8 rounded-2xl shadow-sm border border-stone-200 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 team-image-container">
                    <img 
                      src="https://source.unsplash.com/320x320/?female%20barista%20coffee%20professional" 
                      alt="Maria Rodriguez" 
                      className="w-full h-full object-cover team-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Maria Rodriguez</h3>
                  <p className="text-amber-700 font-medium text-sm uppercase tracking-wide mb-4">
                    Lead Barista
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    A certified coffee professional with a passion for latte art and creating memorable customer experiences.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section id="stats-bar" className="py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1200x400/?modern%20coffee%20shop%20interior%20desert%20southwest%20arizona" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-900/80 to-stone-900/90" />
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <FadeInUp delay={0}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white stat-number mb-2">
                    5+
                  </div>
                  <div className="text-sm text-amber-100 uppercase tracking-wide font-medium">
                    Years Serving Scottsdale
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white stat-number mb-2">
                    12
                  </div>
                  <div className="text-sm text-amber-100 uppercase tracking-wide font-medium">
                    Coffee Origins Sourced
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white stat-number mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-amber-100 uppercase tracking-wide font-medium">
                    Happy Customers Daily
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-900 to-amber-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Our Craft
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80 mb-10">
                Visit us today and discover what makes Bean & Brew Coffee a Scottsdale favorite.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/menu" 
                  className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105"
                >
                  View Our Menu
                </a>
                <a 
                  href="/contact" 
                  className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Visit Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
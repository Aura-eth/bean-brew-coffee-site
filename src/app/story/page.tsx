"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      <style jsx>{`
        @keyframes coffee-particles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
        }
        .coffee-particle {
          animation: coffee-particles 3s infinite linear;
          animation-delay: var(--delay);
        }
        .desert-divider {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-8 lg:px-16 py-24 relative">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-600 rounded-full coffee-particle"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  '--delay': `${i * 0.5}s`
                } as any}
              />
            ))}
          </div>
          <div className="max-w-lg relative z-10">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-yellow-700 mb-4 block">
                Our Journey
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Rooted in Community
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                The story of bringing world-class coffee culture to the heart of Arizona
              </p>
            </FadeInUp>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&w=800&h=1000&fit=crop" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-orange-900/30" />
        </div>
      </section>

      {/* Desert Divider */}
      <div className="h-16 bg-gradient-to-r from-yellow-100 to-orange-100 desert-divider"></div>

      {/* Story Section */}
      <section id="story" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&w=600&h=500&fit=crop" 
                alt="" 
                className="w-full h-[500px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div>
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
                  Our Beginning
                </span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">
                  Our Beginning
                </h2>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Bean & Brew was born from a simple belief: that great coffee creates great communities. Founded in 2019, we set out to create a space where Scottsdale's diverse community could gather, connect, and enjoy exceptional coffee in an environment that celebrates our desert home.
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Meet the Team
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <FadeInUp delay={100}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face" 
                    alt="Alex Rodriguez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Alex Rodriguez
                </h3>
                <p className="text-yellow-700 font-medium mb-3">
                  Head Roaster & Co-Founder
                </p>
                <p className="text-gray-600">
                  With 12 years of roasting experience, Alex brings passion for coffee craftsmanship to every batch
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b608?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face" 
                    alt="Maria Chen" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Maria Chen
                </h3>
                <p className="text-yellow-700 font-medium mb-3">
                  Café Manager
                </p>
                <p className="text-gray-600">
                  Maria creates the warm, welcoming atmosphere that makes Bean & Brew feel like home
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section id="feature-highlight" className="py-16 relative">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&w=1600&h=800&fit=crop)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <FadeInUp delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Our Values
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInUp delay={100}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-yellow-600/20 flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sustainability
                </h3>
                <p className="text-white/70">
                  Environmental responsibility in sourcing, roasting, and daily operations
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-yellow-600/20 flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Community
                </h3>
                <p className="text-white/70">
                  Supporting local businesses and creating connections among neighbors
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-yellow-600/20 flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Craftsmanship
                </h3>
                <p className="text-white/70">
                  Dedication to the art and science of exceptional coffee
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience Our Story
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-90 mb-10">
              Visit us today and become part of the Bean & Brew community
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-full text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Visit Our Café
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
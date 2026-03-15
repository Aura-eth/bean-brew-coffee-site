"use client"

import FadeInUp from '@/components/fade-in-up'
import { cn } from '@/lib/utils'

const stats = [
  { number: "3", label: "Years Serving Scottsdale" },
  { number: "1,200", label: "Pounds of Local Beans Roasted Monthly" },
  { number: "50+", label: "Community Events Hosted" },
  { number: "15", label: "Local Partners & Suppliers" }
]

const teamProfiles = [
  {
    name: "Coffee Roasting Team",
    role: "Artisan Roasters",
    bio: "Our skilled roasters bring years of experience crafting the perfect roast profiles for our desert climate."
  },
  {
    name: "Barista Team",
    role: "Coffee Craftspeople", 
    bio: "Passionate about coffee and community, our baristas create each drink with care and expertise."
  }
]

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      <style jsx>{`
        .sand-texture {
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(194, 154, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 91, 49, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(184, 134, 91, 0.1) 0%, transparent 50%);
        }
        .coffee-beans::before {
          content: '';
          position: absolute;
          top: 10%;
          right: 10%;
          width: 4px;
          height: 8px;
          background: var(--color-accent);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          transform: rotate(25deg);
          opacity: 0.3;
          box-shadow: 
            15px 25px 0 rgba(139, 91, 49, 0.2),
            -20px 40px 0 rgba(194, 154, 108, 0.2),
            35px -10px 0 rgba(184, 134, 91, 0.2),
            -5px -15px 0 rgba(139, 91, 49, 0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 sand-texture">
        <div className="flex items-center px-8 lg:px-16 py-24">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4 block">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>
                Rooted in the Desert
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-stone-600 mb-8" style={{fontFamily: 'var(--font-body)'}}>
                Our journey from coffee dream to Scottsdale's favorite gathering place
              </p>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x600/?specialty coffee shop interior warm lighting Arizona desert modern" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-900/20 to-amber-900/40" />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden coffee-beans relative">
            <img 
              src="https://source.unsplash.com/600x500/?artisan coffee brewing pour over hands close up warm tones" 
              alt="" 
              className="w-full h-[500px] object-cover" 
            />
          </div>
          <div>
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Our Beginning</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>
                Our Beginning
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-stone-600 text-lg leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                <p>
                  Bean & Brew was born from a simple belief: great coffee brings people together. Founded by local coffee enthusiasts who fell in love with Scottsdale's unique desert beauty, we set out to create more than just a coffee shop. We envisioned a place where the warmth of Southwestern hospitality meets the craft of artisan coffee roasting. Every cup we serve reflects our commitment to quality, community, and the distinctive spirit of the Sonoran Desert.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats-bar" className="py-16 px-6 bg-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1200x400/?Scottsdale Arizona desert morning sunrise mountains coffee cup" 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-amber-800/90" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 100}>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{fontFamily: 'var(--font-heading)'}}>
                  {stat.number}
                </div>
                <div className="text-sm opacity-90 uppercase tracking-wide" style={{fontFamily: 'var(--font-body)'}}>
                  {stat.label}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team-profiles" className="py-24 px-6 bg-stone-50 sand-texture">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>
              Meet Our Team
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamProfiles.map((member, i) => (
              <FadeInUp key={member.name} delay={(i + 1) * 150}>
                <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-stone-900" style={{fontFamily: 'var(--font-heading)'}}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-stone-600" style={{fontFamily: 'var(--font-body)'}}>
                    {member.bio}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Band */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1200x600/?coffee shop community people laptops conversations warm atmosphere" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-amber-900/40 to-stone-900/60" />
        <div className="relative text-center text-white px-6 max-w-3xl">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Where Community Gathers
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80" style={{fontFamily: 'var(--font-body)'}}>
              Every cup tells a story, every conversation builds our community
            </p>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
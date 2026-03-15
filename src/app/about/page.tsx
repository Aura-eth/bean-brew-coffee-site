"use client"

import FadeInUp from "@/components/fade-in-up"
import ShineBorder from "@/components/shine-border"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const storyData = {
    section_title: "Our Story",
    content: "Bean & Brew Coffee was born from a simple dream: to create a space where exceptional coffee meets genuine community. Founded in the heart of Scottsdale, we've been dedicated to sourcing the finest beans, perfecting our craft, and creating a welcoming oasis where neighbors become friends over perfectly brewed cups."
  }

  const teamData = {
    section_title: "Meet Our Team",
    items: [
      {
        name: "Maria Rodriguez",
        role: "Head Roaster",
        bio: "Passionate about the art of roasting, Maria brings 8 years of coffee expertise to every batch."
      },
      {
        name: "Jake Thompson",
        role: "Lead Barista",
        bio: "Latte art champion and coffee educator, Jake loves sharing his knowledge with every customer."
      },
      {
        name: "Emma Chen",
        role: "Community Manager",
        bio: "The friendly face behind our events and community partnerships throughout Scottsdale."
      }
    ]
  }

  const statsData = {
    items: [
      {
        number: "5",
        label: "Years Serving Scottsdale"
      },
      {
        number: "50k+",
        label: "Cups Brewed Monthly"
      },
      {
        number: "15",
        label: "Local Partnerships"
      },
      {
        number: "200+",
        label: "Community Events Hosted"
      }
    ]
  }

  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 80%, var(--color-primary) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 50%),
                          radial-gradient(circle at 40% 40%, var(--color-secondary) 0%, transparent 50%);
          background-size: 100px 100px, 120px 120px, 80px 80px;
          background-position: 0 0, 40px 60px, 80px 20px;
          opacity: 0.05;
        }
        
        .desert-wave {
          background: linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%);
          height: 2px;
          width: 100%;
          animation: desert-shimmer 3s ease-in-out infinite;
        }
        
        @keyframes desert-shimmer {
          0%, 100% { opacity: 0.3; transform: scaleX(0.8); }
          50% { opacity: 0.8; transform: scaleX(1.2); }
        }
        
        .heat-wave {
          animation: heat-distortion 4s ease-in-out infinite;
        }
        
        @keyframes heat-distortion {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.01); }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Story Section */}
        <section id="story" className="py-24 px-6 relative">
          <div className="coffee-bean-pattern absolute inset-0" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://source.unsplash.com/600x500/?artisanal coffee shop interior warm lighting Arizona desert" 
                alt="Bean & Brew Coffee interior" 
                className="w-full h-[500px] object-cover heat-wave" 
              />
            </div>
            <div>
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Since 2019</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                  {storyData.section_title}
                </h1>
              </FadeInUp>
              <FadeInUp delay={100}>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{storyData.content}</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div className="desert-wave mt-8" />
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Team Profiles Section */}
        <section id="team-profiles" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                {teamData.section_title}
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamData.items.map((member, index) => (
                <FadeInUp key={member.name} delay={100 + index * 100}>
                  <ShineBorder 
                    borderRadius={24}
                    borderWidth={2}
                    duration={3}
                    color={["#f59e0b", "#d97706", "#92400e"]}
                    className="bg-white p-8 text-center"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100">
                      <img 
                        src={`https://source.unsplash.com/300x300/?professional barista coffee person portrait`} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                      {member.name}
                    </h3>
                    <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </ShineBorder>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Atmospheric Image Band */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1200x600/?coffee cup desert landscape Scottsdale Arizona cactus" 
            alt="Coffee in Scottsdale desert" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
          <FadeInUp delay={0}>
            <div className="relative text-center text-white px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Rooted in Scottsdale
              </h2>
              <p className="text-xl text-white/80">Where desert warmth meets coffee excellence</p>
            </div>
          </FadeInUp>
        </section>

        {/* Stats Bar Section */}
        <section id="stats-bar" className="py-16 px-6 bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 text-white relative">
          <div className="coffee-bean-pattern absolute inset-0" />
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {statsData.items.map((stat, index) => (
              <FadeInUp key={stat.label} delay={index * 100}>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Community Connection Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{fontFamily: 'var(--font-heading)'}}>
                More Than Just Coffee
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Bean & Brew, we believe coffee is a catalyst for connection. From hosting local art exhibitions 
                to supporting Scottsdale charities, we're committed to brewing something special in our community 
                every single day.
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </div>
            </FadeInUp>
          </div>
        </section>
      </div>
    </>
  )
}
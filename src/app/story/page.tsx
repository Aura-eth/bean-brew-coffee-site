"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";

export default function StoryPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 10%;
          width: 8px;
          height: 12px;
          background: rgba(139, 69, 19, 0.2);
          border-radius: 50% 20%;
          box-shadow:
            20px 30px 0 rgba(139, 69, 19, 0.15),
            60px 10px 0 rgba(139, 69, 19, 0.1),
            100px 40px 0 rgba(139, 69, 19, 0.2),
            150px 20px 0 rgba(139, 69, 19, 0.1),
            200px 50px 0 rgba(139, 69, 19, 0.15);
          transform: rotate(25deg);
        }
        .steam-hover {
          position: relative;
          overflow: hidden;
        }
        .steam-hover::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 50%;
          width: 2px;
          height: 20px;
          background: linear-gradient(to top, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-50%);
          opacity: 0;
          transition: all var(--duration-normal) var(--ease-out);
        }
        .steam-hover:hover::after {
          top: -10px;
          opacity: 1;
          animation: steam 1.5s ease-out infinite;
        }
        @keyframes steam {
          0% { transform: translateX(-50%) translateY(0) scaleY(1); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(-10px) scaleY(1.2); opacity: 0.6; }
          100% { transform: translateX(-50%) translateY(-20px) scaleY(0.8); opacity: 0; }
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 coffee-bean-scatter">
        <div className="flex items-center px-8 lg:px-16 py-24 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-lg">
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-4 block">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Rooted in Community, Inspired by the Desert
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                The story of how Bean & Brew became Scottsdale's beloved coffee destination
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex gap-4">
                <a href="#team-profiles" className="steam-hover px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Meet Our Team
                </a>
                <a href="/" className="steam-hover px-6 py-3 border border-orange-600 text-orange-600 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-all">
                  Visit Our Shop
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://source.unsplash.com/800x1000/?artisanal coffee shop interior warm lighting Scottsdale Arizona" 
            alt="Bean & Brew Coffee interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://source.unsplash.com/600x500/?coffee beans being roasted close-up steam rising" 
              alt="Coffee roasting process" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <FadeInUp delay={0}>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Our Beginning</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">Our Beginning</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in the heart of Scottsdale, Bean & Brew began as a dream to create more than just a coffee shop—we envisioned a community gathering place where exceptional coffee brings people together.
                </p>
                <p>
                  Inspired by the natural beauty of the Sonoran Desert and the warm hospitality of Arizona, we've crafted a unique coffee experience that celebrates both quality and connection.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section id="team-profiles" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our Coffee Family</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeInUp delay={100}>
              <div className="text-center">
                <ShineBorder borderRadius={24} borderWidth={2} duration={3} color={["#ea580c", "#f97316", "#fb923c"]}>
                  <div className="bg-white p-8 rounded-3xl">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                      <img 
                        src="https://source.unsplash.com/200x200/?barista woman coffee shop professional" 
                        alt="Maria Rodriguez" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Maria Rodriguez</h3>
                    <p className="text-orange-600 font-medium mb-3">Head Roaster</p>
                    <p className="text-gray-600 text-sm">
                      With 15 years of roasting experience, Maria ensures every batch meets our exacting standards
                    </p>
                  </div>
                </ShineBorder>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="text-center">
                <ShineBorder borderRadius={24} borderWidth={2} duration={3} color={["#ea580c", "#f97316", "#fb923c"]}>
                  <div className="bg-white p-8 rounded-3xl">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                      <img 
                        src="https://source.unsplash.com/200x200/?male barista coffee latte art smile" 
                        alt="Jake Thompson" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Jake Thompson</h3>
                    <p className="text-orange-600 font-medium mb-3">Lead Barista</p>
                    <p className="text-gray-600 text-sm">
                      Jake's latte art and warm smile make every visit memorable for our guests
                    </p>
                  </div>
                </ShineBorder>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section id="stats-bar" className="relative py-24 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x600/?desert landscape sunrise warm golden light Arizona" 
            alt="Desert landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-amber-900/80 to-orange-900/90" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="steam-hover">
                <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                <div className="text-sm uppercase tracking-wide opacity-80">Years Serving Scottsdale</div>
              </div>
              <div className="steam-hover">
                <div className="text-4xl md:text-5xl font-bold mb-2">150K+</div>
                <div className="text-sm uppercase tracking-wide opacity-80">Cups Served</div>
              </div>
              <div className="steam-hover">
                <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
                <div className="text-sm uppercase tracking-wide opacity-80">Local Partnerships</div>
              </div>
              <div className="steam-hover">
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                <div className="text-sm uppercase tracking-wide opacity-80">Star Rating</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Full-width immersive story continuation */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://source.unsplash.com/1920x800/?cozy coffee shop customers laptops community atmosphere" 
            alt="Community atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">More Than Coffee</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              Every morning, we witness the magic of community forming over carefully crafted cups. From the early risers seeking their daily fuel to the afternoon collaborators finding their perfect workspace, Bean & Brew has become the heartbeat of Scottsdale's coffee culture.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-lg text-white/60 leading-relaxed">
              Our commitment extends beyond exceptional coffee to supporting local artisans, hosting community events, and creating a space where every guest feels like family.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-600 to-amber-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Our Story</h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl opacity-80 mb-10">
              Visit us and become part of the Bean & Brew family
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="steam-hover inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-full text-lg hover:bg-gray-100 transition">
                Visit Our Shop
              </a>
              <a href="/menu" className="steam-hover inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-orange-600 transition">
                View Our Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const coffeeImages = [
    'https://source.unsplash.com/600x400/?latte-art-pour-overhead-shot-marble-counter',
    'https://source.unsplash.com/600x400/?artisanal-coffee-roasting-beans-desert-sunlight',
    'https://source.unsplash.com/600x400/?coffee-cupping-tasting-professional-barista-hands',
    'https://source.unsplash.com/600x400/?modern-coffeehouse-interior-warm-lighting-scottsdale',
    'https://source.unsplash.com/600x400/?desert-landscape-coffee-plantation-mountains-sunrise',
    'https://source.unsplash.com/600x400/?coffee-community-gathering-people-talking-cafe'
  ];

  return (
    <>
      <style jsx>{`
        @keyframes coffee-bean-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
        .coffee-bean-decoration::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 12px;
          background: #8B4513;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: coffee-bean-float 6s ease-in-out infinite;
        }
        .coffee-bean-decoration::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 10px;
          background: #D2691E;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: coffee-bean-float 8s ease-in-out infinite reverse;
          left: 20px;
          top: 10px;
        }
        .linen-texture {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.05) 1px, transparent 0),
            linear-gradient(45deg, rgba(210, 105, 30, 0.02) 25%, transparent 25%, transparent 75%, rgba(210, 105, 30, 0.02) 75%);
          background-size: 20px 20px, 40px 40px;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden linen-texture">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x1080/?artisanal-coffee-roasting-beans-desert-sunlight" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 coffee-bean-decoration">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Our Coffee Menu
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                From bean to cup, crafted with passion
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <a 
                href="#seasonal-specials" 
                className="inline-block px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Seasonal Specials
              </a>
            </FadeInUp>
          </div>
        </section>

        {/* Menu Showcase Section */}
        <section id="menu-showcase" className="py-24 px-6 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">
                Coffee Selections
              </h2>
            </FadeInUp>
            
            <div className="space-y-12">
              <FadeInUp delay={100}>
                <div className="border-b border-amber-200 pb-8">
                  <h3 className="text-2xl font-semibold mb-8 text-orange-800 border-b-2 border-amber-300 pb-4">
                    Signature Beverages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-amber-900">Espresso</h4>
                        <p className="text-gray-600 leading-relaxed">Rich, concentrated coffee shot</p>
                      </div>
                      <div className="flex-none">
                        <span className="text-xl font-bold text-orange-700">$3</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-amber-900">Americano</h4>
                        <p className="text-gray-600 leading-relaxed">Espresso with hot water</p>
                      </div>
                      <div className="flex-none">
                        <span className="text-xl font-bold text-orange-700">$4</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-amber-900">Cappuccino</h4>
                        <p className="text-gray-600 leading-relaxed">Espresso with steamed milk foam</p>
                      </div>
                      <div className="flex-none">
                        <span className="text-xl font-bold text-orange-700">$5</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-amber-900">Pour Over</h4>
                        <p className="text-gray-600 leading-relaxed">Single-origin coffee, expertly brewed</p>
                      </div>
                      <div className="flex-none">
                        <span className="text-xl font-bold text-orange-700">$6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 coffee-bean-decoration opacity-30"></div>
          <div className="absolute bottom-10 right-10 coffee-bean-decoration opacity-20"></div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-100 linen-texture">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
                Coffee Artistry
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
                Every cup is a masterpiece, crafted with precision and passion in our desert oasis
              </p>
            </FadeInUp>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {coffeeImages.map((img, i) => (
                <FadeInUp key={i} delay={i * 50}>
                  <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    <img 
                      src={img} 
                      alt={`Coffee artistry ${i + 1}`} 
                      className="w-full hover:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
            
            <FadeInUp delay={200}>
              <div className="text-center mt-16">
                <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                  <p className="text-lg text-amber-800 italic font-medium">
                    "Where desert warmth meets coffee perfection"
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Seasonal Specials CTA */}
        <section id="seasonal-specials" className="py-24 px-6 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://source.unsplash.com/1920x600/?desert-landscape-coffee-plantation-mountains-sunrise" 
              alt="" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Seasonal Inspirations
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed">
                Limited-time creations that celebrate the changing seasons of the Sonoran Desert
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-block px-10 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Visit Our Café
                </a>
                <a 
                  href="#menu-showcase" 
                  className="inline-block px-10 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-amber-900 transition-all duration-300"
                >
                  View Full Menu
                </a>
              </div>
            </FadeInUp>
          </div>
          
          {/* Floating coffee bean decorations */}
          <div className="absolute top-1/4 left-1/4 coffee-bean-decoration opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 coffee-bean-decoration opacity-15"></div>
          <div className="absolute top-1/3 right-1/3 coffee-bean-decoration opacity-10"></div>
        </section>
      </main>
    </>
  );
}
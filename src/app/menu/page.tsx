"use client"

import FadeInUp from '@/components/fade-in-up'
import { cn } from '@/lib/utils'

const menuData = {
  "Espresso Drinks": [
    {
      "name": "Desert Sunrise Latte",
      "description": "Espresso with agave, cinnamon, and steamed oat milk",
      "price": "$5.50"
    },
    {
      "name": "Copper Canyon Mocha",
      "description": "Rich chocolate and espresso with a hint of chili",
      "price": "$5.75"
    }
  ],
  "Cold Brew & Iced": [
    {
      "name": "Prickly Pear Cold Brew",
      "description": "Smooth cold brew with house-made prickly pear syrup",
      "price": "$4.75"
    },
    {
      "name": "Sedona Sunset Iced Tea",
      "description": "Hibiscus and desert sage blend served over ice",
      "price": "$3.50"
    }
  ]
}

const foodData = {
  "Fresh Pastries": [
    {
      "name": "Desert Rose Croissant",
      "description": "Flaky pastry with local honey and pistachio",
      "price": "$4.25"
    },
    {
      "name": "Palo Verde Scone",
      "description": "Buttermilk scone with mesquite flour and dates",
      "price": "$3.75"
    }
  ],
  "Light Meals": [
    {
      "name": "Southwestern Breakfast Bowl",
      "description": "Quinoa, black beans, avocado, and chipotle crema",
      "price": "$9.50"
    },
    {
      "name": "Sonoran Grain Salad",
      "description": "Ancient grains with cactus paddle and citrus vinaigrette",
      "price": "$8.75"
    }
  ]
}

export default function MenuPage() {
  return (
    <>
      <style jsx>{`
        .sand-texture {
          background-image: radial-gradient(circle at 25% 25%, rgba(196, 146, 106, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(196, 146, 106, 0.05) 0%, transparent 50%);
        }
        .coffee-bean-scatter::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 20%, rgba(101, 67, 33, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 80% 40%, rgba(101, 67, 33, 0.08) 2px, transparent 2px),
                           radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.06) 2px, transparent 2px);
          background-size: 120px 120px, 180px 180px, 240px 240px;
          pointer-events: none;
        }
      `}</style>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sand-texture">
          <img 
            src="https://source.unsplash.com/1920x1080/?specialty coffee shop interior warm lighting Arizona desert modern" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>
                Handcrafted with Desert Soul
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                Every cup tells the story of Scottsdale's coffee culture
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Drinks Menu Showcase */}
        <section id="drinks-menu" className="py-24 px-6 relative coffee-bean-scatter">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Specialty Drinks
              </h2>
            </FadeInUp>
            
            <div className="space-y-16">
              {Object.entries(menuData).map(([category, items], categoryIndex) => (
                <FadeInUp key={category} delay={categoryIndex * 100 + 100}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 pb-4 border-b border-orange-200" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {items.map((item, itemIndex) => (
                        <FadeInUp key={item.name} delay={categoryIndex * 100 + itemIndex * 50 + 200}>
                          <div className="flex justify-between items-start gap-4 group hover:bg-orange-50 p-4 rounded-lg transition-all duration-300">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-700 transition-colors" style={{fontFamily: 'var(--font-heading)'}}>
                                {item.name}
                              </h4>
                              <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-none">
                              <span className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </FadeInUp>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Atmosphere Band */}
        <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center">
          <img 
            src="https://source.unsplash.com/1920x1080/?artisan coffee brewing pour over hands close up warm tones" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center text-white px-6">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Crafted with Intention
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/70" style={{fontFamily: 'var(--font-body)'}}>
                Where desert ingredients meet artisan tradition
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Food Menu Showcase */}
        <section id="food-menu" className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white relative coffee-bean-scatter">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text)'}}>
                Food Offerings
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg" style={{fontFamily: 'var(--font-body)'}}>
                Pastries, light meals, and snacks that pair perfectly with our specialty drinks
              </p>
            </FadeInUp>
            
            <div className="space-y-16">
              {Object.entries(foodData).map(([category, items], categoryIndex) => (
                <FadeInUp key={category} delay={categoryIndex * 100 + 200}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 pb-4 border-b border-orange-200" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {items.map((item, itemIndex) => (
                        <FadeInUp key={item.name} delay={categoryIndex * 100 + itemIndex * 50 + 300}>
                          <div className="flex justify-between items-start gap-4 group hover:bg-white p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-700 transition-colors" style={{fontFamily: 'var(--font-heading)'}}>
                                {item.name}
                              </h4>
                              <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-none">
                              <span className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </FadeInUp>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="visit-cta" className="py-24 px-6 relative sand-texture" style={{backgroundColor: 'var(--color-primary)'}}>
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-heading)'}}>
                Visit Us Today
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80 mb-10" style={{fontFamily: 'var(--font-body)'}}>
                Experience the flavors of the Sonoran Desert in every sip
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <a 
                href="/contact" 
                className="inline-block px-10 py-4 bg-white font-bold rounded-full text-lg hover:bg-white/90 transition duration-300" 
                style={{color: 'var(--color-primary)', fontFamily: 'var(--font-body)'}}
              >
                Find Us
              </a>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  )
}
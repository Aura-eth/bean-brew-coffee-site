"use client"

import { FadeInUp } from '@/components/fade-in-up'

export default function MenuPage() {
  const menuData = [
    {
      section_title: "Signature Coffee",
      items: [
        {
          name: "Desert Sunrise Blend",
          description: "Our signature medium roast with notes of chocolate and citrus",
          price: "$4.50"
        },
        {
          name: "Scottsdale Single Origin",
          description: "Rotating selection of premium single-origin beans",
          price: "$5.25"
        },
        {
          name: "Cold Brew Concentrate",
          description: "Smooth, bold cold brew steeped for 18 hours",
          price: "$4.25"
        }
      ]
    },
    {
      section_title: "Fresh Food",
      items: [
        {
          name: "Artisan Pastries",
          description: "Locally-baked croissants, muffins, and seasonal treats",
          price: "$3.75"
        },
        {
          name: "Breakfast Sandwiches",
          description: "House-made with cage-free eggs and local ingredients",
          price: "$8.50"
        },
        {
          name: "Acai Bowls",
          description: "Fresh fruit and granola perfect for Arizona mornings",
          price: "$9.25"
        }
      ]
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes coffeeBeanFloat {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.6; }
        }
        
        .coffee-bean-animation {
          animation: coffeeBeanFloat 8s ease-in-out infinite;
        }
        
        .desert-gradient {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E 40%, #CD853F 60%, #F4A460 100%);
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?cozy desert coffee shop interior warm lighting" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-amber-900/50 to-orange-900/60" />
          
          {/* Floating Coffee Bean Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-6 bg-amber-800 rounded-full coffee-bean-animation" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/3 right-1/3 w-3 h-5 bg-amber-900 rounded-full coffee-bean-animation" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-5 h-7 bg-amber-700 rounded-full coffee-bean-animation" style={{animationDelay: '4s'}} />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
                Crafted with Passion, Served with Pride
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our carefully curated selection of coffee and food
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Coffee Menu Showcase */}
        <section id="coffee-menu" className="py-24 px-6 relative">
          <div className="absolute inset-0 desert-gradient opacity-5" />
          <div className="max-w-4xl mx-auto relative">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
                {menuData[0].section_title}
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-16" />
            </FadeInUp>
            
            <div className="space-y-8">
              {menuData[0].items.map((item, index) => (
                <FadeInUp key={item.name} delay={200 + index * 100}>
                  <div className="flex justify-between items-start gap-6 py-6 border-b border-amber-100 hover:bg-amber-50/30 transition-colors duration-300 rounded-lg px-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-amber-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-amber-700 flex-none">
                      {item.price}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Food Menu Showcase */}
        <section id="food-menu" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50 relative">
          <div className="max-w-4xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
                {menuData[1].section_title}
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-16" />
            </FadeInUp>
            
            <div className="space-y-8">
              {menuData[1].items.map((item, index) => (
                <FadeInUp key={item.name} delay={200 + index * 100}>
                  <div className="flex justify-between items-start gap-6 py-6 border-b border-amber-200 hover:bg-white/50 transition-colors duration-300 rounded-lg px-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-amber-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-amber-700 flex-none">
                      {item.price}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Atmospheric Image Band */}
        <section id="atmosphere" className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1920x1080/?coffee latte art in ceramic cup with succulents" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-transparent to-orange-900/60" />
          
          <div className="relative text-center text-white px-6 max-w-3xl">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Made Fresh Daily
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/90 leading-relaxed">
                Every cup tells a story of Arizona's coffee culture
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Navigation Footer */}
        <footer className="bg-amber-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h3 className="text-2xl font-bold mb-4">Bean & Brew Coffee</h3>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-amber-100 mb-6">Crafting community, one cup at a time</p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
                <a href="/" className="text-amber-200 hover:text-white transition">Home</a>
                <a href="/about" className="text-amber-200 hover:text-white transition">About</a>
                <a href="/menu" className="text-amber-200 hover:text-white transition">Menu</a>
                <a href="/contact" className="text-amber-200 hover:text-white transition">Contact</a>
              </div>
            </FadeInUp>
          </div>
        </footer>
      </main>
    </>
  )
}
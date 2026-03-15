"use client";

import FadeInUp from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function VisitPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-scatter::before {
          content: '';
          position: absolute;
          top: -20px;
          right: 10%;
          width: 60px;
          height: 60px;
          background-image: radial-gradient(circle at 30% 40%, #8B4513 2px, transparent 2px),
                           radial-gradient(circle at 70% 80%, #654321 1.5px, transparent 1.5px),
                           radial-gradient(circle at 20% 90%, #8B4513 2px, transparent 2px);
          background-size: 20px 20px;
          opacity: 0.6;
          z-index: 1;
        }
        .coffee-bean-scatter::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 5%;
          width: 80px;
          height: 40px;
          background-image: radial-gradient(circle at 40% 50%, #8B4513 1.5px, transparent 1.5px),
                           radial-gradient(circle at 80% 30%, #654321 2px, transparent 2px);
          background-size: 15px 15px;
          opacity: 0.5;
          z-index: 1;
        }
        .parallax-scroll {
          transform: translateZ(0);
          will-change: transform;
        }
        .southwest-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #FF6B35 75%, #8B4513 100%);
        }
      `}</style>

      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center relative coffee-bean-scatter">
            <FadeInUp>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif text-stone-900">Find Us in Scottsdale</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="space-y-6">
                <div>
                  <span className="font-semibold block text-lg mb-2 text-orange-600 uppercase tracking-wide">Address</span>
                  <p className="text-stone-700 text-lg leading-relaxed">Visit us in downtown Scottsdale</p>
                </div>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-orange-600 uppercase tracking-wide">Hours</span>
                  <p className="text-stone-700 text-lg leading-relaxed">Mon-Fri 6am-8pm, Sat-Sun 7am-9pm</p>
                </div>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-orange-600 uppercase tracking-wide">Parking</span>
                  <p className="text-stone-700 text-lg leading-relaxed">Street parking and nearby lots available</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          <FadeInUp delay={200} className="lg:col-span-3">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://source.unsplash.com/800x600/?scottsdale+downtown+street+desert+architecture" 
                alt="Downtown Scottsdale location" 
                className="absolute inset-0 w-full h-full object-cover parallax-scroll"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-600/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-lg mb-2 text-stone-900">Bean & Brew Coffee</h3>
                  <p className="text-stone-600 text-sm">Located in the heart of downtown Scottsdale's vibrant arts district</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Atmospheric Band */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x800/?desert+sunrise+orange+warm+gradient+southwestern" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover parallax-scroll" 
          style={{
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 southwest-gradient opacity-70" />
        <FadeInUp className="relative text-center text-white px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-shadow">Where Desert Meets Coffee Culture</h2>
          <p className="text-lg text-white/90">Crafted with Southwestern warmth and artisanal precision</p>
        </FadeInUp>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative coffee-bean-scatter">
            <FadeInUp>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif text-stone-900">Get in Touch</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-stone-600 mb-12 text-lg leading-relaxed">Ready to plan your visit or inquire about catering and events? We'd love to hear from you.</p>
            </FadeInUp>
            <FadeInUp delay={150}>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-orange-600 uppercase tracking-wide">Phone</span>
                    <p className="text-stone-700 text-lg">Contact us for hours and information</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-orange-600 uppercase tracking-wide">Email</span>
                    <p className="text-stone-700 text-lg">hello@beanbrew.coffee</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-orange-600 uppercase tracking-wide">Hours</span>
                    <p className="text-stone-700 text-lg">Mon-Fri 6am-8pm<br />Sat-Sun 7am-9pm</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
          <FadeInUp delay={200}>
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-stone-900 font-serif">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-3">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-3">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-3">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-3">Subject</label>
                  <select className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                    <option>General Inquiry</option>
                    <option>Catering Request</option>
                    <option>Private Events</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-3">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transition duration-300 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://source.unsplash.com/1920x600/?coffee+beans+burlap+sack+rustic+wooden+table" alt="" className="w-full h-full object-cover" />
        </div>
        <FadeInUp className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">We Can't Wait to Welcome You</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">Experience the perfect blend of Southwestern hospitality and exceptional coffee craftsmanship in the heart of Scottsdale.</p>
          <a href="/menu" className="inline-block px-10 py-4 bg-white text-stone-900 font-bold rounded-full text-lg hover:bg-stone-100 transition shadow-lg">
            View Our Menu
          </a>
        </FadeInUp>
      </section>
    </>
  );
}
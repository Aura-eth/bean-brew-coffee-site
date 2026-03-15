"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function VisitPage() {
  return (
    <>
      <style jsx>{`
        .desert-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        .desert-particles::before,
        .desert-particles::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 69, 19, 0.3);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }
        .desert-particles::before {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .desert-particles::after {
          top: 60%;
          right: 15%;
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .rock-divider {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 15% 100%, 0 85%);
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
          <div className="desert-particles"></div>
          <div className="flex items-center px-8 lg:px-16 py-24 relative z-10">
            <div className="max-w-lg">
              <FadeInUp delay={0}>
                <span className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-4 block">Scottsdale Location</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-stone-800">Find Us in Scottsdale</h1>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p className="text-lg text-stone-600 mb-8">Located in the heart of the community we're proud to serve</p>
              </FadeInUp>
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-screen">
            <img 
              src="https://source.unsplash.com/800x1000/?artisanal coffee shop interior desert modern Scottsdale Arizona" 
              alt="Bean & Brew Coffee interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-amber-900/20"></div>
          </div>
        </section>

        {/* Location Map Section */}
        <section id="location-map" className="py-24 px-6 bg-white rock-divider">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <h2 className="text-3xl font-bold mb-6 text-stone-800">Visit Information</h2>
              </FadeInUp>
              <div className="space-y-6">
                <FadeInUp delay={100}>
                  <div>
                    <span className="font-semibold block mb-2 text-orange-600">Address</span>
                    <p className="text-stone-600">123 Main Street, Scottsdale, AZ 85251</p>
                  </div>
                </FadeInUp>
                <FadeInUp delay={150}>
                  <div>
                    <span className="font-semibold block mb-2 text-orange-600">Hours</span>
                    <div className="text-stone-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <div>
                    <span className="font-semibold block mb-2 text-orange-600">Parking</span>
                    <p className="text-stone-600">Free parking available behind building and street parking</p>
                  </div>
                </FadeInUp>
              </div>
            </div>
            <div className="lg:col-span-3">
              <FadeInUp delay={100}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center relative">
                  <img 
                    src="https://source.unsplash.com/800x600/?desert landscape Arizona saguaro cactus warm morning light" 
                    alt="Scottsdale desert landscape" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-amber-400/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Atmosphere Band */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1600x800/?modern café community people laptop working together" 
            alt="Coffee shop atmosphere" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{backgroundAttachment: 'fixed'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/40 to-orange-900/60"></div>
          <div className="relative text-center text-white px-6 max-w-3xl">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">A Place to Connect</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-white/80">Where community meets exceptional coffee</p>
            </FadeInUp>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-4 text-stone-800">Get in Touch</h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-stone-600 mb-8">Questions about catering, private events, or just want to say hello?</p>
              </FadeInUp>
              <div className="space-y-6 mb-10">
                <FadeInUp delay={150}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold block mb-1 text-stone-800">Phone</span>
                      <p className="text-stone-600">(480) 555-BREW</p>
                    </div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold block mb-1 text-stone-800">Email</span>
                      <p className="text-stone-600">hello@beanandbrew.coffee</p>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
            <div>
              <FadeInUp delay={100}>
                <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Catering Request</option>
                      <option>Private Event</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-amber-700 transition duration-200">
                    Send Message
                  </button>
                </form>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Coffee Details Strip */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeInUp delay={0}>
              <div>
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-sm mt-2 opacity-80 uppercase tracking-wide">Years Serving</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div>
                <div className="text-3xl md:text-4xl font-bold">50+</div>
                <div className="text-sm mt-2 opacity-80 uppercase tracking-wide">Coffee Origins</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div>
                <div className="text-3xl md:text-4xl font-bold">1000+</div>
                <div className="text-sm mt-2 opacity-80 uppercase tracking-wide">Happy Customers</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div>
                <div className="text-3xl md:text-4xl font-bold">365</div>
                <div className="text-sm mt-2 opacity-80 uppercase tracking-wide">Days Open</div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
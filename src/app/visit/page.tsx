"use client";

import { FadeInUp } from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

const Visit = () => {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .sand-texture {
          background-image: radial-gradient(circle at 20% 80%, rgba(210, 180, 140, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(222, 184, 135, 0.1) 0%, transparent 50%);
        }
        .coffee-bean-scatter {
          background-image: radial-gradient(2px 4px at 20% 30%, #8B4513, transparent),
                            radial-gradient(2px 4px at 40% 70%, #A0522D, transparent),
                            radial-gradient(1px 3px at 90% 40%, #8B4513, transparent),
                            radial-gradient(1px 3px at 60% 90%, #A0522D, transparent),
                            radial-gradient(2px 4px at 10% 90%, #8B4513, transparent),
                            radial-gradient(1px 3px at 80% 10%, #A0522D, transparent);
        }
      `}</style>

      {/* Location Map Section */}
      <section className="py-24 px-6 sand-texture">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp>
              <h2 className="text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Find Us in Scottsdale</h2>
            </FadeInUp>
            
            <div className="space-y-8">
              <FadeInUp delay={100}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Address</span>
                  <p className="text-gray-600 text-lg">Visit us in the heart of Scottsdale</p>
                  <p className="text-gray-600">7425 E Shea Blvd, Scottsdale, AZ 85260</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Hours</span>
                  <p className="text-gray-600">Open daily for your coffee needs</p>
                  <div className="space-y-1 mt-2">
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Parking</span>
                  <p className="text-gray-600">Convenient parking available</p>
                  <p className="text-gray-600">Free lot parking with easy access</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Phone</span>
                  <p className="text-gray-600 text-lg">(480) 555-BREW</p>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          <FadeInUp delay={300} className="lg:col-span-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://source.unsplash.com/800x600/?scottsdale-arizona-desert-morning-coffee-shop-location" 
                alt="Bean & Brew Coffee location map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">Bean & Brew Coffee</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeInUp>
              <h2 className="text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>Get in Touch</h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600 mb-8 text-lg">Questions about catering, events, or just want to say hello?</p>
            </FadeInUp>
            
            <div className="space-y-8">
              <FadeInUp delay={200}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Email</span>
                  <p className="text-gray-600 text-lg">hello@beanandbrew.com</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Phone</span>
                  <p className="text-gray-600 text-lg">(480) 555-BREW</p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <div>
                  <span className="font-semibold block text-lg mb-2 text-amber-700">Social Media</span>
                  <div className="flex gap-4 mt-3">
                    <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
          
          <FadeInUp delay={200} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Catering Request</option>
                  <option>Private Events</option>
                  <option>Wholesale Orders</option>
                  <option>Partnership Opportunities</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </FadeInUp>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden coffee-bean-scatter">
        <img 
          src="https://source.unsplash.com/1600x900/?coffee-shop-storefront-patio-seating-southwestern-desert-warm-welcome" 
          alt="Bean & Brew Coffee welcoming storefront and patio" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        
        <div className="relative text-center text-white max-w-4xl px-6">
          <FadeInUp>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Your Desert Coffee Oasis Awaits
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Step into our warm, welcoming space where Scottsdale's desert beauty meets artisan coffee culture. 
              Every cup tells a story, every visit creates a memory.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:(480)555-2739" 
                className="px-8 py-4 bg-white text-amber-900 font-bold rounded-full text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-amber-900 transition-all duration-300 transform hover:scale-105"
              >
                Get Directions
              </a>
            </div>
          </FadeInUp>
        </div>
        
        {/* Decorative coffee steam animation */}
        <div className="absolute bottom-10 right-10 opacity-30">
          <div className="w-2 h-20 bg-white/20 rounded-full animate-pulse"></div>
          <div className="w-1 h-16 bg-white/10 rounded-full ml-3 -mt-16 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-12 bg-white/10 rounded-full ml-1 -mt-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
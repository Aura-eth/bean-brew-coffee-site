"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
                          radial-gradient(circle at 40% 70%, rgba(139, 69, 19, 0.1) 2px, transparent 2px);
          background-size: 60px 60px, 40px 40px, 80px 80px;
          background-position: 0 0, 30px 30px, 10px 50px;
        }
        .form-shadow {
          box-shadow: 0 20px 40px -12px rgba(139, 69, 19, 0.1);
        }
        .map-hover:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 bg-gradient-to-b from-amber-50 to-white coffee-bean-pattern">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-900">
                Visit Our Scottsdale Location
              </h2>
            </FadeInUp>
            <div className="space-y-8">
              <FadeInUp delay={100}>
                <div className="border-l-4 border-amber-600 pl-6">
                  <span className="font-semibold block text-lg text-amber-900 mb-2">Address</span>
                  <p className="text-gray-700 text-lg">123 Main Street, Scottsdale, AZ 85251</p>
                </div>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div className="border-l-4 border-amber-600 pl-6">
                  <span className="font-semibold block text-lg text-amber-900 mb-2">Hours</span>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 6 AM - 8 PM</p>
                    <p>Saturday-Sunday: 7 AM - 9 PM</p>
                  </div>
                </div>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="flex items-center gap-4 pt-6">
                  <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                  <span className="text-amber-900 font-medium">Open Now</span>
                </div>
              </FadeInUp>
            </div>
          </div>
          <div className="lg:col-span-3">
            <FadeInUp delay={400}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-200 to-orange-300 map-hover form-shadow">
                <img 
                  src="https://source.unsplash.com/800x600/?scottsdale+arizona+desert+landscape+sunset" 
                  alt="Scottsdale location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Bean & Brew Coffee</span>
                  </div>
                  <p className="text-sm text-gray-600">Scottsdale's Premier Coffee Experience</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
                Get In Touch
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We'd love to hear from you. Whether you have questions about our coffee, want to book a private event, or just want to say hello, don't hesitate to reach out.
              </p>
            </FadeInUp>
            
            <div className="space-y-8">
              <FadeInUp delay={200}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-amber-900">Phone</span>
                    <p className="text-gray-700 text-lg">(480) 555-BREW</p>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-amber-900">Email</span>
                    <p className="text-gray-700 text-lg">hello@beanandbrew.coffee</p>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={400}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1 text-amber-900">Visit Us</span>
                    <p className="text-gray-700">123 Main Street</p>
                    <p className="text-gray-700">Scottsdale, AZ 85251</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <FadeInUp delay={500}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl form-shadow">
                <h3 className="text-2xl font-bold mb-6 text-amber-900">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-amber-900 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-amber-900 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-amber-900 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Coffee Questions</option>
                      <option>Private Events</option>
                      <option>Catering Services</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition resize-vertical"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Coffee Bean Pattern Divider */}
      <div className="h-32 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 coffee-bean-pattern"></div>
    </>
  );
}
"use client"

import { FadeInUp } from '@/components/fade-in-up'
import { cn } from '@/lib/utils'

const contactData = {
  address: "8765 E Main Street\nOld Town Scottsdale, AZ 85251",
  phone: "(480) 555-BREW",
  email: "hello@beanandbrewcoffee.com",
  hours: "Monday - Friday: 6:00 AM - 8:00 PM\nSaturday - Sunday: 7:00 AM - 9:00 PM",
  parking: "Free parking available in adjacent lot and street parking"
}

const formFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
  { name: 'eventType', label: 'Event Type', type: 'select', required: true, options: ['Catering', 'Private Event', 'Coffee Wholesale', 'General Inquiry'] },
  { name: 'date', label: 'Preferred Date', type: 'date', required: false },
  { name: 'guests', label: 'Number of Guests', type: 'number', required: false },
  { name: 'message', label: 'Tell us about your event or inquiry', type: 'textarea', required: true }
]

export default function ContactPage() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-float {
          animation: coffeeFloat 8s ease-in-out infinite;
        }
        .coffee-bean-float:nth-child(2) {
          animation-delay: 2s;
        }
        .coffee-bean-float:nth-child(3) {
          animation-delay: 4s;
        }
        @keyframes coffeeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
        .desert-gradient {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #F4A460 100%);
        }
        .map-placeholder {
          background: linear-gradient(45deg, #e5e7eb 25%, transparent 25%), 
                      linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #e5e7eb 75%), 
                      linear-gradient(-45deg, transparent 75%, #e5e7eb 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
      
      <main className="pt-20">
        {/* Location Map Section */}
        <section id="location-map" className="py-24 px-6 relative overflow-hidden">
          {/* Floating coffee beans */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="coffee-bean-float absolute top-20 left-10 w-3 h-5 bg-amber-800 rounded-full opacity-20 transform rotate-12"></div>
            <div className="coffee-bean-float absolute top-32 right-20 w-2 h-4 bg-amber-900 rounded-full opacity-15 transform -rotate-45"></div>
            <div className="coffee-bean-float absolute bottom-40 left-1/4 w-4 h-6 bg-amber-700 rounded-full opacity-10 transform rotate-90"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-6 text-amber-900">Visit Our Scottsdale Location</h2>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeInUp delay={100}>
                  <div>
                    <span className="font-semibold block text-lg text-amber-800">Address</span>
                    <p className="text-stone-600 whitespace-pre-line">{contactData.address}</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <div>
                    <span className="font-semibold block text-lg text-amber-800">Hours</span>
                    <p className="text-stone-600 whitespace-pre-line">{contactData.hours}</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div>
                    <span className="font-semibold block text-lg text-amber-800">Phone</span>
                    <p className="text-stone-600">{contactData.phone}</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={400}>
                  <div>
                    <span className="font-semibold block text-lg text-amber-800">Parking</span>
                    <p className="text-stone-600">{contactData.parking}</p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={500}>
                  <div className="pt-4">
                    <p className="text-stone-500 italic">Located in the heart of Old Town Scottsdale with convenient parking</p>
                    <p className="text-stone-500 italic mt-2">Open daily with extended weekend hours for the community</p>
                  </div>
                </FadeInUp>
              </div>
            </div>
            
            <FadeInUp delay={200} className="lg:col-span-3">
              <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="map-placeholder h-full flex items-center justify-center bg-stone-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Bean & Brew Coffee</h3>
                    <p className="text-stone-600">Old Town Scottsdale</p>
                    <button className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section id="contact" className="py-24 px-6 bg-stone-50 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-4 text-amber-900">Let's Connect</h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <p className="text-xl text-stone-600 mb-8">Questions about catering, private events, or coffee wholesale?</p>
              </FadeInUp>
              
              <div className="space-y-8">
                <FadeInUp delay={200}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-none mt-1">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-stone-800">Email Us</h3>
                      <p className="text-stone-600">{contactData.email}</p>
                      <p className="text-sm text-stone-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-none mt-1">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-stone-800">Call Us</h3>
                      <p className="text-stone-600">{contactData.phone}</p>
                      <p className="text-sm text-stone-500 mt-1">Available during business hours</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={400}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-none mt-1">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-stone-800">Event Planning</h3>
                      <p className="text-stone-600">Custom catering & private events</p>
                      <p className="text-sm text-stone-500 mt-1">Book 2-4 weeks in advance</p>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </div>
            
            <FadeInUp delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-2 text-stone-800">Send Us a Message</h3>
                <p className="text-stone-600 mb-8">Send us a message and we'll get back to you within 24 hours</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-stone-700 mb-2">Event Type *</label>
                      <select 
                        id="eventType" 
                        name="eventType" 
                        required 
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                      >
                        <option value="">Select an option</option>
                        <option value="catering">Catering</option>
                        <option value="private-event">Private Event</option>
                        <option value="wholesale">Coffee Wholesale</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
                      <input 
                        type="number" 
                        id="guests" 
                        name="guests" 
                        min="1" 
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Tell us about your event or inquiry *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-vertical"
                      placeholder="Please provide details about your event, preferred timing, any dietary restrictions, or other special requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 focus:ring-4 focus:ring-amber-200 transition duration-200 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </section>
        
        {/* Atmosphere Section */}
        <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://source.unsplash.com/1200x800/?cozy desert coffee shop interior warm lighting" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 desert-gradient opacity-60" />
          
          <div className="relative text-center text-white max-w-4xl px-6 z-10">
            <FadeInUp delay={0}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Welcome to Our Desert Oasis</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">Where Scottsdale's warmth meets coffee perfection — your community gathering place awaits</p>
            </FadeInUp>
          </div>
          
          {/* Additional floating elements for atmosphere */}
          <div className="absolute top-10 right-10 coffee-bean-float w-6 h-8 bg-amber-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-20 coffee-bean-float w-4 h-6 bg-amber-300 rounded-full opacity-15"></div>
          <div className="absolute top-1/3 left-10 coffee-bean-float w-5 h-7 bg-amber-400 rounded-full opacity-10"></div>
        </section>
      </main>
    </>
  )
}
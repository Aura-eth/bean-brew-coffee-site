"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { cn } from '@/lib/utils';

const coffeeSpots = [
  {
    name: 'Scottsdale Quarter',
    address: '15059 N Scottsdale Rd, Scottsdale, AZ 85254',
    hours: {
      weekdays: '6:00 AM - 8:00 PM',
      weekends: '7:00 AM - 9:00 PM'
    },
    phone: '(480) 555-BEAN',
    parking: 'Ample street parking and covered garage'
  }
];

const contactInfo = {
  email: 'hello@beanandbrew.coffee',
  phone: '(480) 555-BEAN',
  address: '15059 N Scottsdale Rd\nScottsdale, AZ 85254',
  hours: 'Mon-Fri: 6am-8pm\nSat-Sun: 7am-9pm'
};

export default function Visit() {
  return (
    <>
      <style jsx>{`
        .coffee-bean-pattern {
          background-image: radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 30%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
        }
        
        .desert-gradient-hover {
          transition: all 0.3s ease;
        }
        
        .desert-gradient-hover:hover {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E  50%, #FF8C42 100%);
          transform: translateY(-2px);
        }
      `}</style>
      
      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 coffee-bean-pattern">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Find Us in Scottsdale
              </h2>
            </FadeInUp>
            
            <div className="space-y-6">
              {coffeeSpots.map((spot, i) => (
                <FadeInUp key={i} delay={100 * (i + 1)}>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold block mb-2 text-lg">Address</span>
                      <p className="text-muted leading-relaxed">
                        Visit us in the heart of Scottsdale<br/>
                        {spot.address}
                      </p>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2">Hours</span>
                      <p className="text-muted">
                        Open daily for your coffee needs<br/>
                        Mon-Fri: {spot.hours.weekdays}<br/>
                        Sat-Sun: {spot.hours.weekends}
                      </p>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2">Phone</span>
                      <p className="text-muted">{spot.phone}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2">Parking</span>
                      <p className="text-muted">
                        Convenient parking available<br/>
                        {spot.parking}
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(spot.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-fg rounded-full font-medium hover:bg-primary/90 transition"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
          
          <FadeInUp delay={200} className="lg:col-span-3">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted">
              <img 
                src="https://source.unsplash.com/800x500/?coffee+shop+exterior+scottsdale+desert+modern" 
                alt="Bean & Brew Coffee location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Your Desert Coffee Destination</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Get in Touch
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Questions about catering, events, or just want to chat about coffee?
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeInUp delay={200}>
              <div className="bg-background p-8 rounded-2xl border desert-gradient-hover">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="(480) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition">
                      <option>General Question</option>
                      <option>Catering Inquiry</option>
                      <option>Private Event</option>
                      <option>Coffee Consultation</option>
                      <option>Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-primary-fg rounded-lg font-medium hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeInUp>
            
            {/* Contact Info */}
            <FadeInUp delay={300}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Visit Our Café</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="font-semibold block mb-2 text-primary">Location</span>
                      <p className="text-muted whitespace-pre-line">{contactInfo.address}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2 text-primary">Hours</span>
                      <p className="text-muted whitespace-pre-line">{contactInfo.hours}</p>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2 text-primary">Phone</span>
                      <a href={`tel:${contactInfo.phone}`} className="text-muted hover:text-primary transition">
                        {contactInfo.phone}
                      </a>
                    </div>
                    
                    <div>
                      <span className="font-semibold block mb-2 text-primary">Email</span>
                      <a href={`mailto:${contactInfo.email}`} className="text-muted hover:text-primary transition">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 text-primary">Catering & Events</h4>
                  <p className="text-sm text-muted mb-4">
                    Planning a special event? We offer full-service catering with our signature coffee blends, 
                    fresh pastries, and personalized service to make your occasion memorable.
                  </p>
                  <ul className="text-sm text-muted space-y-1">
                    <li>• Corporate meetings & conferences</li>
                    <li>• Wedding receptions & celebrations</li>
                    <li>• Private parties & gatherings</li>
                    <li>• Coffee cupping experiences</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 text-secondary">Coffee Education</h4>
                  <p className="text-sm text-muted">
                    Interested in learning more about coffee? Ask about our private cupping sessions, 
                    brewing workshops, and barista training programs.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Atmosphere Section */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1600x900/?cozy+coffee+shop+community+gathering+arizona+desert" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="relative text-center text-white max-w-3xl px-6">
          <FadeInUp delay={0}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Your Desert Coffee Sanctuary
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where the warmth of Scottsdale meets the comfort of exceptional coffee, 
              creating moments of connection in every cup.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu" 
                className="px-8 py-4 bg-primary text-primary-fg rounded-full font-medium hover:bg-primary/90 transition"
              >
                Explore Our Menu
              </a>
              <a 
                href="tel:(480)555-BEAN" 
                className="px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition backdrop-blur-sm border border-white/20"
              >
                Call to Order
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
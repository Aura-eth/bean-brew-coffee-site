"use client";

import FadeInUp from "@/components/fade-in-up";
import { cn } from "@/lib/utils";

export default function VisitPage() {
  const contactInfo = {
    address: "Scottsdale, Arizona",
    phone: "(480) 555-BREW",
    email: "hello@beanandbrewscottsdale.com",
    hours: {
      weekdays: "Monday - Friday: 6:00 AM - 8:00 PM",
      saturday: "Saturday: 7:00 AM - 9:00 PM",
      sunday: "Sunday: 7:00 AM - 6:00 PM"
    }
  };

  return (
    <>
      <style jsx>{`
        .coffee-scatter::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 5%;
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          opacity: 0.1;
          box-shadow: 
            20px 30px 0 var(--color-primary),
            45px 15px 0 var(--color-primary),
            70px 40px 0 var(--color-primary),
            95px 25px 0 var(--color-primary),
            120px 35px 0 var(--color-primary);
        }
        .steam-hover {
          position: relative;
          overflow: hidden;
        }
        .steam-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 0;
          background: linear-gradient(to top, rgba(255,255,255,0.6), transparent);
          transform: translateX(-50%);
          transition: height 0.3s ease-out;
        }
        .steam-hover:hover::after {
          height: 20px;
          animation: steam 2s ease-in-out infinite;
        }
        @keyframes steam {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0; }
          50% { transform: translateX(-50%) translateY(-10px) scale(1.2); opacity: 0.6; }
        }
      `}</style>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden coffee-scatter">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <FadeInUp delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Find Your Perfect Coffee Moment
              </h1>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Located in the heart of Scottsdale, we're easy to find and always worth the visit
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://maps.google.com" 
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-white/90 transition-all duration-300 steam-hover"
                >
                  Get Directions
                </a>
                <a 
                  href="tel:(480) 555-BREW" 
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  Call Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Location Map Section */}
        <section id="location-map" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <h2 className="text-4xl font-bold mb-8 text-[var(--color-text)]">
                  Visit Our Scottsdale Location
                </h2>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeInUp delay={100}>
                  <div>
                    <span className="font-semibold block mb-2 text-[var(--color-primary)]">
                      Address
                    </span>
                    <p className="text-[var(--color-muted)] text-lg">
                      Scottsdale, Arizona
                    </p>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <div>
                    <span className="font-semibold block mb-2 text-[var(--color-primary)]">
                      Hours
                    </span>
                    <div className="text-[var(--color-muted)] space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div>
                    <span className="font-semibold block mb-2 text-[var(--color-primary)]">
                      Parking
                    </span>
                    <p className="text-[var(--color-muted)]">
                      Ample parking available with easy access from major roads
                    </p>
                  </div>
                </FadeInUp>
              </div>
            </div>
            
            <FadeInUp delay={400} className="lg:col-span-3">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-muted)]/20">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop" 
                  alt="Desert landscape" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    📍 Heart of Scottsdale
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    Easy to find, worth the visit
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]">
                Get in Touch
              </h2>
            </FadeInUp>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <FadeInUp delay={100}>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">
                    Send us a message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
                    />
                    <textarea
                      rows={5}
                      placeholder="Your message or inquiry about events..."
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)]/90 transition-all duration-300 steam-hover"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </FadeInUp>
              
              {/* Contact Info */}
              <FadeInUp delay={200}>
                <div>
                  <h3 className="text-2xl font-semibold mb-8 text-[var(--color-text)]">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-none">
                        <span className="text-[var(--color-primary)] text-xl">📍</span>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-[var(--color-text)]">Location</span>
                        <p className="text-[var(--color-muted)]">{contactInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-none">
                        <span className="text-[var(--color-primary)] text-xl">📞</span>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-[var(--color-text)]">Phone</span>
                        <p className="text-[var(--color-muted)]">{contactInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-none">
                        <span className="text-[var(--color-primary)] text-xl">✉️</span>
                      </div>
                      <div>
                        <span className="font-semibold block mb-1 text-[var(--color-text)]">Email</span>
                        <p className="text-[var(--color-muted)]">{contactInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-none">
                        <span className="text-[var(--color-primary)] text-xl">⏰</span>
                      </div>
                      <div>
                        <span className="font-semibold block mb-3 text-[var(--color-text)]">Hours</span>
                        <div className="text-[var(--color-muted)] space-y-1">
                          <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                          <p>Saturday: 7:00 AM - 9:00 PM</p>
                          <p>Sunday: 7:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section id="booking-cta" className="relative py-24 px-6 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
          <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <FadeInUp delay={0}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready for Great Coffee?
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Join us for an unforgettable coffee experience in the heart of Scottsdale. 
                  First-time visitors get 10% off their first order.
                </p>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:(480) 555-BREW" 
                    className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 transition-all duration-300 text-center steam-hover"
                  >
                    Visit Us Today
                  </a>
                  <a 
                    href="https://maps.google.com" 
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </FadeInUp>
            </div>
            
            <FadeInUp delay={300}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Hours</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Monday - Friday</span>
                    <span className="font-medium">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Saturday</span>
                    <span className="font-medium">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Sunday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/10 rounded-xl">
                  <p className="text-white text-sm font-medium text-center">
                    📞 {contactInfo.phone}
                  </p>
                  <p className="text-white/60 text-xs text-center mt-1">
                    Call ahead for large groups
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
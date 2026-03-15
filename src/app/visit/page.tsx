"use client";

import { FadeInUp } from '@/components/fade-in-up';
import { useState } from 'react';

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        .coffee-texture {
          background-image: radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.06) 0%, transparent 50%);
        }
        .linen-texture {
          background-image: 
            linear-gradient(45deg, rgba(139, 69, 19, 0.02) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(139, 69, 19, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(160, 82, 45, 0.02) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(160, 82, 45, 0.02) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
        .paper-texture {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.03) 2px,
              rgba(139, 69, 19, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(160, 82, 45, 0.02) 2px,
              rgba(160, 82, 45, 0.02) 4px
            );
        }
        @keyframes float-beans {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .floating-bean {
          animation: float-beans 8s ease-in-out infinite;
        }
        .floating-bean:nth-child(2) {
          animation-delay: -2s;
        }
        .floating-bean:nth-child(3) {
          animation-delay: -4s;
        }
      `}</style>
      
      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 coffee-texture">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-900">Visit Us in Scottsdale</h2>
            </FadeInUp>
            
            <FadeInUp delay={100} className="space-y-8">
              <div>
                <span className="font-bold block text-lg text-amber-800 mb-2">Address</span>
                <p className="text-amber-700 text-lg">Scottsdale, AZ</p>
              </div>
              
              <div>
                <span className="font-bold block text-lg text-amber-800 mb-3">Hours</span>
                <div className="space-y-2 text-amber-700">
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Monday - Thursday</span>
                    <span>6 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Friday</span>
                    <span>6 AM - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Saturday</span>
                    <span>7 AM - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Sunday</span>
                    <span>7 AM - 6 PM</span>
                  </div>
                </div>
              </div>
              
              <div>
                <span className="font-bold block text-lg text-amber-800 mb-2">Phone</span>
                <p className="text-amber-700 text-lg">(480) 555-BREW</p>
              </div>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={200} className="lg:col-span-3">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://source.unsplash.com/800x600/?scottsdale+desert+mountains+coffee+shop+exterior" 
                alt="Bean & Brew location in Scottsdale" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-600/10" />
              
              {/* Floating coffee beans */}
              <div className="floating-bean absolute top-4 right-8 w-3 h-2 bg-amber-800 rounded-full opacity-20"></div>
              <div className="floating-bean absolute bottom-12 left-12 w-2 h-3 bg-amber-900 rounded-full opacity-15"></div>
              <div className="floating-bean absolute top-1/3 left-1/4 w-2 h-2 bg-amber-700 rounded-full opacity-10"></div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 linen-texture">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeInUp delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Connect With Us</h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-xl text-amber-700 mb-12 leading-relaxed">Questions about our coffee or events? We'd love to hear from you</p>
            </FadeInUp>
            
            <FadeInUp delay={200} className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-none">
                  <svg className="w-6 h-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold block text-lg text-amber-800 mb-1">Location</span>
                  <p className="text-amber-700">Scottsdale, AZ<br />In the heart of Old Town</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-none">
                  <svg className="w-6 h-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold block text-lg text-amber-800 mb-1">Phone</span>
                  <p className="text-amber-700">(480) 555-BREW</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-none">
                  <svg className="w-6 h-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold block text-lg text-amber-800 mb-1">Email</span>
                  <p className="text-amber-700">hello@beanandbrew.com</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={300}>
            <div className="bg-white rounded-3xl p-10 shadow-xl paper-texture">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-amber-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-amber-100 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-amber-900 bg-amber-50/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-amber-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-amber-100 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-amber-900 bg-amber-50/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-amber-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-amber-100 rounded-xl focus:border-amber-400 focus:outline-none transition-colors text-amber-900 bg-amber-50/50 resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg"
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
          src="https://source.unsplash.com/1200x800/?modern+coffeehouse+interior+warm+lighting+scottsdale" 
          alt="Bean & Brew interior atmosphere" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/40 to-amber-600/60" />
        
        <FadeInUp delay={0} className="relative text-center text-white max-w-4xl px-6 z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">We're Waiting for You</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">Step into our desert oasis where every cup tells a story and every visit feels like coming home. Your perfect coffee moment awaits.</p>
        </FadeInUp>
        
        {/* Floating coffee beans for atmosphere */}
        <div className="floating-bean absolute top-1/4 left-1/4 w-4 h-3 bg-amber-200 rounded-full opacity-30"></div>
        <div className="floating-bean absolute bottom-1/3 right-1/3 w-3 h-4 bg-amber-300 rounded-full opacity-25"></div>
        <div className="floating-bean absolute top-1/2 right-1/4 w-3 h-3 bg-amber-100 rounded-full opacity-20"></div>
      </section>
    </>
  );
}
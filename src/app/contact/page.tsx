"use client";

import React, { useState, useEffect } from 'react';
import FadeInUp from '@/components/fade-in-up';
import ShineBorder from '@/components/shine-border';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <style jsx>{`
        .coffee-particle {
          position: fixed;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .coffee-ring::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          border: 3px solid var(--color-primary);
          border-radius: 50%;
          opacity: 0.1;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .coffee-ring::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          opacity: 0.15;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .floating-bean {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://source.unsplash.com/1920x1080/?coffee-shop-exterior-Arizona-desert-cacti-sunset" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Find Us in the Heart of Scottsdale
            </h1>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Your neighborhood coffee destination awaits
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="floating-bean inline-block">
              <svg width="40" height="60" viewBox="0 0 40 60" className="text-amber-400">
                <path 
                  d="M20 5C30 5 35 15 35 30C35 45 30 55 20 55C10 55 5 45 5 30C5 15 10 5 20 5Z" 
                  fill="currentColor" 
                  opacity="0.8"
                />
                <path 
                  d="M20 10C15 15 15 25 20 30C25 25 25 15 20 10Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Coffee Ring Divider */}
      <div className="relative coffee-ring py-8" />

      {/* Location Map Section */}
      <section id="location-map" className="py-24 px-6 bg-gradient-to-br from-amber-50/30 to-orange-50/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <FadeInUp delay={0}>
              <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--color-text)'}}>
                Visit Bean & Brew
              </h2>
            </FadeInUp>
            <div className="space-y-6">
              <FadeInUp delay={100}>
                <div>
                  <span className="font-semibold block text-lg mb-2" style={{color: 'var(--color-primary)'}}>
                    Address
                  </span>
                  <p className="text-muted-foreground text-base">
                    Downtown Scottsdale, Arizona
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={200}>
                <div>
                  <span className="font-semibold block text-lg mb-2" style={{color: 'var(--color-primary)'}}>
                    Hours
                  </span>
                  <p className="text-muted-foreground text-base">
                    Monday-Sunday: 6:00 AM - 8:00 PM
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div>
                  <span className="font-semibold block text-lg mb-2" style={{color: 'var(--color-primary)'}}>
                    Parking
                  </span>
                  <p className="text-muted-foreground text-base">
                    Street parking and nearby public lots available
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={400}>
                <ShineBorder 
                  borderRadius={12}
                  borderWidth={2}
                  duration={3}
                  color={["#8B4513", "#D2691E", "#CD853F"]}
                  className="mt-6"
                >
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-700">
                        Currently Open
                      </span>
                    </div>
                  </div>
                </ShineBorder>
              </FadeInUp>
            </div>
          </div>
          
          <FadeInUp delay={200} className="lg:col-span-3">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://source.unsplash.com/800x600/?artisanal-coffee-shop-interior-desert-modern-Scottsdale-Arizona" 
                alt="Bean & Brew Coffee Shop Location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Bean & Brew Coffee</p>
                      <p className="text-xs text-gray-500">Downtown Scottsdale</p>
                    </div>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Coffee Ring Divider */}
      <div className="relative coffee-ring py-8" />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeInUp delay={0}>
              <h2 className="text-4xl font-bold mb-4" style={{color: 'var(--color-text)'}}>
                Get in Touch
              </h2>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-muted-foreground mb-8 text-lg">
                Questions about catering, events, or just want to say hello?
              </p>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)'}}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)'}}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)'}}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="events">Private Events</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)'}}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <ShineBorder 
                  borderRadius={12}
                  borderWidth={2}
                  duration={2}
                  color={["#8B4513", "#D2691E"]}
                >
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </ShineBorder>
              </form>
            </FadeInUp>
          </div>
          
          <div className="flex flex-col justify-center">
            <FadeInUp delay={0}>
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/600x800/?cozy-coffee-shop-community-people-working-laptops" 
                  alt="Cozy atmosphere at Bean & Brew" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-none mt-1">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{color: 'var(--color-text)'}}>
                      Phone
                    </span>
                    <p className="text-muted-foreground">(480) 555-BREW</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-none mt-1">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{color: 'var(--color-text)'}}>
                      Email
                    </span>
                    <p className="text-muted-foreground">hello@beanandbrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-none mt-1">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{color: 'var(--color-text)'}}>
                      Response Time
                    </span>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
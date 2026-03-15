"use client";

import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading'
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body'
});

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Visit', href: '/visit' }
];

function TransparentScrollNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
              Bean & Brew Coffee
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium',
                    isScrolled ? 'text-[var(--color-text)]' : 'text-white hover:text-[var(--color-secondary)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col space-y-1.5 w-6 h-6"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <div className={cn(
                'w-full h-0.5 transition-all duration-300',
                isScrolled ? 'bg-[var(--color-text)]' : 'bg-white',
                isMobileOpen && 'rotate-45 translate-y-2'
              )} />
              <div className={cn(
                'w-full h-0.5 transition-all duration-300',
                isScrolled ? 'bg-[var(--color-text)]' : 'bg-white',
                isMobileOpen && 'opacity-0'
              )} />
              <div className={cn(
                'w-full h-0.5 transition-all duration-300',
                isScrolled ? 'bg-[var(--color-text)]' : 'bg-white',
                isMobileOpen && '-rotate-45 -translate-y-2'
              )} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t transition-all duration-300',
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={() => setIsMobileOpen(false)} 
        />
      )}
    </>
  );
}

function RichColumnsFooter() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-4">
              Bean & Brew Coffee
            </h3>
            <p className="text-[var(--color-secondary)] leading-relaxed">
              Crafting exceptional coffee experiences in the heart of the desert, where artisanal traditions meet Southwestern warmth.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--color-secondary)] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Visit Us
            </h4>
            <div className="space-y-3 text-[var(--color-secondary)]">
              <p>7014 E Camelback Rd</p>
              <p>Scottsdale, AZ 85251</p>
              <p>
                <a href="tel:4805550199" className="hover:text-white transition-colors">
                  (480) 555-0199
                </a>
              </p>
              <p>
                <a href="mailto:hello@beanandbrew.com" className="hover:text-white transition-colors">
                  hello@beanandbrew.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours & Social Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Hours & Connect
            </h4>
            <div className="space-y-3 text-[var(--color-secondary)]">
              <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
              <p>Sat-Sun: 7:00 AM - 9:00 PM</p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Row */}
        <div className="border-t border-[var(--color-accent)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--color-secondary)] text-sm">
              © 2024 Bean & Brew Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[var(--color-secondary)] hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[var(--color-secondary)] hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}>
      <head>
        <style jsx global>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2B48C;
            --color-accent: #CD853F;
            --color-bg: #FFF8F0;
            --color-text: #2C1810;
            --color-surface: #F5F0E8;
            --color-muted: #8B7968;
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
            --duration-fast: 150ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: var(--font-cormorant-garamond), 'Playfair Display', serif;
            --font-body: var(--font-source-sans-3), 'Inter', sans-serif;
          }
          
          body {
            font-family: var(--font-body);
            background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface) 100%);
            min-height: 100vh;
            position: relative;
          }
          
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill-opacity="0.03"><circle cx="30" cy="30" r="2" fill="%23CD853F"/><circle cx="10" cy="10" r="1" fill="%23CD853F"/><circle cx="50" cy="50" r="1.5" fill="%23CD853F"/></g></svg>');
            pointer-events: none;
            z-index: -1;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            color: var(--color-text);
            font-weight: 600;
          }
          
          @keyframes coffeeBean {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          .coffee-bean-scatter {
            position: absolute;
            width: 8px;
            height: 12px;
            background: var(--color-accent);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            animation: coffeeBean 8s infinite ease-in-out;
          }
        `}</style>
      </head>
      <body>
        <TransparentScrollNav />
        <main className="min-h-screen">
          {children}
        </main>
        <RichColumnsFooter />
        
        {/* Coffee bean scatter animation elements */}
        <div className="fixed top-20 left-10 coffee-bean-scatter" style={{ animationDelay: '0s' }} />
        <div className="fixed top-40 right-20 coffee-bean-scatter" style={{ animationDelay: '2s' }} />
        <div className="fixed bottom-40 left-20 coffee-bean-scatter" style={{ animationDelay: '4s' }} />
        <div className="fixed bottom-20 right-10 coffee-bean-scatter" style={{ animationDelay: '6s' }} />
      </body>
    </html>
  );
}
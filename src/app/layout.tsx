"use client";

import { Inter, Cormorant_Garamond } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FadeInUp } from '@/components/fade-in-up';
import { ShineBorder } from '@/components/shine-border';
import { cn } from '@/lib/utils';
import './globals.css';

const heading = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700']
});

const body = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
});

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/story' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Visit Us', href: '/visit' }
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled 
        ? 'backdrop-blur-md bg-surface/90 shadow-lg' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded-full"></div>
            </div>
            <span className={cn(
              "text-2xl font-bold text-text",
              heading.className
            )}>
              Bean & Brew
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-text hover:text-primary transition-colors duration-300",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
                  "after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-full",
                  body.className
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col space-y-1.5 w-6 h-6 justify-center"
          >
            <div className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-2"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              mobileOpen && "opacity-0"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-4 pt-6 border-t border-accent/20">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-text hover:text-primary transition-colors duration-300",
                  body.className
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-text text-background py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInUp delay={0}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <div className="w-7 h-7 bg-background rounded-full"></div>
            </div>
            <span className={cn(
              "text-3xl font-bold",
              heading.className
            )}>
              Bean & Brew Coffee
            </span>
          </div>
        </FadeInUp>

        <FadeInUp delay={100}>
          <p className={cn(
            "text-lg text-background/80 mb-8 max-w-md mx-auto",
            body.className
          )}>
            Where desert warmth meets artisanal coffee culture in the heart of Scottsdale
          </p>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={cn(
                  "text-background/80 hover:text-background transition-colors duration-300",
                  body.className
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={300}>
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <h4 className={cn(
                "font-semibold text-background mb-2",
                heading.className
              )}>Visit Us</h4>
              <p className={cn("text-background/70", body.className)}>7014 E Camelback Rd</p>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold text-background mb-2",
                heading.className
              )}>Call Us</h4>
              <p className={cn("text-background/70", body.className)}>(480) 555-0199</p>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold text-background mb-2",
                heading.className
              )}>Email Us</h4>
              <p className={cn("text-background/70", body.className)}>hello@beanandbrew.com</p>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={400}>
          <div className="flex justify-center space-x-6 mb-8">
            <ShineBorder 
              borderRadius={24}
              borderWidth={2}
              duration={3000}
              color={['#CD853F', '#D2691E']}
              className="p-3 bg-transparent hover:bg-accent/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </ShineBorder>
            
            <ShineBorder 
              borderRadius={24}
              borderWidth={2}
              duration={3000}
              color={['#CD853F', '#D2691E']}
              className="p-3 bg-transparent hover:bg-accent/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z"/>
              </svg>
            </ShineBorder>
            
            <ShineBorder 
              borderRadius={24}
              borderWidth={2}
              duration={3000}
              color={['#CD853F', '#D2691E']}
              className="p-3 bg-transparent hover:bg-accent/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </ShineBorder>
          </div>
        </FadeInUp>

        <div className="border-t border-background/20 pt-6">
          <p className={cn(
            "text-background/60 text-sm",
            body.className
          )}>
            © {new Date().getFullYear()} Bean & Brew Coffee. All rights reserved.
          </p>
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
    <html lang="en" className={cn(heading.variable, body.variable)}>
      <head>
        <style>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2691E;
            --color-accent: #CD853F;
            --color-bg: #FFF8DC;
            --color-text: #2F1B14;
            --color-surface: #F5E6D3;
            --color-muted: #A0826D;
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: var(--font-cormorant-garamond);
            --font-body: var(--font-inter);
          }
        `}</style>
      </head>
      <body className={cn(
        "bg-bg text-text antialiased min-h-screen",
        body.className
      )}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
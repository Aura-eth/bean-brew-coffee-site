"use client";

import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Playfair Display", "serif"]
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["Inter", "sans-serif"]
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" }
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-var(--color-primary) font-[var(--font-heading)]">
          Bean & Brew
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium",
                "relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5",
                "after:bg-[var(--color-primary)] after:transition-all after:duration-300",
                "hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-300",
            isMobileMenuOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-[var(--color-text)] transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-300",
            isMobileMenuOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-text)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] mb-4">
              Bean & Brew Coffee
            </h3>
            <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
              Crafting exceptional coffee experiences in the heart of Scottsdale, where desert warmth meets artisanal brewing.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4 font-[var(--font-heading)]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4 font-[var(--font-heading)]">
              Contact
            </h4>
            <div className="space-y-2 text-[var(--color-muted)]">
              <p>7014 E Camelback Rd</p>
              <p>Scottsdale, AZ 85251</p>
              <p className="mt-4">
                <a href="tel:(480) 555-0199" className="hover:text-[var(--color-primary)] transition-colors">
                  (480) 555-0199
                </a>
              </p>
              <p>
                <a href="mailto:hello@beanandbrew.com" className="hover:text-[var(--color-primary)] transition-colors">
                  hello@beanandbrew.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Hours & Social Column */}
          <div>
            <h4 className="font-semibold text-[var(--color-primary)] mb-4 font-[var(--font-heading)]">
              Hours & Social
            </h4>
            <div className="space-y-2 text-[var(--color-muted)] mb-6">
              <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
              <p>Sat-Sun: 7:00 AM - 9:00 PM</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Row */}
        <div className="border-t border-[var(--color-muted)]/20 pt-8 text-center text-[var(--color-muted)]">
          <p>&copy; 2024 Bean & Brew Coffee. All rights reserved.</p>
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
      <head />
      <body className="font-[var(--font-body)] bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <style jsx>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2691E;
            --color-accent: #CD853F;
            --color-bg: #FDF6E3;
            --color-text: #2F1B14;
            --color-surface: #F5EFE7;
            --color-muted: #8B7355;
            --space-section: 5rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 150ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: var(--font-cormorant-garamond);
            --font-body: var(--font-source-sans-3);
          }
        `}</style>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
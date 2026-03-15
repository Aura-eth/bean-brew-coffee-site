"use client";

import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FadeInUp } from "@/components/fade-in-up";
import { ShineBorder } from "@/components/shine-border";
import { cn } from "@/lib/utils";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  fallback: ["Playfair Display", "serif"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  fallback: ["Inter", "sans-serif"],
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "backdrop-blur-lg bg-white/90 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-700 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
            </div>
            <span className="font-heading text-2xl font-bold text-amber-900">
              Bean & Brew
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-amber-900 hover:text-orange-600 transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-amber-900"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-current transform transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-current transform transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-amber-900 hover:text-orange-600 transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Coffee Bean Scatter Pattern */}
      <div className="relative overflow-hidden py-16">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200">
          <defs>
            <pattern id="coffeeBeans" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <ellipse cx="15" cy="20" rx="3" ry="6" fill="currentColor" opacity="0.3" transform="rotate(25 15 20)" />
              <ellipse cx="30" cy="10" rx="3" ry="6" fill="currentColor" opacity="0.2" transform="rotate(-15 30 10)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coffeeBeans)" />
        </svg>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <FadeInUp delay={0}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full opacity-90"></div>
                  </div>
                  <span className="font-heading text-3xl font-bold text-amber-50">
                    Bean & Brew Coffee
                  </span>
                </div>
                <p className="text-amber-200 text-lg leading-relaxed max-w-md">
                  Crafting exceptional coffee experiences in the heart of Scottsdale. 
                  Where desert warmth meets artisanal brewing.
                </p>
              </FadeInUp>
            </div>

            {/* Navigation Column */}
            <div>
              <FadeInUp delay={100}>
                <h3 className="font-heading text-xl font-semibold mb-6 text-amber-100">
                  Explore
                </h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-amber-200 hover:text-amber-100 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>

            {/* Contact Column */}
            <div>
              <FadeInUp delay={200}>
                <h3 className="font-heading text-xl font-semibold mb-6 text-amber-100">
                  Connect
                </h3>
                <div className="space-y-3 text-amber-200">
                  <p>
                    <span className="block font-medium text-amber-100">Address</span>
                    7014 E Camelback Rd<br />
                    Scottsdale, AZ
                  </p>
                  <p>
                    <span className="block font-medium text-amber-100">Phone</span>
                    <a href="tel:4805550199" className="hover:text-amber-100 transition-colors">
                      (480) 555-0199
                    </a>
                  </p>
                  <p>
                    <span className="block font-medium text-amber-100">Email</span>
                    <a href="mailto:hello@beanandbrew.com" className="hover:text-amber-100 transition-colors">
                      hello@beanandbrew.com
                    </a>
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4">
                    <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.228 14.894 3.741 13.743 3.741 12.446s.487-2.448 1.385-3.323C6.001 8.248 7.152 7.761 8.449 7.761s2.448.487 3.323 1.362c.898.875 1.385 2.026 1.385 3.323s-.487 2.448-1.385 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="border-t border-amber-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-amber-300">
            <p>&copy; 2024 Bean & Brew Coffee. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Crafted with care in Scottsdale, Arizona</p>
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
    <html lang="en" className={`${cormorantGaramond.variable} ${sourceSans.variable}`}>
      <head>
        <style>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2691E;
            --color-accent: #CD853F;
            --color-bg: #FDF5E6;
            --color-text: #2F1B14;
            --color-surface: #F5F5DC;
            --color-muted: #A0826D;
            
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            
            --ease-out: cubic-bezier(0.25, 1, 0.5, 1);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            
            --font-heading: ${cormorantGaramond.style.fontFamily};
            --font-body: ${sourceSans.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="bg-stone-50 text-amber-900 font-body antialiased">
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
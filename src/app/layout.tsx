"use client";

import { Inter, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FadeInUp } from "@/components/fade-in-up";
import { cn } from "@/lib/utils";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"]
});

const sourceSerifPro = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Visit Us", href: "/contact" }
  ];

  return (
    <>
      <style jsx global>{`
        .coffee-ring {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid var(--color-primary);
          border-radius: 50%;
          opacity: 0.1;
          pointer-events: none;
        }
        .floating-beans {
          position: fixed;
          width: 8px;
          height: 10px;
          background: var(--color-primary);
          border-radius: 60% 40% 60% 40%;
          opacity: 0.15;
          pointer-events: none;
          transform: rotate(45deg);
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>
      
      <div className="floating-beans" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
      <div className="floating-beans" style={{ top: '60%', right: '15%', animationDelay: '2s' }} />
      <div className="floating-beans" style={{ bottom: '30%', left: '20%', animationDelay: '1s' }} />
      
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "backdrop-blur-md bg-var(--color-surface)/90 shadow-sm"
            : "transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-var(--color-primary) font-heading">
              Bean & Brew
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-var(--color-text) hover:text-var(--color-primary) transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1 w-6 h-6"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={cn(
                "w-full h-0.5 bg-var(--color-text) transition-transform duration-200",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )} />
              <div className={cn(
                "w-full h-0.5 bg-var(--color-text) transition-opacity duration-200",
                isMobileMenuOpen && "opacity-0"
              )} />
              <div className={cn(
                "w-full h-0.5 bg-var(--color-text) transition-transform duration-200",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-var(--color-surface) shadow-lg border-t">
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-var(--color-text) hover:text-var(--color-primary) transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-var(--color-text) text-var(--color-bg) relative overflow-hidden">
      <div className="coffee-ring" style={{ top: '20px', right: '10%' }} />
      <div className="coffee-ring" style={{ bottom: '30px', left: '15%' }} />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <h3 className="text-2xl font-bold font-heading mb-4 text-var(--color-secondary)">
                Bean & Brew Coffee
              </h3>
              <p className="text-var(--color-muted) leading-relaxed mb-6">
                Crafting exceptional coffee experiences in the heart of Arizona's desert landscape.
              </p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h4 className="text-lg font-semibold font-heading mb-4 text-var(--color-secondary)">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Home</Link></li>
                <li><Link href="/menu" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Menu</Link></li>
                <li><Link href="/about" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Our Story</Link></li>
                <li><Link href="/events" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Events</Link></li>
                <li><Link href="/contact" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Visit Us</Link></li>
              </ul>
            </FadeInUp>
          </div>

          {/* Contact Column */}
          <div>
            <FadeInUp delay={200}>
              <h4 className="text-lg font-semibold font-heading mb-4 text-var(--color-secondary)">
                Contact Info
              </h4>
              <div className="space-y-3 text-var(--color-muted)">
                <p>7014 E Camelback Rd</p>
                <p>(480) 555-0199</p>
                <p>hello@beanandbrew.com</p>
              </div>
            </FadeInUp>
          </div>

          {/* Hours & Social */}
          <div>
            <FadeInUp delay={300}>
              <h4 className="text-lg font-semibold font-heading mb-4 text-var(--color-secondary)">
                Connect
              </h4>
              <div className="space-y-4">
                <div className="text-var(--color-muted)">
                  <p className="font-medium mb-2">Hours</p>
                  <p className="text-sm">Mon-Fri: 6am-8pm</p>
                  <p className="text-sm">Sat-Sun: 7am-9pm</p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323c-.875.807-2.026 1.167-3.323 1.167z" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-var(--color-muted)/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-var(--color-muted) text-sm">
              © 2024 Bean & Brew Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-var(--color-muted) hover:text-var(--color-accent) transition-colors duration-200">Terms of Service</a>
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
    <html lang="en" className={cn(cormorantGaramond.variable, sourceSerifPro.variable)}>
      <head>
        <style>
          {`
            :root {
              --color-primary: #8B4513;
              --color-secondary: #D2B48C;
              --color-accent: #E67E22;
              --color-bg: #FFF8F0;
              --color-text: #2C1810;
              --color-surface: #FFFFFF;
              --color-muted: #8B7355;
              --space-section: 5rem;
              --space-content: 3rem;
              --space-element: 1.5rem;
              --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
              --duration-fast: 200ms;
              --duration-normal: 300ms;
              --duration-slow: 500ms;
              --font-heading: var(--font-cormorant-garamond), 'Playfair Display', serif;
              --font-body: var(--font-inter), 'Source Sans 3', sans-serif;
            }
            
            body {
              background-color: var(--color-bg);
              color: var(--color-text);
              font-family: var(--font-body);
              line-height: 1.6;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-heading);
              line-height: 1.3;
            }
          `}
        </style>
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
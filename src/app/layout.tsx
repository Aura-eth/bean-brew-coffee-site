"use client"

import { Inter, Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FadeInUp } from '@/components/fade-in-up'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading' 
})
const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body'
})

const navLinks = [
  {"label":"Home","href":"/"},
  {"label":"Menu","href":"/menu"},
  {"label":"About","href":"/about"},
  {"label":"Events","href":"/events"},
  {"label":"Visit","href":"/visit"}
]

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-heading text-2xl font-bold text-[var(--color-text)]">
              Bean & Brew
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="font-body text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={cn(
                "h-0.5 bg-[var(--color-text)] transition-all",
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              )}></div>
              <div className={cn(
                "h-0.5 bg-[var(--color-text)] transition-all",
                isMobileMenuOpen ? "opacity-0" : ""
              )}></div>
              <div className={cn(
                "h-0.5 bg-[var(--color-text)] transition-all",
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              )}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[var(--color-muted)]">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 font-body text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg)] rounded-md transition-colors"
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
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-white relative overflow-hidden">
      {/* Coffee Bean Pattern SVG */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <g>
            <ellipse cx="100" cy="80" rx="8" ry="12" fill="currentColor" transform="rotate(25 100 80)" />
            <ellipse cx="250" cy="120" rx="6" ry="10" fill="currentColor" transform="rotate(-15 250 120)" />
            <ellipse cx="400" cy="60" rx="7" ry="11" fill="currentColor" transform="rotate(45 400 60)" />
            <ellipse cx="600" cy="140" rx="8" ry="12" fill="currentColor" transform="rotate(-30 600 140)" />
            <ellipse cx="150" cy="200" rx="6" ry="10" fill="currentColor" transform="rotate(60 150 200)" />
            <ellipse cx="350" cy="180" rx="7" ry="11" fill="currentColor" transform="rotate(-45 350 180)" />
            <ellipse cx="550" cy="220" rx="8" ry="12" fill="currentColor" transform="rotate(15 550 220)" />
            <ellipse cx="80" cy="300" rx="6" ry="10" fill="currentColor" transform="rotate(-60 80 300)" />
            <ellipse cx="300" cy="320" rx="7" ry="11" fill="currentColor" transform="rotate(30 300 320)" />
            <ellipse cx="500" cy="340" rx="8" ry="12" fill="currentColor" transform="rotate(-15 500 340)" />
            <ellipse cx="700" cy="280" rx="6" ry="10" fill="currentColor" transform="rotate(75 700 280)" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="font-heading text-2xl font-bold">
                  Bean & Brew
                </span>
              </div>
              <p className="font-body text-white/80 leading-relaxed mb-6">
                Crafting exceptional coffee experiences in the heart of Arizona's desert landscape. Every cup tells a story of passion, community, and artisanal excellence.
              </p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--color-accent)]">
                Explore
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="font-body text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/gift-cards"
                    className="font-body text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </FadeInUp>
          </div>

          {/* Contact Column */}
          <div>
            <FadeInUp delay={200}>
              <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--color-accent)]">
                Visit Us
              </h3>
              <div className="space-y-4 font-body text-white/80">
                <div>
                  <p className="font-medium text-white mb-1">Address</p>
                  <p className="leading-relaxed">
                    7014 E Camelback Rd<br />
                    Scottsdale, AZ 85251
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a href="tel:4805550199" className="hover:text-[var(--color-accent)] transition-colors">
                    (480) 555-0199
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a href="mailto:hello@beanandbrew.com" className="hover:text-[var(--color-accent)] transition-colors">
                    hello@beanandbrew.com
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Hours & Social Column */}
          <div>
            <FadeInUp delay={300}>
              <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--color-accent)]">
                Hours
              </h3>
              <div className="space-y-2 font-body text-white/80 mb-8">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="font-body text-white/60">
            © 2024 Bean & Brew Coffee. All rights reserved. Crafted with passion in Arizona.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2691E;
            --color-accent: #CD853F;
            --color-bg: #FFF8F0;
            --color-text: #2F1B14;
            --color-surface: #FFFFFF;
            --color-muted: #F5E6D3;
            --font-heading: ${cormorant.style.fontFamily}, 'Playfair Display', serif;
            --font-body: ${sourceSans.style.fontFamily}, ${inter.style.fontFamily}, sans-serif;
            --space-section: 6rem;
            --space-content: 2rem;
            --space-element: 1rem;
            --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
          }
          
          @media (max-width: 768px) {
            :root {
              --space-section: 4rem;
            }
          }
        `}</style>
      </head>
      <body className={cn(
        cormorant.variable,
        sourceSans.variable,
        inter.variable,
        "antialiased bg-[var(--color-bg)] text-[var(--color-text)] font-body"
      )}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
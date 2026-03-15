"use client"

import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import './globals.css'

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
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
      isScrolled ? 'backdrop-blur-md bg-surface/90 shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-surface rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="text-xl font-heading font-semibold text-text">Bean & Brew</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors duration-300 font-body font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1 p-2"
          >
            <span className={cn(
              'block w-6 h-0.5 bg-text transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            )}></span>
            <span className={cn(
              'block w-6 h-0.5 bg-text transition-all duration-300',
              isMobileMenuOpen ? 'opacity-0' : ''
            )}></span>
            <span className={cn(
              'block w-6 h-0.5 bg-text transition-all duration-300',
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            )}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-text hover:text-primary hover:bg-secondary/10 transition-all duration-300 font-body font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-text text-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-text rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-surface rounded-full"></div>
                </div>
              </div>
              <div className="text-xl font-heading font-semibold">Bean & Brew</div>
            </div>
            <p className="text-surface/80 font-body leading-relaxed mb-6">
              Crafting exceptional coffee experiences in the heart of Scottsdale. From bean to cup, we celebrate the artistry of coffee.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-surface/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-surface/60 hover:text-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/80 hover:text-accent transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-surface/80 font-body">
              <div>
                <p>7014 E Camelback Rd</p>
                <p>Scottsdale, AZ 85251</p>
              </div>
              <div>
                <p className="hover:text-accent transition-colors duration-300">
                  <a href="tel:(480) 555-0199">(480) 555-0199</a>
                </p>
              </div>
              <div>
                <p className="hover:text-accent transition-colors duration-300">
                  <a href="mailto:hello@beanandbrew.com">hello@beanandbrew.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Hours</h4>
            <div className="space-y-2 text-surface/80 font-body text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
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
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-surface/20 mt-12 pt-8 text-center">
          <p className="text-surface/60 font-body text-sm">
            © 2024 Bean & Brew Coffee. All rights reserved. | Crafted with ❤️ in Scottsdale
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
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <style>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2B48C;
            --color-accent: #FF6B35;
            --color-bg: #FDF8F3;
            --color-text: #2C1810;
            --color-surface: #FFFFFF;
            --color-muted: #6B7280;
            --space-section: 6rem;
            --space-content: 2rem;
            --space-element: 1rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 200ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: var(--font-cormorant);
            --font-body: var(--font-source-sans);
          }
        `}</style>
      </head>
      <body className="font-body bg-bg text-text antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { FadeInUp } from '@/components/fade-in-up'
import { cn } from '@/lib/utils'
import './globals.css'

const heading = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-heading' })
const body = Source_Sans_3({ subsets: ['latin'], variable: '--font-body' })

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/story" },
  { label: "Events", href: "/events" },
  { label: "Visit Us", href: "/visit" }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Nav = () => (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
            <span className="font-[var(--font-heading)]">Bean & Brew</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={cn('block h-0.5 w-6 bg-current transform transition-transform', isMobileMenuOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('block h-0.5 w-6 bg-current transition-opacity', isMobileMenuOpen && 'opacity-0')} />
              <span className={cn('block h-0.5 w-6 bg-current transform transition-transform', isMobileMenuOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[var(--color-surface)] py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )

  const Footer = () => (
    <footer className="bg-[var(--color-text)] text-[var(--color-bg)] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <h3 className="text-3xl font-bold mb-4 font-[var(--font-heading)] text-[var(--color-accent)]">Bean & Brew Coffee</h3>
              <p className="text-gray-300 leading-relaxed">Crafting exceptional coffee experiences in the heart of the desert, where every cup tells a story of passion and community.</p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h4 className="text-lg font-semibold mb-6 text-[var(--color-secondary)]">Navigate</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
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
              <h4 className="text-lg font-semibold mb-6 text-[var(--color-secondary)]">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p>7014 E Camelback Rd<br />Scottsdale, AZ</p>
                <p>
                  <a href="tel:(480) 555-0199" className="hover:text-[var(--color-accent)] transition-colors">
                    (480) 555-0199
                  </a>
                </p>
                <p>
                  <a href="mailto:hello@beanandbrew.com" className="hover:text-[var(--color-accent)] transition-colors">
                    hello@beanandbrew.com
                  </a>
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Social Column */}
          <div>
            <FadeInUp delay={300}>
              <h4 className="text-lg font-semibold mb-6 text-[var(--color-secondary)]">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C23.975 5.367 18.608.001 12.017.001zM8.449 16.988c-1.297 0-2.343-1.046-2.343-2.343s1.046-2.343 2.343-2.343 2.343 1.046 2.343 2.343-1.046 2.343-2.343 2.343zm7.138 0c-1.297 0-2.343-1.046-2.343-2.343s1.046-2.343 2.343-2.343 2.343 1.046 2.343 2.343-1.046 2.343-2.343 2.343z" />
                  </svg>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bean & Brew Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en" className={cn(heading.variable, body.variable)}>
      <head>
        <style>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2691E;
            --color-accent: #CD853F;
            --color-bg: #FDF5E6;
            --color-text: #2F1B14;
            --color-surface: #F5E6D3;
            --color-muted: #A0886B;
            --space-section: 5rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 150ms;
            --duration-normal: 300ms;
            --duration-slow: 500ms;
            --font-heading: ${heading.style.fontFamily};
            --font-body: ${body.style.fontFamily};
          }
          
          body {
            font-family: var(--font-body);
            background-color: var(--color-bg);
            color: var(--color-text);
            line-height: 1.7;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            line-height: 1.3;
          }
          
          .coffee-bean-pattern {
            background-image: radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.05) 2px, transparent 2px),
                            radial-gradient(circle at 80% 50%, rgba(205, 133, 63, 0.05) 2px, transparent 2px);
            background-size: 60px 40px;
          }
          
          .steam-hover {
            position: relative;
            overflow: hidden;
          }
          
          .steam-hover:hover::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            transform: translateX(-100%);
            animation: steam 1s ease-out;
          }
          
          @keyframes steam {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </head>
      <body className="antialiased">
        <Nav />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
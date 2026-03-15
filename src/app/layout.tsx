"use client"

import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FadeInUp } from "@/components/fade-in-up"
import { cn } from "@/lib/utils"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading"
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
})

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/story" },
  { label: "Events", href: "/events" },
  { label: "Visit Us", href: "/visit" }
]

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
      isScrolled 
        ? "bg-white/90 backdrop-blur-sm shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
            <span className="font-heading text-2xl font-bold text-[var(--color-text)]">Bean & Brew</span>
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
            className="md:hidden flex flex-col space-y-1 w-6 h-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={cn(
              "block w-full h-0.5 bg-[var(--color-text)] transition-transform duration-200",
              isMobileMenuOpen && "rotate-45 translate-y-1.5"
            )} />
            <span className={cn(
              "block w-full h-0.5 bg-[var(--color-text)] transition-opacity duration-200",
              isMobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "block w-full h-0.5 bg-[var(--color-text)] transition-transform duration-200",
              isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
            )} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-3 border-t border-[var(--color-muted)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium py-2"
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
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
                <span className="font-heading text-2xl font-bold text-[var(--color-text)]">Bean & Brew</span>
              </div>
              <p className="font-body text-[var(--color-muted)] leading-relaxed">
                Artisan coffee roasted fresh daily in the heart of Scottsdale. Where desert modernism meets coffee culture.
              </p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
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
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">Visit Us</h3>
              <div className="space-y-3">
                <p className="font-body text-[var(--color-muted)]">
                  7014 E Camelback Rd<br />
                  Scottsdale, AZ 85251
                </p>
                <p className="font-body text-[var(--color-muted)]">
                  <a href="tel:4805550199" className="hover:text-[var(--color-primary)] transition-colors">
                    (480) 555-0199
                  </a>
                </p>
                <p className="font-body text-[var(--color-muted)]">
                  <a href="mailto:hello@beanandbrew.com" className="hover:text-[var(--color-primary)] transition-colors">
                    hello@beanandbrew.com
                  </a>
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Social Column */}
          <div>
            <FadeInUp delay={300}>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white hover:bg-[var(--color-secondary)] transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white hover:bg-[var(--color-secondary)] transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L7.07 14.11c.333.608.968 1.016 1.704 1.016.635 0 1.216-.246 1.647-.647.431-.4.678-.961.678-1.569 0-.608-.247-1.169-.678-1.569-.431-.4-1.012-.647-1.647-.647-.736 0-1.371.408-1.704 1.016l-1.637-1.078c.568-1.07 1.719-1.8 3.016-1.8 1.909 0 3.456 1.547 3.456 3.456 0 1.909-1.547 3.456-3.456 3.456z"/>
                  </svg>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        <div className="border-t border-[var(--color-muted)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-[var(--color-muted)] text-sm">
              © 2024 Bean & Brew Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-body text-[var(--color-muted)] text-sm hover:text-[var(--color-primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-[var(--color-muted)] text-sm hover:text-[var(--color-primary)] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
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
        <style>
          {`
            :root {
              --color-primary: #8B4513;
              --color-secondary: #D2691E;
              --color-accent: #CD853F;
              --color-bg: #FFF8F0;
              --color-text: #2C1810;
              --color-surface: #F5F5DC;
              --color-muted: #8B7355;
              --font-heading: var(--font-cormorant-garamond);
              --font-body: var(--font-source-sans-3);
              --space-section: 5rem;
              --space-content: 3rem;
              --space-element: 1.5rem;
              --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
              --duration-fast: 150ms;
              --duration-normal: 300ms;
              --duration-slow: 500ms;
            }
          `}
        </style>
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-body antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
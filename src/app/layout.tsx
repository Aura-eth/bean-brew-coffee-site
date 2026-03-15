"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
import { FadeInUp } from "@/components/fade-in-up"
import { cn } from "@/lib/utils"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Playfair Display", "serif"]
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["Inter", "sans-serif"]
})

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Visit Us", href: "/contact" }
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-heading text-xl lg:text-2xl font-bold text-primary">
              Bean & Brew
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-text transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-text transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-text transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-surface py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-text hover:text-primary hover:bg-surface/50 transition-all duration-200"
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
}

function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="font-heading text-xl font-bold">
                  Bean & Brew Coffee
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Crafting exceptional coffee experiences in the heart of Scottsdale, where desert warmth meets artisanal excellence.
              </p>
            </FadeInUp>
          </div>

          {/* Navigation Column */}
          <div>
            <FadeInUp delay={100}>
              <h3 className="font-heading text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-colors duration-200"
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
              <h3 className="font-heading text-lg font-semibold mb-4">Visit Us</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium">Address</p>
                  <p>7014 E Camelback Rd</p>
                  <p>Scottsdale, AZ 85251</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:4805550199" className="hover:text-accent transition-colors">
                    (480) 555-0199
                  </a>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@beanandbrew.com" className="hover:text-accent transition-colors">
                    hello@beanandbrew.com
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Hours & Social Column */}
          <div>
            <FadeInUp delay={300}>
              <h3 className="font-heading text-lg font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-gray-300 mb-6">
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
              <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.566-1.35 2.14-2.21z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.703 0 1.042.219 1.042 1.219 0 .738-.469 1.844-.711 2.867-.203.855.428 1.551 1.266 1.551 1.52 0 2.687-1.603 2.687-3.912 0-2.044-1.469-3.474-3.565-3.474-2.429 0-3.858 1.818-3.858 3.696 0 .732.283 1.519.635 1.943.07.083.08.156.059.242-.064.267-.206.835-.234.951-.037.155-.12.188-.277.114-1.073-.5-1.745-2.076-1.745-3.342 0-2.69 1.955-5.158 5.635-5.158 2.967 0 5.273 2.117 5.273 4.938 0 2.947-1.857 5.32-4.438 5.32-.867 0-1.682-.451-1.961-.992l-.535 2.041c-.194.754-.719 1.699-1.07 2.278C8.753 23.596 10.325 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bean & Brew Coffee. All rights reserved. Crafted with love in Scottsdale, Arizona.
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
    <html lang="en" className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}>
      <head>
        <style jsx global>{`
          :root {
            --color-primary: #8B4513;
            --color-secondary: #D2B48C;
            --color-accent: #FF6B35;
            --color-bg: #FFF8F0;
            --color-text: #2C1810;
            --color-surface: #F5E6D3;
            --color-muted: #A0927F;
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 0.2s;
            --duration-normal: 0.3s;
            --duration-slow: 0.5s;
            --font-heading: var(--font-cormorant-garamond);
            --font-body: var(--font-source-sans-3);
          }

          body {
            font-family: var(--font-body);
            background-color: var(--color-bg);
            color: var(--color-text);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
          }

          .primary { color: var(--color-primary); }
          .secondary { color: var(--color-secondary); }
          .accent { color: var(--color-accent); }
          .text { color: var(--color-text); }
          .surface { background-color: var(--color-surface); }

          @keyframes coffeeBean {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
            100% { transform: translateY(0px) rotate(360deg); }
          }

          .coffee-bean-float {
            animation: coffeeBean 3s ease-in-out infinite;
          }
        `}</style>
      </head>
      <body className="min-h-screen">
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
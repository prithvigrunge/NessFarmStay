'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, MessageCircle } from 'lucide-react'
import { createWhatsAppLink } from '@/lib/utils'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleResize()
    handleScroll()

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center transition-all ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e as any, '#hero')}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/images/logo.jpg"
              alt="Ness Farm Stay Logo"
              fill
              className="object-contain rounded-full"
              unoptimized
            />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold text-primary hidden sm:block">
            Ness Farm Stay
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#villas"
            onClick={(e) => handleSmoothScroll(e as any, '#villas')}
            className="text-charcoal hover:text-primary transition-colors font-medium"
          >
            Our Villas
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e as any, '#experience')}
            className="text-charcoal hover:text-primary transition-colors font-medium"
          >
            Experience
          </a>
          <a
            href="#location"
            onClick={(e) => handleSmoothScroll(e as any, '#location')}
            className="text-charcoal hover:text-primary transition-colors font-medium"
          >
            Location
          </a>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-background z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 space-y-6">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.jpg"
                alt="Ness Farm Stay Logo"
                fill
                className="object-contain rounded-full"
                unoptimized
              />
            </div>
            <span className="font-serif text-xl font-bold text-primary">
              Ness Farm Stay
            </span>
          </div>
          
          <a
            href="#villas"
            onClick={(e) => handleSmoothScroll(e as any, '#villas')}
            className="block text-lg text-charcoal hover:text-primary transition-colors font-medium"
          >
            Our Villas
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e as any, '#experience')}
            className="block text-lg text-charcoal hover:text-primary transition-colors font-medium"
          >
            Experience
          </a>
          <a
            href="#location"
            onClick={(e) => handleSmoothScroll(e as any, '#location')}
            className="block text-lg text-charcoal hover:text-primary transition-colors font-medium"
          >
            Location
          </a>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 w-full justify-center mt-8"
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

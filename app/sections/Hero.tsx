'use client'

import React from 'react'
import HeroCarousel from '../components/HeroCarousel'

const Hero: React.FC = () => {
  const heroImages = [
    {
      src: '/images/hero-1.jpg',
      alt: 'Ness Farm Stay - Main View',
    },
    {
      src: '/images/hero-2.jpg',
      alt: 'Ness Farm Stay - Mountain View',
    },
  ]

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <HeroCarousel images={heroImages} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Escape to Nature in Panchkhal
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          A private 2-villa farm retreat near Palanchok Bhagawati Temple
        </p>
        <a
          href="#location"
          className="btn-secondary inline-block"
        >
          Check Availability
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Villas from './sections/Villas'
import Experience from './sections/Experience'
import Location from './sections/Location'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <Hero />

      {/* Villas Section */}
      <Villas />

      {/* Experience Section */}
      <Experience />

      {/* Location & Contact Section */}
      <Location />

      {/* Footer */}
      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Logo and Tagline */}
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Ness Farm Stay Logo"
                fill
                className="object-contain rounded-full border-2 border-white/30"
                unoptimized
              />
            </div>
            <h2 className="font-serif text-3xl font-semibold mb-2">Ness Farm Stay</h2>
            <p className="text-white/80">Your private retreat in the Himalayas</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=61587979017352"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-full transition-colors shadow-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://instagram.com/nessfarmstay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-colors shadow-lg"
              style={{ 
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' 
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://wa.me/9779808120452?text=Namaste!%20I%20am%20interested%20in%20booking%20a%20stay%20at%20Ness%20Ness%20Farm%20Stay."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#25D366] hover:bg-[#128C7E] rounded-full transition-colors shadow-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/20 pt-6">
            <p className="text-sm text-white/80 mb-2">
              © 2026 Ness Farm Stay. All rights reserved.
            </p>
            <p className="text-xs text-white/60">
              Designed with care in Panchkhal
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

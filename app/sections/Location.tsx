'use client'

import React from 'react'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import MapEmbed from '../components/MapEmbed'

const Location: React.FC = () => {
  const getDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=JMMF%2BFM4%2C+Panchkhal+45200%2C+Nepal',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const callPhone = () => {
    window.open('tel:+9779808120452')
  }

  const whatsappBooking = () => {
    window.open(
      'https://wa.me/9779808120452?text=' +
        encodeURIComponent('Namaste! I am interested in booking a stay at Ness Farm Stay.'),
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="location" className="bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-8 md:mb-12 text-center">
          Find Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div>
            <MapEmbed />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">Location</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-charcoal font-medium">JMMF+FM4, Panchkhal 45200, Kavrepalanchok, Nepal</p>
                    <p className="text-warm-gray text-sm">Located near Palanchok Bhagawati Temple</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">Contact</h3>
              <div className="space-y-3">
                <button
                  onClick={callPhone}
                  className="flex items-center gap-3 text-charcoal hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">+977 980-8120452</span>
                </button>
                <button
                  onClick={whatsappBooking}
                  className="flex items-center gap-3 text-charcoal hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">WhatsApp Booking Available</span>
                </button>
              </div>
            </div>

            <button
              onClick={getDirections}
              className="btn-primary w-full md:w-auto"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

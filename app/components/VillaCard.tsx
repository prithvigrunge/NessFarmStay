'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'
import Carousel from './Carousel'
import { createWhatsAppLink } from '@/lib/utils'

interface VillaFeature {
  icon: LucideIcon
  text: string
}

interface VillaCardProps {
  name: string
  tagline: string
  description: string
  images: string[]
  features: VillaFeature[]
}

const VillaCard: React.FC<VillaCardProps> = ({
  name,
  tagline,
  description,
  images,
  features,
}) => {
  const handleBookClick = () => {
    const link = createWhatsAppLink(name)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {/* Carousel */}
      <div className="mb-6">
        <Carousel images={images} villaName={name} />
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">{name}</h3>
        <p className="text-secondary text-sm uppercase tracking-wide mb-4">{tagline}</p>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-secondary" />
                <span className="text-sm text-charcoal">{feature.text}</span>
              </div>
            )
          })}
        </div>

        {/* Description */}
        <p className="text-warm-gray mb-6 flex-1">{description}</p>

        {/* Book Button */}
        <button
          onClick={handleBookClick}
          className="btn-primary w-full md:w-auto"
        >
          Book {name}
        </button>
      </div>
    </div>
  )
}

export default VillaCard

'use client'

import React from 'react'
import { Bed, Home, Users } from 'lucide-react'
import VillaCard from '../components/VillaCard'

const Villas: React.FC = () => {
  const villas = [
    {
      name: 'Roof Top Suite',
      tagline: 'Spacious Two-Story Retreat',
      description: 'Experience the comfort of our unique two-story retreat. This spacious layout features a private kitchen for your convenience and an attached bathroom. Designed for those who appreciate extra space and a modern layout, the Roof Top Suite offers a private sanctuary within the farm.',
      images: [
        '/images/villas/rooftop/1.jpg',
        '/images/villas/rooftop/2.jpg',
        '/images/villas/rooftop/3.jpg',
      ],
      features: [
        { icon: Home, text: 'Two-storied layout' },
        { icon: Bed, text: 'Attached bathroom' },
        { icon: Users, text: '10 Guests' },
        { icon: Home, text: 'Private kitchen' },
      ],
    },
    {
      name: 'Rock House', 
      tagline: 'Rustic Master-Suite Cabin',
      description: 'The Rock House is a beautiful master-suite cabin defined by its rustic charm and cozy atmosphere. Centered around a master bedroom and a signature fireplace, the home includes a comfortable living hall, a fully equipped kitchen, and an attached bathroom. The unique stone exterior makes it one of the most iconic stays at the farm.',
      images: [
        '/images/villas/rockhouse/1.jpg',
        '/images/villas/rockhouse/2.jpg',
        '/images/villas/rockhouse/3.jpg',
      ],
      features: [
        { icon: Bed, text: '1 Master bedroom' },
        { icon: Home, text: 'Attached bathroom' },
        { icon: Users, text: '10 Guests' },
        { icon: Home, text: 'Living hall' },
        { icon: Home, text: 'Private kitchen' },
      ],
    },
  ]

  return (
    <section id="villas" className="bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            Our Villas
          </h2>
          <p className="text-warm-gray text-lg">
            Two private sanctuaries designed for tranquility
          </p>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {villas.map((villa) => (
            <div key={villa.name} className="h-full">
              <VillaCard
                name={villa.name}
                tagline={villa.tagline}
                description={villa.description}
                images={villa.images}
                features={villa.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Villas

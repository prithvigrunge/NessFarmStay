import React from 'react'
import Image from 'next/image'
import { Utensils, Trees, Footprints } from 'lucide-react'

const Experience: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Organic Farm-to-Table Meals',
      description: 'Fresh ingredients harvested daily from our organic gardens',
    },
    {
      icon: Trees,
      title: 'Peaceful Environment',
      description: 'Wake up to birdsong and mountain views, not traffic',
    },
    {
      icon: Footprints,
      title: 'Hiking Trails to Palanchok Bhagawati',
      description: 'Ancient temple just 30 minutes walk through rhododendron forests',
    },
  ]

  return (
    <section id="experience" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/experience.jpg"
                alt="Farm experience at Ness Farm Stay"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              The Farm Experience
            </h2>
            <p className="text-warm-gray text-lg mb-8">
              Immerse yourself in sustainable living and authentic Nepali hospitality.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-warm-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

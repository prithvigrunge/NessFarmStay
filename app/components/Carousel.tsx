'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps {
  images: string[]
  villaName: string
}

const Carousel: React.FC<CarouselProps> = ({ images, villaName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    draggable: true,
    duration: 30,
  })

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 aspect-[3/2] w-full rounded-lg flex items-center justify-center">
        <span className="text-warm-gray">Image not available</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div className="embla__slide flex-none w-full relative aspect-[3/2]" key={index}>
              <Image
                src={src}
                alt={`${villaName} - Image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (Desktop only) */}
      <div className="hidden md:block absolute inset-y-0 left-0 right-0">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-charcoal" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-charcoal" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-secondary' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

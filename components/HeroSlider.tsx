'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: string
  heading: string
  subheading: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
}

const slides: Slide[] = [
  {
    id: '1',
    heading: 'Scaffolding & Industrial Hardware',
    subheading: 'Export-grade scaffolding systems and industrial hardware for construction projects worldwide',
    ctaText: 'View Products',
    ctaLink: '/products',
    backgroundImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920',
  },
  {
    id: '2',
    heading: 'Fence & Wrought Iron Components',
    subheading: 'High-quality fence fittings and decorative wrought iron components for residential and commercial applications',
    ctaText: 'Explore Categories',
    ctaLink: '/products',
    backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920',
  },
  {
    id: '3',
    heading: 'Export-Grade Tools & Accessories',
    subheading: 'Professional tools and accessories manufactured to international standards for global markets',
    ctaText: 'Request a Quote',
    ctaLink: '/request-quote',
    backgroundImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500) // 4.5 seconds

    return () => clearInterval(interval)
  }, [isMounted])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // Prevent layout shift during SSR
  if (!isMounted) {
    return (
      <section className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-industrial-900">
        <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {slides[0].heading}
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: slide.backgroundImage
                      ? `url(${slide.backgroundImage})`
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/80 via-charcoal-800/80 to-industrial-900/80" />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4 lg:px-6 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-4xl text-white"
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance">
                        {slide.heading}
                      </h1>
                      <p className="text-xl md:text-2xl text-charcoal-200 mb-8 text-balance">
                        {slide.subheading}
                      </p>
                      <Link
                        href={slide.ctaLink}
                        className="inline-flex items-center space-x-2 bg-industrial-600 text-white px-8 py-4 rounded-lg hover:bg-industrial-700 font-semibold text-lg transition-colors group"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-industrial-600'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}


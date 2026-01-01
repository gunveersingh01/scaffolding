'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Globe, Award, Factory } from 'lucide-react'
import { categories } from '@/data/products'
import { motion } from 'framer-motion'
import ProductCategoryCard from '@/components/ProductCategoryCard'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Slideshow */}
      <HeroSlider />

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive range of industrial hardware, scaffolding systems, and tools for global markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Export Highlights */}
      <section className="py-16 lg:py-24 bg-charcoal-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-900 mb-4">
              Manufacturing & Export Capabilities
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              State-of-the-art manufacturing facilities with export-grade quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: 'Modern Facilities',
                description: 'State-of-the-art manufacturing units with advanced machinery',
              },
              {
                icon: Globe,
                title: 'Global Export',
                description: 'Exporting to multiple countries with international quality standards',
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous quality control processes ensuring export-grade products',
              },
              {
                icon: Award,
                title: 'Certified',
                description: 'ISO certified manufacturing with industry-standard certifications',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-industrial hover:shadow-industrial-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-industrial-600 mb-4" />
                <h3 className="text-xl font-heading font-semibold text-charcoal-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-900 mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-charcoal-600">
                Every product undergoes rigorous quality checks to meet international standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-industrial-50 rounded-lg p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal-900 mb-3">
                    Quality Standards
                  </h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>ISO certified manufacturing processes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Material testing and certification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Dimensional accuracy verification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Load testing for structural components</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal-900 mb-3">
                    Export Ready
                  </h3>
                  <ul className="space-y-2 text-charcoal-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>International packaging standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Export documentation support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Compliance with global standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-industrial-600 mt-1">✓</span>
                      <span>Custom specifications available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-industrial-200">
                <Link
                  href="/quality"
                  className="inline-flex items-center space-x-2 text-industrial-600 hover:text-industrial-700 font-semibold"
                >
                  <span>Learn More About Quality & Certifications</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-industrial-600 to-industrial-700 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-industrial-100 mb-8 max-w-2xl mx-auto">
              Get a customized quote for your requirements. Our export team is ready to assist you.
            </p>
            <Link
              href="/request-quote"
              className="inline-block bg-white text-industrial-600 px-8 py-4 rounded-lg hover:bg-charcoal-50 font-semibold text-lg transition-colors"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


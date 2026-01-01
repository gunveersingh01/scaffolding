'use client'

import { Factory, Globe, Award, Users, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            About Bhavika Overseas
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Leading manufacturer and exporter of scaffolding systems, industrial hardware, tools, and fence fittings
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Company Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-4">
              Our Story
            </h2>
            <p className="text-charcoal-700 text-lg leading-relaxed mb-4">
              Bhavika Overseas has established itself as a trusted name in the manufacturing and export of industrial hardware, scaffolding systems, and tools. With years of experience and a commitment to excellence, we serve clients across the globe with export-grade quality products.
            </p>
            <p className="text-charcoal-700 text-lg leading-relaxed mb-4">
              Our state-of-the-art manufacturing facilities are equipped with advanced machinery and technology, enabling us to produce high-quality products that meet and exceed international standards. We specialize in scaffolding systems, industrial hardware, tools, fence fittings, and wrought iron components.
            </p>
            <p className="text-charcoal-700 text-lg leading-relaxed">
              As an export-focused manufacturer, we understand the importance of quality, reliability, and timely delivery. Our products are designed to withstand the rigors of industrial use while maintaining superior performance and durability.
            </p>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Quality Excellence',
                  description: 'Uncompromising commitment to quality in every product we manufacture',
                },
                {
                  icon: Target,
                  title: 'Customer Focus',
                  description: 'Dedicated to meeting and exceeding customer expectations',
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Exporting to multiple countries with international standards',
                },
                {
                  icon: Factory,
                  title: 'Manufacturing Excellence',
                  description: 'State-of-the-art facilities with advanced production capabilities',
                },
                {
                  icon: TrendingUp,
                  title: 'Innovation',
                  description: 'Continuously improving processes and product offerings',
                },
                {
                  icon: Users,
                  title: 'Trust & Reliability',
                  description: 'Building long-term relationships based on trust and reliability',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-charcoal-50 rounded-lg p-6"
                >
                  <value.icon className="w-10 h-10 text-industrial-600 mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-charcoal-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-industrial-50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Why Choose Bhavika Overseas?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Export-Grade Quality
                </h3>
                <p className="text-charcoal-700 mb-4">
                  All our products are manufactured to meet international quality standards, ensuring reliability and durability for global markets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Comprehensive Product Range
                </h3>
                <p className="text-charcoal-700 mb-4">
                  From scaffolding systems to industrial tools, we offer a complete range of products to meet diverse industrial needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Custom Solutions
                </h3>
                <p className="text-charcoal-700 mb-4">
                  We can accommodate custom specifications and requirements, providing tailored solutions for specific project needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Timely Delivery
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Our efficient production and logistics processes ensure timely delivery of orders, meeting project deadlines.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}


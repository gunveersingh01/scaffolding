'use client'

import { Factory, Settings, Package, Truck, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ManufacturingPage() {
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
            Manufacturing & Export Capabilities
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            State-of-the-art manufacturing facilities with advanced production capabilities and global export infrastructure
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Manufacturing Facilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Manufacturing Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Factory,
                  title: 'Modern Production Units',
                  description: 'State-of-the-art manufacturing facilities equipped with advanced machinery and technology for efficient production',
                },
                {
                  icon: Settings,
                  title: 'Advanced Machinery',
                  description: 'Latest production equipment and machinery ensuring precision manufacturing and consistent quality',
                },
                {
                  icon: Package,
                  title: 'Quality Control Labs',
                  description: 'In-house quality control laboratories for material testing and product verification',
                },
                {
                  icon: Users,
                  title: 'Skilled Workforce',
                  description: 'Experienced and skilled workforce trained in modern manufacturing techniques and quality standards',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-charcoal-50 rounded-lg p-6"
                >
                  <item.icon className="w-10 h-10 text-industrial-600 mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Production Capabilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-industrial-50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Production Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  High-Volume Production
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Capable of handling large volume orders with efficient production processes and optimized workflows.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Custom Manufacturing
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Flexible production capabilities to accommodate custom specifications and unique requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Multiple Product Lines
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Simultaneous production of multiple product categories with dedicated production lines.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Rapid Turnaround
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Efficient production scheduling and processes ensuring timely delivery of orders.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Export Infrastructure */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Export Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Truck,
                  title: 'Logistics & Shipping',
                  description: 'Established logistics network for efficient shipping and delivery to global destinations',
                },
                {
                  icon: Package,
                  title: 'Export Packaging',
                  description: 'Export-grade packaging ensuring product protection during transit and storage',
                },
                {
                  icon: TrendingUp,
                  title: 'Documentation Support',
                  description: 'Complete export documentation support including certificates, invoices, and compliance documents',
                },
                {
                  icon: Factory,
                  title: 'Global Reach',
                  description: 'Exporting to multiple countries with experience in international trade and regulations',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white border border-charcoal-200 rounded-lg p-6"
                >
                  <item.icon className="w-10 h-10 text-industrial-600 mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}


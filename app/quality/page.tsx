'use client'

import { Award, CheckCircle, Shield, FileCheck, TestTube, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function QualityPage() {
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
            Quality & Certifications
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Rigorous quality control processes ensuring export-grade products that meet international standards
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Quality Assurance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Quality Assurance Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: 'Material Testing',
                  description: 'Comprehensive testing of raw materials to ensure quality and compliance with specifications',
                },
                {
                  icon: TestTube,
                  title: 'In-Process Quality Control',
                  description: 'Continuous monitoring and inspection during manufacturing to maintain quality standards',
                },
                {
                  icon: CheckCircle,
                  title: 'Final Inspection',
                  description: 'Thorough final inspection of finished products before packaging and dispatch',
                },
                {
                  icon: Shield,
                  title: 'Dimensional Accuracy',
                  description: 'Precision measurement and verification to ensure dimensional accuracy and fit',
                },
                {
                  icon: Award,
                  title: 'Load Testing',
                  description: 'Structural components undergo load testing to verify strength and safety',
                },
                {
                  icon: Globe,
                  title: 'Export Standards',
                  description: 'Compliance with international standards and export requirements',
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

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-industrial-50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Certifications & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  ISO Certification
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Our manufacturing processes are ISO certified, ensuring consistent quality and continuous improvement in our operations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Material Certifications
                </h3>
                <p className="text-charcoal-700 mb-4">
                  All materials used in production are certified and tested, meeting international quality and safety standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Industry Standards
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Our products comply with relevant industry standards and specifications for scaffolding, hardware, and tools.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-charcoal-900 mb-3">
                  Export Compliance
                </h3>
                <p className="text-charcoal-700 mb-4">
                  Full compliance with export regulations and international trade standards for seamless global distribution.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Quality Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-charcoal-900 mb-6">
              Quality Features
            </h2>
            <div className="bg-white border border-charcoal-200 rounded-lg p-6">
              <ul className="space-y-4">
                {[
                  'Rigorous material selection and testing',
                  'Precision manufacturing with quality control at every stage',
                  'Comprehensive product testing and inspection',
                  'Dimensional accuracy verification',
                  'Load testing for structural components',
                  'Corrosion resistance testing for finishes',
                  'Export-grade packaging and protection',
                  'Quality documentation and certificates',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-industrial-600 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700 text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}


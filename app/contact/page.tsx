'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will contact you soon!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Contact Us
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Get in touch with us for inquiries, quotes, or any questions about our products and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-bold text-charcoal-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-industrial-100 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-industrial-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Address</h3>
                  <p className="text-charcoal-600">
                    Industrial Area, Export Zone<br />
                    Manufacturing District<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-industrial-100 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-industrial-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Phone</h3>
                  <p className="text-charcoal-600">
                    +91 XXX XXX XXXX<br />
                    +91 XXX XXX XXXX
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-industrial-100 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-industrial-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Email</h3>
                  <p className="text-charcoal-600">
                    info@bhavikaoverseas.com<br />
                    sales@bhavikaoverseas.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-50 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-900 mb-3">Business Hours</h3>
              <div className="space-y-2 text-charcoal-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-charcoal-50 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl font-heading font-bold text-charcoal-900 mb-6">
                Send us a Message
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="product">Product Inquiry</option>
                    <option value="custom">Custom Requirements</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-industrial-600 text-white px-6 py-3 rounded-lg hover:bg-industrial-700 font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


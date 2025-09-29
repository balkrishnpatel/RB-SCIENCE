'use client'
import { MapPin, Phone, Mail, Clock, MessageSquare, PhoneCall, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM. We are closed on Sundays and major holidays."
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our main office line."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Contact Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-600 via-teal-600 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 mb-8">
              Have questions about our services or interested in collaboration? We're here to help.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
              alt="Laboratory researcher working"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section> */}


      <section className="relative h-[500px] bg-gray-900">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
      alt="Laboratory researcher working"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>

  {/* Content */}
  <div className="relative h-full flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-teal-800">Get in</span>{' '}
        <span className="text-green-600">Touch</span>
      </h1>
      <p className="text-xl text-gray-800 max-w-3xl mx-auto">
        Have questions about our services or interested in collaboration? We're here to help.
      </p>
    </div>
  </div>
</section>



      {/* Contact Information Section */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Contact Information */}
      <div>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-teal-800">Contact</span>{' '}
          <span className="text-green-600">Information</span>
        </h2>
        <p className="text-gray-600 mb-12">Multiple ways to reach our team</p>

        <div className="space-y-8">
          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-600 to-green-600 p-4 rounded-xl flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">123 Innovation Drive</p>
              <p className="text-gray-600">Science Park, CA 90210</p>
              <p className="text-gray-600">United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-600 to-green-600 p-4 rounded-xl flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">Main: +1 (555) 123-4567</p>
              <p className="text-gray-600">Support: +1 (555) 987-6543</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-600 to-green-600 p-4 rounded-xl flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">General: contact@brscience.com</p>
              <p className="text-gray-600">Support: support@brscience.com</p>
              <p className="text-gray-600">Careers: careers@brscience.com</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-teal-600 to-green-600 p-4 rounded-xl flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex gap-4 mt-12">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email Us</span>
          </button>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition-all duration-300 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Us</span>
          </button>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your inquiry..."
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 mt-0.5"
              />
              <span className="text-sm text-gray-700">
                I consent to BR Science processing my personal data for the purpose of my inquiry *
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Find Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Find <span className="text-green-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600">Visit our research facility</p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
            
            {/* Map Elements */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full"></div>
            
            {/* Roads */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300"></div>
            
            {/* Green Areas */}
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-300 rounded-full opacity-60"></div>
            <div className="absolute top-10 right-20 w-16 h-16 bg-green-300 rounded-full opacity-60"></div>
            
            {/* Water Feature */}
            <div className="absolute bottom-20 right-10 w-24 h-12 bg-blue-300 rounded-full opacity-60"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <MapPin className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">RB Science Research Facility</p>
                <p className="text-gray-600 text-sm">123 Innovation Drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Frequently <span className="text-green-600">Asked Questions</span>
      </h2>
      <p className="text-lg text-gray-600">Quick answers to common inquiries</p>
    </div>
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}
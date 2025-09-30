'use client'

import { useState } from 'react'

export default function PharmaceuticalInstruments() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const instruments = [
    {
      id: 1,
      name: "HPLC with auto-sampler and PDA detector",
      description: "High-Performance Liquid Chromatography for precise compound separation and analysis",
      category: "chromatography",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Double beam UV-Visible spectrophotometer",
      description: "Advanced mass spectrometry for molecular structure determination and quantification",
      category: "spectroscopy",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Probe sonicator",
      description: "Automated dissolution testing system for drug release studies and formulation development",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Vacuum evaporator",
      description: "Fourier-Transform Infrared Spectrometer for molecular structure analysis and identification",
      category: "spectroscopy",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      name: "BSL-2 microbiology lab",
      description: "High-speed tablet compression machine for pharmaceutical tablet production",
      category: "microbiology",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Microplate reader",
      description: "Environmental control chamber for long-term stability testing of pharmaceutical products",
      category: "analysis",
      image: "https://images.unsplash.com/photo-1582719366286-1e6e8c6c8b2d?w=600&h=400&fit=crop"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Instruments', icon: '🔬' },
    { id: 'chromatography', name: 'Chromatography', icon: '📊' },
    { id: 'spectroscopy', name: 'Spectroscopy', icon: '🌈' },
    { id: 'analysis', name: 'Analysis', icon: '🧪' },
    { id: 'microbiology', name: 'Microbiology', icon: '🦠' }
  ]

  const features = [
    { icon: "✓", title: "State-of-the-art equipment", desc: "Latest technology instruments" },
    { icon: "✓", title: "Certified & calibrated", desc: "Regular maintenance and validation" },
    { icon: "✓", title: "Expert training provided", desc: "Comprehensive user training" },
    { icon: "✓", title: "24/7 technical support", desc: "Always available assistance" }
  ]

  const filteredInstruments = selectedCategory === 'all' 
    ? instruments 
    : instruments.filter(inst => inst.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span className="font-semibold">Telephone:</span>
              <span>+91(0)9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span className="font-semibold">Email:</span>
              <span>info@rbscience.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span className="font-semibold">Address:</span>
              <span>D-424, Near Nirmal Residency, Bhopal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Pharmaceutical Instruments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art equipment for pharmaceutical research and analysis
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Instruments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredInstruments.map((instrument, index) => (
              <div 
                key={instrument.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-teal-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center">
                      <svg className="w-32 h-32 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
                        <circle cx="13" cy="9" r="1.5"/>
                        <circle cx="13" cy="13" r="1.5"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {instrument.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{instrument.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{instrument.description}</p>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 mb-16 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-10 text-center">Why Choose Our Instruments?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-white text-opacity-90">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Instruments</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-teal-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Tests/Month</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Accuracy</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Access to Our Instruments?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to schedule instrument training, book equipment time, or discuss your research needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Instrument Time
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Request Training
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
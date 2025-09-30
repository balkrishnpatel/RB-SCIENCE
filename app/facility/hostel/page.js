'use client'

import { useState } from 'react'

export default function HostelFacility() {
  const [activeImage, setActiveImage] = useState(0)

  const hostelImages = [
    {
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop",
      title: "Modern Hostel Building"
    },
    {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
      title: "Comfortable Furnished Rooms"
    },
    {
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop",
      title: "Common Areas"
    }
  ]

  const livingFeatures = [
    { icon: "🛏️", title: "Furnished rooms with comfortable beds", color: "from-blue-500 to-blue-600" },
    { icon: "📚", title: "Study areas in each room", color: "from-purple-500 to-purple-600" },
    { icon: "🪑", title: "Comfortable furniture and storage", color: "from-teal-500 to-teal-600" },
    { icon: "💡", title: "Well-lit rooms with natural lighting", color: "from-yellow-500 to-yellow-600" }
  ]

  const services = [
    {
      icon: "🛡️",
      title: "24/7 Security",
      description: "Round-the-clock security personnel and CCTV surveillance for your safety.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🧹",
      title: "Housekeeping Services",
      description: "Regular cleaning and maintenance to ensure a hygienic living environment.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🏥",
      title: "Medical Support",
      description: "On-site medical facilities and quick access to nearby hospitals.",
      color: "from-red-500 to-red-600"
    }
  ]

  const amenities = [
    { icon: "🍽️", title: "Nutritious Meals", desc: "Healthy and hygienic food" },
    { icon: "📶", title: "High-Speed Wi-Fi", desc: "24/7 internet connectivity" },
    { icon: "🔌", title: "Power Backup", desc: "Uninterrupted electricity" },
    { icon: "💧", title: "Water Supply", desc: "24/7 clean water" },
    { icon: "🧺", title: "Laundry Service", desc: "Regular washing facilities" },
    { icon: "📺", title: "Recreation Room", desc: "TV and indoor games" },
    { icon: "🏋️", title: "Gym Facility", desc: "Fitness equipment" },
    { icon: "📖", title: "Library Access", desc: "Study materials available" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Hostel Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comfortable and secure accommodation for our students
          </p>
        </div>

        {/* Image Showcase with Modern Living Spaces */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Images Side */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop"
                    alt="Hostel Building"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
                    alt="Furnished Room"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
                    alt="Hostel Room"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Modern Living Spaces Info */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Living Spaces</h2>
              <div className="space-y-4">
                {livingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className="text-gray-800 font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Students in Hostel Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&h=500&fit=crop"
            alt="Students in Hostel"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${service.color} p-8 text-center`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Additional Amenities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Total Beds</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Security</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Wi-Fi Coverage</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-lg opacity-90">Student Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Hostel?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience comfortable living with world-class amenities and a supportive community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Apply for Hostel
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105">
              Schedule a Visit
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
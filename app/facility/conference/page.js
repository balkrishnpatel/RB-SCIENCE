'use client'

import { useState } from 'react'

export default function ConferenceHall() {
  const [activeTab, setActiveTab] = useState('features')

  const hallFeatures = [
    { icon: "👥", title: "Capacity for up to 100 attendees", desc: "Spacious seating arrangement" },
    { icon: "🪑", title: "Comfortable, ergonomic seating", desc: "Premium quality chairs" },
    { icon: "❄️", title: "Advanced climate control system", desc: "Perfect temperature all year" }
  ]

  const techSpecs = [
    { icon: "📽️", title: "4K projection system", desc: "Crystal clear presentations" },
    { icon: "🔊", title: "State-of-the-art audio system", desc: "Professional sound quality" },
    { icon: "📶", title: "High-speed Wi-Fi for all attendees", desc: "Seamless connectivity" },
    { icon: "🔌", title: "Ample power outlets throughout", desc: "Never run out of charge" }
  ]

  const amenities = [
    "Professional lighting system",
    "Stage with podium",
    "Whiteboard and smart board",
    "Recording capabilities",
    "Video conferencing setup",
    "Acoustic treatment for clarity"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24 pb-16">
      <br/>
       <br/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our State-of-the-Art Conference Hall
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premium venue designed for seminars, workshops, and academic events
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop" 
              alt="Conference Hall View 1"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop" 
              alt="Conference Hall View 2"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 bg-white rounded-full shadow-lg p-2 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('features')}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'features' 
                ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg' 
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Hall Features
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tech' 
                ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg' 
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            Tech Specs
          </button>
        </div>

        {/* Content Sections */}
        <div className="mb-12">
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
              {hallFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {techSpecs.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3">{spec.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{spec.title}</h3>
                  <p className="text-sm text-gray-600">{spec.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Amenities */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl">
                <span className="text-2xl">✓</span>
                <span className="text-gray-800 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">100</div>
            <div className="text-sm opacity-90">Seating Capacity</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">4K</div>
            <div className="text-sm opacity-90">Projection Quality</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">24°C</div>
            <div className="text-sm opacity-90">Perfect Temperature</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-xl">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Wi-Fi Coverage</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Book Our Conference Hall</h2>
          <p className="text-xl mb-8 opacity-90">Perfect for seminars, workshops, presentations, and academic events</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105">
              Virtual Tour
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
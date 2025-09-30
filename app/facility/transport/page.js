'use client'

import { useState } from 'react'

export default function TransportServices() {
  const routes = [
    { name: "Route 1", areas: ["Station Road", "MP Nagar", "New Market", "RB Science"], color: "from-blue-500 to-blue-600" },
    { name: "Route 2", areas: ["Ayodhya Nagar", "Kolar Road", "Bhopal Talkies", "RB Science"], color: "from-green-500 to-green-600" },
    { name: "Route 3", areas: ["Bairagarh", "Jahangirabad", "Shahpura", "RB Science"], color: "from-purple-500 to-purple-600" },
    { name: "Route 4", areas: ["Hoshangabad Road", "Govindpura", "Katara Hills", "RB Science"], color: "from-teal-500 to-teal-600" }
  ]

  const features = [
    { icon: "🚌", title: "Comfortable Seating", desc: "Well-maintained buses with spacious interiors" },
    { icon: "📍", title: "GPS Tracking", desc: "Real-time location monitoring for safety" },
    { icon: "🔒", title: "Safety First", desc: "Experienced drivers and safety protocols" },
    { icon: "⏰", title: "Punctual Service", desc: "Timely pickup and drop services" },
    { icon: "❄️", title: "Air Conditioned", desc: "Comfortable journey in all weather" },
    { icon: "📱", title: "Mobile Updates", desc: "SMS alerts for schedule changes" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Student Transportation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convenient and safe transit options for our trainees
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Institute Shuttle Service */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Institute Shuttle Service</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Regular shuttle buses connecting major city points to our training center.
            </p>
          </div>

          {/* Transport Assistance */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transport Assistance</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dedicated staff to help students plan their commute and provide transit information.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 mb-16 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Transport Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h3 className="font-bold text-xl text-white mb-2 text-center">{feature.title}</h3>
                <p className="text-white text-opacity-90 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Routes Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Available Routes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${route.color} p-6`}>
                  <h3 className="text-2xl font-bold text-white">{route.name}</h3>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    {route.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${route.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className={`text-lg font-semibold ${idx === route.areas.length - 1 ? 'text-teal-600' : 'text-gray-800'}`}>
                            {area}
                          </div>
                          {idx === route.areas.length - 1 && (
                            <div className="text-sm text-gray-500">Final Destination</div>
                          )}
                        </div>
                        {idx === route.areas.length - 1 && (
                          <span className="text-2xl">🎯</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Active Buses</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Students Daily</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">City Areas</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">On-Time Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Need Transport Services?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Get in touch with our transport coordinator for routes, timings, and registration
          </p>
          <button className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Contact Us for Transport Services
          </button>
        </div>

      </div>
    </div>
  )
}
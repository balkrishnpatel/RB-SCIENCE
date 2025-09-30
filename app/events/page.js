'use client'
import { Star, Calendar, MapPin, Trophy, Medal, Award } from 'lucide-react'
import { useState } from 'react'

export default function Events() {
  const [activeTab, setActiveTab] = useState('all')

  const events = [
    {
      date: 'March 15, 2025',
      time: '9:00 AM - 6:00 PM',
      title: 'Genomic Medicine Breakthrough Conference',
      description: 'Exploring the latest advances in personalized medicine and gene therapy applications.',
      attendees: 250,
      location: 'Hall A',
      fee: '$299',
      type: 'conference'
    },
    {
      date: 'March 16, 2025', 
      time: '10:00 AM - 4:00 PM',
      title: 'AI in Drug Discovery Workshop',
      description: 'Hands-on workshop on machine learning applications in pharmaceutical research.',
      attendees: 80,
      location: 'Lab 2B',
      fee: '$199',
      type: 'workshop'
    },
    {
      date: 'March 17, 2025',
      time: '2:00 PM - 5:00 PM', 
      title: 'Biotech Startup Pitch Competition',
      description: 'Young entrepreneurs present innovative biotech solutions to industry experts',
      attendees: 150,
      location: 'Main Auditorium',
      fee: 'Free',
      type: 'conference'
    }
  ]

  const awards = [
    {
      title: 'Excellence in Innovation',
      prize: '$50,000 Prize',
      icon: Trophy,
      color: 'bg-orange-500'
    },
    {
      title: 'Young Researcher Award', 
      prize: '$25,000 Prize',
      icon: Medal,
      color: 'bg-blue-500'
    },
    {
      title: 'Breakthrough Discovery',
      prize: '$75,000 Prize', 
      icon: Award,
      color: 'bg-green-500'
    }
  ]

  const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.type === activeTab)

  return (
    <div className="min-h-screen pt-20">
      {/* Events Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-600 via-teal-600 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming Research Events
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Join leading researchers, innovators, and industry experts at our prestigious bioscience events. 
            Discover breakthrough research, network with peers, and advance your scientific career.
          </p>
        </div>
      </section> */}


        <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/90"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Upcoming <span className="text-yellow-300">Research Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join leading researchers, innovators, and industry experts at our prestigious bioscience events. Discover breakthrough research, network with peers, and advance your scientific career.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span className="font-semibold text-sm">Featured Event</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  International Bioscience Innovation Summit 2025
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  The premier global conference bringing together 500+ researchers, 50+ industry leaders, 
                  and breakthrough innovations in biotechnology and life sciences.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-teal-400" />
                    <span>Sept 25-28, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <span>Boston Convention Center</span>
                  </div>
                </div>

                <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Register Now
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
                  alt="Conference networking event"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Event Schedule Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left Column - Event Schedule */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Event Schedule</h2>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveTab('conference')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'conference' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Conferences
            </button>
            <button
              onClick={() => setActiveTab('workshop')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'workshop' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Workshops
            </button>
          </div>
        </div>

        {/* Event Listings */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      event.type === 'conference' ? 'bg-teal-500' : 
                      event.type === 'workshop' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></div>
                    <span className="text-gray-800 font-medium">{event.date}</span>
                    <span className="text-gray-500 ml-3">{event.time}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span>{event.attendees} Attendees</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <span>{event.fee}</span>
                    </div>
                  </div>
                </div>
                
                <button className={`ml-6 px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  event.type === 'conference' ? 'border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white' :
                  event.type === 'workshop' ? 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white' :
                  'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Research Awards & Payment */}
      <div className="space-y-8">
        {/* Research Awards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Research Awards</h2>
          
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${award.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <award.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{award.title}</h3>
                  <p className="text-gray-600">{award.prize}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
            Submit Application
          </button>
        </div>

        {/* Payment Information */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
          
          {/* Early Bird */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Early Bird Registration</h3>
            <div className="text-4xl font-bold text-blue-600 mb-1">$399</div>
            <p className="text-sm text-gray-500 mb-3">Valid until February 15, 2024</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All conference sessions
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Networking events
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Conference materials
              </div>
            </div>
          </div>

          {/* Standard Registration */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Standard Registration</h3>
            <div className="text-4xl font-bold text-gray-800 mb-1">$499</div>
            <p className="text-sm text-gray-500 mb-4">After February 15, 2025</p>
          </div>

          {/* Student Discount Info */}
          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3 mt-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">i</span>
            </div>
            <span className="text-blue-700 text-sm">Student discounts available (50% off)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
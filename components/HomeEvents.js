import { Star, Calendar, MapPin } from 'lucide-react'

export default function Events() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Upcoming <span className="text-green-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and testing solutions tailored to meet the evolving needs of the bioscience industry.
          </p>
        </div>

        {/* Featured Event */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-500 rounded-full px-4 py-2 flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-sm">Featured Event</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                International Bioscience Innovation Summit 2025
              </h3>
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
  )
}
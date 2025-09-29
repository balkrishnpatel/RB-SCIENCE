export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-teal-600 to-green-500 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Enterprising
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
              Bioscience
            </span>
            <br />
            Research for the
            <br />
            Future of Healthcare
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
            Contract research, testing, and training for pharma, cosmetics, and universities. 
            Leading innovation in drug delivery, synthesis, and analytical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore Services
            </button>
            <button className="border-2 border-teal-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-300 hover:text-teal-800 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Content - Laboratory Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
              alt="Modern laboratory with DNA helix visualization"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            {/* DNA Helix Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded-full relative">
                      <div className="absolute inset-1 border border-white rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Advanced Research Facility</p>
                    <p className="text-sm opacity-90">Cutting-edge equipment & expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating DNA Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400/20 rounded-full backdrop-blur-sm animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/20 rounded-full backdrop-blur-sm animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
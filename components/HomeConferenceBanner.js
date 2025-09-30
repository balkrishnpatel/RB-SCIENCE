export default function ConferenceBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white mb-6 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Upcoming Bioscience Conference 2025
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              Get complete details on RB Science Conference 2025 – sessions, speakers, and registration
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
            <button className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
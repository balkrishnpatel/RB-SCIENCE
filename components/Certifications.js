export default function Certifications() {
  const certifications = [
    {
      name: 'AICTE Certified',
      description: 'All India Council for Technical Education',
      icon: '🎓',
      color: 'bg-orange-500'
    },
    {
      name: 'ISO Certified',
      description: 'ISO 9001 Quality Management',
      icon: '⭐',
      color: 'bg-blue-500'
    },
    {
      name: 'MSME Certified',
      description: 'Micro, Small & Medium Enterprises',
      icon: '🏛️',
      color: 'bg-gray-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-green-600">Certificates</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6`}>
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
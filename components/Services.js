import { TestTube, Pi, Microscope } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Research',
      description: 'Advanced formulation development and optimization for targeted drug delivery systems.',
      icon: TestTube,
      color: 'bg-blue-500'
    },
    {
      title: 'Testing',
      description: 'Synthesis and analysis of complex heterocyclic compounds for pharmaceutical applications.',
      icon: Pi,
      color: 'bg-purple-500'
    },
    {
      title: 'Training',
      description: 'Comprehensive screening services to evaluate efficacy and safety profiles.',
      icon: Microscope,
      color: 'bg-teal-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Specialized <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and testing solutions tailored to meet the evolving needs of the bioscience industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center">
                Learn more →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}
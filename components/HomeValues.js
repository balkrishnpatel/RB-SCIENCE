import { Target, Clock, TrendingUp } from 'lucide-react'

export default function Values() {
  const values = [
    {
      title: 'Perfection',
      description: 'Uncompromising quality in every research project and training program',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Punctuality',
      description: 'Timely delivery of results and adherence to project deadlines',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: 'Progress',
      description: 'Continuous advancement in research methodologies and technologies',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Research at <span className="text-green-600">RB Science</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading innovation in bioscience research with cutting-edge facilities and expert guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
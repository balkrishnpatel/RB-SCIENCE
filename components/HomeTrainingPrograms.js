import { Settings, Dna, Beaker } from 'lucide-react'

export default function TrainingPrograms() {
  const programs = [
    {
      title: 'Bioburden Testing',
      description: 'Advanced techniques in microbiological contamination assessment',
      icon: Settings,
      color: 'bg-blue-500'
    },
    {
      title: 'DNA Extraction',
      description: 'Modern molecular biology techniques and protocols',
      icon: Dna,
      color: 'bg-green-500'
    },
    {
      title: 'HPLC Analysis',
      description: 'High-performance liquid chromatography techniques',
      icon: Beaker,
      color: 'bg-purple-500'
    },
    {
      title: 'Pharmacological Screening',
      description: 'Drug efficacy and safety evaluation methods',
      icon: Settings,
      color: 'bg-orange-500'
    },
    {
      title: 'Analytical Chemistry',
      description: 'Quantitative and qualitative analysis techniques',
      icon: Beaker,
      color: 'bg-pink-500'
    },
    {
      title: 'Biotechnology Applications',
      description: 'Modern biotechnology research methodologies',
      icon: Dna,
      color: 'bg-indigo-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Popular <span className="text-green-600">Training Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed for industry professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 flex items-center">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { TestTube, Rocket, Award, Users } from 'lucide-react'

export default function Career() {
  const tracks = [
    {
      title: 'Learn the Latest Skills',
      description: 'Master cutting-edge laboratory techniques, data analysis methods, and emerging biotechnologies through hands-on learning experiences.',
      icon: TestTube,
      color: 'bg-blue-500',
      features: ['CRISPR & Gene Editing', 'Bioinformatics Analysis', 'Advanced Microscopy'],
      button: 'Explore Courses'
    },
    {
      title: 'Get Ready for a Career',
      description: 'Build a comprehensive skill set and professional network to launch your career in pharmaceutical, biotech, or research industries.',
      icon: Rocket,
      color: 'bg-green-500',
      features: ['Industry Mentorship', 'Portfolio Development', 'Job Placement Support'],
      button: 'Start Journey'
    },
    {
      title: 'Earn a Certificate',
      description: 'Gain industry-recognized credentials that validate your expertise and enhance your professional standing in bioscience research.',
      icon: Award,
      color: 'bg-purple-500',
      features: ['Accredited Programs', 'Digital Badges', 'LinkedIn Integration'],
      button: 'View Certificates'
    },
    {
      title: 'Upskill Organization',
      description: 'Transform your research team\'s capabilities with customized training programs designed for modern laboratories and biotech companies.',
      icon: Users,
      color: 'bg-orange-500',
      features: ['Custom Curriculum', 'Team Analytics', 'Bulk Licensing'],
      button: 'Contact Sales'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Advance Your Bioscience <span className="text-green-600">Career</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Accelerate your research capabilities and career growth with cutting-edge bioscience education programs designed for modern scientific professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 ${track.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <track.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {track.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {track.description}
              </p>
              
              <div className="mb-6">
                {track.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                {track.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
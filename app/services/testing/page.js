'use client'

import { useState } from 'react'

export default function Research() {
  const [selectedResearch, setSelectedResearch] = useState(null)

  const researchAreas = [
    {
      id: 'synthesis',
      category: 'Synthesis',
      title: 'Synthesis of organic compounds',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
      description: 'The synthesis of organic compounds has evolved significantly with the advent of green chemistry. This research focuses on developing eco-friendly synthetic methodologies.',
      fullDescription: 'Antimicrobial resistance (AMR) is one of the most pressing challenges in modern microbiology. Pathogenic microorganisms, including bacteria, viruses, and fungi have developed resistance to commonly used drugs, rendering treatments less effective. This research focuses on understanding the mechanisms of resistance, tracking the spread of resistant strains, and developing new therapeutic strategies to combat AMR.'
    },
    {
      id: 'isolation',
      category: 'Solvent-Based Isolation',
      title: 'Extraction and isolation of phytochemicals',
      image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&q=80',
      description: 'The extraction of phytochemicals from plants involves various techniques, including solvent extraction, steam distillation, and supercritical fluid extraction.',
      fullDescription: 'Microbial biotechnology explores the use of microorganisms in industrial processes, including biofuel production, waste management, and pharmaceutical manufacturing. Microbes such as bacteria, yeast, and fungi are engineered to produce enzymes, bioactive compounds, and bioplastics, offering eco-friendly alternatives to traditional methods.'
    },
    {
      id: 'nanotechnology',
      category: 'Nanotechnology',
      title: 'Drug Delivery System',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
      description: 'Drug delivery systems play a crucial role in modern medicine by improving the targeting and efficacy of therapeutic agents.',
      fullDescription: 'The human microbiome, composed of trillions of microorganisms living in and on the human body, plays a vital role in maintaining health. This research examines the symbiotic relationship between the microbiome and its host, investigating how imbalances in microbial communities contribute to diseases like obesity, diabetes, and autoimmune disorders.'
    },
    {
      id: 'analytical',
      category: 'Analytical Method Development',
      title: 'Advanced Analytical Techniques',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80',
      description: 'Development of robust analytical methods for pharmaceutical analysis and quality control.',
      fullDescription: 'Advanced analytical method development encompasses the design and validation of sophisticated techniques for detecting, quantifying, and characterizing pharmaceutical compounds and biological samples with high precision and accuracy.'
    },
    {
      id: 'pharmacological',
      category: 'Pharmacological Research',
      title: 'Drug Efficacy Studies',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      description: 'Comprehensive pharmacological studies to evaluate drug safety and efficacy.',
      fullDescription: 'Pharmacological research involves systematic investigation of drug interactions with biological systems, including mechanism of action studies, dose-response relationships, and therapeutic index determination for new pharmaceutical compounds.'
    },
    {
      id: 'microbiology',
      category: 'Microbiology Research',
      title: 'Antimicrobial Studies',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
      description: 'Research on antimicrobial compounds and resistance mechanisms.',
      fullDescription: 'Microbiological research focuses on understanding microbial behavior, developing new antimicrobial agents, and studying resistance patterns to combat infectious diseases and improve public health outcomes.'
    }
  ]

  const handleCardClick = (research) => {
    setSelectedResearch(research)
  }

  const handleClose = () => {
    setSelectedResearch(null)
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <br/>
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-b from-white to-pink-50 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-teal-600 font-medium mb-2">HOME / RESEARCH</p>
            <h1 className="text-5xl font-bold text-gray-900">Research Lab & Training</h1>
          </div>
        </div>
      </div> */}


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
               <span className="text-yellow-300">Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>


      {/* Research Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div 
              key={area.id}
              onClick={() => handleCardClick(area)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-yellow-500 text-sm font-semibold mb-2">{area.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedResearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-y-auto py-8">
          <div className="bg-white max-w-4xl w-full mx-4 rounded-lg shadow-2xl">
            {/* Header */}
            <div className="relative h-64 bg-gray-200">
              <img 
                src={selectedResearch.image} 
                alt={selectedResearch.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl text-gray-600">×</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedResearch.title}
                </h2>
                <p className="text-yellow-500 font-semibold">{selectedResearch.category}</p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedResearch.fullDescription}
                </p>

                {/* Research Areas Sidebar */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Research Areas</h3>
                  <ul className="space-y-2">
                    {researchAreas.map((area) => (
                      <li 
                        key={area.id}
                        onClick={() => setSelectedResearch(area)}
                        className={`cursor-pointer hover:text-teal-600 transition-colors ${
                          selectedResearch.id === area.id ? 'text-teal-600 font-semibold' : 'text-blue-600'
                        }`}
                      >
                        {area.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Choose Our Research Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Equipment</h3>
              <p className="text-teal-50">State-of-the-art research facilities with cutting-edge technology</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🔬</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-teal-50">PhD researchers and experienced scientists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Quality Results</h3>
              <p className="text-teal-50">Peer-reviewed methodologies and reliable data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
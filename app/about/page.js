'use client'
import { CircleCheck as CheckCircle, Users, Target, Lightbulb, Award, Heart } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Scientific Officer',
      background: 'Ph.D. in Pharmacology with 15+ years of research experience',
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Head of R&D',
      background: 'Specializes in drug delivery systems and molecular biology',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Lead Microbiologist',
      background: 'Expert in microbial biotechnology and fermentation processes',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Director of Analytics',
      background: 'Specializes in analytical chemistry and quality control',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg'
    }
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'RB Science was established with a vision to bridge the gap between academic research and industry applications'
    },
    {
      year: '2013',
      title: 'First Major Partnership',
      description: 'Collaborated with leading pharmaceutical company on novel drug delivery systems'
    },
    {
      year: '2016',
      title: 'Research Facility Expansion',
      description: 'Opened state-of-the-art laboratory facilities with advanced equipment and technologies'
    },
    {
      year: '2019',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification for quality management systems'
    }
  ]

  const values = [
    {
      title: 'Scientific Excellence',
      description: 'We maintain the highest standards in research methodology and data integrity',
      icon: Target,
      color: 'bg-teal-500'
    },
    {
      title: 'Innovation',
      description: 'We continuously explore new approaches and technologies to advance bioscience research',
      icon: Lightbulb,
      color: 'bg-blue-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnerships to accelerate scientific discovery',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Integrity',
      description: 'We conduct our research with transparency, honesty and ethical responsibility',
      icon: Award,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-teal-600 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RB Science</h1>
            <p className="text-xl text-blue-100 mb-8">
              Pioneering bioscience research to address global health challenges and improve life
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
              alt="Scientific research vision"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-600">Mission</span>
            </h2>
            <p className="text-xl text-gray-600">Driving innovation in bioscience research</p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At RB Science, we are dedicated to advancing bioscience research through innovative methodologies and collaborative partnerships. Our mission is to provide high-quality research services that accelerate scientific discovery and development in pharmaceuticals, cosmetics, and biotechnology.
            </p>
          </div>

        
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a global leader in bioscience research, recognized for scientific excellence, innovation, and meaningful contributions to human health and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section> */}



<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-5xl font-bold mb-4 text-gray-800">
        Our <span className="text-green-600">Mission</span>
      </h2>
      <p className="text-xl text-gray-600">Driving innovation in bioscience research</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left Column - Mission Content */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-6">
          At BR Science, we are dedicated to advancing bioscience research through 
          innovative methodologies and collaborative partnerships. Our mission is to 
          provide high-quality research services that accelerate scientific discovery 
          and development in pharmaceuticals, cosmetics, and biotechnology.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          We strive to bridge the gap between academic research and industrial 
          applications, fostering a collaborative environment that promotes 
          knowledge exchange and technological advancement.
        </p>

        <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <div className="w-6 h-6 border-2 border-blue-600 rounded-full relative">
              <div className="absolute inset-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Targeted Solutions</h3>
            <p className="text-gray-600">Customized research approaches for specific challenges</p>
          </div>
        </div>
      </div>

      {/* Right Column - Vision Box */}
      <div className="border-4 border-green-600 rounded-2xl p-8 bg-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          To be a global leader in bioscience research, recognized for scientific 
          excellence, innovation, and meaningful contributions to human health 
          and wellbeing.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-gray-700">
              Advancing scientific knowledge through rigorous research
            </p>
          </div>

          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-gray-700">
              Building strategic partnerships across academia and industry
            </p>
          </div>

          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-700">
              Improving quality of life through innovative health solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Expert Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Expert <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600">Meet the scientists and researchers behind RB Science</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-teal-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

     


      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our research excellence</p>
          </div>

          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
            
          
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{event.year}</h3>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                 
                  <div className="w-2/12 flex justify-center z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg">
                      {event.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}


      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Our <span className="text-green-600">Journey</span>
      </h2>
      <p className="text-xl text-gray-600">Key milestones in our research excellence</p>
    </div>

    <div className="relative">
      {/* Vertical Timeline Line - Center on desktop, left on mobile */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-green-500"></div>
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {timeline.map((event, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
            {/* Content Card */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-20 md:pl-0`}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{event.year}</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
            
            {/* Center Circle */}
            <div className="absolute left-0 md:static md:w-2/12 flex md:justify-center z-10">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg">
                {event.year.slice(-2)}
              </div>
            </div>
            
            <div className="hidden md:block w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600">Principles that guide our research and operations</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-green-600">Advisory</span>
            </h2>
            <p className="text-xl text-gray-600">Meet the main roles of RB Science</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                <p className="text-teal-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Our <span className="text-green-600">Advisory</span>
      </h2>
      <p className="text-xl text-gray-600">Meet the main roles of RB Science</p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {team.map((member, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
            <p className="text-teal-600 font-semibold mb-3">{member.position}</p>
            <p className="text-gray-600 text-sm">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to collaborate on your next research project?
          </h2>
          <p className="text-xl text-teal-200 mb-8 max-w-3xl mx-auto">
            Partner with RB Science for innovative bioscience research solutions
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
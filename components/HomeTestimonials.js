export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'PhD Student, University',
      quote: 'Excellent training program with hands-on experience. The instructors are supportive and best guide.',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Research Scientist, Pharma Co.',
      quote: 'RB Science provided exceptional research support for our drug development project. Highly recommended.',
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg'
    },
    {
      name: 'Priya Sharma',
      title: 'Biotech Professional',
      quote: 'The HPLC training was comprehensive and practical. I gained valuable skills for my career advancement.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-green-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from our training participants and research partners
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
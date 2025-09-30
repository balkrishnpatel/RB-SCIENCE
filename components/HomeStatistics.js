export default function Statistics() {
  const stats = [
    { value: '98%', label: 'Success Rate' },
    { value: '2500+', label: 'Students Trained' },
    { value: '50+', label: 'Certified Trainers' },
    { value: '7+', label: 'Years Experience' }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-teal-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
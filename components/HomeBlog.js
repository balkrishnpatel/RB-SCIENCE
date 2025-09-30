export default function Blog() {
  const blogPosts = [
    {
      title: 'Annual Biotechnology Conference',
      description: 'Join leading experts in discussing the future of biotechnology in India.',
      date: 'June 15, 2023',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'
    },
    {
      title: 'Advances in Drug Delivery Systems',
      description: 'Exploring innovative approaches to targeted therapeutic delivery.',
      date: 'June 10, 2023',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg'
    },
    {
      title: 'Future of Pharmaceutical Research',
      description: 'Industry trends and emerging technologies in pharmaceutical development.',
      date: 'June 5, 2023',
      image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-600">Blogs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get all the latest updates in biotechnology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-teal-600 font-medium mb-2">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
                <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
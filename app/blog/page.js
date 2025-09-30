'use client'
import { useState } from 'react'
import { Search, Calendar, User, ChevronRight, Tag, TrendingUp } from 'lucide-react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Research', 'Career Advice', 'Innovation', 'Health Science', 'Technology']

  const blogPosts = [
    {
      id: 1,
      title: "HR and payroll administrator course",
      excerpt: "In every organization, the role of Human Resources (HR) and Payroll administration is crucial to maintaining smooth operations...",
      category: "Career Advice",
      author: "Admin",
      date: "Sept. 4, 2024",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Determining the true goal of a good education is difficult",
      excerpt: "Education is often regarded as the cornerstone of personal and societal development. However, the true goal of a good education...",
      category: "Research",
      author: "Admin",
      date: "Sept. 4, 2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Breakthrough in Biomedicine Research",
      excerpt: "Recent advances in biomedicine are opening new doors for treatment options and disease prevention strategies...",
      category: "Health Science",
      author: "Dr. Sarah Chen",
      date: "Aug. 28, 2024",
      image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "AI in Laboratory Research: The Future is Now",
      excerpt: "Artificial intelligence is revolutionizing how we conduct research, analyze data, and make breakthrough discoveries...",
      category: "Technology",
      author: "Tech Team",
      date: "Aug. 25, 2024",
      image: "https://images.pexels.com/photos/8376295/pexels-photo-8376295.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 5,
      title: "Innovation in Sustainable Science",
      excerpt: "Exploring eco-friendly practices in laboratory settings and their impact on environmental conservation...",
      category: "Innovation",
      author: "Green Lab Initiative",
      date: "Aug. 20, 2024",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 6,
      title: "Career Pathways in Bioscience",
      excerpt: "Navigate your career in the rapidly evolving field of bioscience with expert guidance and insights...",
      category: "Career Advice",
      author: "Career Counselor",
      date: "Aug. 15, 2024",
      image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-700 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Our <span className="text-yellow-300">Blog</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Insights, research breakthroughs, and expert perspectives from the world of bioscience
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-yellow-300 focus:outline-none shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="inline-block px-4 py-1.5 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="flex items-center gap-1 text-green-600 font-semibold hover:gap-2 transition-all">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest research insights and updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
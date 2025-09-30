'use client'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Laboratory', 'Equipment', 'Research', 'Facilities', 'Team']

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Laboratory',
      title: 'Modern Lab Setup',
      description: 'State-of-the-art laboratory equipment'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      title: 'Research in Progress',
      description: 'Advanced scientific research'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8376295/pexels-photo-8376295.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Equipment',
      title: 'Precision Instruments',
      description: 'High-tech laboratory instruments'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Laboratory',
      title: 'Analysis Station',
      description: 'Comprehensive testing facility'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Team',
      title: 'Research Team',
      description: 'Collaborative research environment'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Facilities',
      title: 'Modern Facilities',
      description: 'World-class research facilities'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Equipment',
      title: 'Microscopy Lab',
      description: 'Advanced microscopy equipment'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Research',
      title: 'Clinical Research',
      description: 'Cutting-edge clinical studies'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Laboratory',
      title: 'Testing Lab',
      description: 'Quality testing and analysis'
    }
  ]

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }
    
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt="Laboratory"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="text-yellow-300">Gallery</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <span>Home</span>
              <span>/</span>
              <span className="text-yellow-300">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-green-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600">
              Take a visual tour of our world-class research laboratories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 z-10">
            <span className="text-white font-medium">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </span>
          </div>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[85vh] mx-auto px-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full mb-3">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
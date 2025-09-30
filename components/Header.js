// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Facility', href: '/facility' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Events', href: '/events' },
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <header className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-green-500 rounded-full flex items-center justify-center">
//               <div className="w-6 h-6 border-2 border-white rounded-full relative">
//                 <div className="absolute inset-1 border border-white rounded-full"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
//               </div>
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-teal-700">RB SCIENCE</h1>
//               <p className="text-xs text-gray-600 -mt-1">ENTERPRISING BIOSCIENCE RESEARCH</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }



'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [facilityOpen, setFacilityOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Research', href: '/services/research' },
        { name: 'Testing', href: '/services/testing' },
        { name: 'Training', href: '/services/training' },
      ]
    },
    { 
      name: 'Facility', 
      href: '/facility',
      dropdown: [
        { name: 'Research and Testing', href: '/facility/research-testing' },
        { name: 'Transport Facility', href: '/facility/transport' },
        { name: 'Hostel Facility', href: '/facility/hostel' },
        { name: 'Conference Hall', href: '/facility/conference' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://www.rbscience.co.in/media/logo/Untitled_design-removebg-preview_9zyOsSO_JXF1SqB.png" 
              alt="RB Science Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium flex items-center">
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors duration-300 flex justify-between items-center"
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesOpen(!servicesOpen)
                          } else if (item.name === 'Facility') {
                            setFacilityOpen(!facilityOpen)
                          }
                        }}
                      >
                        {item.name}
                        <svg 
                          className={`w-4 h-4 transition-transform ${
                            (item.name === 'Services' && servicesOpen) || (item.name === 'Facility' && facilityOpen) 
                              ? 'rotate-180' 
                              : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {((item.name === 'Services' && servicesOpen) || (item.name === 'Facility' && facilityOpen)) && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
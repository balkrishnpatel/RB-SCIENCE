// // import Link from 'next/link'
// // import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

// // export default function Footer() {
// //   return (
// //     <footer className="bg-slate-900 text-white pt-16 pb-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid lg:grid-cols-4 gap-8 mb-8">
// //           {/* Company Info */}
// //           <div className="lg:col-span-2">
// //             <div className="flex items-center space-x-3 mb-6">
// //               <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-green-500 rounded-full flex items-center justify-center">
// //                 <div className="w-6 h-6 border-2 border-white rounded-full relative">
// //                   <div className="absolute inset-1 border border-white rounded-full"></div>
// //                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <h3 className="text-2xl font-bold">RB SCIENCE</h3>
// //                 <p className="text-sm text-gray-400 -mt-1">ENTERPRISING BIOSCIENCE RESEARCH</p>
// //               </div>
// //             </div>
// //             <p className="text-gray-400 mb-6 max-w-md">
// //               Enterprising Bioscience Research for a Healthier Tomorrow. Leading innovation in drug delivery, synthesis, and analytical services.
// //             </p>
// //             <div className="flex space-x-4">
// //               <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
// //               <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
// //               <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
// //               <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="font-bold text-lg mb-6">Quick Links</h4>
// //             <div className="space-y-3">
// //               <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
// //               <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
// //               <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
// //               <Link href="/training" className="block text-gray-400 hover:text-white transition-colors">Internship & Training</Link>
// //               <Link href="/collaboration" className="block text-gray-400 hover:text-white transition-colors">Academic Collaborations</Link>
// //               <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</Link>
// //             </div>
// //           </div>

// //           {/* Our Services */}
// //           <div>
// //             <h4 className="font-bold text-lg mb-6">Our Services</h4>
// //             <div className="space-y-3">
// //               <div className="text-gray-400">Drug Delivery</div>
// //               <div className="text-gray-400">Heterocyclic Compounds</div>
// //               <div className="text-gray-400">Pharmacological Screening</div>
// //               <div className="text-gray-400">Microbiology & Biotechnology</div>
// //               <div className="text-gray-400">Drug Assay & Analysis</div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Contact Info */}
// //         <div className="border-t border-gray-700 pt-8 mb-8">
// //           <div className="grid md:grid-cols-3 gap-6">
// //             <div>
// //               <h5 className="font-semibold mb-2">Address</h5>
// //               <p className="text-gray-400 text-sm">
// //                 123 Science Park, Innovation District,<br />
// //                 Research City, 12345
// //               </p>
// //             </div>
// //             <div>
// //               <h5 className="font-semibold mb-2">Phone</h5>
// //               <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
// //             </div>
// //             <div>
// //               <h5 className="font-semibold mb-2">Email</h5>
// //               <p className="text-gray-400 text-sm">contact@rbscience.com</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Copyright */}
// //         <div className="border-t border-gray-700 pt-8 text-center">
// //           <p className="text-gray-400 text-sm">
// //             © 2025 RB Science – Enterprising Bioscience Research. All rights reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }



// import { Dna, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="relative">
//                 <Dna className="h-8 w-8 text-teal-400" />
//                 <Dna className="h-8 w-8 text-green-400 absolute top-0 left-0 rotate-45 opacity-70" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">RB SCIENCE</h3>
//                 <p className="text-xs text-gray-400 -mt-1">ENTERPRISING BIOSCIENCE RESEARCH</p>
//               </div>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Enterprising Bioscience Research for a Healthier Tomorrow
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
//               <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
//               <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
//               <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Internship & Training</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Academic Collaborations</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Our Services</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Drug Delivery</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Heterocyclic Compounds</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Pharmacological Screening</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Microbiology & Biotechnology</a></li>
//               <li><a href="#" className="hover:text-white transition-colors duration-200">Drug Assay & Analysis</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
//             <div className="space-y-3 text-gray-400">
//               <p className="text-sm leading-relaxed">
//                 123 Science Park, Innovation District,<br />
//                 Research City, 12345
//               </p>
//               <p className="text-sm">
//                 <span className="font-medium">Phone:</span><br />
//                 +1 (555) 123-4567
//               </p>
//               <p className="text-sm">
//                 <span className="font-medium">Email:</span><br />
//                 contact@rbscience.com
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; 2025 RB Science – Enterprising Bioscience Research. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="https://www.rbscience.co.in/media/logo/Untitled_design-removebg-preview_9zyOsSO_JXF1SqB.png" 
                alt="RB Science Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Enterprising Bioscience Research for a Healthier Tomorrow
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/training" className="hover:text-white transition-colors duration-200">Internship & Training</a></li>
              <li><a href="/collaboration" className="hover:text-white transition-colors duration-200">Academic Collaborations</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/research" className="hover:text-white transition-colors duration-200">Drug Delivery</a></li>
              <li><a href="/services/research" className="hover:text-white transition-colors duration-200">Heterocyclic Compounds</a></li>
              <li><a href="/services/testing" className="hover:text-white transition-colors duration-200">Pharmacological Screening</a></li>
              <li><a href="/services/testing" className="hover:text-white transition-colors duration-200">Microbiology & Biotechnology</a></li>
              <li><a href="/services/testing" className="hover:text-white transition-colors duration-200">Drug Assay & Analysis</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <p className="text-sm leading-relaxed">
                123 Science Park, Innovation District,<br />
                Research City, 12345
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span><br />
                +1 (555) 123-4567
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span><br />
                contact@rbscience.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RB Science – Enterprising Bioscience Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
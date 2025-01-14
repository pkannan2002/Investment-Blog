// import React from 'react';
// import { Star } from 'lucide-react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Saravana Kumar.N",
//       role: "Business Owner",
//       image: "feed1.jpg",
//       content: "I purchased land with Kannan's guidance, and I am fully satisfied with the process. The property offers excellent facilities like a gated community, DTCP and RERA approvals, as well as loan options. From the initial advance to the final registration, the entire experience was seamless and fulfilling.",
//     },
//     {
//       name: "Ravichandran.S",
//       role: "Real Estate Investor",
//       image: "feed4.jpg",
//       content: "I acquired land in an ideal location thanks to Kannan's expert guidance. The plot in Sulur combines premium features with an affordable price range. While I’ve worked with other real estate companies in the past, my experience with Kannan this year was truly outstanding. I am delighted and deeply satisfied with the process.",
//     },
//     {
//       name: "Gandhiraj.M",
//       role: "Insurance Consulatant ",
//       image: "feed3.jpg",
//       content: "I recently acquired a piece of land on Echanari Main Road, all thanks to Kannan's suggestion. The property is truly worthwhile, located on the vibrant Pollachi Main Road. By purchasing this land, I not only secured a valuable asset but also saved money in the process. As a first-time land buyer, I initially had many fears and uncertainties. However, with Kannan's expert guidance, I learned the key considerations before buying property. I am immensely grateful to Kannan for his support and advice.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Success Stories from Happy Investors
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold text-lg">{testimonial.name}</h3>
//                   <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                 </div>
//               </div>
//               <div className="flex mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-gray-700">{testimonial.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
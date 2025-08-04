"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PremiumFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Webzee free to use?",
      answer: "Yes, Webzee offers a free plan with essential website building features. Upgrade to Premium for advanced tools and exclusive templates.",
      color: "from-purple-100 to-purple-50",
      position: "lg:mr-20 lg:mt-8"
    },
    {
      question: "Team collaboration?",
      answer: "Premium includes real-time co-editing, version history, and role-based permissions for seamless teamwork.",
      color: "from-blue-100 to-blue-50",
      position: "lg:ml-24 lg:-mt-4"
    },
    {
      question: "Performance impact?",
      answer: "Webzee generates optimized, lightning-fast code. Our CDN ensures global loading speeds under 1.5s.",
      color: "from-amber-100 to-amber-50",
      position: "lg:mr-32 lg:mt-12"
    },
    {
      question: "Data privacy?",
      answer: "We never access your content. All data is encrypted with enterprise-grade security protocols.",
      color: "from-emerald-100 to-emerald-50",
      position: "lg:ml-16 lg:-mt-8"
    },
    {
      question: "Platform support?",
      answer: "Design on any device. Publish everywhere with automatic responsive optimization.",
      color: "from-rose-100 to-rose-50",
      position: "lg:mr-8 lg:mt-16"
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f7f9fc] via-[#fdfdff] to-[#f1f3f9] py-28 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-400 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
           Frequently Asked Questions
           </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Answers to elevate your digital craftsmanship
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2  z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, x: index % 2 ? 50 : -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                damping: 10
              }}
              className={`${faq.position} ${index % 2 ? 'lg:mt-16' : ''}`}
            >
              <div className={`bg-gradient-to-br ${faq.color} rounded-2xl shadow-xl border border-white/50 overflow-hidden`}>
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                >
                  <h3 className="text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="text-gray-500 group-hover:text-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.03, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 left-0 right-0 pointer-events-none"
        >
          <p className="text-[10rem] font-bold text-center text-gray-400 whitespace-nowrap">
            PREMIUM EXPERIENCE · ELITE SUPPORT · PREMIUM EXPERIENCE
          </p>
        </motion.div>
      </div>
    </section>
  );
}


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export function PremiumFAQ() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "Is Webzee free to use?",
//       answer: "Yes, Webzee offers a free plan with essential website building features. Upgrade to Premium for advanced tools and exclusive templates.",
//       color: "from-purple-50 to-purple-100"
//     },
//     {
//       question: "Team collaboration?",
//       answer: "Premium includes real-time co-editing, version history, and role-based permissions for seamless teamwork.",
//       color: "from-blue-50 to-blue-100"
//     },
//     {
//       question: "Performance impact?",
//       answer: "Webzee generates optimized, lightning-fast code. Our CDN ensures global loading speeds under 1.5s.",
//       color: "from-amber-50 to-amber-100"
//     },
//     {
//       question: "Data privacy?",
//       answer: "We never access your content. All data is encrypted with enterprise-grade security protocols.",
//       color: "from-emerald-50 to-emerald-100"
//     },
//     {
//       question: "Platform support?",
//       answer: "Design on any device. Publish everywhere with automatic responsive optimization.",
//       color: "from-rose-50 to-rose-100"
//     }
//   ];

//   const toggleAnswer = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="min-h-screen bg-[#faf9ff] py-20 px-4 sm:px-6 relative overflow-hidden">
//       {/* Unique background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTkiIG9wYWNpdHk9Ii4xIj48cGF0aCBkPSJNMjEgMTYuNjY3QzIxIDE4LjUwNyAxOS41MSAyMCAxNy42NjcgMjBoLS42NjZDMTUuMTYyIDIwIDE0IDE4LjgzOCAxNCAxNi42NjcgMTQgMTUuMTkzIDE1LjE5MyAxNCAxNi42NjcgMTRoLjY2N0MxOC41MSAxNCAyMCAxNS40OTMgMjAgMTcuMzMzYzAgLjkyMi43NDQgMS42NjcgMS42NjcgMS42NjdoLjY2NkMyMy41MDcgMTkgMjUgMTcuNTA3IDI1IDE1LjY2NyAyNSAxNC4xOTMgMjMuODA3IDEzIDIyLjMzMyAxM2gtLjY2NkMyMC43NDQgMTMgMjAgMTMuNzQ0IDIwIDE0LjY2N3YxLjY2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
//       </div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-xl text-gray-600">
//             Everything you need to know about Webzee
//           </p>
//         </motion.div>

//         <div className="space-y-6">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.4, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className={`bg-gradient-to-br ${faq.color} rounded-xl shadow-md border border-white/50 overflow-hidden`}
//             >
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="w-full flex justify-between items-center p-6 text-left group"
//               >
//                 <h3 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
//                   {faq.question}
//                 </h3>
//                 <motion.div
//                   animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                   className="text-gray-500 group-hover:text-gray-700 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-6 pb-6 text-gray-600 leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export function PremiumFAQ() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "Is Webzee free to use?",
//       answer: "Yes, Webzee offers a free plan with essential website building features. Upgrade to Premium for advanced tools and exclusive templates.",
//       color: "from-purple-100/80 via-white to-purple-50/80"
//     },
//     {
//       question: "Team collaboration?",
//       answer: "Premium includes real-time co-editing, version history, and role-based permissions for seamless teamwork.",
//       color: "from-blue-100/80 via-white to-blue-50/80"
//     },
//     {
//       question: "Performance impact?",
//       answer: "Webzee generates optimized, lightning-fast code. Our CDN ensures global loading speeds under 1.5s.",
//       color: "from-amber-100/80 via-white to-amber-50/80"
//     },
//     {
//       question: "Data privacy?",
//       answer: "We never access your content. All data is encrypted with enterprise-grade security protocols.",
//       color: "from-emerald-100/80 via-white to-emerald-50/80"
//     },
//     {
//       question: "Platform support?",
//       answer: "Design on any device. Publish everywhere with automatic responsive optimization.",
//       color: "from-rose-100/80 via-white to-rose-50/80"
//     }
//   ];

//   const toggleAnswer = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="min-h-screen bg-[url('https://t3.ftcdn.net/jpg/03/41/31/80/360_F_341318068_0SzEc9byllL4XCZHnrsl4dAnIRagjDta.jpg')] py-20 px-4 sm:px-6 relative overflow-hidden">
//       {/* Luxury dotted background */}
//       <div className="absolute inset-0 opacity-20">
//         <div 
//           className="absolute inset-0 bg-[url('https://t3.ftcdn.net/jpg/03/41/31/80/360_F_341318068_0SzEc9byllL4XCZHnrsl4dAnIRagjDta.jpg')] bg-repeat"
//           style={{ backgroundSize: "300px 300px" }}
//         />
//       </div>
      
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/80" />

//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-xl text-gray-600 font-light">
//             Everything you need to know about Webzee Premium
//           </p>
//         </motion.div>

//         <div className="space-y-6">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.4, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className={`bg-gradient-to-r ${faq.color} rounded-xl shadow-lg border border-white/70 overflow-hidden backdrop-blur-sm`}
//             >
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="w-full flex justify-between items-center p-6 text-left group"
//               >
//                 <h3 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
//                   {faq.question}
//                 </h3>
//                 <motion.div
//                   animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                   className="text-gray-500 group-hover:text-gray-700 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-6 pb-6 text-gray-600 leading-relaxed font-light">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
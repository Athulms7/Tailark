"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      quote: "Webzee helped me finally understand my audience on a deeper level...",
      author: "Kristin Watson",
      role: "SMM",
      height: 'h-70',
      image:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
    },
    {
      id: 2,
      quote: "I love how easy it is to manage my social media accounts with Webzee...",
      author: "Theresa Webb",
      role: "Manager",
      height: 'h-42 sm:h-75',
      image:"https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
    },
    {
      id: 3,
      quote: "Before using TrendTilde, I struggled to make sense of all the data...",
      author: "Jerome Bell",
      role: "Digital Creator",
      height: 'h-70',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&s"
    },
    {
      id: 4,
      quote: "TrendTilde has completely transformed how I manage my social media...",
      author: "Bessie Cooper",
      role: "Network Specialist",
      height: 'h-60 sm:h-75',
      image:"https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
    },
    {
      id: 5,
      quote: "As a freelancer, Webzee gives me all the tools I need... gives me all the tools I need... gives me all the tools I need...gives me all the tools I need...",
      author: "Devon Lane",
      role: "CEO",
      height: 'h-90',
      image:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
    },
    {
      id: 6,
      quote: "With Webzee, managing multiple accounts for my clients has become a breeze...",
      author: "Guy Hawkins",
      role: "Social Media Consultant",
      height: 'h-72',
      image:"https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
    }
  ];

  useEffect(() => {
    testimonialRefs.current = new Array(testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
  if (!sectionRef.current) return;

  const animateElements = () => {
    // Animate the heading only once
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0, filter: 'blur(10px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        }
      }
    );

    // Animate testimonials only once
    testimonialRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0, filter: 'blur(12px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power4.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true, // ✅ only animate on first scroll
            }
          }
        );
      }
    });
  };

  animateElements(); // This ensures heading animates too

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold  text-gray-900 mb-4"
          >
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Hear what our customers say about their experience with Webzee
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
  testimonialRefs.current[index] = el;
}}

              className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${testimonial.height}`}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-10"></div>

                <svg
                  className="w-8 h-8 text-indigo-500 mb-4 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed font-serif">
                  {testimonial.quote}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <img className="rounded-full" src={testimonial.image}></img>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default TestimonialsSection;

// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";

// // Register GSAP plugins
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const TestimonialsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const testimonials = [
//     {
//       id: 1,
//       quote: "Webzee helped me finally understand my audience on a deeper level...",
//       author: "Kristin Watson",
//       role: "SMM",
//       height: "h-70",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//     },
//     {
//       id: 2,
//       quote: "I love how easy it is to manage my social media accounts with Webzee...",
//       author: "Theresa Webb",
//       role: "Manager",
//       height: "h-60",
//       image: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
//     },
//     {
//       id: 3,
//       quote: "Before using Webzee, I struggled to make sense of all the data...",
//       author: "Jerome Bell",
//       role: "Digital Creator",
//       height: "h-70",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&s"
//     },
//     {
//       id: 4,
//       quote: "Webzee has completely transformed how I manage my social media...",
//       author: "Bessie Cooper",
//       role: "Network Specialist",
//       height: "h-60",
//       image: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
//     },
//     {
//       id: 5,
//       quote: "As a freelancer, Webzee gives me all the tools I need.has completely transformed how I manage my social media.has completely transformed how I manage my social media.",
//       author: "Devon Lane",
//       role: "CEO",
//       height: "h-90",
//       image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//     },
//     {
//       id: 6,
//       quote: "With Webzee, managing multiple accounts for my clients has become a breeze...",
//       author: "Guy Hawkins",
//       role: "Social Media Consultant",
//       height: "h-72",
//       image: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg"
//     }
//   ];

//   useEffect(() => {
//     testimonialRefs.current = new Array(testimonials.length);
//   }, [testimonials.length]);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const animateElements = () => {
//       gsap.fromTo(
//         headingRef.current,
//         { y: 80, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
//       );

//       testimonialRefs.current.forEach((el, i) => {
//         if (el) {
//           gsap.fromTo(
//             el,
//             { y: 80, opacity: 0, filter: "blur(12px)" },
//             {
//               y: 0,
//               opacity: 0.8,
//               filter: "blur(0px)",
//               duration: 1,
//               ease: "power4.out",
//               delay: i * 0.2,
//               scrollTrigger: {
//                 trigger: el,
//                 start: "top 85%"
//               }
//             }
//           );
//         }
//       });
//     };

//     const trigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 75%",
//       onEnter: animateElements,
//       onEnterBack: animateElements,
//       markers: false
//     });

//     return () => trigger.kill();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <h2
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 "
//           >
//             Customer Testimonials
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
//             Hear what our customers say about their experience with Webzee
//           </p>
//         </div>

//         {/* Testimonials grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               ref={(el) => {testimonialRefs.current[index] = el}}
//               className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${testimonial.height}`}
//             >
//               <div className="relative">
//                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-10"></div>

//                 <svg
//                   className="w-8 h-8 text-indigo-500 mb-4 opacity-80"
//                   fill="currentColor"
//                   viewBox="0 0 32 32"
//                 >
//                   <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
//                 </svg>

//                 <p className="text-gray-700 mb-6 text-lg leading-relaxed font-serif italic">
//                   {testimonial.quote}
//                 </p>

//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={`Photo of ${testimonial.author}`}
//                       width={48}
//                       height={48}
//                       className="rounded-full object-cover"
//                       unoptimized // Remove this if domains are configured in next.config.js
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
//                     <p className="text-indigo-600 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//       <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//     </section>
//   );
// };

// export default TestimonialsSection;


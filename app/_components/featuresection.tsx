"use client";

import { useEffect, useRef } from "react";
import {
  PencilCircle,
  PaintBrush,
  Code,
  DeviceMobile,
  GlobeHemisphereEast,
  PuzzlePiece
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: <PencilCircle size={32} weight="light" className="text-gray-900" />,
    title: "Drag & Drop Builder",
    description: "Build interfaces visually, no code required.",
    imageSrc: "https://miro.medium.com/v2/resize:fit:2000/1*bXCSaXR9_ky8vZyIIBwNgw.png"
  },
  {
    icon: <PaintBrush size={32} weight="light" className="text-gray-900" />,
    title: "Smart Styling",
    description: "Set global styles with adaptive themes.",
    imageSrc: "https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2012/10/BasicReadyToUseCSSStyles.jpg?x15084"
  },
  {
    icon: <Code size={32} weight="light" className="text-gray-900" />,
    title: "Developer Mode",
    description: "Export clean code or hand-tune it inside Tailark.",
    imageSrc: "https://www.delasign.com/CDN/images/How-to-enable-developer-mode-on-an-Android-phone-or-tablet.webp"
  },
  {
    icon: <DeviceMobile size={32} weight="light" className="text-gray-900" />,
    title: "Responsive by Default",
    description: "Auto-optimized layouts for all screens.",
    imageSrc: "https://kinsta.com/wp-content/uploads/2020/08/media-queries.png"
  },
  {
    icon: <GlobeHemisphereEast size={32} weight="light" className="text-gray-900" />,
    title: "Multilingual Support",
    description: "Design in multiple languages with ease.",
    imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05T1unqdGkIAdQZ8l84RSBhGJpQSXo3EK5w&s"
  },
  {
    icon: <PuzzlePiece size={32} weight="light" className="text-gray-900" />,
    title: "Plugin Ecosystem",
    description: "Extend Tailark with powerful plugins.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eYAXL1vci-Rl8M0We4ZTK949eePW9pT_EQ&s"
  }
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null); // Changed to Tween

  const duplicatedFeatures = [...features, ...features];

  useEffect(() => {
    if (!cardsRef.current || !cardsContainerRef.current) return;

    const cardWidth = 350;
    const totalWidth = cardWidth * duplicatedFeatures.length;
    
    cardsRef.current.style.width = `${totalWidth}px`;
    
    animationRef.current = gsap.to(cardsRef.current, {
      x: -totalWidth / 2,
      duration: 40,
      ease: "none",
      repeat: -1
    });

    const container = cardsContainerRef.current;
    const pauseAnimation = () => animationRef.current?.pause();
    const resumeAnimation = () => animationRef.current?.play();

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      animationRef.current?.kill();
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
    gsap.fromTo(
      subheadingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f9fafb] to-white py-24 px-4 sm:px-6 lg:px-20 text-gray-900 overflow-hidden"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-600">
          Features
        </div>
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          Design Like Never Before
        </h2>
        <p
          ref={subheadingRef}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Powerful tools, intuitive UX, pixel-perfect control—built for designers
          who demand more.
        </p>
      </div>

      <div 
        ref={cardsContainerRef}
        className="relative overflow-x-hidden py-4"
      >
        <div
          ref={cardsRef}
          className="flex gap-8 will-change-transform"
        >
          {duplicatedFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] bg-white shadow-xl border border-white/50 rounded-xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:ring-1 hover:ring-indigo-200 hover:shadow-indigo-100"
            >
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="mb-4 w-full h-40 object-cover rounded-lg filter drop-shadow-lg"
              />
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mx-auto">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-center mb-1">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import {
//   PencilCircle,
//   PaintBrush,
//   Code,
//   DeviceMobile,
//   GlobeHemisphereEast,
//   PuzzlePiece
// } from "@phosphor-icons/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const features = [
//   {
//     icon: <PencilCircle size={32} weight="light" className="text-gray-900" />,
//     title: "Drag & Drop Builder",
//     description: "Build interfaces visually, no code required.",
//     imageSrc: "https://miro.medium.com/v2/resize:fit:2000/1*bXCSaXR9_ky8vZyIIBwNgw.png"
//   },
//   {
//     icon: <PaintBrush size={32} weight="light" className="text-gray-900" />,
//     title: "Smart Styling",
//     description: "Set global styles with adaptive themes.",
//     imageSrc: "https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2012/10/BasicReadyToUseCSSStyles.jpg?x15084"
//   },
//   {
//     icon: <Code size={32} weight="light" className="text-gray-900" />,
//     title: "Developer Mode",
//     description: "Export clean code or hand-tune it inside Tailark.",
//     imageSrc: "https://www.delasign.com/CDN/images/How-to-enable-developer-mode-on-an-Android-phone-or-tablet.webp"
//   },
//   {
//     icon: <DeviceMobile size={32} weight="light" className="text-gray-900" />,
//     title: "Responsive by Default",
//     description: "Auto-optimized layouts for all screens.",
//     imageSrc: "https://kinsta.com/wp-content/uploads/2020/08/media-queries.png"
//   },
//   {
//     icon: <GlobeHemisphereEast size={32} weight="light" className="text-gray-900" />,
//     title: "Multilingual Support",
//     description: "Design in multiple languages with ease.",
//     imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05T1unqdGkIAdQZ8l84RSBhGJpQSXo3EK5w&s"
//   },
//   {
//     icon: <PuzzlePiece size={32} weight="light" className="text-gray-900" />,
//     title: "Plugin Ecosystem",
//     description: "Extend Tailark with powerful plugins.",
//     imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eYAXL1vci-Rl8M0We4ZTK949eePW9pT_EQ&s"
//   }
// ];

// export default function FeatureSection() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const headingRef = useRef<HTMLHeadingElement | null>(null);
//   const subheadingRef = useRef<HTMLParagraphElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     cardRefs.current = Array(features.length).fill(null);
//   }, []);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     gsap.fromTo(
//       headingRef.current,
//       { y: 60, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
//       }
//     );
//     gsap.fromTo(
//       subheadingRef.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.1,
//         ease: "power4.out",
//         scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
//       }
//     );
//     cardRefs.current.forEach((card, i) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { y: 80, opacity: 0, filter: "blur(12px)" },
//           {
//             y: 0,
//             opacity: 1,
//             filter: "blur(0px)",
//             duration: 1,
//             delay: i * 0.15,
//             ease: "power4.out",
//             scrollTrigger: { trigger: card, start: "top 90%" }
//           }
//         );
//       }
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-gradient-to-b from-[#f9fafb] to-white py-24 px-4 sm:px-6 lg:px-20 text-gray-900 overflow-hidden"
//     >
//       <div className="text-center mb-16">
//         <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-600">
//           Features
//         </div>
//         <h2
//           ref={headingRef}
//           className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
//         >
//           Design Like Never Before
//         </h2>
//         <p
//           ref={subheadingRef}
//           className="text-lg text-gray-600 max-w-2xl mx-auto"
//         >
//           Powerful tools, intuitive UX, pixel-perfect control—built for designers
//           who demand more.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {features.map((feature, i) => (
//           <div
//             key={i}
//             ref={(el) => {cardRefs.current[i] = el}}
//             className="bg-white shadow-xl border border-white/50 rounded-xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:ring-1 hover:ring-indigo-200 hover:shadow-indigo-100"
//           >
//             <img
//               src={feature.imageSrc}
//               alt={feature.title}
//               className="mb-4 w-full h-40 object-cover rounded-lg filter drop-shadow-lg"
//             />
//             <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mx-auto">
//               {feature.icon}
//             </div>
//             <h4 className="text-lg font-semibold text-center mb-1">
//               {feature.title}
//             </h4>
//             <p className="text-gray-600 text-sm text-center">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

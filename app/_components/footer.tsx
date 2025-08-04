// "use client";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-b from-[#0a0b1a] to-[#000000] py-24 px-4 overflow-hidden">
//       {/* Oversized background text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//         <span className="text-[20rem] font-bold tracking-tighter text-white/5 select-none">
//           Tailark
//         </span>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Navigation */}
//         <nav className="flex justify-center mb-8">
//           <ul className="flex space-x-10">
//             {['Home', 'Our Platform', 'Features', 'FAQ', 'Contact'].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="font-inter font-light text-white/80 hover:text-white transition-colors duration-300 text-lg tracking-wide hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mission statement */}
//         <p className="text-center text-white/60 font-light max-w-2xl mx-auto mb-16 text-lg tracking-normal">
//           Empowering businesses with smart financial tools—secure, reliable, and built for growth.
//         </p>

//         {/* Bottom row */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
//           <span className="text-white/50 text-sm mb-4 md:mb-0">
//             © {new Date().getFullYear()} Tailark. All rights reserved
//           </span>
//           <div className="flex space-x-6">
//             <a href="#" className="text-white/50 hover:text-blue-400 text-sm transition-colors duration-300">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-white/50 hover:text-blue-400 text-sm transition-colors duration-300">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
//       <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import {
  FacebookLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B071F] via-[#0F0826] to-[#07061A] py-24 px-4 overflow-hidden">
      {/* Oversized background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 ">
        <span className="text-[20rem] font-bold tracking-tighter text-white/5 select-none">
          webzee
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation */}
        <nav className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Home", "Our Platform", "Features", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-inter font-light text-white/80 hover:text-white transition-colors duration-300 text-lg tracking-wide hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mission statement */}
        <p className="text-center text-white/60 font-light max-w-2xl mx-auto mb-10 text-lg tracking-normal">
          Empowering businesses with smart financial tools—secure, reliable, and built for growth.
        </p>

        {/* Social icons row */}
        <div className="flex justify-center gap-6 mb-16">
          {[FacebookLogoIcon, LinkedinLogoIcon, InstagramLogoIcon, XLogoIcon].map((Icon, i) => (
            <div
              key={i}
              className="bg-[#A78BFA]/20 w-10 h-10 flex items-center justify-center rounded-md backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Icon size={20} weight="light" className="text-[#C4B5FD]" />
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <span className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tailark. All rights reserved
          </span>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/50 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-blue-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </footer>
  );
};

export default Footer;

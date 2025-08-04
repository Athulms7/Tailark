'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PremiumPricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<'website' | 'app'>('website');
  const [pageCount, setPageCount] = useState(5);
  const [featureLevel, setFeatureLevel] = useState<'standard' | 'premium'>('standard');

  // Calculate pricing based on selections
  const calculatePrice = () => {
    const basePrice = activeTab === 'website' ? 199 : 499;
    const pageMultiplier = activeTab === 'website' ? pageCount * 15 : pageCount * 25;
    const featureMultiplier = featureLevel === 'premium' ? 1.5 : 1;
    return Math.round((basePrice + pageMultiplier) * featureMultiplier);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Sophisticated entrance sequence
      gsap.from('.hero-content > *', {
        duration: 1.2,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });

      // Refined card animations
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reset',
              markers: false
            },
            y: 80,
            opacity: 0,
            duration: 0.9,
            delay: i * 0.15,
            ease: 'back.out(1.2)'
          });
        }
      });

      // Calculator animation
      gsap.from('.calculator-section', {
        scrollTrigger: {
          trigger: '.calculator-section',
          start: 'top 85%',
          toggleActions: 'play none none reset'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Elegant stats animation
      gsap.from('.trust-section', {
        scrollTrigger: {
          trigger: '.trust-section',
          start: 'top 80%',
          toggleActions: 'play none none reset'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Delicate counter animations
      numbersRef.current.forEach((numberEl, i) => {
        if (numberEl) {
          const target = parseInt(numberEl.textContent?.replace(/[+,]/g, '') || '0', 10);
          const obj = { value: 0 };
          
          gsap.to(obj, {
            value: target,
            duration: 2.5,
            scrollTrigger: {
              trigger: numberEl,
              start: 'top 85%',
              toggleActions: 'play none none reset'
            },
            ease: 'circ.out',
            onUpdate: function() {
              if (i === 3) {
                numberEl.textContent = '24/7';
              } else {
                numberEl.textContent = Math.floor(obj.value).toLocaleString() + (i === 1 ? '%' : '+');
              }
            }
          });
        }
      });

      // Premium hover interactions
      gsap.utils.toArray<HTMLElement>('.elevated-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
            duration: 0,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            duration: 0,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });

      // Refined button micro-interactions
      gsap.utils.toArray<HTMLElement>('.luxury-btn').forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.03,
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
            duration: 0
          });
        });
        
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            duration: 0
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addStatToRefs = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addNumberToRefs = (el: HTMLDivElement | null) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 overflow-x-hidden"
    >
      {/* Subtle ambient elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Hero Section */}
        <header className="hero-content text-center py-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200 leading-tight">
            Elevate Your Digital Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 leading-relaxed">
            Discover our meticulously crafted UI solutions designed to transform your projects into 
            exceptional digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </header>

        {/* Calculator Section */}
        <div className="calculator-section bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">Project Estimator</h3>
              <p className="text-gray-400 font-light mb-6">
                Customize your package based on project requirements
              </p>
              
              <div className="tab-container bg-gray-900/50 rounded-lg p-1 inline-flex mb-6">
                <button
                  onClick={() => setActiveTab('website')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'website' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Website
                </button>
                <button
                  onClick={() => setActiveTab('app')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'app' ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                  Mobile App
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of {activeTab === 'website' ? 'Pages' : 'Screens'}
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max={activeTab === 'website' ? '20' : '50'}
                      value={pageCount}
                      onChange={(e) => setPageCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white font-medium min-w-[30px] text-center">{pageCount}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Feature Level
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFeatureLevel('standard')}
                      className={`py-2 px-4 rounded-lg border transition-all ${featureLevel === 'standard' ? 'border-purple-500 bg-purple-500/10 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}
                    >
                      Standard
                    </button>
                    <button
                      onClick={() => setFeatureLevel('premium')}
                      className={`py-2 px-4 rounded-lg border transition-all ${featureLevel === 'premium' ? 'border-cyan-500 bg-cyan-500/10 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}
                    >
                      Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700/50">
              <h4 className="text-lg font-medium text-gray-300 mb-4">Estimated Investment</h4>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                  ${calculatePrice().toLocaleString()}
                </span>
                <span className="text-gray-400 font-light mb-1">one-time</span>
              </div>
              <p className="text-gray-400 font-light mb-6">
                Includes {pageCount} {activeTab === 'website' ? 'pages' : 'screens'} with {featureLevel} features
              </p>
              <button className="luxury-btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Detailed Proposal
              </button>
            </div>
          </div>
        </div>

        {/* Premium Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {/* Essentials Tier */}
          <div 
            ref={addCardToRefs}
            className="elevated-card bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 transition-all duration-500 hover:border-purple-500/30"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm font-medium text-purple-400 mb-1">ESSENTIALS</span>
                <h3 className="text-xl font-semibold text-white">Design Foundations</h3>
              </div>
              <span className="bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                PERSONAL USE
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$89</div>
              <div className="text-gray-400 font-light text-sm">One-time payment</div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4 mb-6">
              <ul className="space-y-2">
                {[
                  "100+ premium UI components",
                  "Fully responsive designs",
                  "Dark & light mode",
                  "12 months updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="luxury-btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Professional Tier (Featured) */}
          <div 
            ref={addCardToRefs}
            className="elevated-card bg-gray-800/80 backdrop-blur-sm rounded-xl border-2 border-purple-500/50 p-6 relative overflow-hidden transition-all duration-500 hover:border-purple-500/80"
          >
            <div className="absolute top-5 right-[-35px] bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-10 py-1 transform rotate-45 shadow-lg">
              RECOMMENDED
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm font-medium text-indigo-400 mb-1">PROFESSIONAL</span>
                <h3 className="text-xl font-semibold text-white">Complete Toolkit</h3>
              </div>
              <span className="bg-indigo-500/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">
                FREELANCERS
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$199</div>
              <div className="text-gray-400 font-light text-sm">One-time payment</div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4 mb-6">
              <ul className="space-y-2">
                {[
                  "All Essentials features",
                  "30+ premium templates",
                  "Advanced customization",
                  "Priority support",
                  "24 months updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="luxury-btn w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              Choose Professional
            </button>
          </div>

          {/* Enterprise Tier */}
          <div 
            ref={addCardToRefs}
            className="elevated-card bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 transition-all duration-500 hover:border-pink-500/30"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm font-medium text-pink-400 mb-1">ENTERPRISE</span>
                <h3 className="text-xl font-semibold text-white">Unlimited Access</h3>
              </div>
              <span className="bg-pink-500/10 text-pink-300 text-xs font-medium px-3 py-1 rounded-full">
                COMMERCIAL
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$499</div>
              <div className="text-gray-400 font-light text-sm">One-time payment</div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4 mb-6">
              <ul className="space-y-2">
                {[
                  "All Professional features",
                  "Commercial license",
                  "White-label rights",
                  "Dedicated support",
                  "Lifetime updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="luxury-btn w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              Go Enterprise
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-section bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700/50 mb-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/hud-white-grid-pattern-technology-futuristic-user-interface-science-fiction-design-black-background_33869-4938.jpg?semt=ais_hybrid&w=740&q=80')] opacity-[3%]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Join an exclusive community of forward-thinking designers and developers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "12,500+", label: "Satisfied Creators" },
                { value: "98", label: "Customer Satisfaction" },
                { value: "300+", label: "Premium Components" },
                { value: "24/7", label: "Priority Support" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  ref={addStatToRefs}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50"
                >
                  <div 
                    ref={addNumberToRefs}
                    className="text-3xl md:text-4xl font-bold mb-2 text-white"
                  >
                    {stat.value}{index === 1 ? '%' : '+'}
                  </div>
                  <div className="text-gray-400 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Designs?
          </h3>
          <p className="text-gray-400 mb-8 font-light leading-relaxed">
            Have specific requirements? Our design specialists are standing by to craft the perfect package.
          </p>
          <button className="luxury-btn inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
            Contact Our Team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PremiumPricingSection;
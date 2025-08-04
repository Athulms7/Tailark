// components/UltimatePricingSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<'website' | 'app'>('website');
  const [pageCount, setPageCount] = useState(5);
  const [featureLevel, setFeatureLevel] = useState<'standard' | 'premium'>('standard');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate pricing based on selections
  const calculatePrice = () => {
    let basePrice = activeTab === 'website' ? 199 : 499;
    let pageMultiplier = activeTab === 'website' ? pageCount * 15 : pageCount * 25;
    let featureMultiplier = featureLevel === 'premium' ? 1.5 : 1;
    return Math.round((basePrice + pageMultiplier) * featureMultiplier);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Master timeline for coordinated animations
      const masterTL = gsap.timeline();

      // Hero animation sequence
      masterTL.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.tab-container', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4');

      // Calculator animation
      gsap.from('.calculator-section', {
        scrollTrigger: {
          trigger: '.calculator-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Pricing cards animation
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.4)'
          });
        }
      });

      // Interactive elements hover effects
      gsap.utils.toArray('.interactive-card').forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
            duration: 0.4,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });

      // Animated gradient borders
      const gradientBorderAnimation = () => {
        gsap.to('.gradient-border', {
          backgroundPosition: '100% 50%',
          duration: 15,
          ease: 'none',
          repeat: -1
        });
      };
      gradientBorderAnimation();

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addCardToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-x-hidden"
    >
      {/* Animated gradient elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-purple-900/20 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-radial from-indigo-900/20 to-transparent rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <header className="text-center py-16 max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-200 leading-tight">
            Professional Digital Solutions
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-400 font-light mb-8 leading-relaxed">
            Custom-built websites and applications designed to elevate your brand and drive results
          </p>
        </header>

        {/* Interactive Calculator */}
        <div className="calculator-section bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">Project Calculator</h3>
              <p className="text-gray-400 font-light mb-6">
                Estimate your investment based on project requirements
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
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Detailed Proposal
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Our Standard Packages
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 font-light">
          Predefined solutions for businesses of all sizes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Starter Plan */}
          <div 
            ref={addCardToRefs}
            className="interactive-card bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500"
          >
            <div className="gradient-border h-1 w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-transparent rounded-full mb-6"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Starter</h3>
                <p className="text-gray-400 text-sm font-light">
                  Perfect for small businesses
                </p>
              </div>
              <span className="bg-purple-500/10 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                POPULAR
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$1,499</div>
              <div className="text-gray-400 text-sm font-light">one-time payment</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "5-7 page website",
                "Mobile responsive design",
                "Basic SEO setup",
                "Contact form integration",
                "1 month support",
                "3 design revisions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300">
              Start Project
            </button>
          </div>

          {/* Business Plan */}
          <div 
            ref={addCardToRefs}
            className="interactive-card bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border-2 border-indigo-500/50 hover:border-indigo-500/80 transition-all duration-500 transform scale-[1.02]"
          >
            <div className="gradient-border h-1 w-full bg-gradient-to-r from-indigo-600 via-cyan-600 to-transparent rounded-full mb-6"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Business</h3>
                <p className="text-gray-400 text-sm font-light">
                  For growing companies
                </p>
              </div>
              <span className="bg-indigo-500/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">
                BEST VALUE
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$3,999</div>
              <div className="text-gray-400 text-sm font-light">one-time payment</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "10-15 page website",
                "Premium UI/UX design",
                "Advanced SEO optimization",
                "CMS integration",
                "3 months support",
                "Unlimited revisions",
                "Performance optimization",
                "Analytics setup"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium py-2.5 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
              Get Business Solution
            </button>
          </div>

          {/* Enterprise Plan */}
          <div 
            ref={addCardToRefs}
            className="interactive-card bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="gradient-border h-1 w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-transparent rounded-full mb-6"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Enterprise</h3>
                <p className="text-gray-400 text-sm font-light">
                  Custom solutions for large businesses
                </p>
              </div>
              <span className="bg-cyan-500/10 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
                CUSTOM
              </span>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-white">$9,999+</div>
              <div className="text-gray-400 text-sm font-light">tailored pricing</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {[
                "Custom page count",
                "Bespoke UI/UX design",
                "Enterprise SEO strategy",
                "E-commerce integration",
                "6+ months support",
                "Dedicated project manager",
                "Priority development",
                "Ongoing maintenance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300">
              Contact for Quote
            </button>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Schedule a free consultation with our experts to discuss your project requirements and get a personalized quote.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
            Book Discovery Call
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PricingSection;
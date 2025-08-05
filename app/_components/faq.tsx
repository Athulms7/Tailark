'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export function PremiumFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const faqs = [
    {
      question: "Is Webzee free to use?",
      answer:
        "Yes, Webzee offers a free plan with essential website building features. Upgrade to Premium for advanced tools and exclusive templates.",
      color: "from-purple-100 to-purple-50",
      position: "lg:mr-23 lg:mt-8"
    },
    {
      question: "Team collaboration?",
      answer:
        "Premium includes real-time co-editing, version history, and role-based permissions for seamless teamwork.",
      color: "from-blue-100 to-blue-50",
      position: "lg:ml-10 lg:-mt-4"
    },
    {
      question: "Performance impact?",
      answer:
        "Webzee generates optimized, lightning-fast code. Our CDN ensures global loading speeds under 1.5s.",
      color: "from-blue-100 to-blue-50",
      position: "lg:mr-35 lg:mt-3"
    },
    {
      question: "Data privacy?",
      answer:
        "We never access your content. All data is encrypted with enterprise-grade security protocols.",
      color: "from-blue-100 to-blue-50",
      position: "lg:ml lg:mr-15 lg:-mt"
    },
    {
      question: "Platform support?",
      answer:
        "Design on any device. Publish everywhere with automatic responsive optimization.",
      color: "from-purple-100 to-purple-50",
      position: "lg:mr-12 lg:mt-1"
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="scroll-smooth min-h-screen bg-gradient-to-br from-[#f7f9fc] via-[#fdfdff] to-[#f1f3f9] py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ delay: 0.7 }}
          className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl"
        />

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
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

        <div className="relative grid grid-cols-1 lg:grid-cols-2 z-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30, x: index % 2 ? 50 : -50 },
                visible: { opacity: 1, y: 0, x: 0 }
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.30,
                type: "spring",
                damping: 10
              }}
              className={`${faq.position} ${index % 2 ? "lg:mt-16" : ""}`}
            >
              <div
                className={`bg-gradient-to-br ${faq.color} rounded-2xl shadow-xl border border-white/50 overflow-hidden`}
              >
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
          animate={isInView ? { opacity: 0.03, y: 0 } : {}}
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

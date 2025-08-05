"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with building a website?",
      answer:
        "Sign-up is quick! Choose a template, drag-and-drop elements, and publish instantly. No coding required.",
    },
    {
      question: "Can I manage my social media from Webzee?",
      answer:
        "Yes! You can schedule posts, analyze engagement, and grow your audience using our built-in tools.",
    },
    {
      question: "Is my website mobile optimized?",
      answer:
        "Absolutely. Every site is responsive by default, ensuring it looks great on phones, tablets, and desktops.",
    },
    {
      question: "Do I need to pay to use Webzee?",
      answer:
        "We offer a free tier with essential features. Upgrade to Premium to unlock SEO tools, analytics, and custom domains.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#f7f8fb] to-[#fff3fb] py-24 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-black mb-4">FAQs</h2>
          <p className="text-gray-500 text-base max-w-sm mb-6">
            Everything you need to know about building websites, growing your social media, and using Webzee effectively.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-black text-white text-sm rounded-full">
              Getting Started
            </span>
            <span className="px-4 py-1.5 border border-black text-sm rounded-full">
              Pricing & Plans
            </span>
            <span className="px-4 py-1.5 border border-black text-sm rounded-full">
              Social Media Tools
            </span>
            <span className="px-4 py-1.5 border border-black text-sm rounded-full">
              Technical Help
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg text-black font-medium">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-white to-[#f3f3ff] border border-gray-200 shadow-sm">
            <h4 className="text-base font-semibold text-black mb-1">
              Still have questions?
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Contact our support team. We’ll make everything simple and clear!
            </p>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-slide", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f2f2f2] py-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-sm font-medium text-red-500 uppercase tracking-wide mb-1">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Results that speaks volume
        </h2>
        <p className="text-base text-gray-500 mt-1">
          Find out how our happy clients are raving about us.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="testimonial-swiper"
        >
          {[
            {
              stat: "8X",
              title: "Increase in conversion rate",
              quote:
                "Our app needed a high-converting landing page. The team crafted a stunning design that increased our conversions by 800% in two weeks. Highly recommend!",
              name: "David Callahan",
              role: "Marketing Director, Spotify",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&s",
              dark: false,
            },
            {
              stat: "2X",
              title: "Increase in lead generation",
              quote:
                "The branding and design were meticulous. The launch was faster, and the results were phenomenal.",
              name: "John Mitchel",
              role: "Marketing Director, Google",
              avatar: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg",
              dark: false,
            },
            {
              quote:
                "The MVP design was delivered fast with amazing polish. It looked and felt professional.",
              name: "Sarah Mitchel",
              role: "Marketing Director, Google",
              avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
              dark: true,
            }, {
              stat: "8X",
              title: "Increase in conversion rate",
              quote:
                "Our app needed a high-converting landing page. The team crafted a stunning design that increased our conversions by 800% in two weeks. Highly recommend!",
              name: "David Callahan",
              role: "Marketing Director, Spotify",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&s",
              dark: false,
            },
            {
              quote:
                "Their animations elevated our product demos. They deeply understand UX and storytelling.",
              name: "Tom Becker",
              role: "Founder, PulseCore",
              avatar: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F483102%2F6d940290-12d0-4c4a-8be9-1a9fc955d203.jpeg",
              dark: false,
            },
            
           
          ].map((t, i) => (
            <SwiperSlide
              key={i}
              className={`testimonial-card rounded-2xl p-6 shadow-md ${
                t.dark ? "bg-black text-white" : "bg-white text-gray-900"
              }`}
            >
              {t.stat && (
                <h3 className="text-2xl font-bold mb-1">{t.stat}</h3>
              )}
              {t.title && (
                <p
                  className={`font-medium mb-3 ${
                    t.dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t.title}
                </p>
              )}
              <blockquote
                className={`italic ${
                  t.dark ? "text-gray-100" : "text-gray-700"
                }`}
              >
                “{t.quote}”
              </blockquote>
              <div className="flex items-center mt-4">
                <Image
                  src={`${t.avatar}`}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm opacity-70">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-10">
        <button className="inline-flex items-center gap-2 text-sm text-gray-900 font-medium hover:underline">
          View all reviews <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        1500 satisfied clients love our services • ⭐ 4.9 Based on 1.5k reviews
      </div>
    </section>
  );
}

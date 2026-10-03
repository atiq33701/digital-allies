"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";

export default function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (testimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  /*
   * We add the first 3 testimonials to the end.
   * This allows the carousel to keep sliding forward.
   */
  const carouselItems = [
    ...testimonials,
    ...testimonials.slice(0, 3),
  ];

  /*
   * Each card takes 1/3 of the container on desktop.
   * Moving one index = moving exactly one card.
   */
  const translatePercentage = currentIndex * (100 / 3);

  /*
   * When we reach the duplicated cards,
   * instantly reset to the real first cards.
   */
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, testimonials.length]);

  if (!testimonials?.length) return null;

  return (
    <div className="mt-14 overflow-hidden">
      <div
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-700 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${translatePercentage}%)`,
        }}
      >
        {carouselItems.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="w-full shrink-0 px-0 md:w-1/2 md:px-3 lg:w-1/3"
          >
            <article className="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <p className="mt-6 text-sm leading-7 text-slate-600">
                “{testimonial.text}”
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">

                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-black text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

                <MessageSquareQuote
                  size={28}
                  className="ml-auto text-[#19C2C1]/30"
                />

              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
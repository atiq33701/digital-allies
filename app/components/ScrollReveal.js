"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 500,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const directions = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95",
  };

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all ease-out ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `${directions[direction]} opacity-0`
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
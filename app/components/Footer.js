import React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Footer */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/customer-service-contacting-with-customer.54f46.jpg')",
          }}
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Teal Glow */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#19C2C1]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#19C2C1]/15 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center md:py-25 sm:px-6">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Become Our Partner And Grow Your Business
          </h2>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19C2C19] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 bg-[#16aeae]"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          <Link href="https://www.google.com/maps/place/Digital+Allies/@30.964703,71.204262,17z/data=!4m6!3m5!1s0x6f6f8cf3e2fe79ab:0xefa1d754555860cb!8m2!3d30.964703!4d71.204262!16s%2Fg%2F11m5rcgvj6?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-lg">
  Find Our Location
</Link>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="bg-[#19C2C1] px-5 py-5 text-center text-white">
        © 2025 Digital Allies. All Right Reserved
      </div>
    </>
  );
};

export default Footer;

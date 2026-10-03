"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "GMB Optimization",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Digital Allies,

I would like to get in touch regarding your services.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Service Needed: ${formData.service}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/923023753153?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };


  return (

<main className="bg-white">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
      style={{
        backgroundImage: "url('/images/coworkers.jpg')",
      }}
    />

    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Teal Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,194,193,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(25,194,193,0.12),transparent_35%)]" />

    {/* Content */}
    <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-6 lg:px-8">
      <div>

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Digital Allies
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80} duration={700}>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Contact
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150} duration={600}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold">
            <Link
              href="/"
              className="text-white transition-colors hover:text-[#19C2C1]"
            >
              Home
            </Link>

            <ChevronRight
              size={16}
              className="text-[#19C2C1]"
            />

            <span className="text-[#19C2C1]">
              Contact
            </span>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* CONTACT FORM */}
  <section className="bg-white py-15">
    <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Contact Us
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80} duration={700}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Let's Get In Touch With Digital Allies
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={650}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Tell us what you need help with and our team will be ready to
            discuss the right digital marketing solution for your business.
          </p>
        </ScrollReveal>

      </div>


      {/* FORM */}
      <ScrollReveal direction="up" delay={100} duration={750}>
        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                First Name
                <span className="ml-1 text-[#19C2C1]">*</span>
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#19C2C1] focus:ring-4 focus:ring-[#19C2C1]/10"
              />
            </div>


            {/* LAST NAME */}
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                Last Name
                <span className="ml-1 text-[#19C2C1]">*</span>
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#19C2C1] focus:ring-4 focus:ring-[#19C2C1]/10"
              />
            </div>


            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                Email
               
              </label>

              <input
                id="email"
                name="email"
                type="email"
               
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#19C2C1] focus:ring-4 focus:ring-[#19C2C1]/10"
              />
            </div>


            {/* SERVICE */}
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                What do you need help with?
                <span className="ml-1 text-[#19C2C1]">*</span>
              </label>

              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-[#19C2C1] focus:ring-4 focus:ring-[#19C2C1]/10"
              >
                <option value="" disabled>
                  Select a Service
                </option>

                <option value="Local SEO">
                  Local SEO
                </option>

                <option value="Google My Business Optimization">
                  Google My Business Optimization
                </option>

                <option value="SEO Services">
                  SEO Services
                </option>

                <option value="SEO Agency">
                  SEO Agency
                </option>

                <option value="SEO in Dubai">
                  SEO in Dubai
                </option>

                <option value="SEO Specialist">
                  SEO Specialist
                </option>

                <option value="GMB SEO">
                  GMB SEO
                </option>

                <option value="AI Search Optimization">
                  AI Search Optimization
                </option>
              </select>
            </div>


            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                Comment or Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or what you need help with..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#19C2C1] focus:ring-4 focus:ring-[#19C2C1]/10"
              />
            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl sm:w-auto"
            >
              Submit

              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </form>
        </div>
      </ScrollReveal>

    </div>
  </section>


  {/* CONTACT INFORMATION */}
  <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">

      {/* EMAIL */}
      <ScrollReveal direction="left" duration={700}>
        <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#19C2C1]/40 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-300 group-hover:bg-[#19C2C1] group-hover:text-white">
              <Mail size={25} />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-950">
                Our Email
              </h3>

              <p className="mt-1 break-all text-sm font-medium text-slate-600">
                mostworldfacts@gmail.com
              </p>
            </div>

          </div>
        </div>
      </ScrollReveal>


      {/* PHONE */}
      <ScrollReveal direction="right" delay={100} duration={700}>
        <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#19C2C1]/40 hover:shadow-xl">

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-300 group-hover:bg-[#19C2C1] group-hover:text-white">
              <Phone size={25} />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-950">
                Our Phone
              </h3>
              <a
                            href="https://wa.me/923023753153"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-black  transition-all duration-300 hover:scale-90"
                            >
  +92 340 4814745
                          </a>
            </div>

          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>

</main>

  );
}
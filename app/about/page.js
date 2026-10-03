import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

import {
  BadgeCheck,
  Users,
  MapPin,
  Phone,
  Mail,
  UserCheck,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    number: "7+",
    title: "Years Of Experience",
    icon: BadgeCheck,
  },
  {
    number: "10+",
    title: "Professional Team",
    icon: Users,
  },
  {
    number: "7000+",
    title: "Satisfied Clients",
    icon: UserCheck,
  },
  {
    number: "1000+",
    title: "Brands Helped",
    icon: Trophy,
  },
];

export const metadata = {
  title: "About Digital Allies Dubai",
  description:
    "Learn about Digital Allies Dubai, our SEO expertise, digital marketing experience, professional team, and commitment to helping businesses grow online.",
};

export default function AboutPage() {
  return (

<main className="bg-white">

  {/* ================= HERO ================= */}
  <section className="relative overflow-hidden bg-slate-950">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
      style={{
        backgroundImage: "url('/images/data.jpg')",
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Teal Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,194,193,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(25,194,193,0.12),transparent_35%)]" />

    {/* Hero Content */}
    <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-6 lg:px-8">
      <div>

        <ScrollReveal direction="left" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Digital Allies
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={750}>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200} duration={650}>
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
              About
            </span>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* ================= ABOUT ================= */}
  <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

      {/* ================= LEFT VISUAL ================= */}
      <ScrollReveal direction="left" duration={850}>
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">

          {/* Soft teal glow */}
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          {/* Yellow decorative shape */}
          <div className="relative mx-auto h-[520px] w-full max-w-[500px]">

            {/* YELLOW BACKGROUND SHAPE */}
            <svg
              viewBox="0 -50 600 750"
              className="absolute inset-0 h-[100%] w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="
                  M95 45
                  H250
                  C390 45 520 105 570 230
                  C590 280 600 335 600 395
                  V610
                  C600 660 560 700 510 700
                  H90
                  C40 700 0 660 0 610
                  V135
                  C0 85 40 45 95 45
                  Z
                "
                fill="#FFD77A"
              />
            </svg>

            {/* Person */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-0">
              <Image
                src="/images/boy-smiling.png"
                alt="Digital Allies team member"
                width={509}
                height={445}
                className="relative z-10 h-auto w-[78%] object-contain sm:w-full"
                priority
              />
            </div>

            {/* Small teal circle */}
            <ScrollReveal direction="right" delay={150} duration={650}>
              <div className="absolute right-3 top-16 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#19C2C1] shadow-lg sm:right-0">
                <BadgeCheck
                  size={28}
                  className="text-white"
                />
              </div>
            </ScrollReveal>

            {/* 185+ Brands Badge */}
            <ScrollReveal direction="up" delay={200} duration={700}>
              <div className="absolute -bottom-100 left-0 z-30 rounded-2xl bg-white p-5 shadow-2xl sm:left-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                    <BadgeCheck size={25} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      185+
                    </h3>

                    <p className="text-xs font-semibold text-slate-500">
                      Brands Joined
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Decorative Image */}
          <ScrollReveal direction="right" delay={100} duration={750}>
            <div className="absolute -bottom-5 -right-3 z-100 hidden w-44 overflow-hidden rounded-3xl border-8 border-white bg-white shadow-2xl sm:block md:w-52">
              <Image
                src="/images/graph1.png"
                alt="Digital marketing"
                width={447}
                height={417}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

        </div>
      </ScrollReveal>


      {/* ================= RIGHT CONTENT ================= */}
      <div>

        <ScrollReveal direction="right" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            About Digital Allies
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Grow Your Business With Digital Allies
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={750}>
          <p className="mt-7 text-base leading-8 text-slate-600">
            At{" "}
            <strong className="font-bold text-slate-950">
              Digital Allies
            </strong>
            , we are dedicated to helping businesses grow through expert{" "}
            <strong className="font-bold text-slate-950">
              SEO, reputation management, and digital marketing
            </strong>{" "}
            solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={750}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Our team of professionals specializes in{" "}
            <strong className="font-bold text-slate-950">
              Google My Business (GMB) optimization, social media growth,
              paid advertising, and review management
            </strong>{" "}
            to enhance your online credibility and visibility.
          </p>
        </ScrollReveal>


        {/* Mini Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <ScrollReveal direction="left" delay={100} duration={650}>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <BadgeCheck size={20} />
              </div>

              <span className="text-sm font-bold text-slate-800">
                Proven SEO Strategies
              </span>
            </div>
          </ScrollReveal>


          <ScrollReveal direction="right" delay={150} duration={650}>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <Users size={20} />
              </div>

              <span className="text-sm font-bold text-slate-800">
                Experienced Team
              </span>
            </div>
          </ScrollReveal>

        </div>


        {/* Button */}
        <ScrollReveal direction="up" delay={200} duration={700}>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl"
            >
              Work With Us

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* ================= STATS ================= */}
  <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">

    {/* Background decoration */}
    <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#19C2C1]/10 blur-3xl" />


    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">

        <ScrollReveal direction="left" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Our Achievements
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={750}>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Numbers That Reflect Our Growth
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200} duration={750}>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Our experience, team, clients, and growing network of brands
            reflect our commitment to delivering meaningful digital growth.
          </p>
        </ScrollReveal>

      </div>


      {/* Stats */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <ScrollReveal
              key={stat.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 120}
              duration={700}
              className="h-full"
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#19C2C1]/40 hover:bg-white/[0.08]">

                {/* Hover line */}
                <div className="absolute inset-x-0 bottom-0 h-0 bg-[#19C2C1] transition-all duration-500 group-hover:h-1" />

                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-500 group-hover:bg-[#19C2C1] group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Number */}
                <h3 className="mt-6 text-4xl font-black text-white">
                  {stat.number}
                </h3>

                {/* Title */}
                <p className="mt-2 text-sm font-semibold text-slate-400">
                  {stat.title}
                </p>

              </div>
            </ScrollReveal>
          );
        })}

      </div>
    </div>
  </section>

{/* =========================================================
    VISIT DIGITAL ALLIES
========================================================= */}
<section className="bg-[#f6fbfb] py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-2">

      {/* LEFT — LOCATION INFO */}
      <ScrollReveal direction="left" duration={700}>
        <div className="flex h-full flex-col justify-center p-8 sm:p-10 lg:p-14">

          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Visit Digital Allies
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Location
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
            Find us in Chowk Azam, Pakistan. We&apos;re here to help your
            business grow with modern digital solutions and strategies.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-8 space-y-5">

            {/* Address */}
            <ScrollReveal direction="left" delay={80} duration={600}>
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <MapPin size={20} />
                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Address
                  </p>

<a href="https://www.google.com/maps/place/Digital+Allies/@30.964703,71.204262,17z/data=!4m6!3m5!1s0x6f6f8cf3e2fe79ab:0xefa1d754555860cb!8m2!3d30.964703!4d71.204262!16s%2Fg%2F11m5rcgvj6?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-slate-700 transition-colors hover:text-[#19C2C1]">

                  <p className="mt-1 text-sm font-semibold leading-6 ">
                    Ward Number 6, Near Madni Masjid,
                    <br />
                    6 Number Chowk, Chowk Azam, Pakistan
                  </p>
</a>
                </div>

              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal direction="left" delay={140} duration={600}>
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

        <a
                       href="https://wa.me/923023753153"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="WhatsApp"
                       className="mt-1 block text-sm font-semibold text-slate-700 transition-colors hover:text-[#19C2C1]"
                     >
                 Message now
                     </a>
                </div>

              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal direction="left" delay={200} duration={600}>
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="mt-1 block text-sm font-semibold text-slate-700 transition-colors hover:text-[#19C2C1]"
                  >
                    your@email.com
                  </a>
                </div>

              </div>
            </ScrollReveal>

          </div>

          {/* GET DIRECTIONS */}
          <ScrollReveal direction="up" delay={250} duration={650}>
            <div className="mt-9">
              <a
                href="https://www.google.com/maps/place/Digital+Allies/@30.964703,71.204262,17z/data=!4m6!3m5!1s0x6f6f8cf3e2fe79ab:0xefa1d754555860cb!8m2!3d30.964703!4d71.204262!16s%2Fg%2F11m5rcgvj6?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-6 py-3.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-lg hover:shadow-[#19C2C1]/20"
              >
                <MapPin size={18} />

                Get Directions

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </ScrollReveal>

      {/* RIGHT — GOOGLE MAP */}
      <ScrollReveal direction="right" duration={750}>
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">

          <iframe
            src="https://www.google.com/maps?q=Digital+Allies,+Chowk+Azam,+Pakistan&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Digital Allies Location"
          />

        </div>
      </ScrollReveal>

    </div>

  </div>
</section>

</main>

  );
}
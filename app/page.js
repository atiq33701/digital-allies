import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

import {
  ArrowRight,
  BarChart3,
  Icon,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  Layers3,
  Megaphone,
  MessageSquareQuote,
  MousePointerClick,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const featureServices = [
  {
    icon: TrendingUp,
    title: "Local SEO & Reputation Management",
    description:
      "Boost your visibility and credibility with expert SEO and review management.",
  },
  {
    icon: BarChart3,
    title: "Social Media Growth & Engagement",
    description:
      "Increase your followers, likes, and engagement on Facebook, Instagram, and beyond.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Reputation & Trust Building",
    description:
      "Enhance your brand’s trust with verified reviews and strategic branding solutions.",
  },
  {
    icon: Megaphone,
    title: "Targeted Digital Marketing",
    description:
      "Drive more leads and conversions with paid ads, backlinks, and online promotions.",
  },
];

const services = [
  {
    icon: Search,
    title: "Local SEO & GMB Optimization",
    description:
      "Boost your local visibility with expert Google Business Profile optimization and SEO strategies.",
  },
  {
    icon: MessageSquareQuote,
    title: "Reputation & Review Management",
    description:
      "Improve your online credibility with verified and non-verified review management across multiple platforms.",
  },
  {
    icon: TrendingUp,
    title: "Website SEO & Optimization",
    description:
      "Enhance search rankings with on-page SEO, content optimization, and technical improvements.",
  },
  {
    icon: Star,
    title: "Industry-Specific Review Management",
    description:
      "Manage and improve your reputation on platforms like Trustpilot, Yelp, TripAdvisor, and more.",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description:
      "Grow your audience with organic and paid strategies for Instagram, Facebook, and more.",
  },
  {
    icon: Globe2,
    title: "Backlinks & Citations",
    description:
      "Increase authority with high-quality backlinks and local directory listings.",
  },
];

const trustedCompanies = [
  {
    name: "Technobrain",
    image: "/images/technobrain-1.54f46.png",
  },
  {
    name: "Infinity",
    image: "/images/infinity-1.54f46.png",
  },
  {
    name: "Meet Point",
    image: "/images/meet-point.54f46.png",
  },
  {
    name: "Mindcake",
    image: "/images/mindcake.54f46.png",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Trusted by Businesses",
    description:
      "Helping brands build credibility and long-term success.",
  },
  {
    icon: Layers3,
    title: "Proven Expertise",
    description:
      "Years of experience in SEO, reputation management, and digital marketing.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Solutions",
    description:
      "From SEO to social media and reviews, we cover it all.",
  },
];

const testimonials = [
  {
    text:
      "Digital Allies transformed our online presence! Their SEO and reputation management services helped us rank higher and gain more customers.",
    name: "Spike Dennis",
    role: "Company CEO",
    image: "/images/young-man-smiling-with-sunglasses.54f46.jpg",
  },
  {
    text:
      "Their team is professional and delivers results. Our Google reviews and social media engagement have improved significantly.",
    name: "Del Frazier",
    role: "Freelancer",
    image:
      "/images/portrait-of-an-interesting-young-man-in-winter-clothes-1.54f46.jpg",
  },
  {
    text:
      "We saw a noticeable increase in website traffic and customer inquiries after working with Digital Allies. Truly a game-changer!",
    name: "Polly Ingram",
    role: "Blogger",
    image: "/images/woman-posing-.54f46.jpg",
  },
  {
    text:
      "From SEO to paid ads, Digital Allies delivered exactly what we needed to scale our business. Amazing service!",
    name: "Teri Keller",
    role: "Company CEO",
    image: "/images/happy-woman-listening-to-music.54f46.jpg",
  },
  {
    text:
      "Their team handled our reputation management perfectly. We now have more positive reviews and a stronger online presence.",
    name: "Nydia Larson",
    role: "Freelancer",
    image:
      "/images/beautiful-woman-girl-natural-casual-portrait-.54f46.jpg",
  },
  {
    text:
      "The team is always available and provides excellent guidance. They truly care about their clients' success.",
    name: "Brian Oliver",
    role: "Blogger",
    image:
      "/images/young-successful-businessman-checking-emails-while-having-morning-coffee.54f46.jpg",
  },
];

const achievements = [
  {
    icon: BadgeCheck,
    number: "9+",
    title: "Years Of Experience",
  },
  {
    icon: Users,
    number: "10+",
    title: "Team Members",
  },
  {
    icon: Users,
    number: "7000+",
    title: "Satisfied Clients",
  },
  {
    icon: Trophy,
    number: "1000+",
    title: "Brands Helped",
  },
];

const visionPoints = [
  "Leading digital partner",
  "Empowering online growth",
  "Building brand credibility",
  "Innovating digital solutions",
];

const missionPoints = [
  "Expert SEO services",
  "Growth-driven marketing",
  "Trust & reputation focus",
  "Data-driven strategies",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7ffff]">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#19C2C1]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8 py-12">

          {/* Hero Content */}

          <div className="max-w-2xl">
        <ScrollReveal direction="right" duration={700}>
  <span className="inline-flex rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-sm font-bold text-[#119998]">
    Local SEO | Marketing | Reviews
  </span>
</ScrollReveal>

           <ScrollReveal direction="up" delay={100} duration={800}>
  <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
    Grow Your Business with{" "}
    <span className="text-[#19C2C1]">
      Digital Allies
    </span>
  </h1>
</ScrollReveal>

   <ScrollReveal direction="up" delay={100} duration={800}>
    
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              From Local SEO and reputation management to social media growth,
              we provide expert solutions to enhance your online presence and
              drive real results.
            </p>
   </ScrollReveal>

   <ScrollReveal direction="right" delay={100} duration={500}>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white shadow-lg shadow-[#19C2C1]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae]"
                >
                Get Started
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 transition-all duration-300 hover:border-[#19C2C1] hover:text-[#19C2C1]"
                >
                Explore Services
              </Link>
            </div>
                </ScrollReveal>

   <ScrollReveal direction="up" delay={100} duration={400}>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#19C2C1]" />
                Result-driven strategies
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#19C2C1]" />
                Digital growth experts
              </div>
            </div>
   </ScrollReveal>
          </div>

          {/* Hero Image Collage */}


        <ScrollReveal
  direction="left"
  delay={200}
  duration={900}
  className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[560px]"
>

            <div className="absolute left-[4%] top-[6%] h-52 w-52 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl sm:h-64 sm:w-64">
              <Image
                src="/images/girl-cheerful.jpg"
                alt="Digital marketing client"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute right-[3%] top-[1%] h-44 w-44 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl sm:h-56 sm:w-56">
              <Image
                src="/images/boy-fashion.jpg"
                alt="Digital Allies client"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[17%] left-[12%] h-48 w-48 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl sm:h-60 sm:w-60">
              <Image
                src="/images/girl-fashion.jpg"
                alt="Happy client"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[3%] right-[5%] h-56 w-48 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl sm:h-72 sm:w-56">
              <Image
                src="/images/boy-fashion3.jpg"
                alt="Business client"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Stats */}

   <ScrollReveal direction="up" delay={100} duration={600}>

            <div className="absolute left-0 top-1/2 z-10 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-2xl font-black text-slate-950">
                    7000+
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
   </ScrollReveal>

   <ScrollReveal direction="up" delay={100} duration={600} className="absolute bottom-[1%] left-[4%] z-10 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <Trophy size={20} />
                </div>

                <div>
                  <p className="text-xl font-black text-slate-950">
                    100+
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Brands Joined
                  </p>
                </div>
              </div>
           
   </ScrollReveal>

          
          </ScrollReveal>
        </div>


      </section>


      {/* =========================================================
          FEATURE SERVICES
      ========================================================= */}

   <section className="border-y border-slate-100 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {featureServices.map((service, index) => {
      const Icon = service.icon;

      return (
        <ScrollReveal
          key={service.title}
          direction="up"
          delay={index * 120}
          duration={700}
          className="h-full"
        >
          <div
            className={`group h-full border-slate-100 px-6 py-10 transition-all duration-300 hover:bg-[#19C2C1]/10 ${
              index !== featureServices.length - 1
                ? "border-b md:border-r lg:border-b-0"
                : ""
            }`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-300 group-hover:bg-[#19C2C1] group-hover:text-white">
              <Icon size={26} />
            </div>

            <h2 className="mt-5 text-lg font-extrabold leading-7 text-slate-950">
              {service.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.description}
            </p>
          </div>
        </ScrollReveal>
      );
    })}
  </div>
</section>


{/* =========================================================
  ABOUT
      ========================================================= */}

     <section className="bg-white py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

    {/* Image */}
    <ScrollReveal
      direction="left"
      duration={700}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#19C2C1]/10">
        <Image
          src="/images/boy-smiling.png"
          alt="Digital Allies"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
      </div>

      {/* Brands Joined Badge */}
      <ScrollReveal
        direction="right"
        delay={350}
        duration={700}
        className="absolute -bottom-7 -right-3 sm:-right-7"
      >
        <div className="rounded-2xl bg-white p-5 shadow-2xl">
          <p className="text-3xl font-black text-[#19C2C1]">
            185+
          </p>

          <p className="mt-1 text-sm font-bold text-slate-700">
            Brands Joined
          </p>
        </div>
      </ScrollReveal>
    </ScrollReveal>

    {/* Content */}
    <div>
      {/* Section Label */}
      <ScrollReveal
        direction="right"
        duration={650}
      >
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
          About Digital Allies
        </span>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal
        direction="up"
        delay={100}
        duration={800}
      >
        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
          We Will Do Our Best To Grow Your Business
        </h2>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal
        direction="up"
        delay={200}
        duration={750}
      >
        <p className="mt-6 text-base leading-8 text-slate-600">
          We are committed to helping your business thrive with expert
          strategies in SEO, digital marketing, and reputation management.
          Our goal is to enhance your online presence, attract more
          customers, and drive sustainable growth. Let’s take your brand
          to the next level!
        </p>
      </ScrollReveal>

      {/* Vision + Mission */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2">

        {/* Vision */}
        <ScrollReveal
          direction="left"
          delay={100}
          duration={750}
        >
          <div>
            <h3 className="text-xl font-black text-slate-950">
              Our Vision
            </h3>

            <ul className="mt-5 space-y-4">
              {visionPoints.map((item, index) => (
                <ScrollReveal
                  key={item}
                  direction="up"
                  delay={150 + index * 100}
                  duration={600}
                >
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#19C2C1]"
                    />

                    {item}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal
          direction="right"
          delay={150}
          duration={750}
        >
          <div>
            <h3 className="text-xl font-black text-slate-950">
              Our Mission
            </h3>

            <ul className="mt-5 space-y-4">
              {missionPoints.map((item, index) => (
                <ScrollReveal
                  key={item}
                  direction="up"
                  delay={150 + index * 100}
                  duration={600}
                >
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#19C2C1]"
                    />

                    {item}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </ScrollReveal>

      </div>

      {/* Our Story */}
      <ScrollReveal
        direction="up"
        delay={200}
        duration={700}
      >
        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 font-bold text-[#19C2C1]"
        >
          Our Story

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </ScrollReveal>
    </div>
  </div>
</section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

  <section className="bg-slate-800 py-12">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <ScrollReveal
        direction="left"
        duration={650}
      >
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
          Our Services
        </span>
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={100}
        duration={800}
      >
        <h2 className="mt-4 text-3xl font-black text-slate-50 sm:text-4xl lg:text-5xl">
          What Service Do We Have for Your Business
        </h2>
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={150}
        duration={750}
      >
        <p className="mt-5 text-base leading-8 text-slate-400">
          We offer a complete range of digital solutions, including SEO,
          social media marketing, reputation management, paid advertising,
          and branding. Our expert strategies are designed to boost your
          visibility, credibility, and business growth.
        </p>
      </ScrollReveal>
    </div>

    {/* Service Cards */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <ScrollReveal
            key={service.title}
            direction="up"
            delay={index * 70}
            duration={700}
            className="h-full"
          >
            <Link
              href="/services"
              className="group relative block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#19C2C1] hover:shadow-xl"
            >
              {/* Bottom-to-top hover background */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-[#19C2C1] transition-all duration-500 ease-out group-hover:h-full" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-500 group-hover:bg-white group-hover:text-[#19C2C1]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-black leading-7 text-slate-950 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/90">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#19C2C1] transition-colors duration-500 group-hover:text-white">
                  Learn More

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        );
      })}
    </div>

    {/* Get a Quote */}
    <ScrollReveal
      direction="up"
      delay={200}
      duration={750}
    >
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white shadow-lg shadow-[#19C2C1]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae]"
        >
          Get a Quote
          <ArrowRight size={18} />
        </Link>
      </div>
    </ScrollReveal>

  </div>
</section>


 {/* =========================================================
    TRUSTED COMPANIES
========================================================= */}
<section className="bg-white py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    <div className="text-center">

      {/* Heading */}
      <ScrollReveal
        direction="up"
        duration={650}
      >
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
          Trusted By Many Company
        </span>
      </ScrollReveal>

      {/* Company Logos */}
      <div className="mt-12 grid grid-cols-2 items-center gap-6 md:grid-cols-4">
        {trustedCompanies.map((company, index) => (
          <ScrollReveal
            key={company.name}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 100}
            duration={700}
            className="h-full"
          >
            <div className="flex h-32 items-center justify-center rounded-2xl border border-slate-100 bg-white px-6 transition-all duration-300 hover:grayscale-0 hover:shadow-lg">
              <div className="relative h-16 w-full">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </div>
</section>


{/* =========================================================
    WHY CHOOSE US
========================================================= */}
<section className="overflow-hidden bg-slate-800">
  <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

    {/* Content */}
    <div className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

      {/* Label */}
      <ScrollReveal
        direction="left"
        duration={650}
      >
        <span className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
          Why Choose Us
        </span>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal
        direction="up"
        delay={100}
        duration={800}
      >
        <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Your Growth, Our Expertise
        </h2>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal
        direction="up"
        delay={150}
        duration={750}
      >
        <p className="mt-5 text-base leading-8 text-white/80">
          We provide result-driven SEO, reputation management, and digital
          marketing solutions to help your business thrive online.
        </p>
      </ScrollReveal>

      {/* Why Choose Us Items */}
      <div className="mt-10 space-y-6">
        {whyChooseUs.map((item, index) => {
          const Icon = item.icon;

          return (
            <ScrollReveal
              key={item.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={300 + index }
              duration={700}
            >
              <div className="flex gap-5 border-b border-white/15 pb-6 last:border-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#19C2C1]">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>

    {/* Image */}
    <ScrollReveal
      direction="right"
      duration={900}
      className="relative min-h-[520px]"
    >
      <Image
        src="/images/coworkers.jpg"
        alt="Digital marketing expertise"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/20" />

      {/* Results Card */}
      <ScrollReveal
        direction="up"
        delay={200}
        duration={750}
        className="absolute bottom-8 left-8 right-8"
      >
        <div className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
              <Zap size={23} />
            </div>

            <div>
              <p className="font-black text-slate-950">
                Results That Matter
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Strategies built around visibility, trust and growth
              </p>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </ScrollReveal>

  </div>
</section>

   {/* =========================================================
    TESTIMONIALS
========================================================= */}
<section className="bg-slate-50 py-16">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    {/* Heading Area */}
    <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

      <div>
        <ScrollReveal
          direction="left"
          duration={650}
        >
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Testimonials
          </span>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={100}
          duration={800}
        >
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            What Clients Say About Us
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal
        direction="right"
        delay={100}
        duration={750}
      >
        <p className="max-w-xl text-base leading-8 text-slate-600 lg:ml-auto">
          Our clients trust us for expert SEO, reputation management, and
          digital marketing solutions. Their success stories speak for our
          commitment to excellence and real results.
        </p>
      </ScrollReveal>

    </div>

    {/* Testimonial Cards */}
   <ScrollReveal
  direction="up"
  delay={150}
  duration={700}
>
  <TestimonialsCarousel testimonials={testimonials} />
</ScrollReveal>

  </div>
</section>


{/* =========================================================
    ACHIEVEMENTS
========================================================= */}
<section className="bg-white py-16">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT - ACHIEVEMENT CARDS */}
      <div className="relative mx-auto w-full max-w-[470px]">

        {/* Large teal circle behind cards */}
        <ScrollReveal
          direction="none"
          duration={900}
          className="absolute left-1/2 top-1/2"
        >
          <div className="h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19C2C1] sm:h-[310px] sm:w-[310px]" />
        </ScrollReveal>

        <div className="relative grid grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <ScrollReveal
                key={achievement.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={200}
                duration={750}
                className="h-full"
              >
                <div
                  className={`flex min-h-[180px] h-full flex-col items-center justify-center rounded-md p-3 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:min-h-[100px] ${
                    index % 2 === 0
                      ? "bg-[#FFF2D8]"
                      : "bg-[#C7F7F8]"
                  }`}
                >

                  {/* Icon */}
                  <div className="flex h-7 w-8 items-center justify-center text-[#FFA500]">
                    <Icon
                      size={48}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Number */}
                  <p className="mt-2 text-lg font-black text-slate-950 sm:text-2xl">
                    {achievement.number}
                  </p>

                  {/* Title */}
                  <p className="mt-1 text-base font-medium text-slate-600">
                    {achievement.title}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>


      {/* RIGHT - CONTENT */}
      <div className="max-w-xl">

        {/* Badge */}
        <ScrollReveal
          direction="right"
          duration={650}
        >
          <span className="inline-flex rounded-full bg-[#19C2C1]/10 px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-[#19C2C1]">
            Achievements
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal
          direction="up"
          delay={120}
          duration={850}
        >
          <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Some Of The Recognitions
            <br />
            We&apos;ve Earned
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal
          direction="up"
          delay={250}
          duration={750}
        >
          <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
            We take pride in delivering top-notch SEO, reputation management,
            and digital marketing services. Our experienced team and proven
            strategies have helped businesses achieve lasting success.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </div>
</section>



    </main>
  );
}

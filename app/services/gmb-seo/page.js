// app/services/gmb-seo/page.js

import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  MapPin,
  MessageSquare,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "GMB SEO Services in Dubai",
  description:
    "Improve your Google Business Profile visibility with GMB SEO strategies designed to increase local discovery, customer engagement, and business growth.",
};

const rankingFactors = [
  {
    icon: MapPin,
    title: "Local Relevance",
    text: "Optimize your business information and location signals so Google can better understand where your business serves customers.",
  },
  {
    icon: Search,
    title: "Search Visibility",
    text: "Improve your profile and website signals around the searches your potential customers are making.",
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    text: "Build a stronger review presence and maintain a trustworthy profile that gives potential customers confidence.",
  },
  {
    icon: MessageSquare,
    title: "Customer Engagement",
    text: "Improve profile engagement through accurate information, useful content, photos, and customer interactions.",
  },
];

const optimization = [
  "Google Business Profile setup",
  "Business information optimization",
  "Primary and secondary categories",
  "Business description optimization",
  "Local keyword targeting",
  "Services and products optimization",
  "Review strategy",
  "Google Business Profile posts",
  "Photo and media optimization",
  "Local citation consistency",
];

export default function GMBSEOPage() {
  return (
<main className="bg-white">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">

    <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#19C2C1]/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      {/* BREADCRUMB */}
      <ScrollReveal direction="right" duration={550}>
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">

            <Link
              href="/"
              className="text-slate-500 transition-colors hover:text-[#19C2C1]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-[#19C2C1]" />

            <Link
              href="/services"
              className="text-slate-500 transition-colors hover:text-[#19C2C1]"
            >
              Services
            </Link>

            <ChevronRight size={15} className="text-[#19C2C1]" />

            <span className="text-[#19C2C1]">GMB SEO</span>

          </div>
        </div>
      </ScrollReveal>

      <div className="grid min-h-[600px] items-center gap-14 py-12 lg:grid-cols-[1fr_0.9fr]">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <ScrollReveal direction="left" delay={40} duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#19C2C1]">
              <MapPin size={14} />
              GMB SEO
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={70} duration={750}>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Get Your Business Found On Google Maps
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up" delay={130} duration={700}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Optimize your Google Business Profile and strengthen your
              local search presence so more customers can discover, trust,
              and engage with your business.
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal direction="up" delay={160} duration={650}>
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#19C2C1] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl"
              >
                Explore Services

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/services/local-seo"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 font-bold text-white transition-all duration-300 hover:border-[#19C2C1]/50 hover:bg-white/5"
              >
                Local SEO
                <ArrowRight size={17} />
              </Link>

            </div>
          </ScrollReveal>

          {/* MINI STATS */}
          <ScrollReveal direction="up" delay={200} duration={700}>
            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-white/10">

              <div className="py-5">
                <p className="text-2xl font-black text-white">
                  Local
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Search Focus
                </p>
              </div>

              <div className="border-x border-white/10 px-5 py-5">
                <p className="text-2xl font-black text-white">
                  Google
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Profile Focus
                </p>
              </div>

              <div className="py-5 pl-5">
                <p className="text-2xl font-black text-white">
                  Growth
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Driven Strategy
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* RIGHT GMB DASHBOARD */}
        <ScrollReveal direction="right" delay={80} duration={800}>
          <div className="relative mx-auto w-full max-w-lg">

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">

              {/* TOP */}
              <ScrollReveal direction="up" delay={140} duration={650}>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1] text-white">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Google Business
                      </p>

                      <p className="mt-1 font-black text-white">
                        Profile Overview
                      </p>
                    </div>

                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19C2C1]/10 text-[#19C2C1]">
                    <TrendingUp size={18} />
                  </div>

                </div>
              </ScrollReveal>

              {/* VISIBILITY */}
              <ScrollReveal direction="up" delay={180} duration={700}>
                <div className="mt-6 rounded-2xl bg-white p-6">

                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Local Visibility
                      </p>

                      <p className="mt-2 text-4xl font-black text-slate-950">
                        86%
                      </p>
                    </div>

                    <span className="rounded-full bg-[#19C2C1]/10 px-3 py-1 text-xs font-black text-[#19C2C1]">
                      +24.8%
                    </span>

                  </div>

                  {/* GRAPH */}
                  <div className="mt-7 flex h-24 items-end gap-2">

                    {[35, 45, 42, 58, 55, 70, 67, 82, 78, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-[#19C2C1]/20"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="h-full rounded-t-md bg-[#19C2C1]"
                            style={{
                              height: `${Math.min(100, height + 8)}%`,
                            }}
                          />
                        </div>
                      )
                    )}

                  </div>

                </div>
              </ScrollReveal>

              {/* METRICS */}
              <div className="mt-4 grid grid-cols-3 gap-3">

                <ScrollReveal direction="left" delay={80} duration={600}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4">

                    <Search
                      size={18}
                      className="text-[#19C2C1]"
                    />

                    <p className="mt-3 text-lg font-black text-white">
                      +42%
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      DISCOVERY
                    </p>

                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={120} duration={600}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4">

                    <Star
                      size={18}
                      className="text-[#19C2C1]"
                    />

                    <p className="mt-3 text-lg font-black text-white">
                      4.9
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      REVIEWS
                    </p>

                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={160} duration={600}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4">

                    <BarChart3
                      size={18}
                      className="text-[#19C2C1]"
                    />

                    <p className="mt-3 text-lg font-black text-white">
                      +31%
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      ACTIONS
                    </p>

                  </div>
                </ScrollReveal>

              </div>

            </div>

            <div className="absolute -bottom-6 -left-6 -z-0 h-28 w-28 rounded-full bg-[#19C2C1]/20 blur-2xl" />

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>

  {/* INTRODUCTION */}
  <section className="bg-white py-12">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        {/* LEFT */}
        <ScrollReveal direction="left" duration={700}>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
              GMB SEO
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Your Google Business Profile Is A Powerful Local Asset
            </h2>
          </div>
        </ScrollReveal>

        {/* RIGHT */}
        <div>

          <ScrollReveal direction="right" delay={60} duration={700}>
            <p className="text-lg leading-8 text-slate-600">
              When customers search for a business, product, or service
              nearby, Google Business Profiles can play an important role in
              helping them discover local businesses.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={110} duration={700}>
            <p className="mt-5 leading-8 text-slate-600">
              GMB SEO focuses on making your profile more complete, relevant,
              trustworthy, and aligned with your local search strategy. The
              goal is to create a profile that supports both visibility and
              customer decision-making.
            </p>
          </ScrollReveal>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-3">

            <ScrollReveal direction="left" delay={60} duration={600}>
              <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                Local Visibility
              </span>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={90} duration={600}>
              <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                Google Maps
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={120} duration={600}>
              <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                Reviews
              </span>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} duration={600}>
              <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">
                Local Search
              </span>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </div>
  </section>

  {/* RANKING FACTORS */}
  <section className="bg-[#f6fbfb] py-12">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="max-w-2xl">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Local Search
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Build A Stronger Google Business Presence
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-5 leading-8 text-slate-600">
            A successful GMB strategy combines accurate information, local
            relevance, customer trust, and consistent optimization.
          </p>
        </ScrollReveal>

      </div>

      {/* Ranking Cards */}
      <div className="mt-12 grid gap-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white md:grid-cols-2">

        {rankingFactors.map((item, index) => {
          const Icon = item.icon;

          return (
            <ScrollReveal
              key={item.title}
              direction={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
              delay={index * 90}
              duration={700}
              className="h-full"
            >
              <div
                className={`group h-full p-4 transition-colors duration-300 hover:bg-[#19C2C1] ${
                  index < 2 ? "border-b border-slate-200" : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-slate-200"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1] transition-colors duration-300 group-hover:bg-white group-hover:text-[#19C2C1]">
                    <Icon size={23} />
                  </div>

                </div>

                <h3 className="mt-3 text-xl font-black text-slate-950 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                  {item.text}
                </p>

              </div>
            </ScrollReveal>
          );
        })}

      </div>
    </div>
  </section>

  {/* OPTIMIZATION CHECKLIST */}
  <section className="bg-white py-12">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-8">

      {/* LEFT */}
      <div>

        <ScrollReveal direction="left" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Profile Optimization
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Everything Your Profile Needs To Perform Better
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-6 leading-8 text-slate-600">
            We review the important elements of your Google Business Profile
            and optimize them as part of a broader local search strategy.
          </p>
        </ScrollReveal>

        {/* Strategy Card */}
        <ScrollReveal direction="left" delay={150} duration={700}>
          <div className="mt-8 rounded-3xl bg-slate-950 p-7 sm:p-8">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <TrendingUp size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Local Strategy
                </p>

                <p className="mt-1 font-black text-white">
                  Visibility + Trust + Relevance
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* RIGHT CHECKLIST */}
      <div className="grid gap-3 sm:grid-cols-2">

        {optimization.map((item, index) => (
          <ScrollReveal
            key={item}
            direction={
              index % 2 === 0
                ? "left"
                : "right"
            }
            delay={index * 80}
            duration={650}
            className="h-full"
          >
            <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#19C2C1]/50 hover:shadow-lg">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#19C2C1]/10 text-[#19C2C1] transition-colors duration-300 group-hover:bg-[#19C2C1] group-hover:text-white">

                <Check
                  size={16}
                  strokeWidth={3}
                />

              </div>

              <span className="text-sm font-bold leading-6 text-slate-800">
                {item}
              </span>

            </div>
          </ScrollReveal>
        ))}

      </div>

    </div>
  </section>

</main>
  );
}
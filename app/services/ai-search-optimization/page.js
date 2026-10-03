"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Sparkles,
  Bot,
  ShieldCheck,
  TrendingUp,
  Target,
  BrainCircuit,
  FileSearch,
  Globe,
  BarChart3,
} from "lucide-react";


const process = [
  {
    number: "01",
    title: "Research & Analysis",
    description:
      "We analyze your business, industry, audience, competitors, and existing search presence to identify AI search opportunities.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Content Optimization",
    description:
      "We improve your content structure, clarity, topical relevance, and entity signals so search systems can better understand your business.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Technical & Brand Signals",
    description:
      "We strengthen important website, local, citation, authority, and brand signals that support modern search visibility.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Monitor & Improve",
    description:
      "We track performance, identify new opportunities, and continuously refine the strategy as AI search evolves.",
    icon: BarChart3,
  },
];

export default function AISearchOptimizationPage() {
  return (
    <main className="bg-white text-slate-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-[#061719]">
    {/* Glow effects */}
    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#19C2C1]/10 blur-3xl" />
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#19C2C1]/10 blur-3xl" />

    {/* Decorative circles */}
    <div className="absolute right-[10%] top-20 hidden h-[420px] w-[420px] rounded-full border border-[#19C2C1]/20 lg:block" />
    <div className="absolute right-[13%] top-28 hidden h-[360px] w-[360px] rounded-full border border-[#19C2C1]/10 lg:block" />

    <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

      {/* Breadcrumb */}
      <ScrollReveal direction="right" duration={550}>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-[#19C2C1]"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <Link
            href="/services"
            className="transition-colors hover:text-[#19C2C1]"
          >
            Services
          </Link>

          <ChevronRight size={14} />

          <span className="text-[#19C2C1]">
            AI Search Optimization
          </span>
        </div>
      </ScrollReveal>

      <div className="grid items-center gap-12 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

        {/* HERO CONTENT */}
        <div>
          <ScrollReveal direction="left" duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/60 bg-[#19C2C1]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#19C2C1]">
              <Sparkles size={14} />
              AI Search Optimization
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} duration={700}>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Found In The
              <span className="block text-[#19C2C1]">
                Next Generation
              </span>
              Of Search
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={130} duration={700}>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Optimize your online presence for AI-powered search
              experiences. We help businesses become more visible in
              Google AI Overviews, ChatGPT, Gemini, and other modern
              search platforms.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={650}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl hover:shadow-[#19C2C1]/20"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19C2C1] hover:bg-[#19C2C1]/10"
              >
                View Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* HERO VISUAL */}
        <ScrollReveal direction="right" duration={800}>
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute inset-10 rounded-full bg-[#19C2C1]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative aspect-[1.15/1] overflow-hidden rounded-[1.5rem]">

                <Image
                  src="/images/ai-search.png"
                  alt="AI Search Optimization"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061719]/50 via-transparent to-transparent" />

              </div>
            </div>

            {/* Floating AI badge */}
            <ScrollReveal direction="left" delay={100} duration={650}>
              <div className="absolute -left-3 top-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-xl sm:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C2C1]/15 text-[#19C2C1]">
                  <Bot size={21} />
                </div>

                <div>
                  <p className="text-xs font-black text-white">
                    AI Visibility
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Search Ready
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Search badge */}
            <ScrollReveal direction="up" delay={120} duration={650}>
              <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-xl sm:right-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <Search size={20} />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-950">
                    Smarter Search
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Built for the future
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>

  {/* INTRO */}
  <section className="overflow-hidden bg-white py-12 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">

      {/* IMAGE */}
      <ScrollReveal direction="left" duration={750}>
        <div className="relative">

          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl">

            <Image
              src="/images/ai-search2.png"
              alt="AI powered search optimization"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-950/90 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                Google AI
              </span>

              <span className="rounded-full bg-slate-950/90 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                ChatGPT
              </span>

              <span className="rounded-full bg-slate-950/90 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                Gemini
              </span>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* CONTENT */}
      <div>

        <ScrollReveal direction="right" duration={600}>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            AI Search Optimization
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Be There When
            <span className="block text-[#19C2C1]">
              AI Searches
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Search is changing. Instead of only showing traditional
            website links, AI-powered platforms can provide direct
            answers, summaries, recommendations, and business information.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={700}>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our AI search optimization approach helps your business
            create clearer content, stronger authority signals, and a
            more understandable online presence.
          </p>
        </ScrollReveal>

        <div className="mt-7 space-y-4">
          {[
            "Optimize content for AI-powered search experiences",
            "Improve content structure and clarity",
            "Strengthen brand signals and authority",
            "Prepare your website for evolving search platforms",
          ].map((item, index) => (
            <ScrollReveal
              key={item}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 70}
              duration={600}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19C2C1] text-white">
                  <ArrowRight size={12} />
                </div>

                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  </section>

  {/* PROCESS */}
  <section className="bg-white py-12">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

        <div>
          <ScrollReveal direction="left" duration={600}>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#19C2C1]">
              Our Process
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} duration={700}>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              A Smarter Strategy
              <span className="block text-[#19C2C1]">
                For AI Search
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delay={100} duration={700}>
          <p className="max-w-lg text-sm leading-7 text-slate-500">
            We follow a focused approach designed to improve how search
            engines and AI systems understand your business, content,
            expertise, and online authority.
          </p>
        </ScrollReveal>

      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {process.map((step, index) => {
          const Icon = step.icon;

          return (
            <ScrollReveal
              key={step.number}
              direction={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
              delay={index * 80}
              duration={700}
              className="h-full"
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#19C2C1] hover:shadow-xl">

                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#19C2C1] text-xs font-black text-white">
                    {step.number}
                  </span>

                  <Icon
                    size={23}
                    className="text-[#19C2C1] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#19C2C1] transition-all duration-300 group-hover:w-full" />

              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="px-5 pb-12 sm:px-6 lg:px-8">
    <ScrollReveal direction="up" duration={750}>
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#061719] px-6 py-10 sm:px-10 lg:px-12">

        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#19C2C1]/20" />
        <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border border-[#19C2C1]/10" />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

          <ScrollReveal direction="left" duration={650}>
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#19C2C1]/15 text-[#19C2C1]">
                <Sparkles size={27} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Ready For AI Search?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Let&apos;s optimize your business for the future of search.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100} duration={650}>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl hover:shadow-[#19C2C1]/20"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </ScrollReveal>
  </section>

</main>
  );
}
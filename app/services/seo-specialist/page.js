// app/services/seo-specialist/page.js

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe,
  Search,
  Settings2,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "SEO Specialist in Dubai",
  description:
    "Work with SEO specialists focused on improving search rankings, website performance, local visibility, content, and conversions.",
};

const expertise = [
  {
    number: "01",
    title: "Search Research",
    text: "We identify the keywords, search intent, competitors, and opportunities that matter most to your business.",
    icon: Search,
  },
  {
    number: "02",
    title: "Technical SEO",
    text: "We improve the technical foundation of your website so search engines can crawl, understand, and index your pages.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Content Strategy",
    text: "We optimize existing content and identify new content opportunities designed around real search demand.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Performance Growth",
    text: "We monitor rankings, traffic, visibility, and SEO performance to continuously refine the strategy.",
    icon: TrendingUp,
  },
];

const workflow = [
  {
    step: "01",
    title: "Discover",
    text: "Understand your website, market, audience, and competition.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "Build a practical SEO roadmap around your highest-value opportunities.",
  },
  {
    step: "03",
    title: "Optimize",
    text: "Implement technical, content, keyword, and on-page improvements.",
  },
  {
    step: "04",
    title: "Scale",
    text: "Measure results and expand the strategy as new opportunities appear.",
  },
];

export default function SEOSpecialistPage() {
  return (
   <main className="overflow-hidden bg-white">

  {/* HERO */}
  <section className="relative bg-slate-950">

    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#19C2C1]/10 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#19C2C1]/5 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

      {/* BREADCRUMB */}
      <ScrollReveal direction="right" duration={550}>
        <div className="flex items-center gap-2 text-sm">

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

          <span className="text-[#19C2C1]">
            SEO Specialist
          </span>

        </div>
      </ScrollReveal>


      <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">

        {/* HERO CONTENT */}
        <div>

          <ScrollReveal direction="left" duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#19C2C1]">

              <span className="h-2 w-2 rounded-full bg-[#19C2C1]" />

              SEO Specialist

            </div>
          </ScrollReveal>


          <ScrollReveal direction="up" delay={70} duration={700}>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              SEO Expertise That Moves Your Business Forward
            </h1>
          </ScrollReveal>


          <ScrollReveal direction="up" delay={130} duration={700}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Get a focused SEO strategy built around your website, your
              audience, your competition, and the search opportunities that
              can drive meaningful organic growth.
            </p>
          </ScrollReveal>


          <ScrollReveal direction="up" delay={150} duration={650}>
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#19C2C1] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl"
              >
                Explore Services

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/10 px-7 py-4 font-bold text-white transition-all duration-300 hover:border-[#19C2C1]/50 hover:bg-white/5"
              >
                About Digital Allies
              </Link>

            </div>
          </ScrollReveal>

        </div>


        {/* SEO DASHBOARD VISUAL */}
        <ScrollReveal direction="right" duration={800}>
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <Image
                  src="/images/seo-specialist.jpg"
                  alt="SEO specialist"
                  width={447}
                  height={417}
                  className="h-[300px] w-full object-cover object-right sm:h-[370px]"
                  priority
                />

                <div className="absolute inset-0 bg-slate-950/35" />

              </div>


              {/* TOP SCORE */}
              <ScrollReveal direction="right" delay={100} duration={650}>
                <div className="absolute right-7 top-7 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/15 text-[#19C2C1]">
                      <BarChart3 size={21} />
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        SEO Growth
                      </p>

                      <p className="mt-1 text-lg font-black text-white">
                        +68%
                      </p>

                    </div>

                  </div>

                </div>
              </ScrollReveal>


              {/* BOTTOM CARD */}
              <ScrollReveal direction="left" delay={120} duration={650}>
                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">

                  <div className="flex items-center gap-4">

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#19C2C1]/20">

                      <span className="text-sm font-black text-slate-950">
                        92
                      </span>

                      <span className="absolute left-1 -top-1 h-3 w-3 rounded-full bg-[#19C2C1]" />

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Visibility
                      </p>

                      <p className="mt-1 text-sm font-black text-slate-950">
                        Strong Performance
                      </p>

                    </div>

                  </div>

                </div>
              </ScrollReveal>

            </div>

            <div className="absolute -bottom-5 -right-5 -z-0 h-28 w-28 rounded-full bg-[#19C2C1]/20 blur-2xl" />

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* INTRO + HIGHLIGHTS */}
  <section className="bg-white py-12 sm:py-16 lg:py-20">

    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

        {/* LEFT */}
        <div>

          <ScrollReveal direction="left" duration={650}>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
              Why An SEO Specialist
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} duration={700}>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              SEO Requires More Than Just Keywords
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={700}>
            <p className="mt-6 leading-8 text-slate-600">
              Your website needs a strategy that considers technical
              performance, search intent, content, competition, and the
              behavior of your target audience.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={700}>
            <p className="mt-5 leading-8 text-slate-600">
              Digital Allies brings these areas together to create a focused
              SEO strategy that is designed around your actual business
              objectives.
            </p>
          </ScrollReveal>

        </div>


        {/* RIGHT HIGHLIGHTS */}
        <div className="grid gap-4 sm:grid-cols-2">

          {[
            {
              icon: Target,
              title: "Focused Strategy",
              text: "SEO recommendations built around your specific business and market.",
            },
            {
              icon: Search,
              title: "Search Intent",
              text: "Target the searches that are relevant to your customers and services.",
            },
            {
              icon: TrendingUp,
              title: "Organic Growth",
              text: "Develop sustainable visibility instead of relying on short-term tactics.",
            },
            {
              icon: BarChart3,
              title: "Data & Insights",
              text: "Use performance data to understand what is working and what needs improvement.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 80}
                duration={650}
                className="h-full"
              >
                <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#19C2C1]/40 hover:bg-white hover:shadow-lg">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>
              </ScrollReveal>
            );

          })}

        </div>

      </div>
    </div>
  </section>


  {/* EXPERTISE - NUMBERED EDITORIAL DESIGN */}
  <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">

    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

        <div className="max-w-2xl">

          <ScrollReveal direction="left" duration={600}>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
              Specialist Expertise
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} duration={700}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              The Areas We Focus On
            </h2>
          </ScrollReveal>

        </div>


        <ScrollReveal direction="right" delay={100} duration={650}>
          <p className="max-w-md leading-7 text-slate-500">
            From technical foundations to search strategy, every part of
            your SEO campaign should work toward the same goal.
          </p>
        </ScrollReveal>

      </div>


      <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">

        {expertise.map((item, index) => {

          const Icon = item.icon;

          return (
            <ScrollReveal
              key={item.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 70}
              duration={650}
            >
              <div className="group grid gap-6 py-8 transition-all duration-300 lg:grid-cols-[100px_1fr_1.2fr_60px] lg:items-center">

                <span className="text-3xl font-black text-[#19C2C1]/40 transition-colors duration-300 group-hover:text-[#19C2C1]">
                  {item.number}
                </span>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#19C2C1] shadow-sm">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>

                </div>

                <p className="text-sm leading-7 text-slate-600 lg:pl-6">
                  {item.text}
                </p>

              </div>
            </ScrollReveal>
          );

        })}

      </div>

    </div>
  </section>


  {/* WORKFLOW */}
  <section className="bg-white py-12">

    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            How We Work
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            From Analysis To Growth
          </h2>
        </ScrollReveal>

      </div>


      <div className="relative mt-12">

        {/* CONNECTING LINE */}
        <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-slate-200 lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {workflow.map((item, index) => (
            <ScrollReveal
              key={item.step}
              direction={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
              delay={index * 80}
              duration={700}
              className="h-full"
            >
              <div className="relative h-full text-center">

                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#19C2C1] text-sm font-black text-white shadow-lg">
                  {item.step}
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>

    </div>
  </section>

</main>
  );
}
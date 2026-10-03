import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "SEO Agency in Dubai",
  description:
    "Digital Allies Dubai provides strategic SEO services to improve search rankings, qualified traffic, online visibility, and long-term business growth.",
};

const benefits = [
  "Target customers searching in Dubai",
  "Improve local and organic search visibility",
  "Build stronger Google rankings",
  "Target high-intent Dubai keywords",
  "Increase qualified website traffic",
  "Create sustainable long-term growth",
];

const process = [
  {
    number: "01",
    title: "Market Analysis",
    description:
      "We study your business, target customers, competitors, and current position in the Dubai search market.",
  },
  {
    number: "02",
    title: "Keyword Research",
    description:
      "We identify valuable Dubai-focused keywords based on search intent, competition, and business opportunities.",
  },
  {
    number: "03",
    title: "SEO Optimization",
    description:
      "We optimize your website, content, technical structure, and local signals around your target search opportunities.",
  },
  {
    number: "04",
    title: "Track & Improve",
    description:
      "We monitor rankings, traffic, and performance to identify new opportunities and continuously improve your SEO.",
  },
];

export default function SEOInDubaiPage() {
  return (
   <main className="bg-white">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">
    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#19C2C1]/20 blur-3xl" />
    <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">

      {/* LEFT CONTENT */}
      <div>

        {/* Breadcrumb */}
        <ScrollReveal direction="right" duration={550}>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            <Link
              href="/"
              className="text-slate-400 transition-colors hover:text-[#19C2C1]"
            >
              Home
            </Link>

            <ChevronRight size={16} className="text-[#19C2C1]" />

            <Link
              href="/services"
              className="text-slate-400 transition-colors hover:text-[#19C2C1]"
            >
              Services
            </Link>

            <ChevronRight size={16} className="text-[#19C2C1]" />

            <span className="text-[#19C2C1]">SEO in Dubai</span>
          </div>
        </ScrollReveal>

        {/* Badge */}
        <ScrollReveal direction="left" delay={40} duration={600}>
          <span className="mt-8 inline-block text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            SEO in Dubai
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={70} duration={700}>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Grow Your Business With SEO In Dubai
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={130} duration={700}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Improve your search visibility and reach customers across Dubai
            with a focused SEO strategy built around local search behavior,
            relevant keywords, and long-term organic growth.
          </p>
        </ScrollReveal>

        {/* Button */}
        <ScrollReveal direction="up" delay={160} duration={650}>
          <div className="mt-8">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl"
            >
              Explore Our Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>

      </div>

      {/* HERO IMAGE */}
      <ScrollReveal direction="right" delay={80} duration={800}>
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">

            <div className="relative overflow-hidden rounded-[1.5rem]">

              <Image
                src="/images/seo-dubai.jpg"
                alt="SEO and digital marketing in Dubai"
                width={447}
                height={417}
                className="h-[380px] w-full object-cover sm:h-[440px]"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Info Card */}
              <ScrollReveal direction="left" delay={180} duration={650}>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1] text-white">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <p className="text-xl font-black text-white">
                        Dubai SEO
                      </p>

                      <p className="text-sm text-slate-300">
                        Local Search Growth
                      </p>
                    </div>

                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>

  {/* INTRODUCTION */}
  <section className="bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl text-center">

        {/* Label */}
        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Dubai SEO Strategy
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Get Found By Customers Searching In Dubai
          </h2>
        </ScrollReveal>

        {/* Underline */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
        </ScrollReveal>

        {/* Paragraph */}
        <ScrollReveal direction="up" delay={130} duration={700}>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Dubai is a highly competitive digital market where businesses
            need more than generic SEO. A focused Dubai SEO strategy helps
            your website target the searches that matter to your business
            and connect with customers actively looking for your services.
          </p>
        </ScrollReveal>

        {/* Paragraph */}
        <ScrollReveal direction="up" delay={160} duration={700}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Digital Allies combines local SEO, keyword research, technical
            optimization, content strategy, and search performance tracking
            to help businesses build stronger visibility across Dubai.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </section>

  {/* WHY DUBAI SEO */}
  <section className="bg-white py-12 sm:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

      {/* LEFT CONTENT */}
      <div>

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Why Dubai SEO
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Reach The Right Audience In A Competitive Market
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-6 leading-8 text-slate-600">
            Businesses competing in Dubai need a search strategy that
            understands local intent and focuses on the terms potential
            customers actually use.
          </p>
        </ScrollReveal>

        {/* Benefits */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={benefit}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 80}
              duration={650}
              className="h-full"
            >
              <div className="flex h-full items-start gap-3 rounded-2xl bg-slate-50 p-4">

                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-[#19C2C1]"
                />

                <span className="text-sm font-bold leading-6 text-slate-800">
                  {benefit}
                </span>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* DARK INFO CARD */}
      <ScrollReveal direction="right" delay={80} duration={800}>
        <div className="relative">

          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-10">

            {/* Icon */}
            <ScrollReveal direction="up" delay={140} duration={650}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <Target size={28} />
              </div>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal direction="up" delay={180} duration={700}>
              <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                Dubai-Focused SEO
              </h3>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={220} duration={700}>
              <p className="mt-5 leading-8 text-slate-400">
                Instead of relying on generic SEO tactics, we focus on your
                specific market, customers, competitors, locations, and search
                opportunities.
              </p>
            </ScrollReveal>

            {/* Info Items */}
            <div className="mt-8 space-y-4">

              <ScrollReveal direction="left" delay={80} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">

                    <MapPin
                      size={21}
                      className="text-[#19C2C1]"
                    />

                    <span className="font-bold text-white">
                      Dubai Local Visibility
                    </span>

                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={120} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">

                    <Search
                      size={21}
                      className="text-[#19C2C1]"
                    />

                    <span className="font-bold text-white">
                      High-Intent Keywords
                    </span>

                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={160} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">

                    <BarChart3
                      size={21}
                      className="text-[#19C2C1]"
                    />

                    <span className="font-bold text-white">
                      Performance Tracking
                    </span>

                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>

  {/* PROCESS */}
  <section className="bg-slate-950 py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      {/* Section Heading */}
      <div className="mx-auto max-w-2xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Our Process
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Our Dubai SEO Process
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-5 leading-8 text-slate-400">
            A structured approach helps us understand your market, identify
            opportunities, and continuously improve your search visibility.
          </p>
        </ScrollReveal>

      </div>

      {/* Process Cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {process.map((item, index) => (
          <ScrollReveal
            key={item.number}
            direction={
              index % 3 === 0
                ? "left"
                : index % 3 === 1
                ? "up"
                : "right"
            }
            delay={index * 90}
            duration={700}
            className="h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#19C2C1]/40 hover:bg-white/[0.07]">

              <span className="text-4xl font-black text-[#19C2C1]">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

            </div>
          </ScrollReveal>
        ))}

      </div>
    </div>
  </section>

  {/* FINAL INFORMATION CTA */}
  <section className="relative overflow-hidden bg-[#19C2C1] py-12 sm:py-16">

    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

    <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

      <ScrollReveal direction="left" duration={600}>
        <span className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
          Dubai Search Growth
        </span>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={60} duration={750}>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
          Build Stronger Search Visibility In Dubai
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={120} duration={700}>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
          Reach more people searching for your business in Dubai with a
          focused SEO strategy designed around visibility, relevance, and
          sustainable growth.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={160} duration={650}>
        <div className="mt-8">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            View All Services

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </ScrollReveal>

    </div>
  </section>

</main>
  );
}
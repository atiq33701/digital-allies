import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata = {
  title: "SEO Agency in Dubai",
  description:
    "Digital Allies Dubai provides strategic SEO services to improve search rankings, qualified traffic, online visibility, and long-term business growth.",
};

const benefits = [
  "Improve your Google search rankings",
  "Increase qualified organic traffic",
  "Target valuable commercial keywords",
  "Strengthen your website authority",
  "Improve technical website performance",
  "Build sustainable long-term visibility",
];

const process = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "We analyze your website, existing rankings, technical structure, content, and current search visibility.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We create an SEO strategy based on your business objectives, target audience, competition, and search opportunities.",
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "Our team works on technical SEO, on-page optimization, content, keywords, internal linking, and other ranking factors.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We monitor results, identify new opportunities, and continuously improve the campaign for stronger organic growth.",
  },
];

export default function SEOAgencyPage() {
  return (
    <main className="bg-white">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">
    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#19C2C1]/20 blur-3xl" />
    <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">

      {/* LEFT */}
      <div>

        {/* Breadcrumb */}
        <ScrollReveal direction="right" duration={550}>
          <div className="flex items-center gap-2 text-sm font-semibold">
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

            <span className="text-[#19C2C1]">SEO Agency</span>
          </div>
        </ScrollReveal>

        {/* Badge */}
        <ScrollReveal direction="left" delay={40} duration={600}>
          <span className="mt-8 inline-block text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            SEO Agency
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={70} duration={700}>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Grow Your Business With A Results-Driven SEO Agency
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={130} duration={700}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Digital Allies helps businesses improve their search visibility,
            attract qualified customers, and build long-term organic growth
            with strategic SEO solutions.
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

      {/* RIGHT VISUAL */}
      <ScrollReveal direction="right" delay={80} duration={800}>
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">

            <div className="relative overflow-hidden rounded-[1.5rem]">

              <Image
                src="/images/graph1.png"
                alt="SEO agency digital marketing"
                width={597}
                height={417}
                className="object-contain"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Stats */}
              <ScrollReveal direction="left" delay={180} duration={650}>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#19C2C1] text-white">
                      <TrendingUp size={24} />
                    </div>

                    <div>
                      <p className="text-2xl font-black text-white">
                        1000+
                      </p>

                      <p className="text-sm text-slate-300">
                        Brands Helped
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
            SEO Agency Dubai
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            SEO Strategies Built For Real Business Growth
          </h2>
        </ScrollReveal>

        {/* Underline */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
        </ScrollReveal>

        {/* Paragraph */}
        <ScrollReveal direction="up" delay={130} duration={700}>
          <p className="mt-6 text-base leading-8 text-slate-600">
            A strong SEO strategy is more than simply ranking for keywords.
            It is about connecting your business with people who are actively
            searching for your products and services. Digital Allies combines
            technical SEO, keyword research, content optimization, and
            performance analysis to create a stronger online presence.
          </p>
        </ScrollReveal>

        {/* Paragraph */}
        <ScrollReveal direction="up" delay={160} duration={700}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Whether you are launching a new website or looking to improve an
            existing SEO campaign, our approach focuses on increasing
            visibility, attracting relevant visitors, and creating
            sustainable search growth.
          </p>
        </ScrollReveal>

      </div>
    </div>
  </section>

  {/* BENEFITS */}
  <section className="bg-white py-12 sm:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

      {/* LEFT CONTENT */}
      <div>

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Why SEO Matters
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60} duration={750}>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Turn Search Visibility Into Business Opportunities
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-6 leading-8 text-slate-600">
            Search engines are one of the most important ways customers
            discover businesses online. A well-planned SEO strategy can help
            your website appear in front of the right audience at the right
            time.
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

      {/* RIGHT VISUAL */}
      <ScrollReveal direction="right" delay={80} duration={800}>
        <div className="relative">

          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative rounded-[2rem] bg-slate-950 p-8 shadow-2xl sm:p-10">

            <ScrollReveal direction="up" delay={140} duration={650}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <BarChart3 size={28} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} duration={700}>
              <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                Data-Driven SEO
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={220} duration={700}>
              <p className="mt-5 leading-8 text-slate-400">
                We use search data, website performance, keyword opportunities,
                and competitive insights to build SEO strategies that are
                aligned with your business goals.
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-4">

              <ScrollReveal direction="left" delay={80} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <Users size={21} className="text-[#19C2C1]" />

                    <span className="font-bold text-white">
                      Targeted Audience
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={120} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={21} className="text-[#19C2C1]" />

                    <span className="font-bold text-white">
                      Sustainable Growth
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={160} duration={650}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <Search size={21} className="text-[#19C2C1]" />

                    <span className="font-bold text-white">
                      Better Search Visibility
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
            A Clear Approach To SEO Growth
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-5 leading-8 text-slate-400">
            We follow a structured SEO process designed to identify
            opportunities, improve performance, and build long-term
            visibility.
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

</main>
  );
}
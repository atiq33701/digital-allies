import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  ChevronRight,
  Code2,
  FileText,
  Globe2,
  Search,
  Settings2,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "SEO Services in Dubai",
  description:
    "Grow your organic visibility with professional SEO services including keyword research, on-page SEO, technical SEO, content optimization, and SEO strategy.",
};

const seoServices = [
  {
    title: "Keyword Research",
    description:
      "Identify valuable search terms and opportunities that align with your audience, industry, location, and business goals.",
    icon: Search,
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize important website elements including titles, headings, content, internal links, and page structure.",
    icon: FileText,
  },
  {
    title: "Technical SEO",
    description:
      "Improve the technical foundation of your website to support better crawling, indexing, performance, and search visibility.",
    icon: Settings2,
  },
  {
    title: "Content Optimization",
    description:
      "Create and improve useful content that addresses search intent and provides genuine value to your potential customers.",
    icon: Globe2,
  },
  {
    title: "SEO Performance Tracking",
    description:
      "Monitor important SEO metrics and search performance to understand progress and identify opportunities for improvement.",
    icon: BarChart3,
  },
  {
    title: "SEO Strategy",
    description:
      "Build a practical SEO strategy based on your website, competition, target audience, industry, and long-term growth objectives.",
    icon: Target,
  },
];

const seoBenefits = [
  {
    title: "Increase Organic Visibility",
    description:
      "Improve your website's ability to appear for relevant searches and reach more potential customers.",
    icon: TrendingUp,
  },
  {
    title: "Reach The Right Audience",
    description:
      "Target relevant keywords and search intent so your website can connect with people looking for what you offer.",
    icon: Target,
  },
  {
    title: "Build Long-Term Growth",
    description:
      "Develop a strong SEO foundation designed to support sustainable organic traffic and online visibility.",
    icon: BadgeCheck,
  },
  {
    title: "Improve Website Performance",
    description:
      "Address technical and on-page issues that can affect your website's search visibility and user experience.",
    icon: Code2,
  },
];

export default function SeoServicesPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#19C2C1]/15 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

        <div className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-[#19C2C1]" />

        <div className="absolute left-[20%] bottom-[25%] h-3 w-3 rounded-full bg-[#19C2C1]/40" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-12">

          <div className="mx-auto max-w-4xl py-10 text-center sm:py-12">

            <ScrollReveal direction="left" duration={600}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#19C2C1]">
                <Search size={15} />
                SEO Services
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={70} duration={700}>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                SEO Services That Help Your Business Grow Online
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={130} duration={650}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Improve your search visibility, attract qualified organic
                traffic, and build a stronger online presence with a strategic
                SEO approach
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={650}>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#19C2C1] px-7 py-4 font-bold text-white shadow-lg shadow-[#19C2C1]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 hover:border-[#19C2C1]/50 hover:bg-[#19C2C1]/10"
                >
                  View All Services
                </Link>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* BREADCRUMB */}
      <ScrollReveal direction="right" duration={550}>
        <div className="border-b border-slate-100 bg-white">

          <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-sm font-semibold sm:px-6 lg:px-8">

            <Link
              href="/"
              className="text-slate-500 transition-colors hover:text-[#19C2C1]"
            >
              Home
            </Link>

            <ChevronRight
              size={15}
              className="text-[#19C2C1]"
            />

            <Link
              href="/services"
              className="text-slate-500 transition-colors hover:text-[#19C2C1]"
            >
              Services
            </Link>

            <ChevronRight
              size={15}
              className="text-[#19C2C1]"
            />

            <span className="text-slate-950">
              SEO Services
            </span>

          </div>
        </div>
      </ScrollReveal>


      {/* INTRODUCTION */}
      <section className="bg-white py-12 sm:py-12 lg:py-12">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* LEFT */}
          <div>

            <ScrollReveal direction="left" duration={650}>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
                Search Engine Optimization
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={70} duration={700}>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Build A Stronger Presence In Search Results
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={600}>
              <div className="mt-5 h-1 w-16 rounded-full bg-[#19C2C1]" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} duration={700}>
              <p className="mt-6 text-base leading-8 text-slate-600">
                SEO helps your website become more visible when potential
                customers search for products, services, and information related
                to your business.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={700}>
              <p className="mt-4 text-base leading-8 text-slate-600">
                At{" "}
                <strong className="font-bold text-slate-950">
                  Digital Allies
                </strong>
                , we combine keyword research, on-page optimization, technical
                SEO, content strategy, and performance tracking to create a
                stronger foundation for organic growth.
              </p>
            </ScrollReveal>

            <div className="mt-6 space-y-3">

              {[
                "Strategic keyword targeting",
                "Technical and on-page optimization",
                "Search-focused content",
                "Continuous performance improvement",
              ].map((item, index) => (
                <ScrollReveal
                  key={item}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 70}
                  duration={600}
                >
                  <div className="flex items-center gap-3">

                    <BadgeCheck
                      size={19}
                      className="shrink-0 text-[#19C2C1]"
                    />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>
                </ScrollReveal>
              ))}

            </div>

          </div>


          {/* RIGHT SEO VISUAL */}
          <ScrollReveal direction="right" duration={800}>
            <div className="relative mx-auto w-full max-w-xl">

              <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#19C2C1]/10 blur-3xl" />

              <div className="relative rounded-[2rem] bg-slate-950 p-6 shadow-2xl sm:p-8">

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      SEO Performance
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white">
                      Organic Growth
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                    <BarChart3 size={23} />
                  </div>

                </div>


                {/* GRAPH */}
                <ScrollReveal direction="up" delay={100} duration={700}>
                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                    <div className="flex items-end justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Organic Visibility
                        </p>

                        <p className="mt-1 text-3xl font-black text-white">
                          Growing
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-bold text-[#19C2C1]">
                        <TrendingUp size={16} />
                        SEO
                      </div>

                    </div>

                    <div className="mt-7 flex h-36 items-end gap-2">

                      {[35, 42, 48, 44, 58, 67, 73, 82, 91].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-[#19C2C1]/30 transition-all duration-300 hover:bg-[#19C2C1]"
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        )
                      )}

                    </div>

                  </div>
                </ScrollReveal>


                {/* MINI STATS */}
                <div className="mt-5 grid grid-cols-2 gap-4">

                  <ScrollReveal direction="left" duration={600}>
                    <div className="h-full rounded-2xl bg-[#19C2C1] p-5">

                      <Search
                        size={21}
                        className="text-white"
                      />

                      <p className="mt-3 text-lg font-black text-white">
                        Keywords
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white/70">
                        Search Opportunities
                      </p>

                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction="right" delay={80} duration={600}>
                    <div className="h-full rounded-2xl bg-white p-5">

                      <Target
                        size={21}
                        className="text-[#19C2C1]"
                      />

                      <p className="mt-3 text-lg font-black text-slate-950">
                        Targeted
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Search Intent
                      </p>

                    </div>
                  </ScrollReveal>

                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>


      {/* CORE SEO SERVICES */}
      <section className="bg-slate-50 py-12 sm:py-12 lg:py-12">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <ScrollReveal direction="left" duration={600}>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
                What We Do
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={70} duration={700}>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Complete SEO Solutions
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={130} duration={650}>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our SEO services cover the key areas needed to create a strong,
                search-friendly website and long-term organic growth strategy
              </p>
            </ScrollReveal>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal
                  key={service.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 80}
                  duration={700}
                  className="h-full"
                >
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#19C2C1] hover:shadow-xl">

                    <span className="absolute inset-x-0 bottom-0 h-0 bg-[#19C2C1] transition-all duration-500 ease-out group-hover:h-full" />

                    <div className="relative z-10">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-500 group-hover:bg-white group-hover:text-[#19C2C1]">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-5 text-xl font-black leading-7 text-slate-950 transition-colors duration-500 group-hover:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/90">
                        {service.description}
                      </p>

                    </div>

                  </div>
                </ScrollReveal>
              );
            })}

          </div>

        </div>
      </section>


      {/* BENEFITS */}
      <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-12 lg:py-12">

        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#19C2C1]/10 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <ScrollReveal direction="left" duration={600}>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
                Why SEO Matters
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={70} duration={700}>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Turn Search Visibility Into Growth Opportunities
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={130} duration={650}>
              <p className="mt-4 text-base leading-8 text-slate-400">
                A strong SEO strategy can help your business become more
                discoverable and connect with people actively searching for what
                you offer
              </p>
            </ScrollReveal>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {seoBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <ScrollReveal
                  key={benefit.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 80}
                  duration={700}
                  className="h-full"
                >
                  <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#19C2C1]/40 hover:bg-white/[0.08]">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-500 group-hover:bg-[#19C2C1] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {benefit.description}
                    </p>

                  </div>
                </ScrollReveal>
              );
            })}

          </div>

        </div>
      </section>

    </main>
  );
}
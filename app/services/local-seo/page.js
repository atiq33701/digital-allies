import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Building2,
  ChevronRight,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata = {
  title: "AI Search Optimization Services in Dubai",
  description:
    "Improve your visibility in AI-powered search with AI Search Optimization strategies for Google AI Overviews, ChatGPT, Gemini, and modern search platforms.",
};


export default function LocalSeoPage() {
  return (
<main className="bg-white text-slate-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">
    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#19C2C1]/15 blur-3xl" />
    <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-[#19C2C1]" />
    <div className="absolute right-[25%] top-[35%] h-3 w-3 rounded-full bg-[#19C2C1]/40" />
    <div className="absolute left-[18%] bottom-[20%] h-2 w-2 rounded-full bg-[#19C2C1]/50" />

    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#19C2C1]">
            <MapPin size={15} />
            Local SEO Services
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Found By More Customers With Local SEO
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130} duration={650}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Improve your local search visibility, strengthen your Google
            Business Profile, and connect with customers searching for your
            products and services in your area
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={650}>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
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
              Explore Services
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={650}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-400">
            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Local Search Strategy
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Google Business Profile
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Reputation Support
            </span>
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
          Local SEO
        </span>

      </div>
    </div>
  </ScrollReveal>


  {/* INTRO */}
  <section className="overflow-hidden bg-white py-14">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

      {/* LEFT */}
      <div>

        <ScrollReveal direction="left" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Local Search Visibility
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Reach Customers Searching For Your Business Nearby
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-7 text-base leading-8 text-slate-600">
            Local SEO helps businesses become more visible when customers
            search for products and services in a specific area. Instead of
            relying only on broad search rankings, local search focuses on
            reaching people who are looking for a business near them.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={700}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            At{" "}
            <strong className="font-bold text-slate-950">
              Digital Allies
            </strong>
            , we build Local SEO strategies around your business,
            location, audience, and competition to strengthen your presence
            across local search.
          </p>
        </ScrollReveal>


        {/* Mini Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <ScrollReveal direction="left" duration={650}>
            <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <Search size={22} />
              </div>

              <h3 className="mt-4 font-black text-slate-950">
                Local Search
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Target relevant searches from customers in your service
                area
              </p>

            </div>
          </ScrollReveal>


          <ScrollReveal direction="right" delay={80} duration={650}>
            <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                <MapPin size={22} />
              </div>

              <h3 className="mt-4 font-black text-slate-950">
                Local Discovery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Strengthen your visibility across local search experiences
              </p>

            </div>
          </ScrollReveal>

        </div>

      </div>


      {/* RIGHT VISUAL */}
      <ScrollReveal direction="right" duration={800}>
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl sm:p-8">

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#19C2C1]/10 blur-3xl" />

            <div className="relative">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Local Visibility
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Your Business
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                  <MapPin size={22} />
                </div>

              </div>


              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#19C2C1] text-white">
                    <Search size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Search visibility
                    </p>

                    <p className="mt-1 font-black text-white">
                      Local Customers
                    </p>
                  </div>

                </div>


                <div className="mt-6 space-y-4">

                  <div>
                    <div className="mb-2 flex justify-between text-xs font-bold">

                      <span className="text-slate-400">
                        Local Presence
                      </span>

                      <span className="text-[#19C2C1]">
                        Improving
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-[#19C2C1]" />
                    </div>
                  </div>


                  <div>
                    <div className="mb-2 flex justify-between text-xs font-bold">

                      <span className="text-slate-400">
                        Business Profile
                      </span>

                      <span className="text-[#19C2C1]">
                        Optimized
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[90%] rounded-full bg-[#19C2C1]" />
                    </div>
                  </div>


                  <div>
                    <div className="mb-2 flex justify-between text-xs font-bold">

                      <span className="text-slate-400">
                        Local Signals
                      </span>

                      <span className="text-[#19C2C1]">
                        Strong
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[76%] rounded-full bg-[#19C2C1]" />
                    </div>
                  </div>

                </div>
              </div>


              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-[#19C2C1] p-5">
                  <MapPin size={22} className="text-white" />

                  <p className="mt-4 text-2xl font-black text-white">
                    Local
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/70">
                    Search Focus
                  </p>
                </div>


                <div className="rounded-2xl bg-white p-5">
                  <Star size={22} className="text-[#19C2C1]" />

                  <p className="mt-4 text-2xl font-black text-slate-950">
                    Trust
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    Online Presence
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>


  {/* PROCESS */}
  <section className="relative overflow-hidden bg-slate-950 py-8 sm:py-10 lg:py-14">

    <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#19C2C1]/10 blur-3xl" />
    <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Our Approach
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            A Strategy Built Around Your Business
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130} duration={650}>
          <p className="mt-5 text-base leading-8 text-slate-400">
            We focus on understanding your business and target market before
            building a practical local search strategy
          </p>
        </ScrollReveal>

      </div>


      <div className="mt-14 grid gap-6 md:grid-cols-3">

        <ScrollReveal direction="left" duration={700}>
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1] text-lg font-black text-white">
              01
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              Research
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              We analyze your business, location, competitors, audience, and
              relevant local search opportunities
            </p>

          </div>
        </ScrollReveal>


        <ScrollReveal direction="up" delay={80} duration={700}>
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1] text-lg font-black text-white">
              02
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              Optimize
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              We optimize important local assets and strengthen the signals
              that support your online local presence
            </p>

          </div>
        </ScrollReveal>


        <ScrollReveal direction="right" delay={160} duration={700}>
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.05] p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#19C2C1] text-lg font-black text-white">
              03
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              Improve
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              We monitor performance and continue improving the strategy as
              your business and local search landscape evolve
            </p>

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* WHY DIGITAL ALLIES */}
  <section className="bg-white py-12">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Why Digital Allies
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Local SEO Focused On Real Business Growth
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130} duration={650}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We combine search strategy, local optimization, reputation
            support, and ongoing improvement to create a stronger digital
            presence for your business
          </p>
        </ScrollReveal>

      </div>


      <div className="mt-14 grid gap-6 md:grid-cols-3">

        <ScrollReveal direction="left" duration={700}>
          <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <Users
              size={28}
              className="text-[#19C2C1]"
            />

            <h3 className="mt-6 text-xl font-black">
              Customer Focused
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We focus on helping your business reach the people who are
              actually searching for your products and services
            </p>

          </div>
        </ScrollReveal>


        <ScrollReveal direction="up" delay={80} duration={700}>
          <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <Target
              size={28}
              className="text-[#19C2C1]"
            />

            <h3 className="mt-6 text-xl font-black text-slate-950">
              Strategy Driven
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every business has different locations, competitors, and
              customers, so our approach is built around your goals
            </p>

          </div>
        </ScrollReveal>


        <ScrollReveal direction="right" delay={160} duration={700}>
          <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <BarChart3
              size={28}
              className="text-[#19C2C1]"
            />

            <h3 className="mt-6 text-xl font-black text-slate-950">
              Performance Focused
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We focus on measurable improvements in visibility, local
              presence, engagement, and opportunities
            </p>

          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>

</main>
  );
}
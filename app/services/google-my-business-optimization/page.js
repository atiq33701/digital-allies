import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata = {
  title: "GMB SEO Services in Dubai",
  description:
    "Improve your Google Business Profile visibility with GMB SEO strategies designed to increase local discovery, customer engagement, and business growth.",
};

const benefits = [
  {
    title: "Better Local Visibility",
    description:
      "Make your business easier to discover when customers search for relevant products and services in your target area.",
    icon: TrendingUp,
  },
  {
    title: "More Customer Trust",
    description:
      "A complete and professional Google Business Profile gives potential customers useful information before they contact you.",
    icon: ShieldCheck,
  },
  {
    title: "More Local Discovery",
    description:
      "Strengthen your presence where customers are already searching for businesses, products, and services.",
    icon: MapPin,
  },
  {
    title: "Stronger Engagement",
    description:
      "Make it easier for customers to interact with your business through calls, directions, reviews, and profile information.",
    icon: MessageSquare,
  },
];

const optimizationPoints = [
  "Business name and profile information",
  "Primary and secondary business categories",
  "Business description and services",
  "Location and service area information",
  "Local keyword opportunities",
  "Customer review strategy",
  "Google Maps visibility",
  "Ongoing profile performance",
];


export default function GMBPage() {
  return (
    <main className="bg-white text-slate-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">

    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#19C2C1]/15 blur-3xl" />

    <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-[#19C2C1]" />

    <div className="absolute left-[18%] bottom-[25%] h-3 w-3 rounded-full bg-[#19C2C1]/40" />

    <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#19C2C1]/30 bg-[#19C2C1]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#19C2C1]">
            <Building2 size={15} />
            GMB SEO Services
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Optimize Your Google Business Profile For Better Local Visibility
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130} duration={650}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Build a stronger Google Business Profile, improve your local
            presence, and make it easier for potential customers to discover
            and connect with your business
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
              View All Services
            </Link>

          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={650}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-400">

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Profile Optimization
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Google Maps
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-[#19C2C1]" />
              Local Search
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
          GMB Optimization
        </span>

      </div>
    </div>
  </ScrollReveal>


  {/* INTRO */}
  <section className="overflow-hidden bg-white py-12">

    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

      {/* LEFT CONTENT */}
      <div>

        <ScrollReveal direction="left" duration={650}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Google Business Profile
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Make Your Business Easier To Find On Google
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} duration={700}>
          <p className="mt-7 text-base leading-8 text-slate-600">
            Your Google Business Profile is often one of the first things
            customers see when they search for your business. It can provide
            important information such as your business name, location,
            services, opening hours, reviews, photos, and contact options.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={700}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            At{" "}
            <strong className="font-bold text-slate-950">
              Digital Allies
            </strong>
            , we help businesses optimize their Google Business Profile and
            build a stronger local search presence through strategic GMB SEO.
          </p>
        </ScrollReveal>

        <div className="mt-8 space-y-3">

          {[
            "Complete and accurate business information",
            "Relevant categories and services",
            "Local keyword opportunities",
            "Review and reputation strategy",
          ].map((item, index) => (
            <ScrollReveal
              key={item}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 70}
              duration={600}
            >
              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={20}
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


      {/* RIGHT VISUAL */}
      <ScrollReveal direction="right" duration={800}>
        <div className="relative mx-auto w-full max-w-xl">

          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#19C2C1]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl sm:p-8">

            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#19C2C1]/10 blur-3xl" />

            <div className="relative">

              {/* PROFILE HEADER */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#19C2C1] text-white">
                  <Building2 size={27} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Google Business Profile
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Your Business
                  </h3>
                </div>

              </div>

              {/* RATING */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Customer Rating
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          className="fill-[#19C2C1] text-[#19C2C1]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-black text-white">
                      4.9
                    </p>

                    <p className="text-xs text-slate-400">
                      Reviews
                    </p>
                  </div>

                </div>

              </div>

              {/* PROFILE SIGNALS */}
              <div className="mt-5 space-y-4">

                <ScrollReveal direction="left" duration={600}>
                  <div className="rounded-2xl bg-white p-4">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                          <MapPin size={19} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-400">
                            Location
                          </p>

                          <p className="text-sm font-black text-slate-950">
                            Local Search
                          </p>
                        </div>

                      </div>

                      <BadgeCheck
                        size={20}
                        className="text-[#19C2C1]"
                      />

                    </div>

                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={80} duration={600}>
                  <div className="rounded-2xl bg-white p-4">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C2C1]/10 text-[#19C2C1]">
                          <Search size={19} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-400">
                            Visibility
                          </p>

                          <p className="text-sm font-black text-slate-950">
                            Search Ready
                          </p>
                        </div>

                      </div>

                      <TrendingUp
                        size={20}
                        className="text-[#19C2C1]"
                      />

                    </div>

                  </div>
                </ScrollReveal>

              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>


  {/* WHAT WE OPTIMIZE */}
  <section className="bg-white py-12">

    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

        <div>

          <ScrollReveal direction="left" duration={650}>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
              Profile Optimization
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={70} duration={700}>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Every Important Part Of Your Profile Matters
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} duration={600}>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#19C2C1]" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} duration={700}>
            <p className="mt-7 text-base leading-8 text-slate-600">
              A strong Google Business Profile is more than simply adding
              your business name and phone number. Relevant information,
              categories, services, reviews, and local signals all contribute
              to the quality of your online business presence.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={700}>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We review your existing profile, identify opportunities, and
              create an optimization strategy around your business and target
              customers.
            </p>
          </ScrollReveal>

        </div>


        <div className="grid gap-3 sm:grid-cols-2">

          {optimizationPoints.map((point, index) => (
            <ScrollReveal
              key={point}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 80}
              duration={650}
              className="h-full"
            >
              <div className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-[#19C2C1]/40 hover:bg-[#19C2C1]/5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#19C2C1]/10 text-[#19C2C1]">
                  <CheckCircle2 size={18} />
                </div>

                <span className="text-sm font-bold text-slate-700">
                  {point}
                </span>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </div>
  </section>


  {/* BENEFITS */}
  <section className="relative overflow-hidden bg-slate-950 py-12">

    <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#19C2C1]/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Why GMB SEO
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Build A Stronger Local Presence
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130} duration={650}>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Your Google Business Profile can help potential customers learn
            about your business before they ever visit your website
          </p>
        </ScrollReveal>

      </div>


      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <ScrollReveal
              key={benefit.title}
              direction={
                index % 2 === 0
                  ? "left"
                  : "right"
              }
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
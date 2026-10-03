import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  MapPin,
  Building2,
  Search,
  BriefcaseBusiness,
  Landmark,
  UserCheck,
  BarChart3,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "SEO & Digital Marketing Services in Dubai",
  description:
    "Explore Digital Allies Dubai services including Local SEO, Google Business Profile optimization, SEO services, GMB SEO, and AI Search Optimization.",
};

export default function ServicesPage() {
  const services = [
  {
    title: "Local SEO in Dubai",
    href: "/services/local-seo",
    description:
      "Improve your local search visibility and help customers find your business when they search for services in their area.",
    icon: MapPin,
  },
  {
    title: "Google My Business Optimization in Dubai",
    href: "/services/google-my-business-optimization",
    description:
      "Optimize your Google Business Profile to improve local rankings, attract more customers, and build trust online.",
    icon: Building2,
  },
  {
    title: "SEO Services in Dubai",
    href: "/services/seo-services",
    description:
      "Grow your organic traffic with strategic SEO, keyword targeting, content optimization, and technical improvements.",
    icon: Search,
  },
  {
    title: "SEO Agency in Dubai",
    href: "/services/seo-agency",
    description:
      "Get a complete SEO strategy designed to increase your visibility, rankings, qualified traffic, and long-term growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "SEO in Dubai",
    href: "/services/seo-dubai",
    description:
      "Reach more customers in Dubai with location-focused SEO strategies built around the competitive local market.",
    icon: Landmark,
  },
  {
    title: "SEO Specialist in Dubai",
    href: "/services/seo-specialist",
    description:
      "Work with SEO specialists focused on improving search rankings, website performance, local visibility, and conversions.",
    icon: UserCheck,
  },
  {
    title: "GMB SEO in Dubai",
    href: "/services/gmb-seo",
    description:
      "Strengthen your Google Business Profile presence with GMB SEO strategies that improve local discovery and engagement.",
    icon: BarChart3,
  },
  {
    title: "AI Search Optimization in Dubai",
    href: "/services/ai-search-optimization",
    description:
      "Prepare your business for AI-powered search by optimizing content and online signals for modern search experiences.",
    icon: Sparkles,
  },
];

  return (
    
<main className="bg-white">

  {/* HERO */}
  <section className="relative overflow-hidden bg-slate-950">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-30"
      style={{
        backgroundImage: "url('/images/services.jpg')",
      }}
    />

    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Teal Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,194,193,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(25,194,193,0.12),transparent_35%)]" />

    <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-5 py-12 text-center sm:px-6 lg:px-8">
      <div>

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Digital Allies
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Services
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={140} duration={600}>
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
              Services
            </span>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>


  {/* SERVICES */}
  <section className="bg-white px-5 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">

      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <ScrollReveal direction="left" duration={600}>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-[#19C2C1]">
            Our Services
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={70} duration={700}>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            SEO Solutions Designed For Your Business
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={140} duration={650}>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We provide focused SEO and digital search solutions to help
            businesses improve their visibility, reach more customers, and
            grow in an increasingly competitive online market.
          </p>
        </ScrollReveal>

      </div>


      {/* Service Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <ScrollReveal
              key={service.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 80}
              duration={700}
              className="h-full"
            >
              <Link
                href={service.href}
                className="group relative flex h-full min-h-[330px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#19C2C1] hover:shadow-xl"
              >

                {/* Bottom To Top Hover Background */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-[#19C2C1] transition-all duration-500 ease-out group-hover:h-full" />

                <div className="relative z-10 flex h-full flex-col">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19C2C1]/10 text-[#19C2C1] transition-all duration-500 group-hover:bg-white group-hover:text-[#19C2C1]">
                    <Icon
                      size={26}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-black leading-7 text-slate-950 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#19C2C1] transition-colors duration-500 group-hover:text-white">
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


      {/* CTA */}
      <ScrollReveal direction="up" delay={120} duration={700}>
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#19C2C1] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16aeae] hover:shadow-lg"
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </ScrollReveal>

    </div>
  </section>

</main>

  );
}

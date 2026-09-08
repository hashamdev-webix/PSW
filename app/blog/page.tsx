import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";
import {
  ChevronRight,
  Search,
  UserRound,
  ClipboardList,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Addressing the Evolving Staffing Challenges in Calgary Healthcare | R&M Prestige Care",
  description:
    "A look at the staffing challenges facing Calgary's healthcare facilities, and how flexible temporary staffing solutions help teams stay fully supported.",
  openGraph: {
    title: "Addressing the Evolving Staffing Challenges in Calgary Healthcare",
    description:
      "A look at the staffing challenges facing Calgary's healthcare facilities, and how flexible temporary staffing solutions help teams stay fully supported.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/evolving-staffing-challenges-calgary-healthcare`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Addressing the Evolving Staffing Challenges in Calgary Healthcare",
    description:
      "A look at the staffing challenges facing Calgary's healthcare facilities, and how flexible temporary staffing solutions help teams stay fully supported.",
  },
};

export default function BlogPostPage() {
  const categories = [
    { icon: UserRound, label: "Temporary Staffing" },
    { icon: ClipboardList, label: "LPN Insights" },
    { icon: TrendingUp, label: "Healthcare Trends" },
  ];

  return (
    <main>
      {/* Breadcrumb */}
      <nav
        className="py-4 bg-white border-b border-slate-200"
        aria-label="Breadcrumb"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-blue transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li>
              <Link href="/blog" className="hover:text-blue transition-colors">
                Blog
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-navy font-medium">Insight and Resources</li>
          </ol>
        </div>
      </nav>

      {/* Hero Banner */}
      <section
        className="relative py-20 md:py-28 bg-navy"
        aria-label="Insight and resources"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&h=700&fit=crop"
            alt="Care team discussing a patient's care plan in a bright clinical setting"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Insight and Resources
          </h1>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="py-16 md:py-20 bg-white" aria-label="Blog article">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-4 leading-tight">
                Addressing the Evolving Staffing Challenges in Calgary
                Healthcare
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
                <span>By Sarah McLeod</span>
                <span aria-hidden="true">&middot;</span>
                <span>Jan 15, 2024</span>
                <span aria-hidden="true">&middot;</span>
                <span>Industry Trends</span>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Healthcare facilities across Calgary are under growing
                pressure to keep shifts covered without compromising on the
                quality of care. Staff illness, leave, seasonal demand, and
                sudden vacancies can all leave a unit short-handed with very
                little notice, and the impact is felt by patients, families,
                and permanent staff alike.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                At R and M Prestige Care, we work with hospitals, clinics, and
                long-term care homes across the city to close these gaps
                quickly, with professionals who are qualified, compassionate,
                and ready to step in from day one.
              </p>

              <p className="text-sm font-bold text-blue tracking-wide mb-3">
                For Temporary Staffing Services
              </p>
              <h3 className="text-2xl font-bold text-navy font-heading mb-4">
                What is Driving the Staffing Challenge
              </h3>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue mt-2.5" />
                  <span className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-navy">
                      Rising demand for care:
                    </span>{" "}
                    an aging population means more facilities need reliable
                    coverage across every shift.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue mt-2.5" />
                  <span className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-navy">
                      Registered Nurse shortages:
                    </span>{" "}
                    fewer available RNs make short-notice coverage harder to
                    plan for.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue mt-2.5" />
                  <span className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-navy">
                      Short-notice absences:
                    </span>{" "}
                    illness and emergencies leave gaps that need to be filled
                    within hours, not days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue mt-2.5" />
                  <span className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-navy">
                      Multi-site coordination:
                    </span>{" "}
                    facilities managing several locations need one partner
                    they can call for every site.
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-navy font-heading mb-4">
                <span className="text-blue">Flexible</span> Healthcare
                Staffing for Every Need
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether a facility needs a single shift covered or ongoing
                support across several departments, matching the right person
                to the right role matters. We take time to understand each
                facility's environment, patient needs, and culture, so
                every professional we place is genuinely prepared for the
                assignment, not just available for it.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&h=600&fit=crop"
                  alt="Caregiver spending time with a senior client during a home visit"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-2xl font-bold text-navy font-heading mb-4">
                <span className="text-blue">Flexible</span> Healthcare Teams
                Staffing for Every Need
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Beyond filling single shifts, we also support facilities
                building out longer-term staffing plans. That means
                consistent quality across every placement, clear
                communication with facility managers, and a team that
                understands what stable, dependable coverage actually
                requires over weeks and months, not just a single day.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&h=600&fit=crop"
                  alt="Healthcare aides supporting residents in a long-term care facility"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div>
                <h4 className="text-lg font-bold text-navy font-heading mb-4">
                  Search
                </h4>
                <form className="flex" role="search">
                  <label htmlFor="blog-search" className="sr-only">
                    Search articles
                  </label>
                  <input
                    id="blog-search"
                    type="search"
                    placeholder="Search"
                    className="flex-1 rounded-l-lg border border-slate-200 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-11 rounded-r-lg bg-blue text-white hover:bg-navy transition-colors"
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-lg font-bold text-navy font-heading mb-4">
                  Most Popular Categories
                </h4>
                <ul className="space-y-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <li key={index}>
                        <Link
                          href="/blog"
                          className="flex items-center gap-3 rounded-lg bg-navy-50 px-4 py-3 hover:bg-navy-100 transition-colors"
                        >
                          <span className="flex-shrink-0 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <Icon className="w-4 h-4 text-blue" />
                          </span>
                          <span className="text-sm font-medium text-navy">
                            {category.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="rounded-xl bg-navy-50 p-6">
                <h4 className="text-lg font-bold text-navy font-heading mb-2">
                  Newsletter
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Sign up with your email address to receive staffing tips
                  and healthcare updates from our newsletter.
                </p>
                <form className="space-y-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue text-white text-sm font-semibold py-2.5 bg-navy transition-colors"
                  >
                    Sign up
                  </button>
                </form>
              </div>

              {/* Archive */}
              <div>
                <h4 className="text-lg font-bold text-navy font-heading mb-4">
                  Archive
                </h4>
                <p className="text-sm text-slate-600">Dec 2024</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Band - Navy Color */}
      <section
        className="py-16 md:py-20 bg-navy text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-bold text-blue-200 tracking-wide mb-3">
                Ready to Get Started?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Need Temporary Staff in Calgary?
              </h2>
              <p className="text-lg text-navy-100 max-w-xl leading-relaxed">
                Get in touch and we will find the right temporary
                professionals — quickly and reliably.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Button href="/contact" variant="white" size="lg">
                Get in Touch
              </Button>
              <div className="flex flex-col gap-2 text-sm text-navy-100">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us: {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email: {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
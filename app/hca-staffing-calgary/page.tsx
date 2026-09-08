import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { Award, Calendar, Shield, MapPin, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "HCA Staffing in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides certified HCA staffing in Calgary for care homes and healthcare facilities. Reliable Healthcare Aide staffing for shift coverage and resident care support.",
  openGraph: {
    title: "HCA Staffing in Calgary | R&M Prestige Care",
    description:
      "Certified HCA staffing in Calgary for care homes and facilities. Reliable Healthcare Aide staffing for shift coverage, resident care, and emergency support.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/hca-staffing-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HCA Staffing in Calgary | R&M Prestige Care",
    description:
      "Certified HCA staffing in Calgary for care homes. Reliable Healthcare Aide staffing for shift coverage and resident care support.",
  },
};

export default function HcaStaffingCalgaryPage() {
  const trustCards = [
    {
      icon: Award,
      title: "Certified Healthcare Aides",
      description:
        "Qualified HCAs available to support resident care, daily routines, mobility, and supervision.",
    },
    {
      icon: Calendar,
      title: "Flexible HCA Shift Coverage",
      description:
        "Support for short-term, overnight, weekend, emergency, and scheduled HCA shifts.",
    },
    {
      icon: Shield,
      title: "Screened & Accountable Staff",
      description:
        "Healthcare Aides are screened, reference-checked, and supported by company insurance and WCB.",
    },
    {
      icon: MapPin,
      title: "Calgary Facility Support",
      description:
        "HCA staffing support for care homes, assisted living, retirement residences, and healthcare environments.",
    },
  ];

  const hcaSupportLeft = [
    "Personal care and hygiene support",
    "Bathing, dressing, and grooming assistance",
    "Toileting and incontinence support",
    "Mobility and transfer assistance",
    "Feeding and hydration support",
  ];

  const hcaSupportRight = [
    "Resident supervision and safety checks",
    "Support with daily routines",
    "Reporting care concerns to facility teams",
    "Light housekeeping related to resident comfort",
  ];

  const facilitiesLeft = [
    "Care homes needing reliable HCA shift coverage",
    "Assisted living facilities managing daily resident care",
    "Retirement residences needing extra care support",
    "Group homes requiring trained support workers",
  ];

  const facilitiesRight = [
    "Hospitals and healthcare environments needing care assistance",
    "Rehabilitation settings needing care support",
    "Facilities needing temporary, emergency, or ongoing HCA staffing",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Tell Us Your HCA Need",
      description:
        "Share your facility type, shift date and time, number of HCAs needed, location, care duties, and urgency.",
    },
    {
      number: "2",
      title: "We Match a Certified HCA",
      description:
        "We review your resident care needs and arrange a credential-verified Healthcare Aide suited to your facility.",
    },
    {
      number: "3",
      title: "Coverage Begins",
      description:
        "Your shift is covered by a screened, reliable HCA — including support for short-notice and emergency needs.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="HCA staffing hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                HCA Staffing in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides reliable HCA staffing in Calgary for
                care homes, assisted living facilities, retirement residences,
                hospitals, group homes, and healthcare environments. Our
                certified Healthcare Aides help support resident care, personal
                routines, mobility assistance, supervision, daily living needs,
                and shift coverage.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether your facility needs short-notice HCA coverage, temporary
                staffing, scheduled shifts, or ongoing Healthcare Aide support,
                our team helps you maintain safe, consistent, and respectful
                care.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="green" size="lg">
                  Request HCA Staffing
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  variant="white"
                  size="lg"
                >
                  Call R&M Prestige Care
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop"
                  alt="Certified Healthcare Aide providing resident care support in Calgary care facility"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BLOCK - 4 ICON CARDS */}
      <section
        className="py-12 bg-white border-b border-slate-200"
        aria-label="HCA staffing features"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT IS HCA STAFFING */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is HCA staffing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is HCA Staffing?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              A Healthcare Aide (HCA) is a trained care professional who
              supports residents and patients with daily living, personal care,
              mobility, and supervision in care homes and healthcare facilities.
              HCA staffing helps healthcare facilities fill care team gaps with
              trained Healthcare Aides who support residents and patients with
              daily living, hygiene, mobility, meals, supervision, comfort, and
              routine care needs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT HEALTHCARE AIDES CAN SUPPORT */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="What Healthcare Aides can support"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Healthcare Aides Can Support"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              Healthcare Aides help facilities maintain safe, respectful, and
              consistent care for residents and patients.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                HCAs may support:
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <ul className="space-y-4">
                  {hcaSupportLeft.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {hcaSupportRight.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FACILITIES WE SUPPORT */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Facilities we support"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Facilities We Support"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              R&M Prestige Care provides HCA staffing support for healthcare
              facilities that need dependable, qualified, and compassionate care
              professionals.
            </p>

            <div className="bg-navy-50 rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                We support:
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <ul className="space-y-4">
                  {facilitiesLeft.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {facilitiesRight.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE R&M PRESTIGE CARE */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Why choose R&M Prestige Care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Choose R&M Prestige Care?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              R&M Prestige Care helps Calgary healthcare facilities access
              certified Healthcare Aides when staffing gaps affect resident
              care. Our team supports short-notice HCA coverage, temporary
              shifts, scheduled staffing, and ongoing care support with a focus
              on reliability, safety, dignity, and professional communication.
            </p>
          </div>
        </div>
      </section>

      {/* 7. A SIMPLE HCA STAFFING REQUEST PROCESS - 3 STEPS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="A simple HCA staffing request process"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="A Simple HCA Staffing Request Process"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
              Requesting HCA staffing should feel clear, quick, and reliable.
              R&M Prestige Care makes the process easier by helping facilities
              explain the role needed, shift requirements, urgency, and level of
              resident or patient support required.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BAND */}
      <section
        className="py-16 md:py-20 bg-navy text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Need Certified HCA Staffing in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            Whether your facility needs short-notice HCA coverage, temporary
            shift support, scheduled staffing, or ongoing Healthcare Aide
            support, R&M Prestige Care is ready to help. Request HCA staffing
            today and let our team help you cover your care needs with
            dependable support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" variant="green" size="lg">
              Request HCA Staffing
            </Button>
            <Button
              href={`tel:${siteConfig.contact.phoneRaw}`}
              variant="white"
              size="lg"
            >
              Call R&M Prestige Care
            </Button>
            <Button href="/contact" variant="blue" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

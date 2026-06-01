import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Moon,
  Clock,
  UserCheck,
  Shield,
  Sunset,
  Eye,
  Droplet,
  Footprints,
  Brain,
  Sunrise,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "24-Hour & Overnight Care in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides 24-hour and overnight care in Calgary for seniors. Live-in care, overnight supervision, and around-the-clock support for safety and peace of mind.",
  openGraph: {
    title: "24-Hour & Overnight Care in Calgary | R&M Prestige Care",
    description:
      "24-hour and overnight care for seniors in Calgary. Around-the-clock supervision, overnight support, and live-in care for safety, comfort, and peace of mind at home.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/24-hour-overnight-care-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24-Hour & Overnight Care in Calgary | R&M Prestige Care",
    description:
      "24-hour and overnight care for seniors in Calgary. Around-the-clock supervision and overnight support for safety and peace of mind at home.",
  },
};

export default function TwentyFourHourOvernightCarePage() {
  const trustCards = [
    {
      icon: Moon,
      title: "Overnight Supervision",
      description:
        "Support during the night for clients who need safety checks, reassurance, or help getting up.",
    },
    {
      icon: Clock,
      title: "24-Hour Care Options",
      description:
        "Around-the-clock care support for clients who need ongoing assistance throughout the day and night.",
    },
    {
      icon: UserCheck,
      title: "Consistent Caregivers",
      description:
        "We aim to provide familiar caregivers whenever possible to help build trust and comfort.",
    },
    {
      icon: Shield,
      title: "Safety-Focused Support",
      description:
        "Care focused on fall prevention, mobility assistance, night routines, and peace of mind.",
    },
  ];

  const whenNeededChecklist = [
    "Waking often during the night",
    "Toileting or incontinence support overnight",
    "Fall risk, weakness, or mobility concerns",
    "Wandering, confusion, or dementia-related safety needs",
    "Recovery after surgery or hospital discharge",
    "Need for help with evening and morning routines",
    "Family caregivers feeling exhausted or unable to provide night care",
    "A loved one needing supervision throughout the day and night",
  ];

  const careServices = [
    {
      icon: Sunset,
      title: "Evening Routine Support",
      description:
        "Help with changing clothes, hygiene, toileting, mobility, comfort, and preparing safely for bed.",
    },
    {
      icon: Eye,
      title: "Overnight Supervision",
      description:
        "Support through the night for clients who may wake often, feel confused, need reassurance, or require safety checks.",
    },
    {
      icon: Droplet,
      title: "Toileting & Incontinence Support",
      description:
        "Respectful overnight help with toileting, hygiene, changing, and comfort needs.",
    },
    {
      icon: Footprints,
      title: "Mobility & Fall Prevention",
      description:
        "Assistance with walking, transfers, repositioning, and safe movement during the night or early morning.",
    },
    {
      icon: Brain,
      title: "Dementia-Related Night Support",
      description:
        "Calm supervision for wandering, confusion, restlessness, sundowning, or memory-related safety concerns.",
    },
    {
      icon: Sunrise,
      title: "Morning Routine Assistance",
      description:
        "Help with getting out of bed, dressing, hygiene, breakfast routines, and starting the day safely.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="24-hour and overnight care hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                24-Hour & Overnight Care in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides 24-hour and overnight care in Calgary
                for seniors, recovering adults, and individuals who need extra
                support, supervision, or safety assistance at home during the
                day, night, or around the clock.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our caregivers help with evening routines, overnight
                supervision, toileting support, mobility assistance, safety
                checks, companionship, and daily care needs so families can feel
                more confident that their loved one is not alone when support is
                needed most.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/free-assessment" variant="blue" size="lg">
                  Book Free In-Home Assessment
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
                  alt="Compassionate caregiver providing overnight supervision and 24-hour care support to senior client in Calgary home"
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
        aria-label="24-hour and overnight care features"
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

      {/* 3. WHAT IS 24-HOUR & OVERNIGHT CARE */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is 24-hour and overnight care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is 24-Hour & Overnight Care?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              24-hour and overnight care is in-home support for people who need
              supervision, assistance, or reassurance beyond regular daytime
              visits. Overnight care usually focuses on night-time safety,
              toileting, repositioning, wandering concerns, and morning
              routines, while 24-hour care provides ongoing support across the
              full day and night through scheduled caregiver coverage.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHEN 24-HOUR OR OVERNIGHT CARE MAY BE NEEDED */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="When 24-hour or overnight care may be needed"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="When 24-Hour or Overnight Care May Be Needed"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              Families may consider overnight or 24-hour care when a loved one
              is unsafe alone at night, needs frequent assistance, or requires
              more consistent supervision at home.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                Common reasons include:
              </p>
              <ul className="space-y-4">
                {whenNeededChecklist.map((item, index) => (
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
      </section>

      {/* 5. OUR 24-HOUR & OVERNIGHT CARE SERVICES IN CALGARY - 6 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our 24-hour and overnight care services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our 24-Hour & Overnight Care Services in Calgary"
            subtitle="R&M Prestige Care provides overnight and 24-hour care built around the client's safety needs, daily routine, comfort level, and family concerns."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section
        className="py-16 md:py-20 bg-navy text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Need 24-Hour or Overnight Care in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            When a loved one needs support beyond regular daytime visits,
            overnight or 24-hour care can help make home feel safer and more
            manageable. R&M Prestige Care provides dependable care focused on
            supervision, comfort, dignity, and peace of mind. Book a free
            in-home assessment today and let our team help you understand the
            right level of support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/free-assessment" variant="blue" size="lg">
              Book Free In-Home Assessment
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
      </section>
    </main>
  );
}

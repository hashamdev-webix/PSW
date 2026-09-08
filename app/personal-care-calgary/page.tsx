import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Heart,
  HandHelping,
  Users,
  Calendar,
  Droplets,
  Scissors,
  Droplet,
  Footprints,
  Sunrise,
  Moon,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Care Assistance in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides compassionate personal care assistance in Calgary. Bathing, dressing, grooming, toileting, and mobility support with dignity and respect at home.",
  openGraph: {
    title: "Personal Care Assistance in Calgary | R&M Prestige Care",
    description:
      "Personal care assistance in Calgary for bathing, dressing, grooming, and toileting. In-home personal care support with dignity, privacy, and respect for seniors.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/personal-care-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Care Assistance in Calgary | R&M Prestige Care",
    description:
      "Personal care assistance in Calgary for bathing, dressing, grooming, and toileting. In-home support with dignity and respect for seniors.",
  },
};

export default function PersonalCarePage() {
  const trustCards = [
    {
      icon: Heart,
      title: "Dignified Personal Support",
      description:
        "Care delivered with respect for privacy, comfort, and personal routines.",
    },
    {
      icon: HandHelping,
      title: "Help With Daily Living",
      description:
        "Support with bathing, dressing, grooming, toileting, mobility, and hygiene.",
    },
    {
      icon: Users,
      title: "Compassionate Caregivers",
      description:
        "Care professionals selected for patience, kindness, reliability, and trust.",
    },
    {
      icon: Calendar,
      title: "Flexible Care Options",
      description:
        "Morning, evening, daily, overnight, and ongoing personal care support available.",
    },
  ];

  const signsChecklist = [
    "Difficulty bathing, showering, or staying clean",
    "Trouble dressing, grooming, or changing clothes",
    "Toileting or incontinence support needs",
    "Weakness, balance issues, or transfer concerns",
    "Increased risk of falls during daily routines",
    "Missed hygiene routines or personal care tasks",
    "Family caregivers feeling overwhelmed",
    "Need for morning, evening, or overnight care support",
  ];

  const careServices = [
    {
      icon: Droplets,
      title: "Bathing & Showering Assistance",
      description:
        "Safe and respectful help with bathing, showering, washing, drying, and maintaining personal cleanliness.",
    },
    {
      icon: Scissors,
      title: "Dressing & Grooming Support",
      description:
        "Support with dressing, hair care, shaving reminders, oral care, and daily grooming routines.",
    },
    {
      icon: Droplet,
      title: "Toileting & Incontinence Care",
      description:
        "Discreet assistance with toileting, continence care, hygiene, changing, and comfort support.",
    },
    {
      icon: Footprints,
      title: "Mobility & Transfer Assistance",
      description:
        "Help with walking, repositioning, standing, sitting, bed transfers, and safe movement around the home.",
    },
    {
      icon: Sunrise,
      title: "Bedside & Morning Care",
      description:
        "Support with getting out of bed, morning routines, personal hygiene, dressing, and starting the day safely.",
    },
    {
      icon: Moon,
      title: "Evening Routine Support",
      description:
        "Help with changing clothes, toileting, hygiene, bedtime preparation, comfort, and overnight readiness.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Personal care assistance hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Personal Care Assistance in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides compassionate personal care
                assistance in Calgary for clients who need respectful support
                with daily hygiene, bathing, dressing, grooming, toileting,
                mobility, and personal routines at home.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our caregivers provide hands-on support with patience, privacy,
                and dignity so clients can feel safe, comfortable, and cared for
                while maintaining as much independence as possible.
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
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop"
                  alt="Compassionate caregiver respectfully assisting senior with daily personal care assistance in Calgary home"
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
        aria-label="Personal care assistance features"
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

      {/* 3. WHAT IS PERSONAL CARE ASSISTANCE */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is personal care assistance"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is Personal Care Assistance?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Personal care assistance is hands-on, non-medical support with
              activities of daily living, also known as ADLs. This may include
              bathing, dressing, grooming, toileting, incontinence support,
              mobility assistance, transfers, and daily hygiene, all provided
              with dignity, privacy, and respect at home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SIGNS IT MAY BE TIME FOR PERSONAL CARE ASSISTANCE */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Signs it may be time for personal care assistance"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Signs It May Be Time for Personal Care Assistance"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              Families may notice that a loved one needs personal care when
              daily hygiene or movement becomes difficult, unsafe, or stressful.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                Common signs include:
              </p>
              <ul className="space-y-4">
                {signsChecklist.map((item, index) => (
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

      {/* 5. OUR PERSONAL CARE ASSISTANCE SERVICES IN CALGARY - 6 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our personal care assistance services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Personal Care Assistance Services in Calgary"
            subtitle="R&M Prestige Care provides personal care support built around each client's comfort, routine, dignity, and level of assistance needed."
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
            Need Personal Care Assistance in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            When daily personal routines become difficult, the right support can
            help your loved one feel safer, more comfortable, and more confident
            at home. R&M Prestige Care provides respectful personal care
            assistance for bathing, dressing, toileting, grooming, mobility, and
            daily hygiene needs — provided with patience, privacy, and dignity,
            so care feels reassuring instead of stressful. Book a free in-home
            assessment today and let our team guide you through the next step.
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
            <Button href="/contact" variant="green" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Home,
  Heart,
  Calendar,
  Shield,
  MessageCircle,
  UtensilsCrossed,
  Pill,
  Footprints,
  Sparkles,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Senior Care in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides compassionate senior care in Calgary. In-home care for seniors, aging in place support, companionship, personal care, and daily living assistance.",
  openGraph: {
    title: "Senior Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate senior care in Calgary. In-home care for aging adults with support for daily living, companionship, personal care, and aging in place.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/senior-care-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate senior care in Calgary. In-home care for aging adults with support for daily living, companionship, and aging in place.",
  },
};

export default function SeniorCarePage() {
  const trustCards = [
    {
      icon: Home,
      title: "In-Home Senior Support",
      description:
        "Care that helps seniors stay safe, comfortable, and supported at home.",
    },
    {
      icon: Heart,
      title: "Compassionate Caregivers",
      description:
        "Care professionals selected for patience, kindness, reliability, and respect.",
    },
    {
      icon: Calendar,
      title: "Flexible Care Options",
      description:
        "Hourly, daily, overnight, live-in, and 24-hour senior care options available.",
    },
    {
      icon: Shield,
      title: "Safety & Dignity First",
      description:
        "Support focused on comfort, privacy, independence, and peace of mind.",
    },
  ];

  const signsChecklist = [
    "Missed meals, medication reminders, or appointments",
    "Difficulty bathing, dressing, grooming, or toileting",
    "Increased loneliness or social isolation",
    "Mobility issues, weakness, or fall concerns",
    "A messy home, laundry buildup, or poor household upkeep",
    "Confusion, memory changes, or wandering concerns",
    "Family caregivers feeling overwhelmed",
    "Need for overnight or 24-hour supervision",
  ];

  const careServices = [
    {
      icon: MessageCircle,
      title: "Companionship Care",
      description:
        "Friendly support through conversation, activities, walks, meal companionship, and emotional encouragement.",
      link: "/companionship-care-calgary",
    },
    {
      icon: UtensilsCrossed,
      title: "Meal Support",
      description:
        "Help with meal preparation, feeding assistance, hydration reminders, and maintaining daily eating routines.",
      link: null,
    },
    {
      icon: Pill,
      title: "Medication Reminders",
      description:
        "Gentle reminders to help seniors follow their medication schedule as directed by their care plan.",
      link: null,
    },
    {
      icon: Footprints,
      title: "Mobility & Fall Prevention Support",
      description:
        "Assistance with walking, transfers, safe movement around the home, and reducing fall risks.",
      link: null,
    },
    {
      icon: Sparkles,
      title: "Light Housekeeping",
      description:
        "Support with laundry, dishes, tidying, linen changes, vacuuming, and keeping the home comfortable.",
      link: "/housekeeping-services-calgary",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Senior care hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Senior Care in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides compassionate senior care in Calgary
                for older adults who need support with daily routines, personal
                care, companionship, mobility, meals, medication reminders,
                housekeeping, and safety at home.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our senior care services help aging parents and older adults
                stay comfortable, independent, and supported in a familiar
                environment while giving families peace of mind.
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
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                  alt="Compassionate caregiver providing senior care support to happy older adult in comfortable Calgary home"
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
        aria-label="Senior care features"
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

      {/* 3. WHAT IS SENIOR CARE */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is senior care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is Senior Care?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Senior care is in-home support designed to help older adults with
              daily living, safety, companionship, mobility, meals, personal
              routines, and comfort at home. It can be helpful for seniors who
              want to age in place, families caring for an aging parent, or
              older adults who need extra support after illness, surgery, memory
              changes, or mobility challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SIGNS IT MAY BE TIME FOR SENIOR CARE */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Signs it may be time for senior care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Signs It May Be Time for Senior Care"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              Families often notice small changes before a loved one asks for
              help. Senior care may be needed when daily tasks become harder,
              safety becomes a concern, or family caregivers need more support.
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

      {/* 5. OUR SENIOR CARE SERVICES IN CALGARY - 5 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our senior care services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Senior Care Services in Calgary"
            subtitle="R&M Prestige Care provides senior care services built around each client's routine, comfort level, and support needs."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careServices.map((service, index) => {
              const Icon = service.icon;
              const cardContent = (
                <>
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </>
              );

              if (service.link) {
                return (
                  <Link
                    key={index}
                    href={service.link}
                    className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow block group"
                  >
                    <article>
                      {cardContent}
                      <div className="mt-4 text-green font-semibold text-sm group-hover:underline">
                        Learn more →
                      </div>
                    </article>
                  </Link>
                );
              }

              return (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  {cardContent}
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
            Need Senior Care in Calgary for a Loved One?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            Whether your loved one needs a few hours of weekly support, daily
            assistance, companionship, personal care, overnight care, or 24-hour
            supervision, R&M Prestige Care is ready to help. Book a free in-home
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

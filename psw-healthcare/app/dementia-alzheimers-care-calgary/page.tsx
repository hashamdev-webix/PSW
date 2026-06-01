import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Brain,
  Calendar,
  Shield,
  Heart,
  RotateCcw,
  Bell,
  Droplet,
  MessageCircle,
  UtensilsCrossed,
  Eye,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dementia & Alzheimer's Care in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides compassionate dementia and Alzheimer's home care in Calgary. Memory care support with calm routines, supervision, and safety for seniors at home.",
  openGraph: {
    title: "Dementia & Alzheimer's Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate dementia and Alzheimer's care in Calgary. Memory care support with structured routines, supervision, and safety assistance for seniors at home.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/dementia-alzheimers-care-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dementia & Alzheimer's Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate dementia and Alzheimer's care in Calgary. Memory care support with calm routines, supervision, and safety for seniors at home.",
  },
};

export default function DementiaAlzheimersCarePage() {
  const trustCards = [
    {
      icon: Brain,
      title: "Memory Care Support",
      description:
        "Structured support for clients living with Dementia, Alzheimer's, or memory-related challenges.",
    },
    {
      icon: Calendar,
      title: "Calm Daily Routines",
      description:
        "Care built around familiar routines, reassurance, comfort, and emotional stability.",
    },
    {
      icon: Shield,
      title: "Safety Supervision",
      description:
        "Support for wandering concerns, fall risks, confusion, and daily home safety.",
    },
    {
      icon: Heart,
      title: "Compassionate Caregivers",
      description:
        "Care professionals selected for patience, kindness, respect, and understanding.",
    },
  ];

  const howItHelpsChecklist = [
    "Keeping the client in familiar surroundings, routines, and spaces",
    "Reducing confusion, anxiety, agitation, and daily stress",
    "Supporting safer movement around the home",
    "Providing calm reassurance during difficult moments",
    "Helping with meals, reminders, hygiene, and daily routines",
    "Encouraging simple activities, conversation, and mental engagement",
    "Giving family caregivers dependable support and relief",
    "Helping the client feel more comfortable, respected, and secure at home",
  ];

  const careServices = [
    {
      icon: RotateCcw,
      title: "Structured Daily Routines",
      description:
        "Support with familiar daily routines that help reduce confusion and create a calmer home environment.",
    },
    {
      icon: Bell,
      title: "Memory Cues & Gentle Reminders",
      description:
        "Helpful reminders for meals, appointments, hygiene, hydration, and daily tasks without making the client feel rushed.",
    },
    {
      icon: Droplet,
      title: "Personal Care Support",
      description:
        "Respectful help with bathing, dressing, grooming, toileting, and hygiene when memory changes make daily routines harder.",
    },
    {
      icon: MessageCircle,
      title: "Reassurance",
      description:
        "Calm conversation, emotional support, activities, and presence to reduce loneliness, stress, and confusion.",
    },
    {
      icon: UtensilsCrossed,
      title: "Meal & Hydration Support",
      description:
        "Assistance with meal routines, eating reminders, hydration support, and maintaining regular daily nutrition habits.",
    },
    {
      icon: Eye,
      title: "Safety Supervision",
      description:
        "Support with fall prevention, wandering concerns, home safety, evening routines, and overnight supervision if required.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Dementia and Alzheimer's care hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Dementia & Alzheimer&apos;s Care in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides compassionate Dementia and
                Alzheimer&apos;s care in Calgary for individuals living with
                memory loss, confusion, cognitive changes, or increased safety
                needs at home.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our caregivers support clients with calm routines,
                companionship, supervision, personal care, meal support,
                mobility assistance, and daily reminders while helping families
                feel more confident about their loved one&apos;s care.
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
                  alt="Compassionate caregiver providing gentle dementia and Alzheimer's memory care support to senior client in Calgary home"
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
        aria-label="Dementia and Alzheimer's care features"
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

      {/* 3. WHAT IS DEMENTIA & ALZHEIMER'S CARE */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is dementia and Alzheimer's care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is Dementia & Alzheimer's Care?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Dementia and Alzheimer&apos;s care is non-medical home support for
              people living with memory loss, confusion, cognitive decline, or
              changes in daily functioning. It helps clients stay safer and more
              comfortable at home through structured routines, supervision,
              companionship, reminders, personal care support, and reassurance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW IN-HOME DEMENTIA CARE HELPS */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="How in-home dementia care helps"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="How In-Home Dementia Care Helps"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              For people living with Dementia or Alzheimer&apos;s, staying in a
              familiar home environment can make daily life feel calmer, safer,
              and more reassuring. In-home dementia care helps support routines,
              reduce confusion, and give families extra peace of mind.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                In-home dementia care can help by:
              </p>
              <ul className="space-y-4">
                {howItHelpsChecklist.map((item, index) => (
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

      {/* 5. OUR DEMENTIA & ALZHEIMER'S CARE SERVICES IN CALGARY - 6 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our dementia and Alzheimer's care services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Dementia & Alzheimer's Care Services in Calgary"
            subtitle="R&M Prestige Care provides Dementia and Alzheimer's care built around each client's routine, comfort level, safety needs, and stage of support."
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
            Need Dementia or Alzheimer&apos;s Care in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            When memory changes begin affecting safety, routines, or family
            caregiving, the right support can make daily life feel more
            manageable. R&M Prestige Care provides compassionate Dementia and
            Alzheimer&apos;s care built around comfort, supervision, dignity,
            and trust. Book a free in-home assessment today and let our team
            guide you through the next step.
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

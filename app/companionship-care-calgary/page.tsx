import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Heart,
  Sparkles,
  Smile,
  Calendar,
  MessageCircle,
  Coffee,
  Puzzle,
  Footprints,
  MapPin,
  Users,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Companionship Care in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides compassionate companionship care in Calgary for seniors. Reduce loneliness and isolation with friendly support, conversation, and meaningful activities.",
  openGraph: {
    title: "Companionship Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate companion care for seniors in Calgary. Friendly support, conversation, and activities to reduce loneliness and support emotional well-being at home.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/companionship-care-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Companionship Care in Calgary | R&M Prestige Care",
    description:
      "Compassionate companion care for seniors in Calgary. Reduce loneliness with friendly support, conversation, and meaningful activities at home.",
  },
};

export default function CompanionshipCarePage() {
  const trustCards = [
    {
      icon: Heart,
      title: "Friendly Companion Support",
      description:
        "Warm conversation, presence, and encouragement for clients who need social connection.",
    },
    {
      icon: Sparkles,
      title: "Meaningful Daily Activities",
      description:
        "Support with hobbies, walks, games, shared meals, and simple home routines.",
    },
    {
      icon: Smile,
      title: "Emotional Well-Being",
      description:
        "Care focused on reducing loneliness, isolation, stress, and daily discouragement.",
    },
    {
      icon: Calendar,
      title: "Flexible Visit Options",
      description:
        "Hourly, weekly, daily, and ongoing companionship care options available.",
    },
  ];

  const whyItMattersChecklist = [
    "Reducing loneliness and social isolation",
    "Encouraging conversation and emotional connection",
    "Supporting hobbies, games, music, reading, or light activities",
    "Helping with shared meals and daily routines",
    "Providing friendly reminders and encouragement",
    "Supporting safe walks or light movement around the home",
    "Giving families peace of mind when they cannot always be present",
  ];

  const companionshipServices = [
    {
      icon: MessageCircle,
      title: "Conversation & Social Support",
      description:
        "Friendly conversation, listening, encouragement, and regular presence to help clients feel connected.",
    },
    {
      icon: Coffee,
      title: "Shared Meals & Daily Routines",
      description:
        "Support during meals, light routines, hydration reminders, and gentle daily encouragement.",
    },
    {
      icon: Puzzle,
      title: "Activities & Hobbies",
      description:
        "Help with reading, music, puzzles, games, crafts, gardening, or other familiar interests.",
    },
    {
      icon: Footprints,
      title: "Walks & Light Movement",
      description:
        "Support for safe walks, light activity, and staying gently engaged when appropriate.",
    },
    {
      icon: MapPin,
      title: "Appointment & Errand Companionship",
      description:
        "Companionship for appointments, errands, outings, or simple community activities when arranged.",
    },
    {
      icon: Users,
      title: "Family Respite Support",
      description:
        "Dependable companionship that gives family caregivers time to rest, work, or manage other responsibilities.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Companionship care hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Companionship Care in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides compassionate companionship care in
                Calgary for seniors and adults who need friendly support,
                conversation, encouragement, and help staying connected at home.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our companion caregivers help reduce loneliness, support daily
                routines, encourage meaningful activities, and give families
                peace of mind knowing their loved one has regular social and
                emotional support.
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
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&h=600&fit=crop"
                  alt="Compassionate caregiver companion sharing conversation and friendly support with senior client in Calgary home"
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
        aria-label="Companionship care features"
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

      {/* 3. WHAT IS COMPANIONSHIP CARE */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is companionship care"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is Companionship Care?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Companionship care is non-medical support focused on social
              connection, emotional well-being, and daily encouragement. It
              helps seniors and adults who may feel lonely, isolated, or less
              engaged at home by providing conversation, activities, shared
              routines, light assistance, and friendly presence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY COMPANIONSHIP CARE MATTERS */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Why companionship care matters"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Companionship Care Matters"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              Loneliness and isolation can affect a senior&apos;s mood,
              confidence, routine, and overall quality of life. Regular
              companionship can help clients feel more connected, supported, and
              motivated throughout the day.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                Companionship care can help by:
              </p>
              <ul className="space-y-4">
                {whyItMattersChecklist.map((item, index) => (
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

      {/* 5. OUR COMPANIONSHIP CARE SERVICES IN CALGARY - 6 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our companionship care services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Companionship Care Services in Calgary"
            subtitle="R&M Prestige Care provides companionship care built around each client's personality, routine, interests, comfort level, and family preferences."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companionshipServices.map((service, index) => {
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
            Need Companionship Care in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            When a loved one feels lonely, isolated, or needs more regular
            social support at home, companionship care can make daily life feel
            more positive and reassuring. R&M Prestige Care provides
            compassionate companion support built around comfort, connection,
            dignity, and trust. Book a free in-home assessment today and let our
            team guide you through the next step.
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

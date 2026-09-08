"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  MapPin,
  UserCheck,
  Calendar,
  Shield,
  Users,
  HandHelping,
  Brain,
  Clock,
  Heart,
  Sparkles,
  Check,
  ChevronDown,
} from "lucide-react";

// FAQ data for this page
const faqData = [
  {
    question: "Who needs home care services?",
    answer:
      "Home care may be helpful for seniors, adults recovering from surgery, people living with disabilities, individuals with memory loss, and families who need extra support caring for a loved one at home.",
  },
  {
    question: "How do I start home care in Calgary?",
    answer:
      "You can start by contacting R&M Prestige Care and booking a free in-home assessment. Our team will ask about the client's needs, preferred schedule, location, and type of care required, then guide you toward the right support option.",
  },
  {
    question: "Do you provide personal care assistance?",
    answer:
      "Yes. R&M Prestige Care provides personal care assistance such as bathing, dressing, grooming, toileting, mobility support, transfers, repositioning, bedside care, and daily routine support.",
  },
  {
    question: "Do you provide housekeeping with home care?",
    answer:
      "Yes. Light housekeeping can be included as part of home care support. This may include laundry, dishes, vacuuming, dusting, linen changes, light kitchen cleaning, bathroom tidying, and general home organization.",
  },
  {
    question: "Can the care plan be customized?",
    answer:
      "Yes. Home care can be customized based on the client's routine, condition, comfort level, schedule, and family preferences.",
  },
];

export default function HomeCareCalgaryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const trustCards = [
    {
      icon: MapPin,
      title: "Calgary-Based Home Care",
      description:
        "Local in-home care support for seniors, families, and private clients across Calgary.",
    },
    {
      icon: UserCheck,
      title: "Screened Care Professionals",
      description:
        "Caregivers selected for compassion, reliability, patience, and experience.",
    },
    {
      icon: Calendar,
      title: "Flexible Care Options",
      description:
        "Hourly, daily, overnight, live-in, and 24-hour care options available.",
    },
    {
      icon: Shield,
      title: "Insured & Accountable",
      description:
        "Caregivers are screened, reference-checked, and covered under company insurance and WCB.",
    },
  ];

  const whoWeHelpLeft = [
    "Seniors who want to age safely at home",
    "Adults recovering after surgery or hospital discharge",
    "Individuals with disabilities who need daily living support",
  ];

  const whoWeHelpRight = [
    "Families caring for a parent or loved one",
    "Clients who need personal care, companionship, or supervision",
    "People who need overnight or 24-hour home care support",
  ];

  const homeServices = [
    {
      icon: Users,
      title: "Senior Care",
      description:
        "Support for seniors who need help with daily routines, mobility, meals, companionship, and safety at home. Our care helps older adults stay comfortable, independent, and supported in a familiar environment.",
      link: "/senior-care-calgary",
    },
    {
      icon: HandHelping,
      title: "Personal Care Assistance",
      description:
        "Respectful support with bathing, dressing, grooming, toileting, transfers, and other personal daily needs. Care is provided with patience, privacy, dignity, and attention to each client's comfort.",
      link: "/personal-care-calgary",
    },
    {
      icon: Brain,
      title: "Dementia & Alzheimer's Care",
      description:
        "Calm and structured support for clients living with memory loss, confusion, or cognitive decline. Caregivers help with routines, supervision, reassurance, companionship, and daily activities at home.",
      link: "/dementia-alzheimers-care-calgary",
    },
    {
      icon: Clock,
      title: "24-Hour & Overnight Care",
      description:
        "Overnight supervision and around-the-clock care for clients who need extra safety and support. This service helps families feel confident when a loved one needs assistance during the night or full-day care.",
      link: "/24-hour-overnight-care-calgary",
    },
    {
      icon: Heart,
      title: "Companionship Care",
      description:
        "Friendly emotional support for clients who may feel lonely, isolated, or need daily encouragement. Care may include conversation, walks, hobbies, meal companionship, appointments, and routine support.",
      link: "/companionship-care-calgary",
    },
    {
      icon: Sparkles,
      title: "Housekeeping Services",
      description:
        "Light housekeeping support to help keep the home clean, safe, organized, and comfortable. Services may include laundry, dishes, tidying, linen changes, vacuuming, and general home organization.",
      link: "/housekeeping-services-calgary",
    },
  ];

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* 1. HERO SECTION */}
        <section
          className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
          aria-label="Home care services hero section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                  Home Care Services in Calgary
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  R&M Prestige Care provides reliable home care services in
                  Calgary for people who need help living safely and comfortably
                  at home. Our care professionals support seniors, recovering
                  patients, individuals with disabilities, and families with
                  personal care, companionship, meal support, medication
                  reminders, mobility assistance, light housekeeping, dementia
                  care, overnight supervision, and 24-hour care options.
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
                    alt="Compassionate caregiver providing home care services to senior client in Calgary home"
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
          aria-label="Home care features"
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

        {/* 3. WHAT IS HOME CARE */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="What is home care"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="What Is Home Care?"
                className="mb-8"
                centered
              />
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                Home care is non-medical support provided at home to help
                seniors, recovering adults, individuals with disabilities, and
                people with daily living needs stay safe, comfortable, and
                independent. It may include help with personal care, meals,
                medication reminders, mobility, companionship, light
                housekeeping, overnight supervision, and daily routines,
                depending on the client&apos;s needs.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHO OUR HOME CARE SERVICES HELP */}
        <section
          className="py-16 md:py-20 bg-navy-50"
          aria-label="Who our home care services help"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Who Our Home Care Services Help"
                className="mb-8"
                centered
              />
              <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
                We provide home care support for people who need safe, reliable,
                and compassionate assistance at home.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg font-semibold text-navy mb-6">
                  We support:
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <ul className="space-y-4">
                    {whoWeHelpLeft.map((item, index) => (
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
                    {whoWeHelpRight.map((item, index) => (
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

        {/* 5. OUR HOME CARE SERVICES IN CALGARY - 6 LINKED CARDS */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="Our home care services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Home Care Services in Calgary"
              subtitle="R&M Prestige Care provides home care services in Calgary designed to help seniors, adults, and families receive safe, respectful, and reliable support at home."
              className="mb-12"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {homeServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.link}
                    className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow block group"
                  >
                    <article>
                      <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="text-green font-semibold text-sm group-hover:underline">
                        Learn more →
                      </div>
                    </article>
                  </Link>
                );
              })}
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
                R&M Prestige Care helps Calgary families arrange reliable home
                care support for seniors, recovering adults, and loved ones who
                need daily assistance at home. Our team provides personal care,
                companionship, housekeeping, overnight care, and 24-hour support
                with a focus on safety, comfort, dignity, and dependable
                service. We make home care easier to arrange and built around
                your loved one&apos;s routine, needs, and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* 7. A SIMPLE INTAKE PROCESS FOR FAMILIES */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="A simple intake process for families"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="A Simple Intake Process for Families"
                className="mb-8"
                centered
              />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Starting home care can feel overwhelming, especially when
                  support is needed quickly. R&M Prestige Care makes the process
                  easier by guiding families step by step. During the intake
                  process, our team may ask about the client&apos;s current
                  condition, daily routine, mobility, personal care needs,
                  medication reminders, meal support, safety concerns, home
                  environment, and preferred care schedule.
                </p>
                <p>
                  This helps us recommend the right level of care and arrange
                  support that feels safe, respectful, and practical for the
                  client and family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FREQUENTLY ASKED QUESTIONS */}
        <section
          className="py-16 md:py-20 bg-navy-50"
          aria-label="Frequently asked questions"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked Questions"
              centered
              className="mb-12"
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-50 transition-colors"
                    aria-expanded={openFaqIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-bold text-navy pr-4 font-heading">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-navy flex-shrink-0 transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div id={`faq-answer-${index}`} className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA BAND */}
        <section
          className="py-16 md:py-20 bg-navy text-white"
          aria-label="Call to action"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Start Home Care in Calgary with R&M Prestige Care
            </h2>
            <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
              Whether your loved one needs a few hours of weekly support, daily
              assistance, companionship, personal care, overnight care, or
              24-hour supervision, R&M Prestige Care is ready to help. Book a
              free in-home assessment today and let our team guide you through
              the next step.
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
    </>
  );
}

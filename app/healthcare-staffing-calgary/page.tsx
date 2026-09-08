"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Clock,
  Award,
  Calendar,
  Shield,
  Building2,
  Users,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";

// FAQ data for this page
const faqData = [
  {
    question: "What types of facilities do you support?",
    answer:
      "R&M Prestige Care supports care homes, assisted living facilities, retirement residences, group homes, hospitals, rehabilitation settings, and healthcare support environments in Calgary.",
  },
  {
    question: "How are your Healthcare Aides screened and verified?",
    answer:
      "R&M Prestige Care verifies credentials, checks references, and conducts background screening on all Healthcare Aides before placement, ensuring facilities receive qualified, dependable care professionals.",
  },
  {
    question: "Can we request short-notice staffing support?",
    answer:
      "Yes. Facilities can request short-notice or emergency staffing support depending on staff availability, shift timing, role requirements, and location.",
  },
  {
    question: "How quickly can you cover an emergency shift?",
    answer:
      "R&M Prestige Care helps Calgary facilities cover short-notice and emergency shifts as quickly as possible, depending on staff availability, shift timing, and role requirements. Contact us to discuss your urgent staffing needs.",
  },
  {
    question: "Can we request ongoing staffing support?",
    answer:
      "Yes. Facilities can request recurring, scheduled, short-term, or long-term staffing support depending on their care needs and staffing requirements.",
  },
];

export default function HealthcareStaffingCalgaryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const trustCards = [
    {
      icon: Clock,
      title: "Rapid Shift Coverage",
      description:
        "Support for urgent call-outs, sick leave, vacation gaps, and short-notice staffing needs.",
    },
    {
      icon: Award,
      title: "Certified HCA Support",
      description:
        "Healthcare Aides available to help with resident care, daily routines, mobility, and supervision.",
    },
    {
      icon: Calendar,
      title: "Flexible Facility Staffing",
      description:
        "Temporary, casual, overnight, weekend, emergency, and scheduled shift coverage options.",
    },
    {
      icon: Shield,
      title: "Screened & Accountable Staff",
      description:
        "Care professionals are screened, reference-checked, and supported by company insurance and WCB.",
    },
  ];

  const whoWeSupportLeft = [
    "Care homes that need dependable shift coverage",
    "Assisted living facilities managing resident care needs",
    "Retirement residences needing extra care support",
  ];

  const whoWeSupportRight = [
    "Group homes requiring trained support workers",
    "Hospitals and healthcare environments needing care assistance",
    "Facilities needing temporary, emergency, or ongoing staffing support",
  ];

  const staffingServices = [
    {
      icon: Building2,
      title: "Healthcare Staffing Services",
      description:
        "Flexible staffing support for Calgary healthcare facilities that need trained caregivers, Healthcare Aides, or support workers. We help care environments manage staffing gaps, resident care needs, scheduled coverage, and ongoing support requirements.",
      link: "/healthcare-staffing-calgary",
    },
    {
      icon: Users,
      title: "HCA Staffing",
      description:
        "Certified Healthcare Aide staffing for facilities that need trained HCAs to support residents with daily living, mobility, supervision, personal care routines, and care team assistance. This service is ideal for care homes, assisted living facilities, and retirement residences.",
      link: "/hca-staffing-calgary",
    },
    {
      icon: Zap,
      title: "Temporary & Shift Staffing",
      description:
        "Short-term and scheduled shift coverage for facilities dealing with call-outs, sick leave, vacation gaps, increased workload, emergency needs, or temporary staffing shortages. We help facilities cover shifts without disrupting care quality.",
      link: "/temporary-shift-staffing-calgary",
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
          aria-label="Healthcare staffing services hero section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                  Healthcare Staffing Services in Calgary
                </h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  R&M Prestige Care provides reliable healthcare staffing
                  services in Calgary for care homes, assisted living
                  facilities, retirement residences, hospitals, group homes, and
                  healthcare support environments. Our team helps facilities
                  fill staffing gaps with dependable caregivers and certified
                  Healthcare Aides for short-term coverage, scheduled shifts,
                  emergency staffing needs, and ongoing care team support.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Whether your facility needs one shift covered or ongoing
                  staffing support, we help you maintain safe, consistent, and
                  respectful care for residents, patients, and clients.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="green" size="lg">
                    Request Staffing Support
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
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                    alt="Healthcare professionals and care team providing staffing support in Calgary healthcare facility"
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
          aria-label="Healthcare staffing features"
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

        {/* 3. WHAT IS HEALTHCARE STAFFING */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="What is healthcare staffing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="What Is Healthcare Staffing?"
                className="mb-8"
                centered
              />
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                Healthcare staffing helps facilities fill care team gaps with
                trained caregivers, Healthcare Aides, and support workers when
                extra coverage is needed. It can support staff call-outs, sick
                leaves, vacation coverage, temporary shortages, increased care
                needs, emergency shifts, overnight coverage, and long-term
                staffing requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHO OUR HEALTHCARE STAFFING SERVICES SUPPORT */}
        <section
          className="py-16 md:py-20 bg-navy-50"
          aria-label="Who our healthcare staffing services support"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Who Our Healthcare Staffing Services Support"
                className="mb-8"
                centered
              />
              <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
                R&M Prestige Care provides staffing support for facilities that
                need reliable, qualified, and compassionate care professionals.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg font-semibold text-navy mb-6">
                  We support:
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <ul className="space-y-4">
                    {whoWeSupportLeft.map((item, index) => (
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
                    {whoWeSupportRight.map((item, index) => (
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

        {/* 5. OUR HEALTHCARE STAFFING SERVICES IN CALGARY - 3 LINKED CARDS */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="Our healthcare staffing services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Healthcare Staffing Services in Calgary"
              subtitle="R&M Prestige Care provides healthcare staffing services in Calgary designed to help facilities maintain safe, reliable, and consistent care coverage. Our staffing services focus on facility needs, resident support, shift reliability, and care team continuity."
              className="mb-12"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {staffingServices.map((service, index) => {
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
                R&M Prestige Care helps Calgary healthcare facilities fill
                staffing gaps with reliable caregivers and certified Healthcare
                Aides. Our team supports short-notice shifts, temporary
                staffing, HCA coverage, and ongoing care support with a focus on
                safety, dignity, and dependable service. We make staffing
                support simple, responsive, and built around the needs of your
                care environment.
              </p>
            </div>
          </div>
        </section>

        {/* 7. A SIMPLE STAFFING REQUEST PROCESS FOR FACILITIES */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-label="A simple staffing request process for facilities"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="A Simple Staffing Request Process for Facilities"
                className="mb-8"
                centered
              />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Requesting healthcare staffing support should feel clear,
                  quick, and reliable. R&M Prestige Care makes the process
                  easier by helping facilities explain their staffing needs,
                  shift requirements, and level of care support required.
                </p>
                <p>
                  During the request process, our team may ask about your
                  facility type, role needed, shift date and time, location,
                  urgency, care environment, and any important resident or
                  patient support needs.
                </p>
                <p>
                  This helps us arrange suitable caregivers or certified
                  Healthcare Aides and provide staffing support that fits your
                  facility&apos;s schedule, standards, and care needs.
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
              Need Healthcare Staffing Support in Calgary?
            </h2>
            <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
              Whether your facility needs urgent shift coverage, certified
              Healthcare Aides, or ongoing staffing support, R&M Prestige Care
              is ready to help. Request staffing support today and let our team
              arrange dependable coverage for your care environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="green" size="lg">
                Request Staffing Support
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
    </>
  );
}

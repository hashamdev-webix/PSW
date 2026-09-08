import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Users,
  Calendar,
  Shield,
  Heart,
  Stethoscope,
  ClipboardList,
  Building2,
  FileText,
  UserCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Temporary Shift Staffing in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides reliable temporary shift staffing for healthcare facilities in Calgary — RNs, LPNs, HCAs, and specialized care staff, available on short notice.",
  openGraph: {
    title: "Temporary Shift Staffing in Calgary | R&M Prestige Care",
    description:
      "Reliable and flexible healthcare staffing solutions to keep your facility fully supported, when you need it most.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/temporary-shift-staffing-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporary Shift Staffing in Calgary | R&M Prestige Care",
    description:
      "Reliable and flexible healthcare staffing solutions to keep your facility fully supported, when you need it most.",
  },
};

export default function TemporaryShiftStaffingPage() {
  const heroFeatures = [
    { icon: Shield, label: "Trusted Professionals" },
    { icon: Calendar, label: "Flexible Scheduling" },
    { icon: Users, label: "Quick Placement" },
  ];

  const trustCards = [
    {
      icon: UserCheck,
      title: "Skilled and Vetted Staff",
      description: "Qualified healthcare professionals ready to step in.",
    },
    {
      icon: Calendar,
      title: "Short and Long Term Coverage",
      description: "From a single shift to ongoing support.",
    },
    {
      icon: Shield,
      title: "Support for Multiple Facilities",
      description: "Hospitals, clinics, long-term care and more.",
    },
    {
      icon: Heart,
      title: "Your Partner in Care",
      description: "We are here to make staffing simple and stress-free.",
    },
  ];

  const staffingServices = [
    {
      icon: Stethoscope,
      title: "Registered Nurses (RNs)",
      description: "Skilled professionals for clinical and non-clinical settings.",
    },
    {
      icon: Heart,
      title: "Licensed Practical Nurses (LPNs)",
      description: "Reliable support for patient care and daily operations.",
    },
    {
      icon: Users,
      title: "Healthcare Aides (HCAs)",
      description: "Compassionate help with daily living and personal care.",
    },
    {
      icon: ClipboardList,
      title: "Specialized Care Staff",
      description: "Including dementia care, mental health support and more.",
    },
    {
      icon: Calendar,
      title: "Short and Long Term Shifts",
      description: "From single shifts to extended assignments.",
    },
    {
      icon: Building2,
      title: "Multiple Facility Support",
      description: "Hospitals, clinics, long-term care and community facilities.",
    },
  ];

  const whyChooseUs = [
    { icon: UserCheck, label: "Experienced Professionals" },
    { icon: Calendar, label: "Fast and Reliable Service" },
    { icon: Users, label: "Flexible Solutions" },
    { icon: Heart, label: "Dedicated Support" },
  ];

  const processSteps = [
    {
      icon: FileText,
      title: "Submit Your Request",
      description: "Tell us your staffing needs and shift details.",
    },
    {
      icon: Users,
      title: "We Match Professionals",
      description: "We quickly connect you with qualified candidates.",
    },
    {
      icon: CheckCircle2,
      title: "Staff Arrives",
      description: "Our team confirms and prepares the staff for your facility.",
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "We stay in touch to ensure everything runs smoothly.",
    },
  ];

  const testimonials = [
    {
      quote:
        "R&M Prestige Care has been an incredible partner. Their staff are professional, compassionate, and always ready when we need them.",
      name: "Sarah Mitchell",
      role: "Facility Manager, Calgary",
    },
    {
      quote:
        "The team is responsive, easy to work with, and consistently provides high-quality staff. We could not be happier with their support.",
      name: "James Carter",
      role: "Operations Director",
    },
    {
      quote:
        "Reliable, professional, and caring — that is R&M Prestige Care. They truly go above and beyond for their clients and staff.",
      name: "Lisa Thompson",
      role: "Clinical Supervisor",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Temporary shift staffing hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold text-blue tracking-wide mb-3">
                Temporary Shift Staffing
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Temporary Shift Staffing{" "}
                <span className="text-blue">in Calgary</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Reliable and flexible healthcare staffing solutions to keep
                your facility fully supported — when you need it most.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg bg-navy transition-colors text-base"
                >
                  Request Staff
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg border border-slate-300 hover:bg-navy-50 transition-colors text-base"
                >
                  Learn More
                </Link>
              </div>

              {/* Feature row */}
              <div className="flex flex-wrap gap-6">
                {heroFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-blue" />
                      <span className="text-sm font-medium text-slate-600">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                  alt="Healthcare staffing professional ready to support Calgary facilities"
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

      {/* Trust Block - 4 Icon Cards */}
      <section
        className="py-10 bg-navy-50"
        aria-label="Temporary staffing features"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy font-heading">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Right People, Right When You Need Them */}
      <section className="py-16 md:py-20 bg-white" aria-label="Our temporary staffing services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-blue tracking-wide mb-3">
                Our Temporary Staffing Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6 leading-tight">
                The Right People, Right When You Need Them
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We provide experienced and compassionate healthcare
                professionals for temporary shifts, helping you maintain
                high-quality care and operational stability.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-blue transition-colors text-base"
              >
                Get Started
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop"
                alt="Calgary skyline representing the healthcare communities R and M Prestige Care supports"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Healthcare Staffing - 6 Cards */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Our temporary staffing services list"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Flexible Healthcare Staffing for Every Need"
            subtitle="Whether you need short-term coverage or long-term support, we connect you with skilled professionals who fit your facility's needs — quickly and efficiently."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {staffingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-8 h-8 bg-blue rounded-full text-white hover:bg-navy transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-navy text-white" aria-label="Why choose us">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Caregiver supporting an older adult client"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold text-blue-200 tracking-wide mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 leading-tight">
                Your Trusted Partner in Healthcare Staffing
              </h2>
              <p className="text-lg text-navy-100 mb-8 leading-relaxed">
                We are more than just a staffing agency — we are a team that
                cares. Our focus is on quality, reliability, and people. We
                work closely with your facility to ensure the right fit,
                every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-navy-100">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting the Right Staff is Easy - Process */}
      <section className="py-16 md:py-20 bg-white" aria-label="Our simple process">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <p className="text-sm font-bold text-blue tracking-wide mb-3">
                Our Simple Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6 leading-tight">
                Getting the Right Staff is Easy
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We make the staffing process simple and stress-free, so you
                can focus on what matters most — your patients.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-navy transition-colors text-base"
              >
                Request Staff
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col">
                    <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue" />
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden sm:block h-px bg-slate-200 mt-6 sm:hidden" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-navy-50" aria-label="Client testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Healthcare Facilities Across Calgary"
            subtitle="We are proud to support healthcare teams with reliable staffing solutions. Here is what some of our partners have to say."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <Quote className="w-6 h-6 text-blue mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
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
                Let us help you find the right healthcare professionals —
                quickly, reliably, and with care.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-navy-50 transition-colors text-base"
              >
                Request Staff
              </Link>
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
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  ChevronRight,
  UserRound,
  HeartHandshake,
  BrainCircuit,
  Home,
  Users,
  ShieldPlus,
  ArrowRight,
  Heart,
  Clock,
  MessageCircle,
  ClipboardList,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | R&M Prestige Care",
  description:
    "Compassionate care, professional support, and personalized services from R&M Prestige Care — senior care, personal care, dementia care, home care, and healthcare staffing.",
  openGraph: {
    title: "Our Services | R&M Prestige Care",
    description:
      "Compassionate care, professional support, and personalized services to help you or your loved ones live a healthier, safer and more independent life.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | R&M Prestige Care",
    description:
      "Compassionate care, professional support, and personalized services to help you or your loved ones live a healthier, safer and more independent life.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: UserRound,
      title: "Senior Care",
      description:
        "Compassionate and respectful care for seniors, helping them maintain dignity, comfort and independence.",
      link: "/senior-care-calgary",
    },
    {
      icon: HeartHandshake,
      title: "Personal Care",
      description:
        "Assistance with daily living activities including bathing, dressing, grooming and mobility support.",
      link: "/personal-care-calgary",
    },
    {
      icon: BrainCircuit,
      title: "Dementia and Alzheimer's Care",
      description:
        "Specialized care and support for individuals with dementia and Alzheimer's, with patience, understanding and compassion.",
      link: "/dementia-alzheimers-care-calgary",
    },
    {
      icon: Home,
      title: "Home Care",
      description:
        "Professional care delivered in the comfort of your home, tailored to your lifestyle and needs.",
      link: "/home-care-calgary",
    },
    {
      icon: Users,
      title: "Healthcare Staffing",
      description:
        "Reliable and qualified healthcare professionals to support hospitals, clinics and long-term care facilities.",
      link: "/temporary-shift-staffing-calgary",
    },
    {
      icon: ShieldPlus,
      title: "Certified HCA Staffing",
      description:
        "Skilled and certified Health Care Aides (HCAs) ready to provide quality care and support.",
      link: "/hca-staffing-calgary",
    },
  ];

  const whyChooseUs = [
    { icon: UserRound, label: "Experienced and Trained Staff" },
    { icon: Heart, label: "Compassionate Approach" },
    { icon: Heart, label: "Personalized Care Plans" },
    { icon: Clock, label: "24/7 Support" },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Contact Us",
      description:
        "Reach out to us for a free consultation and needs assessment.",
    },
    {
      icon: ClipboardList,
      title: "Customized Plan",
      description: "We create a personalized care plan based on your needs.",
    },
    {
      icon: UsersRound,
      title: "Our Team Steps In",
      description:
        "We match you with the right caregivers and professionals.",
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description:
        "We regularly monitor and ensure you are always satisfied.",
    },
  ];

  return (
    <main>
      {/* Breadcrumb + Hero */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-12 md:py-16"
        aria-label="Our services hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-blue transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-navy font-medium">Services</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy font-heading mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Compassionate care, professional support, and personalized
                services to help you or your loved ones live a healthier,
                safer and more independent life.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&h=600&fit=crop"
                alt="Caregiver spending time with a senior client at home"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Services - 6 Cards */}
      <section className="py-16 md:py-20 bg-white" aria-label="Our services list">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Care Services"
            subtitle="We offer a wide range of services designed to meet your unique needs and provide the highest quality of care."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="pb-16 md:pb-20 bg-white" aria-label="Why choose our services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-navy-50">
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop"
                alt="Caregiver sharing a warm moment with a senior client"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm font-bold text-blue tracking-wide mb-3">
                Why Choose Our Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-4 leading-tight">
                Care You Can Count On
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
                At R and M Prestige Care, we are committed to delivering
                compassionate, professional and reliable care. Our goal is to
                make a positive difference in your life and the lives of your
                loved ones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-blue" />
                      </div>
                      <span className="text-sm font-medium text-navy">
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

      {/* Getting Started is Easy - Process */}
      <section className="py-16 md:py-20 bg-navy-50" aria-label="Our care process">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Care Process"
            title="Getting Started is Easy"
            className="mb-14"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {index < processSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-6 -right-7 w-5 h-5 text-slate-300" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
                    <Icon className="w-6 h-6 text-blue" />
                    <span className="absolute -top-1 -left-1 w-6 h-6 bg-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12 md:py-16 bg-navy" aria-label="Call to action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-900/50 border border-white/10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-bold text-blue-200 tracking-wider mb-3">
                READY TO GET STARTED?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-2">
                Quality Care is Just a Call Away
              </h2>
              <p className="text-navy-100 leading-relaxed">
                Let us help you or your loved ones get the care and support
                you deserve.
              </p>
            </div>

            <Button href="/contact" variant="white" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
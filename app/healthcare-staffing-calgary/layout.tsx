import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Healthcare Staffing Services in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides reliable healthcare staffing services in Calgary. HCA staffing, shift coverage, and care home staffing for facilities needing dependable care professionals.",
  alternates: {
    canonical: `${siteUrl}/healthcare-staffing-calgary`,
  },
  openGraph: {
    title: "Healthcare Staffing Services in Calgary | R&M Prestige Care",
    description:
      "Reliable healthcare staffing services in Calgary for care homes and facilities. HCA staffing, shift coverage, and emergency staffing support for healthcare environments.",
    url: `${siteUrl}/healthcare-staffing-calgary`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Staffing Services in Calgary | R&M Prestige Care",
    description:
      "Reliable healthcare staffing services in Calgary. HCA staffing, shift coverage, and care home staffing for facilities.",
  },
};

export default function HealthcareStaffingCalgaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

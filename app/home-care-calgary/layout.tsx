import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Home Care Services in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides reliable home care services in Calgary. In-home care for seniors, personal care, companionship, dementia care, overnight care, and 24-hour support.",
  alternates: {
    canonical: `${siteUrl}/home-care-calgary`,
  },
  openGraph: {
    title: "Home Care Services in Calgary | R&M Prestige Care",
    description:
      "Reliable home care services in Calgary for seniors and adults. Personal care, companionship, dementia care, overnight supervision, and 24-hour in-home support.",
    url: `${siteUrl}/home-care-calgary`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Services in Calgary | R&M Prestige Care",
    description:
      "Reliable home care services in Calgary for seniors. Personal care, companionship, dementia care, and 24-hour in-home support.",
  },
};

export default function HomeCareCalgaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

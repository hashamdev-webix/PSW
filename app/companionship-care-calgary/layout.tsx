import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/companionship-care-calgary`,
  },
};

export default function CompanionshipCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

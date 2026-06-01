import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/senior-care-calgary`,
  },
};

export default function SeniorCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

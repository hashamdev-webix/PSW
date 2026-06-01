import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/dementia-alzheimers-care-calgary`,
  },
};

export default function DementiaAlzheimersCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

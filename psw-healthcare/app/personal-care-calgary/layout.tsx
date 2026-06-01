import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/personal-care-calgary`,
  },
};

export default function PersonalCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "SEO Title",
  keywords: ["SEO", "Title"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}

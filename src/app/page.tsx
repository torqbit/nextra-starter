"use client";

import Companies from "@/components/LandingPage/Companies";
import Features from "@/components/LandingPage/Features";
import Hero from "@/components/LandingPage/Hero";
import Pricing from "@/components/LandingPage/Pricing";
import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import { CompanyProps, FeatureItems, HeroProps, PricingProps } from "@/lib/props";
import { CTA } from "@/components/LandingPage/CTA";

export default function Home() {
  return (
    <LandingPageLayout>
      <Hero {...HeroProps} />
      <Companies {...CompanyProps} />
      <Features {...FeatureItems} />
      <Pricing {...PricingProps} />
      <CTA />
    </LandingPageLayout>
  );
}

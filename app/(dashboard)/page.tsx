"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { WaitlistFormProvider } from "@/components/waitlist-form-context";

export default function HomePage() {
  return (
    <WaitlistFormProvider>
      <main>
        <HeroSection />
        <ComparisonTable />
        <HowItWorks />
        <Features />
        <FAQ />
        <Footer />
      </main>
    </WaitlistFormProvider>
  );
}

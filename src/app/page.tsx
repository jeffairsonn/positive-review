"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports with suspense fallbacks
const HeroSection = dynamic(() => import("./components/HeroSection"), {
  loading: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      Chargement...
    </div>
  ),
});

const HowItWorksSection = dynamic(
  () => import("./components/HowItWorksSection"),
  {
    loading: () => (
      <div className="py-20 flex items-center justify-center">
        Chargement...
      </div>
    ),
  }
);

const BenefitsSection = dynamic(() => import("./components/BenefitsSection"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">Chargement...</div>
  ),
});

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  {
    loading: () => (
      <div className="py-20 flex items-center justify-center">
        Chargement...
      </div>
    ),
  }
);

const PricingSection = dynamic(() => import("./components/PricingSection"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">Chargement...</div>
  ),
});

const FAQSection = dynamic(() => import("./components/FAQSection"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">Chargement...</div>
  ),
});

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">Chargement...</div>
  ),
});

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-background text-foreground">
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <HeroSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <HowItWorksSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <BenefitsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <TestimonialsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <PricingSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <FAQSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Chargement...
          </div>
        }
      >
        <ContactSection />
      </Suspense>
    </main>
  );
}

import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CountersSection = lazy(() => import("@/components/CountersSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const StepsSection = lazy(() => import("@/components/StepsSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Carregando...</div>}>
        <CountersSection />
        <FeaturesSection />
        <StepsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactForm />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

import { HeroSection } from "@/components/premium/HeroSection";
import { BusinessModels } from "@/components/premium/BusinessModels";
import { WhyHoreca } from "@/components/premium/WhyHoreca";
import { HowItWorks } from "@/components/premium/HowItWorks";
import { UseCases } from "@/components/premium/UseCases";
import { WhyToyam } from "@/components/premium/WhyToyam";
import { SocialProof } from "@/components/premium/SocialProof";
import { ContactForm } from "@/components/premium/ContactForm";

export default function FreeToyamPremium() {
  return (
    <>
      <HeroSection />
      <BusinessModels />
      <WhyHoreca />
      <HowItWorks />
      <UseCases />
      <WhyToyam />
      <SocialProof />
      <ContactForm />
    </>
  );
}

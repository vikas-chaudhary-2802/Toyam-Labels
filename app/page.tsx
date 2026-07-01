import { HeroSection } from "@/components/premium/HeroSection";
import dynamic from 'next/dynamic';

const BusinessModels = dynamic(() => import('@/components/premium/BusinessModels').then(mod => mod.BusinessModels));
const WhyHoreca = dynamic(() => import('@/components/premium/WhyHoreca').then(mod => mod.WhyHoreca));
const HowItWorks = dynamic(() => import('@/components/premium/HowItWorks').then(mod => mod.HowItWorks));
const UseCases = dynamic(() => import('@/components/premium/UseCases').then(mod => mod.UseCases));
const WhyToyam = dynamic(() => import('@/components/premium/WhyToyam').then(mod => mod.WhyToyam));
const SocialProof = dynamic(() => import('@/components/premium/SocialProof').then(mod => mod.SocialProof));
const Pricing = dynamic(() => import('@/components/premium/Pricing').then(mod => mod.Pricing));
const ContactForm = dynamic(() => import('@/components/premium/ContactForm').then(mod => mod.ContactForm));

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
      <Pricing />
      <ContactForm />
    </>
  );
}

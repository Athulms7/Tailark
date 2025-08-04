import Hero from "./_components/Hero";
import TrustedCompanies from "./_components/trustedcompanies";
import PremiumPricingSection from "./_components/pricing2";
import TestimonialSection from "./_components/customer";
import Footer from "./_components/footer";
import FeatureSection from "./_components/featuresection";
import { PremiumFAQ } from "./_components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FeatureSection />
      <PremiumPricingSection />
      <TestimonialSection />
      <PremiumFAQ />
      <Footer />
    </>
  );
}

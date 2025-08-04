import Image from "next/image";
import Hero from "./_components/Hero";
import TrustedCompanies from "./_components/trustedcompanies";
import PremiumPricingSection from "./_components/pricing2";
import AnimatedTestimonials from "./_components/customer";
import TestimonialSection from "./_components/customer";
import Footer from "./_components/footer";


export default function Home() {
  return (<>
    <Hero/>
    <TrustedCompanies/>
    <PremiumPricingSection/>
    <TestimonialSection/>
    <Footer/>
    </>
  );
}

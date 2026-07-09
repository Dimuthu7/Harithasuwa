import { VisionMissionSection } from "./components/VisionMissionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ContactSection } from "./components/ContactSection";
import { HeroScrollHint } from "./components/HeroScrollHint";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { fonts } from "@/shared/constants/typography";

export function MarketingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: fonts.sans }}>
      <SiteHeader />
      <HeroSection />
      <HeroScrollHint />
      <VisionMissionSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

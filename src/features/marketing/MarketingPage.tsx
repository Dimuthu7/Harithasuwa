import { isSectionVisible, useSiteContent } from "@/content";
import { fonts } from "@/shared/constants/typography";
import { BenefitsSection } from "./components/BenefitsSection";
import { ContactSection } from "./components/ContactSection";
import { HeroScrollHint } from "./components/HeroScrollHint";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { VisionMissionSection } from "./components/VisionMissionSection";

export function MarketingPage() {
  const { content } = useSiteContent();
  const v = content.sectionVisibility;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground" style={{ fontFamily: fonts.sans }}>
      <SiteHeader />
      {isSectionVisible(v, "hero") ? (
        <>
          <HeroSection />
          <HeroScrollHint />
        </>
      ) : null}
      {isSectionVisible(v, "visionMission") ? <VisionMissionSection /> : null}
      {isSectionVisible(v, "products") ? <ProductsSection /> : null}
      {isSectionVisible(v, "benefits") ? <BenefitsSection /> : null}
      {isSectionVisible(v, "testimonials") ? <TestimonialsSection /> : null}
      {isSectionVisible(v, "contact") ? <ContactSection /> : null}
      <SiteFooter />
    </div>
  );
}

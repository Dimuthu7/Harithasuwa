import type { MarketingSectionId, NavItem, SectionVisibility, SiteContent } from "./types";

/** Maps nav scroll targets (`id="vision-mission"`) to sectionVisibility keys. */
export const navIdToSection: Record<string, MarketingSectionId> = {
  hero: "hero",
  "vision-mission": "visionMission",
  products: "products",
  benefits: "benefits",
  testimonials: "testimonials",
  contact: "contact",
};

export function isSectionVisible(visibility: SectionVisibility, section: MarketingSectionId): boolean {
  return visibility[section];
}

/** Nav / footer links for sections that are currently shown. */
export function getVisibleNavigation(content: SiteContent): NavItem[] {
  return content.navigation.filter((item) => {
    const section = navIdToSection[item.id];
    if (!section) return true;
    return isSectionVisible(content.sectionVisibility, section);
  });
}

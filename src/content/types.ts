/** CMS-ready content model — admin will edit these shapes via API later. */

export type BenefitIconId = "leaf" | "sprout" | "heart" | "shield";

export interface NavItem {
  id: string;
  label: string;
}

export interface BrandContent {
  title: string;
  titleShort: string;
  tagline: string;
  footerBlurb: string;
  copyright: string;
  footerTagline: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: string[];
  headlineAccentIndex: number;
  description: string[];
  quote: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { big: string; small: string }[];
  imageUrl: string;
  imageAlt: string;
  imageBadgeTitle: string;
  imageBadgeSubtitle: string;
}

export interface VisionMissionBlock {
  title: string;
  paragraphs: string[];
}

export interface VisionMissionContent {
  imageUrl: string;
  imageAlt: string;
  eyebrow: string;
  headlineLines: string[];
  headlineAccentLineIndex: number;
  vision: VisionMissionBlock;
  mission: VisionMissionBlock;
}

export interface ProductItem {
  id: string;
  name: string;
  sinhala: string;
  description: string;
  imageUrl: string;
  tag: string | null;
}

export interface ProductsSectionContent {
  topProdQuote: string;
  topProdDescription: string;
  eyebrow: string;
  headlineLines: string[];
  headlineAccentLineIndex: number;
  description: string;
  weights: string[];
  defaultWeight: string;
  enjoyTitle: string;
  enjoyItems: { title: string; body: string }[];
}

export interface BenefitItem {
  icon: BenefitIconId;
  title: string;
  body: string;
}

export interface BenefitsSectionContent {
  eyebrow: string;
  headlineLines: string[];
  items: BenefitItem[];
  storageTip: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  body: string;
  stars: number;
}

export interface TestimonialsSectionContent {
  eyebrow: string;
  headlineLines: string[];
  headlineAccentLineIndex: number;
  items: TestimonialItem[];
}

export type ContactFieldName = "name" | "phone" | "address";

export interface ContactField {
  label: string;
  type: "text" | "tel" | "email";
  placeholder: string;
  name: ContactFieldName;
}

export interface ContactDetail {
  label: string;
  value: string;
}

export interface OrderBullet {
  title: string;
  body: string;
}

export interface ContactSectionContent {
  eyebrow: string;
  headlineLines: string[];
  headlineAccentLineIndex: number;
  orderBullets: OrderBullet[];
  contactDetails: ContactDetail[];
  /** Inbox for order form submissions (server must allow this address via CONTACT_RECIPIENT_EMAIL). */
  recipientEmail: string;
  formTitle: string;
  formFields: ContactField[];
  orderDetailsLabel: string;
  orderDetailsPlaceholder: string;
  orderDetailsHint: string;
  submitLabel: string;
  formFooter: string;
}

export type FooterSocialPlatform = "facebook" | "whatsapp";

export interface FooterSocialLink {
  platform: FooterSocialPlatform;
  label: string;
  href: string;
}

export interface FooterContent {
  socialLinks: FooterSocialLink[];
  storageNote: string;
}

export interface SiteContent {
  brand: BrandContent;
  navigation: NavItem[];
  orderCtaLabel: string;
  hero: HeroContent;
  visionMission: VisionMissionContent;
  products: ProductItem[];
  productsSection: ProductsSectionContent;
  benefits: BenefitsSectionContent;
  testimonials: TestimonialsSectionContent;
  contact: ContactSectionContent;
  footer: FooterContent;
}

import type { SiteContent } from "./types";
import { localSiteImages } from "./localImages";

/** Default Harithasuwa content — replace or merge via API when admin CMS is live. */
export const defaultSiteContent: SiteContent = {
  brand: {
    title: "හරිතසුව නිෂ්පාදන · Harithasuwa Products",
    titleShort: "හරිතසුව · Harithasuwa",
    tagline: "හරිතසුව Dehydrated Banana",
    footerBlurb:
      "Dehydrated banana from naturally ripened Sri Lankan varieties. 100% natural. No additives. Made to order.",
    copyright: "© 2024 Harithasuwa · හරිතසුව. All rights reserved.",
    footerTagline: "Sri Lanka · Haritha (Green) + Suwa (Healing) = Natural Healing",
  },
  navigation: [
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "products", label: "Products" },
    { id: "benefits", label: "Benefits" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ],
  orderCtaLabel: "Order Now",
  hero: {
    eyebrow: "100% Natural · No Additives",
    headlineLines: ["Green", "Healing,", "Naturally."],
    headlineAccentIndex: 1,
    description: [
      "100% natural dehydrated fruit — made to order, delivered cash on delivery. We start with Sri Lankan banana varieties and are growing into more local fruits.",
      "Scroll down for our vision and mission — why Harithasuwa exists and what we are building toward.",
    ],
    quote: "Let us make the world a better place, one natural snack at a time.",
    primaryCta: "Shop Products",
    secondaryCta: "Vision & Mission",
    stats: [
      { big: "Zero", small: "Additives" },
      { big: "COD", small: "Delivery" },
      { big: "Make to", small: "Order" },
    ],
    imageUrl: localSiteImages.hero,
    imageAlt: "Rows of dehydrated banana slices",
    imageBadgeTitle: "Pure Banana",
    imageBadgeSubtitle: "Nothing Added · Ever",
  },
  visionMission: {
    imageUrl: localSiteImages.visionMission,
    imageAlt: "Harithasuwa — natural Sri Lankan fruit from home gardens",
    eyebrow: "Vision & Mission",
    headlineLines: ["Green Healing", "for Sri Lanka"],
    headlineAccentLineIndex: 0,
    vision: {
      title: "Our Vision",
      paragraphs: [
        "Harithasuwa means green healing — haritha (natural, green) and suwa (healing) in Sinhala. We envision a Sri Lanka where traditional, chemical-free fruit and produce from home gardens is valued again — nourishing families, supporting growers, and healing people and land through honest green food.",
      ],
    },
    mission: {
      title: "Our Mission",
      paragraphs: [
        "To make 100% natural dehydrated fruit — naturally ripened, with no sugar, preservatives, or added flavours — sourced only from home gardens we know and trust. We begin with Sri Lankan banana (embul, seeni, and rathambala) and plan to add more local fruits as we grow.",
        "To promote traditional varieties, wholesome eating, home gardening, and food security — expanding over time into additional fruits, vegetables, and heirloom rice while keeping the same no-additives promise in everything we offer.",
      ],
    },
  },
  products: [
    {
      id: "embul",
      name: "Embul Banana",
      sinhala: "එඹුල් කෙසෙල්",
      description:
        "The classic sour variety — intensely flavoured with a gentle tang. Naturally ripened, dehydrated to chewy perfection. No sugar, no additives.",
      imageUrl: localSiteImages.products.embul,
      tag: "Bestseller",
    },
    {
      id: "seeni",
      name: "Seeni Banana",
      sinhala: "සීනි කෙසෙල්",
      description:
        "The beloved sugar banana — naturally sweet and soft when dehydrated. A favourite for those who prefer a gentler, milder flavour.",
      imageUrl: localSiteImages.products.seeni,
      tag: null,
    },
    {
      id: "rathambala",
      name: "Rathambala",
      sinhala: "රතඹල",
      description:
        "A rare Sri Lankan heirloom variety with a distinct reddish hue and rich, complex flavour profile unlike any other banana you have tasted.",
      imageUrl: localSiteImages.products.rathambala,
      tag: "Rare Variety",
    },
  ],
  productsSection: {
    topProdQuote: "Taste like no other",
    topProdDescription: "Dehydrated banana made from naturally ripened Sri Lankan varieties — embul, seeni, and rathambala. No sugar. No preservatives. No added flavours. Just banana.",
    eyebrow: "හරිතසුව නිෂ්පාදන · Harithasuwa Products",
    headlineLines: ["Three Varieties of", "Dehydrated Banana"],
    headlineAccentLineIndex: 1,
    description:
      "Naturally ripened Sri Lankan bananas — each variety with its own distinct flavour. Ready to eat as a snack, as a dessert, or mixed with any breakfast cereal. A fruitful and delicious experience",
    weights: ["80g", "100g", "150g", "200g"],
    defaultWeight: "100g",
    enjoyTitle: "Three Ways to Enjoy",
    enjoyItems: [
      {
        title: "As a Snack",
        body: "Carry a pouch anywhere — no mess, no fuss. A handful satisfies naturally.",
      },
      {
        title: "As a Dessert",
        body: "Serve alongside curd, yoghurt, or ice cream for an effortless natural dessert.",
      },
      {
        title: "With Breakfast Cereal",
        body: "Mix into oats, granola, or muesli for a fruity, chewy morning boost.",
      },
    ],
  },
  benefits: {
    eyebrow: "Why Harithasuwa",
    headlineLines: ["Honest Food.", "Nothing Hidden."],
    items: [
      {
        icon: "leaf",
        title: "100% Natural",
        body: "No artificial sugars, preservatives, flavours or colours. Ever. What you taste is what grew on the tree.",
      },
      {
        icon: "sprout",
        title: "Chemical-Free Farms",
        body: "We source only from known home gardens that use no chemical fertilisers or pesticides. We visit them ourselves.",
      },
      {
        icon: "heart",
        title: "All Natural Goodness",
        body: "Dehydrating retains all the natural goodness of fresh banana — vitamins, minerals, fibre — in a convenient, shelf-stable form. Vaccume packed.",
      },
      {
        icon: "shield",
        title: "Made to Order",
        body: "We produce only after you order, ensuring the freshest possible product reaches your doorstep every single time.",
      },
    ],
    storageTip:
      "Once opened, store in an airtight container away from direct sunlight to retain freshness and crunch.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    headlineLines: ["A Fruitful & Delicious", "Experience"],
    headlineAccentLineIndex: 1,
    items: [
      {
        id: "priya",
        name: "Priya Weerasinghe",
        role: "Yoga instructor, Colombo",
        body: "I pack Harithasuwa chips for every retreat. My students love that they are genuinely clean-label. The embul variety has an incredible depth of flavour.",
        stars: 5,
      },
      {
        id: "mihail",
        name: "Mihail Perera",
        role: "Marathon runner, Kandy",
        body: "Perfect natural fuel. No crash, no artificial sweetness. The rathambala is something else — I have never tasted anything quite like it.",
        stars: 5,
      },
      {
        id: "anusha",
        name: "Anusha Fernando",
        role: "Nutritionist, Galle",
        body: "I recommend Harithasuwa to clients who want a snack that does not compromise a clean diet. Knowing it comes from chemical-free home gardens makes all the difference.",
        stars: 5,
      },
    ],
  },
  contact: {
    eyebrow: "Order Direct",
    headlineLines: ["Delivered to Your", "Doorstep"],
    headlineAccentLineIndex: 1,
    orderBullets: [
      {
        title: "Cash on Delivery (COD) within Sri Lanka",
        body: "pay only when your order arrives at your door.",
      },
      {
        title: "Made to Order",
        body: "we produce only after you place an order, so you receive the freshest possible product.",
      },
      {
        title: "Delivery within 2 weeks",
        body: "island-wide delivery across Sri Lanka. Outside Sri Lanka 6-8 weeks",
      },
      {
        title: "Sizes available:",
        body: "80g, 100g, 150g, or 200g — choose the quantity of each size per variety.",
      },
      {
        title: "Vacuum packing",
        body: "Can be kept for more than 6 months.", 
      }
    ],
    contactDetails: [
      { label: "Email", value: "hello@harithasuwa.lk" },
      { label: "Phone / WhatsApp", value: "+94 77 176 4939" },
      { label: "Location", value: "Sri Lanka · Island-wide Delivery" },
    ],
    recipientEmail: "hello@harithasuwa.lk",
    formTitle: "Place an Order",
    formFields: [
      { label: "Your Name", type: "text", placeholder: "Kasun Rajapaksa", name: "name" },
      { label: "Phone / WhatsApp", type: "tel", placeholder: "+94 77 000 0000", name: "phone" },
      { label: "Delivery Address", type: "text", placeholder: "No. 42, Peradeniya Road, Kandy", name: "address" },
    ],
    orderDetailsLabel: "Order Details",
    orderDetailsPlaceholder: "e.g. Embul 100g × 2, Seeni 150g × 1, Rathambala 80g × 2",
    orderDetailsHint: "Specify variety, weight (80g / 100g / 150g / 200g) and quantity for each.",
    submitLabel: "Send Order",
    formFooter: "Cash on Delivery · Delivered within 2 weeks · Island-wide Sri Lanka",
  },
  footer: {
    socialLinks: [
      {
        platform: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61568428235852",
      },
      {
        platform: "whatsapp",
        label: "WhatsApp",
        href: "https://wa.me/94771764939",
      },
    ],
    storageNote: "Once opened, store in an airtight container, away from direct sunlight.",
  },
};

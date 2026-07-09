/**
 * Paths for images in `public/images/`. Vite serves `public/` from the site root,
 * so `public/images/hero.jpg` is referenced as `/images/hero.jpg`.
 */
export const localSiteImages = {
  hero: "/images/hero.jpg",
  visionMission: "/images/vision-mission.jpg",
  products: {
    embul: "/images/products/embul.jpg",
    seeni: "/images/products/seeni.jpg",
    rathambala: "/images/products/rathambala.jpg",
  },
} as const;

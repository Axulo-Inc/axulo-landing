export const siteConfig = {
  name: "Axulo Technologies",
  description:
    "Axulo Technologies builds secure, scalable platforms for decentralized intelligence and modern AI-native products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://axulo-landing.vercel.app",
  ogImage:
    process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
    "https://axulo-landing.vercel.app/og-image.jpg",
  xHandle: "@axulo_tech",
};

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
  hotjarVersion: process.env.NEXT_PUBLIC_HOTJAR_VERSION ?? "6",
};

function readPublicEnv(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export const checkoutUrls = {
  starter: readPublicEnv("NEXT_PUBLIC_GUMROAD_STARTER"),
  pro: readPublicEnv("NEXT_PUBLIC_GUMROAD_PRO"),
  full: readPublicEnv("NEXT_PUBLIC_GUMROAD_FULL"),
} as const;

export type TierId = keyof typeof checkoutUrls;

export const supportEmail = readPublicEnv("NEXT_PUBLIC_SUPPORT_EMAIL");

export const siteUrl =
  readPublicEnv("NEXT_PUBLIC_SITE_URL") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const product = {
  name: "Web Designer Client Close Pack",
  shortName: "Client Close Pack",
  tagline:
    "Website proposal, pricing, and follow-up templates for freelance designers.",
};

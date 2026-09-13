import { checkoutUrls, type TierId } from "./checkout";

export { checkoutUrls };
export type { TierId };

function readPublicEnv(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export const supportEmail = readPublicEnv("NEXT_PUBLIC_SUPPORT_EMAIL");

export const siteUrl =
  readPublicEnv("NEXT_PUBLIC_SITE_URL") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.GITHUB_PAGES === "true"
        ? "https://rccoleman19.github.io/web-designer-client-pack"
        : "http://localhost:3000");

export const product = {
  name: "Web Designer Client Close Pack",
  shortName: "Client Close Pack",
  tagline:
    "Website proposal, pricing, and follow-up templates for freelance designers.",
};

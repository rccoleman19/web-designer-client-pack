/**
 * Checkout URLs for the three pack tiers.
 *
 * Static export (`output: "export"`) bakes these in at `npm run build`.
 * Prefer, in this order:
 *  1. NEXT_PUBLIC_GUMROAD_* env vars (local `.env.local`, Vercel, or
 *     GitHub Actions variables)
 *  2. The hardcoded strings below — paste live Gumroad URLs here in a
 *     follow-up commit if you are not using env vars
 *  3. In-page anchors so the buttons still land on the matching card
 */

function fromEnv(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

/** Paste a Gumroad URL, or leave empty until you have one. */
const HARD_SET_STARTER = "";
const HARD_SET_PRO = "";
const HARD_SET_FULL = "";

export const CHECKOUT_STARTER =
  fromEnv("NEXT_PUBLIC_GUMROAD_STARTER") || HARD_SET_STARTER || "#buy-starter";

export const CHECKOUT_PRO =
  fromEnv("NEXT_PUBLIC_GUMROAD_PRO") || HARD_SET_PRO || "#buy-pro";

export const CHECKOUT_FULL =
  fromEnv("NEXT_PUBLIC_GUMROAD_FULL") || HARD_SET_FULL || "#buy-full";

export const checkoutUrls = {
  starter: CHECKOUT_STARTER,
  pro: CHECKOUT_PRO,
  full: CHECKOUT_FULL,
} as const;

export type TierId = keyof typeof checkoutUrls;

export function checkoutHref(id: TierId): string {
  return checkoutUrls[id];
}

export function checkoutIsLive(id: TierId): boolean {
  return /^https?:\/\//i.test(checkoutUrls[id]);
}

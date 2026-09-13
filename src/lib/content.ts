import { checkoutUrls, type TierId } from "./config";

export type { TierId };

export const tiers: {
  id: TierId;
  name: string;
  price: number;
  forWho: string;
  featured?: boolean;
  includes: string[];
}[] = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    forWho: "You only need the quote documents.",
    includes: [
      "Website project proposal template",
      "Three-package pricing sheet (Landing / Multi-page / Redesign) plus add-ons",
      "README and how-to for filling the brackets",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    forWho: "You also want the SOW and the email sequence.",
    featured: true,
    includes: [
      "Everything in Starter",
      "Statement of work template (parties, deliverables, payments, IP, cancellation)",
      "Four follow-up emails: inquiry reply, proposal sent, 3-day nudge, 7-day last call",
    ],
  },
  {
    id: "full",
    name: "Full",
    price: 79,
    forWho: "Templates plus a filled example and a checklist.",
    includes: [
      "Everything in Pro",
      "Pre-send checklist",
      "Filled proposal, pricing, SOW, and emails for a fictional bakery redesign",
      "Draft landing-page copy if you list the pack later",
    ],
  },
];

export function checkoutHref(id: TierId): string {
  return checkoutUrls[id] || `#buy-${id}`;
}

export function checkoutIsLive(id: TierId): boolean {
  return /^https?:\/\//i.test(checkoutUrls[id]);
}

export const filesInside = [
  {
    name: "Proposal template",
    detail:
      "Cover, understanding, page/feature scope, timeline, investment, exclusions, next steps, signature block.",
  },
  {
    name: "Pricing sheet",
    detail:
      "Landing Page, Multi-page Site, and Redesign packages, plus SEO, CMS training, extra pages, and rush add-ons.",
  },
  {
    name: "Statement of work",
    detail:
      "Parties, deliverables, milestones, payments, revisions, IP, cancellation, signatures.",
  },
  {
    name: "Four emails",
    detail: "Inquiry reply, proposal sent, 3-day nudge, 7-day last call.",
  },
  {
    name: "Pre-send checklist",
    detail: "A short pass before you hit send.",
  },
  {
    name: "Filled examples",
    detail:
      "One fictional bakery redesign — proposal, pricing, SOW, and emails — so you can see the brackets filled.",
  },
];

export const steps = [
  "Download the folder for your tier.",
  "Copy the templates into a folder named for the lead.",
  "Replace every bracketed field.",
  "If you have Full, run the pre-send checklist.",
  "Send. Use the emails in order if they go quiet.",
];

export const faq = [
  {
    q: "Do you refund?",
    a: "These are digital goods. No refunds after download. If a file is missing or will not open, write within 7 days of purchase and I will replace the file.",
  },
  {
    q: "Will this get me more clients or more revenue?",
    a: "No claim is made about clients, close rate, or income. This is a set of documents. Results depend on your work, your prices, and the leads you already have.",
  },
  {
    q: "Is the statement of work legal advice?",
    a: "No. It is a working draft. Have a lawyer in your state review payment, revisions, intellectual property, and cancellation before you use it with paying clients.",
  },
  {
    q: "Can I put my studio name on the templates?",
    a: "Yes. That is the point. Replace the brackets and send them as yours.",
  },
  {
    q: "Are the bakery files a real project?",
    a: "No. Hearth & Crumb Bakery and the dollar amounts are labeled examples so you can see a completed proposal. Do not show them as your past work.",
  },
  {
    q: "What format are the files?",
    a: "Markdown. Open them in any text editor, Notion, Google Docs, or a Markdown-to-PDF tool you already use.",
  },
  {
    q: "Do I need a special platform?",
    a: "No. The templates are platform-agnostic. You fill in WordPress, Webflow, Squarespace, or static HTML where the field asks for [PLATFORM].",
  },
  {
    q: "Can I use this if I am not in the United States?",
    a: "The language is US English and the SOW assumes a US-style independent-contractor setup. If you work under another country’s rules, have local counsel adapt the SOW. The proposal, pricing sheet, emails, and checklist still work as drafts.",
  },
];

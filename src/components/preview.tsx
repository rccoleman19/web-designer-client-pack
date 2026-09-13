"use client";

import { useState } from "react";

const tabs = [
  { id: "proposal", label: "Proposal" },
  { id: "pricing", label: "Pricing" },
  { id: "email", label: "Email C" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function SamplePreview() {
  const [tab, setTab] = useState<TabId>("proposal");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sample documents"
        className="mb-4 flex flex-wrap gap-2"
      >
        {tabs.map((item) => {
          const selected = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`tab-${item.id}`}
              aria-controls={`panel-${item.id}`}
              onClick={() => setTab(item.id)}
              className={`rounded-sm border px-3 py-1.5 text-xs font-medium tracking-wide uppercase ${
                selected
                  ? "border-ink bg-ink text-cream"
                  : "border-rule bg-cream text-ink-soft hover:border-ink/40"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="doc-shadow relative overflow-hidden rounded-sm border border-rule bg-cream">
        <p className="stamp pointer-events-none absolute top-6 right-5 z-10 border-2 border-rust px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-rust uppercase">
          Example
        </p>
        <div className="border-b border-rule px-5 py-3 font-mono text-[11px] text-ink-soft">
          Hearth &amp; Crumb Bakery · fictional · Hale Studio
        </div>

        {tab === "proposal" ? <ProposalExcerpt /> : null}
        {tab === "pricing" ? <PricingExcerpt /> : null}
        {tab === "email" ? <EmailExcerpt /> : null}
      </div>
    </div>
  );
}

function ProposalExcerpt() {
  return (
    <article
      id="panel-proposal"
      role="tabpanel"
      aria-labelledby="tab-proposal"
      className="space-y-4 px-5 py-6 text-sm leading-relaxed text-ink md:px-8"
    >
      <header className="font-serif">
        <p className="text-xs tracking-wide text-ink-soft uppercase">
          Website Project Proposal
        </p>
        <h3 className="mt-1 text-2xl">Hearth &amp; Crumb Bakery</h3>
        <p className="mt-2 text-xs text-ink-soft">
          Redesign · WD-2026-041 · valid through September 22, 2026
        </p>
      </header>
      <p>
        A redesigned 8-page website on WordPress (block theme) that makes hours,
        the current menu, and catering inquiries obvious on a phone — and lets
        Maya update those items without writing code.
      </p>
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-rule text-ink-soft">
            <th className="py-2 font-medium">Item</th>
            <th className="py-2 font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-rule/70">
            <td className="py-2">Redesign package (8 pages)</td>
            <td className="py-2">$6,400</td>
          </tr>
          <tr className="border-b border-rule/70">
            <td className="py-2">On-page SEO pass</td>
            <td className="py-2">$550</td>
          </tr>
          <tr>
            <td className="py-2">CMS training (45-minute call)</td>
            <td className="py-2">$200</td>
          </tr>
          <tr className="border-t border-ink/30 font-medium">
            <td className="py-2">Project total</td>
            <td className="py-2">$7,150</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-ink-soft">
        Names and prices are made up so you can see a completed file. They are
        not a case study and not a market rate.
      </p>
    </article>
  );
}

function PricingExcerpt() {
  return (
    <article
      id="panel-pricing"
      role="tabpanel"
      aria-labelledby="tab-pricing"
      className="space-y-4 px-5 py-6 text-sm leading-relaxed md:px-8"
    >
      <h3 className="font-serif text-2xl">Three packages on the sheet</h3>
      <ul className="space-y-3">
        <li className="border-b border-rule/70 pb-3">
          <p className="font-medium">Landing Page — $2,200</p>
          <p className="text-xs text-ink-soft">
            Not recommended here. A single page would hide the menu and catering
            path they asked for.
          </p>
        </li>
        <li className="border-b border-rule/70 pb-3">
          <p className="font-medium">Multi-page Site — $4,800</p>
          <p className="text-xs text-ink-soft">
            Not selected. They already have live URLs and copy to move.
          </p>
        </li>
        <li>
          <p className="font-medium">Redesign — $6,400 ← selected</p>
          <p className="text-xs text-ink-soft">
            Eight pages, redirects, catering form. Add-ons bring the quote to
            $7,150.
          </p>
        </li>
      </ul>
    </article>
  );
}

function EmailExcerpt() {
  return (
    <article
      id="panel-email"
      role="tabpanel"
      aria-labelledby="tab-email"
      className="space-y-3 px-5 py-6 text-sm leading-relaxed md:px-8"
    >
      <p className="font-mono text-[11px] text-ink-soft">
        Subject: Checking in on the Hearth &amp; Crumb Bakery proposal
      </p>
      <p>Hi Maya,</p>
      <p>
        Quick check-in on the redesign proposal I sent on September 8.
      </p>
      <p>
        I am still able to start the week of September 29 if we sign by
        September 22. After that I will put the next lead on that slot.
      </p>
      <p>
        If the scope is close but not quite right, tell me what to cut or add. A
        shorter page list is a common fix.
      </p>
      <p className="text-ink-soft">Jordan Hale · Hale Studio</p>
    </article>
  );
}

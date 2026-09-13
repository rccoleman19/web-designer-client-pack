#!/usr/bin/env node
/**
 * Assembles zip-ready tier folders and .zip archives under public/downloads/.
 * Run: npm run build:packs
 */
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outRoot = join(root, "public", "downloads");

/** @type {Record<string, { name: string, price: number, files: Record<string, string> }>} */
const tiers = {
  starter: {
    name: "Starter",
    price: 29,
    files: {
      "templates/01-proposal.md": "templates/01-proposal.md",
      "templates/04-pricing-sheet.md": "templates/04-pricing-sheet.md",
    },
  },
  pro: {
    name: "Pro",
    price: 49,
    files: {
      "templates/01-proposal.md": "templates/01-proposal.md",
      "templates/02-sow.md": "templates/02-sow.md",
      "templates/03-follow-up-emails.md": "templates/03-follow-up-emails.md",
      "templates/04-pricing-sheet.md": "templates/04-pricing-sheet.md",
    },
  },
  full: {
    name: "Full",
    price: 79,
    files: {
      "templates/01-proposal.md": "templates/01-proposal.md",
      "templates/02-sow.md": "templates/02-sow.md",
      "templates/03-follow-up-emails.md": "templates/03-follow-up-emails.md",
      "templates/04-pricing-sheet.md": "templates/04-pricing-sheet.md",
      "templates/05-pre-send-checklist.md": "templates/05-pre-send-checklist.md",
      "examples/filled-proposal-example.md": "examples/filled-proposal-example.md",
      "examples/filled-pricing-example.md": "examples/filled-pricing-example.md",
      "examples/filled-sow-example.md": "examples/filled-sow-example.md",
      "examples/filled-follow-up-emails-example.md":
        "examples/filled-follow-up-emails-example.md",
      "site/landing-copy.md": "extras/landing-copy.md",
    },
  },
};

function packReadme(id) {
  const tier = tiers[id];
  const fileList = Object.values(tier.files)
    .map((dest) => `- \`${dest}\``)
    .join("\n");

  const extra =
    id === "starter"
      ? [
          "You have the quote documents only.",
          "",
          "Upgrade later if you want the statement of work, follow-up emails, filled bakery examples, or the pre-send checklist.",
        ].join("\n")
      : id === "pro"
        ? [
            "You have the quote documents plus the statement of work and four follow-up emails.",
            "",
            "Upgrade to Full if you want the filled bakery examples and the pre-send checklist.",
          ].join("\n")
        : [
            "You have the full pack: templates, four filled bakery examples, the pre-send checklist, and draft landing-page copy.",
            "",
            "The bakery files are labeled examples. Do not present them as your past work.",
          ].join("\n");

  return `# Web Designer Client Close Pack — ${tier.name}

Fill-in templates for solo freelance web designers who sell website builds and redesigns. Copy a file, replace the \`[BRACKETS]\`, and send.

This pack is a document kit. It does not promise more clients, higher close rates, or any particular income.

**Tier:** ${tier.name} ($${tier.price} USD)

${extra}

## Files in this download

${fileList}
- \`README.md\` — this file
- \`LICENSE-USE.md\` — what you may do with the files
- \`HOW-TO.md\` — suggested workflow

## How to use

1. Make a folder for the lead: \`[CLIENT NAME] — [PROJECT TYPE]\`.
2. Copy the templates you need into that folder.
3. Replace every \`[BRACKET]\` field. Do not leave placeholders in a client-facing file.
${id === "full" ? "4. Run \`templates/05-pre-send-checklist.md\`.\n" : ""}5. Send the proposal. Attach or paste the pricing sheet if you want packages side by side.
${id === "starter" ? "6. When they accept, write or send your own agreement, then start after the deposit clears.\n" : "6. Use the emails in order: inquiry reply → proposal sent → nudge (~3 days) → last call (~7 days).\n7. If they accept, fill \`templates/02-sow.md\`, collect signatures, then start after the deposit clears.\n"}
Suggested first-week workflow:

- Day 0: reply to the inquiry (Email A)
- Day 1–2: discovery call, then send proposal (Email B)
- Day 4–5: soft nudge if no reply (Email C)
- Day 8–9: last call (Email D)

Adjust dates to match the valid-through date on the proposal.

## How the templates are written

- US English
- Short paragraphs
- Fields look like \`[CLIENT NAME]\`, \`[PRICE]\`, \`[START DATE]\`
- Commercial tone. No hype about results.

## What this pack is not

These are working drafts, not legal advice. Have a lawyer review the statement of work — especially payment, revisions, intellectual property, and cancellation — before you use it with paying clients. Requirements vary by state.

This pack does not include contracts beyond the SOW draft, tax advice, or hosting/legal disclaimers for the sites you build.

## Format

Markdown. Open the files in any text editor, Notion, Google Docs, or a Markdown-to-PDF tool you already use. The templates are platform-agnostic — fill in WordPress, Webflow, Squarespace, or static HTML where a field asks for \`[PLATFORM]\`.
`;
}

function howTo(id) {
  return `# How to fill and send

1. Duplicate the template. Do not edit the original if you want a clean copy next time.
2. Search for \`[\` and replace every field. If a row or add-on does not apply, delete it.
3. Check that the package name, page count, and total match across the proposal${id === "starter" ? " and pricing sheet" : ", pricing sheet, and SOW"}.
4. Export to PDF or share a link. Send from your own email address.
${id === "starter" ? "" : "5. Load Email B the day you send. Set reminders for Email C (~3 days) and Email D (~7 days).\n"}${id === "full" ? "6. Tick every item on \`templates/05-pre-send-checklist.md\` before you hit send.\n" : ""}
Do not promise traffic, search rank, leads, or revenue. Do not present the bakery examples as a case study.
`;
}

function copyFile(fromRel, destAbs) {
  const fromAbs = join(root, fromRel);
  if (!existsSync(fromAbs)) {
    throw new Error(`Missing source file: ${fromRel}`);
  }
  mkdirSync(dirname(destAbs), { recursive: true });
  cpSync(fromAbs, destAbs);
}

function zipFolder(folder, zipPath) {
  const result = spawnSync(
    "zip",
    ["-r", "-q", zipPath, "."],
    { cwd: folder, stdio: "inherit" },
  );
  if (result.status !== 0) {
    throw new Error(`zip failed for ${zipPath} (is the zip CLI installed?)`);
  }
}

rmSync(outRoot, { recursive: true, force: true });
mkdirSync(outRoot, { recursive: true });

for (const [id, tier] of Object.entries(tiers)) {
  const folder = join(outRoot, id);
  mkdirSync(folder, { recursive: true });

  for (const [fromRel, destRel] of Object.entries(tier.files)) {
    copyFile(fromRel, join(folder, destRel));
  }

  writeFileSync(join(folder, "README.md"), packReadme(id));
  writeFileSync(join(folder, "HOW-TO.md"), howTo(id));
  cpSync(join(root, "LICENSE-USE.md"), join(folder, "LICENSE-USE.md"));

  zipFolder(folder, join(outRoot, `${id}.zip`));
  console.log(`Built ${id} → public/downloads/${id}/ and ${id}.zip`);
}

writeFileSync(
  join(outRoot, "README.md"),
  `# Pack downloads

Zip-ready folders and archives generated by \`npm run build:packs\`.

| Tier | Folder | Archive | Intended Gumroad product |
|------|--------|---------|--------------------------|
| Starter ($29) | \`starter/\` | \`starter.zip\` | \`NEXT_PUBLIC_GUMROAD_STARTER\` |
| Pro ($49) | \`pro/\` | \`pro.zip\` | \`NEXT_PUBLIC_GUMROAD_PRO\` |
| Full ($79) | \`full/\` | \`full.zip\` | \`NEXT_PUBLIC_GUMROAD_FULL\` |

Upload the matching \`.zip\` to each Gumroad product. Rebuild after you edit files under \`templates/\` or \`examples/\`.
`,
);

console.log("Packs ready in public/downloads/");

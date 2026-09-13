#!/usr/bin/env node
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const downloads = join(root, "public", "downloads");

const required = {
  starter: [
    "README.md",
    "HOW-TO.md",
    "LICENSE-USE.md",
    "templates/01-proposal.md",
    "templates/04-pricing-sheet.md",
  ],
  pro: [
    "README.md",
    "HOW-TO.md",
    "LICENSE-USE.md",
    "templates/01-proposal.md",
    "templates/02-sow.md",
    "templates/03-follow-up-emails.md",
    "templates/04-pricing-sheet.md",
  ],
  full: [
    "README.md",
    "HOW-TO.md",
    "LICENSE-USE.md",
    "templates/01-proposal.md",
    "templates/02-sow.md",
    "templates/03-follow-up-emails.md",
    "templates/04-pricing-sheet.md",
    "templates/05-pre-send-checklist.md",
    "examples/filled-proposal-example.md",
    "examples/filled-pricing-example.md",
    "examples/filled-sow-example.md",
    "examples/filled-follow-up-emails-example.md",
    "extras/landing-copy.md",
  ],
};

const starterMustNotHave = [
  "templates/02-sow.md",
  "templates/03-follow-up-emails.md",
  "templates/05-pre-send-checklist.md",
  "examples/filled-proposal-example.md",
];

const proMustNotHave = [
  "templates/05-pre-send-checklist.md",
  "examples/filled-proposal-example.md",
];

let failed = 0;

function requirePath(rel) {
  const abs = join(downloads, rel);
  if (!existsSync(abs)) {
    console.error(`missing: public/downloads/${rel}`);
    failed += 1;
  }
}

function forbidPath(rel) {
  const abs = join(downloads, rel);
  if (existsSync(abs)) {
    console.error(`should not be in this tier: public/downloads/${rel}`);
    failed += 1;
  }
}

for (const [tier, files] of Object.entries(required)) {
  requirePath(`${tier}.zip`);
  for (const file of files) {
    requirePath(join(tier, file));
  }
}

for (const file of starterMustNotHave) {
  forbidPath(join("starter", file));
}
for (const file of proMustNotHave) {
  forbidPath(join("pro", file));
}

if (failed > 0) {
  console.error(`\nPack verification failed (${failed} issue${failed === 1 ? "" : "s"}). Run npm run build:packs first.`);
  process.exit(1);
}

console.log("Pack verification passed. Starter, Pro, and Full folders + zips are complete.");

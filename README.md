# Web Designer Client Close Pack

Fill-in templates for solo freelance web designers who sell website builds and redesigns. Copy a file, replace the `[BRACKETS]`, and send.

This pack is a document kit. It does not promise more clients, higher close rates, or any particular income.

The repo also has a Next.js marketing site you can deploy to a free `*.vercel.app` URL, plus a script that builds zip-ready folders for each paid tier.

## Who it is for

Freelancers who quote:

- New landing pages
- Multi-page marketing sites
- Website redesigns for small and local businesses

If you already have a discovery call process and need a clean way to write the proposal, price, and follow-up, start here.

## What’s in each tier

### Starter — $29

Proposal template and pricing sheet.

- `templates/01-proposal.md` — full project proposal
- `templates/04-pricing-sheet.md` — three packages plus add-ons
- This README

### Pro — $49

Everything in Starter, plus a statement of work and four follow-up emails.

- `templates/02-sow.md` — parties, deliverables, payments, IP, cancellation
- `templates/03-follow-up-emails.md` — inquiry reply, proposal sent, 3-day nudge, 7-day last call

### Full — $79

Everything in Pro, plus filled bakery examples, a pre-send checklist, and draft landing-page copy.

- `templates/05-pre-send-checklist.md` — checks before you hit send
- `examples/filled-proposal-example.md` — sample redesign proposal (not a real client)
- `examples/filled-pricing-example.md` — sample pricing for the same bakery
- `examples/filled-sow-example.md` — sample SOW for the same bakery
- `examples/filled-follow-up-emails-example.md` — sample emails for the same bakery
- `site/landing-copy.md` — draft sales-page copy (the live page reads from the same claims)

## How to use the templates

1. Make a folder for the lead: `[CLIENT NAME] — [PROJECT TYPE]`.
2. Copy the templates you need into that folder.
3. Replace every `[BRACKET]` field. Do not leave placeholders in a client-facing file.
4. If you have the Full pack, run `templates/05-pre-send-checklist.md`.
5. Send the proposal. Attach or paste the pricing sheet if you want packages side by side.
6. Use the emails in order: inquiry reply → proposal sent → nudge (~3 days) → last call (~7 days).
7. If they accept, fill `templates/02-sow.md`, collect signatures, then start after the deposit clears.

Suggested first-week workflow:

- Day 0: reply to the inquiry (Email A)
- Day 1–2: discovery call, then send proposal (Email B)
- Day 4–5: soft nudge if no reply (Email C)
- Day 8–9: last call (Email D)

Adjust dates to match the valid-through date on the proposal.

## How the templates are written

- US English
- Short paragraphs
- Fields look like `[CLIENT NAME]`, `[PRICE]`, `[START DATE]`
- Commercial tone. No hype about results.

The filled examples use made-up numbers for a fictional bakery. They are labeled as examples. Do not present them as your past work.

## What this pack is not

These are working drafts, not legal advice. Have a lawyer review the statement of work — especially payment, revisions, intellectual property, and cancellation — before you use it with paying clients. Requirements vary by state.

This pack does not include contracts beyond the SOW draft, tax advice, or hosting/legal disclaimers for the sites you build.

## File map

```
web-designer-client-pack/
  README.md
  LICENSE-USE.md
  .env.example
  templates/
    01-proposal.md
    02-sow.md
    03-follow-up-emails.md
    04-pricing-sheet.md
    05-pre-send-checklist.md
  examples/
    filled-proposal-example.md
    filled-pricing-example.md
    filled-sow-example.md
    filled-follow-up-emails-example.md
  site/
    landing-copy.md
  src/                      # Next.js marketing site
  scripts/
    build-packs.mjs         # assembles public/downloads/{starter,pro,full}
    verify-packs.mjs
  public/downloads/         # zip-ready folders + .zip files (generated)
```

## Build the three tier packs

From the repo root:

```bash
npm install
npm run build:packs
npm run verify:packs
```

This writes zip-ready folders and archives:

| Tier | Folder | Upload this zip to Gumroad |
|------|--------|----------------------------|
| Starter ($29) | `public/downloads/starter/` | `public/downloads/starter.zip` |
| Pro ($49) | `public/downloads/pro/` | `public/downloads/pro.zip` |
| Full ($79) | `public/downloads/full/` | `public/downloads/full.zip` |

`npm run build` (including a Vercel build) runs `build:packs` first so the folders stay current.

The marketing page does not give the paid zips away. They are here so you can upload them to Gumroad, or host them yourself later.

## Marketing site — local

```bash
npm install
cp .env.example .env.local
# paste Gumroad URLs into .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Buy buttons read the env vars below. If a URL is missing, the button stays on the page (`#buy-starter`, `#buy-pro`, `#buy-full`) until you set it — no second code pass.

## Where to set Gumroad URLs

Create one Gumroad product per tier and paste the checkout URLs here:

| Env var | Tier | Typical Gumroad URL |
|---------|------|---------------------|
| `NEXT_PUBLIC_GUMROAD_STARTER` | Starter $29 | `https://yourname.gumroad.com/l/your-starter-id` |
| `NEXT_PUBLIC_GUMROAD_PRO` | Pro $49 | `https://yourname.gumroad.com/l/your-pro-id` |
| `NEXT_PUBLIC_GUMROAD_FULL` | Full $79 | `https://yourname.gumroad.com/l/your-full-id` |

Optional:

| Env var | What it does |
|---------|----------------|
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Shown in the FAQ refund answer and footer |
| `NEXT_PUBLIC_SITE_URL` | Canonical / Open Graph base URL (otherwise Vercel’s URL is used) |

Do not put Gumroad secrets, API keys, or webhook signing secrets in this repo. Checkout links are public by design. Use `.env.local` locally (gitignored) and Vercel env vars in production. `.env.example` lists the names only.

## Deploy to Vercel (free `*.vercel.app`)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com), click **Add New… → Project** and import the repo.
3. Framework preset: **Next.js**. Root directory: repo root. Build command: `npm run build`. Output: default (leave empty).
4. Open **Settings → Environment Variables** and add, for Production, Preview, and Development:
   - `NEXT_PUBLIC_GUMROAD_STARTER`
   - `NEXT_PUBLIC_GUMROAD_PRO`
   - `NEXT_PUBLIC_GUMROAD_FULL`
   - `NEXT_PUBLIC_SUPPORT_EMAIL` (optional)
   - `NEXT_PUBLIC_SITE_URL` (optional; e.g. `https://your-project.vercel.app`)
5. Deploy. Vercel assigns a `https://<project>.vercel.app` URL.
6. Redeploy after you change env vars so `NEXT_PUBLIC_*` values are baked into the client.

CLI alternative if the Vercel CLI is installed and you are logged in:

```bash
npm i -g vercel
vercel env add NEXT_PUBLIC_GUMROAD_STARTER
vercel env add NEXT_PUBLIC_GUMROAD_PRO
vercel env add NEXT_PUBLIC_GUMROAD_FULL
vercel
```

No paid Vercel plan is required for this site.

## License for your use

You bought this pack for your own freelance practice. You may edit the templates, put your name on them, and send them to your clients.

Do not resell the raw pack files as your own product unless you have a separate license that says you can.

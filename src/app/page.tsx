import { BuyButton } from "@/components/buy-button";
import { SamplePreview } from "@/components/preview";
import { supportEmail } from "@/lib/config";
import { faq, filesInside, steps, tiers } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="letter-grid min-h-screen">
      <a
        href="#packs"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to packs
      </a>

      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4 px-5 py-4 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink uppercase">
            Client Close Pack
          </p>
          <nav className="flex items-center gap-5 font-mono text-[11px] tracking-wide text-ink-soft uppercase">
            <a href="#preview" className="hover:text-ink">
              Sample
            </a>
            <a href="#packs" className="hover:text-ink">
              Packs
            </a>
            <a href="#faq" className="hover:text-ink">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.18em] text-rust uppercase">
            For solo freelance web designers
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] text-balance sm:text-5xl md:text-6xl">
            Website proposal, pricing, and follow-up templates for freelance
            designers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            A fill-in pack for people who sell site builds and redesigns. Copy
            the files, replace the brackets, and send. No revenue claims. No
            “close more clients” pitch.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BuyButton tier="pro">Get Pro — $49</BuyButton>
            <a
              href="#preview"
              className="inline-flex items-center justify-center rounded-sm border border-ink/20 bg-cream px-4 py-2.5 text-sm font-medium text-ink hover:border-ink/50"
            >
              Preview a sample
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-ink-soft">
            $29 / $49 / $79 · Digital download · Markdown · No refunds after
            download
          </p>
        </section>

        <section
          id="audience"
          className="border-y border-ink/10 bg-paper-deep/50"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="font-serif text-3xl">Who it is for</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                You design and build websites on your own. You already take
                discovery calls. You need a clean proposal, a three-package
                price sheet, a statement of work, and four short follow-up
                emails — without starting from a blank page.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden>
                    —
                  </span>
                  A one-page landing site
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden>
                    —
                  </span>
                  A new multi-page marketing site
                </li>
                <li className="flex gap-2">
                  <span className="text-rust" aria-hidden>
                    —
                  </span>
                  A redesign of a live small-business site
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl">Who it is not for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>Developers who only bill hourly and never send a fixed-scope proposal.</li>
                <li>
                  People looking for lead lists, ads, or a “done for you” client
                  pipeline.
                </li>
                <li>
                  Anyone who wants a lawyer-signed contract for their state —
                  see the FAQ.
                </li>
                <li>
                  Agencies that already have a sales team and a legal
                  department.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="inside" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-soft uppercase">
            What’s inside
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            The documents, not a coaching program.
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            US English. Commercial tone. Fields look like{" "}
            <code className="font-mono text-[13px] text-ink">[CLIENT NAME]</code>{" "}
            and <code className="font-mono text-[13px] text-ink">[PRICE]</code>.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filesInside.map((file, index) => (
              <article
                key={file.name}
                className="rounded-sm border border-rule bg-cream/80 p-5"
              >
                <p className="font-mono text-[11px] text-rust">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-xl">{file.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {file.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="preview"
          className="border-y border-ink/10 bg-ink text-cream"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-[1fr_1.15fr] md:px-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cream/60 uppercase">
                Sample preview
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                One fictional bakery, fully filled.
              </h2>
              <p className="mt-4 leading-relaxed text-cream/75">
                Full includes a completed proposal, pricing sheet, statement of
                work, and the four emails for “Hearth &amp; Crumb Bakery.” The
                shop, the designer, and the dollar amounts are made up so you
                can see every bracket replaced.
              </p>
              <p className="mt-4 text-sm text-cream/60">
                Do not show these files as your past work.
              </p>
            </div>
            <SamplePreview />
          </div>
        </section>

        <section id="packs" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-soft uppercase">
            Three tiers
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Start with the documents you will actually send.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.id}
                id={`buy-${tier.id}`}
                className={`flex flex-col rounded-sm border p-6 ${
                  tier.featured
                    ? "border-rust bg-cream doc-shadow"
                    : "border-rule bg-cream/70"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl">{tier.name}</h3>
                  <p className="font-mono text-sm">${tier.price}</p>
                </div>
                {tier.featured ? (
                  <p className="mt-2 font-mono text-[11px] tracking-wide text-rust uppercase">
                    Proposal + SOW + emails
                  </p>
                ) : null}
                <p className="mt-3 text-sm text-ink-soft">{tier.forWho}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rust" aria-hidden>
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <BuyButton
                    tier={tier.id}
                    variant={tier.featured ? "solid" : "outline"}
                    className="w-full"
                  >
                    Buy {tier.name} — ${tier.price}
                  </BuyButton>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Checkout opens Gumroad in a new tab once the product URLs are set.
            Digital goods. No refunds after download.
          </p>
        </section>

        <section className="border-y border-ink/10 bg-paper-deep/40">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="font-serif text-3xl">After you buy</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-5">
              {steps.map((step, index) => (
                <li key={step} className="rounded-sm border border-rule bg-cream p-4">
                  <p className="font-mono text-[11px] text-rust">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink-soft">
              You keep the edited files for your own clients. Do not resell the
              raw pack unless your license says you can.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="font-serif text-3xl">FAQ</h2>
          <div className="mt-8 divide-y divide-rule border-y border-rule">
            {faq.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span
                      aria-hidden
                      className="font-mono text-ink-soft group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.q === "Do you refund?" && supportEmail
                    ? `${item.a} Email ${supportEmail}.`
                    : item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-ink-soft md:flex-row md:items-start md:justify-between md:px-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-ink uppercase">
              Client Close Pack
            </p>
            <p className="mt-2 max-w-md">
              Digital goods. No refunds after download. No guarantee of clients,
              revenue, or project outcomes. Templates are not a law firm product
              and are not a substitute for legal advice. Example names and
              prices are fictional.
            </p>
          </div>
          <div className="space-y-1">
            <p>
              <a href="#packs" className="hover:text-ink">
                Starter $29 · Pro $49 · Full $79
              </a>
            </p>
            {supportEmail ? (
              <p>
                Questions before you buy:{" "}
                <a href={`mailto:${supportEmail}`} className="text-ink underline">
                  {supportEmail}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </footer>
    </div>
  );
}

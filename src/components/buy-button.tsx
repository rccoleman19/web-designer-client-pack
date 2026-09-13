import { checkoutHref, checkoutIsLive, type TierId } from "@/lib/content";

type Props = {
  tier: TierId;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function BuyButton({
  tier,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const href = checkoutHref(tier);
  const live = checkoutIsLive(tier);

  const look =
    variant === "solid"
      ? "bg-rust text-cream hover:bg-rust-deep"
      : variant === "outline"
        ? "border border-ink/20 bg-cream text-ink hover:border-ink/50"
        : "text-ink underline decoration-rule underline-offset-4 hover:decoration-ink";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-medium transition ${look} ${className}`}
      {...(live
        ? { target: "_blank", rel: "noopener noreferrer" }
        : { "aria-disabled": true })}
    >
      {children}
    </a>
  );
}

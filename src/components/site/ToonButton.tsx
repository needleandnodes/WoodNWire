import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export const toonButton = cva(
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wide border-[3px] border-ink rounded-full shadow-hard transition-[transform,box-shadow] duration-150 hover-squash active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/40 disabled:opacity-60",
  {
    variants: {
      variant: {
        red: "bg-chili text-cream",
        sun: "bg-sun text-ink",
        cream: "bg-cream text-ink",
        ink: "bg-ink text-sun",
      },
      size: { sm: "px-4 py-1.5 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg md:text-xl" },
    },
    defaultVariants: { variant: "red", size: "md" },
  },
);

type V = VariantProps<typeof toonButton>;

export function ToonLink({ className, variant, size, ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & V) {
  return <a className={cn(toonButton({ variant, size }), className)} {...p} />;
}
export function ToonButton({ className, variant, size, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & V) {
  return <button className={cn(toonButton({ variant, size }), className)} {...p} />;
}

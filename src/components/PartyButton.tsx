import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

export function PartyLinkButton(props: LinkProps & { children: ReactNode }) {
  return (
    <Link
      {...props}
      className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-primary-foreground shadow-[var(--shadow-party)] transition-transform hover:scale-105 active:scale-95 animate-pulse-glow"
      style={{ background: "var(--gradient-party)" }}
    >
      {props.children}
    </Link>
  );
}

export function PartyButton({
  children,
  ...rest
}: ComponentProps<"button"> & { children: ReactNode }) {
  return (
    <button
      {...rest}
      className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-primary-foreground shadow-[var(--shadow-party)] transition-transform hover:scale-105 active:scale-95 animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ background: "var(--gradient-party)" }}
    >
      {children}
    </button>
  );
}
import React from "react";

export type ButtonVariant = "solid" | "outline";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  label: string;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "solid",
  className = "",
  label,
  icon,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    solid: "bg-[var(--primary)] text-[var(--text)]",
    outline:
      "bg-[var(--bg)] text-[var(--primary)] border border-[var(--primary)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
